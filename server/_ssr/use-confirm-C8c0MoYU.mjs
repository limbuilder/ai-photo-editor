import { __toESM } from "../_runtime.mjs";
import { require_jsx_runtime, require_react } from "../_libs/@base-ui/react+[...].mjs";
import { Button$1, common_confirm_cancel, common_confirm_ok } from "./router-FRpG8iox.mjs";
import { Dialog$1, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "./dialog-oXWpGNwj.mjs";
// node_modules/.nitro/vite/services/ssr/assets/use-confirm-C8c0MoYU.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ConfirmDialog({ open, title, description, confirmLabel, cancelLabel, destructive, onConfirm, onCancel }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog$1, {
		open,
		onOpenChange: (o) => !o && onCancel(),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			showCloseButton: false,
			className: "sm:max-w-md",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: title }), description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
				className: "whitespace-pre-line",
				children: description
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
				variant: "outline",
				onClick: onCancel,
				children: cancelLabel
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
				variant: destructive ? "destructive" : "default",
				onClick: onConfirm,
				autoFocus: true,
				children: confirmLabel
			})] })]
		})
	});
}
function useConfirm() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [options, setOptions] = (0, import_react.useState)(null);
	const resolveRef = (0, import_react.useRef)(null);
	const confirm = (0, import_react.useCallback)((opts) => {
		resolveRef.current?.(false);
		setOptions(opts);
		setOpen(true);
		return new Promise((resolve) => {
			resolveRef.current = resolve;
		});
	}, []);
	const settle = (ok) => {
		resolveRef.current?.(ok);
		resolveRef.current = null;
		setOpen(false);
	};
	return {
		confirm,
		dialog: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConfirmDialog, {
			open,
			title: options?.title ?? "",
			description: options?.description,
			confirmLabel: options?.confirmLabel ?? common_confirm_ok(),
			cancelLabel: options?.cancelLabel ?? common_confirm_cancel(),
			destructive: options?.destructive,
			onConfirm: () => settle(true),
			onCancel: () => settle(false)
		})
	};
}
export { useConfirm };
