import { __toESM } from "../_runtime.mjs";
import { require_jsx_runtime, require_react } from "../_libs/@base-ui/react+[...].mjs";
import { Check, Copy } from "../_libs/lucide-react.mjs";
import { toast } from "../_libs/sonner.mjs";
import { Button$1, admin_agent_copy, admin_agent_copy_failed, cn } from "./router-FRpG8iox.mjs";
// node_modules/.nitro/vite/services/ssr/assets/-copy-button-10MKVKTU.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CopyButton({ value, className }) {
	const [copied, setCopied] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
		type: "button",
		variant: "ghost",
		size: "icon",
		className: cn("size-7 shrink-0", className),
		"aria-label": admin_agent_copy(),
		onClick: async () => {
			try {
				await navigator.clipboard.writeText(value);
				setCopied(true);
				setTimeout(() => setCopied(false), 1500);
			} catch {
				toast.error(admin_agent_copy_failed());
			}
		},
		children: copied ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "size-3.5" })
	});
}
export { CopyButton };
