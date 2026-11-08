import { __toESM } from "../_runtime.mjs";
import { require_jsx_runtime, require_react } from "../_libs/@base-ui/react+[...].mjs";
import { getLocale } from "./ssr.mjs";
import { Check, LoaderCircle, Sparkles } from "../_libs/lucide-react.mjs";
import { toast } from "../_libs/sonner.mjs";
import { EDIT_CREDITS, apiPost, useSession } from "./router-FRpG8iox.mjs";
// node_modules/.nitro/vite/services/ssr/assets/pricing-xnmXPzRX.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var PACKS = [
	{
		id: "starter_pack",
		name: "Starter",
		price: "$4.99",
		credits: 200,
		edits: 20,
		description: "For a quick photo project",
		featured: false
	},
	{
		id: "creator_pack",
		name: "Creator",
		price: "$9.99",
		credits: 500,
		edits: 50,
		description: "For frequent photo edits",
		featured: true
	},
	{
		id: "pro_pack",
		name: "Pro",
		price: "$19.99",
		credits: 1200,
		edits: 120,
		description: "For bigger creative projects",
		featured: false
	}
];
function Pricing({ title, headingAs: Heading = "h2" } = {}) {
	const { data: session } = useSession();
	const [buying, setBuying] = (0, import_react.useState)(null);
	async function checkout(id) {
		if (!session?.user) {
			window.location.href = "/sign-in?callbackUrl=" + encodeURIComponent("/pricing");
			return;
		}
		setBuying(id);
		try {
			const data = await apiPost("/api/payment/checkout", {
				product_id: id,
				payment_provider: "waffo",
				redirect: "/settings/payments",
				locale: getLocale()
			});
			if (!data?.checkout_url) throw new Error("Waffo checkout was not created");
			window.location.href = data.checkout_url;
		} catch (error) {
			toast.error(error?.message || "Unable to start checkout");
			setBuying(null);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "pricing",
		className: "bg-[#f7f9fc] px-4 py-20 sm:px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-11 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-3 text-xs font-bold tracking-[0.2em] text-blue-600 uppercase",
							children: "Simple pricing"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading, {
							className: "text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl",
							children: title || "Pay once. Edit whenever you need."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto mt-4 max-w-2xl text-slate-500",
							children: "Buy credits when you need them. No automatic subscription or surprise renewal."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-5 md:grid-cols-3",
					children: PACKS.map((pack) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative flex flex-col rounded-2xl border bg-white p-7 transition-shadow hover:shadow-lg " + (pack.featured ? "border-blue-400 shadow-lg shadow-blue-100" : "border-slate-200 shadow-sm"),
						children: [
							pack.featured && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute -top-3 left-6 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white",
								children: "Most popular"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-lg font-semibold text-slate-900",
								children: pack.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-slate-500",
								children: pack.description
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-7 text-4xl font-bold tracking-tight text-slate-950",
								children: pack.price
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs font-medium text-slate-500",
								children: "One-time purchase"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "my-7 border-t border-slate-100" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mb-4 flex items-center gap-2 text-lg font-semibold text-slate-900",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-5 text-blue-600" }),
									pack.credits.toLocaleString(),
									" credits"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-3 text-sm text-slate-600",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "flex items-start gap-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mt-0.5 size-4 shrink-0 text-blue-600" }),
											pack.edits,
											" medium-quality edits (",
											EDIT_CREDITS,
											" credits). Credits vary by quality."
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "flex items-start gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mt-0.5 size-4 shrink-0 text-blue-600" }), "Credits valid for 365 days"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "flex items-start gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mt-0.5 size-4 shrink-0 text-blue-600" }), "Download and edit again"]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								disabled: Boolean(buying),
								onClick: () => checkout(pack.id),
								className: "mt-9 inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl px-4 text-sm font-semibold transition disabled:opacity-60 " + (pack.featured ? "bg-blue-600 text-white hover:bg-blue-700" : "border border-slate-200 bg-white text-slate-900 hover:bg-slate-50"),
								children: [
									buying === pack.id && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }),
									"Get ",
									pack.name
								]
							})
						]
					}, pack.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-8 text-center text-xs leading-relaxed text-slate-500",
					children: [
						"Credits depend on quality. A medium (standard) edit uses",
						" ",
						EDIT_CREDITS,
						" credits; low uses fewer and higher qualities use more. Credits are added after payment is verified. Generated results may vary with your prompt."
					]
				})
			]
		})
	});
}
export { Pricing };
