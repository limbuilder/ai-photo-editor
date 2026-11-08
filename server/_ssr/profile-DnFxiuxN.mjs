import { __toESM } from "../_runtime.mjs";
import { require_jsx_runtime, require_react } from "../_libs/@base-ui/react+[...].mjs";
import { useForm } from "../_libs/@tanstack/react-form+[...].mjs";
import { object, string$1 as string } from "../_libs/modelcontextprotocol__core+zod.mjs";
import { useMutation, useQuery, useQueryClient } from "../_libs/tanstack__react-query.mjs";
import { toast } from "../_libs/sonner.mjs";
import { Button$1, apiGet, apiPatch, settings_profile_avatar, settings_profile_avatar_hint, settings_profile_description, settings_profile_email, settings_profile_loading, settings_profile_name, settings_profile_profile, settings_profile_save, settings_profile_save_failed, settings_profile_saved, settings_profile_saving, settings_profile_title } from "./router-FRpG8iox.mjs";
import { Label } from "./label-Cmbt5KTb.mjs";
import { Input$1 } from "./input-CacA4PHh.mjs";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./card-BkWHqUeW.mjs";
import { ImageUploader } from "./image-uploader-CwZSQ5ZA.mjs";
import { TextField } from "./form-field-DCcY6W9e.mjs";
// node_modules/.nitro/vite/services/ssr/assets/profile-DnFxiuxN.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var profileSchema = object({ name: string().min(1) });
function SettingsForm({ name: initialName, email, image: initialImage }) {
	const [image, setImage] = (0, import_react.useState)(initialImage);
	const queryClient = useQueryClient();
	const saveMutation = useMutation({
		mutationFn: (values) => apiPatch("/api/user/profile", values),
		onSuccess: () => {
			toast.success(settings_profile_saved());
			queryClient.invalidateQueries({ queryKey: ["user-info"] });
		},
		onError: (err) => {
			toast.error(err?.message || settings_profile_save_failed());
		}
	});
	const form = useForm({
		defaultValues: { name: initialName },
		validators: { onSubmit: profileSchema },
		onSubmit: async ({ value }) => {
			await saveMutation.mutateAsync({
				name: value.name,
				image
			}).catch(() => {});
		}
	});
	function handleAvatarChange(items) {
		const uploaded = items.find((item) => item.status === "uploaded" && item.url);
		setImage(uploaded?.url || "");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit: (e) => {
			e.preventDefault();
			form.handleSubmit();
		},
		className: "space-y-6 p-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "text-2xl font-bold",
			children: settings_profile_title()
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-muted-foreground",
			children: settings_profile_description()
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: settings_profile_profile() }) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
				className: "space-y-6 pb-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: settings_profile_avatar() }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageUploader, {
							defaultPreviews: image ? [image] : [],
							onChange: handleAvatarChange,
							maxSizeMB: 2,
							emptyHint: settings_profile_avatar_hint()
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Field, {
							name: "name",
							children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
								field,
								label: settings_profile_name(),
								required: true
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "email",
							children: settings_profile_email()
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input$1, {
							id: "email",
							value: email,
							disabled: true,
							className: "opacity-60"
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardFooter, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Subscribe, {
				selector: (s) => s.isSubmitting,
				children: (isSubmitting) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
					type: "submit",
					disabled: isSubmitting || saveMutation.isPending,
					children: isSubmitting || saveMutation.isPending ? settings_profile_saving() : settings_profile_save()
				})
			}) })
		] })]
	});
}
function SettingsPage() {
	const { data: user } = useQuery({
		queryKey: ["user-info"],
		queryFn: async () => {
			const data = await apiGet("/api/user/info");
			return {
				name: data.name || "",
				email: data.email || "",
				image: data.image || ""
			};
		}
	});
	if (!user) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "text-muted-foreground p-6",
		children: settings_profile_loading()
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingsForm, {
		name: user.name,
		email: user.email,
		image: user.image
	});
}
export { SettingsPage as component };
