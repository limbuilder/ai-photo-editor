import { require_jsx_runtime } from "../_libs/@base-ui/react+[...].mjs";
import { envConfigs } from "./ssr.mjs";
import { ArrowRight, CircleCheck, Download, Focus, LoaderCircle, Palette, RotateCcw, ShieldCheck, Sparkles, SunMedium } from "../_libs/lucide-react.mjs";
import { Button$1, DESCRIPTION$2, EDIT_CREDITS, Link$2, PHOTO_EDIT_MODEL_LABEL, absoluteUrl, getPhotoTool } from "./router-FRpG8iox.mjs";
import { Footer, Header } from "./header-HKuvuIrF.mjs";
import { CreditGateDialog, usePhotoEditSession } from "./use-photo-edit-session-CVp1HJYG.mjs";
import { ImageUploadField, QualitySelector } from "./quality-selector-BhI_QpFS.mjs";
// node_modules/.nitro/vite/services/ssr/assets/ai-photo-enhancer-C6U4_5x-.js
var import_jsx_runtime = require_jsx_runtime();
var ENHANCE_EXAMPLE = {
	image: "/images/ai-photo-editor/enhance-photo.jpg",
	alt: "Before and after sharpening a soft mountain lake into a clear landscape",
	caption: "Clarity and color"
};
var enhancerTool = getPhotoTool("enhance-photo");
/** Dedicated enhancer generate shell — shared pieces only, no homepage carousel/prompt. */
function EnhancerWorkspace() {
	const edit = usePhotoEditSession({
		fixedPrompt: enhancerTool?.examplePrompt,
		toolSlug: "enhance-photo",
		restoreDraftPrompt: false
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-4 lg:grid-cols-[minmax(260px,0.68fr)_minmax(0,1.32fr)] lg:items-start",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_16px_40px_-28px_rgba(15,23,42,.4)] sm:p-4 lg:sticky lg:top-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageUploadField, {
					preview: edit.result ? void 0 : edit.preview,
					fileName: edit.file?.name,
					showPreviewThumb: Boolean(edit.preview && !edit.result),
					onFile: edit.chooseFile,
					onClear: edit.clearFile
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QualitySelector, {
					className: "mt-3",
					value: edit.quality,
					disabled: edit.loading,
					onChange: edit.changeQuality
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button$1, {
					onClick: edit.submit,
					disabled: edit.loading,
					className: "mt-3 h-11 w-full gap-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700",
					children: [
						edit.loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-4" }),
						edit.status === "submitting" ? "Submitting edit..." : edit.status === "pending" ? "Generating..." : "Generate Edit",
						!edit.loading && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "rounded-md bg-white/15 px-2 py-1 text-xs",
							"aria-live": "polite",
							children: [edit.selectedQuality.credits, " credits"]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 text-center text-[11px] leading-relaxed text-slate-500",
					children: [
						!edit.session?.user ? "10 free trial credits · " : edit.creditBalance !== null ? String(edit.creditBalance) + " credits available · " : "",
						PHOTO_EDIT_MODEL_LABEL,
						" · ",
						edit.selectedQuality.label
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-h-0 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_22px_50px_-24px_rgba(15,23,42,.55)]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex h-11 shrink-0 items-center justify-between border-b border-slate-100 px-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-full bg-blue-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-semibold text-slate-900",
								children: "Workspace"
							})]
						}),
						!edit.preview && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-600",
							children: ["Example · ", ENHANCE_EXAMPLE.caption]
						}),
						edit.result && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1 rounded-lg bg-slate-100 p-1 text-xs",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => edit.setShowOriginal(true),
								className: "rounded-md px-3 py-1.5 " + (edit.showOriginal ? "bg-white font-semibold shadow-sm" : "text-slate-500"),
								children: "Original"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => edit.setShowOriginal(false),
								className: "rounded-md px-3 py-1.5 " + (!edit.showOriginal ? "bg-white font-semibold shadow-sm" : "text-slate-500"),
								children: "Edited"
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative min-h-[min(70vh,560px)] flex-1 lg:min-h-[520px]",
					children: [edit.preview ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0 flex items-center justify-center bg-[radial-gradient(ellipse_at_top,#f8fafc,#eef2f7)] p-3 sm:p-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: edit.result && !edit.showOriginal ? edit.result : edit.preview,
							alt: edit.result && !edit.showOriginal ? "AI enhanced photo" : "Original photo",
							className: "max-h-full max-w-full rounded-lg object-contain shadow-lg"
						})
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute inset-0 overflow-hidden bg-slate-950",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: ENHANCE_EXAMPLE.image,
							alt: ENHANCE_EXAMPLE.alt,
							width: 1672,
							height: 941,
							className: "size-full object-cover object-center"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "pointer-events-none absolute inset-x-0 top-3 flex justify-between px-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full bg-black/55 px-2.5 py-1 text-[10px] font-semibold tracking-[0.14em] text-white uppercase backdrop-blur-sm",
								children: "Before"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full bg-black/55 px-2.5 py-1 text-[10px] font-semibold tracking-[0.14em] text-white uppercase backdrop-blur-sm",
								children: "After"
							})]
						})]
					}), edit.loading && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute inset-0 flex flex-col items-center justify-center bg-white/85 backdrop-blur-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "mb-4 size-9 animate-spin text-blue-600" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-medium text-slate-900",
								children: "Enhancing your photo"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-slate-500",
								children: "You can leave this page. Check My Creations later."
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex h-12 shrink-0 items-center justify-between gap-3 border-t border-slate-100 px-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-slate-500",
						children: edit.result ? "Enhancement complete — review every detail." : edit.preview ? "Ready to generate your first enhancement." : "Upload your photo to replace this example."
					}), edit.result && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button$1, {
							variant: "outline",
							onClick: edit.editAgain,
							className: "rounded-lg",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-4" }), "Edit Again"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: edit.result,
							download: true,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "inline-flex h-9 items-center gap-2 rounded-lg bg-blue-600 px-4 text-sm font-medium text-white hover:bg-blue-700",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-4" }), "Download"]
						})]
					})]
				})
			]
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditGateDialog, {
		mode: edit.creditGate,
		onClose: () => edit.setCreditGate(null)
	})] });
}
var ENHANCEMENTS = [
	{
		icon: Focus,
		title: "Improve apparent sharpness",
		description: "Bring out definition in slightly soft photos and ask for clearer-looking details, without an exaggerated sharpened effect.",
		image: "/images/ai-photo-editor/enhancer/improve-sharpness.webp"
	},
	{
		icon: SunMedium,
		title: "Balance lighting",
		description: "Brighten dim photos, soften harsh contrast and make the subject easier to see while keeping the mood of the original.",
		image: "/images/ai-photo-editor/enhancer/balance-lighting.webp"
	},
	{
		icon: Palette,
		title: "Refine colors naturally",
		description: "Correct dull or uneven colors, adjust white balance and keep skin tones and product colors as faithful as possible.",
		image: "/images/ai-photo-editor/enhancer/refine-colors.webp"
	}
];
var USE_CASES = [
	{
		title: "Portraits and headshots",
		description: "Make lighting more flattering and improve clarity while asking AI to preserve the person’s identity, expression and natural skin texture.",
		image: "/images/ai-photo-editor/enhancer/portrait-headshots.webp"
	},
	{
		title: "Product photos",
		description: "Improve visual clarity, exposure and color for listings without intentionally changing the shape, branding or design of the product.",
		image: "/images/ai-photo-editor/enhancer/product-photos.webp"
	},
	{
		title: "Travel and everyday photos",
		description: "Give landscapes, indoor scenes and casual snapshots a cleaner, more balanced look without rebuilding the whole scene.",
		image: "/images/ai-photo-editor/enhancer/travel-photos.webp"
	}
];
var WHY_USE = [
	{
		icon: Sparkles,
		title: "Built-in photo enhancement",
		description: "A built-in enhancement improves clarity, lighting and color. Upload a photo, generate, and review it before you download."
	},
	{
		icon: CircleCheck,
		title: "One medium-quality enhancement to start",
		description: "You get 10 guest credits, enough for one medium-quality enhancement. Sign in for 10 more. Compare the original and the result, then download or enhance again."
	},
	{
		icon: ShieldCheck,
		title: "Quality improvements you can review",
		description: "This page improves lighting, clarity and color. It is not a 2x, 4x or 4K upscaler, and output resolution follows the model and quality setting you choose. Your original file stays available so you can check the change."
	}
];
var STEPS = [
	{
		number: "01",
		title: "Upload your photo",
		description: "Choose a JPG, PNG or WebP image up to 10 MB."
	},
	{
		number: "02",
		title: "Choose quality and generate",
		description: "Pick a quality level. A built-in enhancement prompt improves lighting, clarity and color automatically."
	},
	{
		number: "03",
		title: "Generate, compare and download",
		description: "Use your credits to enhance the image, inspect the original and result, then download or refine your edit."
	}
];
var FAQS = [
	["How does this AI photo enhancer work?", "This page improves lighting, clarity and color from a prompt. Results are generative, so small details can change. Always compare the output with your original. The underlying model may be updated over time."],
	["Can AI enhance a blurry photo?", "AI can sometimes make a slightly blurry image look clearer, but it cannot reliably recover details that were never captured. Very blurry faces, text or fine patterns may be changed or invented."],
	["Will the enhancer change people or objects in my photo?", "The suggested prompt asks AI to preserve faces, objects and composition. Because this is generative editing, small details can still change. Always compare the result with your original."],
	["Can I enhance a photo for free without signing up?", `Yes. You can start with 10 free guest credits, which covers one medium-quality enhancement. Signing in gives you another 10 credits. Medium costs ${EDIT_CREDITS} credits, and other quality levels use different amounts.`],
	["Does this tool upscale images to 4K or 4× resolution?", "Not specifically. This is a prompt-based AI photo enhancer rather than a fixed 2×, 4× or 4K upscaler. Output resolution depends on the image generation model and chosen quality settings."],
	["What image formats can I upload?", "You can upload JPG, PNG and WebP files up to 10 MB using your browser on a phone or computer."],
	["Are my photos uploaded immediately?", "Your selected file stays in your browser until you start generation. When you generate, the image is uploaded for processing. See the Privacy Policy for details about storage and data handling."]
];
var jsonLd = JSON.stringify({
	"@context": "https://schema.org",
	"@graph": [
		{
			"@type": "SoftwareApplication",
			name: "AI Photo Enhancer",
			applicationCategory: "MultimediaApplication",
			operatingSystem: "Web",
			url: absoluteUrl("/ai-photo-enhancer"),
			image: absoluteUrl("/images/ai-photo-editor/enhance-photo.jpg"),
			description: DESCRIPTION$2,
			featureList: [
				"Improve apparent sharpness",
				"Balance lighting",
				"Refine colors"
			],
			offers: {
				"@type": "Offer",
				price: "0",
				priceCurrency: "USD",
				description: "10 free guest credits; 10 more credits when signing in"
			},
			provider: {
				"@type": "Organization",
				name: envConfigs.app_name,
				url: envConfigs.app_url
			}
		},
		{
			"@type": "FAQPage",
			mainEntity: FAQS.map(([question, answer]) => ({
				"@type": "Question",
				name: question,
				acceptedAnswer: {
					"@type": "Answer",
					text: answer
				}
			}))
		},
		{
			"@type": "BreadcrumbList",
			itemListElement: [
				{
					"@type": "ListItem",
					position: 1,
					name: "Home",
					item: absoluteUrl("/")
				},
				{
					"@type": "ListItem",
					position: 2,
					name: "AI Tools",
					item: absoluteUrl("/tools")
				},
				{
					"@type": "ListItem",
					position: 3,
					name: "AI Photo Enhancer",
					item: absoluteUrl("/ai-photo-enhancer")
				}
			]
		}
	]
});
function PhotoEnhancerPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-[#f7f9fc] text-slate-900",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "border-b border-slate-200 bg-gradient-to-b from-[#edf4ff] via-[#f8fbff] to-[#f7f9fc] px-4 pt-9 pb-12 sm:px-6 sm:pt-12",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-[1320px]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mx-auto mb-7 max-w-3xl text-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-[2.75rem]",
									children: "AI Photo Enhancer Online"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base",
									children: "Improve lighting, clarity and colors automatically. Upload your photo, generate an enhancement, and compare it with the original before you download."
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								id: "enhancer",
								className: "scroll-mt-24",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EnhancerWorkspace, {})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium text-slate-600",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "inline-flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-4 text-blue-600" }), "10 free credits to start"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "inline-flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-4 text-blue-600" }), "No sign-up required to try"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "inline-flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-4 text-blue-600" }), "Compare with the original"]
									})
								]
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-3 text-xs font-semibold tracking-widest text-blue-600 uppercase",
							children: "Photo quality enhancement"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl",
							children: "What Can an AI Photo Enhancer Improve?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-2xl leading-7 text-slate-600",
							children: "Ask for clearer details, more balanced light, or more natural color. Results are generative: inspect faces and fine details against the original."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-9 grid gap-5 md:grid-cols-3",
							children: ENHANCEMENTS.map((item) => {
								const Icon = item.icon;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
									className: "flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: item.image,
											alt: `Before and after: ${item.title}`,
											width: 1106,
											height: 812,
											loading: "lazy",
											decoding: "async",
											className: "mb-5 aspect-[1106/812] w-full rounded-xl bg-slate-100 object-cover"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "inline-flex size-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-5" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "mt-4 text-lg font-semibold",
											children: item.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-3 text-sm leading-7 text-slate-600",
											children: item.description
										})
									]
								}, item.title);
							})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-3 text-xs font-semibold tracking-widest text-blue-600 uppercase",
							children: "Everyday use cases"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-3xl font-bold tracking-tight sm:text-4xl",
							children: "Enhance Portraits, Products and Everyday Photos"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 grid gap-5 md:grid-cols-3",
							children: USE_CASES.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 sm:p-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: item.image,
										alt: `Before and after AI enhancement for ${item.title}`,
										width: 1106,
										height: 812,
										loading: "lazy",
										decoding: "async",
										className: "mb-5 aspect-[1106/812] w-full rounded-xl bg-slate-100 object-cover"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-lg font-semibold",
										children: item.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-sm leading-7 text-slate-600",
										children: item.description
									})
								]
							}, item.title))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex items-start gap-3 rounded-xl border border-slate-200 bg-white px-5 py-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "mt-0.5 size-5 shrink-0 text-blue-600" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm leading-7 text-slate-600",
								children: "Generative enhancement is not lossless restoration. Photos with very strong blur, missing pixels or illegible text can gain plausible-looking but inaccurate details. Check faces, labels and important objects against the original."
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-3 text-xs font-semibold tracking-widest text-blue-600 uppercase",
							children: "Why use it"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl",
							children: "Why Use This AI Photo Enhancer"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-9 grid gap-5 md:grid-cols-3",
							children: WHY_USE.map((item) => {
								const Icon = item.icon;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
									className: "rounded-2xl border border-slate-200 bg-white p-6 shadow-sm",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "inline-flex size-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-5" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "mt-5 text-lg font-semibold",
											children: item.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-3 text-sm leading-7 text-slate-600",
											children: item.description
										})
									]
								}, item.title);
							})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "border-t border-slate-200 bg-white px-4 py-16 sm:px-6 sm:py-20",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-6xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center justify-between gap-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mb-3 text-xs font-semibold tracking-widest text-blue-600 uppercase",
								children: "Three simple steps"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-3xl font-bold tracking-tight sm:text-4xl",
								children: "How to Enhance a Photo with AI"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#enhancer",
								className: "inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700",
								children: ["Enhance my photo ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-9 grid gap-5 md:grid-cols-3",
							children: STEPS.map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "rounded-2xl border border-slate-100 bg-slate-50 p-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm font-bold text-blue-600",
										children: step.number
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-4 text-lg font-semibold",
										children: step.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-sm leading-7 text-slate-600",
										children: step.description
									})
								]
							}, step.number))
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "faq",
					className: "border-t border-slate-200 bg-white px-4 py-16 sm:px-6 sm:py-20",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-4xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-3xl font-bold tracking-tight sm:text-4xl",
								children: "AI Photo Enhancer FAQ"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6",
								children: FAQS.map(([question, answer]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "border-b border-slate-200 py-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-lg font-semibold",
										children: question
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-sm leading-7 text-slate-600",
										children: answer
									})]
								}, question))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-6 text-sm text-slate-600",
								children: [
									"See our",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$2, {
										href: "/privacy-policy",
										className: "font-semibold text-blue-600 hover:underline",
										children: "Privacy Policy"
									}),
									" ",
									"for more on photo processing and storage."
								]
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "px-4 py-14 sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto flex max-w-6xl flex-col items-start justify-between gap-5 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm sm:flex-row sm:items-center sm:p-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-2xl font-bold tracking-tight text-slate-950",
							children: "Ready to improve your photo?"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 max-w-xl text-sm leading-6 text-slate-600",
							children: [
								"Upload a photo, choose a quality level, and preview the enhanced result. A medium-quality edit costs ",
								EDIT_CREDITS,
								" credits."
							]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#enhancer",
							className: "inline-flex shrink-0 items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-500",
							children: ["Enhance photo ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mx-auto mt-5 max-w-6xl text-center text-sm text-slate-500",
						children: [
							"Looking for a different edit? Open the",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$2, {
								href: "/",
								className: "font-semibold text-blue-600 hover:underline",
								children: "AI photo editor"
							}),
							" ",
							"or browse",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$2, {
								href: "/tools",
								className: "font-semibold text-blue-600 hover:underline",
								children: "AI photo editing tools"
							}),
							"."
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
					type: "application/ld+json",
					dangerouslySetInnerHTML: { __html: jsonLd }
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
export { PhotoEnhancerPage as component };
