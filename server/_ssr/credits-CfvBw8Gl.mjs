import { __toESM } from "../_runtime.mjs";
import { require_jsx_runtime, require_react } from "../_libs/@base-ui/react+[...].mjs";
import { useQuery } from "../_libs/tanstack__react-query.mjs";
import { keepPreviousData } from "../_libs/tanstack__query-core.mjs";
import { Route$94, admin_credits_amount, admin_credits_created_at, admin_credits_description, admin_credits_expires_at, admin_credits_no_credits, admin_credits_remaining, admin_credits_scene, admin_credits_search_placeholder, admin_credits_title, admin_credits_transaction_no, admin_credits_type, admin_credits_user, apiGet, cn, tDynamic } from "./router-FRpG8iox.mjs";
import { Card, CardContent } from "./card-BkWHqUeW.mjs";
import { formatDateTime } from "./time-LUwPQmfY.mjs";
import { DataTable } from "./data-table-DKAF6YZO.mjs";
import { UserCell } from "./user-cell-CHkKMixM.mjs";
// node_modules/.nitro/vite/services/ssr/assets/credits-CfvBw8Gl.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var PAGE_SIZE = 20;
var TABS = [
	"all",
	"grant",
	"consume"
];
function CreditsPage() {
	const initialSearch = Route$94.useSearch().search ?? "";
	const [page, setPage] = (0, import_react.useState)(1);
	const [tab, setTab] = (0, import_react.useState)("all");
	const [search, setSearch] = (0, import_react.useState)(initialSearch);
	const [debouncedSearch, setDebouncedSearch] = (0, import_react.useState)(initialSearch);
	(0, import_react.useEffect)(() => {
		const timer = setTimeout(() => setDebouncedSearch(search), 300);
		return () => clearTimeout(timer);
	}, [search]);
	(0, import_react.useEffect)(() => {
		setPage(1);
	}, [tab, debouncedSearch]);
	const query = useQuery({
		queryKey: [
			"admin-credits",
			page,
			tab,
			debouncedSearch
		],
		queryFn: () => {
			const params = new URLSearchParams({
				page: String(page),
				pageSize: String(PAGE_SIZE)
			});
			if (tab !== "all") params.set("transactionType", tab);
			if (debouncedSearch) params.set("search", debouncedSearch);
			return apiGet(`/api/admin/credits?${params}`);
		},
		placeholderData: keepPreviousData
	});
	const credits = query.data?.items ?? [];
	const total = query.data?.total ?? 0;
	const columns = [
		{
			header: admin_credits_transaction_no(),
			cell: (c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-mono text-xs",
				children: c.transactionNo
			})
		},
		{
			header: admin_credits_user(),
			cell: (c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserCell, {
				userId: c.userId,
				name: c.userName,
				email: c.userEmail,
				image: c.userImage
			})
		},
		{
			header: admin_credits_amount(),
			cell: (c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: cn("font-medium", c.credits > 0 ? "text-green-600" : "text-red-500"),
				children: c.credits > 0 ? `+${c.credits}` : c.credits
			})
		},
		{
			header: admin_credits_remaining(),
			cell: (c) => c.remainingCredits
		},
		{
			header: admin_credits_type(),
			cell: (c) => c.transactionType
		},
		{
			header: admin_credits_scene(),
			cell: (c) => c.transactionScene || "—"
		},
		{
			header: admin_credits_description(),
			cell: (c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-muted-foreground block max-w-[200px] truncate text-sm",
				children: c.description || "—"
			})
		},
		{
			header: admin_credits_expires_at(),
			cell: (c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-muted-foreground text-sm",
				children: c.expiresAt ? formatDateTime(c.expiresAt) : "—"
			})
		},
		{
			header: admin_credits_created_at(),
			cell: (c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-muted-foreground text-sm",
				children: formatDateTime(c.createdAt)
			})
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6 p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-2xl font-bold",
				children: admin_credits_title()
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground",
				children: admin_credits_description()
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-border flex gap-1 overflow-x-auto overflow-y-hidden border-b",
				children: TABS.map((tb) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setTab(tb),
					className: cn("-mb-px border-b-2 px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors", tab === tb ? "border-primary text-foreground" : "text-muted-foreground hover:text-foreground border-transparent"),
					children: tDynamic(`admin.credits.tab_${tb}`)
				}, tb))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
				columns,
				data: credits,
				total,
				page,
				pageSize: PAGE_SIZE,
				onPageChange: setPage,
				rowKey: (c) => c.id,
				emptyText: admin_credits_no_credits(),
				search,
				onSearchChange: setSearch,
				searchPlaceholder: admin_credits_search_placeholder(),
				onRefresh: () => query.refetch(),
				loading: query.isFetching || query.isPending
			}) }) })
		]
	});
}
export { CreditsPage as component };
