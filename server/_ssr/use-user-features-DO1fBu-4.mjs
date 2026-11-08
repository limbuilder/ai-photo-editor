import { isUserFeatureOn } from "./service-DpHLlcDG.mjs";
import { usePublicConfig } from "./router-FRpG8iox.mjs";
// node_modules/.nitro/vite/services/ssr/assets/use-user-features-DO1fBu-4.js
/**
* Which optional user-center pages are on. `loaded` is false until the
* public config arrives; until then each one reads as its default.
*/
function useUserFeatures() {
	const { data, isSuccess } = usePublicConfig();
	return {
		loaded: isSuccess,
		credits: isUserFeatureOn(data, "credits_enabled"),
		billing: isUserFeatureOn(data, "billing_enabled"),
		payments: isUserFeatureOn(data, "payments_enabled"),
		apikeys: isUserFeatureOn(data, "apikeys_enabled"),
		tickets: isUserFeatureOn(data, "tickets_enabled")
	};
}
export { useUserFeatures };
