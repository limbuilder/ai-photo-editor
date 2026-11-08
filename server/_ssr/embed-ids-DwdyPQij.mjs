import { __exportAll } from "./ssr.mjs";
import processModule from "node:process";
// node_modules/.nitro/vite/services/ssr/assets/embed-ids-DwdyPQij.js
var embed_ids_exports = /* @__PURE__ */ __exportAll({
	isScriptUrlShape: () => isScriptUrlShape,
	isValidEmbedSetting: () => isValidEmbedSetting,
	plausibleScriptHosts: () => plausibleScriptHosts,
	safeEmbedSetting: () => safeEmbedSetting
});
/**
* Formats for third-party IDs that admin settings feed into inline <script>
* tags / script URLs (analytics, ads, customer-service widgets). Anything that
* doesn't match is refused on save and dropped at render, so a settings value
* can never break out of the script string it is interpolated into.
*/
var EMBED_ID_PATTERNS = {
	google_analytics_id: /^[A-Za-z]{1,3}-[A-Za-z0-9-]{4,30}$/,
	adsense_code: /^(ca-)?pub-\d{6,24}$/,
	crisp_website_id: /^[A-Za-z0-9-]{8,64}$/,
	tawk_property_id: /^[A-Za-z0-9]{8,64}$/,
	tawk_widget_id: /^[A-Za-z0-9_-]{1,64}$/
};
/**
* Hosts allowed to serve the Plausible script. A script URL runs with the
* site's full authority (including in admins' browsers), so "any https URL"
* would let anyone with settings.write load their own JS. Self-hosted
* Plausible is opted into by deployment config, never by a settings value:
* PLAUSIBLE_SCRIPT_HOSTS=stats.example.com,plausible.example.org
*
* Read at runtime on the server (process.env, or the Workers env), so a
* restart or redeploy picks it up without a rebuild. The older build-time
* VITE_PLAUSIBLE_SCRIPT_HOSTS still counts. Same-site paths (a
* /js/script.js proxy) are always allowed.
*/
function plausibleScriptHosts() {
	const runtime = {
		...globalThis.__CF_ENV__ ?? {},
		...typeof processModule !== "undefined" ? processModule.env : {}
	};
	return ["plausible.io", ...[
		runtime.PLAUSIBLE_SCRIPT_HOSTS,
		runtime.VITE_PLAUSIBLE_SCRIPT_HOSTS,
		{
			"BASE_URL": "/",
			"DEV": false,
			"MODE": "production",
			"PROD": true,
			"SSR": true,
			"TSS_DEV_SERVER": "false",
			"TSS_DEV_SSR_STYLES_BASEPATH": "/",
			"TSS_DEV_SSR_STYLES_ENABLED": "true",
			"TSS_DISABLE_CSRF_MIDDLEWARE_WARNING": "false",
			"TSS_INLINE_CSS_ENABLED": "false",
			"TSS_ROUTER_BASEPATH": "",
			"TSS_SERVER_FN_BASE": "/_serverFn/",
			"VITE_APP_NAME": "GetAIPhotoEditor",
			"VITE_APP_URL": "https://getaiphotoeditor.com"
		}.VITE_PLAUSIBLE_SCRIPT_HOSTS
	].filter((v) => typeof v === "string").join(",").split(",").map((h) => h.trim().toLowerCase()).filter(Boolean)];
}
/**
* A same-site path or a credential-free https URL. Only the shape: which
* hosts may serve the script is checked on the server (isValidEmbedSetting),
* because the host list is server runtime config the browser can't see.
*/
function isScriptUrlShape(value) {
	if (value.startsWith("/")) {
		const base = "https://same-site.invalid";
		try {
			return new URL(value, base).origin === base;
		} catch {
			return false;
		}
	}
	try {
		const url = new URL(value);
		return url.protocol === "https:" && !url.username && !url.password;
	} catch {
		return false;
	}
}
function isAllowedPlausibleSrc(value) {
	if (!isScriptUrlShape(value)) return false;
	if (value.startsWith("/")) return true;
	return plausibleScriptHosts().includes(new URL(value).hostname.toLowerCase());
}
/** True for blank or well-formed values of a known embed setting; other names always pass. */
function isValidEmbedSetting(name, value) {
	const v = value.trim();
	if (!v) return true;
	if (name === "plausible_src") return isAllowedPlausibleSrc(v);
	const pattern = EMBED_ID_PATTERNS[name];
	return pattern ? pattern.test(v) : true;
}
/** The trimmed value if it is a well-formed embed setting, otherwise ''. */
function safeEmbedSetting(name, value) {
	const v = value?.trim() || "";
	return v && isValidEmbedSetting(name, v) ? v : "";
}
export { embed_ids_exports, isScriptUrlShape, isValidEmbedSetting, safeEmbedSetting };
