import { require_jsx_runtime } from "../_libs/@base-ui/react+[...].mjs";
import { ArrowRight, WandSparkles } from "../_libs/lucide-react.mjs";
import { Link$2, PHOTO_TOOLS } from "./router-FRpG8iox.mjs";
import { Footer, Header } from "./header-HKuvuIrF.mjs";
// node_modules/.nitro/vite/services/ssr/assets/tools-Co1BjF5u.js
var import_jsx_runtime = require_jsx_runtime();
function ToolsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-[#f7f9fc] text-slate-900",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto max-w-6xl px-4 py-16 sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-12",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-3 text-xs font-semibold tracking-widest text-blue-600 uppercase",
							children: "AI Tools"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "text-4xl font-bold tracking-tight",
							children: "Explore photo editing tools"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-2xl text-slate-500",
							children: "Different tasks, one simple workflow. Choose the edit you need and get started with a suggested prompt."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-5 md:grid-cols-3",
					children: PHOTO_TOOLS.map((tool) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link$2, {
						href: tool.slug === "remove-background" ? "/ai-background-remover" : tool.slug === "enhance-photo" ? "/ai-photo-enhancer" : tool.slug === "change-background" ? "/photo-background-changer" : "/#editor",
						className: "group rounded-2xl border border-slate-200 bg-white p-7 hover:border-blue-300 hover:shadow-lg",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WandSparkles, { className: "mb-6 size-8 text-blue-600" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mb-3 text-xs text-slate-500",
								children: tool.category
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-xl font-semibold",
								children: tool.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 min-h-24 text-sm leading-6 text-slate-500",
								children: tool.description
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-2 text-sm font-semibold text-blue-600",
								children: ["Open tool ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
							})
						]
					}, tool.slug))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
export { ToolsPage as component };
