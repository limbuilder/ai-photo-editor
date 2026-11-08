import { __toESM } from "../_runtime.mjs";
import { require_jsx_runtime, require_react } from "../_libs/@base-ui/react+[...].mjs";
import { Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { useMutation, useQuery, useQueryClient } from "../_libs/tanstack__react-query.mjs";
import { keepPreviousData } from "../_libs/tanstack__query-core.mjs";
import { Coins, Ellipsis, Eye, KeyRound, Shield } from "../_libs/lucide-react.mjs";
import { toast } from "../_libs/sonner.mjs";
import { Button$1, Route$84, admin_analytics_any, admin_roles_cancel, admin_roles_no_roles, admin_user_detail_view, admin_users_actions_col, admin_users_credits_action_deduct, admin_users_credits_action_grant, admin_users_credits_amount_label, admin_users_credits_col, admin_users_credits_deducted, admin_users_credits_desc_label, admin_users_credits_desc_placeholder, admin_users_credits_granted, admin_users_credits_invalid_amount, admin_users_credits_submit, admin_users_credits_submitting, admin_users_description, admin_users_id_col, admin_users_ip_col, admin_users_joined_col, admin_users_manage_credits_for, admin_users_manage_credits_title, admin_users_manage_roles_description, admin_users_manage_roles_title, admin_users_new_password_label, admin_users_new_password_placeholder, admin_users_no_users, admin_users_password_submit, admin_users_password_too_short, admin_users_password_updated, admin_users_role_assigned, admin_users_role_removed, admin_users_roles_col, admin_users_search_placeholder, admin_users_set_password_description, admin_users_set_password_title, admin_users_source_col, admin_users_source_none, admin_users_title, admin_users_user_col, apiDelete, apiGet, apiGetAll, apiPost, cn, pageQuery } from "./router-FRpG8iox.mjs";
import { Input$1 } from "./input-CacA4PHh.mjs";
import { Card, CardContent } from "./card-BkWHqUeW.mjs";
import { Dialog$1, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "./dialog-oXWpGNwj.mjs";
import { Badge } from "./badge-DsAADeEG.mjs";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./dropdown-menu-CvPzUrW_.mjs";
import { Select$1, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./select-UynCZa1h.mjs";
import { formatDateTime } from "./time-LUwPQmfY.mjs";
import { Checkbox$1 } from "./checkbox-CeKI2-AW.mjs";
import { CopyButton } from "./-copy-button-10MKVKTU.mjs";
import { DataTable } from "./data-table-DKAF6YZO.mjs";
import { UserCell } from "./user-cell-CHkKMixM.mjs";
// node_modules/.nitro/vite/services/ssr/assets/users-D1P_CTGD.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var ANY = "__any__";
var NONE = "__none__";
var PAGE_SIZE = 20;
function UsersPage() {
	const queryClient = useQueryClient();
	const { search: initialSearch = "", utm_source: initialSource } = Route$84.useSearch();
	const [page, setPage] = (0, import_react.useState)(1);
	const [search, setSearch] = (0, import_react.useState)(initialSearch);
	const [debouncedSearch, setDebouncedSearch] = (0, import_react.useState)(initialSearch);
	const [source, setSource] = (0, import_react.useState)(initialSource);
	const [managingUser, setManagingUser] = (0, import_react.useState)(null);
	const [passwordUser, setPasswordUser] = (0, import_react.useState)(null);
	const [newPassword, setNewPassword] = (0, import_react.useState)("");
	const [creditsUser, setCreditsUser] = (0, import_react.useState)(null);
	const [creditsAction, setCreditsAction] = (0, import_react.useState)("grant");
	const [creditsAmount, setCreditsAmount] = (0, import_react.useState)("");
	const [creditsDesc, setCreditsDesc] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		const timer = setTimeout(() => setDebouncedSearch(search), 300);
		return () => clearTimeout(timer);
	}, [search]);
	(0, import_react.useEffect)(() => {
		setPage(1);
	}, [debouncedSearch, source]);
	const listQuery = useQuery({
		queryKey: [
			"admin-users",
			page,
			debouncedSearch,
			source
		],
		queryFn: () => {
			const base = pageQuery("/api/admin/users", {
				page,
				pageSize: PAGE_SIZE,
				search: debouncedSearch
			});
			return apiGet(source === void 0 ? base : `${base}&utm_source=${encodeURIComponent(source)}`);
		},
		placeholderData: keepPreviousData
	});
	const sourcesQuery = useQuery({
		queryKey: ["admin-users-sources"],
		queryFn: () => apiGet("/api/admin/users/sources"),
		staleTime: 3e5
	});
	const sourceTitle = admin_users_source_col();
	const untagged = admin_users_source_none();
	const sourceOptions = sourcesQuery.data ?? [];
	const sourceItems = [
		{
			value: ANY,
			label: `${sourceTitle}: ${admin_analytics_any()}`
		},
		...source !== void 0 && !sourceOptions.some((o) => o.value === source) ? [{
			value: source || NONE,
			label: `${sourceTitle}: ${source || untagged}`
		}] : [],
		...sourceOptions.map((o) => ({
			value: o.value || NONE,
			label: `${sourceTitle}: ${o.value || untagged} (${o.count})`
		}))
	];
	const allRolesQuery = useQuery({
		queryKey: ["admin-roles-all"],
		queryFn: () => apiGetAll("/api/admin/roles"),
		enabled: !!managingUser
	});
	const userRolesQuery = useQuery({
		queryKey: ["user-roles", managingUser?.id],
		queryFn: () => apiGet(`/api/admin/roles?userId=${managingUser.id}`),
		enabled: !!managingUser
	});
	const allRoles = allRolesQuery.data ?? [];
	const userRoleIds = new Set((userRolesQuery.data ?? []).map((r) => r.roleId));
	function openRoleDialog(u) {
		setManagingUser(u);
	}
	function openCreditsDialog(u) {
		setCreditsUser(u);
		setCreditsAction("grant");
		setCreditsAmount("");
		setCreditsDesc("");
	}
	const creditsMutation = useMutation({
		mutationFn: (vars) => apiPost("/api/admin/users/credits", vars),
		onSuccess: (_data, vars) => {
			toast.success(vars.action === "grant" ? admin_users_credits_granted() : admin_users_credits_deducted());
			setCreditsUser(null);
			queryClient.invalidateQueries({ queryKey: ["admin-users"] });
			queryClient.invalidateQueries({ queryKey: ["admin-user", vars.userId] });
		},
		onError: (e) => toast.error(e.message)
	});
	function submitCredits() {
		if (!creditsUser) return;
		const amount = Number(creditsAmount);
		if (!Number.isFinite(amount) || amount <= 0) {
			toast.error(admin_users_credits_invalid_amount());
			return;
		}
		creditsMutation.mutate({
			userId: creditsUser.id,
			action: creditsAction,
			credits: amount,
			description: creditsDesc || void 0
		});
	}
	const passwordMutation = useMutation({
		mutationFn: (vars) => apiPost("/api/admin/users/password", vars),
		onSuccess: () => {
			toast.success(admin_users_password_updated());
			setPasswordUser(null);
		},
		onError: (e) => toast.error(e.message)
	});
	function openPasswordDialog(u) {
		setPasswordUser(u);
		setNewPassword("");
	}
	function submitPassword() {
		if (!passwordUser) return;
		if (newPassword.length < 8) {
			toast.error(admin_users_password_too_short());
			return;
		}
		passwordMutation.mutate({
			userId: passwordUser.id,
			password: newPassword
		});
	}
	const assignRoleMutation = useMutation({
		mutationFn: (roleId) => apiPost("/api/admin/roles/assign", {
			userId: managingUser.id,
			roleId
		}),
		onSuccess: () => {
			toast.success(admin_users_role_assigned());
			queryClient.invalidateQueries({ queryKey: ["user-roles", managingUser?.id] });
			queryClient.invalidateQueries({ queryKey: ["admin-users"] });
		},
		onError: (e) => toast.error(e.message)
	});
	const removeRoleMutation = useMutation({
		mutationFn: (roleId) => apiDelete(`/api/admin/roles/assign?userId=${managingUser.id}&roleId=${roleId}`),
		onSuccess: () => {
			toast.success(admin_users_role_removed());
			queryClient.invalidateQueries({ queryKey: ["user-roles", managingUser?.id] });
			queryClient.invalidateQueries({ queryKey: ["admin-users"] });
		},
		onError: (e) => toast.error(e.message)
	});
	const toggling = assignRoleMutation.isPending || removeRoleMutation.isPending;
	function toggleRole(roleId) {
		if (!managingUser || toggling) return;
		if (userRoleIds.has(roleId)) removeRoleMutation.mutate(roleId);
		else assignRoleMutation.mutate(roleId);
	}
	const columns = [
		{
			header: admin_users_id_col(),
			cell: (u) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "font-mono text-xs",
					title: u.id,
					children: [u.id.slice(0, 8), "…"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CopyButton, { value: u.id })]
			})
		},
		{
			header: admin_users_user_col(),
			cell: (u) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserCell, {
				userId: u.id,
				name: u.name,
				email: u.email,
				image: u.image,
				newTab: false
			})
		},
		{
			header: admin_users_roles_col(),
			cell: (u) => u.roles.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-1",
				children: u.roles.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					variant: "secondary",
					title: r.name,
					children: r.title
				}, r.name))
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-muted-foreground",
				children: "—"
			})
		},
		{
			header: admin_users_source_col(),
			cell: (u) => u.utmSource ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "bg-muted inline-flex rounded-md px-2 py-0.5 text-xs font-medium",
				children: u.utmSource
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-muted-foreground",
				children: "—"
			})
		},
		{
			header: admin_users_ip_col(),
			cell: (u) => u.ip ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-muted-foreground font-mono text-xs",
				children: u.ip
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-muted-foreground",
				children: "—"
			})
		},
		{
			header: admin_users_credits_col(),
			className: "w-[120px]",
			cell: (u) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-medium tabular-nums",
				children: u.credits.toLocaleString()
			})
		},
		{
			header: admin_users_joined_col(),
			cell: (u) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-muted-foreground",
				children: formatDateTime(u.createdAt)
			})
		},
		{
			header: admin_users_actions_col(),
			className: "w-[80px]",
			cell: (u) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, { render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
				variant: "ghost",
				size: "icon",
				className: "size-7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ellipsis, { className: "size-4" })
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
				align: "end",
				className: "w-auto min-w-40 whitespace-nowrap",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
						render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/admin/users/$id",
							params: { id: u.id }
						}),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "size-4" }), admin_user_detail_view()]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
						onClick: () => openCreditsDialog(u),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Coins, { className: "size-4" }), admin_users_manage_credits_title()]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
						onClick: () => openRoleDialog(u),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "size-4" }), admin_users_manage_roles_title()]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
						onClick: () => openPasswordDialog(u),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeyRound, { className: "size-4" }), admin_users_set_password_title()]
					})
				]
			})] })
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6 p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-2xl font-bold",
				children: admin_users_title()
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground",
				children: admin_users_description()
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
				columns,
				data: listQuery.data?.items ?? [],
				total: listQuery.data?.total ?? 0,
				page,
				pageSize: PAGE_SIZE,
				onPageChange: setPage,
				rowKey: (u) => u.id,
				emptyText: admin_users_no_users(),
				search,
				onSearchChange: setSearch,
				searchPlaceholder: admin_users_search_placeholder(),
				toolbar: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select$1, {
					items: sourceItems,
					value: source === void 0 ? ANY : source || NONE,
					onValueChange: (v) => setSource(!v || v === ANY ? void 0 : v === NONE ? "" : String(v)),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
						className: cn("h-9 max-w-60", source !== void 0 && "border-primary"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: sourceItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
						value: item.value,
						children: item.label
					}, item.value)) })]
				}),
				onRefresh: () => listQuery.refetch(),
				loading: listQuery.isFetching || listQuery.isPending
			}) }) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog$1, {
				open: !!managingUser,
				onOpenChange: (v) => !v && setManagingUser(null),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: admin_users_manage_roles_title() }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: admin_users_manage_roles_description() })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-h-64 space-y-3 overflow-y-auto py-4",
						children: [allRoles.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "flex cursor-pointer items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox$1, {
								checked: userRoleIds.has(r.id),
								onCheckedChange: () => toggleRole(r.id),
								disabled: toggling
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sm font-medium",
								children: r.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-muted-foreground font-mono text-xs",
								children: r.name
							})] })]
						}, r.id)), allRoles.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground py-4 text-center text-sm",
							children: admin_roles_no_roles()
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogFooter, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
						variant: "outline",
						onClick: () => setManagingUser(null),
						children: admin_roles_cancel()
					}) })
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog$1, {
				open: !!passwordUser,
				onOpenChange: (v) => !v && setPasswordUser(null),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: admin_users_set_password_title() }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: passwordUser ? admin_users_set_password_description({ name: passwordUser.name || passwordUser.email }) : "" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "grid gap-4",
					onSubmit: (e) => {
						e.preventDefault();
						submitPassword();
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-1.5 py-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "text-sm font-medium",
							children: admin_users_new_password_label()
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input$1, {
							type: "text",
							autoComplete: "off",
							value: newPassword,
							onChange: (e) => setNewPassword(e.target.value),
							placeholder: admin_users_new_password_placeholder()
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
						type: "button",
						variant: "outline",
						onClick: () => setPasswordUser(null),
						children: admin_roles_cancel()
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
						type: "submit",
						disabled: passwordMutation.isPending,
						children: passwordMutation.isPending ? admin_users_credits_submitting() : admin_users_password_submit()
					})] })]
				})] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog$1, {
				open: !!creditsUser,
				onOpenChange: (v) => !v && setCreditsUser(null),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: admin_users_manage_credits_title() }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: creditsUser ? admin_users_manage_credits_for({
					name: creditsUser.name || creditsUser.email,
					balance: creditsUser.credits.toLocaleString()
				}) : "" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "grid gap-4",
					onSubmit: (e) => {
						e.preventDefault();
						submitCredits();
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-4 py-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-2 gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setCreditsAction("grant"),
									className: `rounded-md border px-3 py-2 text-sm font-medium transition-colors ${creditsAction === "grant" ? "border-foreground bg-foreground text-background" : "border-border hover:bg-muted"}`,
									children: admin_users_credits_action_grant()
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setCreditsAction("deduct"),
									className: `rounded-md border px-3 py-2 text-sm font-medium transition-colors ${creditsAction === "deduct" ? "border-foreground bg-foreground text-background" : "border-border hover:bg-muted"}`,
									children: admin_users_credits_action_deduct()
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-sm font-medium",
									children: admin_users_credits_amount_label()
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input$1, {
									type: "number",
									min: "1",
									value: creditsAmount,
									onChange: (e) => setCreditsAmount(e.target.value),
									placeholder: "0"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-sm font-medium",
									children: admin_users_credits_desc_label()
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input$1, {
									value: creditsDesc,
									onChange: (e) => setCreditsDesc(e.target.value),
									placeholder: admin_users_credits_desc_placeholder()
								})]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
						type: "button",
						variant: "outline",
						onClick: () => setCreditsUser(null),
						children: admin_roles_cancel()
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
						type: "submit",
						disabled: creditsMutation.isPending,
						children: creditsMutation.isPending ? admin_users_credits_submitting() : admin_users_credits_submit()
					})] })]
				})] })
			})
		]
	});
}
export { UsersPage as component };
