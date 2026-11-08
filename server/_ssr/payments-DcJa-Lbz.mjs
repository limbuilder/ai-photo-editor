import { __toESM } from "../_runtime.mjs";
import { require_jsx_runtime, require_react } from "../_libs/@base-ui/react+[...].mjs";
import { useQuery } from "../_libs/tanstack__react-query.mjs";
import { keepPreviousData } from "../_libs/tanstack__query-core.mjs";
import { ExternalLink } from "../_libs/lucide-react.mjs";
import { Link$2, apiGet, cn, guest_posts_title, settings_payments_amount, settings_payments_date, settings_payments_description, settings_payments_invoice, settings_payments_no_payments, settings_payments_order_no, settings_payments_product, settings_payments_provider, settings_payments_status, settings_payments_status_all, settings_payments_title, settings_payments_type, tDynamic } from "./router-FRpG8iox.mjs";
import { Card, CardContent } from "./card-BkWHqUeW.mjs";
import { Badge } from "./badge-DsAADeEG.mjs";
import { Select$1, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./select-UynCZa1h.mjs";
import { DataTable } from "./data-table-DKAF6YZO.mjs";
import { FeatureGate } from "./-feature-gate-BWXOOgeJ.mjs";
// node_modules/.nitro/vite/services/ssr/assets/payments-DcJa-Lbz.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/** "Product · Plan", or one of them when they're the same / missing. */
function productLabel(o) {
	if (o.guestPost) return `${guest_posts_title()} · ${o.planName || ""}`.trim();
	if (o.productName && o.planName && o.planName !== o.productName) return `${o.productName} · ${o.planName}`;
	return o.planName || o.productName || "—";
}
var TABS = [
	"all",
	"one-time",
	"subscription",
	"renew"
];
var PAGE_SIZE = 20;
var FILTER_STATUSES = [
	"paid",
	"created",
	"refunded",
	"failed"
];
var STATUS_LABELS = [
	"paid",
	"created",
	"pending",
	"refunding",
	"refunded",
	"failed"
];
function statusLabel(status) {
	return STATUS_LABELS.includes(status) ? tDynamic(`settings.payments.status_${status}`) : status;
}
function formatAmount(amount, currency) {
	const normalized = (currency || "usd").toUpperCase();
	return new Intl.NumberFormat(void 0, {
		style: "currency",
		currency: normalized
	}).format(amount / 100);
}
function statusVariant(status) {
	const s = status.toLowerCase();
	if (s === "paid" || s === "succeeded" || s === "active") return "default";
	if (s === "failed" || s === "canceled") return "destructive";
	return "secondary";
}
function PaymentsPage() {
	const [tab, setTab] = (0, import_react.useState)("all");
	const [page, setPage] = (0, import_react.useState)(1);
	const [search, setSearch] = (0, import_react.useState)("");
	const [debouncedSearch, setDebouncedSearch] = (0, import_react.useState)("");
	const [status, setStatus] = (0, import_react.useState)("all");
	(0, import_react.useEffect)(() => {
		const timer = setTimeout(() => setDebouncedSearch(search), 300);
		return () => clearTimeout(timer);
	}, [search]);
	(0, import_react.useEffect)(() => {
		setPage(1);
	}, [
		tab,
		debouncedSearch,
		status
	]);
	const query = useQuery({
		queryKey: [
			"user-payments",
			page,
			tab,
			debouncedSearch,
			status
		],
		queryFn: () => {
			const params = new URLSearchParams({
				page: String(page),
				pageSize: String(PAGE_SIZE)
			});
			if (tab !== "all") params.set("paymentType", tab);
			if (debouncedSearch) params.set("search", debouncedSearch);
			if (status !== "all") params.set("status", status);
			return apiGet(`/api/user/orders?${params}`);
		},
		placeholderData: keepPreviousData
	});
	const orders = query.data?.items ?? [];
	const total = query.data?.total ?? 0;
	const columns = [
		{
			header: settings_payments_order_no(),
			cell: (o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-mono text-xs",
				children: o.orderNo
			})
		},
		{
			header: settings_payments_product(),
			cell: (o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: productLabel(o) }), o.guestPost && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$2, {
					href: `/settings/guest-posts/${o.guestPost.id}`,
					className: "text-muted-foreground hover:text-foreground block max-w-[240px] truncate text-xs hover:underline",
					children: o.guestPost.title || "—"
				})]
			})
		},
		{
			header: settings_payments_amount(),
			cell: (o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-medium",
				children: formatAmount(o.amount, o.currency)
			})
		},
		{
			header: settings_payments_status(),
			cell: (o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
				variant: statusVariant(o.status),
				children: statusLabel(o.status)
			})
		},
		{
			header: settings_payments_type(),
			cell: (o) => o.paymentType && TABS.includes(o.paymentType) ? tDynamic(`settings.payments.tab_${o.paymentType.replace("-", "_")}`) : o.paymentType || "—"
		},
		{
			header: settings_payments_provider(),
			cell: (o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "capitalize",
				children: o.paymentProvider
			})
		},
		{
			header: settings_payments_date(),
			cell: (o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-muted-foreground text-sm",
				children: new Date(o.paidAt || o.createdAt).toLocaleDateString()
			})
		},
		{
			header: settings_payments_invoice(),
			className: "w-[60px]",
			cell: (o) => o.invoiceUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: o.invoiceUrl,
				target: "_blank",
				rel: "noopener noreferrer",
				className: "text-primary inline-flex items-center gap-1 text-sm hover:underline",
				"aria-label": settings_payments_invoice(),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-3.5" })
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-muted-foreground",
				children: "—"
			})
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6 p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-2xl font-bold",
				children: settings_payments_title()
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground",
				children: settings_payments_description()
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-border flex gap-1 overflow-x-auto overflow-y-hidden border-b",
				children: TABS.map((tb) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setTab(tb),
					className: cn("-mb-px border-b-2 px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors", tab === tb ? "border-primary text-foreground" : "text-muted-foreground hover:text-foreground border-transparent"),
					children: tDynamic(`settings.payments.tab_${tb.replace("-", "_")}`)
				}, tb))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
				columns,
				data: orders,
				total,
				page,
				pageSize: PAGE_SIZE,
				onPageChange: setPage,
				rowKey: (o) => o.id,
				emptyText: settings_payments_no_payments(),
				search,
				onSearchChange: setSearch,
				toolbar: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select$1, {
					value: status,
					onValueChange: (value) => setStatus(value || "all"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
						className: "h-9 w-[140px]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
						value: "all",
						children: settings_payments_status_all()
					}), FILTER_STATUSES.map((st) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
						value: st,
						children: statusLabel(st)
					}, st))] })]
				}),
				onRefresh: () => query.refetch(),
				loading: query.isFetching || query.isPending
			}) }) })
		]
	});
}
var SplitComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureGate, {
	feature: "payments",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaymentsPage, {})
});
export { SplitComponent as component };
