import { __toESM } from "../_runtime.mjs";
import { DialogBackdrop, DialogClose, DialogDescription, DialogPopup, DialogPortal, DialogRoot, DialogTitle, mergeProps, require_jsx_runtime, require_react, useRender } from "../_libs/@base-ui/react+[...].mjs";
import { localizeHref } from "./ssr.mjs";
import { THEMES } from "./appearance-lSt69CdG.mjs";
import { cva } from "../_libs/class-variance-authority+clsx.mjs";
import { useQuery } from "../_libs/tanstack__react-query.mjs";
import { z } from "../_libs/next-themes.mjs";
import { Check, ChevronRight, EllipsisVertical, LogOut, Monitor, Moon, Palette, PanelLeft, Sun, SwatchBook, User, X } from "../_libs/lucide-react.mjs";
import { Button$1, Link$2, apiGet, cn, common_nav_profile, common_nav_theme_color, common_nav_theme_dark, common_nav_theme_light, common_nav_theme_system, common_sign_sign_out_title, common_themes_site_default, signOut, tDynamic, useAppearance, usePathname, useRouter$1, useSession } from "./router-FRpG8iox.mjs";
import "./input-CacA4PHh.mjs";
import { Tooltip$1, TooltipContent, TooltipTrigger } from "./tooltip-D3UuGDKl.mjs";
import { useUserPermissions } from "./use-user-permissions-Cp87hGxQ.mjs";
import { Avatar$1, AvatarFallback, AvatarImage } from "./avatar-C_C4qEd-.mjs";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from "./dropdown-menu-CvPzUrW_.mjs";
import "./separator-CMSGaDUK.mjs";
import "./skeleton-DeIuuBWc.mjs";
import { ThemeDot } from "./appearance-options-DVsMAGYy.mjs";
// node_modules/.nitro/vite/services/ssr/assets/app-layout-DE17iwbb.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var MOBILE_BREAKPOINT = 768;
function useIsMobile() {
	const [isMobile, setIsMobile] = import_react.useState(void 0);
	import_react.useEffect(() => {
		const mql = window.matchMedia(`(max-width: 767px)`);
		const onChange = () => {
			setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
		};
		mql.addEventListener("change", onChange);
		setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
		return () => mql.removeEventListener("change", onChange);
	}, []);
	return !!isMobile;
}
function Sheet({ ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogRoot, {
		"data-slot": "sheet",
		...props
	});
}
function SheetPortal({ ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogPortal, {
		"data-slot": "sheet-portal",
		...props
	});
}
function SheetOverlay({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogBackdrop, {
		"data-slot": "sheet-overlay",
		className: cn("fixed inset-0 z-50 bg-black/10 transition-opacity duration-150 data-ending-style:opacity-0 data-starting-style:opacity-0 supports-backdrop-filter:backdrop-blur-xs", className),
		...props
	});
}
function SheetContent({ className, children, side = "right", showCloseButton = true, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPopup, {
		"data-slot": "sheet-content",
		"data-side": side,
		className: cn("fixed z-50 flex flex-col gap-4 bg-popover bg-clip-padding text-sm text-popover-foreground shadow-lg transition duration-200 ease-in-out data-ending-style:opacity-0 data-starting-style:opacity-0 data-[side=bottom]:inset-x-0 data-[side=bottom]:bottom-0 data-[side=bottom]:h-auto data-[side=bottom]:border-t data-[side=bottom]:data-ending-style:translate-y-[2.5rem] data-[side=bottom]:data-starting-style:translate-y-[2.5rem] data-[side=left]:inset-y-0 data-[side=left]:left-0 data-[side=left]:h-full data-[side=left]:w-3/4 data-[side=left]:border-r data-[side=left]:data-ending-style:translate-x-[-2.5rem] data-[side=left]:data-starting-style:translate-x-[-2.5rem] data-[side=right]:inset-y-0 data-[side=right]:right-0 data-[side=right]:h-full data-[side=right]:w-3/4 data-[side=right]:border-l data-[side=right]:data-ending-style:translate-x-[2.5rem] data-[side=right]:data-starting-style:translate-x-[2.5rem] data-[side=top]:inset-x-0 data-[side=top]:top-0 data-[side=top]:h-auto data-[side=top]:border-b data-[side=top]:data-ending-style:translate-y-[-2.5rem] data-[side=top]:data-starting-style:translate-y-[-2.5rem] data-[side=left]:sm:max-w-sm data-[side=right]:sm:max-w-sm", className),
		...props,
		children: [children, showCloseButton && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
			"data-slot": "sheet-close",
			render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
				variant: "ghost",
				className: "absolute top-3 right-3",
				size: "icon-sm"
			}),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "sr-only",
				children: "Close"
			})]
		})]
	})] });
}
function SheetHeader({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"data-slot": "sheet-header",
		className: cn("flex flex-col gap-0.5 p-4", className),
		...props
	});
}
function SheetTitle({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
		"data-slot": "sheet-title",
		className: cn("text-base font-medium text-foreground", className),
		...props
	});
}
function SheetDescription({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
		"data-slot": "sheet-description",
		className: cn("text-sm text-muted-foreground", className),
		...props
	});
}
var SIDEBAR_COOKIE_NAME = "sidebar_state";
var SIDEBAR_COOKIE_MAX_AGE = 604800;
var SIDEBAR_WIDTH = "16rem";
var SIDEBAR_WIDTH_MOBILE = "18rem";
var SIDEBAR_WIDTH_ICON = "3rem";
var SIDEBAR_KEYBOARD_SHORTCUT = "b";
var SidebarContext = import_react.createContext(null);
function useSidebar() {
	const context = import_react.useContext(SidebarContext);
	if (!context) throw new Error("useSidebar must be used within a SidebarProvider.");
	return context;
}
function SidebarProvider({ defaultOpen = true, open: openProp, onOpenChange: setOpenProp, className, style, children, ...props }) {
	const isMobile = useIsMobile();
	const [openMobile, setOpenMobile] = import_react.useState(false);
	const [_open, _setOpen] = import_react.useState(defaultOpen);
	const open = openProp ?? _open;
	const setOpen = import_react.useCallback((value) => {
		const openState = typeof value === "function" ? value(open) : value;
		if (setOpenProp) setOpenProp(openState);
		else _setOpen(openState);
		document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
	}, [setOpenProp, open]);
	const toggleSidebar = import_react.useCallback(() => {
		return isMobile ? setOpenMobile((open) => !open) : setOpen((open) => !open);
	}, [
		isMobile,
		setOpen,
		setOpenMobile
	]);
	import_react.useEffect(() => {
		const handleKeyDown = (event) => {
			if (event.key === SIDEBAR_KEYBOARD_SHORTCUT && (event.metaKey || event.ctrlKey)) {
				event.preventDefault();
				toggleSidebar();
			}
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [toggleSidebar]);
	const state = open ? "expanded" : "collapsed";
	const contextValue = import_react.useMemo(() => ({
		state,
		open,
		setOpen,
		isMobile,
		openMobile,
		setOpenMobile,
		toggleSidebar
	}), [
		state,
		open,
		setOpen,
		isMobile,
		openMobile,
		setOpenMobile,
		toggleSidebar
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarContext.Provider, {
		value: contextValue,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"data-slot": "sidebar-wrapper",
			style: {
				"--sidebar-width": SIDEBAR_WIDTH,
				"--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
				...style
			},
			className: cn("group/sidebar-wrapper flex min-h-svh w-full has-data-[variant=inset]:bg-sidebar", className),
			...props,
			children
		})
	});
}
function Sidebar({ side = "left", variant = "sidebar", collapsible = "offcanvas", className, children, dir, ...props }) {
	const { isMobile, state, openMobile, setOpenMobile } = useSidebar();
	if (collapsible === "none") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"data-slot": "sidebar",
		className: cn("flex h-full w-(--sidebar-width) flex-col bg-sidebar text-sidebar-foreground", className),
		...props,
		children
	});
	if (isMobile) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sheet, {
		open: openMobile,
		onOpenChange: setOpenMobile,
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetContent, {
			dir,
			"data-sidebar": "sidebar",
			"data-slot": "sidebar",
			"data-mobile": "true",
			className: "w-(--sidebar-width) bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden",
			style: { "--sidebar-width": SIDEBAR_WIDTH_MOBILE },
			side,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetHeader, {
				className: "sr-only",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTitle, { children: "Sidebar" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetDescription, { children: "Displays the mobile sidebar." })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex h-full w-full flex-col",
				children
			})]
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "group peer hidden text-sidebar-foreground md:block",
		"data-state": state,
		"data-collapsible": state === "collapsed" ? collapsible : "",
		"data-variant": variant,
		"data-side": side,
		"data-slot": "sidebar",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"data-slot": "sidebar-gap",
			className: cn("relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear", "group-data-[collapsible=offcanvas]:w-0", "group-data-[side=right]:rotate-180", variant === "floating" || variant === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)")
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"data-slot": "sidebar-container",
			"data-side": side,
			className: cn("fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear data-[side=left]:left-0 data-[side=left]:group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)] data-[side=right]:right-0 data-[side=right]:group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)] md:flex", variant === "floating" || variant === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l", className),
			...props,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"data-sidebar": "sidebar",
				"data-slot": "sidebar-inner",
				className: "flex size-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:shadow-sm group-data-[variant=floating]:ring-1 group-data-[variant=floating]:ring-sidebar-border",
				children
			})
		})]
	});
}
function SidebarTrigger({ className, onClick, ...props }) {
	const { toggleSidebar } = useSidebar();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button$1, {
		"data-sidebar": "trigger",
		"data-slot": "sidebar-trigger",
		variant: "ghost",
		size: "icon-sm",
		className: cn(className),
		onClick: (event) => {
			onClick?.(event);
			toggleSidebar();
		},
		...props,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelLeft, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Toggle Sidebar"
		})]
	});
}
function SidebarInset({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		"data-slot": "sidebar-inset",
		className: cn("relative flex w-full flex-1 flex-col bg-background md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2", className),
		...props
	});
}
function SidebarHeader({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"data-slot": "sidebar-header",
		"data-sidebar": "header",
		className: cn("flex flex-col gap-2 p-2", className),
		...props
	});
}
function SidebarFooter({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"data-slot": "sidebar-footer",
		"data-sidebar": "footer",
		className: cn("flex flex-col gap-2 p-2", className),
		...props
	});
}
function SidebarContent({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"data-slot": "sidebar-content",
		"data-sidebar": "content",
		className: cn("no-scrollbar flex min-h-0 flex-1 flex-col gap-0 overflow-auto group-data-[collapsible=icon]:overflow-hidden", className),
		...props
	});
}
function SidebarGroup({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"data-slot": "sidebar-group",
		"data-sidebar": "group",
		className: cn("relative flex w-full min-w-0 flex-col p-2", className),
		...props
	});
}
function SidebarGroupLabel({ className, render, ...props }) {
	return useRender({
		defaultTagName: "div",
		props: mergeProps({ className: cn("flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 ring-sidebar-ring outline-hidden transition-[margin,opacity] duration-200 ease-linear group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0 focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0", className) }, props),
		render,
		state: {
			slot: "sidebar-group-label",
			sidebar: "group-label"
		}
	});
}
function SidebarGroupContent({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"data-slot": "sidebar-group-content",
		"data-sidebar": "group-content",
		className: cn("w-full text-sm", className),
		...props
	});
}
function SidebarMenu({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		"data-slot": "sidebar-menu",
		"data-sidebar": "menu",
		className: cn("flex w-full min-w-0 flex-col gap-1", className),
		...props
	});
}
function SidebarMenuItem({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
		"data-slot": "sidebar-menu-item",
		"data-sidebar": "menu-item",
		className: cn("group/menu-item relative", className),
		...props
	});
}
var sidebarMenuButtonVariants = cva("peer/menu-button group/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm ring-sidebar-ring outline-hidden transition-[width,height,padding] group-has-data-[sidebar=menu-action]/menu-item:pr-8 group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground [&_svg]:size-4 [&_svg]:shrink-0 [&>span:last-child]:truncate", {
	variants: {
		variant: {
			default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
			outline: "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]"
		},
		size: {
			default: "h-8 text-sm",
			sm: "h-7 text-xs",
			lg: "h-12 text-sm group-data-[collapsible=icon]:p-0!"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function SidebarMenuButton({ render, isActive = false, variant = "default", size = "default", tooltip, className, ...props }) {
	const { isMobile, state } = useSidebar();
	const comp = useRender({
		defaultTagName: "button",
		props: mergeProps({ className: cn(sidebarMenuButtonVariants({
			variant,
			size
		}), className) }, props),
		render: !tooltip ? render : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, { render }),
		state: {
			slot: "sidebar-menu-button",
			sidebar: "menu-button",
			size,
			active: isActive
		}
	});
	if (!tooltip) return comp;
	if (typeof tooltip === "string") tooltip = { children: tooltip };
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip$1, { children: [comp, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContent, {
		side: "right",
		align: "center",
		hidden: state !== "collapsed" || isMobile,
		...tooltip
	})] });
}
function SidebarMenuSub({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		"data-slot": "sidebar-menu-sub",
		"data-sidebar": "menu-sub",
		className: cn("mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5 group-data-[collapsible=icon]:hidden", className),
		...props
	});
}
function SidebarMenuSubItem({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
		"data-slot": "sidebar-menu-sub-item",
		"data-sidebar": "menu-sub-item",
		className: cn("group/menu-sub-item relative", className),
		...props
	});
}
function SidebarMenuSubButton({ render, size = "md", isActive = false, className, ...props }) {
	return useRender({
		defaultTagName: "a",
		props: mergeProps({ className: cn("flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground ring-sidebar-ring outline-hidden group-data-[collapsible=icon]:hidden hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[size=md]:text-sm data-[size=sm]:text-xs data-active:bg-sidebar-accent data-active:text-sidebar-accent-foreground [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground", className) }, props),
		render,
		state: {
			slot: "sidebar-menu-sub-button",
			sidebar: "menu-sub-button",
			size,
			active: isActive
		}
	});
}
function AppSidebar({ brand, logo, brandHref = "/", navItems, footerNavItems, footer, variant = "inset", collapsible = "offcanvas" }) {
	const pathname = usePathname();
	const [logoFailed, setLogoFailed] = (0, import_react.useState)(false);
	const showLogo = !!logo && !logoFailed;
	const logoRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const img = logoRef.current;
		if (img?.complete && img.naturalWidth === 0) setLogoFailed(true);
	}, [logo]);
	const groups = [];
	let currentGroup = "__initial__";
	for (const item of navItems) if (item.group !== currentGroup) {
		groups.push({
			label: item.group,
			items: [item]
		});
		currentGroup = item.group;
	} else groups[groups.length - 1].items.push(item);
	const isActiveHref = (href) => href === navItems[0]?.href ? pathname === href : pathname === href || pathname.startsWith(href + "/");
	const activeParents = () => {
		const set = /* @__PURE__ */ new Set();
		for (const item of navItems) if (item.items?.some((sub) => isActiveHref(sub.href))) set.add(item.href);
		return set;
	};
	const defaultParents = () => {
		const first = navItems.find((i) => i.items?.length);
		const set = first ? /* @__PURE__ */ new Set([first.href]) : /* @__PURE__ */ new Set();
		for (const href of activeParents()) set.add(href);
		return set;
	};
	const storageKey = `sidebar-open:${brandHref}`;
	const [openItems, setOpenItems] = (0, import_react.useState)(defaultParents);
	(0, import_react.useEffect)(() => {
		let saved = null;
		try {
			saved = JSON.parse(localStorage.getItem(storageKey) || "null");
		} catch {}
		setOpenItems(() => {
			const next = saved ? new Set(saved) : defaultParents();
			for (const href of activeParents()) next.add(href);
			return next;
		});
	}, [storageKey]);
	(0, import_react.useEffect)(() => {
		setOpenItems((prev) => {
			let changed = false;
			const next = new Set(prev);
			for (const href of activeParents()) if (!next.has(href)) {
				next.add(href);
				changed = true;
			}
			return changed ? next : prev;
		});
	}, [pathname]);
	function toggleItem(href) {
		setOpenItems((prev) => {
			const next = new Set(prev);
			if (next.has(href)) next.delete(href);
			else next.add(href);
			try {
				localStorage.setItem(storageKey, JSON.stringify([...next]));
			} catch {}
			return next;
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Sidebar, {
		variant,
		collapsible,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarHeader, {
				className: "h-14 justify-center py-0",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarMenu, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarMenuItem, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link$2, {
					href: brandHref,
					className: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground flex w-full items-center gap-2.5 rounded-md px-2 py-1.5 text-left text-sm group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:p-0",
					children: [
						showLogo && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							ref: logoRef,
							src: logo,
							alt: "",
							onError: () => setLogoFailed(true),
							className: "size-7 shrink-0 rounded-lg object-contain"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex-1 truncate font-serif text-lg leading-none italic group-data-[collapsible=icon]:hidden",
							children: brand
						}),
						!showLogo && typeof brand === "string" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hidden w-full text-center font-serif text-lg leading-none italic group-data-[collapsible=icon]:block",
							children: brand.charAt(0)
						})
					]
				}) }) })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarContent, { children: groups.map((group, gi) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SidebarGroup, { children: [group.label && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarGroupLabel, { children: group.label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarGroupContent, {
				className: "flex flex-col gap-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarMenu, { children: group.items.map((item) => {
					const Icon = item.icon;
					if (item.items?.length) {
						const open = openItems.has(item.href);
						const childActive = item.items.some((sub) => isActiveHref(sub.href));
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SidebarMenuItem, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SidebarMenuButton, {
							tooltip: item.label,
							isActive: childActive && !open,
							"aria-expanded": open,
							onClick: () => toggleItem(item.href),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.label }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: `text-sidebar-foreground/70 ml-auto size-4 shrink-0 transition-transform ${open ? "rotate-90" : ""}` })
							]
						}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarMenuSub, { children: item.items.map((sub) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarMenuSubItem, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarMenuSubButton, {
							render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$2, { href: sub.href }),
							isActive: isActiveHref(sub.href),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: sub.label })
						}) }, sub.href)) })] }, item.href);
					}
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarMenuItem, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$2, {
						href: item.href,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SidebarMenuButton, {
							tooltip: item.label,
							isActive: isActiveHref(item.href),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.label })]
						})
					}) }, item.href);
				}) })
			})] }, gi)) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SidebarFooter, { children: [footerNavItems && footerNavItems.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarMenu, { children: footerNavItems.map((item) => {
				const Icon = item.icon;
				const isActive = item.newTab ? false : item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
				const button = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SidebarMenuButton, {
					tooltip: item.label,
					isActive,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.label })]
				});
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarMenuItem, { children: item.newTab ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: localizeHref(item.href),
					target: "_blank",
					rel: "noopener noreferrer",
					children: button
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$2, {
					href: item.href,
					children: button
				}) }, item.href);
			}) }), footer] })
		]
	});
}
function UserMenu({ name, email, image, profileHref }) {
	const router = useRouter$1();
	const { theme, setTheme } = z();
	const { siteAppearance, userTheme, userThemeEnabled, colorModeForced, setUserTheme } = useAppearance();
	const siteSwatch = THEMES.find((t) => t.id === siteAppearance.theme)?.swatch ?? "";
	const { isMobile } = useSidebar();
	async function handleSignOut() {
		await signOut();
		router.push("/");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarMenu, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarMenuItem, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
		className: "ring-sidebar-ring w-full rounded-lg outline-none focus-visible:ring-2 [&>div]:w-full",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SidebarMenuButton, {
			size: "lg",
			render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {}),
			className: "data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Avatar$1, {
					className: "size-8 rounded-lg",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarImage, {
						src: image || void 0,
						alt: name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarFallback, {
						className: "rounded-lg text-xs",
						children: name.charAt(0).toUpperCase()
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid flex-1 text-left text-sm leading-tight",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "truncate font-medium",
						children: name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sidebar-foreground/70 truncate text-xs",
						children: email
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EllipsisVertical, { className: "ml-auto size-4" })
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
		className: "min-w-56",
		side: isMobile ? "bottom" : "right",
		align: "end",
		sideOffset: 4,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuGroup, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuLabel, {
				className: "p-0 font-normal",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 px-1 py-1.5 text-left text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Avatar$1, {
						className: "size-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarImage, {
							src: image || void 0,
							alt: name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarFallback, {
							className: "rounded-lg text-xs",
							children: name.charAt(0).toUpperCase()
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid flex-1 text-left text-sm leading-tight",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "truncate font-medium",
							children: name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted-foreground truncate text-xs",
							children: email
						})]
					})]
				})
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}),
			profileHref && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
				onClick: () => {
					window.open(localizeHref(profileHref), "_blank");
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "size-4" }), common_nav_profile()]
			}),
			!colorModeForced && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuSub, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuSubTrigger, {
				className: "gap-2 px-2 py-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Palette, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "flex-1",
					children: theme === "dark" ? common_nav_theme_dark() : theme === "light" ? common_nav_theme_light() : common_nav_theme_system()
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuSubContent, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
					onClick: () => setTheme("light"),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "size-4" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex-1",
							children: common_nav_theme_light()
						}),
						theme === "light" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5" })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
					onClick: () => setTheme("dark"),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "size-4" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex-1",
							children: common_nav_theme_dark()
						}),
						theme === "dark" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5" })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
					onClick: () => setTheme("system"),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Monitor, { className: "size-4" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex-1",
							children: common_nav_theme_system()
						}),
						theme === "system" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5" })
					]
				})
			] })] }),
			userThemeEnabled && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuSub, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuSubTrigger, {
				className: "gap-2 px-2 py-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SwatchBook, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "flex-1",
					children: common_nav_theme_color()
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuSubContent, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
					onClick: () => setUserTheme(null),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeDot, {
							color: siteSwatch,
							className: "size-3.5"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex-1",
							children: common_themes_site_default()
						}),
						!userTheme && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5" })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}),
				THEMES.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
					onClick: () => setUserTheme(t.id),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeDot, {
							color: t.swatch,
							className: "size-3.5"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex-1",
							children: tDynamic(`common.themes.${t.id}`)
						}),
						userTheme === t.id && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5" })
					]
				}, t.id))
			] })] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
				onClick: handleSignOut,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "size-4" }), common_sign_sign_out_title()]
			})
		]
	})] }) }) });
}
function AppLayout({ children, navItems, footerNavItems, brand, logo, brandHref = "/", mobileBrand, headerExtra, profileHref, requirePermission, unauthorizedRedirect = "/settings" }) {
	const { data: session, isPending } = useSession();
	const { appearance } = useAppearance();
	const router = useRouter$1();
	const pathname = usePathname();
	const redirectingRef = (0, import_react.useRef)(false);
	const userInfoQuery = useQuery({
		queryKey: ["user-info"],
		queryFn: () => apiGet("/api/user/info"),
		staleTime: 6e4,
		enabled: !!session?.user
	});
	const needsInvite = userInfoQuery.data?.needsInvite === true;
	const membershipResolved = !session?.user || userInfoQuery.isSuccess || userInfoQuery.isError;
	const permissionsEnabled = !!session?.user && !!requirePermission;
	const permissionsQuery = useUserPermissions(permissionsEnabled);
	const isAdmin = permissionsQuery.data?.isAdmin === true;
	const authorized = !!session?.user && membershipResolved && !needsInvite && (!requirePermission || isAdmin);
	(0, import_react.useEffect)(() => {
		if (isPending) return;
		if (!session?.user) {
			if (redirectingRef.current) return;
			redirectingRef.current = true;
			const search = typeof window !== "undefined" ? window.location.search : "";
			const callbackUrl = `${pathname}${search}`;
			router.replace(`/sign-in?callbackUrl=${encodeURIComponent(callbackUrl)}`);
			return;
		}
		if (userInfoQuery.isPending) return;
		if (needsInvite) {
			if (!redirectingRef.current) {
				redirectingRef.current = true;
				router.replace("/redeem-invite");
			}
			return;
		}
		if (!requirePermission) return;
		if (permissionsQuery.isPending) return;
		if (permissionsQuery.isError || !isAdmin) router.replace(unauthorizedRedirect);
	}, [
		isPending,
		session,
		router,
		pathname,
		requirePermission,
		unauthorizedRedirect,
		userInfoQuery.isPending,
		needsInvite,
		permissionsQuery.isPending,
		permissionsQuery.isError,
		isAdmin
	]);
	if (isPending || !authorized || !session?.user) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "bg-background flex min-h-screen items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col items-center gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "border-primary size-6 animate-spin rounded-full border-2 border-t-transparent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-muted-foreground text-sm",
				children: "Loading..."
			})]
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SidebarProvider, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppSidebar, {
		variant: appearance.sidebarVariant,
		collapsible: appearance.sidebarCollapsible,
		brand,
		logo,
		brandHref,
		navItems,
		footerNavItems,
		footer: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserMenu, {
			name: session.user.name || "User",
			email: session.user.email,
			image: session.user.image,
			profileHref
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SidebarInset, {
		className: "min-w-0",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: cn("flex h-14 shrink-0 items-center gap-2", appearance.sidebarVariant === "floating" && "md:mt-2"),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center gap-2 px-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarTrigger, { className: "-ml-1" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "flex-1" }),
				headerExtra && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center gap-1 px-4",
					children: headerExtra
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
			className: "min-w-0 flex-1 overflow-x-clip",
			children
		})]
	})] });
}
export { AppLayout };
