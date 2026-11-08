import { __exportAll } from "./ssr.mjs";
import { and, count, desc, eq, inArray, like, notInArray, or } from "../_libs/drizzle-orm.mjs";
import { db, post } from "./schema-B6Pq5ts5.mjs";
import { getUuid } from "./hash-ZEFczJfC.mjs";
// node_modules/.nitro/vite/services/ssr/assets/service-BIGz5FfO.js
var service_exports = /* @__PURE__ */ __exportAll({
	PostType: () => PostType,
	create: () => create,
	findPublishedBySlug: () => findPublishedBySlug,
	getById: () => getById,
	list: () => list,
	listPublishedArticles: () => listPublishedArticles,
	remove: () => remove,
	update: () => update
});
var PostType = /* @__PURE__ */ function(PostType) {
	PostType["ARTICLE"] = "article";
	PostType["PAGE"] = "page";
	PostType["LOG"] = "log";
	/** Paid guest post (src/modules/guest-posts); managed there, not here. */
	PostType["GUEST"] = "guest";
	return PostType;
}({});
/** Types the public blog shows at /blog/<slug>. */
var BLOG_TYPES = ["article", "guest"];
async function list(params) {
	const { type, excludeTypes, status, search, page = 1, pageSize = 10 } = params;
	const offset = (page - 1) * pageSize;
	const conditions = [];
	if (type) conditions.push(eq(post.type, type));
	if (excludeTypes?.length) conditions.push(notInArray(post.type, excludeTypes));
	if (status) conditions.push(eq(post.status, status));
	if (search) conditions.push(or(like(post.title, `%${search}%`), like(post.slug, `%${search}%`)));
	const where = conditions.length > 0 ? and(...conditions) : void 0;
	const [totalResult] = await db().select({ count: count() }).from(post).where(where);
	const total = totalResult.count;
	return {
		items: await db().select({
			id: post.id,
			slug: post.slug,
			type: post.type,
			title: post.title,
			description: post.description,
			image: post.image,
			categories: post.categories,
			authorName: post.authorName,
			status: post.status,
			createdAt: post.createdAt,
			updatedAt: post.updatedAt
		}).from(post).where(where).orderBy(desc(post.updatedAt), desc(post.createdAt)).limit(pageSize).offset(offset),
		total
	};
}
async function listPublishedArticles(params = {}) {
	const { limit = 100 } = params;
	return db().select({
		id: post.id,
		slug: post.slug,
		title: post.title,
		description: post.description,
		image: post.image,
		authorName: post.authorName,
		authorImage: post.authorImage,
		createdAt: post.createdAt,
		type: post.type
	}).from(post).where(and(inArray(post.type, BLOG_TYPES), eq(post.status, "published"))).orderBy(desc(post.createdAt)).limit(limit);
}
async function findPublishedBySlug(slug) {
	const [result] = await db().select().from(post).where(and(eq(post.slug, slug.toLowerCase()), inArray(post.type, BLOG_TYPES), eq(post.status, "published"))).limit(1);
	return result;
}
async function getById(id) {
	const [result] = await db().select().from(post).where(eq(post.id, id)).limit(1);
	return result;
}
async function create(data) {
	const newPost = {
		id: getUuid(),
		userId: data.userId,
		slug: data.slug.toLowerCase(),
		type: "article",
		title: data.title,
		description: data.description || "",
		image: data.image || "",
		content: data.content || "",
		categories: data.categories || "",
		authorName: data.authorName || "",
		status: data.status || "draft"
	};
	const [result] = await db().insert(post).values(newPost).returning();
	return result;
}
async function update(id, data) {
	const updateData = { ...data };
	if (updateData.slug) updateData.slug = updateData.slug.toLowerCase();
	const [result] = await db().update(post).set(updateData).where(eq(post.id, id)).returning();
	return result;
}
async function remove(id) {
	await db().update(post).set({ status: "archived" }).where(eq(post.id, id));
}
export { PostType, create, getById, list, remove, service_exports, update };
