import { require_jsx_runtime } from "../_libs/@base-ui/react+[...].mjs";
import { Navigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { useUserFeatures } from "./use-user-features-DO1fBu-4.mjs";
// node_modules/.nitro/vite/services/ssr/assets/-feature-gate-BWXOOgeJ.js
var import_jsx_runtime = require_jsx_runtime();
/**
* Renders a user-center page only while an admin has it switched on;
* otherwise sends the user to the overview. Redirect rather than a notice,
* because payment flows land on these pages (success → payments, cancel →
* billing).
*/
function FeatureGate({ feature, children }) {
	const features = useUserFeatures();
	if (!features.loaded) return null;
	if (!features[feature]) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigate, {
		to: "/settings",
		replace: true
	});
	return children;
}
export { FeatureGate };
