import { Node } from "./@tiptap/core+[...].mjs";
// node_modules/.pnpm/@tiptap+extension-document@3.32.0_@tiptap+core@3.32.0_@tiptap+pm@3.32.0_/node_modules/@tiptap/extension-document/dist/index.js
/**
* The default document node which represents the top level node of the editor.
* @see https://tiptap.dev/api/nodes/document
*/
var Document = Node.create({
	name: "doc",
	topNode: true,
	content: "block+",
	renderMarkdown: (node, h) => {
		if (!node.content) return "";
		return h.renderChildren(node.content, "\n\n");
	}
});
export { Document };
