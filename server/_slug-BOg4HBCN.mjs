import { require_jsx_runtime } from "./_libs/@base-ui/react+[...].mjs";
import { envConfigs } from "./_ssr/ssr.mjs";
import { MDXProvider } from "./_libs/mdx-js__react.mjs";
import { formatPostDate, loadLocalPost } from "./_ssr/posts-CGRdL7JR.mjs";
import { ArrowLeft, ArrowRight, Calendar, Eye, Pencil, Zap } from "./_libs/lucide-react.mjs";
import { toast } from "./_libs/sonner.mjs";
import { Button$1, Link$2, Route$77, blog_back_to_blog, blog_preview_back_review, blog_preview_banner, blog_preview_draft, blog_preview_edit, blog_preview_my_posts, blog_preview_submitted, blog_sponsored, buttonVariants, cn, guest_posts_changes_hint, guest_posts_pay_submit, guest_posts_rejected_hint, guest_posts_unpublished_hint, useRouter$1 } from "./_ssr/router-FRpG8iox.mjs";
import { formatPrice, guestPostSubmitProblem } from "./_ssr/use-guest-posts-BXr5R4sL.mjs";
import { MarkdownContent } from "./_ssr/markdown-content-CGTTvlKR.mjs";
import { describeSubmitProblem } from "./_ssr/-shared-atGxkMjq.mjs";
import { PaymentProviderModal, useGuestPostCheckout } from "./_ssr/payment-provider-modal-BiUzc8S_.mjs";
import { mdxComponents } from "./_ssr/mdx-components-Bbe2Zgli.mjs";
import { Footer, Header } from "./_ssr/header-HKuvuIrF.mjs";
// node_modules/.nitro/vite/services/ssr/assets/_slug-BOg4HBCN.js
var import_jsx_runtime = require_jsx_runtime();
/**
* Preview of an unpublished guest post. The author gets their next step
* (pay to submit, or edit when changes were requested); reviewers a note.
*/
function PreviewBanner({ info, title, content }) {
	const router = useRouter$1();
	const editHref = info ? `/settings/guest-posts/${info.guestPostId}` : "";
	const price = info ? formatPrice(info.priceInCents, info.currency) : "";
	const checkout = useGuestPostCheckout({
		resolveId: async () => info.guestPostId,
		onError: (e) => toast.error(e.message, { action: {
			label: blog_preview_edit(),
			onClick: () => router.push(editHref)
		} })
	});
	let text = blog_preview_banner();
	let action = null;
	if (info?.isAuthor) {
		if (info.status === "draft") {
			text = blog_preview_draft();
			action = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex shrink-0 items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link$2, {
					href: editHref,
					className: cn(buttonVariants({
						variant: "outline",
						size: "sm"
					}), "gap-1.5"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "size-3.5" }), blog_preview_edit()]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button$1, {
					size: "sm",
					className: "shrink-0 gap-1.5",
					disabled: checkout.pending,
					onClick: () => {
						const problem = guestPostSubmitProblem({
							title,
							content,
							minWords: info.minWords,
							maxLinks: info.maxLinks
						});
						if (!problem) return checkout.pay();
						toast.error(describeSubmitProblem(problem), { action: {
							label: blog_preview_edit(),
							onClick: () => router.push(editHref)
						} });
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "size-3.5" }), guest_posts_pay_submit({ price })]
				})]
			});
		} else if (info.status === "changes_requested") {
			text = guest_posts_changes_hint();
			action = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$2, {
				href: editHref,
				className: cn(buttonVariants({ size: "sm" }), "shrink-0"),
				children: blog_preview_edit()
			});
		} else if (info.status === "submitted") text = blog_preview_submitted();
		else if (info.status === "rejected") text = guest_posts_rejected_hint();
		else if (info.status === "unpublished") text = guest_posts_unpublished_hint();
	}
	if (info && !action) action = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link$2, {
		href: info.isAuthor ? "/settings/guest-posts" : `/admin/guest-posts?id=${info.guestPostId}`,
		className: cn(buttonVariants({
			variant: "outline",
			size: "sm"
		}), "shrink-0 gap-1.5"),
		children: [info.isAuthor ? blog_preview_my_posts() : blog_preview_back_review(), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-3.5" })]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto mb-8 flex max-w-3xl flex-wrap items-center gap-3 rounded-xl border border-amber-300/70 bg-amber-50 px-4 py-3 text-sm text-amber-900 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-200",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "size-4 shrink-0" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "min-w-0 flex-1",
				children: text
			}),
			action,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaymentProviderModal, {
				...checkout.pickerProps,
				price
			})
		]
	});
}
function siteHost() {
	try {
		return new URL(envConfigs.app_url).hostname;
	} catch {
		return envConfigs.app_name;
	}
}
function BlogPostPage() {
	const { locale, post } = Route$77.useLoaderData();
	const LocalContent = post.source === "local" ? loadLocalPost(post.slug, locale)?.default : null;
	const articleJsonLd = !post.preview ? JSON.stringify({
		"@context": "https://schema.org",
		"@type": "Article",
		headline: post.title,
		description: post.description,
		datePublished: post.createdAt,
		author: post.authorName ? {
			"@type": "Person",
			name: post.authorName
		} : {
			"@type": "Organization",
			name: envConfigs.app_name
		},
		image: post.image || void 0,
		mainEntityOfPage: `${envConfigs.app_url}/blog/${post.slug}`
	}) : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "force-light flex min-h-screen flex-col bg-[#f7f9fc] text-slate-900",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "flex-1 px-6 py-12 md:px-8 md:py-16",
				children: [
					post.preview && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewBanner, {
						info: post.previewInfo,
						title: post.title,
						content: post.content || ""
					}),
					articleJsonLd ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
						type: "application/ld+json",
						children: articleJsonLd
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "mx-auto max-w-3xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link$2, {
								href: "/blog",
								className: "inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-slate-900",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), blog_back_to_blog()]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
								className: "mt-8 mb-6 border-b border-slate-200 pb-6",
								children: [
									post.sponsored && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mb-3 inline-block rounded-full border border-slate-200 px-2.5 py-0.5 text-xs font-medium tracking-wide text-slate-500 uppercase",
										children: blog_sponsored()
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
										className: "text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl",
										children: post.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-4 flex items-center gap-4 text-sm text-slate-500",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "inline-flex items-center gap-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "size-4" }), formatPostDate(post.createdAt, locale)]
										}), (post.authorName || post.authorImage) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "inline-flex items-center gap-2",
											children: [post.authorImage && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: post.authorImage,
												alt: post.authorName || "",
												width: 20,
												height: 20,
												className: "size-5 rounded-full object-cover"
											}), post.authorName]
										})]
									})
								]
							}),
							post.description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mb-6 text-slate-600",
								children: post.description
							}),
							post.image && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: post.image,
								alt: post.title,
								className: "mb-8 w-full rounded-2xl border border-slate-200 object-cover"
							}),
							LocalContent ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[15px] leading-7 text-slate-800",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MDXProvider, {
									components: mdxComponents,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LocalContent, {})
								})
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MarkdownContent, {
								content: post.content || "",
								sponsored: post.sponsored,
								utm: post.sponsored ? {
									source: siteHost(),
									medium: "guest_post"
								} : void 0
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
export { BlogPostPage as component };
