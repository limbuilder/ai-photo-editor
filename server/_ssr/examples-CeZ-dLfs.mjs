import { require_jsx_runtime } from "../_libs/@base-ui/react+[...].mjs";
import { ArrowRight } from "../_libs/lucide-react.mjs";
import { EXAMPLE_EDITS, Link$2 } from "./router-FRpG8iox.mjs";
import { Avatar$1, AvatarFallback, AvatarImage } from "./avatar-C_C4qEd-.mjs";
import { Footer, Header } from "./header-HKuvuIrF.mjs";
// node_modules/.nitro/vite/services/ssr/assets/examples-CeZ-dLfs.js
var import_jsx_runtime = require_jsx_runtime();
function Panel({ src, alt, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-w-0 overflow-hidden rounded-xl bg-slate-100",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src,
			alt,
			loading: "lazy",
			decoding: "async",
			className: "aspect-[4/5] w-full object-cover"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "absolute bottom-2 left-2 rounded-full px-3 py-1 text-xs font-semibold text-white shadow-sm " + (label === "Before" ? "bg-slate-900/70" : "bg-blue-600"),
			children: label
		})]
	});
}
function initials(name) {
	return name.split(/\s+/).slice(0, 2).map((part) => part[0]?.toUpperCase() ?? "").join("");
}
function ExampleEditCard({ example }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "sr-only",
				children: example.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid min-w-0 grid-cols-2 gap-2.5 sm:gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
					src: example.beforeSrc,
					alt: example.beforeAlt,
					label: "Before"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
					src: example.afterSrc,
					alt: example.afterAlt,
					label: "After"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 line-clamp-2 min-h-[2.75rem] text-sm leading-[1.375rem] text-slate-600",
				title: example.prompt,
				children: example.prompt
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-auto flex items-center gap-3 border-t border-slate-100 pt-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Avatar$1, {
						className: "size-10 shrink-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarImage, {
							src: example.userAvatar,
							alt: example.userName
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarFallback, {
							className: "bg-slate-100 text-xs font-semibold text-slate-600",
							children: initials(example.userName)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "min-w-0 flex-1 truncate text-sm font-semibold text-slate-900",
						children: example.userName
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "shrink-0 text-sm text-slate-600",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold text-slate-900",
								children: example.credits
							}),
							" ",
							"credits"
						]
					})
				]
			})
		]
	});
}
function ExamplesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-[#f7f9fc] text-slate-900",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto max-w-6xl px-4 py-14 sm:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-3 text-xs font-semibold tracking-widest text-blue-600 uppercase",
						children: "Sample results"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-3xl font-bold tracking-tight sm:text-4xl",
						children: "AI Photo Edit Examples"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-2xl leading-7 text-slate-600",
						children: "Before-and-after edits created by our users, with the prompt and credit cost for each. Browse real community results to see what a natural-language edit can look like."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link$2, {
						href: "/#editor",
						className: "mt-6 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700",
						children: ["Open the editor", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12 grid items-stretch gap-6 lg:grid-cols-2",
						children: EXAMPLE_EDITS.map((example) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							id: example.id,
							className: "h-full",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExampleEditCard, { example })
						}, example.id))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
export { ExamplesPage as component };
