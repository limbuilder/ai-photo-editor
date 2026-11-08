import { require_jsx_runtime } from "../_libs/@base-ui/react+[...].mjs";
import { Footer, Header } from "./header-HKuvuIrF.mjs";
import { Pricing } from "./pricing-xnmXPzRX.mjs";
// node_modules/.nitro/vite/services/ssr/assets/pricing-BXsvi1Ch.js
var import_jsx_runtime = require_jsx_runtime();
function PricingPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-[#f7f9fc]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pricing, {
				title: "AI Photo Editor Pricing",
				headingAs: "h1"
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
export { PricingPage as component };
