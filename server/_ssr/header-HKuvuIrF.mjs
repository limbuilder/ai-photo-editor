import { __toESM } from "../_runtime.mjs";
import { require_jsx_runtime, require_react } from "../_libs/@base-ui/react+[...].mjs";
import { envConfigs } from "./ssr.mjs";
import { useQuery } from "../_libs/tanstack__react-query.mjs";
import { ChevronDown, Coins, LogOut, Menu, Settings, Shield, X } from "../_libs/lucide-react.mjs";
import { Link$2, apiGet, buttonVariants, cn, common_nav_credits, common_nav_settings, common_nav_sign_in, common_sign_sign_out_title, common_systems_admin, currentPathWithQuery, landing_nav_blog, landing_nav_pricing, signOut, useRouter$1, useSession } from "./router-FRpG8iox.mjs";
import { useUserPermissions } from "./use-user-permissions-Cp87hGxQ.mjs";
import { Avatar$1, AvatarFallback, AvatarImage } from "./avatar-C_C4qEd-.mjs";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./dropdown-menu-CvPzUrW_.mjs";
// node_modules/.nitro/vite/services/ssr/assets/header-HKuvuIrF.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-slate-200 bg-white px-4 py-12 text-slate-600 sm:px-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-9 md:grid-cols-[2fr_1fr_1fr_1fr]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-lg font-bold tracking-tight text-slate-900",
						children: "GetAIPhotoEditor"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-sm text-sm leading-6",
						children: "Edit photos with natural-language prompts. Practical AI tools for everyday creative work."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-slate-500",
							children: "Support: "
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "mailto:support@getaiphotoeditor.com",
							className: "font-medium text-slate-900 hover:text-blue-600",
							children: "support@getaiphotoeditor.com"
						})]
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-4 text-sm font-semibold text-slate-900",
					children: "Product"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-3 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$2, {
							href: "/",
							className: "hover:text-blue-600",
							children: "AI Photo Editor"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$2, {
							href: "/tools",
							className: "hover:text-blue-600",
							children: "AI Tools"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$2, {
							href: "/pricing",
							className: "hover:text-blue-600",
							children: "Pricing"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$2, {
							href: "/blog",
							className: "hover:text-blue-600",
							children: "Blog"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$2, {
							href: "/examples",
							className: "hover:text-blue-600",
							children: "Examples"
						})
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-4 text-sm font-semibold text-slate-900",
					children: "Resources"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-3 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$2, {
							href: "/ai-background-remover",
							className: "hover:text-blue-600",
							children: "AI Background Remover"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$2, {
							href: "/#editor",
							className: "hover:text-blue-600",
							children: "Object Remover"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$2, {
							href: "/photo-background-changer",
							className: "hover:text-blue-600",
							children: "Photo Background Changer"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$2, {
							href: "/ai-photo-enhancer",
							className: "hover:text-blue-600",
							children: "Photo Enhancer"
						})
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-4 text-sm font-semibold text-slate-900",
					children: "Legal"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-3 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$2, {
							href: "/privacy-policy",
							className: "hover:text-blue-600",
							children: "Privacy Policy"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$2, {
							href: "/terms-of-service",
							className: "hover:text-blue-600",
							children: "Terms of Service"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$2, {
							href: "/acceptable-use-policy",
							className: "hover:text-blue-600",
							children: "Acceptable Use"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "mailto:support@getaiphotoeditor.com",
							className: "hover:text-blue-600",
							children: "Contact"
						})
					]
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto mt-10 flex max-w-6xl flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-6 text-xs text-slate-500",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
				"© ",
				(/* @__PURE__ */ new Date()).getFullYear(),
				" GetAIPhotoEditor"
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Built for simple, powerful photo edits" })]
		})]
	});
}
function HeaderCredits({ className }) {
	const { data, isPending } = useQuery({
		queryKey: ["user-credits", "balance"],
		queryFn: () => apiGet("/api/credits")
	});
	if (isPending && !data) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-flex h-9 min-w-14 items-center justify-center rounded-lg px-2.5", className),
		"aria-hidden": true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-4 w-10 animate-pulse rounded bg-slate-200/80" })
	});
	if (!data) return null;
	const amount = data.accountType === "visitor" ? data.trialCredits ?? data.balance : data.balance;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link$2, {
		href: "/pricing",
		className: cn("inline-flex h-9 items-center gap-1.5 rounded-lg px-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-900", className),
		"aria-label": common_nav_credits({ count: amount }),
		title: common_nav_credits({ count: amount }),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Coins, {
			className: "size-4 text-amber-500",
			"aria-hidden": true
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "tabular-nums",
			children: amount
		})]
	});
}
function SiteUserMenu({ name, email, image }) {
	const router = useRouter$1();
	const { data } = useUserPermissions();
	const isAdmin = data?.isAdmin === true;
	async function handleSignOut() {
		await signOut();
		router.push("/");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
		className: "focus-visible:ring-ring rounded-full outline-none focus-visible:ring-2",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Avatar$1, {
			className: "size-9",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarImage, {
				src: image || void 0,
				alt: name
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarFallback, {
				className: "text-xs",
				children: name.charAt(0).toUpperCase()
			})]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
		className: "min-w-56",
		align: "end",
		sideOffset: 8,
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
							className: "text-xs",
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
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
				render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$2, { href: "/settings" }),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings, { className: "size-4" }), common_nav_settings()]
			}),
			isAdmin && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
				render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$2, { href: "/admin" }),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "size-4" }), common_systems_admin()]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
				onClick: handleSignOut,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "size-4" }), common_sign_sign_out_title()]
			})
		]
	})] });
}
function authHref(path) {
	return `${path}?callbackUrl=${encodeURIComponent(currentPathWithQuery("/"))}`;
}
/** Off-site URLs render as plain <a>; internal paths use the locale-aware Link. */
var isExternalHref = (href) => /^https?:\/\//.test(href);
var navItemClass = "text-sm text-slate-500 transition-colors hover:text-slate-900";
var mobileNavItemClass = "rounded-md px-3 py-2.5 text-sm text-slate-600 transition-colors hover:bg-slate-50 hover:text-slate-900";
function NavAnchor({ link, className, onClick }) {
	if (!link.href) return null;
	if (isExternalHref(link.href)) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href: link.href,
		target: "_blank",
		rel: "noopener noreferrer",
		className,
		onClick,
		children: link.label
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$2, {
		href: link.href,
		target: link.external ? "_blank" : void 0,
		className,
		onClick,
		children: link.label
	});
}
function DesktopNavItem({ link }) {
	if (!link.children?.length) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavAnchor, {
		link,
		className: navItemClass
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "group relative",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			className: cn(navItemClass, "inline-flex items-center gap-1"),
			"aria-haspopup": "menu",
			children: [link.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-3.5 opacity-60 transition-transform group-hover:rotate-180" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "invisible absolute top-full left-1/2 z-50 pt-3 opacity-0 transition-[opacity,visibility] duration-150 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "-translate-x-1/2 rounded-xl border border-slate-200 bg-white p-1.5 shadow-lg",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex min-w-56 flex-col",
					role: "menu",
					children: link.children.map((child) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavAnchor, {
						link: child,
						className: "rounded-lg px-3 py-2 text-sm text-slate-600 transition-colors hover:bg-slate-50 hover:text-slate-900"
					}, child.href))
				})
			})
		})]
	});
}
function MobileNavItem({ link, onNavigate }) {
	if (!link.children?.length) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavAnchor, {
		link,
		className: mobileNavItemClass,
		onClick: onNavigate
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "px-3 py-2 text-xs font-semibold tracking-wide text-slate-400 uppercase",
			children: link.label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "ml-3 flex flex-col border-l border-slate-100 pl-2",
			children: link.children.map((child) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavAnchor, {
				link: child,
				className: "rounded-md px-3 py-2 text-sm text-slate-500 transition-colors hover:bg-slate-50 hover:text-slate-900",
				onClick: onNavigate
			}, child.href))
		})]
	});
}
function SiteHeader({ navLinks }) {
	const [mobileOpen, setMobileOpen] = (0, import_react.useState)(false);
	const [logoFailed, setLogoFailed] = (0, import_react.useState)(false);
	const { data: session } = useSession();
	const user = session?.user?.isAnonymous ? null : session?.user;
	const logo = envConfigs.app_logo;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-50 w-full border-b border-slate-200/70 bg-white/85 backdrop-blur-md",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto flex h-16 max-w-[1320px] items-center justify-between px-4 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$2, {
					href: "/",
					className: "relative z-10 flex items-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-2.5 text-lg font-bold tracking-tight text-slate-900 sm:text-xl",
						children: [!!logo && !logoFailed ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: logo,
							alt: "",
							width: 36,
							height: 36,
							className: "size-9 rounded-[8px] object-cover",
							onError: () => setLogoFailed(true)
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "inline-flex size-9 items-center justify-center rounded-lg bg-blue-600 text-sm font-bold text-white",
							children: (envConfigs.app_name || "A").charAt(0)
						}), envConfigs.app_name === "GetAIPhotoEditor" ? "Get AI Photo Editor" : envConfigs.app_name]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "absolute inset-x-0 hidden items-center justify-center gap-8 md:flex",
					children: navLinks?.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DesktopNavItem, { link }, link.href ?? link.label))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative z-10 hidden items-center gap-1.5 md:flex",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeaderCredits, {}), user ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteUserMenu, {
						name: user.name || "User",
						email: user.email,
						image: user.image
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$2, {
						href: authHref("/sign-in"),
						className: cn(buttonVariants({ size: "lg" }), "ml-1.5 h-10 rounded-lg bg-blue-600 px-5 text-sm font-medium text-white hover:bg-blue-700"),
						children: common_nav_sign_in()
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "relative z-10 p-2 md:hidden",
					onClick: () => setMobileOpen(!mobileOpen),
					"aria-label": mobileOpen ? "Close menu" : "Open menu",
					"aria-expanded": mobileOpen,
					children: mobileOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
				})
			]
		}), mobileOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "border-t border-slate-200 bg-white px-4 pt-2 pb-4 md:hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "flex flex-col gap-1",
				children: navLinks?.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileNavItem, {
					link,
					onNavigate: () => setMobileOpen(false)
				}, link.href ?? link.label))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 flex items-center justify-end gap-2 border-t border-slate-100 pt-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeaderCredits, {}), user ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteUserMenu, {
					name: user.name || "User",
					email: user.email,
					image: user.image
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$2, {
					href: authHref("/sign-in"),
					className: cn(buttonVariants({ size: "lg" }), "h-10 rounded-lg bg-blue-600 px-5 text-sm font-medium text-white hover:bg-blue-700"),
					onClick: () => setMobileOpen(false),
					children: common_nav_sign_in()
				})]
			})]
		})]
	});
}
function Header() {
	const navLinks = [
		{
			label: "AI Tools",
			children: [
				{
					href: "/ai-photo-enhancer",
					label: "AI Photo Enhancer"
				},
				{
					href: "/ai-background-remover",
					label: "AI Background Remover"
				},
				{
					href: "/photo-background-changer",
					label: "Photo Background Changer"
				}
			]
		},
		{
			href: "/pricing",
			label: landing_nav_pricing()
		},
		{
			href: "/blog",
			label: landing_nav_blog()
		},
		{
			href: "/creations",
			label: "My Creations"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, { navLinks });
}
export { Footer, Header };
