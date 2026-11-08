import { __toESM } from "../_runtime.mjs";
import { require_jsx_runtime, require_react } from "../_libs/@base-ui/react+[...].mjs";
import { useForm } from "../_libs/@tanstack/react-form+[...].mjs";
import { envConfigs } from "./ssr.mjs";
import { object, string$1 as string } from "../_libs/modelcontextprotocol__core+zod.mjs";
import { Button$1, Link$2, common_sign_back_to_sign_in, common_sign_confirm_new_password_placeholder, common_sign_confirm_password_title, common_sign_forgot_password_title, common_sign_new_password_placeholder, common_sign_new_password_title, common_sign_password_mismatch, common_sign_reset_password_description, common_sign_reset_password_invalid_token, common_sign_reset_password_missing_token, common_sign_reset_password_submit, common_sign_reset_password_success, common_sign_reset_password_title, resetPassword, useRouter$1 } from "./router-FRpG8iox.mjs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card-BkWHqUeW.mjs";
import { Field, FieldDescription, FieldGroup } from "./field-BpEqDEvR.mjs";
import { TextField } from "./form-field-DCcY6W9e.mjs";
// node_modules/.nitro/vite/services/ssr/assets/reset-password-CeYnKcDG.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var resetSchema = object({
	password: string().min(8),
	confirmPassword: string().min(8)
}).refine((d) => d.password === d.confirmPassword, {
	path: ["confirmPassword"],
	message: common_sign_password_mismatch()
});
function ResetPasswordPage() {
	const router = useRouter$1();
	const [token, setToken] = (0, import_react.useState)(null);
	const [tokenChecked, setTokenChecked] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)("");
	const [success, setSuccess] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const params = new URLSearchParams(window.location.search);
		const tokenParam = params.get("token");
		const linkError = params.get("error");
		setToken(linkError ? null : tokenParam);
		setTokenChecked(true);
	}, []);
	const form = useForm({
		defaultValues: {
			password: "",
			confirmPassword: ""
		},
		validators: { onSubmit: resetSchema },
		onSubmit: async ({ value }) => {
			setError("");
			if (!token) {
				setError(common_sign_reset_password_missing_token());
				return;
			}
			try {
				const result = await resetPassword({
					newPassword: value.password,
					token
				});
				if (result.error) setError(result.error.message || "Reset failed");
				else {
					setSuccess(true);
					setTimeout(() => router.push("/sign-in"), 1500);
				}
			} catch (err) {
				setError(err.message || "Reset failed");
			}
		}
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex w-full max-w-sm flex-col gap-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$2, {
				href: "/",
				className: "self-center font-serif text-lg italic",
				children: envConfigs.app_name
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
				className: "text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
					className: "text-xl",
					children: common_sign_reset_password_title()
				}), !success && tokenChecked && token && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: common_sign_reset_password_description() })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: !tokenChecked ? null : !token ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FieldGroup, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "bg-destructive/10 text-destructive rounded-lg p-3 text-center text-sm",
				children: common_sign_reset_password_invalid_token()
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$2, {
				href: "/forgot-password",
				className: "text-center text-sm underline underline-offset-4",
				children: common_sign_forgot_password_title()
			}) })] }) : success ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FieldGroup, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-center text-sm",
				children: common_sign_reset_password_success()
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$2, {
				href: "/sign-in",
				className: "text-center text-sm underline underline-offset-4",
				children: common_sign_back_to_sign_in()
			}) })] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("form", {
				onSubmit: (e) => {
					e.preventDefault();
					form.handleSubmit();
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FieldGroup, { children: [
					error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "bg-destructive/10 text-destructive rounded-lg p-3 text-sm",
						children: error
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Field, {
						name: "password",
						children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
							field,
							label: common_sign_new_password_title(),
							type: "password",
							required: true,
							placeholder: common_sign_new_password_placeholder()
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Field, {
						name: "confirmPassword",
						children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
							field,
							label: common_sign_confirm_password_title(),
							type: "password",
							required: true,
							placeholder: common_sign_confirm_new_password_placeholder()
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Field, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Subscribe, {
						selector: (s) => s.isSubmitting,
						children: (isSubmitting) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
							type: "submit",
							disabled: isSubmitting,
							children: isSubmitting ? "..." : common_sign_reset_password_submit()
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldDescription, {
						className: "text-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$2, {
							href: "/sign-in",
							className: "underline underline-offset-4",
							children: common_sign_back_to_sign_in()
						})
					})] })
				] })
			}) })] })]
		})
	});
}
export { ResetPasswordPage as component };
