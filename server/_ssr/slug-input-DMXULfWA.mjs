import { require_jsx_runtime } from "../_libs/@base-ui/react+[...].mjs";
// node_modules/.nitro/vite/services/ssr/assets/slug-input-DMXULfWA.js
var import_jsx_runtime = require_jsx_runtime();
/** Same normalization as the server; validation happens there. */
function tidySlug(value) {
	return value.trim().toLowerCase().replace(/[\s_]+/g, "-").replace(/-+/g, "-").replace(/^-|-$/g, "");
}
/** URL slug field with a fixed path prefix (e.g. `/blog/`), tidied on blur. */
function SlugInput({ id, prefix, value, placeholder, maxLength = 80, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "border-input focus-within:ring-ring/50 flex items-center overflow-hidden rounded-lg border focus-within:ring-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-muted-foreground bg-muted border-input border-r px-2.5 py-1 text-sm",
			children: prefix
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			id,
			value,
			maxLength,
			placeholder,
			onChange: (e) => onChange(e.target.value),
			onBlur: () => onChange(tidySlug(value)),
			className: "placeholder:text-muted-foreground h-8 min-w-0 flex-1 bg-transparent px-2.5 text-sm outline-none"
		})]
	});
}
export { SlugInput };
