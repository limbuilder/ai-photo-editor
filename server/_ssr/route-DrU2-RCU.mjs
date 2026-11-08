import { require_jsx_runtime } from "../_libs/@base-ui/react+[...].mjs";
import { Outlet } from "../_libs/@tanstack/react-router+[...].mjs";
import { envConfigs } from "./ssr.mjs";
import { Bot, CreditCard, FolderOpen, House, Images, LayoutDashboard, Settings, Shield } from "../_libs/lucide-react.mjs";
import { admin_nav_agent, admin_nav_ai_tasks, admin_nav_billing, admin_nav_categories, admin_nav_content, admin_nav_credits, admin_nav_guest_posts, admin_nav_invite_codes, admin_nav_overview, admin_nav_payments, admin_nav_permissions, admin_nav_posts, admin_nav_rbac, admin_nav_roles, admin_nav_settings, admin_nav_subscriptions, admin_nav_tickets, admin_nav_users, common_systems_admin, common_systems_home } from "./router-FRpG8iox.mjs";
import { AppLayout } from "./app-layout-DE17iwbb.mjs";
// node_modules/.nitro/vite/services/ssr/assets/route-DrU2-RCU.js
var import_jsx_runtime = require_jsx_runtime();
function AdminLayout() {
	const group = common_systems_admin();
	const navItems = [
		{
			href: "/admin",
			label: admin_nav_overview(),
			icon: LayoutDashboard,
			group
		},
		{
			href: "/admin/users",
			label: admin_nav_rbac(),
			icon: Shield,
			group,
			items: [
				{
					href: "/admin/users",
					label: admin_nav_users()
				},
				{
					href: "/admin/invite-codes",
					label: admin_nav_invite_codes()
				},
				{
					href: "/admin/roles",
					label: admin_nav_roles()
				},
				{
					href: "/admin/permissions",
					label: admin_nav_permissions()
				}
			]
		},
		{
			href: "/admin/payments",
			label: admin_nav_billing(),
			icon: CreditCard,
			group,
			items: [
				{
					href: "/admin/payments",
					label: admin_nav_payments()
				},
				{
					href: "/admin/subscriptions",
					label: admin_nav_subscriptions()
				},
				{
					href: "/admin/credits",
					label: admin_nav_credits()
				}
			]
		},
		{
			href: "/admin/categories",
			label: admin_nav_content(),
			icon: FolderOpen,
			group,
			items: [
				{
					href: "/admin/categories",
					label: admin_nav_categories()
				},
				{
					href: "/admin/posts",
					label: admin_nav_posts()
				},
				{
					href: "/admin/guest-posts",
					label: admin_nav_guest_posts()
				},
				{
					href: "/admin/tickets",
					label: admin_nav_tickets()
				}
			]
		},
		{
			href: "/admin/ai-tasks",
			label: admin_nav_ai_tasks(),
			icon: Images,
			group
		}
	];
	const footerNavItems = [
		{
			href: "/admin/agent",
			label: admin_nav_agent(),
			icon: Bot
		},
		{
			href: "/admin/settings",
			label: admin_nav_settings(),
			icon: Settings
		},
		{
			href: "/",
			label: common_systems_home(),
			icon: House,
			newTab: true
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppLayout, {
		navItems,
		footerNavItems,
		brand: envConfigs.app_name,
		logo: envConfigs.app_logo,
		brandHref: "/admin",
		profileHref: "/settings/profile",
		requirePermission: "admin.*",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
export { AdminLayout as component };
