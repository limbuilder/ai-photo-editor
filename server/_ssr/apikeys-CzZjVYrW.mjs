import { __toESM } from "../_runtime.mjs";
import { require_jsx_runtime, require_react } from "../_libs/@base-ui/react+[...].mjs";
import { useMutation, useQuery, useQueryClient } from "../_libs/tanstack__react-query.mjs";
import { keepPreviousData } from "../_libs/tanstack__query-core.mjs";
import { Check, Copy, Plus, Trash2 } from "../_libs/lucide-react.mjs";
import { toast } from "../_libs/sonner.mjs";
import { Button$1, apiDelete, apiGet, apiPost, pageQuery, settings_apikeys_actions_col, settings_apikeys_cancel, settings_apikeys_confirm_delete, settings_apikeys_copy_failed, settings_apikeys_create, settings_apikeys_create_description, settings_apikeys_create_key, settings_apikeys_create_title, settings_apikeys_created, settings_apikeys_created_col, settings_apikeys_created_title, settings_apikeys_created_warning, settings_apikeys_creating, settings_apikeys_delete_description, settings_apikeys_delete_title, settings_apikeys_deleted, settings_apikeys_deleting, settings_apikeys_description, settings_apikeys_done, settings_apikeys_key_col, settings_apikeys_key_copied, settings_apikeys_key_name, settings_apikeys_key_name_placeholder, settings_apikeys_last_used_col, settings_apikeys_name_col, settings_apikeys_never_used, settings_apikeys_no_keys, settings_apikeys_title } from "./router-FRpG8iox.mjs";
import { Label } from "./label-Cmbt5KTb.mjs";
import { Input$1 } from "./input-CacA4PHh.mjs";
import { Card, CardContent } from "./card-BkWHqUeW.mjs";
import { Dialog$1, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./dialog-oXWpGNwj.mjs";
import { DataTable } from "./data-table-DKAF6YZO.mjs";
import { FeatureGate } from "./-feature-gate-BWXOOgeJ.mjs";
// node_modules/.nitro/vite/services/ssr/assets/apikeys-CzZjVYrW.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var PAGE_SIZE = 20;
function ApiKeysPage() {
	const queryClient = useQueryClient();
	const [page, setPage] = (0, import_react.useState)(1);
	const [search, setSearch] = (0, import_react.useState)("");
	const [debouncedSearch, setDebouncedSearch] = (0, import_react.useState)("");
	const [newKeyName, setNewKeyName] = (0, import_react.useState)("");
	const [open, setOpen] = (0, import_react.useState)(false);
	const [createdKey, setCreatedKey] = (0, import_react.useState)("");
	const [copied, setCopied] = (0, import_react.useState)(false);
	const [keyToDelete, setKeyToDelete] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		const timer = setTimeout(() => setDebouncedSearch(search), 300);
		return () => clearTimeout(timer);
	}, [search]);
	(0, import_react.useEffect)(() => {
		setPage(1);
	}, [debouncedSearch]);
	const listQuery = useQuery({
		queryKey: [
			"apikeys",
			page,
			debouncedSearch
		],
		queryFn: () => apiGet(pageQuery("/api/apikeys", {
			page,
			pageSize: PAGE_SIZE,
			search: debouncedSearch
		})),
		placeholderData: keepPreviousData
	});
	const createMutation = useMutation({
		mutationFn: (title) => apiPost("/api/apikeys", { title }),
		onSuccess: (data) => {
			toast.success(settings_apikeys_created());
			setOpen(false);
			setNewKeyName("");
			setCopied(false);
			setCreatedKey(data.key);
			queryClient.invalidateQueries({ queryKey: ["apikeys"] });
		},
		onError: (e) => toast.error(e.message)
	});
	const deleteMutation = useMutation({
		mutationFn: (id) => apiDelete(`/api/apikeys?id=${id}`),
		onSuccess: () => {
			toast.success(settings_apikeys_deleted());
			setKeyToDelete(null);
			queryClient.invalidateQueries({ queryKey: ["apikeys"] });
		},
		onError: (e) => toast.error(e.message)
	});
	function handleCreate() {
		if (!newKeyName.trim()) return;
		createMutation.mutate(newKeyName);
	}
	async function handleCopyKey(key) {
		try {
			await navigator.clipboard.writeText(key);
			toast.success(settings_apikeys_key_copied());
		} catch {
			toast.error(settings_apikeys_copy_failed());
		}
	}
	async function handleCopyCreatedKey() {
		try {
			await navigator.clipboard.writeText(createdKey);
			setCopied(true);
			toast.success(settings_apikeys_key_copied());
			setTimeout(() => setCopied(false), 2e3);
		} catch {
			toast.error(settings_apikeys_copy_failed());
		}
	}
	const columns = [
		{
			header: settings_apikeys_name_col(),
			cell: (k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-medium",
				children: k.title
			})
		},
		{
			header: settings_apikeys_key_col(),
			cell: (k) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "font-mono text-xs",
				children: [k.keyPrefix, "…"]
			})
		},
		{
			header: settings_apikeys_created_col(),
			cell: (k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-muted-foreground text-xs",
				children: new Date(k.createdAt).toLocaleString()
			})
		},
		{
			header: settings_apikeys_last_used_col(),
			cell: (k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-muted-foreground text-xs",
				children: k.lastUsedAt ? new Date(k.lastUsedAt).toLocaleString() : settings_apikeys_never_used()
			})
		},
		{
			header: settings_apikeys_actions_col(),
			className: "w-[100px]",
			cell: (k) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-1",
				children: [k.key && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
					variant: "ghost",
					size: "icon",
					className: "size-7",
					onClick: () => handleCopyKey(k.key),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "size-3" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
					variant: "ghost",
					size: "icon",
					className: "size-7",
					onClick: () => setKeyToDelete(k),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-3" })
				})]
			})
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6 p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-2xl font-bold",
					children: settings_apikeys_title()
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground",
					children: settings_apikeys_description()
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog$1, {
					open,
					onOpenChange: setOpen,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTrigger, {
						className: "bg-primary text-primary-foreground hover:bg-primary/80 inline-flex h-8 items-center justify-center gap-1.5 rounded-lg px-2.5 text-sm font-medium transition-colors",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" }), settings_apikeys_create_key()]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: settings_apikeys_create_title() }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: settings_apikeys_create_description() })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: (e) => {
							e.preventDefault();
							handleCreate();
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2 py-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "key-name",
								children: settings_apikeys_key_name()
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input$1, {
								id: "key-name",
								value: newKeyName,
								onChange: (e) => setNewKeyName(e.target.value),
								placeholder: settings_apikeys_key_name_placeholder()
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
							type: "button",
							variant: "outline",
							onClick: () => setOpen(false),
							children: settings_apikeys_cancel()
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
							type: "submit",
							disabled: createMutation.isPending,
							children: createMutation.isPending ? settings_apikeys_creating() : settings_apikeys_create()
						})] })]
					})] })]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog$1, {
				open: !!createdKey,
				onOpenChange: (v) => {
					if (!v) setCreatedKey("");
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: settings_apikeys_created_title() }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: settings_apikeys_created_warning() })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 py-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input$1, {
							readOnly: true,
							value: createdKey,
							className: "font-mono text-xs",
							onFocus: (e) => e.currentTarget.select()
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
							variant: "outline",
							size: "icon",
							className: "shrink-0",
							onClick: handleCopyCreatedKey,
							children: copied ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "size-4" })
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogFooter, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
						onClick: () => setCreatedKey(""),
						children: settings_apikeys_done()
					}) })
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog$1, {
				open: !!keyToDelete,
				onOpenChange: (isOpen) => {
					if (!isOpen && !deleteMutation.isPending) setKeyToDelete(null);
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: settings_apikeys_delete_title() }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: settings_apikeys_delete_description({ name: keyToDelete?.title ?? "" }) })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
					type: "button",
					variant: "outline",
					disabled: deleteMutation.isPending,
					onClick: () => setKeyToDelete(null),
					children: settings_apikeys_cancel()
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
					type: "button",
					variant: "destructive",
					disabled: !keyToDelete || deleteMutation.isPending,
					onClick: () => {
						if (keyToDelete) deleteMutation.mutate(keyToDelete.id);
					},
					children: deleteMutation.isPending ? settings_apikeys_deleting() : settings_apikeys_confirm_delete()
				})] })] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
				columns,
				data: listQuery.data?.items ?? [],
				total: listQuery.data?.total ?? 0,
				page,
				pageSize: PAGE_SIZE,
				onPageChange: setPage,
				rowKey: (k) => k.id,
				emptyText: settings_apikeys_no_keys(),
				search,
				onSearchChange: setSearch,
				onRefresh: () => listQuery.refetch(),
				loading: listQuery.isFetching || listQuery.isPending
			}) }) })
		]
	});
}
var SplitComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureGate, {
	feature: "apikeys",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ApiKeysPage, {})
});
export { SplitComponent as component };
