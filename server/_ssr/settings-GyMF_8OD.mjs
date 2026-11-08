import { __exportAll } from "./ssr.mjs";
// node_modules/.nitro/vite/services/ssr/assets/settings-GyMF_8OD.js
var settings_exports = /* @__PURE__ */ __exportAll({ guestPostSettings: () => guestPostSettings });
/** Guest post settings from admin config, with defaults. */
function guestPostSettings(configs) {
	const int = (v, fallback, max) => {
		const n = parseInt(v || "", 10);
		return Number.isFinite(n) && n >= 0 ? Math.min(n, max) : fallback;
	};
	return {
		enabled: configs.guest_post_enabled === "true",
		minWords: int(configs.guest_post_min_words, 300, 1e4)
	};
}
export { guestPostSettings, settings_exports };
