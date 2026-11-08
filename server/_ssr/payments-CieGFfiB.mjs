import { __toESM } from "../_runtime.mjs";
import { require_jsx_runtime, require_react } from "../_libs/@base-ui/react+[...].mjs";
import { useForm } from "../_libs/@tanstack/react-form+[...].mjs";
import { useMutation, useQuery, useQueryClient } from "../_libs/tanstack__react-query.mjs";
import { keepPreviousData } from "../_libs/tanstack__query-core.mjs";
import { Pencil, Undo2 } from "../_libs/lucide-react.mjs";
import { toast } from "../_libs/sonner.mjs";
import { Button$1, Route$91, _index_exports, admin_payments_amount, admin_payments_cancel, admin_payments_created_at, admin_payments_description, admin_payments_edit_description, admin_payments_edit_title, admin_payments_no_payments, admin_payments_order_no, admin_payments_provider, admin_payments_refund, admin_payments_refund_amount, admin_payments_refund_cancel_failed, admin_payments_refund_cancel_subscription, admin_payments_refund_confirm, admin_payments_refund_credits_hint, admin_payments_refund_credits_invalid, admin_payments_refund_credits_label, admin_payments_refund_credits_short, admin_payments_refund_description, admin_payments_refund_pending, admin_payments_refund_reason_label, admin_payments_refund_success, admin_payments_refund_title, admin_payments_refunded_amount, admin_payments_refunding, admin_payments_save, admin_payments_saving, admin_payments_search_placeholder, admin_payments_status, admin_payments_status_label, admin_payments_tab_all, admin_payments_title, admin_payments_type, admin_payments_update_success, admin_payments_user, apiGet, apiPatch, apiPost, cn, tDynamic } from "./router-FRpG8iox.mjs";
import { Label } from "./label-Cmbt5KTb.mjs";
import { Input$1 } from "./input-CacA4PHh.mjs";
import { Card, CardContent } from "./card-BkWHqUeW.mjs";
import { Dialog$1, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "./dialog-oXWpGNwj.mjs";
import { Badge } from "./badge-DsAADeEG.mjs";
import { Select$1, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./select-UynCZa1h.mjs";
import { formatDateTime } from "./time-LUwPQmfY.mjs";
import { Checkbox$1 } from "./checkbox-CeKI2-AW.mjs";
import { DataTable } from "./data-table-DKAF6YZO.mjs";
import { UserCell } from "./user-cell-CHkKMixM.mjs";
// node_modules/.nitro/vite/services/ssr/assets/payments-CieGFfiB.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var FILTER_STATUSES = [...[
	"pending",
	"created",
	"paid",
	"failed",
	"refunded",
	"deleted"
], "refunding"];
var PAGE_SIZE = 20;
var TABS = [
	"all",
	"subscription",
	"one_time"
];
function PaymentsPage() {
	const queryClient = useQueryClient();
	const initialSearch = Route$91.useSearch().search ?? "";
	const [page, setPage] = (0, import_react.useState)(1);
	const [tab, setTab] = (0, import_react.useState)("all");
	const [search, setSearch] = (0, import_react.useState)(initialSearch);
	const [debouncedSearch, setDebouncedSearch] = (0, import_react.useState)(initialSearch);
	const [statusFilter, setStatusFilter] = (0, import_react.useState)("all");
	const [editingOrder, setEditingOrder] = (0, import_react.useState)(null);
	const [refundingOrder, setRefundingOrder] = (0, import_react.useState)(null);
	const [refundCredits, setRefundCredits] = (0, import_react.useState)("");
	const [refundReason, setRefundReason] = (0, import_react.useState)("");
	const [refundCancelSub, setRefundCancelSub] = (0, import_react.useState)(true);
	const editForm = useForm({
		defaultValues: {
			status: "",
			productId: "",
			productName: "",
			description: ""
		},
		onSubmit: async ({ value }) => {
			if (!editingOrder) return;
			await editMutation.mutateAsync({
				orderNo: editingOrder.orderNo,
				status: value.status,
				productId: value.productId || null,
				productName: value.productName || null,
				description: value.description || null
			});
		}
	});
	(0, import_react.useEffect)(() => {
		const timer = setTimeout(() => setDebouncedSearch(search), 300);
		return () => clearTimeout(timer);
	}, [search]);
	(0, import_react.useEffect)(() => {
		setPage(1);
	}, [
		tab,
		statusFilter,
		debouncedSearch
	]);
	const query = useQuery({
		queryKey: [
			"admin-payments",
			page,
			tab,
			statusFilter,
			debouncedSearch
		],
		queryFn: () => {
			const params = new URLSearchParams({
				page: String(page),
				pageSize: String(PAGE_SIZE)
			});
			if (tab === "subscription") params.set("paymentType", "subscription");
			if (tab === "one_time") params.set("paymentType", "one_time");
			if (statusFilter !== "all") params.set("status", statusFilter);
			if (debouncedSearch) params.set("search", debouncedSearch);
			return apiGet(`/api/admin/orders?${params}`);
		},
		placeholderData: keepPreviousData
	});
	const editMutation = useMutation({
		mutationFn: (body) => apiPatch("/api/admin/orders", body),
		onSuccess: () => {
			toast.success(admin_payments_update_success());
			setEditingOrder(null);
			queryClient.invalidateQueries({ queryKey: ["admin-payments"] });
		},
		onError: (e) => toast.error(e.message)
	});
	const refundMutation = useMutation({
		mutationFn: (body) => apiPost("/api/admin/orders/refund", body),
		onSuccess: (result) => {
			toast.success(result.refundStatus === "pending" ? admin_payments_refund_pending({ credits: result.creditsDeducted }) : admin_payments_refund_success({ credits: result.creditsDeducted }));
			if (result.creditsDeducted < result.creditsRequested) toast.warning(admin_payments_refund_credits_short({
				deducted: result.creditsDeducted,
				requested: result.creditsRequested
			}));
			if (result.subscriptionError) toast.error(admin_payments_refund_cancel_failed({ error: result.subscriptionError }));
			setRefundingOrder(null);
			queryClient.invalidateQueries({ queryKey: ["admin-payments"] });
		},
		onError: (e) => {
			toast.error(e.message);
			queryClient.invalidateQueries({ queryKey: ["admin-payments"] });
		}
	});
	function openRefund(order) {
		setRefundCredits(String(order.creditsAmount ?? 0));
		setRefundReason("");
		setRefundCancelSub(true);
		setRefundingOrder(order);
	}
	function submitRefund() {
		if (!refundingOrder) return;
		const credits = Number(refundCredits);
		if (!Number.isInteger(credits) || credits < 0) {
			toast.error(admin_payments_refund_credits_invalid());
			return;
		}
		refundMutation.mutate({
			orderNo: refundingOrder.orderNo,
			deductCredits: credits,
			reason: refundReason.trim() || void 0,
			cancelSubscription: !!refundingOrder.subscriptionNo && refundCancelSub
		});
	}
	const orders = query.data?.items ?? [];
	const total = query.data?.total ?? 0;
	function formatAmount(amount, currency) {
		const value = amount / 100;
		return new Intl.NumberFormat("en-US", {
			style: "currency",
			currency: currency || "USD"
		}).format(value);
	}
	const statusVariant = (s) => {
		if (s === "paid") return "default";
		if (s === "failed") return "destructive";
		if (s === "refunded" || s === "refunding") return "outline";
		return "secondary";
	};
	function openEdit(order) {
		editForm.reset({
			status: order.status,
			productId: order.productId || "",
			productName: order.productName || "",
			description: order.description || ""
		});
		setEditingOrder(order);
	}
	const columns = [
		{
			header: admin_payments_order_no(),
			cell: (o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-mono text-xs",
				children: o.orderNo
			})
		},
		{
			header: admin_payments_user(),
			cell: (o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserCell, {
				userId: o.userId,
				name: o.userName,
				email: o.userAccountEmail || o.userEmail,
				image: o.userImage
			})
		},
		{
			header: admin_payments_amount(),
			cell: (o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-medium",
					children: formatAmount(o.amount, o.currency)
				}), o.refundAmount != null && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-muted-foreground text-xs",
					children: admin_payments_refunded_amount({ amount: formatAmount(o.refundAmount, o.currency) })
				})]
			})
		},
		{
			header: admin_payments_status(),
			cell: (o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
				variant: statusVariant(o.status),
				children: tDynamic(`admin.payments.status_${o.status}`)
			})
		},
		{
			header: admin_payments_type(),
			cell: (o) => o.paymentType || "—"
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
		},
		{
			header: "",
			className: "w-[88px]",
			cell: (o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-1",
				children: [(o.status === "paid" || o.status === "refunding") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
					variant: "ghost",
					size: "icon",
					className: "size-7",
					title: admin_payments_refund(),
					"aria-label": admin_payments_refund(),
					onClick: () => openRefund(o),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Undo2, { className: "size-4" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
					variant: "ghost",
					size: "icon",
					className: "size-7",
					onClick: () => openEdit(o),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "size-4" })
				})]
			})
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6 p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-2xl font-bold",
				children: admin_payments_title()
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground",
				children: admin_payments_description()
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-border flex gap-1 overflow-x-auto overflow-y-hidden border-b",
				children: TABS.map((tb) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setTab(tb),
					className: cn("-mb-px border-b-2 px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors", tab === tb ? "border-primary text-foreground" : "text-muted-foreground hover:text-foreground border-transparent"),
					children: tDynamic(`admin.payments.tab_${tb}`)
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
				emptyText: admin_payments_no_payments(),
				search,
				onSearchChange: setSearch,
				searchPlaceholder: admin_payments_search_placeholder(),
				toolbar: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select$1, {
					value: statusFilter,
					onValueChange: (value) => setStatusFilter(value || "all"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
						className: "h-8 w-[120px]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
						value: "all",
						children: admin_payments_tab_all()
					}), FILTER_STATUSES.map((status) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
						value: status,
						children: tDynamic(`admin.payments.status_${status}`)
					}, status))] })]
				}),
				onRefresh: () => query.refetch(),
				loading: query.isFetching || query.isPending
			}) }) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog$1, {
				open: !!editingOrder,
				onOpenChange: (open) => {
					if (!open && !editMutation.isPending) setEditingOrder(null);
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: admin_payments_edit_title() }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: admin_payments_edit_description() })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "grid gap-4",
					onSubmit: (event) => {
						event.preventDefault();
						editForm.handleSubmit();
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-4 py-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: admin_payments_order_no() }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input$1, {
									value: editingOrder?.orderNo || "",
									disabled: true
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(editForm.Field, {
								name: "status",
								children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: admin_payments_status_label() }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select$1, {
										value: field.state.value,
										onValueChange: (value) => field.handleChange(value || ""),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: [editingOrder?.status || "", ...["created", "pending"].includes(editingOrder?.status || "") ? ["failed"] : []].filter(Boolean).map((status) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
											value: status,
											children: tDynamic(`admin.payments.status_${status}`)
										}, status)) })]
									})]
								})
							}),
							[
								"productId",
								"productName",
								"description"
							].map((name) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(editForm.Field, {
								name,
								children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: _index_exports[`admin.payments.${name === "productId" ? "product_id_label" : name === "productName" ? "product_name_label" : "product_description_label"}`]() }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input$1, {
										value: field.state.value,
										onChange: (event) => field.handleChange(event.target.value)
									})]
								})
							}, name))
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
						type: "button",
						variant: "outline",
						disabled: editMutation.isPending,
						onClick: () => setEditingOrder(null),
						children: admin_payments_cancel()
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
						type: "submit",
						disabled: editMutation.isPending,
						children: editMutation.isPending ? admin_payments_saving() : admin_payments_save()
					})] })]
				})] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog$1, {
				open: !!refundingOrder,
				onOpenChange: (open) => {
					if (!open && !refundMutation.isPending) setRefundingOrder(null);
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: admin_payments_refund_title() }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: admin_payments_refund_description({ provider: refundingOrder?.paymentProvider || "" }) })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "grid gap-4",
					onSubmit: (event) => {
						event.preventDefault();
						submitRefund();
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-4 py-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-2 gap-4 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-muted-foreground",
										children: admin_payments_order_no()
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-mono text-xs break-all",
										children: refundingOrder?.orderNo
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-muted-foreground",
										children: admin_payments_refund_amount()
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-medium",
										children: refundingOrder && formatAmount(refundingOrder.paymentAmount ?? refundingOrder.amount, refundingOrder.currency)
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1.5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										htmlFor: "refund-credits",
										children: admin_payments_refund_credits_label()
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input$1, {
										id: "refund-credits",
										type: "number",
										min: 0,
										step: 1,
										value: refundCredits,
										onChange: (event) => setRefundCredits(event.target.value)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-muted-foreground text-xs",
										children: admin_payments_refund_credits_hint({ credits: refundingOrder?.creditsAmount ?? 0 })
									})
								]
							}),
							refundingOrder?.subscriptionNo && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex cursor-pointer items-center gap-3 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox$1, {
									checked: refundCancelSub,
									onCheckedChange: (checked) => setRefundCancelSub(checked === true)
								}), admin_payments_refund_cancel_subscription()]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "refund-reason",
									children: admin_payments_refund_reason_label()
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input$1, {
									id: "refund-reason",
									value: refundReason,
									maxLength: 500,
									onChange: (event) => setRefundReason(event.target.value)
								})]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
						type: "button",
						variant: "outline",
						disabled: refundMutation.isPending,
						onClick: () => setRefundingOrder(null),
						children: admin_payments_cancel()
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
						type: "submit",
						variant: "destructive",
						disabled: refundMutation.isPending,
						children: refundMutation.isPending ? admin_payments_refunding() : admin_payments_refund_confirm()
					})] })]
				})] })
			})
		]
	});
}
export { PaymentsPage as component };
