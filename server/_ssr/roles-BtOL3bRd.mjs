import { __toESM } from "../_runtime.mjs";
import { require_jsx_runtime, require_react } from "../_libs/@base-ui/react+[...].mjs";
import { useForm } from "../_libs/@tanstack/react-form+[...].mjs";
import { object, string$1 as string } from "../_libs/modelcontextprotocol__core+zod.mjs";
import { useMutation, useQuery, useQueryClient } from "../_libs/tanstack__react-query.mjs";
import { keepPreviousData } from "../_libs/tanstack__query-core.mjs";
import { KeyRound, Pencil, Plus, Trash2 } from "../_libs/lucide-react.mjs";
import { toast } from "../_libs/sonner.mjs";
import { Button$1, admin_permissions_no_permissions, admin_roles_actions_col, admin_roles_cancel, admin_roles_confirm_delete, admin_roles_create_description, admin_roles_create_role, admin_roles_create_title, admin_roles_created, admin_roles_delete_confirm, admin_roles_delete_title, admin_roles_deleted, admin_roles_description, admin_roles_description_col, admin_roles_description_field, admin_roles_description_placeholder, admin_roles_edit_description, admin_roles_edit_title, admin_roles_manage_permissions_description, admin_roles_manage_permissions_title, admin_roles_name_col, admin_roles_name_field, admin_roles_name_placeholder, admin_roles_no_roles, admin_roles_permissions_saved, admin_roles_save, admin_roles_title, admin_roles_title_col, admin_roles_title_field, admin_roles_title_placeholder, admin_roles_updated, apiDelete, apiGet, apiGetAll, apiPost, apiPut, pageQuery } from "./router-FRpG8iox.mjs";
import { Card, CardContent } from "./card-BkWHqUeW.mjs";
import { Dialog$1, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./dialog-oXWpGNwj.mjs";
import { Checkbox$1 } from "./checkbox-CeKI2-AW.mjs";
import { DataTable } from "./data-table-DKAF6YZO.mjs";
import { TextField } from "./form-field-DCcY6W9e.mjs";
// node_modules/.nitro/vite/services/ssr/assets/roles-BtOL3bRd.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var PAGE_SIZE = 20;
var roleSchema = object({
	name: string().min(1),
	title: string().min(1),
	description: string()
});
var emptyForm = {
	name: "",
	title: "",
	description: ""
};
function RolesPage() {
	const queryClient = useQueryClient();
	const [page, setPage] = (0, import_react.useState)(1);
	const [search, setSearch] = (0, import_react.useState)("");
	const [debouncedSearch, setDebouncedSearch] = (0, import_react.useState)("");
	const [createOpen, setCreateOpen] = (0, import_react.useState)(false);
	const [editingRole, setEditingRole] = (0, import_react.useState)(null);
	const [deletingRole, setDeletingRole] = (0, import_react.useState)(null);
	const [permRole, setPermRole] = (0, import_react.useState)(null);
	const [allPermissions, setAllPermissions] = (0, import_react.useState)([]);
	const [assignedPermIds, setAssignedPermIds] = (0, import_react.useState)(/* @__PURE__ */ new Set());
	(0, import_react.useEffect)(() => {
		const timer = setTimeout(() => setDebouncedSearch(search), 300);
		return () => clearTimeout(timer);
	}, [search]);
	(0, import_react.useEffect)(() => {
		setPage(1);
	}, [debouncedSearch]);
	const listQuery = useQuery({
		queryKey: [
			"admin-roles",
			page,
			debouncedSearch
		],
		queryFn: () => apiGet(pageQuery("/api/admin/roles", {
			page,
			pageSize: PAGE_SIZE,
			search: debouncedSearch
		})),
		placeholderData: keepPreviousData
	});
	const createForm = useForm({
		defaultValues: emptyForm,
		validators: { onSubmit: roleSchema },
		onSubmit: async ({ value }) => {
			await createMutation.mutateAsync(value);
		}
	});
	const editForm = useForm({
		defaultValues: emptyForm,
		validators: { onSubmit: roleSchema },
		onSubmit: async ({ value }) => {
			if (!editingRole) return;
			await editMutation.mutateAsync({
				id: editingRole.id,
				...value
			});
		}
	});
	const createMutation = useMutation({
		mutationFn: (value) => apiPost("/api/admin/roles", value),
		onSuccess: () => {
			toast.success(admin_roles_created());
			setCreateOpen(false);
			createForm.reset();
			queryClient.invalidateQueries({ queryKey: ["admin-roles"] });
		},
		onError: (e) => toast.error(e.message)
	});
	const editMutation = useMutation({
		mutationFn: (value) => apiPut("/api/admin/roles", value),
		onSuccess: () => {
			toast.success(admin_roles_updated());
			setEditingRole(null);
			editForm.reset();
			queryClient.invalidateQueries({ queryKey: ["admin-roles"] });
		},
		onError: (e) => toast.error(e.message)
	});
	const deleteMutation = useMutation({
		mutationFn: (id) => apiDelete(`/api/admin/roles?id=${id}`),
		onSuccess: () => {
			toast.success(admin_roles_deleted());
			setDeletingRole(null);
			queryClient.invalidateQueries({ queryKey: ["admin-roles"] });
		},
		onError: (e) => toast.error(e.message)
	});
	const savePermissionsMutation = useMutation({
		mutationFn: (vars) => apiPut("/api/admin/roles/permissions", vars),
		onSuccess: () => {
			toast.success(admin_roles_permissions_saved());
			setPermRole(null);
		},
		onError: (e) => toast.error(e.message)
	});
	function openEdit(r) {
		editForm.reset({
			name: r.name,
			title: r.title,
			description: r.description || ""
		});
		setEditingRole(r);
	}
	async function openPermissions(r) {
		setPermRole(r);
		try {
			const [perms, assigned] = await Promise.all([apiGetAll("/api/admin/permissions"), apiGet(`/api/admin/roles/permissions?roleId=${encodeURIComponent(r.id)}`)]);
			setAllPermissions(perms);
			setAssignedPermIds(new Set(assigned.map((p) => p.permissionId)));
		} catch (e) {
			toast.error(e.message);
		}
	}
	function togglePermission(permId) {
		setAssignedPermIds((prev) => {
			const next = new Set(prev);
			if (next.has(permId)) next.delete(permId);
			else next.add(permId);
			return next;
		});
	}
	function handleSavePermissions() {
		if (!permRole) return;
		savePermissionsMutation.mutate({
			roleId: permRole.id,
			permissionIds: [...assignedPermIds]
		});
	}
	const columns = [
		{
			header: admin_roles_name_col(),
			cell: (r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-mono text-sm",
				children: r.name
			})
		},
		{
			header: admin_roles_title_col(),
			cell: (r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-medium",
				children: r.title
			})
		},
		{
			header: admin_roles_description_col(),
			cell: (r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-muted-foreground",
				children: r.description || "—"
			})
		},
		{
			header: admin_roles_actions_col(),
			className: "w-[120px]",
			cell: (r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
						variant: "ghost",
						size: "icon",
						className: "size-7",
						onClick: () => openPermissions(r),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeyRound, { className: "size-3" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
						variant: "ghost",
						size: "icon",
						className: "size-7",
						onClick: () => openEdit(r),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "size-3" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
						variant: "ghost",
						size: "icon",
						className: "size-7",
						onClick: () => setDeletingRole(r),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-3" })
					})
				]
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
					children: admin_roles_title()
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground",
					children: admin_roles_description()
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog$1, {
					open: createOpen,
					onOpenChange: setCreateOpen,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTrigger, {
						className: "bg-primary text-primary-foreground hover:bg-primary/80 inline-flex h-8 items-center justify-center gap-1.5 rounded-lg px-2.5 text-sm font-medium transition-colors",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" }), admin_roles_create_role()]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: admin_roles_create_title() }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: admin_roles_create_description() })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: (e) => {
							e.preventDefault();
							e.stopPropagation();
							createForm.handleSubmit();
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-4 py-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(createForm.Field, {
									name: "name",
									children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
										field,
										label: admin_roles_name_field(),
										placeholder: admin_roles_name_placeholder()
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(createForm.Field, {
									name: "title",
									children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
										field,
										label: admin_roles_title_field(),
										placeholder: admin_roles_title_placeholder()
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(createForm.Field, {
									name: "description",
									children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
										field,
										label: admin_roles_description_field(),
										placeholder: admin_roles_description_placeholder()
									})
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
							type: "button",
							variant: "outline",
							onClick: () => setCreateOpen(false),
							children: admin_roles_cancel()
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
							type: "submit",
							disabled: createMutation.isPending,
							children: admin_roles_save()
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
				rowKey: (r) => r.id,
				emptyText: admin_roles_no_roles(),
				search,
				onSearchChange: setSearch,
				onRefresh: () => listQuery.refetch(),
				loading: listQuery.isFetching || listQuery.isPending
			}) }) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog$1, {
				open: !!editingRole,
				onOpenChange: (v) => !v && setEditingRole(null),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: admin_roles_edit_title() }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: admin_roles_edit_description() })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: (e) => {
						e.preventDefault();
						e.stopPropagation();
						editForm.handleSubmit();
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-4 py-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(editForm.Field, {
								name: "name",
								children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
									field,
									label: admin_roles_name_field(),
									placeholder: admin_roles_name_placeholder()
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(editForm.Field, {
								name: "title",
								children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
									field,
									label: admin_roles_title_field(),
									placeholder: admin_roles_title_placeholder()
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(editForm.Field, {
								name: "description",
								children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
									field,
									label: admin_roles_description_field(),
									placeholder: admin_roles_description_placeholder()
								})
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
						type: "button",
						variant: "outline",
						onClick: () => setEditingRole(null),
						children: admin_roles_cancel()
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
						type: "submit",
						disabled: editMutation.isPending,
						children: admin_roles_save()
					})] })]
				})] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog$1, {
				open: !!deletingRole,
				onOpenChange: (v) => !v && setDeletingRole(null),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: admin_roles_delete_title() }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: admin_roles_delete_confirm() })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
					variant: "outline",
					onClick: () => setDeletingRole(null),
					children: admin_roles_cancel()
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
					variant: "destructive",
					disabled: deleteMutation.isPending,
					onClick: () => deletingRole && deleteMutation.mutate(deletingRole.id),
					children: admin_roles_confirm_delete()
				})] })] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog$1, {
				open: !!permRole,
				onOpenChange: (v) => !v && setPermRole(null),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: admin_roles_manage_permissions_title() }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: admin_roles_manage_permissions_description() })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "grid gap-4",
					onSubmit: (e) => {
						e.preventDefault();
						handleSavePermissions();
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-h-64 space-y-3 overflow-y-auto py-4",
						children: [allPermissions.map((perm) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "flex cursor-pointer items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox$1, {
								checked: assignedPermIds.has(perm.id),
								onCheckedChange: () => togglePermission(perm.id)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sm font-medium",
								children: perm.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-muted-foreground font-mono text-xs",
								children: perm.code
							})] })]
						}, perm.id)), allPermissions.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground py-4 text-center text-sm",
							children: admin_permissions_no_permissions()
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
						type: "button",
						variant: "outline",
						onClick: () => setPermRole(null),
						children: admin_roles_cancel()
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
						type: "submit",
						disabled: savePermissionsMutation.isPending,
						children: admin_roles_save()
					})] })]
				})] })
			})
		]
	});
}
export { RolesPage as component };
