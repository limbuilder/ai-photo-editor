import { Mark, markInputRule, markPasteRule, mergeAttributes } from "./@tiptap/core+[...].mjs";
// node_modules/.pnpm/@tiptap+extension-strike@3.32.0_@tiptap+core@3.32.0_@tiptap+pm@3.32.0_/node_modules/@tiptap/extension-strike/dist/index.js
/**
* Matches a strike to a ~~strike~~ on input.
*/
var inputRegex = /(?:^|\s)(~~(?!\s+~~)((?:[^~]+))~~(?!\s+~~))$/;
/**
* Matches a strike to a ~~strike~~ on paste.
*/
var pasteRegex = /(?:^|\s)(~~(?!\s+~~)((?:[^~]+))~~(?!\s+~~))/g;
/**
* This extension allows you to create strike text.
* @see https://www.tiptap.dev/api/marks/strike
*/
var Strike = Mark.create({
	name: "strike",
	addOptions() {
		return { HTMLAttributes: {} };
	},
	parseHTML() {
		return [
			{ tag: "s" },
			{ tag: "del" },
			{ tag: "strike" },
			{
				style: "text-decoration",
				consuming: false,
				getAttrs: (style) => style.includes("line-through") ? {} : false
			}
		];
	},
	renderHTML({ HTMLAttributes }) {
		return [
			"s",
			mergeAttributes(this.options.HTMLAttributes, HTMLAttributes),
			0
		];
	},
	markdownTokenName: "del",
	parseMarkdown: (token, helpers) => {
		return helpers.applyMark("strike", helpers.parseInline(token.tokens || []));
	},
	renderMarkdown: (node, h) => {
		return `~~${h.renderChildren(node)}~~`;
	},
	addCommands() {
		return {
			setStrike: () => ({ commands }) => {
				return commands.setMark(this.name);
			},
			toggleStrike: () => ({ commands }) => {
				return commands.toggleMark(this.name);
			},
			unsetStrike: () => ({ commands }) => {
				return commands.unsetMark(this.name);
			}
		};
	},
	addKeyboardShortcuts() {
		return { "Mod-Shift-s": () => this.editor.commands.toggleStrike() };
	},
	addInputRules() {
		return [markInputRule({
			find: inputRegex,
			type: this.type
		})];
	},
	addPasteRules() {
		return [markPasteRule({
			find: pasteRegex,
			type: this.type
		})];
	}
});
export { Strike };
