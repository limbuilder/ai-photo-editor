import { createServerFn } from "./ssr.mjs";
import { createServerRpc } from "./createServerRpc--Tf39wPN.mjs";
import { getLocalPosts, loadLocalPost, mergePosts } from "./posts-CGRdL7JR.mjs";
// node_modules/.nitro/vite/services/ssr/assets/server-COZZ_n_y.js
async function getDbPosts() {
	try {
		const { listPublishedArticles } = await import("./service-BIGz5FfO.mjs").then((n) => n.service_exports);
		return (await listPublishedArticles()).map((row) => ({
			slug: row.slug,
			title: row.title || row.slug,
			description: row.description || "",
			image: row.image || void 0,
			createdAt: new Date(row.createdAt).toISOString(),
			authorName: row.authorName || void 0,
			authorImage: row.authorImage || void 0,
			source: "db",
			sponsored: row.type === "guest"
		}));
	} catch {
		return [];
	}
}
/**
* All blog posts: database posts merged with local MDX posts,
* deduped by slug (database wins), newest first.
*/
var getBlogPostsFn_createServerFn_handler = createServerRpc({
	id: "139369ba08645c08201ff69bd24b596cdc0f7784b8b3ffd8c6a14f47bbeac9cf",
	name: "getBlogPostsFn",
	filename: "src/content/posts/server.ts"
}, (opts) => getBlogPostsFn.__executeServer(opts));
var getBlogPostsFn = createServerFn().validator((data) => data).handler(getBlogPostsFn_createServerFn_handler, async ({ data }) => {
	const dbPosts = await getDbPosts();
	return mergePosts(dbPosts, getLocalPosts(data.locale), { limit: data.limit });
});
var getBlogPostFn_createServerFn_handler = createServerRpc({
	id: "b19d1425e0192068330144e802eeba64d1a59e4653703cc76476349d6a195d71",
	name: "getBlogPostFn",
	filename: "src/content/posts/server.ts"
}, (opts) => getBlogPostFn.__executeServer(opts));
var getBlogPostFn = createServerFn().validator((data) => data).handler(getBlogPostFn_createServerFn_handler, async ({ data }) => {
	try {
		const { findPublishedBySlug } = await import("./service-BIGz5FfO.mjs").then((n) => n.service_exports);
		const row = await findPublishedBySlug(data.slug);
		if (row) return {
			slug: row.slug,
			title: row.title || row.slug,
			description: row.description || "",
			image: row.image || void 0,
			createdAt: new Date(row.createdAt).toISOString(),
			authorName: row.authorName || void 0,
			authorImage: row.authorImage || void 0,
			source: "db",
			sponsored: row.type === "guest",
			content: row.content || ""
		};
	} catch {}
	const mod = loadLocalPost(data.slug, data.locale);
	if (!mod) return null;
	const meta = mod.meta;
	return {
		slug: data.slug,
		title: meta.title,
		description: meta.description,
		image: meta.image,
		createdAt: new Date(meta.created_at).toISOString(),
		authorName: meta.author_name,
		authorImage: meta.author_image,
		source: "local"
	};
});
var getGuestPostsOpenFn_createServerFn_handler = createServerRpc({
	id: "88fd2e7085916258086537d7b4021af3c11a4839215b9f8e96494ba6421941b6",
	name: "getGuestPostsOpenFn",
	filename: "src/content/posts/server.ts"
}, (opts) => getGuestPostsOpenFn.__executeServer(opts));
var getGuestPostsOpenFn = createServerFn().handler(getGuestPostsOpenFn_createServerFn_handler, async () => {
	try {
		const { getAllConfigs } = await import("./service-DpHLlcDG.mjs").then((n) => n.service_exports);
		return (await getAllConfigs()).guest_post_enabled === "true";
	} catch {
		return false;
	}
});
var getBlogPreviewFn_createServerFn_handler = createServerRpc({
	id: "6d944fac8f0f3d5adb57e2b62ae4ef5c884b7683c00d352070843ce13c8bc74b",
	name: "getBlogPreviewFn",
	filename: "src/content/posts/server.ts"
}, (opts) => getBlogPreviewFn.__executeServer(opts));
var getBlogPreviewFn = createServerFn().validator((data) => data).handler(getBlogPreviewFn_createServerFn_handler, async ({ data }) => {
	try {
		const { getRequest } = await import("./ssr.mjs").then((n) => n.ssr_exports).then((n) => n.server_exports);
		const { getAuth } = await import("./auth-DaJ7zpRS.mjs").then((n) => n.auth_exports);
		const session = await getAuth().api.getSession({ headers: getRequest().headers });
		if (!session?.user) return null;
		const { findGuestPostBySlug } = await import("./service-BckqfvjL.mjs").then((n) => n.service_exports);
		const row = await findGuestPostBySlug(data.slug);
		if (!row) return null;
		if (row.authorId !== session.user.id) {
			const { hasPermission } = await import("./service-CFokm_ex.mjs").then((n) => n.service_exports);
			if (!await hasPermission(session.user.id, "admin.guest-posts.read")) return null;
		}
		const p = row.post;
		const { getPricingProduct } = await import("./pricing-wSm2a3Lf.mjs").then((n) => n.pricing_exports);
		const pkg = getPricingProduct(row.productId);
		const { getAllConfigs } = await import("./service-DpHLlcDG.mjs").then((n) => n.service_exports);
		const { guestPostSettings } = await import("./settings-GyMF_8OD.mjs").then((n) => n.settings_exports);
		const { minWords } = guestPostSettings(await getAllConfigs());
		return {
			slug: p.slug,
			title: p.title || p.slug,
			description: p.description || "",
			image: p.image || void 0,
			createdAt: new Date(p.createdAt).toISOString(),
			authorName: p.authorName || void 0,
			authorImage: p.authorImage || void 0,
			source: "db",
			sponsored: true,
			preview: p.status !== "published",
			previewInfo: {
				guestPostId: row.guestPostId,
				status: row.status,
				isAuthor: row.authorId === session.user.id,
				priceInCents: pkg?.priceInCents ?? 0,
				currency: pkg?.currency ?? "usd",
				minWords,
				maxLinks: pkg?.maxLinks ?? 0
			},
			content: p.content || ""
		};
	} catch {
		return null;
	}
});
export { getBlogPostFn_createServerFn_handler, getBlogPostsFn_createServerFn_handler, getBlogPreviewFn_createServerFn_handler, getGuestPostsOpenFn_createServerFn_handler };
