import { __toESM } from "../_runtime.mjs";
import { require_jsx_runtime, require_react } from "../_libs/@base-ui/react+[...].mjs";
import { Ban, CloudUpload, Download, ImagePlus, LoaderCircle, Sparkles } from "../_libs/lucide-react.mjs";
import { toast } from "../_libs/sonner.mjs";
import { Button$1, cn, getPhotoTool } from "./router-FRpG8iox.mjs";
import { CreditGateDialog, usePhotoEditSession } from "./use-photo-edit-session-CVp1HJYG.mjs";
// node_modules/.nitro/vite/services/ssr/assets/background-remover-workspace-dkrh9nte.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var MAX_BG_BYTES = 10485760;
function isAllowedBackgroundFile(file) {
	if (file.size > MAX_BG_BYTES) return false;
	return file.type === "image/jpeg" || file.type === "image/png" || file.type === "image/webp";
}
/** Only blob: object URLs need revoke — preset paths must stay. */
function revokePhotoUrl(url) {
	if (url.startsWith("blob:")) URL.revokeObjectURL(url);
}
/** Built-in fill photos for the background remover Photo tab. */
var PRESET_FILL_PHOTOS = [
	{
		id: "studio-white",
		label: "Studio white",
		src: "/images/ai-photo-editor/background-remover/fills/studio-white.png"
	},
	{
		id: "studio-gray",
		label: "Studio gray",
		src: "/images/ai-photo-editor/background-remover/fills/studio-gray.png"
	},
	{
		id: "studio-beige",
		label: "Studio beige",
		src: "/images/ai-photo-editor/background-remover/fills/studio-beige.png"
	},
	{
		id: "soft-blue",
		label: "Soft blue",
		src: "/images/ai-photo-editor/background-remover/fills/soft-blue.png"
	},
	{
		id: "park-bokeh",
		label: "Park",
		src: "/images/ai-photo-editor/background-remover/fills/park-bokeh.png"
	},
	{
		id: "sunset-sky",
		label: "Sunset",
		src: "/images/ai-photo-editor/background-remover/fills/sunset-sky.png"
	},
	{
		id: "office-bokeh",
		label: "Office",
		src: "/images/ai-photo-editor/background-remover/fills/office-bokeh.png"
	}
];
function loadImage(src) {
	return new Promise((resolve, reject) => {
		const img = new Image();
		img.crossOrigin = "anonymous";
		img.onload = () => resolve(img);
		img.onerror = () => reject(/* @__PURE__ */ new Error("Failed to load image"));
		img.src = src;
	});
}
/** Draw `bg` into `destW×destH` with CSS object-fit: cover, centered. */
function drawCover(ctx, bg, destW, destH) {
	const scale = Math.max(destW / bg.naturalWidth, destH / bg.naturalHeight);
	const w = bg.naturalWidth * scale;
	const h = bg.naturalHeight * scale;
	const x = (destW - w) / 2;
	const y = (destH - h) / 2;
	ctx.drawImage(bg, x, y, w, h);
}
/**
* Composite a transparent cutout over the chosen fill into a PNG blob.
* Requires CORS on remote cutout URLs (R2); blob: photo URLs are fine.
*/
async function compositeCutout(cutoutUrl, fill) {
	const cutout = await loadImage(cutoutUrl);
	const width = cutout.naturalWidth;
	const height = cutout.naturalHeight;
	if (!width || !height) throw new Error("Invalid cutout image");
	const canvas = document.createElement("canvas");
	canvas.width = width;
	canvas.height = height;
	const ctx = canvas.getContext("2d");
	if (!ctx) throw new Error("Canvas unavailable");
	if (fill.mode === "color") {
		ctx.fillStyle = fill.color;
		ctx.fillRect(0, 0, width, height);
	} else if (fill.mode === "photo") drawCover(ctx, await loadImage(fill.photoUrl), width, height);
	ctx.drawImage(cutout, 0, 0, width, height);
	return new Promise((resolve, reject) => {
		canvas.toBlob((blob) => {
			if (!blob) {
				reject(/* @__PURE__ */ new Error("Export failed. The image host may block canvas access (CORS)."));
				return;
			}
			resolve(blob);
		}, "image/png");
	});
}
/** Trigger a same-tab file download from a Blob. */
function downloadBlob(blob, filename) {
	const url = URL.createObjectURL(blob);
	const a = document.createElement("a");
	a.href = url;
	a.download = filename;
	a.rel = "noopener";
	document.body.appendChild(a);
	a.click();
	a.remove();
	window.setTimeout(() => URL.revokeObjectURL(url), 2e3);
}
var PRESET_COLORS = [
	"#ffffff",
	"#4a3728",
	"#8b5a2b",
	"#d2b48c",
	"#f5d0c5",
	"#fadadd",
	"#e6e6fa",
	"#e0f0e9",
	"#e0f7fa",
	"#e3f2fd",
	"#fff8e7",
	"#fffacd",
	"#f0fff0"
];
/** Post-cutout fill controls: solid colors, presets, or a custom photo. */
function BackgroundFillPanel({ value, onChange }) {
	const [tab, setTab] = (0, import_react.useState)(value.mode === "photo" ? "photo" : "color");
	const colorInputRef = (0, import_react.useRef)(null);
	const photoInputRef = (0, import_react.useRef)(null);
	const selectedColor = value.mode === "color" ? value.color.toLowerCase() : null;
	const customSelected = value.mode === "color" && !PRESET_COLORS.some((c) => c.toLowerCase() === selectedColor);
	const selectedPhoto = value.mode === "photo" ? value.photoUrl : null;
	const isCustomPhoto = Boolean(selectedPhoto) && !PRESET_FILL_PHOTOS.some((p) => p.src === selectedPhoto);
	function pickColor(color) {
		if (value.mode === "photo") revokePhotoUrl(value.photoUrl);
		onChange({
			mode: "color",
			color
		});
	}
	function pickTransparent() {
		if (value.mode === "photo") revokePhotoUrl(value.photoUrl);
		onChange({ mode: "transparent" });
	}
	function pickPresetPhoto(src) {
		if (value.mode === "photo") revokePhotoUrl(value.photoUrl);
		onChange({
			mode: "photo",
			photoUrl: src
		});
	}
	function onPhotoFile(file) {
		if (!file) return;
		if (!isAllowedBackgroundFile(file)) {
			toast.error("Use JPG, PNG or WebP up to 10 MB");
			return;
		}
		const url = URL.createObjectURL(file);
		if (value.mode === "photo") revokePhotoUrl(value.photoUrl);
		onChange({
			mode: "photo",
			photoUrl: url
		});
	}
	function clearPhoto() {
		if (value.mode === "photo") revokePhotoUrl(value.photoUrl);
		onChange({ mode: "transparent" });
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_16px_40px_-28px_rgba(15,23,42,.4)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex gap-1 rounded-xl bg-slate-100 p-1",
			role: "tablist",
			"aria-label": "Background fill",
			children: [{
				id: "color",
				label: "Color"
			}, {
				id: "photo",
				label: "Photo"
			}].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				role: "tab",
				"aria-selected": tab === item.id,
				onClick: () => setTab(item.id),
				className: cn("flex-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors", tab === item.id ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-800"),
				children: item.label
			}, item.id))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4 flex-1",
			children: tab === "color" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-3 gap-2.5",
				role: "listbox",
				"aria-label": "Background color",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						role: "option",
						"aria-selected": value.mode === "transparent",
						"aria-label": "Transparent",
						onClick: pickTransparent,
						className: cn("relative aspect-square overflow-hidden rounded-2xl border border-slate-200 bg-white", value.mode === "transparent" && "ring-2 ring-slate-900 ring-offset-2"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 bg-[conic-gradient(#e2e8f0_25%,#fff_0_50%,#e2e8f0_0_75%,#fff_0)] bg-[length:12px_12px]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ban, { className: "absolute inset-0 m-auto size-7 text-slate-400" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						role: "option",
						"aria-selected": customSelected,
						"aria-label": "Custom color",
						onClick: () => colorInputRef.current?.click(),
						className: cn("relative aspect-square overflow-hidden rounded-2xl border border-slate-200", customSelected && "ring-2 ring-slate-900 ring-offset-2"),
						style: customSelected && selectedColor ? { backgroundColor: selectedColor } : void 0,
						children: [!customSelected && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "absolute inset-0",
							style: { background: "conic-gradient(from 180deg, #ef4444, #eab308, #22c55e, #06b6d4, #3b82f6, #a855f7, #ef4444)" }
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							ref: colorInputRef,
							type: "color",
							value: selectedColor ?? "#805b4c",
							onChange: (e) => pickColor(e.target.value),
							className: "sr-only",
							tabIndex: -1,
							"aria-hidden": true
						})]
					}),
					PRESET_COLORS.map((color) => {
						const active = value.mode === "color" && value.color.toLowerCase() === color.toLowerCase();
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							role: "option",
							"aria-selected": active,
							"aria-label": `Color ${color}`,
							onClick: () => pickColor(color),
							className: cn("aspect-square rounded-2xl border border-slate-200/80", color.toLowerCase() === "#ffffff" && "border-slate-300", active && "ring-2 ring-slate-900 ring-offset-2"),
							style: { backgroundColor: color }
						}, color);
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						ref: photoInputRef,
						type: "file",
						accept: "image/jpeg,image/png,image/webp",
						className: "sr-only",
						onChange: (e) => {
							onPhotoFile(e.target.files?.[0]);
							e.currentTarget.value = "";
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-3 gap-2.5",
						role: "listbox",
						"aria-label": "Background photo",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							role: "option",
							"aria-selected": false,
							"aria-label": "Upload a background photo",
							onClick: () => photoInputRef.current?.click(),
							className: "flex aspect-square flex-col items-center justify-center gap-1 rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50 text-slate-500 transition-colors hover:border-blue-400 hover:bg-blue-50/40 hover:text-blue-600",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImagePlus, { className: "size-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] font-medium",
								children: "Upload"
							})]
						}), PRESET_FILL_PHOTOS.map((preset) => {
							const active = selectedPhoto === preset.src;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								role: "option",
								"aria-selected": active,
								"aria-label": preset.label,
								onClick: () => pickPresetPhoto(preset.src),
								className: cn("relative aspect-square overflow-hidden rounded-2xl border border-slate-200", active && "ring-2 ring-slate-900 ring-offset-2"),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: preset.src,
									alt: "",
									className: "size-full object-cover"
								})
							}, preset.id);
						})]
					}),
					isCustomPhoto && selectedPhoto && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "overflow-hidden rounded-2xl border border-slate-200",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: selectedPhoto,
							alt: "Custom background",
							className: "aspect-[4/3] w-full object-cover"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-2 border-t border-slate-100 p-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => photoInputRef.current?.click(),
								className: "flex-1 rounded-lg bg-slate-100 px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-200",
								children: "Replace"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: clearPhoto,
								className: "rounded-lg px-3 py-2 text-sm font-medium text-slate-500 hover:bg-slate-50 hover:text-slate-800",
								children: "Clear"
							})]
						})]
					})
				]
			})
		})]
	});
}
var removerTool = getPhotoTool("remove-background");
/** High-contrast checker so transparent PNG alpha is obvious in the preview. */
var CHECKER_BG = "bg-[conic-gradient(#cbd5e1_25%,#f8fafc_0_50%,#cbd5e1_0_75%,#f8fafc_0)] bg-[length:24px_24px]";
var TRANSPARENT_FILL = { mode: "transparent" };
var WHITE_FILL = {
	mode: "color",
	color: "#ffffff"
};
/**
* Full-bleed preview stage after cutout: fill paints the stage, subject sits
* on top with object-contain so color/photo stays visible through alpha.
*/
function CutoutPreview({ previewSrc, showingCutout, fill, toggle }) {
	const fillStyle = fill.mode === "color" ? { backgroundColor: fill.color } : void 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("relative flex min-h-[24rem] w-full items-center justify-center overflow-hidden rounded-xl sm:min-h-[30rem]", fill.mode === "transparent" && CHECKER_BG, fill.mode === "color" && "bg-slate-100", fill.mode === "photo" && "bg-slate-900"),
		style: fillStyle,
		children: [
			toggle,
			fill.mode === "photo" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: fill.photoUrl,
				alt: "",
				"aria-hidden": true,
				className: "absolute inset-0 size-full object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: previewSrc,
				alt: showingCutout ? "Photo with background removed" : "Selected photo",
				className: "relative z-[1] max-h-[22rem] max-w-full object-contain sm:max-h-[28rem]"
			})
		]
	});
}
/** Upload / cutout shell; fill panel appears only after background removal. */
function BackgroundRemoverWorkspace({ variant = "remover" } = {}) {
	const isChanger = variant === "changer";
	const edit = usePhotoEditSession({
		fixedPrompt: removerTool?.examplePrompt,
		toolSlug: "remove-background",
		restoreDraftPrompt: false,
		creditCost: 4
	});
	const [fill, setFill] = (0, import_react.useState)(isChanger ? WHITE_FILL : TRANSPARENT_FILL);
	const [downloading, setDownloading] = (0, import_react.useState)(false);
	const fillRef = (0, import_react.useRef)(fill);
	fillRef.current = fill;
	(0, import_react.useEffect)(() => {
		const prev = fillRef.current;
		if (prev.mode === "photo") revokePhotoUrl(prev.photoUrl);
		setFill(isChanger ? WHITE_FILL : TRANSPARENT_FILL);
	}, [edit.preview, isChanger]);
	(0, import_react.useEffect)(() => {
		return () => {
			const current = fillRef.current;
			if (current.mode === "photo") revokePhotoUrl(current.photoUrl);
		};
	}, []);
	const previewSrc = edit.result && !edit.showOriginal ? edit.result : edit.preview;
	const showingCutout = Boolean(edit.result && !edit.showOriginal);
	const hasResult = Boolean(edit.result);
	async function handleDownload() {
		if (!edit.result) return;
		setDownloading(true);
		try {
			downloadBlob(await compositeCutout(edit.result, fill), fill.mode === "transparent" ? "background-removed.png" : isChanger ? "photo-background-changed.png" : "background-filled.png");
		} catch (e) {
			const message = e instanceof Error ? e.message : "Download failed. Try again.";
			if (fill.mode === "transparent" && edit.jobId && edit.session?.user) {
				toast.error(message + " Opening the server download instead.");
				window.open(`/api/photo-editor/edits/${edit.jobId}/download`, "_blank", "noopener,noreferrer");
			} else toast.error(message);
		} finally {
			setDownloading(false);
		}
	}
	function chooseSourceFile(file) {
		edit.chooseFile(file);
	}
	const originalCutoutToggle = edit.result ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "absolute top-2 right-2 z-10 flex items-center gap-1 rounded-lg bg-white/95 p-1 text-xs shadow-sm",
		onClick: (e) => e.stopPropagation(),
		onKeyDown: (e) => e.stopPropagation(),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			onClick: () => edit.setShowOriginal(true),
			className: cn("rounded-md px-2.5 py-1.5", edit.showOriginal ? "bg-slate-900 font-semibold text-white" : "text-slate-500 hover:text-slate-800"),
			children: "Original"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			onClick: () => edit.setShowOriginal(false),
			className: cn("rounded-md px-2.5 py-1.5", !edit.showOriginal ? "bg-slate-900 font-semibold text-white" : "text-slate-500 hover:text-slate-800"),
			children: isChanger ? "Changed" : "Cutout"
		})]
	}) : null;
	const actionRow = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-3.5 flex flex-col gap-2 sm:flex-row",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button$1, {
			onClick: edit.submit,
			disabled: edit.loading,
			className: "h-11 flex-1 gap-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700",
			children: [
				edit.loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-4" }),
				edit.status === "submitting" ? "Submitting edit..." : edit.status === "pending" ? "Generating..." : isChanger ? "Prepare Background" : "Remove Background",
				!edit.loading && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "rounded-md bg-white/15 px-2 py-1 text-xs",
					"aria-live": "polite",
					children: [4, " credits"]
				})
			]
		}), edit.result && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button$1, {
			type: "button",
			variant: "outline",
			disabled: downloading,
			onClick: handleDownload,
			className: "h-11 shrink-0 gap-2 rounded-xl border-slate-200 px-5",
			children: [downloading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-4" }), isChanger ? "Download PNG" : fill.mode === "transparent" ? "Download PNG" : "Download"]
		})]
	});
	const creditLine = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
		className: "mt-2 text-center text-xs leading-relaxed text-slate-500",
		children: [!edit.session?.user ? "10 free trial credits · " : edit.creditBalance !== null ? String(edit.creditBalance) + " credits available · " : "", isChanger ? "Choose a color or photo after cutout" : "Transparent PNG cutout"]
	});
	const loadingOverlay = edit.loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "absolute inset-0 z-20 flex flex-col items-center justify-center bg-white/85 backdrop-blur-sm",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "mb-3 size-8 animate-spin text-blue-600" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-medium text-slate-900",
				children: "Removing background…"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-slate-500",
				children: "You can leave this page. Check My Creations later."
			})
		]
	}) : null;
	const fileInput = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		id: "photo-file",
		type: "file",
		accept: "image/jpeg,image/png,image/webp",
		className: "sr-only",
		onChange: (e) => {
			chooseSourceFile(e.target.files?.[0]);
			e.currentTarget.value = "";
		}
	});
	if (hasResult) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		fileInput,
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid w-full max-w-5xl gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(260px,320px)] lg:items-start",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_16px_40px_-28px_rgba(15,23,42,.4)] sm:p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-2 flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm font-semibold text-slate-800",
							children: "Preview"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => document.getElementById("photo-file")?.click(),
							className: "text-xs font-medium text-blue-600 hover:text-blue-700",
							children: "Replace photo"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [previewSrc && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CutoutPreview, {
							previewSrc,
							showingCutout,
							fill,
							toggle: originalCutoutToggle
						}), loadingOverlay]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-center text-xs font-medium text-slate-500",
						children: showingCutout ? fill.mode === "transparent" ? "Checkered areas are transparent · download matches preview" : "Download will bake in this background" : "Showing the original photo"
					}),
					actionRow,
					creditLine
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BackgroundFillPanel, {
				value: fill,
				onChange: setFill
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditGateDialog, {
			mode: edit.creditGate,
			onClose: () => edit.setCreditGate(null)
		})
	] });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		fileInput,
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto w-full max-w-2xl",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_16px_40px_-28px_rgba(15,23,42,.4)] sm:p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-3.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-2 flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									htmlFor: "photo-file",
									className: "text-sm font-semibold text-slate-800",
									children: "Upload & preview"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs text-slate-400",
									children: "JPG, PNG, WebP · 10 MB"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								role: "button",
								tabIndex: 0,
								onClick: () => document.getElementById("photo-file")?.click(),
								onKeyDown: (e) => {
									if (e.key === "Enter" || e.key === " ") document.getElementById("photo-file")?.click();
								},
								onDragOver: (e) => e.preventDefault(),
								onDrop: (e) => {
									e.preventDefault();
									chooseSourceFile(e.dataTransfer.files?.[0]);
								},
								className: cn("relative cursor-pointer overflow-hidden rounded-xl border-2 border-dashed border-slate-200 text-center transition-colors hover:border-blue-400", previewSrc ? cn("mx-auto w-fit max-w-full border-solid", CHECKER_BG) : "flex min-h-[28rem] w-full flex-col items-center justify-center bg-white px-4 py-5 hover:bg-blue-50/50 sm:min-h-[34rem]"),
								children: [previewSrc ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "relative max-w-full",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: previewSrc,
										alt: "Selected photo",
										className: "block h-auto max-h-[24rem] w-auto max-w-full sm:max-h-[30rem]"
									})
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
										children: isChanger ? "Create a cutout, then choose a color or photo background." : "Preview appears here. After removal you can add a background."
									})
								] }), loadingOverlay]
							}),
							previewSrc && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-center text-xs font-medium text-slate-500",
								children: "Click or drop to replace"
							})
						]
					}),
					actionRow,
					creditLine
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditGateDialog, {
			mode: edit.creditGate,
			onClose: () => edit.setCreditGate(null)
		})
	] });
}
export { BackgroundRemoverWorkspace };
