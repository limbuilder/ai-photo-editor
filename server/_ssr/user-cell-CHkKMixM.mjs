import { require_jsx_runtime } from "../_libs/@base-ui/react+[...].mjs";
import { Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { Avatar$1, AvatarFallback, AvatarImage } from "./avatar-C_C4qEd-.mjs";
// node_modules/.nitro/vite/services/ssr/assets/user-cell-CHkKMixM.js
var import_jsx_runtime = require_jsx_runtime();
/** Avatar + name + email for admin tables; links to the user's detail page (new tab by default). */
function UserCell({ userId, name, email, image, newTab = true }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/admin/users/$id",
		params: { id: userId },
		...newTab && {
			target: "_blank",
			rel: "noopener noreferrer"
		},
		className: "flex min-w-0 items-center gap-3 rounded-md hover:opacity-80",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Avatar$1, {
			className: "size-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarImage, { src: image || void 0 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarFallback, {
				className: "text-xs",
				children: (name || email || "?").charAt(0).toUpperCase()
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-w-0 flex-col",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "truncate text-sm font-medium",
				children: name || "—"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-muted-foreground truncate text-xs",
				children: email || userId
			})]
		})]
	});
}
export { UserCell };
