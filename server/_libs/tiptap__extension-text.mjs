import { Node } from "./@tiptap/core+[...].mjs";
// node_modules/.pnpm/@tiptap+extension-text@3.32.0_@tiptap+core@3.32.0_@tiptap+pm@3.32.0_/node_modules/@tiptap/extension-text/dist/index.js
/**
* This extension allows you to create text nodes.
* @see https://www.tiptap.dev/api/nodes/text
*/
var Text = Node.create({
	name: "text",
	group: "inline",
	parseMarkdown: (token) => {
		return {
			type: "text",
			text: token.text || ""
		};
	},
	renderMarkdown: (node) => node.text || ""
});
export { Text };
