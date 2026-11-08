import { __toESM } from "../_runtime.mjs";
import { require_jsx_runtime, require_react } from "../_libs/@base-ui/react+[...].mjs";
import { localizeHref } from "./ssr.mjs";
import { countWords } from "./service-BckqfvjL.mjs";
import { useMutation, useQuery, useQueryClient } from "../_libs/tanstack__react-query.mjs";
import { keepPreviousData } from "../_libs/tanstack__query-core.mjs";
import { ExternalLink, Eye } from "../_libs/lucide-react.mjs";
import { toast } from "../_libs/sonner.mjs";
import { Button$1, Route$93, admin_guest_posts_actions_col, admin_guest_posts_approve, admin_guest_posts_author_col, admin_guest_posts_counts, admin_guest_posts_description, admin_guest_posts_discard, admin_guest_posts_discard_continue, admin_guest_posts_empty, admin_guest_posts_note, admin_guest_posts_note_placeholder, admin_guest_posts_order, admin_guest_posts_package, admin_guest_posts_preview_unsaved, admin_guest_posts_refunded_hint, admin_guest_posts_reject, admin_guest_posts_reject_confirm, admin_guest_posts_rejected_toast, admin_guest_posts_republish, admin_guest_posts_republish_confirm, admin_guest_posts_request_changes, admin_guest_posts_restore_hint, admin_guest_posts_review_hint, admin_guest_posts_reviewed_toast, admin_guest_posts_save, admin_guest_posts_saved_toast, admin_guest_posts_slug_change_confirm, admin_guest_posts_slug_change_title, admin_guest_posts_slug_change_warning, admin_guest_posts_slug_hint, admin_guest_posts_status_col, admin_guest_posts_submitted_at, admin_guest_posts_tab_all, admin_guest_posts_title, admin_guest_posts_title_col, admin_guest_posts_unpublish, admin_guest_posts_unpublish_confirm, admin_guest_posts_unpublished_toast, admin_guest_posts_unsaved, admin_guest_posts_unsaved_discard, admin_guest_posts_unsaved_title, admin_guest_posts_updated_col, admin_guest_posts_view, admin_guest_posts_words, admin_loading, apiGet, apiPatch, apiPost, apiPut, buttonVariants, cn, guest_posts_field_content, guest_posts_field_slug, guest_posts_field_summary, guest_posts_field_title, guest_posts_link_count, guest_posts_package_col, guest_posts_preview, guest_posts_review_note, guest_posts_slug_placeholder, guest_posts_view_article, pageQuery, tDynamic } from "./router-FRpG8iox.mjs";
import { Label } from "./label-Cmbt5KTb.mjs";
import { Input$1 } from "./input-CacA4PHh.mjs";
import { Card, CardContent } from "./card-BkWHqUeW.mjs";
import { Dialog$1, DialogContent, DialogHeader, DialogTitle } from "./dialog-oXWpGNwj.mjs";
import { countExternalLinks, formatDate, formatPrice, useGuestPostInfo } from "./use-guest-posts-BXr5R4sL.mjs";
import { RichTextEditor } from "./rich-text-editor-Njj47010.mjs";
import { SlugInput } from "./slug-input-DMXULfWA.mjs";
import { Textarea } from "./textarea-sCd8zrH6.mjs";
import { ArticleUrl, GuestPostStatusBadge, PackageCell, ReviewNoteCell } from "./-shared-atGxkMjq.mjs";
import { useConfirm } from "./use-confirm-C8c0MoYU.mjs";
import { DataTable } from "./data-table-DKAF6YZO.mjs";
import { UserCell } from "./user-cell-CHkKMixM.mjs";
// node_modules/.nitro/vite/services/ssr/assets/guest-posts-CYNaoWVV.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var PAGE_SIZE = 20;
var TABS = [
	"all",
	"submitted",
	"published",
	"changes_requested",
	"rejected",
	"unpublished"
];
function AdminGuestPostsPage() {
	const queryClient = useQueryClient();
	const [tab, setTab] = (0, import_react.useState)("all");
	const [page, setPage] = (0, import_react.useState)(1);
	const [search, setSearch] = (0, import_react.useState)("");
	const [debounced, setDebounced] = (0, import_react.useState)("");
	const [openId, setOpenId] = (0, import_react.useState)(null);
	const info = useGuestPostInfo();
	const deepLinkId = Route$93.useSearch().id;
	(0, import_react.useEffect)(() => {
		if (deepLinkId) setOpenId(deepLinkId);
	}, [deepLinkId]);
	(0, import_react.useEffect)(() => {
		const t = setTimeout(() => setDebounced(search), 300);
		return () => clearTimeout(t);
	}, [search]);
	(0, import_react.useEffect)(() => setPage(1), [debounced, tab]);
	const listQuery = useQuery({
		queryKey: [
			"admin-guest-posts",
			page,
			tab,
			debounced
		],
		queryFn: () => apiGet(pageQuery("/api/admin/guest-posts", {
			page,
			pageSize: PAGE_SIZE,
			search: debounced
		}) + (tab === "all" ? "" : `&status=${tab}`)),
		placeholderData: keepPreviousData
	});
	const columns = [
		{
			header: admin_guest_posts_title_col(),
			cell: (r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "text-left font-medium hover:underline",
					onClick: () => setOpenId(r.id),
					children: r.title || "—"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArticleUrl, {
					slug: r.slug,
					status: r.status
				})]
			})
		},
		{
			header: admin_guest_posts_author_col(),
			cell: (r) => r.userId ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserCell, {
				userId: r.userId,
				name: r.userName,
				email: r.userEmail,
				image: r.userAvatar
			}) : "—"
		},
		{
			header: guest_posts_package_col(),
			className: "w-[170px]",
			cell: (r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PackageCell, {
				productId: r.productId,
				packages: info.data?.packages
			})
		},
		{
			header: admin_guest_posts_status_col(),
			className: "w-[130px]",
			cell: (r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GuestPostStatusBadge, { status: r.status })
		},
		{
			header: guest_posts_review_note(),
			className: "min-w-[220px]",
			cell: (r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReviewNoteCell, {
				status: r.status,
				note: r.reviewNote
			})
		},
		{
			header: admin_guest_posts_updated_col(),
			className: "w-[170px]",
			cell: (r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-muted-foreground",
				children: formatDate(r.updatedAt)
			})
		},
		{
			header: admin_guest_posts_actions_col(),
			className: "w-[80px]",
			cell: (r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
				variant: "ghost",
				size: "icon",
				className: "size-7",
				title: admin_guest_posts_view(),
				onClick: () => setOpenId(r.id),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "size-3" })
			})
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6 p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-2xl font-bold",
				children: admin_guest_posts_title()
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground",
				children: admin_guest_posts_description()
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-border flex gap-1 overflow-x-auto overflow-y-hidden border-b",
				children: TABS.map((tb) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setTab(tb),
					className: cn("-mb-px border-b-2 px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors", tab === tb ? "border-primary text-foreground" : "text-muted-foreground hover:text-foreground border-transparent"),
					children: tb === "all" ? admin_guest_posts_tab_all() : tDynamic(`guest_posts.status_${tb}`)
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
				emptyText: admin_guest_posts_empty(),
				search,
				onSearchChange: setSearch,
				onRefresh: () => listQuery.refetch(),
				loading: listQuery.isFetching || listQuery.isPending
			}) }) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog$1, {
				open: !!openId,
				onOpenChange: (o) => !o && setOpenId(null),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContent, {
					className: "max-h-[90vh] overflow-y-auto sm:max-w-3xl",
					children: openId && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReviewPanel, {
						id: openId,
						onChanged: () => {
							queryClient.invalidateQueries({ queryKey: ["admin-guest-posts"] });
							queryClient.invalidateQueries({ queryKey: ["admin-guest-post", openId] });
						},
						onDone: () => setOpenId(null)
					})
				})
			})
		]
	});
}
function toDraft(post) {
	return {
		title: post.title || "",
		slug: post.slug || "",
		description: post.description || "",
		image: post.image || "",
		content: post.content || ""
	};
}
function ReviewPanel({ id, onChanged, onDone }) {
	const detail = useQuery({
		queryKey: ["admin-guest-post", id],
		queryFn: () => apiGet(`/api/admin/guest-posts/${id}`)
	});
	const [note, setNote] = (0, import_react.useState)("");
	const [draft, setDraft] = (0, import_react.useState)(null);
	const { confirm, dialog } = useConfirm();
	const loadedPost = detail.data?.post;
	(0, import_react.useEffect)(() => {
		if (loadedPost && !draft) setDraft(toDraft(loadedPost));
	}, [loadedPost, draft]);
	const saved = loadedPost ? toDraft(loadedPost) : null;
	const dirty = !!draft && !!saved && Object.keys(saved).some((k) => draft[k] !== saved[k]);
	const save = () => apiPut(`/api/admin/guest-posts/${id}`, draft);
	const review = useMutation({
		mutationFn: async (action) => {
			if (action === "approve" && dirty) await save();
			return apiPost(`/api/admin/guest-posts/${id}`, {
				action,
				note
			});
		},
		onSuccess: () => {
			toast.success(admin_guest_posts_reviewed_toast());
			onChanged();
			onDone();
		},
		onError: (e) => toast.error(e.message)
	});
	const reject = useMutation({
		mutationFn: () => apiPost(`/api/admin/guest-posts/${id}/reject`, { note }),
		onSuccess: () => {
			toast.success(admin_guest_posts_rejected_toast());
			onChanged();
			onDone();
		},
		onError: (e) => toast.error(e.message)
	});
	const restore = useMutation({
		mutationFn: async (action) => {
			if (action === "republish" && dirty) await save();
			return apiPost(`/api/admin/guest-posts/${id}/restore`, {
				action,
				note
			});
		},
		onSuccess: () => {
			toast.success(admin_guest_posts_reviewed_toast());
			onChanged();
			onDone();
		},
		onError: (e) => toast.error(e.message)
	});
	const unpublish = useMutation({
		mutationFn: () => apiPatch(`/api/admin/guest-posts/${id}`, { note }),
		onSuccess: () => {
			toast.success(admin_guest_posts_unpublished_toast());
			onChanged();
			onDone();
		},
		onError: (e) => toast.error(e.message)
	});
	const saveEdit = useMutation({
		mutationFn: save,
		onSuccess: async () => {
			toast.success(admin_guest_posts_saved_toast());
			onChanged();
			await detail.refetch();
			setDraft(null);
		},
		onError: (e) => toast.error(e.message)
	});
	if (detail.isError) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-muted-foreground",
		children: detail.error.message
	});
	if (detail.isPending || !draft) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-muted-foreground",
		children: admin_loading()
	});
	const { submission: s, post, package: pkg } = detail.data;
	const links = countExternalLinks(draft.content);
	const busy = review.isPending || reject.isPending || unpublish.isPending || restore.isPending || saveEdit.isPending;
	const restorable = s.status === "unpublished" && detail.data.orderStatus === "paid";
	const slugChanged = s.status === "published" && draft.slug.trim().toLowerCase() !== post.slug;
	const keepsEdits = async () => !dirty || confirm({
		title: admin_guest_posts_unsaved_title(),
		description: admin_guest_posts_unsaved_discard(),
		confirmLabel: admin_guest_posts_discard_continue(),
		destructive: true
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-5",
		children: [
			dialog,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, {
				className: "flex flex-wrap items-center gap-3 pr-6",
				children: [post.title || "—", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GuestPostStatusBadge, { status: s.status })]
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: "grid grid-cols-2 gap-x-6 gap-y-2 text-sm sm:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Meta, {
						label: admin_guest_posts_author_col(),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserCell, {
							userId: s.userId,
							name: detail.data.userName,
							email: detail.data.userEmail,
							image: detail.data.userAvatar
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Meta, {
						label: admin_guest_posts_package(),
						children: pkg ? `${pkg.planName} · ${formatPrice(pkg.priceInCents, pkg.currency)}` : s.productId
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Meta, {
						label: admin_guest_posts_counts(),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: cn(pkg && links > pkg.maxLinks && "text-destructive"),
							children: guest_posts_link_count({
								count: links,
								max: pkg?.maxLinks ?? 0
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted-foreground block text-xs",
							children: admin_guest_posts_words({ count: countWords(draft.content) })
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Meta, {
						label: admin_guest_posts_submitted_at(),
						children: formatDate(s.submittedAt)
					}),
					s.orderNo && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Meta, {
						label: admin_guest_posts_order(),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-xs",
							children: s.orderNo
						})
					})
				]
			}),
			s.status === "published" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: localizeHref(`/blog/${post.slug}`),
				target: "_blank",
				rel: "noopener",
				className: "text-primary inline-flex items-center gap-1.5 text-sm font-medium hover:underline",
				children: [guest_posts_view_article(), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-3.5" })]
			}),
			s.reviewNote && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-muted rounded-lg p-3 text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-medium",
					children: guest_posts_review_note()
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground mt-1 whitespace-pre-line",
					children: s.reviewNote
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: guest_posts_field_title() }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input$1, {
							value: draft.title,
							maxLength: 200,
							onChange: (e) => setDraft({
								...draft,
								title: e.target.value
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "gp-admin-slug",
								children: guest_posts_field_slug()
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlugInput, {
								id: "gp-admin-slug",
								prefix: "/blog/",
								value: draft.slug,
								placeholder: guest_posts_slug_placeholder(),
								onChange: (slug) => setDraft((d) => d && {
									...d,
									slug
								})
							}),
							slugChanged ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-destructive text-xs",
								children: admin_guest_posts_slug_change_warning()
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground text-xs",
								children: admin_guest_posts_slug_hint()
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: guest_posts_field_summary() }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
							value: draft.description,
							rows: 2,
							maxLength: 500,
							onChange: (e) => setDraft({
								...draft,
								description: e.target.value
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: guest_posts_field_content() }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RichTextEditor, {
							value: draft.content,
							onChange: (c) => setDraft((d) => d && {
								...d,
								content: c
							})
						})]
					}),
					dirty && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
								disabled: busy,
								onClick: async () => {
									if (slugChanged && !await confirm({
										title: admin_guest_posts_slug_change_title(),
										description: admin_guest_posts_slug_change_confirm(),
										destructive: true
									})) return;
									saveEdit.mutate();
								},
								children: admin_guest_posts_save()
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
								variant: "outline",
								disabled: busy,
								onClick: () => setDraft(toDraft(post)),
								children: admin_guest_posts_discard()
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground text-xs",
								children: admin_guest_posts_unsaved()
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-3 border-t pt-4",
				children: [
					([
						"submitted",
						"changes_requested",
						"published"
					].includes(s.status) || restorable) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "gp-note",
							children: admin_guest_posts_note()
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
							id: "gp-note",
							value: note,
							rows: 2,
							maxLength: 2e3,
							placeholder: admin_guest_posts_note_placeholder(),
							onChange: (e) => setNote(e.target.value)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-2",
						children: [
							s.status === "submitted" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
								disabled: busy,
								onClick: () => review.mutate("approve"),
								children: admin_guest_posts_approve()
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
								variant: "outline",
								disabled: busy || !note.trim(),
								onClick: async () => {
									if (await keepsEdits()) review.mutate("request_changes");
								},
								children: admin_guest_posts_request_changes()
							})] }),
							(s.status === "submitted" || s.status === "changes_requested") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
								variant: "outline",
								className: "text-destructive",
								disabled: busy || !note.trim(),
								onClick: async () => {
									const price = pkg ? formatPrice(pkg.priceInCents, pkg.currency) : "";
									if (!await keepsEdits()) return;
									if (await confirm({
										title: admin_guest_posts_reject(),
										description: admin_guest_posts_reject_confirm({ price }),
										confirmLabel: admin_guest_posts_reject(),
										destructive: true
									})) reject.mutate();
								},
								children: admin_guest_posts_reject()
							}),
							s.status === "published" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
								variant: "outline",
								className: "text-destructive",
								disabled: busy,
								onClick: async () => {
									if (!await keepsEdits()) return;
									if (await confirm({
										title: admin_guest_posts_unpublish(),
										description: admin_guest_posts_unpublish_confirm(),
										confirmLabel: admin_guest_posts_unpublish(),
										destructive: true
									})) unpublish.mutate();
								},
								children: admin_guest_posts_unpublish()
							}),
							restorable && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
								disabled: busy,
								onClick: async () => {
									if (await confirm({
										title: admin_guest_posts_republish(),
										description: admin_guest_posts_republish_confirm(),
										confirmLabel: admin_guest_posts_republish()
									})) restore.mutate("republish");
								},
								children: admin_guest_posts_republish()
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
								variant: "outline",
								disabled: busy || !note.trim(),
								onClick: async () => {
									if (await keepsEdits()) restore.mutate("request_changes");
								},
								children: admin_guest_posts_request_changes()
							})] }),
							s.status !== "published" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: localizeHref(`/blog/${post.slug}?preview=1`),
								target: "_blank",
								rel: "noopener",
								title: dirty ? admin_guest_posts_preview_unsaved() : void 0,
								className: cn(buttonVariants({ variant: "ghost" }), "ml-auto gap-1.5"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "size-4" }), guest_posts_preview()]
							})
						]
					}),
					s.status === "submitted" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground text-xs",
						children: admin_guest_posts_review_hint()
					}),
					s.status === "unpublished" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground text-xs",
						children: restorable ? admin_guest_posts_restore_hint() : admin_guest_posts_refunded_hint()
					})
				]
			})
		]
	});
}
function Meta({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
		className: "text-muted-foreground text-xs",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
		className: "mt-0.5",
		children
	})] });
}
export { AdminGuestPostsPage as component };
