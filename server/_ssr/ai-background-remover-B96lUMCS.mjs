import { require_jsx_runtime } from "../_libs/@base-ui/react+[...].mjs";
import { envConfigs } from "./ssr.mjs";
import { ArrowRight, CircleCheck, Layers, Scissors, ShieldCheck } from "../_libs/lucide-react.mjs";
import { DESCRIPTION$3, Link$2, absoluteUrl } from "./router-FRpG8iox.mjs";
import { Footer, Header } from "./header-HKuvuIrF.mjs";
import { BackgroundRemoverWorkspace } from "./background-remover-workspace-dkrh9nte.mjs";
// node_modules/.nitro/vite/services/ssr/assets/ai-background-remover-B96lUMCS.js
var import_jsx_runtime = require_jsx_runtime();
var CAPABILITIES = [
	{
		icon: Layers,
		title: "Keep a real alpha channel",
		description: "Download a PNG with a real alpha channel. Preview it on the checkerboard before you save, so you can see which areas are transparent."
	},
	{
		icon: ShieldCheck,
		title: "Keep the original subject",
		description: "The model separates foreground from background instead of redrawing the person or product. Hair, glass and sheer fabric can still need a closer look."
	},
	{
		icon: Scissors,
		title: "Remove backgrounds in one step",
		description: `No prompt is required. Upload a photo and click Remove Background. Each cutout costs 4 credits.`
	}
];
var USE_CASES = [
	{
		title: "Product photos",
		image: "/images/ai-photo-editor/background-remover/product-photos.webp",
		description: "Create transparent product cutouts for catalogs, marketplaces and marketing graphics."
	},
	{
		title: "Portraits and profile pictures",
		image: "/images/ai-photo-editor/background-remover/portraits.webp",
		description: "Isolate a person from a busy background without redrawing their face or clothing."
	},
	{
		title: "Designs and presentations",
		image: "/images/ai-photo-editor/background-remover/designs.webp",
		description: "Place a transparent PNG over your own layouts, thumbnails or slides."
	}
];
var WHY_USE = [
	{
		title: "A real transparent cutout",
		image: "/images/ai-photo-editor/background-remover/real-cutout.webp",
		description: "This page returns a transparent PNG with a real alpha channel. It separates the subject from the background rather than generating a new scene. The underlying model may be updated over time."
	},
	{
		title: "Two cutouts from your guest credits",
		image: "/images/ai-photo-editor/background-remover/free-credits.webp",
		description: `You start with 10 guest credits, and each background removal costs 4 credits, enough for two cutouts. Sign in for 10 more. No account is required to try.`
	},
	{
		title: "Review the cutout before you use it",
		image: "/images/ai-photo-editor/background-remover/edge-review.webp",
		description: "Compare the original and the result on a checkerboard. Fine hair, sheer materials, reflective edges and crowded scenes can still need a second pass."
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
		title: "Remove the background",
		description: "Click Remove Background. No prompt is needed; the model isolates the main subject automatically."
	},
	{
		number: "03",
		title: "Inspect and download a transparent PNG",
		description: "Preview the cutout on the checkerboard, then download the PNG."
	}
];
var FAQS = [
	{
		question: "How does this background remover work?",
		answer: "This page separates the subject from the background and produces a transparent PNG. It does not generate a new background. The underlying model may be updated over time."
	},
	{
		question: "Can I remove a photo background without signing up?",
		answer: `Yes. You can start with 10 guest credits without creating an account. Each background removal costs 4 credits, enough for two cutouts. Sign in to receive 10 more credits.`
	},
	{
		question: "Will the removed background be transparent?",
		answer: "Yes. This transparent background maker produces a PNG cutout with a real alpha channel—not a new white or studio fill. Preview it on the checkerboard before downloading."
	},
	{
		question: "Does the tool change the person or product?",
		answer: "The background removal model separates the foreground from the original pixels rather than generating a different subject. Fine edges can still be imperfect, so check hair, fabric and shadows."
	},
	{
		question: "Is this the same as changing a photo background?",
		answer: "No. This tool removes the background and leaves transparency so you can place the subject on another design. To make the background white or swap in a color or photo instead, use make background white on the Photo Background Changer. To describe a new scene instead of a cutout, use the AI photo editor."
	},
	{
		question: "Which photo formats are supported?",
		answer: "Upload JPG, PNG or WebP files up to 10 MB. Download the processed result as a PNG with transparency."
	},
	{
		question: "What happens if background removal fails?",
		answer: "If a processing task fails, its reserved credits are restored automatically. See your history in My Creations after signing in."
	},
	{
		question: "Are my uploaded images saved?",
		answer: "Your selected image stays in the browser before generation. Once you generate, the image is uploaded for processing and the result is stored. See the Privacy Policy for data handling and deletion requests."
	}
];
var EDITOR_LINK_FAQ = "Is this the same as changing a photo background?";
var EDITOR_LINK_LABEL = "AI photo editor";
var CHANGER_LINK_LABEL = "make background white";
function FaqAnswer({ question, answer }) {
	if (question !== EDITOR_LINK_FAQ) return answer;
	const changerIndex = answer.indexOf(CHANGER_LINK_LABEL);
	const editorIndex = answer.lastIndexOf(EDITOR_LINK_LABEL);
	if (changerIndex < 0 || editorIndex < 0) return answer;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		answer.slice(0, changerIndex),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$2, {
			href: "/photo-background-changer",
			className: "font-semibold text-blue-600 hover:underline",
			children: CHANGER_LINK_LABEL
		}),
		answer.slice(changerIndex + 21, editorIndex),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$2, {
			href: "/",
			className: "font-semibold text-blue-600 hover:underline",
			children: EDITOR_LINK_LABEL
		}),
		answer.slice(editorIndex + 15)
	] });
}
var jsonLd = JSON.stringify({
	"@context": "https://schema.org",
	"@graph": [
		{
			"@type": "SoftwareApplication",
			name: "AI Background Remover",
			applicationCategory: "MultimediaApplication",
			operatingSystem: "Web",
			url: absoluteUrl("/ai-background-remover"),
			image: absoluteUrl("/images/ai-photo-editor/remove-background.jpg"),
			description: DESCRIPTION$3,
			featureList: ["Transparent PNG cutouts", "Foreground segmentation"],
			offers: {
				"@type": "Offer",
				price: "0",
				priceCurrency: "USD",
				description: `10 guest credits; 4 credits per background removal`
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
					name: "AI Background Remover",
					item: absoluteUrl("/ai-background-remover")
				}
			]
		}
	]
});
function BackgroundRemoverPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-[#f7f9fc] text-slate-900",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "relative isolate overflow-hidden border-b border-slate-200 bg-gradient-to-b from-[#edf4ff] via-[#f8fbff] to-[#f7f9fc] px-4 pt-2 pb-16 sm:px-6 sm:pt-3 sm:pb-20",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/images/ai-photo-editor/background-remover/hero-portrait.webp",
							alt: "",
							"aria-hidden": "true",
							width: 720,
							height: 1280,
							className: "pointer-events-none absolute top-4 left-4 hidden h-auto max-h-[70vh] w-[20vw] max-w-[280px] object-contain xl:block 2xl:left-8 2xl:max-w-[320px]"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/images/ai-photo-editor/background-remover/hero-product.webp",
							alt: "",
							"aria-hidden": "true",
							width: 720,
							height: 1280,
							className: "pointer-events-none absolute top-[22%] right-4 hidden h-auto max-h-[min(36rem,52vh)] w-[20vw] max-w-[280px] object-contain xl:block 2xl:right-8 2xl:max-w-[320px]"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative z-10 mx-auto max-w-3xl",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mb-3 text-center",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
										className: "text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-[2.75rem]",
										children: "AI Background Remover Online"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mx-auto mt-2 text-sm text-slate-600 sm:text-base",
										children: "Remove the background in one step and download a transparent PNG."
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									id: "remover",
									className: "scroll-mt-24",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BackgroundRemoverWorkspace, {})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium text-slate-600",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "inline-flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-4 text-blue-600" }), "Transparent PNG output"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "inline-flex items-center gap-2",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-4 text-blue-600" }),
												4,
												" credits per image"
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "inline-flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-4 text-blue-600" }), "10 guest credits to start"]
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
							children: "Background removal"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl",
							children: "What Can This AI Background Remover Do?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-2xl leading-7 text-slate-600",
							children: "This tool isolates the main subject and leaves a transparent background. The person or product stays the original pixels rather than a newly generated version."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-9 grid gap-5 md:grid-cols-3",
							children: CAPABILITIES.map((item) => {
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
								children: "Transparent PNG output"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl",
								children: "Transparent Background Maker"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 max-w-3xl leading-7 text-slate-600",
								children: "This page is a transparent background maker: it returns a PNG with a real transparency channel, not a flat white rectangle painted behind the subject. Preview the cutout on the checkerboard so you can see which pixels are actually transparent before you download."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-10 rounded-2xl border border-slate-200 bg-[#f7f9fc] p-6 sm:p-8",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-xl font-bold tracking-tight text-slate-950 sm:text-2xl",
										children: "Remove White Background from Image"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-4 leading-7 text-slate-600",
										children: [
											"Already have a studio-white or pure-white backdrop and need the subject alone? Remove the white background from the image to produce a transparent PNG you can drop onto any layout. That is the opposite of compositing a cutout onto white—if you want to",
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$2, {
												href: "/photo-background-changer",
												className: "font-semibold text-blue-600 hover:underline",
												children: "make background white"
											}),
											" ",
											"instead, use the Photo Background Changer."
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "#remover",
										className: "mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700",
										children: ["Remove white background ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
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
							children: "Everyday use cases"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-3xl font-bold tracking-tight sm:text-4xl",
							children: "Remove Backgrounds from Products, Portraits and Designs"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 grid gap-5 md:grid-cols-3",
							children: USE_CASES.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "rounded-2xl border border-slate-200 bg-white p-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: item.image,
										alt: `Background removal illustration for ${item.title}`,
										width: 1200,
										height: 900,
										loading: "lazy",
										decoding: "async",
										className: "mb-5 aspect-[4/3] w-full rounded-xl bg-blue-50 object-cover"
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
								children: "Keep the original subject. This tool uses foreground segmentation, not generative background replacement. Inspect delicate edges such as loose hair, glass, transparent fabrics and shadows before using the cutout professionally."
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
							children: "Why Use This AI Background Remover"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-9 grid gap-5 md:grid-cols-3",
							children: WHY_USE.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "rounded-2xl border border-slate-200 bg-white p-6 shadow-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: item.image,
										alt: "",
										"aria-hidden": "true",
										width: 1200,
										height: 900,
										loading: "lazy",
										decoding: "async",
										className: "aspect-[4/3] w-full rounded-xl bg-blue-50 object-cover"
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
							}, item.title))
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
								children: "How to Remove a Photo Background with AI"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#remover",
								className: "inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700",
								children: ["Remove my background ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
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
								children: "AI Background Remover FAQ"
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
									"Read our",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$2, {
										href: "/privacy-policy",
										className: "font-semibold text-blue-600 hover:underline",
										children: "Privacy Policy"
									}),
									" ",
									"for details about image handling."
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
							children: "Ready to remove the background?"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 max-w-xl text-sm leading-6 text-slate-600",
							children: [
								"Start with 10 guest credits. Each cutout costs",
								" ",
								4,
								" credits, and no account is required to try."
							]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#remover",
							className: "inline-flex shrink-0 items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-500",
							children: ["Remove Background ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mx-auto mt-5 max-w-6xl text-center text-sm text-slate-500",
						children: [
							"Want a new background rather than transparency?",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$2, {
								href: "/photo-background-changer",
								className: "font-semibold text-blue-600 hover:underline",
								children: "Make background white"
							}),
							" ",
							"or swap in a color or photo on the Photo Background Changer. Looking for a different edit? Open the",
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
export { BackgroundRemoverPage as component };
