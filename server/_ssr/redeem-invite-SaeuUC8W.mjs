import { __toESM } from "../_runtime.mjs";
import { require_jsx_runtime, require_react } from "../_libs/@base-ui/react+[...].mjs";
import { envConfigs, localizeHref } from "./ssr.mjs";
import { Button$1, common_sign_invite_code_invalid, common_sign_invite_code_placeholder, common_sign_invite_code_required, common_sign_invite_code_title, common_sign_redeem_description, common_sign_redeem_submit, common_sign_redeem_title, common_sign_sign_out_title, signOut, useRouter$1, useSession } from "./router-FRpG8iox.mjs";
import { Input$1 } from "./input-CacA4PHh.mjs";
import { Card, CardContent, CardHeader, CardTitle } from "./card-BkWHqUeW.mjs";
import { Field, FieldDescription, FieldGroup, FieldLabel } from "./field-BpEqDEvR.mjs";
// node_modules/.nitro/vite/services/ssr/assets/redeem-invite-SaeuUC8W.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function RedeemInvitePage() {
	const router = useRouter$1();
	const { data: session, isPending } = useSession();
	const [code, setCode] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)("");
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [checking, setChecking] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		if (isPending) return;
		if (!session?.user) {
			router.push("/sign-in");
			return;
		}
		let cancelled = false;
		fetch("/api/user/info").then((r) => r.json()).then((res) => {
			if (cancelled) return;
			if (res.code === 0 && !res.data?.needsInvite) router.push("/settings");
			else setChecking(false);
		}).catch(() => !cancelled && setChecking(false));
		return () => {
			cancelled = true;
		};
	}, [
		isPending,
		session,
		router
	]);
	async function handleSubmit(e) {
		e.preventDefault();
		setError("");
		const trimmed = code.trim();
		if (!trimmed) {
			setError(common_sign_invite_code_required());
			return;
		}
		setLoading(true);
		try {
			const validate = await fetch("/api/invite-codes/validate", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ code: trimmed })
			}).then((r) => r.json());
			if (validate.code !== 0) {
				setError(validate.message || common_sign_invite_code_invalid());
				setLoading(false);
				return;
			}
			const redeem = await fetch("/api/invite-codes/redeem", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ code: trimmed })
			}).then((r) => r.json());
			if (redeem.code !== 0) {
				setError(redeem.message || common_sign_invite_code_invalid());
				setLoading(false);
				return;
			}
			window.location.assign(localizeHref("/settings"));
		} catch (err) {
			setError(err?.message || common_sign_invite_code_invalid());
			setLoading(false);
		}
	}
	async function handleSignOut() {
		await signOut();
		router.push("/sign-in");
	}
	if (isPending || checking) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "bg-muted flex min-h-svh items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "border-primary size-6 animate-spin rounded-full border-2 border-t-transparent" })
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex w-full max-w-sm flex-col gap-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "self-center font-serif text-lg italic",
				children: envConfigs.app_name
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, {
				className: "text-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
					className: "text-xl",
					children: common_sign_redeem_title()
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("form", {
				onSubmit: handleSubmit,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FieldGroup, { children: [
					error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "bg-destructive/10 text-destructive rounded-lg p-3 text-sm",
						children: error
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground text-sm",
						children: common_sign_redeem_description()
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Field, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
						htmlFor: "invite-code",
						children: common_sign_invite_code_title()
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input$1, {
						id: "invite-code",
						value: code,
						onChange: (e) => setCode(e.target.value),
						placeholder: common_sign_invite_code_placeholder(),
						required: true
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Field, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
						type: "submit",
						disabled: loading,
						children: loading ? "..." : common_sign_redeem_submit()
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldDescription, {
						className: "text-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: handleSignOut,
							className: "underline underline-offset-4",
							children: common_sign_sign_out_title()
						})
					})] })
				] })
			}) })] })]
		})
	});
}
export { RedeemInvitePage as component };
