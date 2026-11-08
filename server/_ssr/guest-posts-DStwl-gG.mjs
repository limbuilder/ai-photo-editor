import { __toESM } from "../_runtime.mjs";
import { require_jsx_runtime, require_react } from "../_libs/@base-ui/react+[...].mjs";
import { localizeHref } from "./ssr.mjs";
import { useQuery } from "../_libs/tanstack__react-query.mjs";
import { keepPreviousData } from "../_libs/tanstack__query-core.mjs";
import { ExternalLink, Eye, Pencil, Plus } from "../_libs/lucide-react.mjs";
import { Link$2, apiGet, buttonVariants, cn, guest_posts_actions_col, guest_posts_closed, guest_posts_description, guest_posts_edit, guest_posts_empty, guest_posts_new_button, guest_posts_package_col, guest_posts_preview, guest_posts_review_note, guest_posts_search_placeholder, guest_posts_status_all, guest_posts_status_col, guest_posts_title, guest_posts_title_col, guest_posts_updated_col, guest_posts_view, guest_posts_view_article, pageQuery, tDynamic } from "./router-FRpG8iox.mjs";
import { Card, CardContent } from "./card-BkWHqUeW.mjs";
import { formatDate, useGuestPostInfo } from "./use-guest-posts-BXr5R4sL.mjs";
import { ArticleUrl, GuestPostStatusBadge, PackageCell, ReviewNoteCell } from "./-shared-atGxkMjq.mjs";
import { Select$1, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./select-UynCZa1h.mjs";
import { DataTable } from "./data-table-DKAF6YZO.mjs";
// node_modules/.nitro/vite/services/ssr/assets/guest-posts-DStwl-gG.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var PAGE_SIZE = 20;
var EDITABLE = ["draft", "changes_requested"];
var STATUSES = [
	"draft",
	"submitted",
	"changes_requested",
	"published",
	"rejected",
	"unpublished"
];
function GuestPostsPage() {
	const [page, setPage] = (0, import_react.useState)(1);
	const [search, setSearch] = (0, import_react.useState)("");
	const [debounced, setDebounced] = (0, import_react.useState)("");
	const [status, setStatus] = (0, import_react.useState)("all");
	const info = useGuestPostInfo();
	(0, import_react.useEffect)(() => {
		const t = setTimeout(() => setDebounced(search), 300);
		return () => clearTimeout(t);
	}, [search]);
	(0, import_react.useEffect)(() => setPage(1), [debounced, status]);
	const listQuery = useQuery({
		queryKey: [
			"guest-posts",
			page,
			debounced,
			status
		],
		queryFn: () => apiGet(pageQuery("/api/guest-posts", {
			page,
			pageSize: PAGE_SIZE,
			search: debounced
		}) + (status === "all" ? "" : `&status=${status}`)),
		placeholderData: keepPreviousData
	});
	const action = cn(buttonVariants({
		variant: "ghost",
		size: "sm"
	}), "h-7 gap-1 px-2 text-xs");
	const columns = [
		{
			header: guest_posts_title_col(),
			cell: (r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$2, {
					href: `/settings/guest-posts/${r.id}`,
					className: "font-medium hover:underline",
					children: r.title || "—"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArticleUrl, {
					slug: r.slug,
					status: r.status
				})]
			})
		},
		{
			header: guest_posts_package_col(),
			className: "w-[180px]",
			cell: (r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PackageCell, {
				productId: r.productId,
				packages: info.data?.packages
			})
		},
		{
			header: guest_posts_status_col(),
			className: "w-[150px]",
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
			header: guest_posts_updated_col(),
			className: "w-[180px]",
			cell: (r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-muted-foreground",
				children: formatDate(r.updatedAt)
			})
		},
		{
			header: guest_posts_actions_col(),
			className: "w-[190px]",
			cell: (r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link$2, {
						href: `/settings/guest-posts/${r.id}`,
						className: action,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "size-3.5" }), EDITABLE.includes(r.status) ? guest_posts_edit() : guest_posts_view()]
					}),
					r.slug && r.status === "published" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: localizeHref(`/blog/${r.slug}`),
						target: "_blank",
						rel: "noopener",
						className: action,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-3.5" }), guest_posts_view_article()]
					}),
					r.slug && r.status !== "published" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: localizeHref(`/blog/${r.slug}?preview=1`),
						target: "_blank",
						rel: "noopener",
						className: action,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "size-3.5" }), guest_posts_preview()]
					})
				]
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
					children: guest_posts_title()
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground",
					children: guest_posts_description()
				})] }), info.data?.enabled && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link$2, {
					href: "/settings/guest-posts/new",
					className: cn(buttonVariants(), "gap-2"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" }), guest_posts_new_button()]
				})]
			}),
			info.data && !info.data.enabled && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground text-sm",
				children: guest_posts_closed()
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
				columns,
				data: listQuery.data?.items ?? [],
				total: listQuery.data?.total ?? 0,
				page,
				pageSize: PAGE_SIZE,
				onPageChange: setPage,
				rowKey: (r) => r.id,
				emptyText: guest_posts_empty(),
				search,
				onSearchChange: setSearch,
				searchPlaceholder: guest_posts_search_placeholder(),
				toolbar: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select$1, {
					value: status,
					onValueChange: (value) => setStatus(value || "all"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
						className: "h-9 w-[150px]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
						value: "all",
						children: guest_posts_status_all()
					}), STATUSES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
						value: s,
						children: tDynamic(`guest_posts.status_${s}`)
					}, s))] })]
				}),
				onRefresh: () => listQuery.refetch(),
				loading: listQuery.isFetching || listQuery.isPending
			}) }) })
		]
	});
}
export { GuestPostsPage as component };
