import { require_jsx_runtime } from "../_libs/@base-ui/react+[...].mjs";
import { localizeHref } from "./ssr.mjs";
import { MessageSquareText } from "../_libs/lucide-react.mjs";
import { guest_posts_err_links, guest_posts_err_title, guest_posts_err_words, guest_posts_package_links, guest_posts_review_note, tDynamic } from "./router-FRpG8iox.mjs";
import { packageLabel } from "./use-guest-posts-BXr5R4sL.mjs";
import { Badge } from "./badge-DsAADeEG.mjs";
import { Tooltip$1, TooltipContent, TooltipTrigger } from "./tooltip-D3UuGDKl.mjs";
// node_modules/.nitro/vite/services/ssr/assets/-shared-atGxkMjq.js
var import_jsx_runtime = require_jsx_runtime();
var BADGE = {
	draft: "outline",
	submitted: "secondary",
	changes_requested: "outline",
	published: "default",
	rejected: "destructive",
	unpublished: "outline"
};
/** States where the reviewer's note explains what happened. */
var NOTE_STATUSES = [
	"changes_requested",
	"rejected",
	"unpublished"
];
/**
* Status badge. Pass `note` to show the reviewer's note on hover (only in
* states it explains; an earlier note shouldn't linger after a resubmit).
*/
function GuestPostStatusBadge({ status, note }) {
	const badge = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
		variant: BADGE[status] ?? "outline",
		children: tDynamic(`guest_posts.status_${status}`)
	});
	if (!note || !NOTE_STATUSES.includes(status)) return badge;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "inline-flex items-center gap-1.5",
		children: [badge, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip$1, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
			render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				"aria-label": guest_posts_review_note(),
				className: "text-muted-foreground hover:text-foreground inline-flex"
			}),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquareText, { className: "size-4" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TooltipContent, {
			className: "block max-w-xs whitespace-pre-line",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mb-0.5 block font-medium",
				children: guest_posts_review_note()
			}), note]
		})] })]
	});
}
/** Localized message for a pre-submit check that failed. */
function describeSubmitProblem(p) {
	if (p.kind === "title") return guest_posts_err_title();
	if (p.kind === "words") return guest_posts_err_words({
		min: p.min,
		count: p.count
	});
	return guest_posts_err_links({
		max: p.max,
		count: p.count
	});
}
/** The article URL; opens it (a preview until published) in a new tab. */
function ArticleUrl({ slug, status }) {
	if (!slug) return null;
	const path = `/blog/${slug}`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href: localizeHref(status === "published" ? path : `${path}?preview=1`),
		target: "_blank",
		rel: "noopener",
		className: "text-muted-foreground hover:text-foreground block max-w-[320px] truncate font-mono text-xs hover:underline",
		children: path
	});
}
/** Package name and price, with what it includes underneath. */
function PackageCell({ productId, packages }) {
	const pkg = packages?.find((p) => p.productId === productId);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: packageLabel(productId, packages) }), pkg && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "block text-xs",
			children: guest_posts_package_links({ count: pkg.maxLinks })
		})]
	});
}
/** The reviewer's note as a table cell (two lines; full text on hover). */
function ReviewNoteCell({ status, note }) {
	if (!note || !NOTE_STATUSES.includes(status)) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "text-muted-foreground",
		children: "—"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		title: note,
		className: "text-muted-foreground line-clamp-2 max-w-[320px] text-sm whitespace-pre-line",
		children: note
	});
}
export { ArticleUrl, GuestPostStatusBadge, PackageCell, ReviewNoteCell, describeSubmitProblem };
