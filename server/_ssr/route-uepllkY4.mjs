import { require_jsx_runtime } from "../_libs/@base-ui/react+[...].mjs";
import { Outlet } from "../_libs/@tanstack/react-router+[...].mjs";
import { MDXProvider } from "../_libs/mdx-js__react.mjs";
import { ArrowLeft } from "../_libs/lucide-react.mjs";
import { Link$2, common_pages_back_to_home } from "./router-FRpG8iox.mjs";
import { mdxComponents } from "./mdx-components-Bbe2Zgli.mjs";
// node_modules/.nitro/vite/services/ssr/assets/route-uepllkY4.js
var import_jsx_runtime = require_jsx_runtime();
function PagesLayout() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-background min-h-screen",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-3xl px-6 pt-8 md:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link$2, {
				href: "/",
				className: "text-muted-foreground hover:text-foreground inline-flex items-center gap-2 text-sm font-medium transition-colors",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), common_pages_back_to_home()]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-3xl min-w-0 px-6 pt-6 pb-12 md:px-8 md:pt-8 md:pb-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MDXProvider, {
				components: mdxComponents,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
			})
		})]
	});
}
export { PagesLayout as component };
