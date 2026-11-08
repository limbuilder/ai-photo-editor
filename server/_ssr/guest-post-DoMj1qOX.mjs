import { require_jsx_runtime } from "../_libs/@base-ui/react+[...].mjs";
import { Check, FileText, Search, Wallet } from "../_libs/lucide-react.mjs";
import { Link$2, buttonVariants, cn, guest_posts_closed, guest_posts_landing_cta, guest_posts_landing_description, guest_posts_landing_disclosure, guest_posts_landing_perk_permanent, guest_posts_landing_perk_review, guest_posts_landing_step_pay, guest_posts_landing_step_review, guest_posts_landing_step_write, guest_posts_landing_title, guest_posts_package_links } from "./router-FRpG8iox.mjs";
import { formatPrice, useGuestPostInfo } from "./use-guest-posts-BXr5R4sL.mjs";
import { Footer, Header } from "./header-HKuvuIrF.mjs";
// node_modules/.nitro/vite/services/ssr/assets/guest-post-DoMj1qOX.js
var import_jsx_runtime = require_jsx_runtime();
function GuestPostLanding() {
	const { data: info, isPending } = useGuestPostInfo();
	const steps = [
		{
			icon: FileText,
			text: guest_posts_landing_step_write()
		},
		{
			icon: Search,
			text: guest_posts_landing_step_review()
		},
		{
			icon: Wallet,
			text: guest_posts_landing_step_pay()
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "px-4 py-20 sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-4xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-serif text-4xl font-normal tracking-tight sm:text-5xl",
					children: guest_posts_landing_title()
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground mx-auto mt-5 max-w-2xl",
					children: guest_posts_landing_description()
				})]
			}), !isPending && !info?.enabled ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground mt-12 text-center",
				children: guest_posts_closed()
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-14 grid gap-4 sm:grid-cols-3",
					children: steps.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-2xl border p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "text-muted-foreground size-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-3 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-medium",
								children: [i + 1, ". "]
							}), s.text]
						})]
					}, i))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-4 sm:grid-cols-2",
					children: (info?.packages ?? []).map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col rounded-2xl border p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-medium",
								children: p.planName
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-3xl font-semibold",
								children: formatPrice(p.priceInCents, p.currency)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "text-muted-foreground mt-4 space-y-2 text-sm",
								children: [
									guest_posts_package_links({ count: p.maxLinks }),
									guest_posts_landing_perk_permanent(),
									guest_posts_landing_perk_review()
								].map((perk) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mt-0.5 size-4 shrink-0" }), perk]
								}, perk))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$2, {
								href: `/settings/guest-posts/new?package=${encodeURIComponent(p.productId)}`,
								className: cn(buttonVariants(), "mt-6"),
								children: guest_posts_landing_cta()
							})
						]
					}, p.productId))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground mt-6 text-center text-xs",
					children: guest_posts_landing_disclosure()
				})
			] })]
		})
	});
}
function GuestPostPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-background text-foreground flex min-h-screen flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "flex-1",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GuestPostLanding, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
export { GuestPostPage as component };
