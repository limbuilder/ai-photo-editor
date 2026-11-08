import { __toESM } from "../_runtime.mjs";
import { require_jsx_runtime, require_react } from "../_libs/@base-ui/react+[...].mjs";
import { envConfigs } from "./ssr.mjs";
import { ArrowRight, CircleCheck, Download, Layers, LoaderCircle, RotateCcw, Sparkles, WandSparkles } from "../_libs/lucide-react.mjs";
import { Button$1, EDIT_CREDITS, HOME_DESCRIPTION, Link$2, PHOTO_EDIT_MODEL_LABEL, PHOTO_TOOLS, cn } from "./router-FRpG8iox.mjs";
import { Footer, Header } from "./header-HKuvuIrF.mjs";
import { CreditGateDialog, usePhotoEditSession } from "./use-photo-edit-session-CVp1HJYG.mjs";
import { ImageUploadField, QualitySelector } from "./quality-selector-BhI_QpFS.mjs";
import { Pricing } from "./pricing-xnmXPzRX.mjs";
// node_modules/.nitro/vite/services/ssr/assets/routes-DYGQWvdy.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var BENEFITS = [
	{
		id: "preserve-subject",
		title: "Change What You Want, Keep What Matters",
		description: "Change the background or other details while keeping the main subject's shape, colors, and defining features as close to the original as possible.",
		image: "/images/ai-photo-editor/core-benefits/handbag-background-compare.jpg",
		beforeAlt: "Handbag on a wooden table in a home setting, before changing the background",
		afterAlt: "Same beige handbag against a clean studio background"
	},
	{
		id: "precision-editing",
		title: "Edit Small Details, Not the Whole Photo",
		description: "Fix scuffs, smooth wrinkles, or adjust specific details without unnecessarily changing everything else.",
		image: "/images/ai-photo-editor/core-benefits/shoe-repair-compare.jpg",
		beforeAlt: "Leather sneaker with visible scuff marks on the toe",
		afterAlt: "Same leather sneaker with the scuff marks cleaned up"
	},
	{
		id: "natural-language",
		title: "Just Describe It, AI Handles the Rest",
		description: "Skip complicated selections and layers. Simply describe the change in everyday language and see the edit take shape.",
		image: "/images/ai-photo-editor/core-benefits/balcony-cleanup-compare.jpg",
		beforeAlt: "Balcony with a bucket, mop and cleaning supplies",
		afterAlt: "Same balcony after unwanted cleaning supplies were removed"
	},
	{
		id: "creative-transformation",
		title: "Give Your Photos a Whole New Look",
		description: "Explore new backgrounds, lighting, colors, and styles while keeping your original subject recognizable.",
		image: "/images/ai-photo-editor/core-benefits/cafe-golden-hour-compare.jpg",
		beforeAlt: "Cafe storefront in soft overcast daylight",
		afterAlt: "Same cafe storefront with warm golden-hour lighting"
	},
	{
		id: "iterative-editing",
		title: "Refine Your Edits, Step by Step",
		description: "Keep improving your result with follow-up edits, from cleanup to lighting and finishing touches.",
		image: "/images/ai-photo-editor/core-benefits/home-office-refresh-compare.jpg",
		beforeAlt: "Cluttered home office before editing and refining details",
		afterAlt: "Same home office tidied up with warmer lighting and refined styling"
	}
];
/**
* Feature imagery contains two side-by-side scenes in one image.
* Render its left and right halves as separate, responsive panels.
* Each photo is a visual example, not a pixel-perfect preservation guarantee.
*/
function ComparisonPanel({ image, side, alt }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative aspect-[3/4] min-w-0 overflow-hidden rounded-xl bg-slate-100",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: image,
			alt,
			loading: "lazy",
			decoding: "async",
			width: 1448,
			height: 1086,
			className: `absolute top-0 h-full w-[200%] max-w-none object-cover ${side === "before" ? "left-0 object-left" : "right-0 object-right"}`
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: `absolute bottom-2 left-2 rounded-full px-3 py-1 text-xs font-semibold text-white shadow-sm ${side === "before" ? "bg-slate-900/70" : "bg-blue-600"}`,
			children: side === "before" ? "Before" : "After"
		})]
	});
}
function CoreBenefits() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "core-benefits",
		"aria-labelledby": "core-benefits-heading",
		className: "mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-9 text-center sm:mb-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				id: "core-benefits-heading",
				className: "text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl",
				children: "Powerful AI Photo Editing, Made Simple"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mx-auto mt-4 max-w-3xl leading-7 text-slate-600",
				children: "Make targeted edits, preserve important details, and transform your photos with simple instructions."
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-4 sm:space-y-5",
			children: BENEFITS.map((benefit, index) => {
				const picture = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid min-w-0 grid-cols-2 gap-2.5 sm:gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ComparisonPanel, {
						image: benefit.image,
						side: "before",
						alt: benefit.beforeAlt
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ComparisonPanel, {
						image: benefit.image,
						side: "after",
						alt: benefit.afterAlt
					})]
				});
				const copy = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex min-w-0 flex-col justify-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-xl font-bold tracking-tight text-slate-950 sm:text-2xl",
						children: benefit.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-xl leading-7 text-slate-600",
						children: benefit.description
					})]
				});
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "grid items-center gap-6 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6 lg:grid-cols-2 lg:gap-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: index % 2 === 0 ? "lg:order-1" : "lg:order-2",
						children: picture
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: index % 2 === 0 ? "lg:order-2" : "lg:order-1",
						children: copy
					})]
				}, benefit.id);
			})
		})]
	});
}
var QUICK_PROMPTS = [
	{
		id: "change-background",
		label: "Change Background",
		caption: "Background change",
		image: "/images/ai-photo-editor/remove-background.jpg",
		alt: "Before and after placing a portrait on a beach background",
		text: "Replace the background with a clean professional studio backdrop while preserving the original subject and details."
	},
	{
		id: "remove-object",
		label: "Remove Object",
		caption: "Object removal",
		image: "/images/ai-photo-editor/remove-object.jpg",
		alt: "Before and after removing a trash bin from a beach photo",
		text: "Remove the unwanted object from the background. Reconstruct the area naturally and keep everything else unchanged."
	},
	{
		id: "enhance-photo",
		label: "Enhance Photo",
		caption: "Clarity and color",
		image: "/images/ai-photo-editor/enhance-photo.jpg",
		alt: "Before and after sharpening a soft mountain lake into a clear landscape",
		text: "Improve lighting, sharpness and colors naturally without changing the subject."
	},
	{
		id: "change-style",
		label: "Change Style",
		caption: "Style change",
		image: "/images/ai-photo-editor/restyle-photo.jpg",
		alt: "Before and after restyling a portrait with cinematic sunset colors",
		text: "Give this photo a cinematic look with refined lighting and colors. Preserve the main subject and composition."
	}
];
/** Homepage general editor shell — prompt, chips, and example carousel. */
function PhotoEditorWorkspace() {
	const edit = usePhotoEditSession({ toolSlug: "general" });
	const [exampleId, setExampleId] = (0, import_react.useState)("change-background");
	const [examplePaused, setExamplePaused] = (0, import_react.useState)(false);
	const example = QUICK_PROMPTS.find((item) => item.id === exampleId) ?? QUICK_PROMPTS[0];
	(0, import_react.useEffect)(() => {
		for (const item of QUICK_PROMPTS) {
			const img = new Image();
			img.src = item.image;
		}
	}, []);
	(0, import_react.useEffect)(() => {
		if (edit.preview || examplePaused) return;
		const timer = window.setInterval(() => {
			setExampleId((current) => {
				return QUICK_PROMPTS[(QUICK_PROMPTS.findIndex((item) => item.id === current) + 1) % QUICK_PROMPTS.length].id;
			});
		}, 4e3);
		return () => window.clearInterval(timer);
	}, [
		edit.preview,
		examplePaused,
		exampleId
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-4 lg:grid-cols-[minmax(280px,0.72fr)_minmax(0,1.28fr)] lg:items-stretch",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_16px_40px_-28px_rgba(15,23,42,.4)] sm:p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageUploadField, {
					preview: edit.result ? void 0 : edit.preview,
					fileName: edit.file?.name,
					showPreviewThumb: Boolean(edit.preview && !edit.result),
					onFile: edit.chooseFile,
					onClear: edit.clearFile
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3.5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-2 flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: "photo-prompt",
								className: "text-sm font-semibold text-slate-800",
								children: "Describe your edit"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-xs text-slate-400",
								children: [edit.prompt.length, "/2000"]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							id: "photo-prompt",
							rows: 3,
							value: edit.prompt,
							maxLength: 2e3,
							onChange: (e) => edit.changePrompt(e.target.value),
							placeholder: "What would you like to change? e.g. Remove the person in the background while keeping the main subject unchanged.",
							className: "w-full resize-y rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm leading-relaxed text-slate-900 outline-none placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 flex [scrollbar-width:none] flex-nowrap gap-1.5 overflow-x-auto [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden",
							children: QUICK_PROMPTS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => {
									edit.changePrompt(item.text);
									setExampleId(item.id);
								},
								className: "shrink-0 rounded-full border border-slate-200 bg-white px-2.5 py-1.5 text-xs leading-none font-medium whitespace-nowrap text-slate-600 transition-colors hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700",
								children: item.label
							}, item.id))
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QualitySelector, {
					className: "mt-3.5",
					value: edit.quality,
					disabled: edit.loading,
					onChange: edit.changeQuality
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button$1, {
					onClick: edit.submit,
					disabled: edit.loading,
					className: "mt-3.5 h-11 w-full gap-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700",
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
					className: "mt-2 text-center text-xs leading-relaxed text-slate-500",
					children: [
						!edit.session?.user ? "10 free trial credits · " : edit.creditBalance !== null ? String(edit.creditBalance) + " credits available · " : "",
						"Model: ",
						PHOTO_EDIT_MODEL_LABEL,
						" · ",
						edit.selectedQuality.label,
						" · original aspect ratio"
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-h-0 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_22px_50px_-24px_rgba(15,23,42,.55)]",
			onMouseEnter: () => {
				if (!edit.preview) setExamplePaused(true);
			},
			onMouseLeave: () => setExamplePaused(false),
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
							children: ["Example · ", example.caption]
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
							alt: edit.result && !edit.showOriginal ? "AI edited photo" : "Original photo",
							className: "max-h-full max-w-full rounded-lg object-contain shadow-lg"
						})
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute inset-0 overflow-hidden bg-slate-950",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: example.image,
							alt: example.alt,
							width: 1672,
							height: 941,
							"data-example-id": example.id,
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
								children: "Editing your photo"
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
						children: edit.result ? "Edit complete — review every detail." : edit.preview ? "Ready to generate your first edit." : "Upload your photo to replace this example."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [!edit.preview && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex items-center gap-1.5",
							role: "tablist",
							"aria-label": "Example edits",
							children: QUICK_PROMPTS.map((item) => {
								const current = item.id === example.id;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									role: "tab",
									"aria-selected": current,
									"aria-label": item.caption,
									"data-example-dot": item.id,
									onClick: () => setExampleId(item.id),
									className: "group flex size-4 items-center justify-center",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("pointer-events-none rounded-full", current ? "h-1.5 w-4 bg-blue-600" : "size-1.5 bg-slate-300 group-hover:bg-slate-400") })
								}, item.id);
							})
						}), edit.result && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button$1, {
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
						})] })]
					})]
				})
			]
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditGateDialog, {
		mode: edit.creditGate,
		onClose: () => edit.setCreditGate(null)
	})] });
}
var FAQS = [
	["Is this AI photo editor really free?", `Yes to start. You get 10 free credits without signing in (enough for one medium-quality edit). Sign in and you get 10 more. A medium-quality edit uses ${EDIT_CREDITS} credits; other qualities use more or fewer. One-time credit packs are available when you need more.`],
	["Can I use it without signing up?", "Yes. Upload a photo, write a prompt, and generate with your 10 guest credits — no account required. Sign in anytime for 10 more credits and to keep results in My Creations."],
	["Does it work on iPhone or Android without an app?", "Yes. Use a modern browser on iPhone, Android, Mac, or Windows. No additional app installation is needed."],
	["What happens to my photos after editing?", "Before generation, your selected photo stays in your browser. When you generate, it is uploaded for processing and the result is stored so you can access My Creations after signing in. We do not promise automatic deletion; see the Privacy Policy for data-handling information."],
	["Are my uploaded photos private and secure?", "Before you generate, your selected photo stays in your browser. When you generate, it is sent securely for processing so we can return your edit. We use encryption in transit and access controls; see the Privacy Policy for details."],
	["How long do you store my photos?", "After generation, uploads and results are stored so signed-in users can reopen them in My Creations. We do not promise automatic deletion after a fixed period. Contact us if you want data removed sooner."],
	["Are my photos used to train AI models?", "No. We use your photos only to generate the edits you request. We do not use your uploads or results to train AI models."],
	["Can I delete my uploaded and generated photos?", "Yes. You can request deletion of your personal data, including uploaded and generated photos, through your account settings or by emailing support@getaiphotoeditor.com."],
	["Will my credits be refunded if generation fails?", "Yes. If an edit fails or is canceled, the credits used for that job are restored to your balance automatically."]
];
var structuredDataJsonLd = JSON.stringify({
	"@context": "https://schema.org",
	"@graph": [
		{
			"@type": "WebSite",
			name: envConfigs.app_name,
			url: envConfigs.app_url,
			description: HOME_DESCRIPTION
		},
		{
			"@type": "SoftwareApplication",
			name: envConfigs.app_name,
			applicationCategory: "MultimediaApplication",
			operatingSystem: "Web",
			url: envConfigs.app_url,
			description: HOME_DESCRIPTION,
			offers: {
				"@type": "Offer",
				price: "0",
				priceCurrency: "USD",
				description: `10 free credits without signing in; 10 more after sign-in. A medium-quality edit uses ${EDIT_CREDITS} credits; credits vary by quality`
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
		}
	]
});
var FEATURES = [
	{
		title: "Remove and Replace Backgrounds",
		description: "Create a subject cutout, then choose a studio color, preset scene, or your own background photo.",
		href: "/photo-background-changer",
		cta: "Open Photo Background Changer"
	},
	{
		title: "Retouch Portraits and Skin",
		description: "Ask for subtle skin cleanup, softer lighting, or a polished headshot while keeping the person recognizable."
	},
	{
		title: "Enhance Blurry or Low-Quality Photos",
		description: "Improve apparent clarity, lighting, and colors. Generative edits cannot guarantee recovery of lost image details.",
		href: "/ai-photo-enhancer",
		cta: "Open AI Photo Enhancer"
	},
	{
		title: "Erase Objects and People",
		description: "Remove an unwanted item or passerby and ask AI to reconstruct the surrounding background naturally."
	},
	{
		title: "Restyle Photos With Text Prompts",
		description: "Describe cinematic light, a golden-hour mood, vintage color, or another creative look using plain words."
	},
	{
		title: "Remove Clothing Wrinkles",
		description: "Smooth creases and wrinkles in shirts, dresses, or other garments while keeping the fabric texture, fit, and overall look natural."
	}
];
var FEATURE_IMAGES = [
	"/images/ai-photo-editor/remove-background.jpg",
	"/images/ai-photo-editor/portrait-retouch.jpg",
	"/images/ai-photo-editor/enhance-photo.jpg",
	"/images/ai-photo-editor/remove-object.jpg",
	"/images/ai-photo-editor/restyle-photo.jpg",
	"/images/ai-photo-editor/remove-clothing-wrinkles.jpg"
];
var USE_CASES = [
	[
		"E-commerce and Product Sellers",
		"Prepare cleaner product backgrounds and more consistent-looking listing images with a simple description.",
		"/images/ai-photo-editor/who-uses/ecommerce.png"
	],
	[
		"Social Creators",
		"Refresh profile photos, social posts, and thumbnails without installing another app.",
		"/images/ai-photo-editor/who-uses/social-creators.png"
	],
	[
		"Photographers",
		"Experiment with object cleanup, skin retouching, and creative lighting, then review every detail.",
		"/images/ai-photo-editor/who-uses/photographers.png"
	],
	[
		"Real Estate",
		"Explore brighter interiors and sky changes. Keep listing images accurate and disclose material changes as required.",
		"/images/ai-photo-editor/who-uses/real-estate.png"
	]
];
function HomePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-[#f7f9fc] text-slate-900",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "relative overflow-x-clip border-b border-slate-100 bg-gradient-to-b from-[#f1f6ff] via-[#f9fbff] to-[#f7f9fc] px-4 pt-6 pb-8 sm:px-6 sm:pt-8 sm:pb-10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-[1320px]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-5 text-center sm:mb-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "text-[1.65rem] font-bold tracking-[-0.035em] text-slate-950 sm:text-[2rem] sm:leading-none",
									children: "AI Photo Editor Online"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm leading-5 text-slate-600",
									children: "Upload a photo and describe the edit — 10 free credits, no signup."
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								id: "editor",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhotoEditorWorkspace, {})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium text-slate-500",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "inline-flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-4 text-blue-600" }), " 10 free credits to start"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "inline-flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-4 text-blue-600" }), " No app to install"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "inline-flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-4 text-blue-600" }), " Original photo kept intact"]
									})
								]
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CoreBenefits, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: "features",
					className: "mx-auto max-w-6xl px-4 pb-20 sm:px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-3 text-xs font-semibold tracking-widest text-blue-600 uppercase",
							children: "AI photo editing features"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-3xl font-bold tracking-tight sm:text-4xl",
							children: "What You Can Do With Our AI Photo Editor"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-2xl leading-7 text-slate-600",
							children: "Use a task-specific tool or write your own instruction for a quick fix or creative transformation."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-3",
							children: FEATURES.map((feature, index) => {
								const card = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: FEATURE_IMAGES[index],
										alt: `Before and after AI photo edit: ${feature.title}`,
										width: 1672,
										height: 941,
										loading: "lazy",
										decoding: "async",
										className: "mb-5 aspect-[1672/941] w-full rounded-xl bg-slate-100 object-cover"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-lg font-semibold",
										children: feature.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 flex-1 text-sm leading-7 text-slate-600",
										children: feature.description
									}),
									"href" in feature && feature.href ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600",
										children: [
											feature.cta,
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })
										]
									}) : null
								] });
								const className = "flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md sm:p-6" + ("href" in feature && feature.href ? " hover:border-blue-200" : "");
								return "href" in feature && feature.href ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$2, {
									href: feature.href,
									className,
									children: card
								}, feature.title) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
									className,
									children: card
								}, feature.title);
							})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "border-y border-slate-200 bg-white px-4 py-20 sm:px-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-6xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-center text-3xl font-bold tracking-tight sm:text-4xl",
								children: "How to Edit a Photo With AI"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-center text-slate-500",
								children: "Three steps to your edited image."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-10 grid gap-5 md:grid-cols-3",
								children: [
									[
										"01",
										"Upload your photo",
										"Choose a JPG, PNG or WebP image up to 10 MB. No account needed to start."
									],
									[
										"02",
										"Describe the change",
										"Try “remove the background”, “make it look like golden hour”, or “clear acne while keeping the face natural”."
									],
									[
										"03",
										"Generate and download",
										`Generate an edit with your free credits, inspect the result, then download or refine it. A medium-quality edit uses ${EDIT_CREDITS} credits. Sign in for 10 more credits and My Creations.`
									]
								].map(([number, title, description]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-2xl border border-slate-100 bg-slate-50 p-7",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-sm font-bold text-blue-600",
											children: number
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "mt-4 text-lg font-semibold",
											children: title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 text-sm leading-7 text-slate-600",
											children: description
										})
									]
								}, number))
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mx-auto max-w-6xl px-4 py-20 sm:px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-3 text-xs font-semibold tracking-widest text-blue-600 uppercase",
							children: "Use cases"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-3xl font-bold tracking-tight sm:text-4xl",
							children: "Who Uses It"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-9 grid gap-5 md:grid-cols-2",
							children: USE_CASES.map(([title, description, image]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md sm:p-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: image,
										alt: `AI photo editing for ${title}`,
										width: 1448,
										height: 1086,
										loading: "lazy",
										decoding: "async",
										className: "mb-5 aspect-[1448/1086] w-full rounded-xl bg-slate-100 object-cover"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-lg font-semibold",
										children: title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-sm leading-7 text-slate-600",
										children: description
									})
								]
							}, title))
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pricing, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: "faq",
					className: "mx-auto max-w-4xl px-4 py-20 sm:px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-3xl font-bold tracking-tight sm:text-4xl",
							children: "FAQ"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-slate-500",
							children: "Questions about AI photo editing online."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-7",
							children: FAQS.map(([question, answer]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "border-b border-slate-200 py-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-lg font-semibold text-slate-900",
									children: question
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm leading-7 text-slate-600",
									children: answer
								})]
							}, question))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-5 text-sm text-slate-500",
							children: [
								"See our",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$2, {
									href: "/privacy-policy",
									className: "font-semibold text-blue-600 hover:underline",
									children: "Privacy Policy"
								}),
								" ",
								"for additional information about data handling."
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "tools",
					className: "border-t border-slate-200 bg-white px-4 py-20 sm:px-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-6xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-10 flex flex-wrap items-end justify-between gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mb-3 text-xs font-semibold tracking-widest text-blue-600 uppercase",
									children: "Explore tools"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-3xl font-bold tracking-tight sm:text-4xl",
									children: "More AI Photo Tools"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-3 max-w-xl text-slate-500",
									children: [
										"Open a task-focused editor. Start with free credits. A medium-quality edit uses ",
										EDIT_CREDITS,
										" credits; other qualities cost more or less."
									]
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link$2, {
								href: "/tools",
								className: "inline-flex items-center gap-2 text-sm font-semibold text-blue-600",
								children: ["All AI tools ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-5 md:grid-cols-3",
							children: PHOTO_TOOLS.map((tool, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link$2, {
								href: tool.slug === "remove-background" ? "/ai-background-remover" : tool.slug === "enhance-photo" ? "/ai-photo-enhancer" : tool.slug === "change-background" ? "/photo-background-changer" : "#editor",
								className: "group overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mb-8 inline-flex size-12 items-center justify-center rounded-xl " + (i === 0 ? "bg-blue-50 text-blue-600" : i === 1 ? "bg-indigo-50 text-indigo-600" : "bg-sky-50 text-sky-600"),
										children: i === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WandSparkles, { className: "size-6" }) : i === 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, { className: "size-6" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-6" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-lg font-semibold",
										children: tool.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 min-h-16 text-sm leading-6 text-slate-500",
										children: tool.description
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-600",
										children: [
											"Open tool",
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4 transition-transform group-hover:translate-x-1" })
										]
									})
								]
							}, tool.slug))
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
					type: "application/ld+json",
					dangerouslySetInnerHTML: { __html: structuredDataJsonLd }
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
export { HomePage as component };
