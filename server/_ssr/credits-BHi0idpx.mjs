import { __toESM } from "../_runtime.mjs";
import { require_jsx_runtime, require_react } from "../_libs/@base-ui/react+[...].mjs";
import { useQuery } from "../_libs/tanstack__react-query.mjs";
import { keepPreviousData } from "../_libs/tanstack__query-core.mjs";
import { Coins } from "../_libs/lucide-react.mjs";
import { Link$2, apiGet, buttonVariants, cn, settings_credits_balance, settings_credits_credits, settings_credits_date, settings_credits_description, settings_credits_description_col, settings_credits_expires_at, settings_credits_no_records, settings_credits_purchase, settings_credits_remaining, settings_credits_scene, settings_credits_title, settings_credits_transaction_no, settings_credits_type, tDynamic } from "./router-FRpG8iox.mjs";
import { Card, CardContent, CardHeader, CardTitle } from "./card-BkWHqUeW.mjs";
import { Badge } from "./badge-DsAADeEG.mjs";
import { DataTable } from "./data-table-DKAF6YZO.mjs";
import { FeatureGate } from "./-feature-gate-BWXOOgeJ.mjs";
// node_modules/.nitro/vite/services/ssr/assets/credits-BHi0idpx.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var TABS = [
	"all",
	"grant",
	"consume"
];
var PAGE_SIZE = 20;
function CreditsPage() {
	const [tab, setTab] = (0, import_react.useState)("all");
	const [page, setPage] = (0, import_react.useState)(1);
	const [search, setSearch] = (0, import_react.useState)("");
	const [debouncedSearch, setDebouncedSearch] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		const timer = setTimeout(() => setDebouncedSearch(search), 300);
		return () => clearTimeout(timer);
	}, [search]);
	(0, import_react.useEffect)(() => {
		setPage(1);
	}, [tab, debouncedSearch]);
	const balanceQuery = useQuery({
		queryKey: ["user-credits", "balance"],
		queryFn: () => apiGet("/api/credits")
	});
	const balance = balanceQuery.data?.balance ?? null;
	const balanceLoaded = !balanceQuery.isPending;
	const query = useQuery({
		queryKey: [
			"user-credits",
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
			return apiGet(`/api/user/credits?${params}`);
		},
		placeholderData: keepPreviousData
	});
	const rows = query.data?.items ?? [];
	const total = query.data?.total ?? 0;
	const columns = [
		{
			header: settings_credits_transaction_no(),
			cell: (r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-mono text-xs",
				children: r.transactionNo
			})
		},
		{
			header: settings_credits_description_col(),
			cell: (r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: r.description || "—" })
		},
		{
			header: settings_credits_type(),
			cell: (r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
				variant: r.transactionType === "consume" ? "secondary" : "default",
				children: r.transactionType
			})
		},
		{
			header: settings_credits_scene(),
			cell: (r) => r.transactionScene || "—"
		},
		{
			header: settings_credits_credits(),
			className: "text-right",
			cell: (r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: cn("font-medium tabular-nums", r.transactionType === "consume" && "text-muted-foreground"),
				children: r.credits > 0 ? `+${r.credits}` : r.credits
			})
		},
		{
			header: settings_credits_remaining(),
			className: "text-right",
			cell: (r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-muted-foreground text-sm tabular-nums",
				children: r.remainingCredits
			})
		},
		{
			header: settings_credits_expires_at(),
			cell: (r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-muted-foreground text-sm",
				children: r.expiresAt ? new Date(r.expiresAt).toLocaleDateString() : "—"
			})
		},
		{
			header: settings_credits_date(),
			cell: (r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-muted-foreground text-sm",
				children: new Date(r.createdAt).toLocaleDateString()
			})
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6 p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-2xl font-bold",
				children: settings_credits_title()
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground",
				children: settings_credits_description()
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "max-w-md",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: settings_credits_balance() }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link$2, {
						href: "/pricing",
						className: cn(buttonVariants({
							variant: "outline",
							size: "sm"
						}), "gap-2"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Coins, { className: "size-4" }), settings_credits_purchase()]
					})]
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-3xl font-bold",
					children: balanceLoaded ? balance ?? 0 : "…"
				}) })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-border flex gap-1 overflow-x-auto overflow-y-hidden border-b",
				children: TABS.map((tb) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setTab(tb),
					className: cn("-mb-px border-b-2 px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors", tab === tb ? "border-primary text-foreground" : "text-muted-foreground hover:text-foreground border-transparent"),
					children: tDynamic(`settings.credits.tab_${tb}`)
				}, tb))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
				columns,
				data: rows,
				total,
				page,
				pageSize: PAGE_SIZE,
				onPageChange: setPage,
				rowKey: (r) => r.id,
				emptyText: settings_credits_no_records(),
				search,
				onSearchChange: setSearch,
				onRefresh: () => query.refetch(),
				loading: query.isFetching || query.isPending
			}) }) })
		]
	});
}
var SplitComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureGate, {
	feature: "credits",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditsPage, {})
});
export { SplitComponent as component };
