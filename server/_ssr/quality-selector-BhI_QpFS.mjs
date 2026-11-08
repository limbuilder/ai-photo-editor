import { __toESM } from "../_runtime.mjs";
import { require_jsx_runtime, require_react } from "../_libs/@base-ui/react+[...].mjs";
import { Check, ChevronDown, CloudUpload, Trash2 } from "../_libs/lucide-react.mjs";
import { PHOTO_EDIT_QUALITIES, cn } from "./router-FRpG8iox.mjs";
// node_modules/.nitro/vite/services/ssr/assets/quality-selector-BhI_QpFS.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/** Shared image dropzone used by homepage and tool workspaces. */
function ImageUploadField({ preview, fileName, showPreviewThumb = true, inputRef: externalRef, onFile, onClear, className }) {
	const localRef = (0, import_react.useRef)(null);
	const inputRef = externalRef ?? localRef;
	const [dragging, setDragging] = (0, import_react.useState)(false);
	const openPicker = () => inputRef.current?.click();
	const hasPreview = Boolean(showPreviewThumb && preview);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-2 flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					htmlFor: "photo-file",
					className: "text-sm font-semibold text-slate-800",
					children: "Upload image"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs text-slate-400",
					children: "JPG, PNG, WebP · 10 MB"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				id: "photo-file",
				ref: inputRef,
				type: "file",
				accept: "image/jpeg,image/png,image/webp",
				className: "sr-only",
				onChange: (e) => {
					onFile(e.target.files?.[0]);
					e.currentTarget.value = "";
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				role: "button",
				tabIndex: 0,
				onClick: openPicker,
				onKeyDown: (e) => {
					if (e.key === "Enter" || e.key === " ") openPicker();
				},
				onDragOver: (e) => {
					e.preventDefault();
					setDragging(true);
				},
				onDragLeave: () => setDragging(false),
				onDrop: (e) => {
					e.preventDefault();
					setDragging(false);
					onFile(e.dataTransfer.files?.[0]);
				},
				className: cn("relative flex min-h-[6.75rem] cursor-pointer flex-col items-center justify-center overflow-hidden rounded-xl border-2 border-dashed px-4 py-3 text-center transition-colors", dragging ? "border-blue-500 bg-blue-50" : "border-slate-200 bg-white hover:border-blue-400 hover:bg-blue-50/50"),
				children: hasPreview ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex w-full items-center gap-4 text-left",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: preview,
							alt: "Selected photo",
							className: "size-24 rounded-lg object-contain"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "truncate text-sm font-medium text-slate-800",
								children: fileName || "Edited photo"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-slate-500",
								children: "Click to replace photo"
							})]
						}),
						onClear ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-label": "Remove photo",
							onClick: (e) => {
								e.stopPropagation();
								onClear();
							},
							className: "inline-flex size-9 shrink-0 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-red-50 hover:text-red-600",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-5" })
						}) : null
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-3 rounded-xl border border-slate-200 bg-white p-3 shadow-sm",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CloudUpload, { className: "size-6 text-blue-600" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold text-slate-800",
						children: "Click to upload or drag your image here"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xs text-slate-500",
						children: "Your photo stays in your browser until you generate."
					})
				] })
			})
		]
	});
}
/** Shared quality dropdown used by homepage and tool workspaces. */
function QualitySelector({ value, disabled, onChange, className }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	const menuRef = (0, import_react.useRef)(null);
	const selected = PHOTO_EDIT_QUALITIES.find((item) => item.id === value);
	(0, import_react.useEffect)(() => {
		if (!open) return;
		const onPointerDown = (event) => {
			if (!menuRef.current?.contains(event.target)) setOpen(false);
		};
		const onKeyDown = (event) => {
			if (event.key === "Escape") setOpen(false);
		};
		document.addEventListener("mousedown", onPointerDown);
		document.addEventListener("keydown", onKeyDown);
		return () => {
			document.removeEventListener("mousedown", onPointerDown);
			document.removeEventListener("keydown", onKeyDown);
		};
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("relative", className),
		ref: menuRef,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				htmlFor: "photo-edit-quality",
				className: "mb-2 block text-sm font-semibold text-slate-800",
				children: "Quality"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				id: "photo-edit-quality",
				type: "button",
				disabled,
				"aria-haspopup": "listbox",
				"aria-expanded": open,
				onClick: () => setOpen((prev) => !prev),
				className: cn("flex w-full items-center gap-3 rounded-xl border bg-white px-3.5 py-2.5 text-left transition-colors", open ? "border-blue-500 ring-2 ring-blue-100" : "border-slate-200 hover:border-blue-200 hover:bg-slate-50", disabled && "cursor-not-allowed opacity-70"),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "min-w-0 flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-sm font-semibold text-slate-900",
							children: selected.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-0.5 block truncate text-xs text-slate-500",
							children: selected.description
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "shrink-0 rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600",
						children: [selected.credits, " credits"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: cn("size-4 shrink-0 text-slate-400 transition-transform", open && "rotate-180") })
				]
			}),
			open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				role: "listbox",
				"aria-labelledby": "photo-edit-quality",
				className: "absolute top-full left-0 z-50 mt-1.5 w-full space-y-1 rounded-xl border border-slate-200 bg-white p-1.5 shadow-[0_12px_28px_-18px_rgba(15,23,42,.35)] ring-1 ring-slate-900/5",
				children: PHOTO_EDIT_QUALITIES.map((option) => {
					const isSelected = value === option.id;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						role: "option",
						"aria-selected": isSelected,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							disabled,
							onClick: () => {
								onChange(option.id);
								setOpen(false);
							},
							className: cn("flex w-full items-start gap-2 rounded-lg px-2.5 py-2.5 text-left transition-colors", isSelected ? "bg-blue-50" : "hover:bg-slate-50 focus-visible:bg-slate-50"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "min-w-0 flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center justify-between gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm font-semibold text-slate-900",
										children: option.label
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: cn("shrink-0 rounded-md px-1.5 py-0.5 text-[11px] font-medium", isSelected ? "bg-blue-100 text-blue-700" : "bg-slate-100 text-slate-600"),
										children: [option.credits, " credits"]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-0.5 block text-xs leading-relaxed text-slate-500",
									children: option.description
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: cn("mt-0.5 size-4 shrink-0 text-blue-600", isSelected ? "opacity-100" : "opacity-0") })]
						})
					}, option.id);
				})
			})
		]
	});
}
export { ImageUploadField, QualitySelector };
