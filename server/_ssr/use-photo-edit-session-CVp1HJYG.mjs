import { __toESM } from "../_runtime.mjs";
import { require_jsx_runtime, require_react } from "../_libs/@base-ui/react+[...].mjs";
import { useQueryClient } from "../_libs/tanstack__react-query.mjs";
import { Gift, Wallet } from "../_libs/lucide-react.mjs";
import { toast } from "../_libs/sonner.mjs";
import { DEFAULT_PHOTO_EDIT_QUALITY, Link$2, PHOTO_EDIT_QUALITIES, authClient, buttonVariants, cn, isPhotoEditQuality, useSession } from "./router-FRpG8iox.mjs";
import { Dialog$1, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./dialog-oXWpGNwj.mjs";
// node_modules/.nitro/vite/services/ssr/assets/use-photo-edit-session-CVp1HJYG.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var ctaClassName = cn(buttonVariants({ size: "lg" }), "w-full rounded-lg bg-blue-600 text-white hover:bg-blue-700 hover:text-white");
/** Explicit upgrade path; the editor and selected image stay in place. */
function CreditGateDialog({ mode, onClose }) {
	const callback = typeof window === "undefined" ? "/" : window.location.pathname + window.location.search + window.location.hash;
	const go = (path) => path + "?callbackUrl=" + encodeURIComponent(callback);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog$1, {
		open: mode !== null,
		onOpenChange: (open) => {
			if (!open) onClose();
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContent, {
			className: "force-light max-w-sm gap-4 bg-white p-6 text-slate-900",
			children: mode === "signup" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto flex size-12 items-center justify-center rounded-full bg-blue-50 text-blue-600",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gift, { className: "size-6" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, {
					className: "text-center sm:text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
						className: "text-lg text-slate-900",
						children: "Get 10 More Free Credits"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
						className: "text-slate-500",
						children: "Sign up for a free account to keep editing photos with AI."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border border-blue-100 bg-blue-50 px-4 py-3 text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
						className: "block text-2xl text-blue-700",
						children: "+10 Credits"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs text-blue-700",
						children: "Free welcome bonus · once per account"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$2, {
					href: go("/sign-up"),
					className: ctaClassName,
					children: "Sign Up for Free"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-center text-xs text-slate-500",
					children: [
						"Already have an account?",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$2, {
							href: go("/sign-in"),
							className: "font-semibold text-blue-600",
							children: "Sign in"
						})
					]
				})
			] }) : mode === "purchase" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto flex size-12 items-center justify-center rounded-full bg-blue-50 text-blue-600",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wallet, { className: "size-6" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, {
					className: "text-center sm:text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
						className: "text-lg text-slate-900",
						children: "You're Out of Credits"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
						className: "text-slate-500",
						children: "Get more credits to keep editing your photos."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$2, {
					href: "/pricing",
					className: ctaClassName,
					children: "Get More Credits"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-center text-xs text-slate-500",
					children: "One-time credit packs, no subscription required."
				})
			] }) : null
		})
	});
}
function saveDraft(file, prompt, quality) {
	if (typeof indexedDB === "undefined") return;
	const req = indexedDB.open("getaiphotoeditor-draft", 1);
	req.onupgradeneeded = () => {
		if (!req.result.objectStoreNames.contains("files")) req.result.createObjectStore("files");
	};
	req.onsuccess = () => {
		const tx = req.result.transaction("files", "readwrite");
		tx.objectStore("files").put({
			file,
			prompt,
			quality
		}, "current");
		tx.oncomplete = () => req.result.close();
		tx.onerror = () => req.result.close();
	};
}
function clearDraft() {
	if (typeof indexedDB === "undefined") return;
	const req = indexedDB.open("getaiphotoeditor-draft", 1);
	req.onsuccess = () => {
		const tx = req.result.transaction("files", "readwrite");
		tx.objectStore("files").delete("current");
		tx.oncomplete = () => req.result.close();
	};
}
async function dataOrThrow(response) {
	const payload = await response.json();
	if (!response.ok || payload.code !== 0) throw new Error(payload.message || "Request failed");
	return payload.data;
}
/** Shared generate / poll / credit-gate session for homepage and tool pages. */
function usePhotoEditSession({ fixedPrompt, toolSlug = "general", restoreDraftPrompt = true, creditCost } = {}) {
	const { data: session } = useSession();
	const queryClient = useQueryClient();
	const [creditGate, setCreditGate] = (0, import_react.useState)(null);
	const [creditBalance, setCreditBalance] = (0, import_react.useState)(null);
	const previewRef = (0, import_react.useRef)(null);
	const requestId = (0, import_react.useRef)(null);
	const [file, setFile] = (0, import_react.useState)(null);
	const [preview, setPreview] = (0, import_react.useState)("");
	const [prompt, setPrompt] = (0, import_react.useState)(fixedPrompt || "");
	const [quality, setQuality] = (0, import_react.useState)(DEFAULT_PHOTO_EDIT_QUALITY);
	const [upload, setUpload] = (0, import_react.useState)(null);
	const [sourceJobId, setSourceJobId] = (0, import_react.useState)(null);
	const [jobId, setJobId] = (0, import_react.useState)(null);
	const [status, setStatus] = (0, import_react.useState)("idle");
	const [result, setResult] = (0, import_react.useState)("");
	const [showOriginal, setShowOriginal] = (0, import_react.useState)(false);
	const refreshHeaderCredits = (balance) => {
		setCreditBalance(balance);
		queryClient.setQueryData(["user-credits", "balance"], (prev) => ({
			...prev ?? {},
			balance
		}));
	};
	const showCreditGate = (mode) => {
		if (file) saveDraft(file, prompt, quality);
		setCreditGate(mode);
	};
	(0, import_react.useEffect)(() => {
		let canceled = false;
		fetch("/api/credits").then(dataOrThrow).then((data) => {
			if (!canceled) setCreditBalance(data.balance);
		}).catch(() => void 0);
		return () => {
			canceled = true;
		};
	}, [session?.user?.id]);
	(0, import_react.useEffect)(() => {
		const request = indexedDB.open("getaiphotoeditor-draft", 1);
		request.onupgradeneeded = () => {
			if (!request.result.objectStoreNames.contains("files")) request.result.createObjectStore("files");
		};
		request.onsuccess = () => {
			const tx = request.result.transaction("files", "readonly");
			const value = tx.objectStore("files").get("current");
			value.onsuccess = () => {
				const draft = value.result;
				if (draft?.file instanceof File) {
					setFile(draft.file);
					const restoredUrl = URL.createObjectURL(draft.file);
					previewRef.current = restoredUrl;
					setPreview(restoredUrl);
					if (restoreDraftPrompt) setPrompt(draft.prompt || "");
					if (isPhotoEditQuality(draft.quality)) setQuality(draft.quality);
				}
			};
			tx.oncomplete = () => request.result.close();
		};
		return () => {
			if (previewRef.current) URL.revokeObjectURL(previewRef.current);
		};
	}, [restoreDraftPrompt]);
	(0, import_react.useEffect)(() => {
		const id = new URLSearchParams(window.location.search).get("sourceJobId");
		if (!id || !/^[a-zA-Z0-9_-]+$/.test(id)) return;
		fetch("/api/photo-editor/edits/" + id).then(dataOrThrow).then((job) => {
			if (!job.imageUrl) return;
			setSourceJobId(job.jobId);
			setPreview(job.imageUrl);
			setResult("");
			setFile(null);
			setUpload(null);
		}).catch(() => void 0);
	}, []);
	(0, import_react.useEffect)(() => {
		if (status !== "pending" || !jobId) return;
		let busy = false;
		const tick = async () => {
			if (busy) return;
			busy = true;
			try {
				const job = await dataOrThrow(await fetch("/api/photo-editor/edits/" + jobId));
				if (job.status === "success" && job.imageUrl) {
					setResult(job.imageUrl);
					setStatus("success");
					setShowOriginal(false);
					clearDraft();
				} else if (job.status === "failed" || job.status === "canceled") {
					setStatus("failed");
					requestId.current = null;
					toast.error("Edit failed. Your credits have been restored.");
				}
			} catch {} finally {
				busy = false;
			}
		};
		tick();
		const timer = window.setInterval(tick, 3500);
		return () => window.clearInterval(timer);
	}, [status, jobId]);
	const chooseFile = (selected) => {
		if (!selected) return;
		if (![
			"image/jpeg",
			"image/png",
			"image/webp"
		].includes(selected.type)) {
			toast.error("Please choose a JPG, PNG or WebP image.");
			return;
		}
		if (selected.size > 10485760) {
			toast.error("Maximum image size is 10 MB.");
			return;
		}
		if (previewRef.current) URL.revokeObjectURL(previewRef.current);
		const url = URL.createObjectURL(selected);
		previewRef.current = url;
		setFile(selected);
		setPreview(url);
		setUpload(null);
		setSourceJobId(null);
		setResult("");
		setJobId(null);
		setStatus("idle");
		requestId.current = null;
		saveDraft(selected, fixedPrompt || prompt, quality);
	};
	const clearFile = () => {
		if (previewRef.current) {
			URL.revokeObjectURL(previewRef.current);
			previewRef.current = null;
		}
		setFile(null);
		setPreview("");
		setUpload(null);
		setSourceJobId(null);
		setResult("");
		setJobId(null);
		setShowOriginal(false);
		setStatus("idle");
		requestId.current = null;
		clearDraft();
	};
	const changeQuality = (next) => {
		setQuality(next);
		requestId.current = null;
		if (file) saveDraft(file, fixedPrompt || prompt, next);
	};
	const changePrompt = (next) => {
		setPrompt(next);
		requestId.current = null;
		if (file) saveDraft(file, next, quality);
	};
	const submit = async () => {
		if (!preview) return toast.error("Upload a photo first.");
		const editPrompt = (fixedPrompt || prompt).trim();
		if (!editPrompt) return toast.error("Describe your edit first.");
		setStatus("submitting");
		let guest = Boolean(session?.user?.isAnonymous);
		try {
			if (!session?.user) {
				if ((await authClient.signIn.anonymous()).error) {
					showCreditGate("signup");
					setStatus("idle");
					return;
				}
				guest = true;
			}
			if (guest) {
				const response = await fetch("/api/guest/trial", { method: "POST" });
				if (!response.ok) {
					showCreditGate("signup");
					setStatus("idle");
					return;
				}
				await dataOrThrow(response);
			}
			const credits = await dataOrThrow(await fetch("/api/credits"));
			const cost = creditCost ?? PHOTO_EDIT_QUALITIES.find((item) => item.id === quality).credits;
			refreshHeaderCredits(credits.balance);
			if (credits.balance < cost) {
				showCreditGate(guest ? "signup" : "purchase");
				setStatus("idle");
				return;
			}
			let imageUrl = upload?.url || preview;
			let uploadToken = upload?.token || "";
			if (file && !upload) {
				const data = new FormData();
				data.append("files", file);
				const first = (await dataOrThrow(await fetch("/api/storage/upload-image", {
					method: "POST",
					body: data
				}))).results?.[0];
				if (!first?.url || !first?.token) throw new Error("Image upload did not return authorization");
				imageUrl = first.url;
				uploadToken = first.token;
				setUpload({
					url: imageUrl,
					token: uploadToken
				});
			}
			if (!requestId.current) requestId.current = crypto.randomUUID().replaceAll("-", "");
			const created = await dataOrThrow(await fetch("/api/photo-editor/edits", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					imageUrl,
					uploadToken,
					sourceJobId,
					prompt: editPrompt,
					tool: toolSlug,
					quality,
					requestId: requestId.current
				})
			}));
			refreshHeaderCredits(Math.max(0, credits.balance - cost));
			setJobId(created.jobId);
			setStatus("pending");
		} catch (err) {
			setStatus("idle");
			const message = err?.message || "Unable to start editing";
			if (message === "GUEST_CREDITS_EXHAUSTED" || message === "GUEST_TRIAL_RATE_LIMITED" || message === "GUEST_TRIAL_DISABLED") {
				showCreditGate("signup");
				return;
			}
			if (message === "CREDITS_INSUFFICIENT" || /insufficient credits/i.test(message)) {
				showCreditGate(guest ? "signup" : "purchase");
				return;
			}
			toast.error(message);
		}
	};
	const editAgain = () => {
		if (!result || !jobId) return;
		setPreview(result);
		setResult("");
		setFile(null);
		setUpload(null);
		setSourceJobId(jobId);
		setJobId(null);
		if (fixedPrompt) setPrompt(fixedPrompt);
		else setPrompt("");
		setStatus("idle");
		requestId.current = null;
	};
	return {
		session,
		creditGate,
		setCreditGate,
		creditBalance,
		file,
		preview,
		prompt,
		quality,
		jobId,
		status,
		result,
		showOriginal,
		setShowOriginal,
		selectedQuality: PHOTO_EDIT_QUALITIES.find((item) => item.id === quality),
		loading: status === "submitting" || status === "pending",
		chooseFile,
		clearFile,
		changeQuality,
		changePrompt,
		submit,
		editAgain
	};
}
export { CreditGateDialog, usePhotoEditSession };
