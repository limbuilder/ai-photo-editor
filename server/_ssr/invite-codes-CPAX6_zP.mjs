import { __toESM } from "../_runtime.mjs";
import { require_jsx_runtime, require_react } from "../_libs/@base-ui/react+[...].mjs";
import { useForm } from "../_libs/@tanstack/react-form+[...].mjs";
import { number, object, string$1 as string } from "../_libs/modelcontextprotocol__core+zod.mjs";
import { useMutation, useQuery, useQueryClient } from "../_libs/tanstack__react-query.mjs";
import { keepPreviousData } from "../_libs/tanstack__query-core.mjs";
import { Copy, Plus, Trash2 } from "../_libs/lucide-react.mjs";
import { toast } from "../_libs/sonner.mjs";
import { Button$1, admin_invite_codes_actions_col, admin_invite_codes_cancel, admin_invite_codes_code_col, admin_invite_codes_copied, admin_invite_codes_count_label, admin_invite_codes_create_button, admin_invite_codes_create_description, admin_invite_codes_create_submit, admin_invite_codes_create_success, admin_invite_codes_create_title, admin_invite_codes_created_col, admin_invite_codes_creating, admin_invite_codes_delete_confirm, admin_invite_codes_delete_description, admin_invite_codes_delete_success, admin_invite_codes_delete_title, admin_invite_codes_description, admin_invite_codes_empty, admin_invite_codes_expires_col, admin_invite_codes_expires_label, admin_invite_codes_invalid_input, admin_invite_codes_max_uses_label, admin_invite_codes_note_col, admin_invite_codes_note_label, admin_invite_codes_note_placeholder, admin_invite_codes_search_placeholder, admin_invite_codes_title, admin_invite_codes_trial_days_col, admin_invite_codes_trial_days_label, admin_invite_codes_usage_col, apiDelete, apiGet, apiPost, cn, tDynamic } from "./router-FRpG8iox.mjs";
import { Label } from "./label-Cmbt5KTb.mjs";
import { Input$1 } from "./input-CacA4PHh.mjs";
import { Card, CardContent } from "./card-BkWHqUeW.mjs";
import { Dialog$1, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "./dialog-oXWpGNwj.mjs";
import { formatDateTime } from "./time-LUwPQmfY.mjs";
import { DataTable } from "./data-table-DKAF6YZO.mjs";
// node_modules/.nitro/vite/services/ssr/assets/invite-codes-CPAX6_zP.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var TABS = [
	"all",
	"available",
	"used"
];
var PAGE_SIZE = 20;
var inviteCodeSchema = object({
	count: number().min(1),
	maxUses: number().min(1),
	trialDays: number().min(1),
	note: string(),
	expiresAt: string()
});
var emptyForm = {
	count: "1",
	maxUses: "1",
	trialDays: "15",
	note: "",
	expiresAt: ""
};
function InviteCodesPage() {
	const queryClient = useQueryClient();
	const [page, setPage] = (0, import_react.useState)(1);
	const [tab, setTab] = (0, import_react.useState)("all");
	const [search, setSearch] = (0, import_react.useState)("");
	const [debouncedSearch, setDebouncedSearch] = (0, import_react.useState)("");
	const [createOpen, setCreateOpen] = (0, import_react.useState)(false);
	const [deletingId, setDeletingId] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		const timer = setTimeout(() => setDebouncedSearch(search), 300);
		return () => clearTimeout(timer);
	}, [search]);
	(0, import_react.useEffect)(() => {
		setPage(1);
	}, [debouncedSearch, tab]);
	const listQuery = useQuery({
		queryKey: [
			"admin-invite-codes",
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
			return apiGet(`/api/admin/invite-codes?${params}`);
		},
		placeholderData: keepPreviousData
	});
	const createForm = useForm({
		defaultValues: emptyForm,
		validators: { onSubmit: inviteCodeSchema },
		onSubmitInvalid: () => {
			toast.error(admin_invite_codes_invalid_input());
		},
		onSubmit: async ({ value }) => {
			const n = Number(value.count);
			const mu = Number(value.maxUses);
			const d = Number(value.trialDays);
			await createMutation.mutateAsync({
				count: n > 1 ? n : void 0,
				maxUses: mu,
				trialDays: d,
				note: value.note || void 0,
				expiresAt: value.expiresAt ? new Date(value.expiresAt).toISOString() : null
			});
		}
	});
	const createMutation = useMutation({
		mutationFn: (body) => apiPost("/api/admin/invite-codes", body),
		onSuccess: () => {
			toast.success(admin_invite_codes_create_success());
			setCreateOpen(false);
			createForm.reset();
			setPage(1);
			queryClient.invalidateQueries({ queryKey: ["admin-invite-codes"] });
		},
		onError: (e) => toast.error(e.message)
	});
	const deleteMutation = useMutation({
		mutationFn: (id) => apiDelete(`/api/admin/invite-codes?id=${id}`),
		onSuccess: () => {
			toast.success(admin_invite_codes_delete_success());
			setDeletingId(null);
			queryClient.invalidateQueries({ queryKey: ["admin-invite-codes"] });
		},
		onError: (e) => toast.error(e.message)
	});
	function copyCode(code) {
		navigator.clipboard.writeText(code).then(() => toast.success(admin_invite_codes_copied()), () => toast.error("Failed"));
	}
	const columns = [
		{
			header: admin_invite_codes_code_col(),
			cell: (r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
					className: "font-mono text-sm",
					children: r.code
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
					variant: "ghost",
					size: "icon",
					className: "size-6",
					onClick: () => copyCode(r.code),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "size-3" })
				})]
			})
		},
		{
			header: admin_invite_codes_usage_col(),
			className: "w-[120px]",
			cell: (r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "tabular-nums",
				children: [
					r.usedCount,
					" / ",
					r.maxUses
				]
			})
		},
		{
			header: admin_invite_codes_trial_days_col(),
			className: "w-[100px]",
			cell: (r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "tabular-nums",
				children: r.trialDays
			})
		},
		{
			header: admin_invite_codes_note_col(),
			cell: (r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-muted-foreground",
				children: r.note || "—"
			})
		},
		{
			header: admin_invite_codes_expires_col(),
			cell: (r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-muted-foreground",
				children: r.expiresAt ? formatDateTime(r.expiresAt) : "—"
			})
		},
		{
			header: admin_invite_codes_created_col(),
			cell: (r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-muted-foreground",
				children: formatDateTime(r.createdAt)
			})
		},
		{
			header: admin_invite_codes_actions_col(),
			className: "w-[80px]",
			cell: (r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
				variant: "ghost",
				size: "icon",
				className: "size-7",
				onClick: () => setDeletingId(r.id),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "text-destructive size-4" })
			})
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6 p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-2xl font-bold",
					children: admin_invite_codes_title()
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground",
					children: admin_invite_codes_description()
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button$1, {
					onClick: () => setCreateOpen(true),
					className: "gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" }), admin_invite_codes_create_button()]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-border flex gap-1 overflow-x-auto overflow-y-hidden border-b",
				children: TABS.map((tb) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setTab(tb),
					className: cn("-mb-px border-b-2 px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors", tab === tb ? "border-primary text-foreground" : "text-muted-foreground hover:text-foreground border-transparent"),
					children: tDynamic(`admin.invite_codes.tab_${tb}`)
				}, tb))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
				columns,
				data: listQuery.data?.items ?? [],
				total: listQuery.data?.total ?? 0,
				page,
				pageSize: PAGE_SIZE,
				onPageChange: setPage,
				rowKey: (r) => r.id,
				emptyText: admin_invite_codes_empty(),
				search,
				onSearchChange: setSearch,
				searchPlaceholder: admin_invite_codes_search_placeholder(),
				onRefresh: () => listQuery.refetch(),
				loading: listQuery.isFetching || listQuery.isPending
			}) }) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog$1, {
				open: createOpen,
				onOpenChange: (v) => {
					setCreateOpen(v);
					if (!v) createForm.reset();
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: admin_invite_codes_create_title() }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: admin_invite_codes_create_description() })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: (e) => {
						e.preventDefault();
						e.stopPropagation();
						createForm.handleSubmit();
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-4 py-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-2 gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(createForm.Field, {
									name: "count",
									children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: admin_invite_codes_count_label() }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input$1, {
											type: "number",
											min: "1",
											max: "100",
											value: String(field.state.value),
											onChange: (e) => field.handleChange(e.target.value),
											onBlur: field.handleBlur
										})]
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(createForm.Field, {
									name: "maxUses",
									children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: admin_invite_codes_max_uses_label() }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input$1, {
											type: "number",
											min: "1",
											value: String(field.state.value),
											onChange: (e) => field.handleChange(e.target.value),
											onBlur: field.handleBlur
										})]
									})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(createForm.Field, {
								name: "trialDays",
								children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: admin_invite_codes_trial_days_label() }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input$1, {
										type: "number",
										min: "1",
										value: String(field.state.value),
										onChange: (e) => field.handleChange(e.target.value),
										onBlur: field.handleBlur
									})]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(createForm.Field, {
								name: "expiresAt",
								children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: admin_invite_codes_expires_label() }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input$1, {
										type: "date",
										value: String(field.state.value),
										onChange: (e) => field.handleChange(e.target.value),
										onBlur: field.handleBlur
									})]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(createForm.Field, {
								name: "note",
								children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: admin_invite_codes_note_label() }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input$1, {
										value: String(field.state.value),
										onChange: (e) => field.handleChange(e.target.value),
										onBlur: field.handleBlur,
										placeholder: admin_invite_codes_note_placeholder()
									})]
								})
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
						type: "button",
						variant: "outline",
						onClick: () => setCreateOpen(false),
						children: admin_invite_codes_cancel()
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
						type: "submit",
						disabled: createMutation.isPending,
						children: createMutation.isPending ? admin_invite_codes_creating() : admin_invite_codes_create_submit()
					})] })]
				})] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog$1, {
				open: !!deletingId,
				onOpenChange: (v) => !v && setDeletingId(null),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: admin_invite_codes_delete_title() }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: admin_invite_codes_delete_description() })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
					variant: "outline",
					onClick: () => setDeletingId(null),
					children: admin_invite_codes_cancel()
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
					variant: "destructive",
					disabled: deleteMutation.isPending,
					onClick: () => deletingId && deleteMutation.mutate(deletingId),
					children: admin_invite_codes_delete_confirm()
				})] })] })
			})
		]
	});
}
export { InviteCodesPage as component };
