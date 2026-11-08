import { __toESM } from "../_runtime.mjs";
import { require_jsx_runtime, require_react } from "../_libs/@base-ui/react+[...].mjs";
import { useQuery } from "../_libs/tanstack__react-query.mjs";
import { keepPreviousData } from "../_libs/tanstack__query-core.mjs";
import { Route$96, admin_ai_tasks_created_at, admin_ai_tasks_credits, admin_ai_tasks_description, admin_ai_tasks_detail_title, admin_ai_tasks_no_tasks, admin_ai_tasks_original, admin_ai_tasks_preview, admin_ai_tasks_prompt, admin_ai_tasks_provider, admin_ai_tasks_result, admin_ai_tasks_search_placeholder, admin_ai_tasks_status, admin_ai_tasks_title, admin_ai_tasks_tool, admin_ai_tasks_user, apiGet, cn, tDynamic } from "./router-FRpG8iox.mjs";
import { Card, CardContent } from "./card-BkWHqUeW.mjs";
import { Dialog$1, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./dialog-oXWpGNwj.mjs";
import { Badge } from "./badge-DsAADeEG.mjs";
import { formatDateTime } from "./time-LUwPQmfY.mjs";
import { DataTable } from "./data-table-DKAF6YZO.mjs";
import { UserCell } from "./user-cell-CHkKMixM.mjs";
// node_modules/.nitro/vite/services/ssr/assets/ai-tasks-CLurK_1o.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var PAGE_SIZE = 20;
var TABS = [
	"all",
	"pending",
	"processing",
	"success",
	"failed",
	"canceled"
];
var STATUS_BADGE = {
	pending: "secondary",
	processing: "default",
	success: "outline",
	failed: "destructive",
	canceled: "secondary"
};
function Thumb({ src, alt, className }) {
	if (!src) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("bg-muted text-muted-foreground flex items-center justify-center rounded-md text-xs", className),
		children: "—"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src,
		alt,
		className: cn("border-border rounded-md border object-cover", className)
	});
}
function AiTasksPage() {
	const initialSearch = Route$96.useSearch().search ?? "";
	const [page, setPage] = (0, import_react.useState)(1);
	const [tab, setTab] = (0, import_react.useState)("all");
	const [search, setSearch] = (0, import_react.useState)(initialSearch);
	const [debouncedSearch, setDebouncedSearch] = (0, import_react.useState)(initialSearch);
	const [active, setActive] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		const timer = setTimeout(() => setDebouncedSearch(search), 300);
		return () => clearTimeout(timer);
	}, [search]);
	(0, import_react.useEffect)(() => {
		setPage(1);
	}, [tab, debouncedSearch]);
	const query = useQuery({
		queryKey: [
			"admin-ai-tasks",
			page,
			tab,
			debouncedSearch
		],
		queryFn: () => {
			const params = new URLSearchParams({
				page: String(page),
				pageSize: String(PAGE_SIZE)
			});
			if (tab !== "all") params.set("status", tab);
			if (debouncedSearch) params.set("search", debouncedSearch);
			return apiGet(`/api/admin/ai-tasks?${params}`);
		},
		placeholderData: keepPreviousData
	});
	const tasks = query.data?.items ?? [];
	const total = query.data?.total ?? 0;
	const columns = [
		{
			header: admin_ai_tasks_preview(),
			cell: (t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => setActive(t),
				className: "flex items-center gap-1.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Thumb, {
					src: t.originalUrl,
					alt: "",
					className: "size-10"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Thumb, {
					src: t.resultUrl,
					alt: "",
					className: "size-10"
				})]
			})
		},
		{
			header: admin_ai_tasks_user(),
			cell: (t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserCell, {
				userId: t.userId,
				name: t.userName,
				email: t.userEmail,
				image: t.userImage
			})
		},
		{
			header: admin_ai_tasks_prompt(),
			cell: (t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => setActive(t),
				className: "text-muted-foreground hover:text-foreground block max-w-[260px] truncate text-left text-sm",
				title: t.prompt,
				children: t.prompt || "—"
			})
		},
		{
			header: admin_ai_tasks_status(),
			cell: (t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
				variant: STATUS_BADGE[t.status] ?? "secondary",
				children: tDynamic(`admin.ai_tasks.status_${t.status}`)
			})
		},
		{
			header: admin_ai_tasks_tool(),
			cell: (t) => t.tool || "—"
		},
		{
			header: admin_ai_tasks_credits(),
			cell: (t) => t.costCredits
		},
		{
			header: admin_ai_tasks_provider(),
			cell: (t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "text-muted-foreground text-xs",
				children: [t.provider, t.quality ? ` · ${t.quality}` : ""]
			})
		},
		{
			header: admin_ai_tasks_created_at(),
			cell: (t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-muted-foreground text-sm",
				children: formatDateTime(t.createdAt)
			})
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6 p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-2xl font-bold",
				children: admin_ai_tasks_title()
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground",
				children: admin_ai_tasks_description()
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-border flex gap-1 overflow-x-auto overflow-y-hidden border-b",
				children: TABS.map((tb) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setTab(tb),
					className: cn("-mb-px border-b-2 px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors", tab === tb ? "border-primary text-foreground" : "text-muted-foreground hover:text-foreground border-transparent"),
					children: tDynamic(`admin.ai_tasks.tab_${tb}`)
				}, tb))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
				columns,
				data: tasks,
				total,
				page,
				pageSize: PAGE_SIZE,
				onPageChange: setPage,
				rowKey: (t) => t.id,
				emptyText: admin_ai_tasks_no_tasks(),
				search,
				onSearchChange: setSearch,
				searchPlaceholder: admin_ai_tasks_search_placeholder(),
				onRefresh: () => query.refetch(),
				loading: query.isFetching || query.isPending
			}) }) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog$1, {
				open: !!active,
				onOpenChange: (open) => !open && setActive(null),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContent, {
					className: "max-w-3xl",
					children: active && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: admin_ai_tasks_detail_title() }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
						className: "font-mono text-xs",
						children: active.id
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-3 sm:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted-foreground mb-2 text-xs font-medium uppercase",
									children: admin_ai_tasks_original()
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Thumb, {
									src: active.originalUrl,
									alt: admin_ai_tasks_original(),
									className: "aspect-square w-full"
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted-foreground mb-2 text-xs font-medium uppercase",
									children: admin_ai_tasks_result()
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Thumb, {
									src: active.resultUrl,
									alt: admin_ai_tasks_result(),
									className: "aspect-square w-full"
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-2 text-sm sm:grid-cols-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-muted-foreground",
										children: [
											admin_ai_tasks_user(),
											":",
											" "
										]
									}), active.userEmail || active.userName || active.userId] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-muted-foreground",
										children: [
											admin_ai_tasks_status(),
											":",
											" "
										]
									}), tDynamic(`admin.ai_tasks.status_${active.status}`)] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-muted-foreground",
										children: [
											admin_ai_tasks_tool(),
											":",
											" "
										]
									}), active.tool || "—"] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-muted-foreground",
										children: [
											admin_ai_tasks_credits(),
											":",
											" "
										]
									}), active.costCredits] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-muted-foreground",
											children: [
												admin_ai_tasks_provider(),
												":",
												" "
											]
										}),
										active.provider,
										" / ",
										active.model,
										active.quality ? ` · ${active.quality}` : ""
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-muted-foreground",
										children: [
											admin_ai_tasks_created_at(),
											":",
											" "
										]
									}), formatDateTime(active.createdAt)] })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground mb-1 text-xs font-medium uppercase",
								children: admin_ai_tasks_prompt()
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "bg-muted rounded-md p-3 text-sm whitespace-pre-wrap",
								children: active.prompt || "—"
							})] })
						]
					})] })
				})
			})
		]
	});
}
export { AiTasksPage as component };
