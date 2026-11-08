import { __exportAll } from "./ssr.mjs";
import { getPricingProduct } from "./pricing-wSm2a3Lf.mjs";
import { and, count, desc, eq, inArray, ne, or, sql } from "../_libs/drizzle-orm.mjs";
import { db, guestPost, order, post, user } from "./schema-B6Pq5ts5.mjs";
import { AtomicGuardError, atomic, guard } from "./atomic-DfJrMsO5.mjs";
import { getUuid } from "./hash-ZEFczJfC.mjs";
import { MarkdownIt } from "../_libs/markdown-it+mdurl+punycode.js.mjs";
// node_modules/.nitro/vite/services/ssr/assets/service-BckqfvjL.js
var linkParser = new MarkdownIt({
	html: false,
	linkify: true
});
/**
* External (http/https) links in a markdown body, including bare URLs that
* linkify turns into links. A link whose text is its own URL counts once;
* images and code don't count.
*/
function extractExternalLinks(markdown) {
	const links = [];
	for (const block of linkParser.parse(markdown || "", {})) for (const token of block.children ?? []) {
		if (token.type !== "link_open") continue;
		const href = token.attrGet("href") || "";
		if (/^https?:\/\//i.test(href)) links.push(href);
	}
	return links;
}
/** Words for Latin text plus one per CJK character. */
function countWords(markdown) {
	const text = (markdown || "").replace(/[#>*_`~\-[\]()!|]/g, " ");
	return (text.match(/[\u3400-\u9fff\uf900-\ufaff]/g)?.length ?? 0) + (text.replace(/[\u3400-\u9fff\uf900-\ufaff]/g, " ").match(/[\p{L}\p{N}]+/gu)?.length ?? 0);
}
/**
* Keyword filter for admin list search: case-insensitive substring match on
* `contains` columns, exact match on `exact` columns (ids). Portable across
* SQLite/Postgres/MySQL (lower() + LIKE with an explicit `!` escape char, so
* `%`/`_` in the keyword are literal). Returns undefined for a blank keyword.
*/
function keywordMatch(keyword, columns) {
	const term = keyword?.trim();
	if (!term) return void 0;
	const pattern = `%${term.toLowerCase().replace(/[!%_]/g, "!$&")}%`;
	return or(...(columns.contains ?? []).map((col) => sql`lower(${col}) like ${pattern} escape '!'`), ...(columns.exact ?? []).map((col) => eq(col, term)));
}
var service_exports = /* @__PURE__ */ __exportAll({
	GUEST_POST_LIMITS: () => GUEST_POST_LIMITS,
	GUEST_POST_TYPE: () => GUEST_POST_TYPE,
	GuestPostError: () => GuestPostError,
	GuestPostStatus: () => GuestPostStatus,
	SLUG_LIMITS: () => SLUG_LIMITS,
	adminEditGuestPost: () => adminEditGuestPost,
	countWords: () => countWords,
	createGuestPost: () => createGuestPost,
	deleteGuestPost: () => deleteGuestPost,
	extractExternalLinks: () => extractExternalLinks,
	findGuestPostBySlug: () => findGuestPostBySlug,
	getGuestPost: () => getGuestPost,
	getGuestPostPackage: () => getGuestPostPackage,
	getPayableGuestPost: () => getPayableGuestPost,
	guestPostOrderReference: () => guestPostOrderReference,
	listGuestPosts: () => listGuestPosts,
	listUserGuestPosts: () => listUserGuestPosts,
	normalizeSlug: () => normalizeSlug,
	planGuestPostFulfillment: () => planGuestPostFulfillment,
	planGuestPostRefund: () => planGuestPostRefund,
	restoreGuestPost: () => restoreGuestPost,
	reviewGuestPost: () => reviewGuestPost,
	setRejectionNote: () => setRejectionNote,
	unpublishGuestPost: () => unpublishGuestPost,
	updateGuestPost: () => updateGuestPost,
	validateForReview: () => validateForReview
});
/**
* Guest posts: outside authors write an article and pay for it, which
* submits it for review; an admin then publishes it, asks for changes (the
* author resubmits without paying again) or rejects it, which refunds.
*
* The body lives in `post` (type 'guest'), kept in 'draft' until published,
* so the blog never shows an unreviewed article. Status changes are
* conditional writes (atomic + guard) so two reviewers, or a review racing an
* edit, can't both win. Money moves only through the payment flow:
* planGuestPostFulfillment() submits a paid draft, planGuestPostRefund()
* rejects (or takes down) the submission a refunded order paid for.
*/
var GUEST_POST_TYPE = "guest";
var GuestPostStatus = /* @__PURE__ */ function(GuestPostStatus) {
	GuestPostStatus["DRAFT"] = "draft";
	GuestPostStatus["SUBMITTED"] = "submitted";
	GuestPostStatus["CHANGES_REQUESTED"] = "changes_requested";
	GuestPostStatus["PUBLISHED"] = "published";
	GuestPostStatus["REJECTED"] = "rejected";
	GuestPostStatus["UNPUBLISHED"] = "unpublished";
	return GuestPostStatus;
}({});
/** The author may edit in these states. */
var EDITABLE = ["draft", "changes_requested"];
var GUEST_POST_LIMITS = {
	title: 200,
	description: 500,
	content: 5e4,
	url: 2048,
	reviewNote: 2e3
};
var GuestPostError = class extends Error {};
/** The guest post package for `productId`, or null if it isn't one. */
function getGuestPostPackage(productId) {
	const product = getPricingProduct(productId);
	return product?.kind === "guest_post" ? product : null;
}
function isSafeImageUrl(url) {
	if (url.length > GUEST_POST_LIMITS.url) return false;
	if (url.startsWith("/") && !url.startsWith("//")) return true;
	return /^https?:\/\//i.test(url);
}
/** Normalized fields, or a GuestPostError. Length/URL checks only. */
function cleanInput(input) {
	const title = (input.title || "").trim();
	const description = (input.description || "").trim();
	const image = (input.image || "").trim();
	const content = input.content || "";
	if (!title) throw new GuestPostError("Title is required");
	if (title.length > GUEST_POST_LIMITS.title) throw new GuestPostError("Title is too long");
	if (description.length > GUEST_POST_LIMITS.description) throw new GuestPostError("Summary is too long");
	if (content.length > GUEST_POST_LIMITS.content) throw new GuestPostError("Article is too long");
	if (image && !isSafeImageUrl(image)) throw new GuestPostError("Invalid cover image URL");
	return {
		title,
		description,
		image,
		content
	};
}
/**
* Checks before an article enters review (on payment or resubmit): length
* and the package's link cap.
*/
function validateForReview(input, pkg, opts) {
	const clean = cleanInput(input);
	const words = countWords(clean.content);
	if (words < opts.minWords) throw new GuestPostError(`The article needs at least ${opts.minWords} words (now ${words})`);
	const links = extractExternalLinks(clean.content).length;
	const maxLinks = pkg.maxLinks ?? 0;
	if (links > maxLinks) throw new GuestPostError(`This package allows ${maxLinks} external link(s); the article has ${links}`);
	return clean;
}
var SLUG_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
var SLUG_LIMITS = {
	min: 3,
	max: 80
};
/**
* A chosen slug in canonical form (lowercase, hyphens), or null when left
* empty. Throws when it can't be a clean URL segment.
*/
function normalizeSlug(raw) {
	const slug = (raw || "").trim().toLowerCase().replace(/[\s_]+/g, "-").replace(/-+/g, "-").replace(/^-|-$/g, "");
	if (!slug) return null;
	if (!SLUG_RE.test(slug) || slug.length < SLUG_LIMITS.min || slug.length > SLUG_LIMITS.max) throw new GuestPostError(`The URL slug may only use lowercase letters, numbers and hyphens (${SLUG_LIMITS.min}–${SLUG_LIMITS.max} characters)`);
	return slug;
}
async function slugTaken(slug, exceptPostId) {
	const [row] = await db().select({ id: post.id }).from(post).where(eq(post.slug, slug)).limit(1);
	return !!row && row.id !== exceptPostId;
}
async function assertSlugAvailable(slug, exceptPostId) {
	if (await slugTaken(slug, exceptPostId)) throw new GuestPostError("This URL slug is already taken");
}
/** Slug from the title; a random suffix only if that one is taken. */
async function slugFromTitle(title) {
	const base = title.toLowerCase().normalize("NFKD").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 60).replace(/-+$/g, "");
	const suffix = () => getUuid().replace(/-/g, "").slice(0, 6);
	if (base.length < SLUG_LIMITS.min) return `guest-${suffix()}`;
	return await slugTaken(base) ? `${base}-${suffix()}` : base;
}
/** The unique index on post.slug caught a race the lookup missed. */
function slugRace(e) {
	const text = String(e?.message ?? e) + String(e?.cause ?? "");
	if (/unique|duplicate/i.test(text) && /slug/i.test(text)) throw new GuestPostError("This URL slug is already taken");
	throw e;
}
function rethrow(e) {
	if (e instanceof AtomicGuardError) throw new GuestPostError(e.message);
	slugRace(e);
}
var listColumns = {
	id: guestPost.id,
	postId: guestPost.postId,
	productId: guestPost.productId,
	status: guestPost.status,
	reviewNote: guestPost.reviewNote,
	orderNo: guestPost.orderNo,
	submittedAt: guestPost.submittedAt,
	publishedAt: guestPost.publishedAt,
	createdAt: guestPost.createdAt,
	updatedAt: guestPost.updatedAt,
	title: post.title,
	slug: post.slug
};
async function page(where, { page = 1, pageSize = 20 }, withUser = false) {
	const [{ total }] = await db().select({ total: count() }).from(guestPost).innerJoin(post, eq(post.id, guestPost.postId)).leftJoin(user, eq(user.id, guestPost.userId)).where(where);
	return {
		items: await db().select({
			...listColumns,
			...withUser ? {
				userId: guestPost.userId,
				userName: user.name,
				userEmail: user.email,
				userAvatar: user.image
			} : {}
		}).from(guestPost).innerJoin(post, eq(post.id, guestPost.postId)).leftJoin(user, eq(user.id, guestPost.userId)).where(where).orderBy(desc(guestPost.updatedAt)).limit(pageSize).offset((page - 1) * pageSize),
		total
	};
}
function listUserGuestPosts(userId, opts = {}) {
	return page(and(eq(guestPost.userId, userId), opts.status ? eq(guestPost.status, opts.status) : void 0, keywordMatch(opts.search, { contains: [post.title] })), opts);
}
function listGuestPosts(opts = {}) {
	return page(and(ne(guestPost.status, "draft"), opts.status ? eq(guestPost.status, opts.status) : void 0, keywordMatch(opts.search, {
		contains: [
			post.title,
			user.email,
			user.name
		],
		exact: [guestPost.id, guestPost.orderNo]
	})), opts, true);
}
/** Submission plus its article. `userId` restricts to the owner. */
async function getGuestPost(id, userId) {
	const [row] = await db().select({
		submission: guestPost,
		post: {
			id: post.id,
			slug: post.slug,
			title: post.title,
			description: post.description,
			image: post.image,
			content: post.content,
			status: post.status
		},
		userName: user.name,
		userEmail: user.email,
		userAvatar: user.image,
		orderStatus: order.status
	}).from(guestPost).innerJoin(post, eq(post.id, guestPost.postId)).leftJoin(user, eq(user.id, guestPost.userId)).leftJoin(order, eq(order.orderNo, guestPost.orderNo)).where(and(eq(guestPost.id, id), userId ? eq(guestPost.userId, userId) : void 0)).limit(1);
	return row ?? null;
}
/** A guest post's article by slug in any state, with its author, for previews. */
async function findGuestPostBySlug(slug) {
	const [row] = await db().select({
		post,
		authorId: guestPost.userId,
		guestPostId: guestPost.id,
		status: guestPost.status,
		productId: guestPost.productId
	}).from(post).innerJoin(guestPost, eq(guestPost.postId, post.id)).where(and(eq(post.slug, slug.toLowerCase()), eq(post.type, GUEST_POST_TYPE))).limit(1);
	return row ?? null;
}
async function createGuestPost(params) {
	if (!getGuestPostPackage(params.productId)) throw new GuestPostError("Unknown package");
	const clean = cleanInput(params.input);
	const chosen = normalizeSlug(params.input.slug);
	if (chosen) await assertSlugAvailable(chosen);
	const slug = chosen ?? await slugFromTitle(clean.title);
	const postId = getUuid();
	const id = getUuid();
	await atomic((q) => [q.insert(post).values({
		id: postId,
		userId: params.userId,
		slug,
		type: GUEST_POST_TYPE,
		title: clean.title,
		description: clean.description,
		image: clean.image,
		content: clean.content,
		authorName: params.authorName,
		authorImage: params.authorImage || "",
		status: "draft"
	}), q.insert(guestPost).values({
		id,
		userId: params.userId,
		postId,
		productId: params.productId,
		status: "draft"
	})]).catch(slugRace);
	return id;
}
/**
* Edit. `resubmit` sends a changes-requested (already paid) submission back
* to review; a draft enters review only by paying (see checkout). The package
* can change only while unpaid.
*/
async function updateGuestPost(params) {
	const existing = await getGuestPost(params.id, params.userId);
	if (!existing) throw new GuestPostError("Not found");
	const status = existing.submission.status;
	if (!EDITABLE.includes(status)) throw new GuestPostError("This submission can no longer be edited");
	if (params.resubmit && status !== "changes_requested") throw new GuestPostError("Pay to submit this article for review");
	const productId = status === "draft" ? params.productId : existing.submission.productId;
	const pkg = getGuestPostPackage(productId);
	if (!pkg) throw new GuestPostError("Unknown package");
	const clean = params.resubmit ? validateForReview(params.input, pkg, { minWords: params.minWords }) : cleanInput(params.input);
	const slug = normalizeSlug(params.input.slug) ?? existing.post.slug;
	if (slug !== existing.post.slug) await assertSlugAvailable(slug, existing.post.id);
	try {
		await atomic((q) => [
			guard({
				table: guestPost,
				column: "userId",
				where: eq(guestPost.id, params.id),
				require: eq(guestPost.status, status),
				message: "This submission can no longer be edited"
			}),
			q.update(post).set({
				slug,
				title: clean.title,
				description: clean.description,
				image: clean.image,
				content: clean.content
			}).where(eq(post.id, existing.post.id)),
			q.update(guestPost).set({
				productId,
				...params.resubmit ? {
					status: "submitted",
					submittedAt: /* @__PURE__ */ new Date()
				} : {}
			}).where(eq(guestPost.id, params.id))
		]);
	} catch (e) {
		rethrow(e);
	}
}
async function deleteGuestPost(id, userId) {
	const existing = await getGuestPost(id, userId);
	if (!existing) throw new GuestPostError("Not found");
	if (existing.submission.status !== "draft") throw new GuestPostError("Only unpaid drafts can be deleted");
	try {
		await atomic((q) => [guard({
			table: guestPost,
			column: "userId",
			where: eq(guestPost.id, id),
			require: eq(guestPost.status, "draft"),
			message: "Only unpaid drafts can be deleted"
		}), q.delete(post).where(eq(post.id, existing.post.id))]);
	} catch (e) {
		rethrow(e);
	}
}
/**
* The draft and its package, checked for review, if the author may pay for
* it now. Paying submits it.
*/
async function getPayableGuestPost(id, userId, opts) {
	const existing = await getGuestPost(id, userId);
	if (!existing) throw new GuestPostError("Not found");
	if (existing.submission.status !== "draft") throw new GuestPostError("This submission is already paid");
	const pkg = getGuestPostPackage(existing.submission.productId);
	if (!pkg) throw new GuestPostError("Unknown package");
	validateForReview({
		title: existing.post.title || "",
		description: existing.post.description || "",
		image: existing.post.image || "",
		content: existing.post.content || ""
	}, pkg, opts);
	return {
		...existing,
		pkg
	};
}
var REFERENCE_PREFIX = "guest_post:";
/** order.reference for a checkout that pays for this submission. */
function guestPostOrderReference(guestPostId) {
	return `${REFERENCE_PREFIX}${guestPostId}`;
}
/**
* Approve (publishes at once) or ask for changes. Rejecting refunds, so it
* goes through the payment flow instead (see the admin reject handler).
*/
async function reviewGuestPost(params) {
	const existing = await getGuestPost(params.id);
	if (!existing) throw new GuestPostError("Not found");
	const note = (params.note || "").trim().slice(0, GUEST_POST_LIMITS.reviewNote);
	if (params.action === "request_changes" && !note) throw new GuestPostError("Tell the author what to change");
	const claim = guard({
		table: guestPost,
		column: "userId",
		where: eq(guestPost.id, params.id),
		require: eq(guestPost.status, "submitted"),
		message: "Only submissions awaiting review can be reviewed"
	});
	const now = /* @__PURE__ */ new Date();
	try {
		if (params.action === "approve") await atomic((q) => [
			claim,
			q.update(guestPost).set({
				status: "published",
				reviewNote: note || null,
				publishedAt: now
			}).where(eq(guestPost.id, params.id)),
			q.update(post).set({
				status: "published",
				createdAt: now
			}).where(eq(post.id, existing.post.id))
		]);
		else await atomic((q) => [claim, q.update(guestPost).set({
			status: "changes_requested",
			reviewNote: note
		}).where(eq(guestPost.id, params.id))]);
	} catch (e) {
		rethrow(e);
	}
	return existing;
}
/** Record why a refunded submission was rejected (after the refund). */
async function setRejectionNote(id, note) {
	await db().update(guestPost).set({ reviewNote: note.trim().slice(0, GUEST_POST_LIMITS.reviewNote) || null }).where(and(eq(guestPost.id, id), eq(guestPost.status, "rejected")));
}
/**
* Admin fixes to the article, slug included. Any state; edits a published
* one live (a new slug breaks its old URL; the UI warns first).
*/
async function adminEditGuestPost(id, input) {
	const existing = await getGuestPost(id);
	if (!existing) throw new GuestPostError("Not found");
	const clean = cleanInput(input);
	const slug = normalizeSlug(input.slug) ?? existing.post.slug;
	if (slug !== existing.post.slug) await assertSlugAvailable(slug, existing.post.id);
	const pkg = getGuestPostPackage(existing.submission.productId);
	const links = extractExternalLinks(clean.content).length;
	if (pkg && links > (pkg.maxLinks ?? 0)) throw new GuestPostError(`This package allows ${pkg.maxLinks} external link(s); the article has ${links}`);
	await db().update(post).set({
		slug,
		title: clean.title,
		description: clean.description,
		image: clean.image,
		content: clean.content
	}).where(eq(post.id, existing.post.id)).catch(slugRace);
}
/** Take a published guest post down (stays paid; refund separately). */
async function unpublishGuestPost(id, note) {
	const existing = await getGuestPost(id);
	if (!existing) throw new GuestPostError("Not found");
	try {
		await atomic((q) => [
			guard({
				table: guestPost,
				column: "userId",
				where: eq(guestPost.id, id),
				require: eq(guestPost.status, "published"),
				message: "Only published guest posts can be unpublished"
			}),
			q.update(guestPost).set({
				status: "unpublished",
				reviewNote: (note || "").trim().slice(0, GUEST_POST_LIMITS.reviewNote) || null
			}).where(eq(guestPost.id, id)),
			q.update(post).set({ status: "archived" }).where(eq(post.id, existing.post.id))
		]);
	} catch (e) {
		rethrow(e);
	}
}
/**
* Steps that submit the draft an order paid for, to bundle into the payment
* settlement's atomic write. Null when the order isn't for a guest post.
* A conditional update, not a guard: the payment must settle even if the
* draft was already paid by another order (an admin refunds the extra one).
*/
function planGuestPostFulfillment(o) {
	if (!o.reference?.startsWith(REFERENCE_PREFIX)) return null;
	const guestPostId = o.reference.slice(11);
	return {
		guestPostId,
		steps: (q) => [q.update(guestPost).set({
			status: "submitted",
			orderNo: o.orderNo,
			submittedAt: /* @__PURE__ */ new Date()
		}).where(and(eq(guestPost.id, guestPostId), eq(guestPost.status, "draft")))]
	};
}
/**
* Bring back a guest post that was taken down: republish it, or send it back
* to the author for changes (resubmitting stays free). Only while its order is
* still paid, so a refunded article never returns without payment.
*/
async function restoreGuestPost(params) {
	const existing = await getGuestPost(params.id);
	if (!existing) throw new GuestPostError("Not found");
	const note = (params.note || "").trim().slice(0, GUEST_POST_LIMITS.reviewNote);
	if (params.action === "request_changes" && !note) throw new GuestPostError("Tell the author what to change");
	const { orderNo } = existing.submission;
	if (!orderNo) throw new GuestPostError("This guest post was never paid");
	const steps = (q) => [
		guard({
			table: guestPost,
			column: "userId",
			where: eq(guestPost.id, params.id),
			require: eq(guestPost.status, "unpublished"),
			message: "Only unpublished guest posts can be restored"
		}),
		guard({
			table: order,
			column: "userId",
			where: eq(order.orderNo, orderNo),
			require: eq(order.status, "paid"),
			message: "Its order was refunded; it cannot be restored"
		}),
		...params.action === "republish" ? [q.update(guestPost).set({
			status: "published",
			reviewNote: note || null
		}).where(eq(guestPost.id, params.id)), q.update(post).set({ status: "published" }).where(eq(post.id, existing.post.id))] : [q.update(guestPost).set({
			status: "changes_requested",
			reviewNote: note
		}).where(eq(guestPost.id, params.id)), q.update(post).set({ status: "draft" }).where(eq(post.id, existing.post.id))]
	];
	try {
		await atomic(steps);
	} catch (e) {
		rethrow(e);
	}
	return existing;
}
/**
* Steps for a refunded order, bundled into the refund's atomic write: the
* submission it paid for is rejected, or taken down if already published.
* So a refund from the Payments page and "reject" here end the same way.
*/
function planGuestPostRefund(orderNo) {
	const paidBy = eq(guestPost.orderNo, orderNo);
	return (q) => [
		q.update(post).set({ status: "archived" }).where(sql`${post.id} in (select ${guestPost.postId} from ${guestPost} where ${guestPost.orderNo} = ${orderNo} and ${guestPost.status} = ${"published"})`),
		q.update(guestPost).set({ status: "unpublished" }).where(and(paidBy, eq(guestPost.status, "published"))),
		q.update(guestPost).set({ status: "rejected" }).where(and(paidBy, inArray(guestPost.status, ["submitted", "changes_requested"])))
	];
}
export { GuestPostError, GuestPostStatus, adminEditGuestPost, countWords, createGuestPost, deleteGuestPost, extractExternalLinks, getGuestPost, getPayableGuestPost, guestPostOrderReference, keywordMatch, listGuestPosts, listUserGuestPosts, planGuestPostFulfillment, planGuestPostRefund, restoreGuestPost, reviewGuestPost, service_exports, setRejectionNote, unpublishGuestPost, updateGuestPost };
