import { __toESM } from "../_runtime.mjs";
import { require_jsx_runtime, require_react } from "../_libs/@base-ui/react+[...].mjs";
import { MarkdownIt } from "../_libs/markdown-it+mdurl+punycode.js.mjs";
import { Bold, Code, Heading2, Heading3, Image, Italic, Link, List, ListOrdered, LoaderCircle, Minus, Quote, Redo, SquareCode, Strikethrough, Undo, Unlink } from "../_libs/lucide-react.mjs";
import { toast } from "../_libs/sonner.mjs";
import { Button$1, cn } from "./router-FRpG8iox.mjs";
import { markdownStyles } from "./markdown-content-CGTTvlKR.mjs";
import { Image as Image$1 } from "../_libs/tiptap__extension-image.mjs";
import { Placeholder } from "../_libs/@tiptap/extension-placeholder+[...].mjs";
import { EditorContent, useEditor } from "../_libs/fast-equals+tiptap__react.mjs";
import { src_default } from "../_libs/tiptap__starter-kit.mjs";
import { TurndownService } from "../_libs/turndown.mjs";
// node_modules/.nitro/vite/services/ssr/assets/rich-text-editor-Njj47010.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var md = new MarkdownIt({
	html: false,
	linkify: true
});
var turndown = new TurndownService({
	headingStyle: "atx",
	codeBlockStyle: "fenced",
	bulletListMarker: "-",
	emDelimiter: "*"
});
turndown.addRule("strikethrough", {
	filter: ["del", "s"],
	replacement: (content) => `~~${content}~~`
});
turndown.keep(["figure"]);
function mdToHtml(markdown) {
	return markdown ? md.render(markdown) : "";
}
function htmlToMd(html) {
	return turndown.turndown(html);
}
function ToolbarButton({ onClick, active, disabled, label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
		type: "button",
		variant: active ? "secondary" : "ghost",
		size: "icon",
		className: "size-8",
		onClick,
		disabled,
		"aria-label": label,
		title: label,
		children
	});
}
function Toolbar({ editor, uploading, onPickImage }) {
	const chain = () => editor.chain().focus();
	function setLink() {
		const previous = editor.getAttributes("link").href;
		const url = window.prompt("URL", previous || "https://");
		if (url === null) return;
		if (url === "") {
			chain().extendMarkRange("link").unsetLink().run();
			return;
		}
		chain().extendMarkRange("link").setLink({ href: url }).run();
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "border-border bg-muted/30 flex flex-wrap items-center gap-0.5 border-b p-1",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToolbarButton, {
				label: "Bold",
				active: editor.isActive("bold"),
				onClick: () => chain().toggleBold().run(),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bold, { className: "size-4" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToolbarButton, {
				label: "Italic",
				active: editor.isActive("italic"),
				onClick: () => chain().toggleItalic().run(),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Italic, { className: "size-4" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToolbarButton, {
				label: "Strikethrough",
				active: editor.isActive("strike"),
				onClick: () => chain().toggleStrike().run(),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Strikethrough, { className: "size-4" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToolbarButton, {
				label: "Inline code",
				active: editor.isActive("code"),
				onClick: () => chain().toggleCode().run(),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Code, { className: "size-4" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "bg-border mx-1 h-5 w-px" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToolbarButton, {
				label: "Heading 2",
				active: editor.isActive("heading", { level: 2 }),
				onClick: () => chain().toggleHeading({ level: 2 }).run(),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading2, { className: "size-4" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToolbarButton, {
				label: "Heading 3",
				active: editor.isActive("heading", { level: 3 }),
				onClick: () => chain().toggleHeading({ level: 3 }).run(),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading3, { className: "size-4" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "bg-border mx-1 h-5 w-px" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToolbarButton, {
				label: "Bullet list",
				active: editor.isActive("bulletList"),
				onClick: () => chain().toggleBulletList().run(),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, { className: "size-4" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToolbarButton, {
				label: "Ordered list",
				active: editor.isActive("orderedList"),
				onClick: () => chain().toggleOrderedList().run(),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListOrdered, { className: "size-4" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToolbarButton, {
				label: "Blockquote",
				active: editor.isActive("blockquote"),
				onClick: () => chain().toggleBlockquote().run(),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, { className: "size-4" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToolbarButton, {
				label: "Code block",
				active: editor.isActive("codeBlock"),
				onClick: () => chain().toggleCodeBlock().run(),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SquareCode, { className: "size-4" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "bg-border mx-1 h-5 w-px" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToolbarButton, {
				label: "Link",
				active: editor.isActive("link"),
				onClick: setLink,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, { className: "size-4" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToolbarButton, {
				label: "Remove link",
				disabled: !editor.isActive("link"),
				onClick: () => chain().unsetLink().run(),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Unlink, { className: "size-4" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToolbarButton, {
				label: "Insert image",
				disabled: uploading,
				onClick: onPickImage,
				children: uploading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, { className: "size-4" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToolbarButton, {
				label: "Horizontal rule",
				onClick: () => chain().setHorizontalRule().run(),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "size-4" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "bg-border mx-1 h-5 w-px" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToolbarButton, {
				label: "Undo",
				disabled: !editor.can().undo(),
				onClick: () => chain().undo().run(),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Undo, { className: "size-4" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToolbarButton, {
				label: "Redo",
				disabled: !editor.can().redo(),
				onClick: () => chain().redo().run(),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Redo, { className: "size-4" })
			})
		]
	});
}
function RichTextEditor({ value, onChange, placeholder, className }) {
	const lastEmitted = (0, import_react.useRef)(value);
	const fileInputRef = (0, import_react.useRef)(null);
	const uploadingRef = (0, import_react.useRef)(false);
	const editor = useEditor({
		extensions: [
			src_default.configure({
				link: { openOnClick: false },
				heading: { levels: [
					1,
					2,
					3
				] }
			}),
			Image$1,
			Placeholder.configure({ placeholder: placeholder || "" })
		],
		content: mdToHtml(value),
		immediatelyRender: false,
		editorProps: { attributes: { class: cn(markdownStyles, "min-h-[280px] max-w-none p-4 focus:outline-none") } },
		onUpdate: ({ editor }) => {
			const markdown = editor.isEmpty ? "" : htmlToMd(editor.getHTML());
			lastEmitted.current = markdown;
			onChange(markdown);
		}
	});
	(0, import_react.useEffect)(() => {
		if (!editor || value === lastEmitted.current) return;
		lastEmitted.current = value;
		editor.commands.setContent(mdToHtml(value));
	}, [editor, value]);
	async function handleFiles(files) {
		if (!editor || !files?.length || uploadingRef.current) return;
		uploadingRef.current = true;
		try {
			const formData = new FormData();
			formData.append("files", files[0]);
			const data = await (await fetch("/api/storage/upload-image", {
				method: "POST",
				body: formData
			})).json();
			const url = data?.data?.urls?.[0];
			if (data.code === 0 && url) editor.chain().focus().setImage({ src: url }).run();
			else toast.error(data.message || "Upload failed");
		} catch {
			toast.error("Upload failed");
		} finally {
			uploadingRef.current = false;
			if (fileInputRef.current) fileInputRef.current.value = "";
		}
	}
	if (!editor) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: cn("border-input min-h-[330px] rounded-md border bg-transparent", className) });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("border-input focus-within:border-ring focus-within:ring-ring/50 overflow-hidden rounded-md border bg-transparent focus-within:ring-[3px]", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toolbar, {
				editor,
				uploading: uploadingRef.current,
				onPickImage: () => fileInputRef.current?.click()
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				ref: fileInputRef,
				type: "file",
				accept: "image/*",
				className: "hidden",
				onChange: (e) => handleFiles(e.target.files)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "max-h-[50vh] overflow-y-auto",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditorContent, { editor })
			})
		]
	});
}
export { RichTextEditor };
