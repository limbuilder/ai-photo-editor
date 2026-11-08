import { __toESM } from "../_runtime.mjs";
import { require_jsx_runtime, require_react } from "./@base-ui/react+[...].mjs";
// node_modules/.pnpm/@react-email+section@0.0.17_react@19.3.1/node_modules/@react-email/section/dist/index.mjs
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var Section = import_react.forwardRef(({ children, style, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("table", {
		align: "center",
		width: "100%",
		border: 0,
		cellPadding: "0",
		cellSpacing: "0",
		role: "presentation",
		...props,
		ref,
		style,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children }) }) })
	});
});
Section.displayName = "Section";
export { Section };
