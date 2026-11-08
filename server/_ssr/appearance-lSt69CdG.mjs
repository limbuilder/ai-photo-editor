// node_modules/.nitro/vite/services/ssr/assets/appearance-lSt69CdG.js
/**
* Appearance presets: theme color, font, font size and sidebar layout. Off by
* default: until the admin turns on APPEARANCE_ENABLED_KEY, nothing here
* applies and the site renders from the code (`:root`/`.dark` in
* globals.css, DEFAULT_APPEARANCE for the sidebar). Once on, the admin picks
* them (Settings → General → Appearance). When
* `user_theme_enabled` is on, a user may override the theme color only, from
* the user menu (THEME_COOKIE). Light/dark lives in next-themes.
*
* - Themes: palettes live in `src/styles/globals.css` under
*   `[data-theme='<id>']`. To add one, append it here, add its CSS block, and
*   add `common.themes.<id>` to messages/en.json.
* - Fonts: `stack` becomes `--font-sans` on <html>. Self-hosted fonts are
*   imported in `src/routes/__root.tsx`; @font-face files only download when
*   a font is actually used. Labels: `common.fonts.<id>`.
* - Sizes: `scale` becomes the root font-size, so rem-based spacing scales
*   with it (like browser zoom). Labels: `common.font_sizes.<id>`.
*/
var THEMES = [
	{
		id: "classic",
		swatch: "oklch(0.22 0.005 60)"
	},
	{
		id: "forest",
		swatch: "oklch(0.52 0.12 150)"
	},
	{
		id: "ocean",
		swatch: "oklch(0.5 0.15 255)"
	},
	{
		id: "violet",
		swatch: "oklch(0.48 0.17 290)"
	},
	{
		id: "sunset",
		swatch: "oklch(0.58 0.16 42)"
	},
	{
		id: "rose",
		swatch: "oklch(0.54 0.18 10)"
	},
	{
		id: "slate",
		swatch: "oklch(0.3 0.03 260)"
	}
];
var FONTS = [
	{
		id: "inter",
		stack: "'Inter Variable', 'Inter', sans-serif"
	},
	{
		id: "system",
		stack: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', sans-serif"
	},
	{
		id: "rounded",
		stack: "'Nunito Variable', ui-rounded, 'SF Pro Rounded', sans-serif"
	},
	{
		id: "serif",
		stack: "'Source Serif 4 Variable', ui-serif, Georgia, 'Noto Serif SC', 'Source Han Serif SC', 'Songti SC', serif"
	}
];
var FONT_SIZES = [
	{
		id: "sm",
		scale: "93.75%"
	},
	{
		id: "md",
		scale: "100%"
	},
	{
		id: "lg",
		scale: "107.5%"
	}
];
var SIDEBAR_VARIANTS = [
	{ id: "inset" },
	{ id: "floating" },
	{ id: "sidebar" }
];
var SIDEBAR_COLLAPSIBLES = [{ id: "offcanvas" }, { id: "icon" }];
/**
* Light/dark. Owned by next-themes (per browser, localStorage), not by the
* cookie-backed parts below. DEFAULT_COLOR_MODE is the code's default (set it
* to 'dark' for a dark-first brand; don't hard-code ThemeProvider props). With
* the switch on, the admin's `app_color_mode` replaces it, and is forced on
* everyone when `user_theme_enabled` is off (unless it is 'system').
*/
var COLOR_MODES = [
	{ id: "system" },
	{ id: "light" },
	{ id: "dark" }
];
var COLOR_MODE_CONFIG_KEY = "app_color_mode";
var DEFAULT_COLOR_MODE = "system";
function isColorMode(value) {
	return typeof value === "string" && COLOR_MODES.some((m) => m.id === value);
}
var DEFAULT_APPEARANCE = {
	theme: "classic",
	font: "inter",
	fontSize: "md",
	sidebarVariant: "inset",
	sidebarCollapsible: "offcanvas"
};
var OPTIONS = {
	theme: THEMES,
	font: FONTS,
	fontSize: FONT_SIZES,
	sidebarVariant: SIDEBAR_VARIANTS,
	sidebarCollapsible: SIDEBAR_COLLAPSIBLES
};
/** Admin config key holding the site default for each part. */
var APPEARANCE_CONFIG_KEYS = {
	theme: "app_theme",
	font: "app_font",
	fontSize: "app_font_size",
	sidebarVariant: "app_sidebar_variant",
	sidebarCollapsible: "app_sidebar_collapsible"
};
/** Master switch: 'true' turns the admin's appearance settings on. */
var APPEARANCE_ENABLED_KEY = "appearance_enabled";
/** Cookie holding a user's own theme color (only honored when allowed). */
var THEME_COOKIE = "app_theme";
var APPEARANCE_KEYS = Object.keys(OPTIONS);
/** Values land in HTML attributes and inline styles: allow-list only. */
function isAppearanceValue(key, value) {
	return typeof value === "string" && OPTIONS[key].some((o) => o.id === value);
}
/** Known values from `source`, or null for anything missing or unknown. */
function pickAppearance(source) {
	return Object.fromEntries(APPEARANCE_KEYS.map((k) => [k, isAppearanceValue(k, source[k]) ? source[k] : null]));
}
/** Fill the gaps in `top` from `base`, part by part. */
function mergeAppearance(top, base) {
	return Object.fromEntries(APPEARANCE_KEYS.map((k) => [k, top[k] ?? base[k]]));
}
/** Inline style for <html>: only what differs from the stylesheet defaults. */
function appearanceStyle(a) {
	const style = {};
	if (a.font !== DEFAULT_APPEARANCE.font) style["--font-sans"] = FONTS.find((f) => f.id === a.font).stack;
	if (a.fontSize !== DEFAULT_APPEARANCE.fontSize) style.fontSize = FONT_SIZES.find((s) => s.id === a.fontSize).scale;
	return style;
}
export { APPEARANCE_CONFIG_KEYS, APPEARANCE_ENABLED_KEY, APPEARANCE_KEYS, COLOR_MODES, COLOR_MODE_CONFIG_KEY, DEFAULT_APPEARANCE, DEFAULT_COLOR_MODE, FONTS, FONT_SIZES, SIDEBAR_COLLAPSIBLES, SIDEBAR_VARIANTS, THEMES, THEME_COOKIE, appearanceStyle, isAppearanceValue, isColorMode, mergeAppearance, pickAppearance };
