import { require_jsx_runtime } from "../_libs/@base-ui/react+[...].mjs";
import { Check } from "../_libs/lucide-react.mjs";
import { cn } from "./router-FRpG8iox.mjs";
// node_modules/.nitro/vite/services/ssr/assets/appearance-options-DVsMAGYy.js
var import_jsx_runtime = require_jsx_runtime();
/** A row of selectable chips for an appearance setting. */
function AppearanceOptions({ options, value, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		role: "radiogroup",
		className: "flex flex-wrap gap-2",
		children: options.map((opt) => {
			const selected = opt.id === value;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				role: "radio",
				"aria-checked": selected,
				onClick: () => onChange(opt.id),
				className: cn("flex items-center gap-2 rounded-lg border px-3 py-2 text-sm transition-colors", "focus-visible:ring-ring/50 outline-none focus-visible:ring-3", selected ? "border-primary bg-accent text-accent-foreground font-medium" : "hover:bg-muted/60"),
				children: [
					opt.swatch && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeDot, { color: opt.swatch }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						style: opt.fontFamily ? { fontFamily: opt.fontFamily } : {},
						children: opt.label
					}),
					selected && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5" })
				]
			}, opt.id);
		})
	});
}
function ThemeDot({ color, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		"aria-hidden": true,
		className: cn("inline-block size-4 shrink-0 rounded-full ring-1 ring-black/10 ring-inset dark:ring-white/20", className),
		style: { background: color }
	});
}
export { AppearanceOptions, ThemeDot };
