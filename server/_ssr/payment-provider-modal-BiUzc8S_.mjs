import { __toESM } from "../_runtime.mjs";
import { require_jsx_runtime, require_react } from "../_libs/@base-ui/react+[...].mjs";
import { getLocale } from "./ssr.mjs";
import { useMutation } from "../_libs/tanstack__react-query.mjs";
import { CreditCard, LoaderCircle } from "../_libs/lucide-react.mjs";
import { Button$1, apiPost, common_pricing_choose_payment, common_pricing_choose_payment_desc, common_pricing_payment_for, common_pricing_payment_for_plan, usePublicConfig } from "./router-FRpG8iox.mjs";
import { Dialog$1, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./dialog-oXWpGNwj.mjs";
// node_modules/.nitro/vite/services/ssr/assets/payment-provider-modal-BiUzc8S_.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var ALL_PROVIDERS = [
	"stripe",
	"creem",
	"paypal",
	"alipay",
	"wechat"
];
/**
* Pay for a guest post draft (which submits it for review): the site's
* default provider, or a picker when buyers may choose. Spread `pickerProps`
* onto <PaymentProviderModal>. `resolveId` may save the draft first.
*/
function useGuestPostCheckout(opts) {
	const configs = usePublicConfig().data ?? {};
	const providers = ALL_PROVIDERS.filter((p) => configs[`${p}_enabled`] === "true");
	const [pickerOpen, setPickerOpen] = (0, import_react.useState)(false);
	const [payingWith, setPayingWith] = (0, import_react.useState)(null);
	const checkout = useMutation({
		mutationFn: async (provider) => {
			const id = await opts.resolveId();
			return apiPost(`/api/guest-posts/${id}/checkout`, {
				payment_provider: provider,
				locale: getLocale()
			});
		},
		onSuccess: (data) => {
			if (data?.checkout_url) window.location.href = data.checkout_url;
			else setPayingWith(null);
		},
		onError: (error) => {
			setPayingWith(null);
			opts.onError?.(error);
		}
	});
	function startPay(provider) {
		setPayingWith(provider);
		checkout.mutate(provider);
	}
	function pay() {
		if (configs.select_payment_enabled === "true" && providers.length > 1) {
			setPickerOpen(true);
			return;
		}
		startPay(configs.default_payment_provider || providers[0] || "stripe");
	}
	return {
		pay,
		pending: checkout.isPending,
		pickerProps: {
			open: pickerOpen,
			onOpenChange: (open) => {
				setPickerOpen(open);
				if (!open) setPayingWith(null);
			},
			providers: providers.length ? providers : ["stripe"],
			loadingProvider: payingWith,
			onSelect: startPay
		}
	};
}
var providerLabel = {
	stripe: "Stripe",
	creem: "Creem",
	waffo: "Waffo Pancake",
	paypal: "PayPal",
	alipay: "Alipay",
	wechat: "WeChat Pay"
};
function PaymentProviderModal({ open, onOpenChange, providers, loadingProvider, onSelect, planName, price }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog$1, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "sm:max-w-md",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: common_pricing_choose_payment() }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: planName ? price ? common_pricing_payment_for({
				plan: planName,
				price
			}) : common_pricing_payment_for_plan({ plan: planName }) : common_pricing_choose_payment_desc() })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-2 space-y-2",
				children: providers.map((p) => {
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button$1, {
						variant: "outline",
						className: "h-12 w-full justify-start gap-3",
						disabled: !!loadingProvider,
						onClick: () => onSelect(p),
						children: [loadingProvider === p ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditCard, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: providerLabel[p] })]
					}, p);
				})
			})]
		})
	});
}
export { PaymentProviderModal, useGuestPostCheckout };
