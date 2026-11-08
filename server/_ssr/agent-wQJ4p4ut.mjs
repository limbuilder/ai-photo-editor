import { __toESM } from "../_runtime.mjs";
import { TabsList as TabsList$1, TabsPanel, TabsRoot, TabsTab, require_jsx_runtime, require_react } from "../_libs/@base-ui/react+[...].mjs";
import { envConfigs } from "./ssr.mjs";
import { cva } from "../_libs/class-variance-authority+clsx.mjs";
import { useMutation, useQuery, useQueryClient } from "../_libs/tanstack__react-query.mjs";
import { keepPreviousData } from "../_libs/tanstack__query-core.mjs";
import { ExternalLink, KeyRound, Pencil, Plus, Trash2 } from "../_libs/lucide-react.mjs";
import { toast } from "../_libs/sonner.mjs";
import { Button$1, Link$2, Route$97, admin_agent_accounts, admin_agent_accounts_hint, admin_agent_active_keys, admin_agent_agent_form_hint, admin_agent_agent_keys, admin_agent_agent_last_used, admin_agent_agent_name, admin_agent_agent_roles, admin_agent_cancel, admin_agent_create_agent, admin_agent_created_warning, admin_agent_days, admin_agent_delete, admin_agent_delete_title, admin_agent_delete_warning, admin_agent_deleted, admin_agent_description, admin_agent_done, admin_agent_edit, admin_agent_edit_agent, admin_agent_full_docs, admin_agent_issue_key, admin_agent_key_name, admin_agent_keys, admin_agent_keys_hint, admin_agent_keys_of, admin_agent_log_agent, admin_agent_log_all_agents, admin_agent_log_completed, admin_agent_log_deleted_agent, admin_agent_log_duration, admin_agent_log_failed, admin_agent_log_operation, admin_agent_log_pending, admin_agent_log_status, admin_agent_log_target, admin_agent_log_time, admin_agent_log_unknown, admin_agent_logs, admin_agent_logs_hint, admin_agent_manage_roles, admin_agent_mcp_claude, admin_agent_mcp_json, admin_agent_mcp_url, admin_agent_never_expires, admin_agent_never_warning, admin_agent_next_connect, admin_agent_no_agents, admin_agent_no_logs, admin_agent_no_roles, admin_agent_no_tokens, admin_agent_open, admin_agent_quickstart, admin_agent_quickstart_hint, admin_agent_revoke, admin_agent_revoke_warning, admin_agent_revoked, admin_agent_save, admin_agent_saved, admin_agent_skill_hint, admin_agent_skill_prompt, admin_agent_status_active, admin_agent_status_expired, admin_agent_status_revoked, admin_agent_tab_accounts, admin_agent_tab_connect, admin_agent_tab_logs, admin_agent_title, admin_agent_token_expires, admin_agent_token_last_used, admin_agent_token_prefix, admin_agent_token_status, apiDelete, apiGet, apiPatch, apiPost, cn } from "./router-FRpG8iox.mjs";
import { Label } from "./label-Cmbt5KTb.mjs";
import { Input$1 } from "./input-CacA4PHh.mjs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card-BkWHqUeW.mjs";
import { Dialog$1, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "./dialog-oXWpGNwj.mjs";
import { Badge } from "./badge-DsAADeEG.mjs";
import { useUserPermissions } from "./use-user-permissions-Cp87hGxQ.mjs";
import { Select$1, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./select-UynCZa1h.mjs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./table-BkuyEj07.mjs";
import { formatDateTime } from "./time-LUwPQmfY.mjs";
import { useConfirm } from "./use-confirm-C8c0MoYU.mjs";
import { Checkbox$1 } from "./checkbox-CeKI2-AW.mjs";
import { CopyButton } from "./-copy-button-10MKVKTU.mjs";
import { DataTable } from "./data-table-DKAF6YZO.mjs";
// node_modules/.nitro/vite/services/ssr/assets/agent-wQJ4p4ut.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Tabs$1({ className, orientation = "horizontal", ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsRoot, {
		"data-slot": "tabs",
		"data-orientation": orientation,
		className: cn("group/tabs flex gap-2 data-horizontal:flex-col", className),
		...props
	});
}
var tabsListVariants = cva("group/tabs-list inline-flex w-fit items-center justify-center rounded-lg p-[3px] text-muted-foreground group-data-horizontal/tabs:h-8 group-data-vertical/tabs:h-fit group-data-vertical/tabs:flex-col data-[variant=line]:rounded-none", {
	variants: { variant: {
		default: "bg-muted",
		line: "gap-1 bg-transparent"
	} },
	defaultVariants: { variant: "default" }
});
function TabsList({ className, variant = "default", ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsList$1, {
		"data-slot": "tabs-list",
		"data-variant": variant,
		className: cn(tabsListVariants({ variant }), className),
		...props
	});
}
function TabsTrigger({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTab, {
		"data-slot": "tabs-trigger",
		className: cn("relative inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-1.5 py-0.5 text-sm font-medium whitespace-nowrap text-foreground/60 transition-all group-data-vertical/tabs:w-full group-data-vertical/tabs:justify-start hover:text-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50 has-data-[icon=inline-end]:pr-1 has-data-[icon=inline-start]:pl-1 aria-disabled:pointer-events-none aria-disabled:opacity-50 dark:text-muted-foreground dark:hover:text-foreground group-data-[variant=default]/tabs-list:data-active:shadow-sm group-data-[variant=line]/tabs-list:data-active:shadow-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", "group-data-[variant=line]/tabs-list:bg-transparent group-data-[variant=line]/tabs-list:data-active:bg-transparent dark:group-data-[variant=line]/tabs-list:data-active:border-transparent dark:group-data-[variant=line]/tabs-list:data-active:bg-transparent", "data-active:bg-background data-active:text-foreground dark:data-active:border-input dark:data-active:bg-input/30 dark:data-active:text-foreground", "after:absolute after:bg-foreground after:opacity-0 after:transition-opacity group-data-horizontal/tabs:after:inset-x-0 group-data-horizontal/tabs:after:bottom-[-5px] group-data-horizontal/tabs:after:h-0.5 group-data-vertical/tabs:after:inset-y-0 group-data-vertical/tabs:after:-right-1 group-data-vertical/tabs:after:w-0.5 group-data-[variant=line]/tabs-list:data-active:after:opacity-100", className),
		...props
	});
}
function TabsContent({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsPanel, {
		"data-slot": "tabs-content",
		className: cn("flex-1 text-sm outline-none", className),
		...props
	});
}
var EXPIRY_DAYS = [
	"7",
	"30",
	"90",
	"365",
	"never"
];
var AGENTS_KEY = ["admin-agent-accounts"];
function expiryLabel(d) {
	return d === "never" ? admin_agent_never_expires() : admin_agent_days({ count: d });
}
function keyState(k) {
	if (k.status !== "active") return "revoked";
	if (k.expiresAt && new Date(k.expiresAt) <= /* @__PURE__ */ new Date()) return "expired";
	return "active";
}
/**
* Agent service accounts: each is an `api`-type user whose permissions are
* its RBAC roles, holding one or more admin API keys.
*/
function AgentAccounts({ onConnect }) {
	const queryClient = useQueryClient();
	const refresh = () => queryClient.invalidateQueries({ queryKey: AGENTS_KEY });
	const { confirm, dialog } = useConfirm();
	const agentsQuery = useQuery({
		queryKey: AGENTS_KEY,
		queryFn: () => apiGet("/api/admin/agent/accounts")
	});
	const rolesQuery = useQuery({
		queryKey: ["admin-agent-roles"],
		queryFn: () => apiGet("/api/admin/roles?pageSize=100")
	});
	const agents = agentsQuery.data ?? [];
	const roles = rolesQuery.data?.items ?? [];
	const [editing, setEditing] = (0, import_react.useState)(null);
	const [name, setName] = (0, import_react.useState)("");
	const [roleIds, setRoleIds] = (0, import_react.useState)([]);
	function openEditor(agent) {
		setEditing(agent);
		setName(agent === "new" ? "" : agent.name);
		setRoleIds(agent === "new" ? [] : agent.roles.map((r) => r.id));
	}
	const saveMutation = useMutation({
		mutationFn: async () => {
			if (editing === "new") return (await apiPost("/api/admin/agent/accounts", {
				name: name.trim(),
				roleIds
			})).id;
			await apiPatch("/api/admin/agent/accounts", {
				id: editing.id,
				name: name.trim(),
				roleIds
			});
			return null;
		},
		onSuccess: (newId) => {
			setEditing(null);
			refresh();
			toast.success(admin_agent_saved());
			if (newId) setKeysFor(newId);
		},
		onError: (e) => toast.error(e.message)
	});
	const [deleting, setDeleting] = (0, import_react.useState)(null);
	const deleteMutation = useMutation({
		mutationFn: (id) => apiDelete(`/api/admin/agent/accounts?id=${encodeURIComponent(id)}`),
		onSuccess: () => {
			setDeleting(null);
			refresh();
			toast.success(admin_agent_deleted());
		},
		onError: (e) => toast.error(e.message)
	});
	const [keysFor, setKeysFor] = (0, import_react.useState)(null);
	const keysAgent = agents.find((a) => a.id === keysFor) ?? null;
	const [keyName, setKeyName] = (0, import_react.useState)("");
	const [expiryDays, setExpiryDays] = (0, import_react.useState)("30");
	const [createdKey, setCreatedKey] = (0, import_react.useState)("");
	const createKeyMutation = useMutation({
		mutationFn: () => apiPost("/api/admin/agent/keys", {
			agentId: keysFor,
			name: keyName.trim() || "default",
			expiresAt: expiryDays === "never" ? null : new Date(Date.now() + Number(expiryDays) * 864e5).toISOString()
		}),
		onSuccess: (data) => {
			setCreatedKey(data.token);
			setKeyName("");
			refresh();
		},
		onError: (e) => toast.error(e.message)
	});
	const revokeMutation = useMutation({
		mutationFn: (id) => apiDelete(`/api/admin/agent/keys?id=${encodeURIComponent(id)}`),
		onSuccess: () => {
			toast.success(admin_agent_revoked());
			refresh();
		},
		onError: (e) => toast.error(e.message)
	});
	function closeKeys() {
		setKeysFor(null);
		setCreatedKey("");
		setExpiryDays("30");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
		dialog,
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
			className: "flex flex-row items-start justify-between gap-4 space-y-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0 flex-1 space-y-1.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
					className: "text-base",
					children: admin_agent_accounts()
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardDescription, { children: [
					admin_agent_accounts_hint(),
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$2, {
						href: "/admin/roles",
						className: "text-primary underline-offset-4 hover:underline",
						children: admin_agent_manage_roles()
					})
				] })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button$1, {
				size: "sm",
				className: "shrink-0",
				onClick: () => openEditor("new"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" }), admin_agent_create_agent()]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "overflow-x-auto",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: admin_agent_agent_name() }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: admin_agent_agent_roles() }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: admin_agent_agent_keys() }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: admin_agent_agent_last_used() }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {})
			] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableBody, { children: [agents.map((agent) => {
				const active = agent.keys.filter((k) => keyState(k) === "active");
				const lastUsed = agent.keys.map((k) => k.lastUsedAt).filter(Boolean).sort().pop();
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
						className: "font-medium",
						children: agent.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-1",
						children: agent.roles.length ? agent.roles.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							variant: "secondary",
							children: r.title || r.name
						}, r.id)) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted-foreground text-sm",
							children: admin_agent_no_roles()
						})
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
						className: "text-muted-foreground text-sm",
						children: admin_agent_active_keys({ count: active.length })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
						className: "text-muted-foreground text-sm",
						children: lastUsed ? formatDateTime(lastUsed) : "—"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-end gap-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button$1, {
								variant: "outline",
								size: "sm",
								onClick: () => setKeysFor(agent.id),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeyRound, { className: "size-3.5" }), admin_agent_keys()]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
								variant: "ghost",
								size: "icon",
								className: "size-8",
								"aria-label": admin_agent_edit(),
								onClick: () => openEditor(agent),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "size-3.5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
								variant: "ghost",
								size: "icon",
								className: "size-8",
								"aria-label": admin_agent_delete(),
								onClick: () => setDeleting(agent),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-3.5" })
							})
						]
					}) })
				] }, agent.id);
			}), agentsQuery.data?.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableRow, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
				colSpan: 5,
				className: "text-muted-foreground h-20 text-center",
				children: admin_agent_no_agents()
			}) })] })] })
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog$1, {
			open: !!editing,
			onOpenChange: (v) => !v && setEditing(null),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
				className: "sm:max-w-lg",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: editing === "new" ? admin_agent_create_agent() : admin_agent_edit_agent() }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: admin_agent_agent_form_hint() })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "space-y-4",
					onSubmit: (e) => {
						e.preventDefault();
						if (name.trim()) saveMutation.mutate();
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "agent-name",
								children: admin_agent_agent_name()
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input$1, {
								id: "agent-name",
								value: name,
								maxLength: 100,
								placeholder: "Claude Code",
								onChange: (e) => setName(e.target.value)
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: admin_agent_agent_roles() }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "max-h-64 space-y-2 overflow-y-auto rounded-md border p-3",
								children: roles.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "flex cursor-pointer items-start gap-2 text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox$1, {
										className: "mt-0.5",
										checked: roleIds.includes(r.id),
										onCheckedChange: (checked) => setRoleIds((prev) => checked ? [...prev, r.id] : prev.filter((id) => id !== r.id))
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-medium",
											children: r.title || r.name
										}),
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
											className: "text-muted-foreground text-xs",
											children: r.name
										}),
										r.description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground block text-xs",
											children: r.description
										})
									] })]
								}, r.id))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogFooter, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
							type: "submit",
							disabled: !name.trim() || saveMutation.isPending,
							children: admin_agent_save()
						}) })
					]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog$1, {
			open: !!keysFor,
			onOpenChange: (v) => !v && closeKeys(),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
				className: "sm:max-w-2xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: admin_agent_keys_of({ name: keysAgent?.name ?? "" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: admin_agent_keys_hint() })] }),
					createdKey ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2 rounded-md border border-amber-500/40 bg-amber-500/10 p-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-amber-700 dark:text-amber-400",
								children: admin_agent_created_warning()
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "bg-background flex items-center rounded-md pl-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
									className: "min-w-0 flex-1 py-2 text-xs break-all",
									children: createdKey
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CopyButton, { value: createdKey })]
							}),
							onConnect && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
								size: "sm",
								variant: "outline",
								onClick: () => {
									closeKeys();
									onConnect();
								},
								children: admin_agent_next_connect()
							})
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						className: "flex flex-wrap items-end gap-2",
						onSubmit: (e) => {
							e.preventDefault();
							createKeyMutation.mutate();
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex min-w-40 flex-1 flex-col gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "key-name",
									children: admin_agent_key_name()
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input$1, {
									id: "key-name",
									value: keyName,
									maxLength: 100,
									placeholder: "default",
									onChange: (e) => setKeyName(e.target.value)
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: admin_agent_token_expires() }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select$1, {
									items: EXPIRY_DAYS.map((d) => ({
										value: d,
										label: expiryLabel(d)
									})),
									value: expiryDays,
									onValueChange: (v) => v && setExpiryDays(String(v)),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
										className: "w-32",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: EXPIRY_DAYS.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: d,
										children: expiryLabel(d)
									}, d)) })]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button$1, {
								type: "submit",
								disabled: createKeyMutation.isPending,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" }), admin_agent_issue_key()]
							}),
							expiryDays === "never" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "w-full rounded-md border border-amber-500/40 bg-amber-500/10 px-3 py-2 text-xs text-amber-700 dark:text-amber-400",
								children: admin_agent_never_warning()
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-x-auto",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: admin_agent_key_name() }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: admin_agent_token_prefix() }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: admin_agent_token_expires() }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: admin_agent_token_last_used() }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: admin_agent_token_status() }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {})
						] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableBody, { children: [(keysAgent?.keys ?? []).map((k) => {
							const state = keyState(k);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: k.name }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("code", {
									className: "text-xs",
									children: [k.keyPrefix, "…"]
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
									className: "text-muted-foreground text-sm",
									children: k.expiresAt ? formatDateTime(k.expiresAt) : admin_agent_never_expires()
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
									className: "text-muted-foreground text-sm",
									children: k.lastUsedAt ? formatDateTime(k.lastUsedAt) : "—"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									variant: state === "active" ? "default" : "secondary",
									children: state === "active" ? admin_agent_status_active() : state === "expired" ? admin_agent_status_expired() : admin_agent_status_revoked()
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
									className: "text-right",
									children: state === "active" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
										variant: "ghost",
										size: "sm",
										disabled: revokeMutation.isPending,
										onClick: async () => {
											if (await confirm({
												title: admin_agent_revoke(),
												description: admin_agent_revoke_warning(),
												confirmLabel: admin_agent_revoke(),
												destructive: true
											})) revokeMutation.mutate(k.id);
										},
										children: admin_agent_revoke()
									})
								})
							] }, k.id);
						}), keysAgent && keysAgent.keys.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableRow, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
							colSpan: 6,
							className: "text-muted-foreground h-16 text-center",
							children: admin_agent_no_tokens()
						}) })] })] })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogFooter, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
						variant: "outline",
						onClick: closeKeys,
						children: admin_agent_done()
					}) })
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog$1, {
			open: !!deleting,
			onOpenChange: (v) => !v && setDeleting(null),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: admin_agent_delete_title({ name: deleting?.name ?? "" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: admin_agent_delete_warning() })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
				variant: "outline",
				onClick: () => setDeleting(null),
				children: admin_agent_cancel()
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
				variant: "destructive",
				disabled: deleteMutation.isPending,
				onClick: () => deleting && deleteMutation.mutate(deleting.id),
				children: admin_agent_delete()
			})] })] })
		})
	] });
}
var PAGE_SIZE = 20;
var ALL = "__all__";
function duration(e) {
	if (!e.completedAt) return "—";
	const ms = new Date(e.completedAt).getTime() - new Date(e.createdAt).getTime();
	return ms < 1e3 ? `${ms} ms` : `${(ms / 1e3).toFixed(1)} s`;
}
function StatusBadge({ status }) {
	switch (status) {
		case "completed": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: admin_agent_log_completed() });
		case "failed": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
			variant: "destructive",
			children: admin_agent_log_failed()
		});
		case "pending": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
			variant: "secondary",
			children: admin_agent_log_pending()
		});
		default: return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
			variant: "outline",
			children: admin_agent_log_unknown()
		});
	}
}
/** Every call an agent made with its admin key, newest first. */
function AgentLogs() {
	const [page, setPage] = (0, import_react.useState)(1);
	const [agentId, setAgentId] = (0, import_react.useState)(ALL);
	const agents = useQuery({
		queryKey: ["admin-agent-accounts"],
		queryFn: () => apiGet("/api/admin/agent/accounts")
	}).data ?? [];
	const query = useQuery({
		queryKey: [
			"admin-agent-logs",
			page,
			agentId
		],
		queryFn: () => {
			const params = new URLSearchParams({
				page: String(page),
				pageSize: String(PAGE_SIZE)
			});
			if (agentId !== ALL) params.set("userId", agentId);
			return apiGet(`/api/admin/agent/audit?${params}`);
		},
		placeholderData: keepPreviousData
	});
	const columns = [
		{
			header: admin_agent_log_time(),
			cell: (e) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-muted-foreground text-sm whitespace-nowrap",
				children: formatDateTime(e.createdAt)
			})
		},
		{
			header: admin_agent_log_agent(),
			cell: (e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-medium",
					children: e.userName ?? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted-foreground",
						children: admin_agent_log_deleted_agent()
					})
				}), e.keyName && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-muted-foreground text-xs",
					children: [e.keyName, e.keyPrefix && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("code", {
						className: "ml-1",
						children: [e.keyPrefix, "…"]
					})]
				})]
			})
		},
		{
			header: admin_agent_log_operation(),
			cell: (e) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
				className: "text-xs",
				children: e.operation
			})
		},
		{
			header: admin_agent_log_target(),
			cell: (e) => e.targetId ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
				className: "text-muted-foreground text-xs",
				children: e.targetId
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-muted-foreground",
				children: "—"
			})
		},
		{
			header: admin_agent_log_status(),
			cell: (e) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: e.status })
		},
		{
			header: admin_agent_log_duration(),
			cell: (e) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-muted-foreground text-sm tabular-nums",
				children: duration(e)
			})
		}
	];
	const agentItems = [{
		value: ALL,
		label: admin_agent_log_all_agents()
	}, ...agents.map((a) => ({
		value: a.id,
		label: a.name
	}))];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
		className: "text-base",
		children: admin_agent_logs()
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: admin_agent_logs_hint() })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
		columns,
		data: query.data?.items ?? [],
		total: query.data?.total ?? 0,
		page,
		pageSize: PAGE_SIZE,
		onPageChange: setPage,
		rowKey: (e) => e.id,
		emptyText: admin_agent_no_logs(),
		onRefresh: () => query.refetch(),
		loading: query.isFetching || query.isPending,
		toolbar: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select$1, {
			items: agentItems,
			value: agentId,
			onValueChange: (v) => {
				setAgentId(v ? String(v) : ALL);
				setPage(1);
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
				className: "w-48",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: agentItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
				value: item.value,
				children: item.label
			}, item.value)) })]
		})
	}) })] });
}
/** `wrap` for prose (a prompt) rather than code, so long lines stay visible. */
function CodeBlock({ code, wrap }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-muted relative rounded-lg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
			className: cn("overflow-x-auto p-4 pr-12 font-mono text-xs leading-relaxed", wrap && "break-words whitespace-pre-wrap"),
			children: code
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CopyButton, {
			value: code,
			className: "absolute top-2 right-2"
		})]
	});
}
function UrlRow({ label, url, href }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-muted-foreground shrink-0 text-sm",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "bg-muted flex min-w-0 flex-1 items-center rounded-md pl-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
					className: "min-w-0 flex-1 truncate py-1.5 text-xs",
					children: url
				}),
				href && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href,
					target: "_blank",
					rel: "noreferrer",
					"aria-label": admin_agent_open(),
					className: "text-muted-foreground hover:text-foreground flex size-7 items-center justify-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-3.5" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CopyButton, { value: url })
			]
		})]
	});
}
var PAGE_TABS = [
	"accounts",
	"connect",
	"logs"
];
/**
* A stable, unique-per-site project name. App names can repeat across projects
* (e.g. an untouched template), domains can't: "www.myshop.com" → "myshop-com".
* Locally, the app name plus port, so side-by-side dev sites don't collide.
*/
function projectSlug(appName, origin) {
	const clean = (v) => v.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 48);
	try {
		const url = new URL(origin);
		if (![
			"localhost",
			"127.0.0.1",
			"[::1]"
		].includes(url.hostname)) return clean(url.hostname.replace(/^www\./, ""));
		const base = clean(appName) || "shipany";
		return url.port ? `${base}-${url.port}` : base;
	} catch {
		return clean(appName) || "shipany";
	}
}
function AgentPage() {
	const isOwner = !!useUserPermissions().data?.isAdmin;
	const search = Route$97.useSearch();
	const navigate = Route$97.useNavigate();
	const tab = isOwner ? search.tab ?? "accounts" : "connect";
	const setTab = (next) => navigate({
		search: { tab: next === "accounts" ? void 0 : next },
		replace: true
	});
	const [origin, setOrigin] = (0, import_react.useState)(envConfigs.app_url.replace(/\/$/, ""));
	(0, import_react.useEffect)(() => setOrigin(window.location.origin), []);
	const mcpUrl = `${origin}/api/admin/agent/mcp`;
	const project = projectSlug(envConfigs.app_name, origin);
	const snippets = {
		claude: `claude mcp add --transport http ${project} ${mcpUrl} \\
  --header "Authorization: Bearer sa_admin_..."`,
		mcpJson: JSON.stringify({ mcpServers: { [project]: {
			type: "http",
			url: mcpUrl,
			headers: { Authorization: "Bearer sa_admin_..." }
		} } }, null, 2),
		skill: admin_agent_skill_prompt({
			app: envConfigs.app_name,
			url: origin,
			name: project
		})
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6 p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-2xl font-bold",
				children: admin_agent_title()
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground",
				children: admin_agent_description()
			})] }),
			isOwner && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-border flex gap-1 overflow-x-auto overflow-y-hidden border-b",
				children: PAGE_TABS.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setTab(t),
					className: cn("-mb-px border-b-2 px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors", tab === t ? "border-primary text-foreground" : "text-muted-foreground hover:text-foreground border-transparent"),
					children: t === "accounts" ? admin_agent_tab_accounts() : t === "connect" ? admin_agent_tab_connect() : admin_agent_tab_logs()
				}, t))
			}),
			tab === "accounts" && isOwner && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AgentAccounts, { onConnect: () => setTab("connect") }),
			tab === "logs" && isOwner && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AgentLogs, {}),
			tab === "connect" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
				className: "text-base",
				children: admin_agent_quickstart()
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: admin_agent_quickstart_hint() })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs$1, {
				defaultValue: "skill",
				className: "flex-col",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsList, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
						value: "skill",
						children: "Skill"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
						value: "mcp",
						children: "MCP"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsContent, {
						value: "skill",
						className: "space-y-3 pt-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground text-sm",
							children: admin_agent_skill_hint()
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
							code: snippets.skill,
							wrap: true
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsContent, {
						value: "mcp",
						className: "space-y-3 pt-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UrlRow, {
								label: admin_agent_mcp_url(),
								url: mcpUrl
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground text-sm",
								children: admin_agent_mcp_claude()
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, { code: snippets.claude }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground text-sm",
								children: admin_agent_mcp_json()
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, { code: snippets.mcpJson })
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground mt-4 text-xs",
				children: admin_agent_full_docs()
			})] })] })
		]
	});
}
export { AgentPage as component };
