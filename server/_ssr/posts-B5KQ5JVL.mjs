import { __toESM } from "../_runtime.mjs";
import { require_jsx_runtime, require_react } from "../_libs/@base-ui/react+[...].mjs";
import { useForm } from "../_libs/@tanstack/react-form+[...].mjs";
import { object, string$1 as string } from "../_libs/modelcontextprotocol__core+zod.mjs";
import { useMutation, useQuery, useQueryClient } from "../_libs/tanstack__react-query.mjs";
import { keepPreviousData } from "../_libs/tanstack__query-core.mjs";
import { Pencil, Plus, Trash2 } from "../_libs/lucide-react.mjs";
import { toast } from "../_libs/sonner.mjs";
import { Button$1, admin_posts_actions_col, admin_posts_author_col, admin_posts_author_field, admin_posts_author_placeholder, admin_posts_cancel, admin_posts_category_field, admin_posts_category_placeholder, admin_posts_confirm_delete, admin_posts_content_field, admin_posts_content_placeholder, admin_posts_create, admin_posts_create_description, admin_posts_create_title, admin_posts_created, admin_posts_created_at, admin_posts_delete_confirm, admin_posts_delete_title, admin_posts_deleted, admin_posts_description, admin_posts_description_field, admin_posts_description_placeholder, admin_posts_edit_description, admin_posts_edit_title, admin_posts_no_data, admin_posts_save, admin_posts_slug_col, admin_posts_slug_field, admin_posts_slug_placeholder, admin_posts_status_col, admin_posts_status_draft, admin_posts_status_field, admin_posts_status_published, admin_posts_title, admin_posts_title_col, admin_posts_title_field, admin_posts_title_placeholder, admin_posts_updated, apiDelete, apiGet, apiPost, apiPut, cn, tDynamic } from "./router-FRpG8iox.mjs";
import { Label } from "./label-Cmbt5KTb.mjs";
import { Card, CardContent } from "./card-BkWHqUeW.mjs";
import { Dialog$1, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./dialog-oXWpGNwj.mjs";
import { RichTextEditor } from "./rich-text-editor-Njj47010.mjs";
import { Badge } from "./badge-DsAADeEG.mjs";
import { Select$1, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./select-UynCZa1h.mjs";
import { formatDateTime } from "./time-LUwPQmfY.mjs";
import { DataTable } from "./data-table-DKAF6YZO.mjs";
import { TextField } from "./form-field-DCcY6W9e.mjs";
// node_modules/.nitro/vite/services/ssr/assets/posts-B5KQ5JVL.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var PAGE_SIZE = 20;
var TABS = [
	"all",
	"published",
	"draft"
];
var postSchema = object({
	slug: string().min(1),
	title: string().min(1),
	description: string(),
	content: string(),
	categories: string(),
	authorName: string(),
	status: string()
});
var emptyForm = {
	slug: "",
	title: "",
	description: "",
	content: "",
	categories: "",
	authorName: "",
	status: "draft"
};
function PostsPage() {
	const queryClient = useQueryClient();
	const [page, setPage] = (0, import_react.useState)(1);
	const [tab, setTab] = (0, import_react.useState)("all");
	const [search, setSearch] = (0, import_react.useState)("");
	const [debouncedSearch, setDebouncedSearch] = (0, import_react.useState)("");
	const [createOpen, setCreateOpen] = (0, import_react.useState)(false);
	const [editingPost, setEditingPost] = (0, import_react.useState)(null);
	const [deletingPost, setDeletingPost] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		const timer = setTimeout(() => setDebouncedSearch(search), 300);
		return () => clearTimeout(timer);
	}, [search]);
	(0, import_react.useEffect)(() => {
		setPage(1);
	}, [tab, debouncedSearch]);
	const categoryOptions = useQuery({
		queryKey: ["admin-categories", "options"],
		queryFn: () => apiGet("/api/admin/categories?all=true")
	}).data ?? [];
	const listQuery = useQuery({
		queryKey: [
			"admin-posts",
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
			return apiGet(`/api/admin/posts?${params}`);
		},
		placeholderData: keepPreviousData
	});
	const createForm = useForm({
		defaultValues: emptyForm,
		validators: { onSubmit: postSchema },
		onSubmit: async ({ value }) => {
			await createMutation.mutateAsync(value);
		}
	});
	const editForm = useForm({
		defaultValues: emptyForm,
		validators: { onSubmit: postSchema },
		onSubmit: async ({ value }) => {
			if (!editingPost) return;
			const body = {
				id: editingPost.id,
				...value
			};
			if (!body.content) delete body.content;
			await editMutation.mutateAsync(body);
		}
	});
	const createMutation = useMutation({
		mutationFn: (value) => apiPost("/api/admin/posts", value),
		onSuccess: () => {
			toast.success(admin_posts_created());
			setCreateOpen(false);
			createForm.reset();
			queryClient.invalidateQueries({ queryKey: ["admin-posts"] });
		},
		onError: (e) => toast.error(e.message)
	});
	const editMutation = useMutation({
		mutationFn: (body) => apiPut("/api/admin/posts", body),
		onSuccess: () => {
			toast.success(admin_posts_updated());
			setEditingPost(null);
			editForm.reset();
			queryClient.invalidateQueries({ queryKey: ["admin-posts"] });
		},
		onError: (e) => toast.error(e.message)
	});
	const deleteMutation = useMutation({
		mutationFn: (id) => apiDelete(`/api/admin/posts?id=${id}`),
		onSuccess: () => {
			toast.success(admin_posts_deleted());
			setDeletingPost(null);
			queryClient.invalidateQueries({ queryKey: ["admin-posts"] });
		},
		onError: (e) => toast.error(e.message)
	});
	function openEdit(p) {
		editForm.reset({
			slug: p.slug,
			title: p.title,
			description: p.description || "",
			content: "",
			categories: p.categories || "",
			authorName: p.authorName || "",
			status: p.status
		});
		setEditingPost(p);
		apiGet(`/api/admin/posts?id=${p.id}`).then((post) => editForm.setFieldValue("content", post.content || "")).catch(() => {});
	}
	const statusVariant = (s) => {
		if (s === "published") return "default";
		if (s === "draft") return "secondary";
		return "outline";
	};
	const columns = [
		{
			header: admin_posts_title_col(),
			cell: (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-medium",
				children: p.title
			})
		},
		{
			header: admin_posts_slug_col(),
			cell: (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-mono text-xs",
				children: p.slug
			})
		},
		{
			header: admin_posts_author_col(),
			cell: (p) => p.authorName || "—"
		},
		{
			header: admin_posts_status_col(),
			cell: (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
				variant: statusVariant(p.status),
				children: p.status
			})
		},
		{
			header: admin_posts_created_at(),
			cell: (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-muted-foreground text-sm",
				children: formatDateTime(p.createdAt)
			})
		},
		{
			header: admin_posts_actions_col(),
			className: "w-[80px]",
			cell: (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
					variant: "ghost",
					size: "icon",
					className: "size-7",
					onClick: () => openEdit(p),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "size-3" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
					variant: "ghost",
					size: "icon",
					className: "size-7",
					onClick: () => setDeletingPost(p),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-3" })
				})]
			})
		}
	];
	function renderFields(form) {
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-4 py-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Field, {
					name: "slug",
					children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
						field,
						label: admin_posts_slug_field(),
						placeholder: admin_posts_slug_placeholder()
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Field, {
					name: "title",
					children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
						field,
						label: admin_posts_title_field(),
						placeholder: admin_posts_title_placeholder()
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Field, {
					name: "description",
					children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
						field,
						label: admin_posts_description_field(),
						placeholder: admin_posts_description_placeholder()
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Field, {
					name: "authorName",
					children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
						field,
						label: admin_posts_author_field(),
						placeholder: admin_posts_author_placeholder()
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Field, {
					name: "categories",
					children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: admin_posts_category_field() }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select$1, {
							value: field.state.value || "",
							onValueChange: (v) => field.handleChange(v || ""),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: admin_posts_category_placeholder() }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: categoryOptions.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
								value: c.id,
								children: c.title
							}, c.id)) })]
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Field, {
					name: "status",
					children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: admin_posts_status_field() }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select$1, {
							value: field.state.value || "draft",
							onValueChange: (v) => field.handleChange(v || "draft"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
								value: "draft",
								children: admin_posts_status_draft()
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
								value: "published",
								children: admin_posts_status_published()
							})] })]
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Field, {
					name: "content",
					children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: admin_posts_content_field() }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RichTextEditor, {
							value: field.state.value,
							onChange: (content) => field.handleChange(content),
							placeholder: admin_posts_content_placeholder()
						})]
					})
				})
			]
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6 p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-2xl font-bold",
					children: admin_posts_title()
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground",
					children: admin_posts_description()
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog$1, {
					open: createOpen,
					onOpenChange: setCreateOpen,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTrigger, {
						className: "bg-primary text-primary-foreground hover:bg-primary/80 inline-flex h-8 items-center justify-center gap-1.5 rounded-lg px-2.5 text-sm font-medium transition-colors",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" }), admin_posts_create()]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
						className: "max-h-[90vh] overflow-y-auto sm:max-w-3xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: admin_posts_create_title() }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: admin_posts_create_description() })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: (e) => {
								e.preventDefault();
								e.stopPropagation();
								createForm.handleSubmit();
							},
							children: [renderFields(createForm), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
								type: "button",
								variant: "outline",
								onClick: () => setCreateOpen(false),
								children: admin_posts_cancel()
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
								type: "submit",
								disabled: createMutation.isPending,
								children: admin_posts_save()
							})] })]
						})]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-border flex gap-1 overflow-x-auto overflow-y-hidden border-b",
				children: TABS.map((tb) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setTab(tb),
					className: cn("-mb-px border-b-2 px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors", tab === tb ? "border-primary text-foreground" : "text-muted-foreground hover:text-foreground border-transparent"),
					children: tDynamic(`admin.posts.tab_${tb}`)
				}, tb))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
				columns,
				data: listQuery.data?.items ?? [],
				total: listQuery.data?.total ?? 0,
				page,
				pageSize: PAGE_SIZE,
				onPageChange: setPage,
				rowKey: (p) => p.id,
				emptyText: admin_posts_no_data(),
				search,
				onSearchChange: setSearch,
				onRefresh: () => listQuery.refetch(),
				loading: listQuery.isFetching || listQuery.isPending
			}) }) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog$1, {
				open: !!editingPost,
				onOpenChange: (v) => !v && setEditingPost(null),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "max-h-[90vh] overflow-y-auto sm:max-w-3xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: admin_posts_edit_title() }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: admin_posts_edit_description() })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: (e) => {
							e.preventDefault();
							e.stopPropagation();
							editForm.handleSubmit();
						},
						children: [renderFields(editForm), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
							type: "button",
							variant: "outline",
							onClick: () => setEditingPost(null),
							children: admin_posts_cancel()
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
							type: "submit",
							disabled: editMutation.isPending,
							children: admin_posts_save()
						})] })]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog$1, {
				open: !!deletingPost,
				onOpenChange: (v) => !v && setDeletingPost(null),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: admin_posts_delete_title() }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: admin_posts_delete_confirm() })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
					variant: "outline",
					onClick: () => setDeletingPost(null),
					children: admin_posts_cancel()
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
					variant: "destructive",
					disabled: deleteMutation.isPending,
					onClick: () => deletingPost && deleteMutation.mutate(deletingPost.id),
					children: admin_posts_confirm_delete()
				})] })] })
			})
		]
	});
}
export { PostsPage as component };
