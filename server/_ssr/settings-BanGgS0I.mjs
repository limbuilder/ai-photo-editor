import { require_jsx_runtime } from "../_libs/@base-ui/react+[...].mjs";
import { useQuery } from "../_libs/tanstack__react-query.mjs";
import { ChevronRight, Coins, Key, LifeBuoy, PenLine, Sparkles, User } from "../_libs/lucide-react.mjs";
import { Link$2, apiGet, buttonVariants, cn, settings_apikeys_title, settings_billing_credits_description, settings_billing_ends_on, settings_billing_renews_on, settings_credits_balance, settings_credits_no_records, settings_credits_purchase, settings_nav_guest_posts, settings_nav_overview, settings_nav_profile, settings_nav_tickets, settings_overview_apikeys_description, settings_overview_guest_posts_changes, settings_overview_guest_posts_none, settings_overview_guest_posts_review, settings_overview_plan, settings_overview_plan_description, settings_overview_plan_free, settings_overview_plan_free_description, settings_overview_recent_credits, settings_overview_recent_payments, settings_overview_tickets_none, settings_overview_tickets_replied, settings_overview_upgrade, settings_overview_view_all, settings_payments_no_payments, settings_profile_description, settings_welcome, useSession } from "./router-FRpG8iox.mjs";
import { Card, CardContent, CardHeader, CardTitle } from "./card-BkWHqUeW.mjs";
import { useGuestPostInfo } from "./use-guest-posts-BXr5R4sL.mjs";
import { useUserFeatures } from "./use-user-features-DO1fBu-4.mjs";
import { Skeleton } from "./skeleton-DeIuuBWc.mjs";
// node_modules/.nitro/vite/services/ssr/assets/settings-BanGgS0I.js
var import_jsx_runtime = require_jsx_runtime();
var RECENT_SIZE = 5;
function formatAmount(amount, currency) {
	return new Intl.NumberFormat(void 0, {
		style: "currency",
		currency: (currency || "usd").toUpperCase()
	}).format(amount / 100);
}
function formatDate(value) {
	return value ? new Date(value).toLocaleDateString() : "";
}
function StatCard({ href, title, icon, value, hint, action }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		className: "hover:bg-muted/40 relative transition-colors",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
			className: "flex flex-row items-center justify-between pb-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
				className: "text-muted-foreground text-sm font-medium",
				children: title
			}), icon]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
			className: "space-y-1",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$2, {
				href,
				className: "block after:absolute after:inset-0",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "truncate text-2xl font-semibold tabular-nums",
					children: value
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground truncate text-xs",
					children: hint
				}), action && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative z-10 shrink-0",
					children: action
				})]
			})]
		})]
	});
}
function RecentList({ title, href, loading, empty, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
		className: "flex flex-row items-center justify-between",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
			className: "text-base",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link$2, {
			href,
			className: "text-muted-foreground hover:text-foreground flex items-center gap-0.5 text-sm",
			children: [settings_overview_view_all(), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-4" })]
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "space-y-3",
		children: Array.from({ length: 3 }, (_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-9 w-full" }, i))
	}) : children.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-muted-foreground py-8 text-center text-sm",
		children: empty
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "divide-border divide-y",
		children
	}) })] });
}
function RecentRow({ title, date, value, muted }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
		className: "flex items-center justify-between gap-4 py-2.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "truncate text-sm",
				children: title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground text-xs",
				children: date
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: cn("shrink-0 text-sm font-medium tabular-nums", muted && "text-muted-foreground"),
			children: value
		})]
	});
}
function DashboardPage() {
	const { data: session } = useSession();
	const features = useUserFeatures();
	const guestPostInfo = useGuestPostInfo();
	const on = {
		credits: features.loaded && features.credits,
		billing: features.loaded && features.billing,
		payments: features.loaded && features.payments,
		apikeys: features.loaded && features.apikeys,
		tickets: features.loaded && features.tickets,
		guestPosts: !!guestPostInfo.data?.enabled
	};
	const count = (key, url, enabled) => ({
		queryKey: key,
		queryFn: () => apiGet(url),
		enabled
	});
	const ticketsQuery = useQuery(count(["user-tickets", "count"], "/api/tickets?page=1&pageSize=1", on.tickets));
	const repliedQuery = useQuery(count([
		"user-tickets",
		"count",
		"replied"
	], "/api/tickets?page=1&pageSize=1&status=replied", on.tickets));
	const guestPostsQuery = useQuery(count(["guest-posts", "count"], "/api/guest-posts?page=1&pageSize=1", on.guestPosts));
	const changesQuery = useQuery(count([
		"guest-posts",
		"count",
		"changes_requested"
	], "/api/guest-posts?page=1&pageSize=1&status=changes_requested", on.guestPosts));
	const reviewQuery = useQuery(count([
		"guest-posts",
		"count",
		"submitted"
	], "/api/guest-posts?page=1&pageSize=1&status=submitted", on.guestPosts));
	const creditsQuery = useQuery({
		queryKey: ["user-credits", "balance"],
		queryFn: () => apiGet("/api/credits"),
		enabled: on.credits
	});
	const apiKeysQuery = useQuery({
		queryKey: ["apikeys", "count"],
		queryFn: () => apiGet("/api/apikeys?page=1&pageSize=1"),
		enabled: on.apikeys
	});
	const subscriptionQuery = useQuery({
		queryKey: ["user-subscription-current"],
		queryFn: () => apiGet("/api/user/subscriptions/current"),
		enabled: on.billing
	});
	const ordersQuery = useQuery({
		queryKey: ["user-payments", "recent"],
		queryFn: () => apiGet(`/api/user/orders?page=1&pageSize=${RECENT_SIZE}`),
		enabled: on.payments
	});
	const creditRowsQuery = useQuery({
		enabled: on.credits,
		queryKey: ["user-credits", "recent"],
		queryFn: () => apiGet(`/api/user/credits?page=1&pageSize=${RECENT_SIZE}`)
	});
	const loading = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-8 w-20" });
	const subscription = subscriptionQuery.data?.status ? subscriptionQuery.data : null;
	const planValue = subscriptionQuery.isPending ? loading : subscription?.planName || subscription?.productName || settings_overview_plan_free();
	const planHint = subscription?.canceledEndAt ? settings_billing_ends_on({ date: formatDate(subscription.canceledEndAt) }) : subscription?.currentPeriodEnd ? settings_billing_renews_on({ date: formatDate(subscription.currentPeriodEnd) }) : subscription ? settings_overview_plan_description() : settings_overview_plan_free_description();
	const name = session?.user?.name || session?.user?.email || "";
	const statCards = [
		on.billing,
		on.credits,
		on.apikeys,
		on.tickets,
		on.guestPosts
	].filter(Boolean).length;
	const replied = repliedQuery.data?.total ?? 0;
	const changes = changesQuery.data?.total ?? 0;
	const inReview = reviewQuery.data?.total ?? 0;
	const empty = features.loaded && !guestPostInfo.isPending && statCards === 0 && !on.payments && !on.credits;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6 p-4 md:p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-2xl font-semibold tracking-tight",
				children: settings_nav_overview()
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground mt-1 text-sm",
				children: name ? settings_welcome({ name }) : "\xA0"
			})] }),
			statCards > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
				children: [
					on.billing && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						href: "/settings/billing",
						title: settings_overview_plan(),
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "text-muted-foreground size-4" }),
						value: planValue,
						hint: planHint,
						action: !subscriptionQuery.isPending && !subscription && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$2, {
							href: "/pricing",
							className: buttonVariants({
								variant: "outline",
								size: "xs"
							}),
							children: settings_overview_upgrade()
						})
					}),
					on.credits && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						href: "/settings/credits",
						title: settings_credits_balance(),
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Coins, { className: "text-muted-foreground size-4" }),
						value: creditsQuery.isPending ? loading : creditsQuery.data?.balance ?? "—",
						hint: settings_billing_credits_description(),
						action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$2, {
							href: "/pricing",
							className: buttonVariants({
								variant: "outline",
								size: "xs"
							}),
							children: settings_credits_purchase()
						})
					}),
					on.apikeys && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						href: "/settings/apikeys",
						title: settings_apikeys_title(),
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Key, { className: "text-muted-foreground size-4" }),
						value: apiKeysQuery.isPending ? loading : apiKeysQuery.data?.total ?? "—",
						hint: settings_overview_apikeys_description()
					}),
					on.tickets && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						href: "/settings/tickets",
						title: settings_nav_tickets(),
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LifeBuoy, { className: "text-muted-foreground size-4" }),
						value: ticketsQuery.isPending ? loading : ticketsQuery.data?.total ?? "—",
						hint: replied > 0 ? settings_overview_tickets_replied({ count: replied }) : settings_overview_tickets_none()
					}),
					on.guestPosts && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						href: "/settings/guest-posts",
						title: settings_nav_guest_posts(),
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PenLine, { className: "text-muted-foreground size-4" }),
						value: guestPostsQuery.isPending ? loading : guestPostsQuery.data?.total ?? "—",
						hint: changes > 0 ? settings_overview_guest_posts_changes({ count: changes }) : inReview > 0 ? settings_overview_guest_posts_review({ count: inReview }) : settings_overview_guest_posts_none()
					})
				]
			}),
			empty && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
					href: "/settings/profile",
					title: settings_nav_profile(),
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "text-muted-foreground size-4" }),
					value: name || "—",
					hint: settings_profile_description()
				})
			}),
			(on.payments || on.credits) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: cn("grid gap-4", on.payments && on.credits && "lg:grid-cols-2"),
				children: [on.payments && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RecentList, {
					title: settings_overview_recent_payments(),
					href: "/settings/payments",
					loading: ordersQuery.isPending,
					empty: settings_payments_no_payments(),
					children: (ordersQuery.data?.items ?? []).map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RecentRow, {
						title: o.productName || o.planName || o.orderNo,
						date: formatDate(o.paidAt || o.createdAt),
						value: formatAmount(o.amount, o.currency)
					}, o.id))
				}), on.credits && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RecentList, {
					title: settings_overview_recent_credits(),
					href: "/settings/credits",
					loading: creditRowsQuery.isPending,
					empty: settings_credits_no_records(),
					children: (creditRowsQuery.data?.items ?? []).map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RecentRow, {
						title: r.description || r.transactionType,
						date: formatDate(r.createdAt),
						value: r.credits > 0 ? `+${r.credits}` : String(r.credits),
						muted: r.transactionType === "consume"
					}, r.id))
				})]
			})
		]
	});
}
export { DashboardPage as component };
