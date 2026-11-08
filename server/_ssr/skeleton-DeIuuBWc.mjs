import { require_jsx_runtime } from "../_libs/@base-ui/react+[...].mjs";
import { cn } from "./router-FRpG8iox.mjs";
// node_modules/.nitro/vite/services/ssr/assets/skeleton-DeIuuBWc.js
var import_jsx_runtime = require_jsx_runtime();
function Skeleton({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"data-slot": "skeleton",
		className: cn("animate-pulse rounded-md bg-muted", className),
		...props
	});
}
export { Skeleton };
