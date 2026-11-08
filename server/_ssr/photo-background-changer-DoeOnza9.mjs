import { require_jsx_runtime } from "../_libs/@base-ui/react+[...].mjs";
import { envConfigs } from "./ssr.mjs";
import { ArrowRight, CircleCheck, ImagePlus, Layers, Palette, ShieldCheck } from "../_libs/lucide-react.mjs";
import { DESCRIPTION, Link$2, PATH, absoluteUrl } from "./router-FRpG8iox.mjs";
import { Footer, Header } from "./header-HKuvuIrF.mjs";
import { BackgroundRemoverWorkspace } from "./background-remover-workspace-dkrh9nte.mjs";
// node_modules/.nitro/vite/services/ssr/assets/photo-background-changer-DoeOnza9.js
var import_jsx_runtime = require_jsx_runtime();
function BackgroundChangeComparison({ comparisonSrc, comparisonAlt, beforeLabel, afterLabel }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl border border-slate-200 bg-white p-3 shadow-[0_16px_45px_-30px_rgba(15,23,42,0.28)] sm:p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative overflow-hidden rounded-xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: comparisonSrc,
					alt: comparisonAlt,
					width: 512,
					height: 384,
					loading: "lazy",
					decoding: "async",
					className: "block aspect-[4/3] w-full object-cover"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "absolute top-3 left-3 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-slate-900 shadow-sm",
					children: "Before"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "absolute top-3 right-3 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white shadow-sm",
					children: "After"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-3 grid grid-cols-2 gap-3 text-center text-xs font-medium text-slate-500 sm:text-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: beforeLabel }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: afterLabel })]
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
		className: "mt-3 text-center text-xs leading-5 text-slate-500",
		children: "Illustrative before-and-after comparison. Check the actual result for cutout edges, shadows and lighting."
	})] });
}
var FEATURES = [
	{
		icon: ShieldCheck,
		title: "Keep your original subject",
		description: "AI isolates the original person, product or pet as a transparent cutout instead of generating a new subject. Review delicate edges before downloading."
	},
	{
		icon: Palette,
		title: "Choose any background color",
		description: "Pick white, beige, blue or another preset, or choose your own solid color. Try several colors with the same cutout."
	},
	{
		icon: ImagePlus,
		title: "Use a photo background",
		description: "Select one of our background photos or upload your own JPG, PNG or WebP. A new background choice does not trigger another AI edit."
	}
];
var SCENARIOS = [{
	eyebrow: "For online shops",
	title: "Change Product Photo Backgrounds",
	intro: "Give product images a cleaner, more consistent look without reshooting each item. Remove a distracting table, room or shelf and place your cutout against a neutral studio background.",
	detail: "A white or softly colored background can keep the focus on the item for an online listing, catalog or promotional graphic. You can compare several backgrounds using one prepared cutout, and download the option that suits your store.",
	tip: "Check the outline of handles, straps, reflective surfaces and any original shadows before using the result in a product listing.",
	comparisonImage: "/images/ai-photo-editor/core-benefits/handbag-background-compare.jpg",
	comparisonAlt: "Before and after comparison of the same beige handbag, from a furnished room to a clean beige studio background",
	beforeLabel: "Room backdrop",
	afterLabel: "Clean studio"
}, {
	eyebrow: "For profile pictures and travel memories",
	title: "Change Portrait Backgrounds",
	intro: "Replace a busy location behind a portrait with a softer outdoor setting, an office-style background or your own photograph. Keep the person in the foreground from your original image.",
	detail: "This is useful for profile pictures, personal graphics and social posts when the background distracts from the subject. Choose a preset scene, or upload a photo that fits the context you want.",
	tip: "Loose hair, transparent clothing and differences in lighting may look less natural after compositing. Review those areas before sharing.",
	comparisonImage: "/images/ai-photo-editor/remove-background.jpg",
	comparisonAlt: "Same smiling woman in a white top with a transparent background on the left and a beach scene on the right",
	beforeLabel: "Transparent cutout",
	afterLabel: "Beach backdrop"
}];
var COLOR_SWATCHES = [
	{
		label: "Studio white",
		color: "#ffffff",
		border: true
	},
	{
		label: "Soft blue",
		color: "#cfe5ff",
		border: false
	},
	{
		label: "Warm beige",
		color: "#ead7c4",
		border: false
	},
	{
		label: "Blush pink",
		color: "#f8dbe1",
		border: false
	},
	{
		label: "Mint green",
		color: "#d2eee3",
		border: false
	},
	{
		label: "Custom color",
		color: "conic-gradient(#ef4444, #eab308, #22c55e, #06b6d4, #3b82f6, #a855f7, #ef4444)",
		border: false
	}
];
var WHITE_STEPS = [
	{
		title: "Upload your photo",
		description: "Choose a JPG, PNG or WebP image up to 10 MB with a clearly visible subject."
	},
	{
		title: "Prepare the cutout",
		description: "Click Prepare Background. The AI isolates the subject for 4 credits."
	},
	{
		title: "Pick a white background",
		description: "Select Studio white, or dial in a custom off-white with the color picker. Preview and download the PNG."
	}
];
var STEPS = [
	{
		title: "Upload your photo",
		description: "Choose a JPG, PNG or WebP image up to 10 MB. A clearly visible subject works best."
	},
	{
		title: "Prepare the cutout",
		description: "Click Prepare Background. The AI removes the original background for 4 credits."
	},
	{
		title: "Add a new background",
		description: "Select a solid color, photo preset, or your own background image. Preview and download the PNG."
	}
];
var FAQS = [
	{
		question: "How do I change the background of a photo?",
		answer: "Upload your original photo, prepare the transparent subject cutout, and then select a color, preset scene or custom background image. Download the composition as PNG."
	},
	{
		question: "Can I change a photo background to white?",
		answer: "Yes. You can make the background white with the Studio white preset, or change the background to white with a custom hex near pure white. That covers clean product shots, softer off-white looks, and simple profile graphics—inspect edges and contrast before you download."
	},
	{
		question: "Can I use my own image as the new background?",
		answer: "Yes. After preparing the cutout, select the Photo tab and upload a JPG, PNG or WebP background image up to 10 MB."
	},
	{
		question: "Is the photo background changer free to try?",
		answer: "Yes. You start with 10 guest credits without signing up. The AI subject cutout costs 4 credits. Once the cutout is ready, switching among available colors and backgrounds does not cost additional credits."
	},
	{
		question: "Will the subject in my photo stay the same?",
		answer: "The original foreground pixels are composited over the new background instead of redrawing the subject. Fine hair, glass, transparent fabric and shadows may still need review. Lighting on the subject is not automatically changed to match the new scene."
	},
	{
		question: "Can I describe a new AI-generated background in words?",
		answer: "Not on this page. Here you can choose a color, a preset photo, or upload your own background. For prompt-based scene generation, use the main AI Photo Editor."
	},
	{
		question: "Can I also download a transparent PNG?",
		answer: "Yes. Select the Transparent option in the Color tab. For a dedicated transparent-cutout workflow, use our transparent background maker."
	},
	{
		question: "Which formats can I upload and download?",
		answer: "The source image and custom background upload support JPG, PNG and WebP up to 10 MB. Download the finished composition as a PNG."
	},
	{
		question: "What if the AI cutout fails?",
		answer: "Reserved credits are automatically returned if the background-removal task fails. Check the Privacy Policy for details about how uploaded images are handled."
	}
];
var REMOVER_LINK_FAQ = "Can I also download a transparent PNG?";
var REMOVER_LINK_LABEL = "transparent background maker";
function FaqAnswer({ question, answer }) {
	if (question !== REMOVER_LINK_FAQ) return answer;
	const index = answer.lastIndexOf(REMOVER_LINK_LABEL);
	if (index < 0) return answer;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		answer.slice(0, index),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$2, {
			href: "/ai-background-remover",
			className: "font-semibold text-blue-600 hover:underline",
			children: REMOVER_LINK_LABEL
		}),
		answer.slice(index + 28)
	] });
}
var jsonLd = JSON.stringify({
	"@context": "https://schema.org",
	"@graph": [
		{
			"@type": "SoftwareApplication",
			name: "Photo Background Changer",
			applicationCategory: "MultimediaApplication",
			operatingSystem: "Web",
			url: absoluteUrl(PATH),
			description: DESCRIPTION,
			image: absoluteUrl("/images/ai-photo-editor/core-benefits/handbag-background-compare.jpg"),
			featureList: [
				"AI foreground cutout",
				"Solid color background replacement",
				"Preset background photographs",
				"Upload a custom background photo",
				"Download finished PNG"
			],
			offers: {
				"@type": "Offer",
				price: "0",
				priceCurrency: "USD",
				description: "10 guest credits; 4 credits per cutout"
			},
			provider: {
				"@type": "Organization",
				name: envConfigs.app_name,
				url: envConfigs.app_url
			}
		},
		{
			"@type": "FAQPage",
			mainEntity: FAQS.map(({ question, answer }) => ({
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
					name: "Photo Background Changer",
					item: absoluteUrl(PATH)
				}
			]
		}
	]
});
function PhotoBackgroundChangerPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-[#f7f9fc] text-slate-900",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "relative isolate overflow-hidden border-b border-slate-200 bg-gradient-to-b from-[#edf4ff] via-[#f8fbff] to-[#f7f9fc] px-4 pt-2 pb-16 sm:px-6 sm:pt-3 sm:pb-20",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/images/ai-photo-editor/background-changer/hero-compare-card.webp",
							alt: "",
							"aria-hidden": "true",
							width: 720,
							height: 966,
							className: "pointer-events-none absolute top-4 left-4 hidden h-auto max-h-[70vh] w-[20vw] max-w-[280px] object-contain xl:block 2xl:left-8 2xl:max-w-[320px]"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/images/ai-photo-editor/background-changer/hero-luxury-accessory.webp",
							alt: "",
							"aria-hidden": "true",
							width: 720,
							height: 960,
							className: "pointer-events-none absolute top-[38%] right-4 hidden h-auto max-h-[min(36rem,52vh)] w-[20vw] max-w-[280px] object-contain xl:block 2xl:right-8 2xl:max-w-[320px]"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative z-10 mx-auto max-w-3xl",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mb-3 text-center",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
										className: "text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-[2.75rem]",
										children: "Photo Background Changer Online"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mx-auto mt-2 text-sm text-slate-600 sm:text-base",
										children: "Replace the background with a color, preset scene, or your own image — keep the original subject."
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									id: "background-changer",
									className: "scroll-mt-24",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BackgroundRemoverWorkspace, { variant: "changer" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium text-slate-600",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "inline-flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-4 text-blue-600" }), "No sign-up to try"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "inline-flex items-center gap-2",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-4 text-blue-600" }),
												4,
												" credits per cutout"
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "inline-flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-4 text-blue-600" }), "Color, preset or your own photo"]
										})
									]
								})
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-3 text-xs font-semibold tracking-widest text-blue-600 uppercase",
							children: "One cutout, many backgrounds"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl",
							children: "Change Photo Backgrounds Without Manual Masking"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-3xl leading-7 text-slate-600",
							children: "First isolate the subject with AI. Then try different colors and photo backdrops using the same transparent cutout. Background compositing happens in your browser, without generating your subject again."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-9 grid gap-5 md:grid-cols-3",
							children: FEATURES.map((item) => {
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
					className: "border-y border-slate-200 bg-white px-4 py-16 sm:px-6 sm:py-20",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-6xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mb-3 text-xs font-semibold tracking-widest text-blue-600 uppercase",
								children: "Real-world background ideas"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl",
								children: "Photo Background Changes for Products and Portraits"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 max-w-3xl leading-7 text-slate-600",
								children: "Explore background replacement for product photos and portraits. The examples show different backdrops around the same subject while keeping the original foreground."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-12 space-y-16 sm:space-y-20",
								children: SCENARIOS.map((scenario, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
									className: "grid items-center gap-8 lg:grid-cols-2 lg:gap-14",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: index % 2 === 1 ? "lg:order-2" : "",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mb-3 text-xs font-semibold tracking-widest text-blue-600 uppercase",
												children: scenario.eyebrow
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl",
												children: scenario.title
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-5 leading-7 text-slate-600",
												children: scenario.intro
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-4 leading-7 text-slate-600",
												children: scenario.detail
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "mt-5 rounded-xl border border-blue-100 bg-blue-50/60 px-4 py-3 text-sm leading-6 text-slate-600",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", {
													className: "text-slate-900",
													children: ["Before you download:", " "]
												}), scenario.tip]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
												href: "#background-changer",
												className: "mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700",
												children: [
													"Try this background change",
													" ",
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })
												]
											})
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: index % 2 === 1 ? "lg:order-1" : "",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BackgroundChangeComparison, {
											comparisonSrc: scenario.comparisonImage,
											comparisonAlt: scenario.comparisonAlt,
											beforeLabel: scenario.beforeLabel,
											afterLabel: scenario.afterLabel
										})
									})]
								}, scenario.title))
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-3 text-xs font-semibold tracking-widest text-blue-600 uppercase",
							children: "White backgrounds"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl",
							children: "Make the Background White"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-3xl leading-7 text-slate-600",
							children: "Not every white backdrop is the same. Pure white (#FFFFFF) reads as a hard studio cut for marketplaces. Soft off-white or cream looks warmer for lifestyle shots. ID-photo style white is usually a bright, even field behind a head-and-shoulders crop. E-commerce white often favors a clean, high-key look so the product stays sharp—without claiming official document compliance."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-3xl leading-7 text-slate-600",
							children: "After you prepare the cutout, pick Studio white or a custom near- white hex. Switching colors reuses the same cutout and does not charge another AI run. A solid white fill does not relight the subject or invent new shadows, so check edges and contrast before you download."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 grid items-start gap-8 lg:grid-cols-2 lg:gap-14",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-xl font-bold tracking-tight text-slate-950 sm:text-2xl",
									children: "Change Background to White in 3 Steps"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-6 space-y-4",
									children: WHITE_STEPS.map((step, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
										className: "rounded-2xl border border-slate-200 bg-white p-5",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-sm font-bold text-blue-600",
												children: String(index + 1).padStart(2, "0")
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
												className: "mt-2 text-base font-semibold",
												children: step.title
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-2 text-sm leading-7 text-slate-600",
												children: step.description
											})
										]
									}, step.title))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#background-changer",
									className: "mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700",
									children: ["Make my background white ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-lg font-semibold text-slate-950",
										children: "Choose white or another solid color"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm leading-6 text-slate-600",
										children: "Start with Studio white, or preview other presets and a custom color after preparing your cutout."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-6 grid grid-cols-3 gap-4",
										children: COLOR_SWATCHES.map((swatch) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											role: "img",
											"aria-label": swatch.label + " background color sample",
											className: "aspect-square rounded-2xl shadow-inner " + (swatch.border ? "border border-slate-200" : ""),
											style: { background: swatch.color }
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 text-center text-xs font-medium text-slate-600",
											children: swatch.label
										})] }, swatch.label))
									})
								]
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "bg-[#f1f6ff] px-4 py-16 sm:px-6 sm:py-20",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto grid max-w-6xl items-start gap-8 lg:grid-cols-[1fr_1fr] lg:gap-16",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mb-3 text-xs font-semibold tracking-widest text-blue-600 uppercase",
								children: "Focus on the background"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl",
								children: "Keep Your Subject, Change Only the Background"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 leading-7 text-slate-600",
								children: "Changing a background should not mean inventing a new face, product logo or clothing detail. Our background changer first separates the foreground from the uploaded photo, then places that same cutout onto a background you select."
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-blue-100 bg-white p-6 shadow-sm sm:p-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-lg font-semibold text-slate-950",
									children: "What stays the same—and what may need checking"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 leading-7 text-slate-600",
									children: "Switching between preset backgrounds or colors does not rerun the image generator or redraw your subject. The cutout pixels are reused, so the face, clothing and product features in that cutout stay the same across background choices."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 leading-7 text-slate-600",
									children: "AI segmentation can still miss fine hair, fuzzy fur, glass or transparent fabrics. A new background will not automatically recreate matching light or cast shadows. Preview the result carefully, especially if you plan to use it professionally."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-4 text-sm leading-7 text-slate-600",
									children: [
										"Need transparency instead of a replacement background? Use our",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$2, {
											href: "/ai-background-remover",
											className: "font-semibold text-blue-600 hover:underline",
											children: "transparent background maker"
										}),
										"."
									]
								})
							]
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-3 text-xs font-semibold tracking-widest text-blue-600 uppercase",
							children: "Three steps"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl",
							children: "How to Change the Background of a Photo"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-9 grid gap-5 md:grid-cols-3",
							children: STEPS.map((step, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "rounded-2xl border border-slate-200 bg-white p-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm font-bold text-blue-600",
										children: String(index + 1).padStart(2, "0")
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
							}, step.title))
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "border-y border-slate-200 bg-white px-4 py-16 sm:px-6 sm:py-20",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto flex max-w-6xl items-start gap-4 rounded-2xl border border-slate-200 bg-[#f7f9fc] p-6 sm:p-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, { className: "mt-1 size-7 shrink-0 text-blue-600" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-2xl font-bold tracking-tight",
								children: "Background Changer vs. Background Remover"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-3 leading-7 text-slate-600",
								children: [
									"Choose this photo background changer when you want a new color or image behind your subject—including when you make the background white. For a transparent PNG cutout only, use our",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$2, {
										href: "/ai-background-remover",
										className: "font-semibold text-blue-600 hover:underline",
										children: "transparent background maker"
									}),
									". Both tools share the same subject-cutout workflow."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-3 leading-7 text-slate-600",
								children: [
									"Want to describe a brand-new scene in plain words? Use the",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$2, {
										href: "/",
										className: "font-semibold text-blue-600 hover:underline",
										children: "AI Photo Editor"
									}),
									" ",
									"for prompt-based editing instead."
								]
							})
						] })]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: "faq",
					className: "mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-3 text-xs font-semibold tracking-widest text-blue-600 uppercase",
							children: "Common questions"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-3xl font-bold tracking-tight sm:text-4xl",
							children: "Photo Background Changer FAQ"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6",
							children: FAQS.map(({ question, answer }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "border-b border-slate-200 py-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-lg font-semibold",
									children: question
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm leading-7 text-slate-600",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaqAnswer, {
										question,
										answer
									})
								})]
							}, question))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-6 text-sm text-slate-600",
							children: [
								"Only edit photos you own or have permission to use. Review the",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$2, {
									href: "/privacy-policy",
									className: "font-semibold text-blue-600 hover:underline",
									children: "Privacy Policy"
								}),
								" ",
								"for information about image handling."
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "px-4 py-14 sm:px-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto flex max-w-6xl flex-col items-start justify-between gap-5 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm sm:flex-row sm:items-center sm:p-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-2xl font-bold tracking-tight",
							children: "Ready to change your photo background?"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 max-w-xl text-sm leading-7 text-slate-600",
							children: "Start with 10 guest credits. Prepare the cutout, select your background and download the new image."
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#background-changer",
							className: "inline-flex shrink-0 items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-500",
							children: ["Change Photo Background ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
						})]
					})
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
export { PhotoBackgroundChangerPage as component };
