import { useQuery } from "../_libs/tanstack__react-query.mjs";
import { apiGet } from "./router-FRpG8iox.mjs";
// node_modules/.nitro/vite/services/ssr/assets/use-user-permissions-Cp87hGxQ.js
function useUserPermissions(enabled = true) {
	return useQuery({
		queryKey: ["user-permissions"],
		queryFn: () => apiGet("/api/user/permissions"),
		staleTime: 3e5,
		enabled
	});
}
export { useUserPermissions };
