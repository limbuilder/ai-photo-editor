import { require_jsx_runtime } from "../_libs/@base-ui/react+[...].mjs";
import { formatPostDate } from "./posts-CGRdL7JR.mjs";
import { ArrowRight, Calendar } from "../_libs/lucide-react.mjs";
import { Link$2, Route$78, blog_description, blog_no_posts, blog_sponsored, blog_title, blog_write_for_us } from "./router-FRpG8iox.mjs";
import { Footer, Header } from "./header-HKuvuIrF.mjs";
// node_modules/.nitro/vite/services/ssr/assets/blog-ffBLDaow.js
var import_jsx_runtime = require_jsx_runtime();
function BlogCard({ href, title, description, image, date, authorName, authorImage, badge }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link$2, {
		href,
		className: "group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all hover:border-blue-200 hover:shadow-md",
		children: [image && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: image,
			alt: title,
			width: 640,
			height: 360,
			loading: "lazy",
			className: "aspect-video w-full object-cover object-center"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 flex-col gap-3 p-6",
			children: [
				badge && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "w-fit rounded-full border border-slate-200 px-2 py-0.5 text-[11px] font-medium tracking-wide text-slate-500 uppercase",
					children: badge
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "leading-snug font-medium text-slate-900 group-hover:underline group-hover:underline-offset-4",
					children: title
				}),
				description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "line-clamp-3 text-sm leading-relaxed text-slate-600",
					children: description
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-auto flex items-center gap-2 pt-2 text-xs text-slate-500",
					children: [
						date && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "size-3.5" }), date]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "flex-1" }),
						(authorName || authorImage) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-2",
							children: [authorImage && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: authorImage,
								alt: authorName || "",
								width: 20,
								height: 20,
								loading: "lazy",
								className: "size-5 rounded-full object-cover"
							}), authorName]
						})
					]
				})
			]
		})]
	});
}
function BlogPage() {
	const { locale, posts, guestPostsOpen } = Route$78.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "force-light flex min-h-screen flex-col bg-[#f7f9fc] text-slate-900",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "flex-1 px-4 py-16 sm:py-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-5xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-16 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "font-serif text-4xl font-normal tracking-tight sm:text-5xl",
								children: blog_title()
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mx-auto mt-5 max-w-lg text-slate-600",
								children: blog_description()
							}),
							guestPostsOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link$2, {
								href: "/guest-post",
								className: "mt-4 inline-flex items-center gap-1 text-sm font-medium text-slate-600 underline-offset-4 hover:text-slate-900 hover:underline",
								children: [blog_write_for_us(), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-3.5" })]
							})
						]
					}), posts.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-center text-slate-600",
						children: blog_no_posts()
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
						children: posts.map((post) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlogCard, {
							href: `/blog/${post.slug}`,
							title: post.title,
							description: post.description,
							image: post.image,
							date: formatPostDate(post.createdAt, locale),
							authorName: post.authorName,
							authorImage: post.authorImage,
							badge: post.sponsored ? blog_sponsored() : void 0
						}, post.slug))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
export { BlogPage as component };
