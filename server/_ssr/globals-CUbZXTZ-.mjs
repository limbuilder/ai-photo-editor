import { getCookie, setCookie } from "./ssr.mjs";
// node_modules/.nitro/vite/services/ssr/assets/globals-CUbZXTZ-.js
var COOKIE_CONSENT_NAME = "cookie_consent";
var CHANGE_EVENT = "cookie-consent-change";
var OPEN_EVENT = "cookie-consent-open";
function parseCookieConsent(value) {
	return value === "accepted" || value === "rejected" ? value : null;
}
function readCookieConsent() {
	if (typeof document === "undefined") return null;
	return parseCookieConsent(getCookie(COOKIE_CONSENT_NAME));
}
function saveCookieConsent(value) {
	setCookie(COOKIE_CONSENT_NAME, value, 365);
	const gtag = window.gtag;
	if (typeof gtag === "function") {
		const state = value === "accepted" ? "granted" : "denied";
		gtag("consent", "update", {
			ad_storage: state,
			ad_user_data: state,
			ad_personalization: state,
			analytics_storage: state
		});
	}
	window.dispatchEvent(new CustomEvent(CHANGE_EVENT));
}
function subscribeCookieConsent(callback) {
	window.addEventListener(CHANGE_EVENT, callback);
	return () => window.removeEventListener(CHANGE_EVENT, callback);
}
function subscribeCookieSettingsOpen(callback) {
	window.addEventListener(OPEN_EVENT, callback);
	return () => window.removeEventListener(OPEN_EVENT, callback);
}
export { parseCookieConsent, readCookieConsent, saveCookieConsent, subscribeCookieConsent, subscribeCookieSettingsOpen };
