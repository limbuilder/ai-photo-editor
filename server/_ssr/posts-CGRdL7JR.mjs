import { require_jsx_runtime } from "../_libs/@base-ui/react+[...].mjs";
import { __exportAll } from "./ssr.mjs";
import { useMDXComponents } from "../_libs/mdx-js__react.mjs";
// node_modules/.nitro/vite/services/ssr/assets/posts-CGRdL7JR.js
var import_jsx_runtime = require_jsx_runtime();
var how_to_edit_photos_with_ai_en_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent$1,
	meta: () => meta$1
});
var meta$1 = {
	title: "How to Edit Photos with AI (Without Photoshop)",
	description: "A practical guide to AI photo editing in the browser: upload a photo, describe the change, review the result, and download — with tips for backgrounds, retouching, and object removal.",
	created_at: "2026-11-05",
	author_name: "GetAIPhotoEditor",
	author_image: "/logo.png",
	image: "/images/ai-photo-editor/enhance-photo.jpg"
};
function _createMdxContent$1(props) {
	const _components = {
		a: "a",
		h2: "h2",
		li: "li",
		ol: "ol",
		p: "p",
		strong: "strong",
		ul: "ul",
		...useMDXComponents(),
		...props.components
	};
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"You do not need desktop software to clean up a product shot, soften a portrait, or erase a passerby. An ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "AI photo editor" }),
			" lets you describe the change in everyday language and generate a new version in the browser."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, { children: "The basic workflow" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ol, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Choose a clear photo" }), " — JPG, PNG, or WebP works well. Good lighting and a sharp subject usually produce more reliable edits."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Describe what should change" }), " — Be specific: “replace the background with a soft studio gray” beats “make it better.”"] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Generate, then inspect" }), " — Check faces, edges, text, and small products before you download or share."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Refine if needed" }), " — Adjust the prompt and try again when a detail looks off."] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "On GetAIPhotoEditor you can prepare the image and prompt before signing in. Generating an edit uses credits after you sign in. A medium-quality edit uses 10 credits; higher quality uses more and low uses fewer." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, { children: "Common edits that work well" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Background changes" }), " — Studio, outdoor scenes, or cleaner e-commerce backdrops. Watch hair edges and reflections."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Object removal" }), " — Ask to remove a specific item and reconstruct the area behind it. Crowded scenes may need a second pass."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Portrait retouch" }), " — Soft skin cleanup or lighting tweaks while keeping the person recognizable."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Enhancement" }), " — Brighter light, clearer colors, or a more polished look. Generative enhancement is not lossless recovery of lost detail."] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, { children: "Tips for better prompts" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Name the ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "subject" }),
				" you want to keep unchanged."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Describe the ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "new look" }),
				" in concrete terms (lighting, place, mood)."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Mention what must ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "stay the same" }),
				" (face, logo, product shape)."
			] }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Avoid vague words like “fix” or “improve” without a target." }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, { children: "When to use traditional tools instead" }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "AI editing is strong for fast creative changes. Pixel-perfect masks, batch catalogs with identical crops, and print-critical color work still favor desktop editors. Many people use both: AI for a first pass, then a traditional tool for final control." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, { children: "Start editing" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Open the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/#editor",
				children: "AI photo editor"
			}),
			", describe the change you want, and review every result before you publish it."
		] })
	] });
}
function MDXContent$1(props = {}) {
	const { wrapper: MDXLayout } = {
		...useMDXComponents(),
		...props.components
	};
	return MDXLayout ? (0, import_jsx_runtime.jsx)(MDXLayout, {
		...props,
		children: (0, import_jsx_runtime.jsx)(_createMdxContent$1, { ...props })
	}) : _createMdxContent$1(props);
}
var what_is_chatgpt_images_2_6_en_exports = /* @__PURE__ */ __exportAll({
	default: () => MDXContent,
	meta: () => meta
});
var meta = {
	title: "What Is ChatGPT Images 2.6? GPT Image 2.6 Explained",
	description: "ChatGPT Images 2.6 is OpenAI’s image model in ChatGPT and the API. See what GPT Image 2.6 can do and how it compares with ChatGPT and online photo editors.",
	created_at: "2026-11-06",
	author_name: "GetAIPhotoEditor",
	author_image: "/logo.png",
	image: "/images/ai-photo-editor/restyle-photo.jpg"
};
function _createMdxContent(props) {
	const _components = {
		a: "a",
		code: "code",
		h2: "h2",
		h3: "h3",
		li: "li",
		p: "p",
		strong: "strong",
		table: "table",
		tbody: "tbody",
		td: "td",
		th: "th",
		thead: "thead",
		tr: "tr",
		ul: "ul",
		...useMDXComponents(),
		...props.components
	};
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"ChatGPT Images 2.6 is the name people use for OpenAI’s image release inside ChatGPT. OpenAI’s own announcement, published on November 4, 2026, calls that release Images 2.6 and says it is available in ChatGPT, Codex, and the API. In the API the same release is GPT Image 2.6, with two model ids: ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "gpt-image-2.6-flare" }),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "gpt-image-2.6-sunburst" }),
			". Flare is the faster model. Sunburst is for finer detail and more consistent edits. Both can create images from text and edit images you provide. This guide sticks to what OpenAI documents, then explains what GetAIPhotoEditor’s browser editor actually runs today."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, { children: "What ChatGPT Images 2.6 is" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"OpenAI’s ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://openai.com/index/introducing-images-2-6/",
				children: "Introducing Images 2.6"
			}),
			" post, dated November 4, 2026, says the release is available globally in ChatGPT and Codex on every subscription tier, on desktop, mobile, and web. The API name for that release is GPT Image 2.6."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Images 2.6" }), " is the product name, including the version inside ChatGPT."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "GPT Image 2.6" }), " is the API family. A request names the model."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Flare" }),
				" (",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "gpt-image-2.6-flare" }),
				") is the smaller, faster model."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Sunburst" }),
				" (",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "gpt-image-2.6-sunburst" }),
				") is the model for finer detail and more consistent edits."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "The announcement does not describe a Flare versus Sunburst menu inside ChatGPT. That choice is an API setting. “ChatGPT Images 2.6” in ordinary search language means Images 2.6 inside ChatGPT, not a third model id." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "OpenAI also says Images 2.6 generates images 50% faster than before, and that Flare can generate an image in as little as six seconds when quality is set to low. Those are OpenAI’s generation figures. They are not a timing guarantee for every edit, and they are not a speed claim for GetAIPhotoEditor." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, { children: "What it can do" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Both model pages say Flare and Sunburst take text and image inputs and return an image. Both support ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "v1/images/generations" }),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "v1/images/edits" }),
			". They do not support the Responses API. The controls below are from the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developers.openai.com/api/docs/guides/image-prompting",
				children: "image prompting guide"
			}),
			" and the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developers.openai.com/api/docs/guides/image-generation",
				children: "image generation guide"
			}),
			". They describe the API, not a button list in ChatGPT or on GetAIPhotoEditor."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Text to image and image to image." }), " A prompt can create a picture. The edits endpoint can change an image you supply. Name what must stay the same, then check the result."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Reference images." }), " The generation guide says an edit can use one or more reference images. With markup, the overlay applies to the first image and any further images are references."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Markup or a mask, not both." }), " Markup is a transparent PNG the same size as the first image. OpenAI says it was already in ChatGPT and came to the API with this release. The generation guide also describes a mask, and it says not to send markup and a mask in one request."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Quality and complexity." }),
				" Quality is ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "auto" }),
				", ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "low" }),
				", ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "medium" }),
				", ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "high" }),
				", ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "xhigh" }),
				", or ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "max" }),
				" (how much detail). Complexity is ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "low" }),
				", ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "medium" }),
				", or ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "high" }),
				" (how much planning). Omit complexity and both models use ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "high" }),
				". OpenAI suggests low complexity for many edits, because a higher setting can take longer and change more than you asked."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Transparent backgrounds." }),
				" ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "auto" }),
				", ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "opaque" }),
				", or ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "transparent" }),
				". For PNG or WebP, check the alpha channel. A drawn checkerboard is not transparency."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "PNG, JPEG, WebP, GIF, and SVG." }), " Generations can also return GIF or SVG. GIF works on edits, so a still can guide an animation. SVG is generate-only: edits do not output it, and an SVG is not a valid input for a later edit. The file is a static vector, without scripts or embedded photos."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Size." }),
				" ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "auto" }),
				", or a size such as 1024×1024, 1536×1024, or 1024×1536. Custom sizes use multiples of 16 and an aspect ratio from 1:3 to 3:1."
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Quote any words that must appear, then read them in the output. The prompting guide does not promise perfect type." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Published token rates match on both model pages: text input $5 per million tokens ($1.25 cached), image input $8 per million ($2 cached), image output $30 per million. That is not a flat price per picture. Token use can differ at the same quality, GIF cost follows the frame count, and SVG also bills the model that writes the vector. Markup has no extra fee." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, { children: "Flare vs Sunburst" }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "The prompting guide calls Flare the model to try when response time matters, and Sunburst the one for detail, layout, or edit accuracy. The announcement adds that low-quality Flare can return an image in as little as six seconds, and that Flare also improves layout quality for posters, product shots, and other professional visuals. Sunburst is the recommendation for higher-quality generation and more consistent edits at medium or high quality." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "OpenAI’s own test order:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.table, { children: [(0, import_jsx_runtime.jsx)(_components.thead, { children: (0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.th, { children: "If this is your situation" }), (0, import_jsx_runtime.jsx)(_components.th, { children: "Model to test first" })] }) }), (0, import_jsx_runtime.jsxs)(_components.tbody, { children: [(0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: "Your current GPT Image 2 results are already good enough, or you use GPT Image 2.5 Flare" }), (0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "gpt-image-2.6-flare" }) })] }), (0, import_jsx_runtime.jsxs)(_components.tr, { children: [(0, import_jsx_runtime.jsx)(_components.td, { children: "GPT Image 2 falls short on a complex task, or you use GPT Image 2.5 Sunburst" }), (0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "gpt-image-2.6-sunburst" }) })] })] })] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "If Sunburst meets the bar, OpenAI suggests trying Flare with the same prompt, reference images, size, and quality, then comparing the pictures and the wait. You are not required to use both." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"GetAIPhotoEditor does not ask you to make this choice. The editor calls GPT Image 2.6 Flare’s edit model: fal.ai ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "openai/gpt-image-2.6/flare/edit" }),
			", or Replicate ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "openai/gpt-image-2.6-flare" }),
			", depending on site configuration. The on-screen label is “GPT Image 2.6.” There is no Sunburst option in the product."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, { children: "ChatGPT Images, GPT Image 2.6, and older GPT Image" }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "These names belong to one family. The ids are not interchangeable." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [(0, import_jsx_runtime.jsx)(_components.strong, { children: "Images 2.6 in ChatGPT" }), " is the chat. You describe a picture or refine one in the thread. It is on every subscription tier. The announcement does not publish a Flare/Sunburst switch or a quota per tier."] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "GPT Image 2.6 in the API" }),
			" is the request. You send ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "gpt-image-2.6-flare" }),
			" or ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "gpt-image-2.6-sunburst" }),
			" to the Image API. Both model pages support generation and edit, and both mark the Responses API as not supported."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "GPT Image 2.5" }),
			" already had Flare and Sunburst, and OpenAI’s cost notes put 2.5 and 2.6 on the same quality ladder: ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "low" }),
			", ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "medium" }),
			", ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "high" }),
			", ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "xhigh" }),
			", and ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "max" }),
			". The Images 2.6 announcement adds complexity, API markup, SVG, and GIF."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "GPT Image 2" }),
			" (",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "gpt-image-2" }),
			") is still documented for older workflows. Its quality list is ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "low" }),
			", ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "medium" }),
			", ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "high" }),
			", or ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "auto" }),
			", with no 2.6 complexity setting. The table above is OpenAI’s move from 2 or 2.5 onto 2.6."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "Older ids." }),
			" The prompting reference says ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "gpt-image-1" }),
			" shut down on October 23, 2026, and ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "gpt-image-1.5" }),
			" is scheduled to shut down on December 1, 2026. DALL·E is an earlier brand, not the id for Images 2.6. Nano Banana is a different family. This site used Nano Banana 2.1 before the current Flare edit path. The live editor is GPT Image 2.6 Flare."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, { children: "ChatGPT vs an online editor like GetAIPhotoEditor" }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "ChatGPT is a conversation. The API is a model id plus parameters. GetAIPhotoEditor is a form: one photo, one instruction, a credit cost, and a file." }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Use ChatGPT while you are still deciding what the picture should be, including a GIF of the kind the announcement describes. Use the API when a product needs ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "gpt-image-2.6-flare" }),
			" or ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "gpt-image-2.6-sunburst" }),
			", with SVG, GIF, markup, complexity, or several reference images. Use GetAIPhotoEditor when the photo already exists and the job is to remove an object, replace a background, or adjust light and color."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "On this site you upload one JPG, PNG, or WebP up to 10 MB, write a prompt of up to 2,000 characters, pick a quality, and generate. The file comes back as a PNG at the original aspect ratio. The editor does not offer Sunburst, GIF, SVG, markup, masks, several reference images, or complexity." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Credits are the site’s price, not OpenAI’s token bill. The quality menu on the live editor is:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.table, { children: [(0, import_jsx_runtime.jsx)(_components.thead, { children: (0, import_jsx_runtime.jsxs)(_components.tr, { children: [
			(0, import_jsx_runtime.jsx)(_components.th, { children: "Quality" }),
			(0, import_jsx_runtime.jsx)(_components.th, { children: "Credits" }),
			(0, import_jsx_runtime.jsx)(_components.th, { children: "Shown in the editor as" })
		] }) }), (0, import_jsx_runtime.jsxs)(_components.tbody, { children: [
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
				(0, import_jsx_runtime.jsx)(_components.td, { children: "Low" }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: "6" }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: "Fast, cheap previews while you iterate on the prompt." })
			] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
				(0, import_jsx_runtime.jsx)(_components.td, { children: "Medium" }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: "10" }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: "Everyday edits with a balanced cost. This is the default." })
			] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
				(0, import_jsx_runtime.jsx)(_components.td, { children: "High" }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: "13" }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: "Sharper detail for portraits and product shots." })
			] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
				(0, import_jsx_runtime.jsx)(_components.td, { children: "Extra high" }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: "22" }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: "Fine text and complex scenes." })
			] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
				(0, import_jsx_runtime.jsx)(_components.td, { children: "Max" }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: "50" }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: "Highest fidelity finals. Slowest and most expensive." })
			] })
		] })] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"New visitors get 10 credits without an account, enough for one medium edit, and 10 more after they create an account. More credits are one-time packs of 200, 500, or 1,200, valid for 365 days, on the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/pricing",
				children: "pricing page"
			}),
			". There is no subscription. A higher quality spends more credits. It does not recover detail that was never in the file. Review faces, text, hair, and product edges before you publish."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, { children: "Practical editing workflows" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/tools",
				children: "tools page"
			}),
			" lists three jobs. Each tool route opens the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/#editor",
				children: "homepage editor"
			}),
			". That editor has starter prompts for Remove Object, Change Background, Enhance Photo, and Change Style. Portrait retouch and clothing-wrinkle cleanup are homepage examples, not separate pages. You need the right to edit the photo. See the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/acceptable-use-policy",
				children: "acceptable use policy"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, { children: "Remove an object" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Open the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/tools/remove-object",
				children: "AI object remover"
			}),
			", upload the photo, and name the object. The tool’s example is: “Remove the unwanted object in the background. Reconstruct the background naturally and keep everything else unchanged.” Shadows, crowded scenes, and overlap often need another pass. Say what must stay."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, { children: "Change the background" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Open the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/tools/change-background",
				children: "AI background changer"
			}),
			" and describe the new setting. The example is a clean, softly lit professional studio, while keeping the subject’s face, pose, and clothing. Check hair and the edge where the subject meets the new background."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, { children: "Enhance a photo" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Open the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/tools/enhance-photo",
				children: "AI photo enhancer"
			}),
			". The example asks for better lighting, sharpness, and color while keeping the photo natural and preserving facial and product details. Medium is the default 10-credit edit. Low costs 6 credits and is enough to test wording. Move up only when medium is missing detail you can see. Enhancement will not rebuild a face or a label that the file never contained."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"The upload, review, and download loop is covered in ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/blog/how-to-edit-photos-with-ai",
				children: "How to Edit Photos with AI"
			}),
			". For one of these three jobs, open the editor, describe the change, and read the credit count on the button before you generate."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, { children: "FAQ" }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, { children: "Is Images 2.6 the same as GPT Image 2.6?" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Same release, two names. Images 2.6 is OpenAI’s name in ChatGPT, Codex, and the November 4, 2026 announcement. GPT Image 2.6 is the API family: ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "gpt-image-2.6-flare" }),
			" and ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "gpt-image-2.6-sunburst" }),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, { children: "Is it free?" }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "OpenAI says Images 2.6 is on every ChatGPT and Codex subscription tier, and it does not publish an image quota. API calls use the token rates above, so the bill still depends on size, quality, and format. GetAIPhotoEditor gives 10 credits without an account and 10 more with a new account. After that, edits use a one-time credit pack." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, { children: "Can it edit an existing photo?" }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Yes. Both model pages support the image edit endpoint. The ChatGPT announcement is about editing rounds, not only new images. GetAIPhotoEditor is the narrow version of that job: one photo, a prompt, and a PNG." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, { children: "How is it different from DALL·E, older GPT Image, or Nano Banana?" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Current OpenAI docs use GPT Image ids. ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "gpt-image-1" }),
			" has shut down, ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "gpt-image-1.5" }),
			" is scheduled to shut down on December 1, 2026, and the 2.6 migration notes talk about GPT Image 2 and 2.5. DALL·E is an older brand, not the id for this release. Nano Banana is a different model. This site’s editor now calls GPT Image 2.6 Flare, not Nano Banana 2.1."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, { children: "Does ChatGPT use Images 2.6 automatically?" }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "The announcement says Images 2.6 is available in ChatGPT on desktop, mobile, and web for every subscription tier. It does not tell people to flip a switch, and it does not document a Flare or Sunburst picker in the chat app. An API request has to name the model id itself." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, { children: "Which model does GetAIPhotoEditor use?" }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "GPT Image 2.6 Flare, on the edit endpoint. The screen says “GPT Image 2.6” and shows a quality from low to max with a credit cost. It does not offer Sunburst, GIF, SVG, markup, masks, or several reference images." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, { children: "Do higher credits buy a different OpenAI model?" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"No. Low through max are quality settings on the same Flare edit. They match OpenAI’s ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "low" }),
			", ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "medium" }),
			", ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "high" }),
			", ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "xhigh" }),
			", and ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "max" }),
			" values. They are not a move from Flare to Sunburst. Medium is the default and costs 10 credits."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, { children: "What should I check before downloading?" }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Read faces, hands, logos, and any words. Look at edges after an object removal or a background change. A sharper photo can still contain invented detail. If something that should have stayed still has moved, generate again with a tighter prompt." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, { children: "Sources" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://openai.com/index/introducing-images-2-6/",
				children: "Introducing Images 2.6"
			}), ", OpenAI, November 4, 2026. Name, ChatGPT and Codex availability, speed, GIFs, API markup, and complexity."] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://developers.openai.com/api/docs/models/gpt-image-2.6-flare",
					children: "GPT Image 2.6 Flare"
				}),
				" and ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://developers.openai.com/api/docs/models/gpt-image-2.6-sunburst",
					children: "GPT Image 2.6 Sunburst"
				}),
				". Model ids, inputs, supported endpoints, and token rates."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "https://developers.openai.com/api/docs/guides/image-prompting",
					children: "Image prompting"
				}),
				". Quality, complexity, size, transparency, formats, markup, the Flare versus Sunburst table, and the ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "gpt-image-1" }),
				" and ",
				(0, import_jsx_runtime.jsx)(_components.code, { children: "gpt-image-1.5" }),
				" dates."
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://developers.openai.com/api/docs/guides/image-generation",
				children: "Image generation"
			}), ". Reference images, masks, SVG, GIF, and the note that equal token rates are not an equal cost per image."] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "GetAIPhotoEditor facts here are from the live site and this repository: the Flare edit model ids, the credit table, the 10 MB limit, and the tool routes above." })
	] });
}
function MDXContent(props = {}) {
	const { wrapper: MDXLayout } = {
		...useMDXComponents(),
		...props.components
	};
	return MDXLayout ? (0, import_jsx_runtime.jsx)(MDXLayout, {
		...props,
		children: (0, import_jsx_runtime.jsx)(_createMdxContent, { ...props })
	}) : _createMdxContent(props);
}
/**
* Local blog posts written as MDX files in this directory.
* File naming: `<slug>.<locale>.mdx` (falls back to the base locale).
* Register every local post slug here — it drives loading and the sitemap.
*
* This module is isomorphic (safe in client bundles). Database posts are
* fetched through the server functions in ./server.ts and merged with the
* local posts via the pure helpers below.
*/
var BLOG_POST_SLUGS = ["how-to-edit-photos-with-ai", "what-is-chatgpt-images-2-6"];
var postModules = /* #__PURE__ */ Object.assign({
	"/src/content/posts/how-to-edit-photos-with-ai.en.mdx": how_to_edit_photos_with_ai_en_exports,
	"/src/content/posts/what-is-chatgpt-images-2-6.en.mdx": what_is_chatgpt_images_2_6_en_exports
});
function loadLocalPost(slug, locale) {
	if (!BLOG_POST_SLUGS.includes(slug)) return null;
	return postModules[`/src/content/posts/${slug}.${locale}.mdx`] ?? postModules[`/src/content/posts/${slug}.en.mdx`] ?? null;
}
function localPostToItem(slug, meta) {
	return {
		slug,
		title: meta.title,
		description: meta.description,
		image: meta.image,
		createdAt: new Date(meta.created_at).toISOString(),
		authorName: meta.author_name,
		authorImage: meta.author_image,
		source: "local"
	};
}
function getLocalPosts(locale) {
	return BLOG_POST_SLUGS.map((slug) => ({
		slug,
		mod: loadLocalPost(slug, locale)
	})).filter((m) => m.mod !== null).map(({ slug, mod }) => localPostToItem(slug, mod.meta));
}
/**
* Merge database posts with local MDX posts, deduped by slug
* (database wins), newest first.
*/
function mergePosts(dbPosts, localPosts, options = {}) {
	const dbSlugs = new Set(dbPosts.map((p) => p.slug));
	const merged = [...dbPosts, ...localPosts.filter((p) => !dbSlugs.has(p.slug))].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
	return options.limit ? merged.slice(0, options.limit) : merged;
}
function formatPostDate(dateIso, _locale) {
	return new Intl.DateTimeFormat("en-US", {
		year: "numeric",
		month: "short",
		day: "numeric"
	}).format(new Date(dateIso));
}
export { formatPostDate, getLocalPosts, loadLocalPost, mergePosts };
