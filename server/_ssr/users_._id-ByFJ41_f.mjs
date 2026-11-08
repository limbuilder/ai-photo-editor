import { __toESM } from "../_runtime.mjs";
import { require_jsx_runtime, require_react } from "../_libs/@base-ui/react+[...].mjs";
import { Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { useInfiniteQuery, useQuery } from "../_libs/tanstack__react-query.mjs";
import { keepPreviousData } from "../_libs/tanstack__query-core.mjs";
import { ArrowDownNarrowWide, ArrowLeft, ArrowUpNarrowWide, Copy, RefreshCw } from "../_libs/lucide-react.mjs";
import { toast } from "../_libs/sonner.mjs";
import { Button$1, Route$67, admin_credits_amount, admin_credits_created_at, admin_credits_description, admin_credits_expires_at, admin_credits_no_credits, admin_credits_remaining, admin_credits_scene, admin_credits_transaction_no, admin_credits_type, admin_payments_amount, admin_payments_created_at, admin_payments_no_payments, admin_payments_order_no, admin_payments_product_name_label, admin_payments_provider, admin_payments_status, admin_payments_type, admin_user_detail_attribution_desc, admin_user_detail_attribution_title, admin_user_detail_back, admin_user_detail_copied, admin_user_detail_copy_email, admin_user_detail_country, admin_user_detail_credit_search, admin_user_detail_credits_title, admin_user_detail_direct, admin_user_detail_email_unverified, admin_user_detail_email_verified, admin_user_detail_ip, admin_user_detail_joined, admin_user_detail_locale, admin_user_detail_no_roles, admin_user_detail_not_found, admin_user_detail_order_search, admin_user_detail_orders_title, admin_user_detail_referrer, admin_user_detail_roles, admin_user_detail_stat_balance, admin_user_detail_stat_consumed, admin_user_detail_stat_granted, admin_user_detail_stat_orders, admin_user_detail_stat_paid, admin_user_detail_status_all, admin_user_detail_timeline_cost, admin_user_detail_timeline_empty, admin_user_detail_timeline_more, admin_user_detail_timeline_newest_first, admin_user_detail_timeline_oldest_first, admin_user_detail_timeline_refresh, admin_user_detail_timeline_title, admin_user_detail_type_all, apiGet, cn, getEventDefinition, tDynamic } from "./router-FRpG8iox.mjs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card-BkWHqUeW.mjs";
import { Badge } from "./badge-DsAADeEG.mjs";
import { Avatar$1, AvatarFallback, AvatarImage } from "./avatar-C_C4qEd-.mjs";
import { Select$1, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./select-UynCZa1h.mjs";
import { formatDateTime } from "./time-LUwPQmfY.mjs";
import { DataTable } from "./data-table-DKAF6YZO.mjs";
import { Skeleton } from "./skeleton-DeIuuBWc.mjs";
// node_modules/.nitro/vite/services/ssr/assets/users_._id-ByFJ41_f.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var TONE_CLASSES = {
	green: "bg-emerald-500",
	red: "bg-red-500",
	amber: "bg-amber-500",
	gray: "bg-muted-foreground/50"
};
function toneOf(kind) {
	const tone = getEventDefinition(kind)?.tone;
	return TONES[kind] || (tone ? TONE_CLASSES[tone] : TONE_CLASSES.gray);
}
function labelOf(kind) {
	const key = `admin.user_detail.timeline_${kind}`;
	const label = tDynamic(key);
	return label === key ? kind : label;
}
var TONES = {
	order_paid: "bg-emerald-500",
	subscription_started: "bg-emerald-500",
	order_failed: "bg-red-500",
	order_refunded: "bg-red-500",
	subscription_canceled: "bg-red-500",
	task_failed: "bg-red-500",
	order_created: "bg-amber-500"
};
function money(amount, currency) {
	if (typeof amount !== "number") return null;
	try {
		return new Intl.NumberFormat("en-US", {
			style: "currency",
			currency: String(currency || "USD")
		}).format(amount / 100);
	} catch {
		return `${amount / 100} ${currency ?? ""}`.trim();
	}
}
function describe(kind, d) {
	return (() => {
		switch (kind) {
			case "signup": return [
				d.source,
				d.referrer,
				d.country
			];
			case "order_created":
			case "order_paid": return [
				d.product,
				money(d.amount, d.currency),
				d.provider
			];
			case "order_failed": return [d.product, d.orderNo];
			case "order_refunded": return [money(d.amount, d.currency), d.orderNo];
			case "subscription_started": return [
				d.product,
				d.interval,
				money(d.amount, d.currency)
			];
			case "subscription_canceled": return [d.product, d.reason];
			case "credits_granted": return [`+${d.credits}`, d.description || d.scene];
			case "credits_consumed": return [`-${d.credits}`, d.description || d.scene];
			case "task_created": return [
				d.mediaType,
				d.model,
				d.cost ? admin_user_detail_timeline_cost({ cost: d.cost }) : ""
			];
			case "task_succeeded":
			case "task_failed": return [d.mediaType, d.model];
			case "ticket_opened": return [d.title];
			default: return Object.values(d).map((v) => typeof v === "boolean" ? String(v) : v);
		}
	})().filter((p) => p !== null && p !== void 0 && p !== "").join(" · ");
}
function UserTimeline({ userId }) {
	const [order, setOrder] = (0, import_react.useState)("asc");
	const query = useInfiniteQuery({
		queryKey: [
			"admin-user-timeline",
			userId,
			order
		],
		queryFn: ({ pageParam }) => {
			const params = new URLSearchParams({
				userId,
				order
			});
			if (pageParam) params.set("cursor", pageParam);
			return apiGet(`/api/admin/users/timeline?${params}`);
		},
		initialPageParam: "",
		getNextPageParam: (last) => last.nextCursor || void 0
	});
	const events = query.data?.pages.flatMap((p) => p.items) ?? [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
		className: "flex flex-row items-center justify-between",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: admin_user_detail_timeline_title() }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-1",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button$1, {
				variant: "ghost",
				size: "sm",
				className: "h-8",
				onClick: () => setOrder(order === "asc" ? "desc" : "asc"),
				children: [order === "asc" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDownNarrowWide, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpNarrowWide, { className: "size-4" }), order === "asc" ? admin_user_detail_timeline_oldest_first() : admin_user_detail_timeline_newest_first()]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
				variant: "ghost",
				size: "icon",
				className: "size-8",
				onClick: () => query.refetch(),
				"aria-label": admin_user_detail_timeline_refresh(),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: cn("size-4", query.isFetching && "animate-spin") })
			})]
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, { children: [query.isPending ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "space-y-3",
		children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-5 w-full" }, i))
	}) : query.isError ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-muted-foreground text-sm",
		children: query.error.message
	}) : events.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-muted-foreground text-sm",
		children: admin_user_detail_timeline_empty()
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
		className: "border-border relative ml-1.5 border-l",
		children: events.map((e) => {
			const detail = describe(e.kind, e.detail);
			const title = labelOf(e.kind);
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("ring-background pointer-events-none absolute top-1/2 -left-[5px] z-10 size-2.5 -translate-y-1/2 rounded-full ring-2", toneOf(e.kind)) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(EventRow, {
					eventRef: e.ref,
					href: e.href,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted-foreground shrink-0 tabular-nums",
							children: formatDateTime(e.at)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "shrink-0 font-medium",
							children: title
						}),
						detail && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted-foreground min-w-0 truncate",
							title: detail,
							children: detail
						})
					]
				})]
			}, e.key);
		})
	}), query.hasNextPage && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
		variant: "outline",
		size: "sm",
		className: "mt-4",
		disabled: query.isFetchingNextPage,
		onClick: () => query.fetchNextPage(),
		children: admin_user_detail_timeline_more()
	})] })] });
}
var ROW = "ml-2 flex min-w-0 items-baseline gap-3 rounded-md py-1.5 pr-2 pl-3 text-sm";
function EventRow({ eventRef, href, children }) {
	const className = cn(ROW, "hover:bg-muted transition-colors");
	if (href) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href,
		target: "_blank",
		rel: "noreferrer",
		className,
		children
	});
	if (!eventRef) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: ROW,
		children
	});
	switch (eventRef.type) {
		case "order": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/admin/payments",
			search: { search: eventRef.id },
			target: "_blank",
			className,
			children
		});
		case "subscription": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/admin/subscriptions",
			search: { search: eventRef.id },
			target: "_blank",
			className,
			children
		});
		case "credit": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/admin/credits",
			search: { search: eventRef.id },
			target: "_blank",
			className,
			children
		});
		case "ticket": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/admin/tickets",
			search: { id: eventRef.id },
			target: "_blank",
			className,
			children
		});
	}
}
var PAGE_SIZE = 10;
var CREDIT_TYPES = ["grant", "consume"];
var CREDIT_STATUSES = [
	"active",
	"expired",
	"deleted"
];
var ORDER_STATUSES = [
	"pending",
	"created",
	"paid",
	"failed",
	"refunding",
	"refunded",
	"deleted"
];
var ORDER_TYPES = [
	["one-time", "one_time"],
	["subscription", "subscription"],
	["renew", "renew"]
];
function formatAmount(amount, currency) {
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: currency || "USD"
	}).format(amount / 100);
}
var orderStatusVariant = (s) => {
	if (s === "paid") return "default";
	if (s === "failed") return "destructive";
	return "secondary";
};
function Empty() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "text-muted-foreground",
		children: "—"
	});
}
function Field({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid grid-cols-[140px_1fr] gap-3 py-2 text-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: "min-w-0 break-words",
			children
		})]
	});
}
function Stat({ label, value, hint }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
		className: "space-y-1",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground text-sm",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-2xl font-semibold tabular-nums",
				children: value
			}),
			hint && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground text-xs",
				children: hint
			})
		]
	}) });
}
function UserDetailPage() {
	const { id } = Route$67.useParams();
	const detailQuery = useQuery({
		queryKey: ["admin-user", id],
		queryFn: () => apiGet(`/api/admin/users/${encodeURIComponent(id)}`)
	});
	if (detailQuery.isPending) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6 p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-16 w-72" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
				children: Array.from({ length: 4 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-24" }, i))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-64" })
		]
	});
	if (detailQuery.isError || !detailQuery.data) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4 p-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BackLink, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-muted-foreground",
			children: detailQuery.error?.message || admin_user_detail_not_found()
		})]
	});
	const { user, roles, stats } = detailQuery.data;
	const utmFields = [
		["utm_source", user.utmSource],
		["utm_medium", user.utmMedium],
		["utm_campaign", user.utmCampaign],
		["utm_term", user.utmTerm],
		["utm_content", user.utmContent]
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6 p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BackLink, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Avatar$1, {
						className: "size-14",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarImage, { src: user.image || void 0 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarFallback, { children: (user.name || user.email).charAt(0).toUpperCase() })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "truncate text-2xl font-bold",
							children: user.name || "—"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-muted-foreground flex flex-wrap items-center gap-2 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "truncate",
									children: user.email
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									variant: user.emailVerified ? "default" : "secondary",
									children: user.emailVerified ? admin_user_detail_email_verified() : admin_user_detail_email_unverified()
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: admin_user_detail_joined({ date: formatDateTime(user.createdAt) }) })
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button$1, {
						variant: "outline",
						size: "sm",
						onClick: () => {
							navigator.clipboard.writeText(user.email).then(() => toast.success(admin_user_detail_copied()));
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "size-4" }), admin_user_detail_copy_email()]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: admin_user_detail_stat_balance(),
						value: stats.creditBalance.toLocaleString()
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: admin_user_detail_stat_granted(),
						value: stats.creditsGranted.toLocaleString()
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: admin_user_detail_stat_consumed(),
						value: stats.creditsConsumed.toLocaleString()
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: admin_user_detail_stat_paid(),
						value: stats.paidAmounts.length > 0 ? stats.paidAmounts.map((p) => formatAmount(p.amount, p.currency)).join(" + ") : formatAmount(0, "USD"),
						hint: admin_user_detail_stat_orders({
							paid: stats.paidOrderCount,
							total: stats.orderCount
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: admin_user_detail_attribution_title() }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: admin_user_detail_attribution_desc() })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: "grid gap-x-8 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "divide-y",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: admin_user_detail_referrer(),
						children: user.referrer ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: user.referrer,
							target: "_blank",
							rel: "noopener noreferrer nofollow",
							className: "font-mono text-xs underline-offset-4 hover:underline",
							children: user.referrer
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted-foreground",
							children: admin_user_detail_direct()
						})
					}), utmFields.map(([label, value]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label,
						children: value ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "bg-muted inline-flex rounded-md px-2 py-0.5 text-xs font-medium",
							children: value
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Empty, {})
					}, label))]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "divide-y",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: admin_user_detail_ip(),
							children: user.ip ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-xs",
								children: user.ip
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Empty, {})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: admin_user_detail_country(),
							children: user.country || /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Empty, {})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: admin_user_detail_locale(),
							children: user.locale || /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Empty, {})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: admin_user_detail_roles(),
							children: roles.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-wrap gap-1",
								children: roles.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									variant: "outline",
									children: r.roleTitle || r.roleName
								}, r.roleId))
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground",
								children: admin_user_detail_no_roles()
							})
						})
					]
				})]
			}) })] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserTimeline, { userId: user.id }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserOrders, { userId: user.id }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserCredits, { userId: user.id })
		]
	});
}
function BackLink() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/admin/users",
		className: "text-muted-foreground hover:text-foreground inline-flex items-center gap-1 text-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), admin_user_detail_back()]
	});
}
function UserOrders({ userId }) {
	const [page, setPage] = (0, import_react.useState)(1);
	const [status, setStatus] = (0, import_react.useState)("all");
	const [paymentType, setPaymentType] = (0, import_react.useState)("all");
	const [search, setSearch] = (0, import_react.useState)("");
	const [debouncedSearch, setDebouncedSearch] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		const timer = setTimeout(() => setDebouncedSearch(search), 300);
		return () => clearTimeout(timer);
	}, [search]);
	(0, import_react.useEffect)(() => {
		setPage(1);
	}, [
		status,
		paymentType,
		debouncedSearch
	]);
	const query = useQuery({
		queryKey: [
			"admin-user-orders",
			userId,
			page,
			status,
			paymentType,
			debouncedSearch
		],
		queryFn: () => {
			const params = new URLSearchParams({
				userId,
				page: String(page),
				pageSize: String(PAGE_SIZE)
			});
			if (status !== "all") params.set("status", status);
			if (paymentType !== "all") params.set("paymentType", paymentType);
			if (debouncedSearch) params.set("search", debouncedSearch);
			return apiGet(`/api/admin/orders?${params}`);
		},
		placeholderData: keepPreviousData
	});
	const columns = [
		{
			header: admin_payments_order_no(),
			cell: (o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-mono text-xs",
				children: o.orderNo
			})
		},
		{
			header: admin_payments_product_name_label(),
			cell: (o) => o.productName || "—"
		},
		{
			header: admin_payments_amount(),
			cell: (o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-medium",
				children: formatAmount(o.amount, o.currency)
			})
		},
		{
			header: admin_payments_status(),
			cell: (o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
				variant: orderStatusVariant(o.status),
				children: tDynamic(`admin.payments.status_${o.status}`)
			})
		},
		{
			header: admin_payments_type(),
			cell: (o) => {
				const type = ORDER_TYPES.find(([value]) => value === o.paymentType);
				return type ? tDynamic(`settings.payments.tab_${type[1]}`) : o.paymentType || "—";
			}
		},
		{
			header: admin_payments_provider(),
			cell: (o) => o.paymentProvider
		},
		{
			header: admin_payments_created_at(),
			cell: (o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-muted-foreground text-sm",
				children: formatDateTime(o.createdAt)
			})
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: admin_user_detail_orders_title() }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
		columns,
		data: query.data?.items ?? [],
		total: query.data?.total ?? 0,
		page,
		pageSize: PAGE_SIZE,
		onPageChange: setPage,
		rowKey: (o) => o.id,
		emptyText: admin_payments_no_payments(),
		search,
		onSearchChange: setSearch,
		searchPlaceholder: admin_user_detail_order_search(),
		toolbar: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select$1, {
				value: status,
				onValueChange: (value) => setStatus(value || "all"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
					className: "h-8 w-[130px]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { children: (value) => value === "all" ? admin_user_detail_status_all() : tDynamic(`admin.payments.status_${value}`) })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
					value: "all",
					children: admin_user_detail_status_all()
				}), ORDER_STATUSES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
					value: s,
					children: tDynamic(`admin.payments.status_${s}`)
				}, s))] })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select$1, {
				value: paymentType,
				onValueChange: (value) => setPaymentType(value || "all"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
					className: "h-8 w-[130px]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { children: (value) => {
						const type = ORDER_TYPES.find(([v]) => v === value);
						return type ? tDynamic(`settings.payments.tab_${type[1]}`) : admin_user_detail_type_all();
					} })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
					value: "all",
					children: admin_user_detail_type_all()
				}), ORDER_TYPES.map(([value, key]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
					value,
					children: tDynamic(`settings.payments.tab_${key}`)
				}, value))] })]
			})]
		}),
		onRefresh: () => query.refetch(),
		loading: query.isFetching || query.isPending
	}) })] });
}
function UserCredits({ userId }) {
	const [page, setPage] = (0, import_react.useState)(1);
	const [status, setStatus] = (0, import_react.useState)("all");
	const [transactionType, setTransactionType] = (0, import_react.useState)("all");
	const [search, setSearch] = (0, import_react.useState)("");
	const [debouncedSearch, setDebouncedSearch] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		const timer = setTimeout(() => setDebouncedSearch(search), 300);
		return () => clearTimeout(timer);
	}, [search]);
	(0, import_react.useEffect)(() => {
		setPage(1);
	}, [
		status,
		transactionType,
		debouncedSearch
	]);
	const query = useQuery({
		queryKey: [
			"admin-user-credits",
			userId,
			page,
			status,
			transactionType,
			debouncedSearch
		],
		queryFn: () => {
			const params = new URLSearchParams({
				userId,
				page: String(page),
				pageSize: String(PAGE_SIZE),
				status
			});
			if (transactionType !== "all") params.set("transactionType", transactionType);
			if (debouncedSearch) params.set("search", debouncedSearch);
			return apiGet(`/api/admin/credits?${params}`);
		},
		placeholderData: keepPreviousData
	});
	const columns = [
		{
			header: admin_credits_transaction_no(),
			cell: (c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-mono text-xs",
				children: c.transactionNo
			})
		},
		{
			header: admin_credits_amount(),
			cell: (c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: cn("font-medium tabular-nums", c.credits > 0 ? "text-green-600" : "text-red-500"),
				children: c.credits > 0 ? `+${c.credits}` : c.credits
			})
		},
		{
			header: admin_credits_remaining(),
			cell: (c) => c.transactionType === "grant" ? c.remainingCredits : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Empty, {})
		},
		{
			header: admin_payments_status(),
			cell: (c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
				variant: c.status === "active" ? "default" : "secondary",
				children: tDynamic(`admin.user_detail.credit_status_${c.status}`)
			})
		},
		{
			header: admin_credits_type(),
			cell: (c) => tDynamic(`admin.user_detail.tab_${c.transactionType}`)
		},
		{
			header: admin_credits_scene(),
			cell: (c) => c.transactionScene || "—"
		},
		{
			header: admin_credits_description(),
			cell: (c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-muted-foreground block max-w-[240px] truncate text-sm",
				children: c.description || "—"
			})
		},
		{
			header: admin_credits_expires_at(),
			cell: (c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-muted-foreground text-sm",
				children: c.expiresAt ? formatDateTime(c.expiresAt) : "—"
			})
		},
		{
			header: admin_credits_created_at(),
			cell: (c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-muted-foreground text-sm",
				children: formatDateTime(c.createdAt)
			})
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: admin_user_detail_credits_title() }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
		columns,
		data: query.data?.items ?? [],
		total: query.data?.total ?? 0,
		page,
		pageSize: PAGE_SIZE,
		onPageChange: setPage,
		rowKey: (c) => c.id,
		emptyText: admin_credits_no_credits(),
		search,
		onSearchChange: setSearch,
		searchPlaceholder: admin_user_detail_credit_search(),
		toolbar: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select$1, {
				value: status,
				onValueChange: (value) => setStatus(value || "all"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
					className: "h-8 w-[130px]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { children: (value) => value === "all" ? admin_user_detail_status_all() : tDynamic(`admin.user_detail.credit_status_${value}`) })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
					value: "all",
					children: admin_user_detail_status_all()
				}), CREDIT_STATUSES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
					value: s,
					children: tDynamic(`admin.user_detail.credit_status_${s}`)
				}, s))] })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select$1, {
				value: transactionType,
				onValueChange: (value) => setTransactionType(value || "all"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
					className: "h-8 w-[130px]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { children: (value) => value === "all" ? admin_user_detail_type_all() : tDynamic(`admin.user_detail.tab_${value}`) })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
					value: "all",
					children: admin_user_detail_type_all()
				}), CREDIT_TYPES.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
					value: t,
					children: tDynamic(`admin.user_detail.tab_${t}`)
				}, t))] })]
			})]
		}),
		onRefresh: () => query.refetch(),
		loading: query.isFetching || query.isPending
	}) })] });
}
export { UserDetailPage as component };
