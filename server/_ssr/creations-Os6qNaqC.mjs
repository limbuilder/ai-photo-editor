import { __toESM } from "../_runtime.mjs";
import { require_jsx_runtime, require_react } from "../_libs/@base-ui/react+[...].mjs";
import { ArrowRight, GripVertical, Images, LoaderCircle } from "../_libs/lucide-react.mjs";
import { Link$2, buttonVariants, cn, useSession } from "./router-FRpG8iox.mjs";
import { Dialog$1, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./dialog-oXWpGNwj.mjs";
import { Footer, Header } from "./header-HKuvuIrF.mjs";
// node_modules/.nitro/vite/services/ssr/assets/creations-Os6qNaqC.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/** Drag (or keyboard) a vertical handle to compare original vs edited. */
function BeforeAfterSlider({ beforeSrc, afterSrc, beforeLabel = "Before", afterLabel = "After", alt = "Photo comparison", className }) {
	const frameRef = (0, import_react.useRef)(null);
	const dragging = (0, import_react.useRef)(false);
	const [position, setPosition] = (0, import_react.useState)(50);
	const setFromClientX = (0, import_react.useCallback)((clientX) => {
		const frame = frameRef.current;
		if (!frame) return;
		const { left, width } = frame.getBoundingClientRect();
		if (width <= 0) return;
		const next = (clientX - left) / width * 100;
		setPosition(Math.min(100, Math.max(0, next)));
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: frameRef,
		role: "img",
		"aria-label": alt,
		className: cn("relative touch-none overflow-hidden rounded-xl bg-slate-100 select-none", className),
		onPointerDown: (event) => {
			if (event.button !== 0) return;
			dragging.current = true;
			event.currentTarget.setPointerCapture(event.pointerId);
			setFromClientX(event.clientX);
		},
		onPointerMove: (event) => {
			if (!dragging.current) return;
			setFromClientX(event.clientX);
		},
		onPointerUp: () => {
			dragging.current = false;
		},
		onPointerCancel: () => {
			dragging.current = false;
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: afterSrc,
				alt: "",
				draggable: false,
				className: "block max-h-[min(70vh,720px)] w-full object-contain"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: beforeSrc,
				alt: "",
				draggable: false,
				className: "pointer-events-none absolute inset-0 h-full w-full object-contain",
				style: { clipPath: `inset(0 ${100 - position}% 0 0)` }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute inset-y-0 z-10 w-px bg-white shadow-[0_0_0_1px_rgba(15,23,42,0.2)]",
				style: { left: `${position}%` },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute top-1/2 left-1/2 flex size-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-md",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GripVertical, {
						className: "size-4",
						"aria-hidden": true
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "pointer-events-none absolute top-3 left-3 rounded-md bg-slate-900/70 px-2 py-1 text-[11px] font-semibold tracking-wide text-white uppercase",
				children: beforeLabel
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "pointer-events-none absolute top-3 right-3 rounded-md bg-slate-900/70 px-2 py-1 text-[11px] font-semibold tracking-wide text-white uppercase",
				children: afterLabel
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				type: "range",
				min: 0,
				max: 100,
				value: position,
				"aria-label": "Compare before and after",
				className: "sr-only",
				onChange: (event) => setPosition(Number(event.target.value))
			})
		]
	});
}
var SIGN_IN_HREF = `/sign-in?callbackUrl=${encodeURIComponent("/creations")}`;
function isUnauthorized(status, message) {
	return status === 401 || /unauthorized/i.test(message);
}
function SignInToViewEdits() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl border border-slate-200 bg-white px-6 py-16 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Images, { className: "mx-auto mb-4 size-10 text-slate-400" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-medium text-slate-900",
				children: "Sign in to see your edits"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mx-auto mt-2 max-w-md text-sm text-slate-500",
				children: "Your edit history is saved to your account. Sign in to view it."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link$2, {
				href: SIGN_IN_HREF,
				className: cn(buttonVariants(), "mt-6 h-9 rounded-lg bg-blue-600 px-4 text-white hover:bg-blue-700"),
				children: ["Sign in", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
			})
		]
	});
}
function PhotoEditHistory() {
	const { data: session, isPending } = useSession();
	const signedIn = !!session?.user;
	const [ready, setReady] = (0, import_react.useState)(false);
	const [items, setItems] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [needsSignIn, setNeedsSignIn] = (0, import_react.useState)(false);
	const [failed, setFailed] = (0, import_react.useState)(false);
	const [active, setActive] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		setReady(true);
	}, []);
	(0, import_react.useEffect)(() => {
		if (!ready || isPending || !signedIn) return;
		let cancelled = false;
		fetch("/api/photo-editor/edits").then(async (response) => {
			const payload = await response.json().catch(() => ({}));
			const message = typeof payload?.message === "string" ? payload.message : "";
			if (isUnauthorized(response.status, message)) {
				if (!cancelled) setNeedsSignIn(true);
				return;
			}
			if (!response.ok || payload.code !== 0) throw new Error("unavailable");
			if (!cancelled) setItems(payload.data?.items || []);
		}).catch(() => {
			if (!cancelled) setFailed(true);
		}).finally(() => {
			if (!cancelled) setLoading(false);
		});
		return () => {
			cancelled = true;
		};
	}, [
		ready,
		isPending,
		signedIn
	]);
	if (!ready || isPending || signedIn && loading && !needsSignIn) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
		className: "flex items-center gap-2 py-12 text-sm text-slate-500",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }), "Loading your edits..."]
	});
	if (!signedIn || needsSignIn) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SignInToViewEdits, {});
	if (failed) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "py-12 text-sm text-slate-500",
		children: "We couldn't load your edits. Refresh the page and try again."
	});
	if (!items.length) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl border border-slate-200 bg-white px-6 py-16 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Images, { className: "mx-auto mb-4 size-10 text-slate-400" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-medium",
				children: "No edits yet"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-slate-500",
				children: "Your generated photos will appear here."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link$2, {
				href: "/",
				className: "mt-5 inline-flex items-center gap-2 text-sm font-medium text-blue-600",
				children: ["Start editing ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
			})
		]
	});
	const canCompare = Boolean(active?.originalUrl && active?.resultUrl);
	const previewSrc = active?.resultUrl || active?.originalUrl;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
		children: items.map((item) => {
			const thumb = item.resultUrl || item.originalUrl;
			const openable = Boolean(thumb);
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					disabled: !openable,
					onClick: () => openable && setActive(item),
					className: cn("flex h-48 w-full items-center justify-center bg-slate-100", openable && "cursor-zoom-in transition hover:bg-slate-50 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none focus-visible:ring-inset"),
					"aria-label": "View photo comparison",
					children: thumb ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: thumb,
						alt: "",
						className: "h-full w-full object-contain"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Images, { className: "size-10 text-slate-300" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2 p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "line-clamp-2 text-sm font-medium text-slate-900",
							children: item.prompt
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between text-xs text-slate-500",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.status }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: new Date(item.createdAt).toLocaleDateString() })]
						}),
						item.resultUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link$2, {
							href: "/?sourceJobId=" + item.id,
							className: "inline-flex items-center gap-1 text-sm font-medium text-blue-600",
							children: ["Edit again ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
						})
					]
				})]
			}, item.id);
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog$1, {
		open: active !== null,
		onOpenChange: (open) => {
			if (!open) setActive(null);
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "force-light max-w-3xl gap-4 bg-white p-4 text-slate-900 sm:p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, {
					className: "pr-8 text-left",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
						className: "text-base text-slate-900 sm:text-lg",
						children: canCompare ? "Compare before & after" : "Edited photo"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
						className: "line-clamp-2 text-slate-500",
						children: active?.prompt
					})]
				}),
				canCompare ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BeforeAfterSlider, {
					beforeSrc: active.originalUrl,
					afterSrc: active.resultUrl,
					alt: "Original versus edited photo"
				}) : previewSrc ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-hidden rounded-xl bg-slate-100",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: previewSrc,
						alt: "Edited photo",
						className: "mx-auto max-h-[min(70vh,720px)] w-full object-contain"
					})
				}) : null,
				active?.resultUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex justify-end",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link$2, {
						href: "/?sourceJobId=" + active.id,
						className: cn(buttonVariants(), "h-9 rounded-lg bg-blue-600 px-4 text-white hover:bg-blue-700"),
						onClick: () => setActive(null),
						children: ["Edit again", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
					})
				}) : null
			]
		})
	})] });
}
var SplitComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
	className: "min-h-screen bg-[#f7f9fc]",
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "mx-auto max-w-6xl px-4 py-14 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mb-3 text-3xl font-bold tracking-tight",
					children: "My Creations"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-10 text-slate-500",
					children: "Your AI-edited images and prompts, all in one place."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhotoEditHistory, {})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
	]
});
export { SplitComponent as component };
