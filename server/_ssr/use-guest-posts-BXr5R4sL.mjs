import { getLocale } from "./ssr.mjs";
import { countWords, extractExternalLinks } from "./service-BckqfvjL.mjs";
import { useQuery } from "../_libs/tanstack__react-query.mjs";
import { apiGet } from "./router-FRpG8iox.mjs";
// node_modules/.nitro/vite/services/ssr/assets/use-guest-posts-BXr5R4sL.js
/** Public rules + packages; shared cache across pages. */
function useGuestPostInfo() {
	return useQuery({
		queryKey: ["guest-post-info"],
		queryFn: () => apiGet("/api/guest-posts/info"),
		staleTime: 6e4
	});
}
function formatPrice(cents, currency) {
	try {
		return new Intl.NumberFormat(getLocale(), {
			style: "currency",
			currency: currency.toUpperCase()
		}).format(cents / 100);
	} catch {
		return `${(cents / 100).toFixed(2)} ${currency.toUpperCase()}`;
	}
}
function formatDate(value) {
	if (!value) return "—";
	return new Date(value).toLocaleString(getLocale());
}
/** External links, counted exactly like the server. */
function countExternalLinks(markdown) {
	return extractExternalLinks(markdown).length;
}
/**
* Why the article can't be paid for and submitted yet, checked before any
* save or checkout so a failed attempt has no side effects. Same rules as the
* server (modules/guest-posts → validateForReview), which still enforces them.
*/
function guestPostSubmitProblem(a) {
	if (!a.title.trim()) return { kind: "title" };
	const words = countWords(a.content);
	if (words < a.minWords) return {
		kind: "words",
		count: words,
		min: a.minWords
	};
	const links = countExternalLinks(a.content);
	if (links > a.maxLinks) return {
		kind: "links",
		count: links,
		max: a.maxLinks
	};
	return null;
}
/** "Standard · $99.00" for a package id, from the public package list. */
function packageLabel(productId, packages) {
	const pkg = packages?.find((p) => p.productId === productId);
	return pkg ? `${pkg.planName} · ${formatPrice(pkg.priceInCents, pkg.currency)}` : productId;
}
export { countExternalLinks, formatDate, formatPrice, guestPostSubmitProblem, packageLabel, useGuestPostInfo };
