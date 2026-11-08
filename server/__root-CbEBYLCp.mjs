import { createServerFn } from "./_ssr/ssr.mjs";
import { createServerRpc } from "./_ssr/createServerRpc--Tf39wPN.mjs";
import { APPEARANCE_CONFIG_KEYS, APPEARANCE_ENABLED_KEY, APPEARANCE_KEYS, COLOR_MODE_CONFIG_KEY, DEFAULT_APPEARANCE, DEFAULT_COLOR_MODE, THEME_COOKIE, isColorMode, mergeAppearance, pickAppearance } from "./_ssr/appearance-lSt69CdG.mjs";
import { parseCookieConsent } from "./_ssr/globals-CUbZXTZ-.mjs";
// node_modules/.nitro/vite/services/ssr/assets/__root-CbEBYLCp.js
var getAnalyticsConfigs_createServerFn_handler = createServerRpc({
	id: "cbd81923ae1249d4c007f69579597cf1e79f1f7b8675cc608ba82e8926b5bb59",
	name: "getAnalyticsConfigs",
	filename: "src/routes/__root.tsx"
}, (opts) => getAnalyticsConfigs.__executeServer(opts));
var getAnalyticsConfigs = createServerFn().handler(getAnalyticsConfigs_createServerFn_handler, async () => {
	const { getAllConfigs } = await import("./_ssr/service-DpHLlcDG.mjs").then((n) => n.service_exports);
	const { getCookie } = await import("./_ssr/ssr.mjs").then((n) => n.ssr_exports).then((n) => n.server_exports);
	const { safeEmbedSetting } = await import("./_ssr/embed-ids-DwdyPQij.mjs").then((n) => n.embed_ids_exports);
	const configs = await getAllConfigs();
	const rawPlausibleSrc = configs.plausible_src?.trim() || "";
	const plausibleSrc = safeEmbedSetting("plausible_src", rawPlausibleSrc);
	const plausibleOff = !!rawPlausibleSrc && !plausibleSrc;
	const cookieConsentEnabled = configs.cookie_consent_enabled === "true";
	const appearanceEnabled = configs[APPEARANCE_ENABLED_KEY] === "true";
	const userThemeEnabled = appearanceEnabled && configs.user_theme_enabled === "true";
	const site = pickAppearance(appearanceEnabled ? Object.fromEntries(APPEARANCE_KEYS.map((k) => [k, configs[APPEARANCE_CONFIG_KEYS[k]]])) : {});
	const user = pickAppearance({ theme: userThemeEnabled ? getCookie(THEME_COOKIE) : void 0 });
	const siteAppearance = mergeAppearance(site, DEFAULT_APPEARANCE);
	const rawColorMode = configs[COLOR_MODE_CONFIG_KEY];
	const colorMode = appearanceEnabled && isColorMode(rawColorMode) ? rawColorMode : DEFAULT_COLOR_MODE;
	return {
		appearanceEnabled,
		colorMode,
		colorModeForced: appearanceEnabled && !userThemeEnabled && colorMode !== "system",
		appearance: mergeAppearance(user, siteAppearance),
		siteAppearance,
		userTheme: user.theme,
		userThemeEnabled,
		cookieConsentEnabled,
		cookieConsent: cookieConsentEnabled ? parseCookieConsent(getCookie("cookie_consent")) : null,
		gaId: configs.google_analytics_id?.trim() || "",
		plausibleDomain: plausibleOff ? "" : configs.plausible_domain?.trim() || "",
		plausibleSrc,
		adsenseCode: configs.adsense_code?.trim() || "",
		crispWebsiteId: configs.crisp_enabled === "true" ? configs.crisp_website_id?.trim() || "" : "",
		tawkPropertyId: configs.tawk_enabled === "true" ? configs.tawk_property_id?.trim() || "" : "",
		tawkWidgetId: configs.tawk_enabled === "true" ? configs.tawk_widget_id?.trim() || "" : ""
	};
});
export { getAnalyticsConfigs_createServerFn_handler };
