import { __toESM } from "../_runtime.mjs";
import { require_jsx_runtime, require_react } from "../_libs/@base-ui/react+[...].mjs";
import { useForm } from "../_libs/@tanstack/react-form+[...].mjs";
import { object, string$1 as string } from "../_libs/modelcontextprotocol__core+zod.mjs";
import { useMutation, useQuery, useQueryClient } from "../_libs/tanstack__react-query.mjs";
import { keepPreviousData } from "../_libs/tanstack__query-core.mjs";
import { Pencil, Plus, Trash2 } from "../_libs/lucide-react.mjs";
import { toast } from "../_libs/sonner.mjs";
import { Button$1, admin_categories_actions_col, admin_categories_cancel, admin_categories_confirm_delete, admin_categories_create, admin_categories_create_description, admin_categories_create_title, admin_categories_created, admin_categories_created_at, admin_categories_delete_confirm, admin_categories_delete_title, admin_categories_deleted, admin_categories_description, admin_categories_description_col, admin_categories_description_field, admin_categories_description_placeholder, admin_categories_edit_description, admin_categories_edit_title, admin_categories_no_data, admin_categories_save, admin_categories_slug_col, admin_categories_slug_field, admin_categories_slug_placeholder, admin_categories_status_col, admin_categories_title, admin_categories_title_col, admin_categories_title_field, admin_categories_title_placeholder, admin_categories_updated, apiDelete, apiGet, apiPost, apiPut, pageQuery } from "./router-FRpG8iox.mjs";
import { Card, CardContent } from "./card-BkWHqUeW.mjs";
import { Dialog$1, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./dialog-oXWpGNwj.mjs";
import { Badge } from "./badge-DsAADeEG.mjs";
import { formatDateTime } from "./time-LUwPQmfY.mjs";
import { DataTable } from "./data-table-DKAF6YZO.mjs";
import { TextField } from "./form-field-DCcY6W9e.mjs";
// node_modules/.nitro/vite/services/ssr/assets/categories-Bsy45Dbq.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var PAGE_SIZE = 20;
var categorySchema = object({
	slug: string().min(1),
	title: string().min(1),
	description: string()
});
var emptyForm = {
	slug: "",
	title: "",
	description: ""
};
function CategoriesPage() {
	const queryClient = useQueryClient();
	const [page, setPage] = (0, import_react.useState)(1);
	const [search, setSearch] = (0, import_react.useState)("");
	const [debouncedSearch, setDebouncedSearch] = (0, import_react.useState)("");
	const [createOpen, setCreateOpen] = (0, import_react.useState)(false);
	const [editingCat, setEditingCat] = (0, import_react.useState)(null);
	const [deletingCat, setDeletingCat] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		const timer = setTimeout(() => setDebouncedSearch(search), 300);
		return () => clearTimeout(timer);
	}, [search]);
	(0, import_react.useEffect)(() => {
		setPage(1);
	}, [debouncedSearch]);
	const listQuery = useQuery({
		queryKey: [
			"admin-categories",
			page,
			debouncedSearch
		],
		queryFn: () => apiGet(pageQuery("/api/admin/categories", {
			page,
			pageSize: PAGE_SIZE,
			search: debouncedSearch
		})),
		placeholderData: keepPreviousData
	});
	const createForm = useForm({
		defaultValues: emptyForm,
		validators: { onSubmit: categorySchema },
		onSubmit: async ({ value }) => {
			await createMutation.mutateAsync(value);
		}
	});
	const editForm = useForm({
		defaultValues: emptyForm,
		validators: { onSubmit: categorySchema },
		onSubmit: async ({ value }) => {
			if (!editingCat) return;
			await editMutation.mutateAsync({
				id: editingCat.id,
				...value
			});
		}
	});
	function openEdit(c) {
		editForm.reset({
			slug: c.slug,
			title: c.title,
			description: c.description || ""
		});
		setEditingCat(c);
	}
	const createMutation = useMutation({
		mutationFn: (value) => apiPost("/api/admin/categories", value),
		onSuccess: () => {
			toast.success(admin_categories_created());
			setCreateOpen(false);
			createForm.reset();
			queryClient.invalidateQueries({ queryKey: ["admin-categories"] });
		},
		onError: (e) => toast.error(e.message)
	});
	const editMutation = useMutation({
		mutationFn: (value) => apiPut("/api/admin/categories", value),
		onSuccess: () => {
			toast.success(admin_categories_updated());
			setEditingCat(null);
			editForm.reset();
			queryClient.invalidateQueries({ queryKey: ["admin-categories"] });
		},
		onError: (e) => toast.error(e.message)
	});
	const deleteMutation = useMutation({
		mutationFn: (id) => apiDelete(`/api/admin/categories?id=${id}`),
		onSuccess: () => {
			toast.success(admin_categories_deleted());
			setDeletingCat(null);
			queryClient.invalidateQueries({ queryKey: ["admin-categories"] });
		},
		onError: (e) => toast.error(e.message)
	});
	const columns = [
		{
			header: admin_categories_slug_col(),
			cell: (c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-mono text-sm",
				children: c.slug
			})
		},
		{
			header: admin_categories_title_col(),
			cell: (c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-medium",
				children: c.title
			})
		},
		{
			header: admin_categories_description_col(),
			cell: (c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-muted-foreground block max-w-[200px] truncate text-sm",
				children: c.description || "—"
			})
		},
		{
			header: admin_categories_status_col(),
			cell: (c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
				variant: c.status === "published" ? "default" : "secondary",
				children: c.status
			})
		},
		{
			header: admin_categories_created_at(),
			cell: (c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-muted-foreground text-sm",
				children: formatDateTime(c.createdAt)
			})
		},
		{
			header: admin_categories_actions_col(),
			className: "w-[80px]",
			cell: (c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
					variant: "ghost",
					size: "icon",
					className: "size-7",
					onClick: () => openEdit(c),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "size-3" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
					variant: "ghost",
					size: "icon",
					className: "size-7",
					onClick: () => setDeletingCat(c),
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
					children: admin_categories_title()
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground",
					children: admin_categories_description()
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog$1, {
					open: createOpen,
					onOpenChange: setCreateOpen,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTrigger, {
						className: "bg-primary text-primary-foreground hover:bg-primary/80 inline-flex h-8 items-center justify-center gap-1.5 rounded-lg px-2.5 text-sm font-medium transition-colors",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" }), admin_categories_create()]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: admin_categories_create_title() }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: admin_categories_create_description() })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: (e) => {
							e.preventDefault();
							e.stopPropagation();
							createForm.handleSubmit();
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-4 py-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(createForm.Field, {
									name: "slug",
									children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
										field,
										label: admin_categories_slug_field(),
										placeholder: admin_categories_slug_placeholder()
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(createForm.Field, {
									name: "title",
									children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
										field,
										label: admin_categories_title_field(),
										placeholder: admin_categories_title_placeholder()
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(createForm.Field, {
									name: "description",
									children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
										field,
										label: admin_categories_description_field(),
										placeholder: admin_categories_description_placeholder()
									})
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
							type: "button",
							variant: "outline",
							onClick: () => setCreateOpen(false),
							children: admin_categories_cancel()
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
							type: "submit",
							disabled: createMutation.isPending,
							children: admin_categories_save()
						})] })]
					})] })]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
				columns,
				data: listQuery.data?.items ?? [],
				total: listQuery.data?.total ?? 0,
				page,
				pageSize: PAGE_SIZE,
				onPageChange: setPage,
				rowKey: (c) => c.id,
				emptyText: admin_categories_no_data(),
				search,
				onSearchChange: setSearch,
				onRefresh: () => listQuery.refetch(),
				loading: listQuery.isFetching || listQuery.isPending
			}) }) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog$1, {
				open: !!editingCat,
				onOpenChange: (v) => !v && setEditingCat(null),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: admin_categories_edit_title() }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: admin_categories_edit_description() })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: (e) => {
						e.preventDefault();
						e.stopPropagation();
						editForm.handleSubmit();
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-4 py-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(editForm.Field, {
								name: "slug",
								children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
									field,
									label: admin_categories_slug_field(),
									placeholder: admin_categories_slug_placeholder()
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(editForm.Field, {
								name: "title",
								children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
									field,
									label: admin_categories_title_field(),
									placeholder: admin_categories_title_placeholder()
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(editForm.Field, {
								name: "description",
								children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
									field,
									label: admin_categories_description_field(),
									placeholder: admin_categories_description_placeholder()
								})
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
						type: "button",
						variant: "outline",
						onClick: () => setEditingCat(null),
						children: admin_categories_cancel()
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
						type: "submit",
						disabled: editMutation.isPending,
						children: admin_categories_save()
					})] })]
				})] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog$1, {
				open: !!deletingCat,
				onOpenChange: (v) => !v && setDeletingCat(null),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: admin_categories_delete_title() }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: admin_categories_delete_confirm() })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
					variant: "outline",
					onClick: () => setDeletingCat(null),
					children: admin_categories_cancel()
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
					variant: "destructive",
					disabled: deleteMutation.isPending,
					onClick: () => deletingCat && deleteMutation.mutate(deletingCat.id),
					children: admin_categories_confirm_delete()
				})] })] })
			})
		]
	});
}
export { CategoriesPage as component };
