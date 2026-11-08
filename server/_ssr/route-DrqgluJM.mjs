import { __toESM } from "../_runtime.mjs";
import { require_jsx_runtime, require_react } from "../_libs/@base-ui/react+[...].mjs";
import { Outlet } from "../_libs/@tanstack/react-router+[...].mjs";
import { envConfigs } from "./ssr.mjs";
import { Coins, CreditCard, House, Key, LayoutDashboard, LifeBuoy, PenLine, Receipt, User, X } from "../_libs/lucide-react.mjs";
import { toast } from "../_libs/sonner.mjs";
import { Button$1, Link$2, apiPost, buttonVariants, cn, common_support_attachments_label, common_support_cancel, common_support_content_label, common_support_content_placeholder, common_support_description, common_support_open_label, common_support_required, common_support_sign_in, common_support_sign_in_notice, common_support_submit, common_support_submitting, common_support_success, common_support_title, common_support_title_label, common_support_title_placeholder, common_support_track_hint_link, common_support_track_hint_prefix, common_systems_home, currentPathWithQuery, settings_nav_apikeys, settings_nav_billing, settings_nav_credits, settings_nav_group_account, settings_nav_group_content, settings_nav_guest_posts, settings_nav_overview, settings_nav_payments, settings_nav_profile, settings_nav_tickets, useSession } from "./router-FRpG8iox.mjs";
import { Label } from "./label-Cmbt5KTb.mjs";
import { Input$1 } from "./input-CacA4PHh.mjs";
import { Dialog$1, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "./dialog-oXWpGNwj.mjs";
import { useGuestPostInfo } from "./use-guest-posts-BXr5R4sL.mjs";
import { Textarea } from "./textarea-sCd8zrH6.mjs";
import { ImageUploader } from "./image-uploader-CwZSQ5ZA.mjs";
import { useUserFeatures } from "./use-user-features-DO1fBu-4.mjs";
import { AppLayout } from "./app-layout-DE17iwbb.mjs";
// node_modules/.nitro/vite/services/ssr/assets/route-DrqgluJM.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/**
* Floating support button (bottom-right) that opens a quick ticket form.
* Drop into any page or layout: <SupportWidget />
*
* Requires login — unauthenticated users get a sign-in prompt instead.
*/
function SupportWidget() {
	const { data: session, isPending } = useSession();
	const [open, setOpen] = (0, import_react.useState)(false);
	const [title, setTitle] = (0, import_react.useState)("");
	const [content, setContent] = (0, import_react.useState)("");
	const [attachments, setAttachments] = (0, import_react.useState)([]);
	const [uploading, setUploading] = (0, import_react.useState)(false);
	const [uploaderKey, setUploaderKey] = (0, import_react.useState)(0);
	const [submitting, setSubmitting] = (0, import_react.useState)(false);
	const features = useUserFeatures();
	async function submit() {
		if (!title.trim() || !content.trim()) {
			toast.error(common_support_required());
			return;
		}
		setSubmitting(true);
		try {
			await apiPost("/api/tickets", {
				title,
				content,
				attachments
			});
			toast.success(common_support_success());
			setOpen(false);
			setTitle("");
			setContent("");
			setAttachments([]);
			setUploaderKey((k) => k + 1);
		} catch (e) {
			toast.error(e?.message || "Failed");
		} finally {
			setSubmitting(false);
		}
	}
	if (!features.loaded || !features.tickets) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		"aria-label": common_support_open_label(),
		onClick: () => setOpen(true),
		className: cn("fixed right-6 bottom-6 z-50 size-12 rounded-full", "bg-primary text-primary-foreground shadow-lg", "flex items-center justify-center", "transition-all hover:scale-105 hover:shadow-xl"),
		children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LifeBuoy, { className: "size-5" })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog$1, {
		open,
		onOpenChange: setOpen,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: common_support_title() }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: common_support_description() })] }), !isPending && !session?.user ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col items-center gap-4 py-6 text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground text-sm",
				children: common_support_sign_in_notice()
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$2, {
				href: `/sign-in?callbackUrl=${encodeURIComponent(currentPathWithQuery("/"))}`,
				className: cn(buttonVariants()),
				children: common_support_sign_in()
			})]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit: (e) => {
				e.preventDefault();
				submit();
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4 py-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "support-title",
							children: common_support_title_label()
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input$1, {
							id: "support-title",
							value: title,
							maxLength: 200,
							onChange: (e) => setTitle(e.target.value),
							placeholder: common_support_title_placeholder()
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "support-content",
							children: common_support_content_label()
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
							id: "support-content",
							value: content,
							maxLength: 5e3,
							rows: 5,
							onChange: (e) => setContent(e.target.value),
							placeholder: common_support_content_placeholder()
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: common_support_attachments_label() }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageUploader, {
							allowMultiple: true,
							maxImages: 9,
							onChange: (items) => {
								setAttachments(items.filter((i) => i.status === "uploaded" && i.url).map((i) => i.url));
								setUploading(items.some((i) => i.status === "uploading"));
							}
						}, uploaderKey)]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-muted-foreground text-xs",
						children: [
							common_support_track_hint_prefix(),
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$2, {
								href: "/settings/tickets",
								className: "hover:text-foreground underline",
								children: common_support_track_hint_link()
							})
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
				type: "button",
				variant: "outline",
				onClick: () => setOpen(false),
				children: common_support_cancel()
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
				type: "submit",
				disabled: submitting || uploading,
				children: submitting ? common_support_submitting() : common_support_submit()
			})] })]
		})] })
	})] });
}
function SettingsLayout() {
	const accountGroup = settings_nav_group_account();
	const contentGroup = settings_nav_group_content();
	const features = useUserFeatures();
	const navItems = [
		{
			href: "/settings",
			label: settings_nav_overview(),
			icon: LayoutDashboard
		},
		{
			href: "/settings/profile",
			label: settings_nav_profile(),
			icon: User,
			group: accountGroup
		},
		{
			href: "/settings/credits",
			label: settings_nav_credits(),
			icon: Coins,
			group: accountGroup,
			show: features.credits
		},
		{
			href: "/settings/billing",
			label: settings_nav_billing(),
			icon: CreditCard,
			group: accountGroup,
			show: features.billing
		},
		{
			href: "/settings/payments",
			label: settings_nav_payments(),
			icon: Receipt,
			group: accountGroup,
			show: features.payments
		},
		{
			href: "/settings/apikeys",
			label: settings_nav_apikeys(),
			icon: Key,
			group: accountGroup,
			show: features.apikeys
		},
		{
			href: "/settings/tickets",
			label: settings_nav_tickets(),
			icon: LifeBuoy,
			group: contentGroup,
			show: features.tickets
		}
	].filter((item) => item.show !== false);
	if (useGuestPostInfo().data?.enabled) navItems.push({
		href: "/settings/guest-posts",
		label: settings_nav_guest_posts(),
		icon: PenLine,
		group: contentGroup
	});
	const footerNavItems = [{
		href: "/",
		label: common_systems_home(),
		icon: House,
		newTab: true
	}];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppLayout, {
		navItems,
		footerNavItems,
		brand: envConfigs.app_name,
		logo: envConfigs.app_logo,
		brandHref: "/settings",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SupportWidget, {})]
	});
}
export { SettingsLayout as component };
