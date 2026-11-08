import { __toESM } from "../_runtime.mjs";
import { require_jsx_runtime, require_react } from "../_libs/@base-ui/react+[...].mjs";
import { useQuery } from "../_libs/tanstack__react-query.mjs";
import { keepPreviousData } from "../_libs/tanstack__query-core.mjs";
import { CreditCard, DollarSign, LifeBuoy, RefreshCw, Repeat, ShoppingCart, UserPlus, Users, X } from "../_libs/lucide-react.mjs";
import { Button$1, admin_analytics_any, admin_analytics_breakdown, admin_analytics_checkout_rate, admin_analytics_checkouts, admin_analytics_clear_filters, admin_analytics_description, admin_analytics_dim_country, admin_analytics_dim_referrer, admin_analytics_empty, admin_analytics_empty_hint, admin_analytics_filter_by_value, admin_analytics_footnote, admin_analytics_group_by, admin_analytics_of_checkouts, admin_analytics_of_signups, admin_analytics_paid, admin_analytics_paid_rate, admin_analytics_range_24h, admin_analytics_range_30d, admin_analytics_range_7d, admin_analytics_refresh, admin_analytics_signups, admin_analytics_title, admin_analytics_untagged, admin_description, admin_stats_active_subscriptions, admin_stats_new_24h, admin_stats_open_tickets, admin_stats_open_tickets_hint, admin_stats_payments_net, admin_stats_revenue_30d, admin_stats_total_users, admin_stats_trialing, admin_title, apiGet, cn } from "./router-FRpG8iox.mjs";
import { Card, CardContent, CardHeader, CardTitle } from "./card-BkWHqUeW.mjs";
import { Select$1, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./select-UynCZa1h.mjs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./table-BkuyEj07.mjs";
// node_modules/.nitro/vite/services/ssr/assets/admin-BOjEgceT.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var RANGES = [
	"24h",
	"7d",
	"30d"
];
var DIMENSIONS = [
	"utm_source",
	"utm_medium",
	"utm_campaign",
	"utm_term",
	"utm_content",
	"referrer",
	"country"
];
var ANY = "__any__";
var NONE = "__none__";
function rate(part, whole) {
	if (!whole) return "—";
	return `${(part / whole * 100).toFixed(1)}%`;
}
/** Signup → checkout → paid funnel section for the admin overview. */
function ConversionFunnel() {
	const [range, setRange] = (0, import_react.useState)("7d");
	const [groupBy, setGroupBy] = (0, import_react.useState)("utm_source");
	const [filters, setFilters] = (0, import_react.useState)({});
	const query = useQuery({
		queryKey: [
			"admin-analytics-funnel",
			range,
			groupBy,
			filters
		],
		queryFn: () => {
			const params = new URLSearchParams({
				range,
				groupBy
			});
			for (const [dim, value] of Object.entries(filters)) if (value !== void 0) params.set(dim, value);
			return apiGet(`/api/admin/analytics/funnel?${params}`);
		},
		placeholderData: keepPreviousData
	});
	const report = query.data;
	const totals = report?.totals ?? {
		signups: 0,
		checkouts: 0,
		paid: 0
	};
	const hasFilters = Object.keys(filters).length > 0;
	const untagged = admin_analytics_untagged();
	function dimLabel(dim) {
		return dim === "referrer" ? admin_analytics_dim_referrer() : dim === "country" ? admin_analytics_dim_country() : dim;
	}
	function setFilter(dim, value) {
		setFilters((prev) => {
			const next = { ...prev };
			if (value === void 0) delete next[dim];
			else next[dim] = value;
			return next;
		});
	}
	const steps = [
		{
			label: admin_analytics_signups(),
			value: totals.signups,
			hint: null,
			icon: UserPlus
		},
		{
			label: admin_analytics_checkouts(),
			value: totals.checkouts,
			hint: admin_analytics_of_signups({ rate: rate(totals.checkouts, totals.signups) }),
			icon: ShoppingCart
		},
		{
			label: admin_analytics_paid(),
			value: totals.paid,
			hint: `${admin_analytics_of_checkouts({ rate: rate(totals.paid, totals.checkouts) })} · ${admin_analytics_of_signups({ rate: rate(totals.paid, totals.signups) })}`,
			icon: CreditCard
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-start justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-lg font-semibold",
					children: admin_analytics_title()
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground text-sm",
					children: admin_analytics_description()
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "bg-muted inline-flex rounded-lg p-1",
						children: RANGES.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setRange(r),
							className: cn("rounded-md px-3 py-1 text-sm font-medium transition-colors", range === r ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"),
							children: r === "24h" ? admin_analytics_range_24h() : r === "7d" ? admin_analytics_range_7d() : admin_analytics_range_30d()
						}, r))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
						variant: "outline",
						size: "icon",
						onClick: () => query.refetch(),
						"aria-label": admin_analytics_refresh(),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: cn("size-4", query.isFetching && "animate-spin") })
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center gap-2",
				children: [DIMENSIONS.map((dim) => {
					const options = report?.options[dim] ?? [];
					const current = filters[dim];
					const values = current !== void 0 && !options.includes(current) ? [current, ...options] : options;
					const items = [{
						value: ANY,
						label: `${dimLabel(dim)}: ${admin_analytics_any()}`
					}, ...values.map((v) => ({
						value: v || NONE,
						label: `${dimLabel(dim)}: ${v || untagged}`
					}))];
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select$1, {
						items,
						value: current === void 0 ? ANY : current || NONE,
						onValueChange: (v) => setFilter(dim, !v || v === ANY ? void 0 : v === NONE ? "" : String(v)),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
							className: cn("max-w-60", current !== void 0 && "border-primary"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: item.value,
							children: item.label
						}, item.value)) })]
					}, dim);
				}), hasFilters && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button$1, {
					variant: "ghost",
					size: "sm",
					onClick: () => setFilters({}),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" }), admin_analytics_clear_filters()]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 md:grid-cols-3",
				children: steps.map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
					className: "flex flex-row items-center justify-between space-y-0 pb-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
						className: "text-sm font-medium",
						children: step.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(step.icon, { className: "text-muted-foreground size-4" })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-2xl font-bold tabular-nums",
					children: step.value.toLocaleString()
				}), step.hint && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground mt-1 text-xs",
					children: step.hint
				})] })] }, step.label))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
				className: "flex flex-row flex-wrap items-center justify-between gap-2 space-y-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
					className: "text-base",
					children: admin_analytics_breakdown()
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select$1, {
					items: DIMENSIONS.map((d) => ({
						value: d,
						label: `${admin_analytics_group_by()}: ${dimLabel(d)}`
					})),
					value: groupBy,
					onValueChange: (v) => v && setGroupBy(v),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: DIMENSIONS.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
						value: d,
						children: `${admin_analytics_group_by()}: ${dimLabel(d)}`
					}, d)) })]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-x-auto",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: dimLabel(groupBy) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
						className: "text-right",
						children: admin_analytics_signups()
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
						className: "text-right",
						children: admin_analytics_checkouts()
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
						className: "text-right",
						children: admin_analytics_checkout_rate()
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
						className: "text-right",
						children: admin_analytics_paid()
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
						className: "text-right",
						children: admin_analytics_paid_rate()
					})
				] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableBody, {
					className: cn(query.isFetching && "opacity-60 transition-opacity"),
					children: [(report?.rows ?? []).map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
							className: "max-w-80",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "hover:text-primary truncate text-left underline-offset-4 hover:underline",
								title: admin_analytics_filter_by_value(),
								onClick: () => setFilter(groupBy, row.value),
								children: row.value || /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground",
									children: untagged
								})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
							className: "text-right tabular-nums",
							children: row.signups
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
							className: "text-right tabular-nums",
							children: row.checkouts
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
							className: "text-muted-foreground text-right tabular-nums",
							children: rate(row.checkouts, row.signups)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
							className: "text-right tabular-nums",
							children: row.paid
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
							className: "text-muted-foreground text-right tabular-nums",
							children: rate(row.paid, row.signups)
						})
					] }, row.value)), report && report.rows.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableRow, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, {
						colSpan: 6,
						className: "text-muted-foreground h-24 text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: admin_analytics_empty() }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs",
							children: admin_analytics_empty_hint()
						})]
					}) })]
				})] })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground mt-4 text-xs",
				children: admin_analytics_footnote()
			})] })] })
		]
	});
}
function formatMoney(amount, currency) {
	try {
		const fmt = new Intl.NumberFormat(void 0, {
			style: "currency",
			currency: currency.toUpperCase()
		});
		const digits = fmt.resolvedOptions().maximumFractionDigits ?? 2;
		return fmt.format(amount / 10 ** digits);
	} catch {
		return `${(amount / 100).toFixed(2)} ${currency.toUpperCase()}`;
	}
}
function AdminPage() {
	const stats = useQuery({
		queryKey: ["admin-overview-stats"],
		queryFn: () => apiGet("/api/admin/analytics/overview")
	}).data;
	const [mainRevenue, ...otherRevenue] = stats?.revenue30d ?? [];
	const payments = (stats?.revenue30d ?? []).reduce((n, r) => n + r.orders, 0);
	const pending = "—";
	const cards = [
		{
			title: admin_stats_total_users(),
			icon: Users,
			value: stats ? stats.users.total.toLocaleString() : pending,
			hint: stats ? admin_stats_new_24h({ count: stats.users.new24h }) : null
		},
		{
			title: admin_stats_revenue_30d(),
			icon: DollarSign,
			value: stats ? mainRevenue ? formatMoney(mainRevenue.amount, mainRevenue.currency) : formatMoney(0, "usd") : pending,
			hint: stats ? [admin_stats_payments_net({ count: payments }), ...otherRevenue.map((r) => `+ ${formatMoney(r.amount, r.currency)}`)].join(" · ") : null
		},
		{
			title: admin_stats_active_subscriptions(),
			icon: Repeat,
			value: stats ? stats.subscriptions.active.toLocaleString() : pending,
			hint: stats ? admin_stats_trialing({ count: stats.subscriptions.trialing }) : null
		},
		{
			title: admin_stats_open_tickets(),
			icon: LifeBuoy,
			value: stats ? stats.openTickets.toLocaleString() : pending,
			hint: stats ? admin_stats_open_tickets_hint() : null
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6 p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-2xl font-bold",
				children: admin_title()
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground",
				children: admin_description()
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
				children: cards.map((card) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
					className: "flex flex-row items-center justify-between space-y-0 pb-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
						className: "text-sm font-medium",
						children: card.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(card.icon, { className: "text-muted-foreground size-4" })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-2xl font-bold tabular-nums",
					children: card.value
				}), card.hint && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground mt-1 text-xs",
					children: card.hint
				})] })] }, card.title))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConversionFunnel, {})
		]
	});
}
export { AdminPage as component };
