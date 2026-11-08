import { __exportAll } from "./ssr.mjs";
// node_modules/.nitro/vite/services/ssr/assets/pricing-wSm2a3Lf.js
var PaymentType = /* @__PURE__ */ function(PaymentType) {
	PaymentType["ONE_TIME"] = "one-time";
	PaymentType["SUBSCRIPTION"] = "subscription";
	PaymentType["RENEW"] = "renew";
	return PaymentType;
}({});
var PaymentInterval = /* @__PURE__ */ function(PaymentInterval) {
	PaymentInterval["ONE_TIME"] = "one-time";
	PaymentInterval["DAY"] = "day";
	PaymentInterval["WEEK"] = "week";
	PaymentInterval["MONTH"] = "month";
	PaymentInterval["YEAR"] = "year";
	return PaymentInterval;
}({});
var PaymentStatus = /* @__PURE__ */ function(PaymentStatus) {
	PaymentStatus["PROCESSING"] = "processing";
	PaymentStatus["SUCCESS"] = "paid";
	PaymentStatus["FAILED"] = "failed";
	PaymentStatus["CANCELED"] = "canceled";
	return PaymentStatus;
}({});
var SubscriptionCycleType = /* @__PURE__ */ function(SubscriptionCycleType) {
	SubscriptionCycleType["CREATE"] = "create";
	SubscriptionCycleType["RENEWAL"] = "renew";
	return SubscriptionCycleType;
}({});
var SubscriptionStatus = /* @__PURE__ */ function(SubscriptionStatus) {
	SubscriptionStatus["ACTIVE"] = "active";
	SubscriptionStatus["PENDING_CANCEL"] = "pending_cancel";
	SubscriptionStatus["CANCELED"] = "canceled";
	SubscriptionStatus["TRIALING"] = "trialing";
	SubscriptionStatus["EXPIRED"] = "expired";
	SubscriptionStatus["PAUSED"] = "paused";
	return SubscriptionStatus;
}({});
var PaymentEventType = /* @__PURE__ */ function(PaymentEventType) {
	PaymentEventType["CHECKOUT_SUCCESS"] = "checkout.success";
	PaymentEventType["PAYMENT_SUCCESS"] = "payment.success";
	PaymentEventType["PAYMENT_FAILED"] = "payment.failed";
	PaymentEventType["PAYMENT_REFUNDED"] = "payment.refunded";
	PaymentEventType["SUBSCRIBE_UPDATED"] = "subscribe.updated";
	PaymentEventType["SUBSCRIBE_CANCELED"] = "subscribe.canceled";
	return PaymentEventType;
}({});
/**
* Thrown when a webhook is authentic but carries an event this app does not
* process (unknown event type, or one with no handler). The webhook route acks
* these with 2xx so the provider stops redelivering them; every other error is
* a real failure and must return a non-2xx so the provider retries.
*/
var WebhookIgnoredError = class extends Error {
	webhookIgnored = true;
	constructor(message) {
		super(message);
		this.name = "WebhookIgnoredError";
	}
};
function isWebhookIgnored(error) {
	return error instanceof WebhookIgnoredError || typeof error === "object" && error !== null && error.webhookIgnored === true;
}
var RefundStatus = /* @__PURE__ */ function(RefundStatus) {
	RefundStatus["PENDING"] = "pending";
	RefundStatus["SUCCEEDED"] = "succeeded";
	return RefundStatus;
}({});
/**
* Authoritative pricing catalog.
*
* The checkout API uses this as the SOURCE OF TRUTH for price/credits/duration.
* Any price, credits, or plan info sent by the client is IGNORED — only the
* product_id is honored, and everything else is looked up here.
*
* To change pricing, edit this file and redeploy. Admin UI cannot alter prices.
*/
var pricing_exports = /* @__PURE__ */ __exportAll({
	getPricingProduct: () => getPricingProduct,
	listGuestPostPackages: () => listGuestPostPackages,
	listPricingProducts: () => listPricingProducts,
	pricingCatalog: () => pricingCatalog
});
/**
* Default demo catalog. Replace with your real products when launching.
* Keys MUST match what the pricing UI sends as product_id.
*/
var pricingCatalog = {
	starter_pack: {
		productId: "starter_pack",
		productName: "Starter Credits",
		planName: "Starter",
		description: "200 AI photo editor credits",
		type: PaymentType.ONE_TIME,
		priceInCents: 499,
		currency: "usd",
		credits: 200,
		creditsValidDays: 365
	},
	creator_pack: {
		productId: "creator_pack",
		productName: "Creator Credits",
		planName: "Creator",
		description: "500 AI photo editor credits",
		type: PaymentType.ONE_TIME,
		priceInCents: 999,
		currency: "usd",
		credits: 500,
		creditsValidDays: 365
	},
	pro_pack: {
		productId: "pro_pack",
		productName: "Pro Credits",
		planName: "Pro",
		description: "1200 AI photo editor credits",
		type: PaymentType.ONE_TIME,
		priceInCents: 1999,
		currency: "usd",
		credits: 1200,
		creditsValidDays: 365
	},
	guest_post_standard: {
		productId: "guest_post_standard",
		productName: "Guest Post",
		planName: "Standard",
		description: "Guest post (1 link)",
		type: PaymentType.ONE_TIME,
		priceInCents: 9900,
		currency: "usd",
		cnyPriceInCents: 69900,
		credits: 0,
		kind: "guest_post",
		maxLinks: 1
	},
	guest_post_premium: {
		productId: "guest_post_premium",
		productName: "Guest Post",
		planName: "Premium",
		description: "Guest post (3 links)",
		type: PaymentType.ONE_TIME,
		priceInCents: 19900,
		currency: "usd",
		cnyPriceInCents: 139900,
		credits: 0,
		kind: "guest_post",
		maxLinks: 3
	}
};
function getPricingProduct(productId) {
	if (!productId) return null;
	return pricingCatalog[productId] ?? null;
}
function listPricingProducts() {
	return Object.values(pricingCatalog);
}
function listGuestPostPackages() {
	return listPricingProducts().filter((p) => p.kind === "guest_post");
}
export { PaymentEventType, PaymentInterval, PaymentStatus, PaymentType, RefundStatus, SubscriptionCycleType, SubscriptionStatus, WebhookIgnoredError, getPricingProduct, isWebhookIgnored, listGuestPostPackages, pricing_exports };
