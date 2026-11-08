import { __toESM } from "./_runtime.mjs";
import { require_jsx_runtime, require_react } from "./_libs/@base-ui/react+[...].mjs";
import { localizeHref } from "./_ssr/ssr.mjs";
import { countWords } from "./_ssr/service-BckqfvjL.mjs";
import { useMutation, useQuery, useQueryClient } from "./_libs/tanstack__react-query.mjs";
import { ArrowLeft, ExternalLink, Eye, Info, Trash2, Zap } from "./_libs/lucide-react.mjs";
import { toast } from "./_libs/sonner.mjs";
import { Button$1, Link$2, Route$34, apiDelete, apiGet, apiPost, apiPut, buttonVariants, cn, guest_posts_back, guest_posts_cancel, guest_posts_changes_hint, guest_posts_content_placeholder, guest_posts_delete, guest_posts_delete_confirm, guest_posts_delete_title, guest_posts_edit_title, guest_posts_field_content, guest_posts_field_cover, guest_posts_field_slug, guest_posts_field_summary, guest_posts_field_title, guest_posts_guidelines_link, guest_posts_link_count, guest_posts_loading, guest_posts_new_title, guest_posts_package, guest_posts_package_links, guest_posts_pay_notice, guest_posts_pay_submit, guest_posts_preview, guest_posts_preview_saved_hint, guest_posts_rejected_hint, guest_posts_resubmit, guest_posts_resubmitted_toast, guest_posts_review_note, guest_posts_save_draft, guest_posts_saved_toast, guest_posts_slug_hint, guest_posts_slug_placeholder, guest_posts_sponsored_notice, guest_posts_submitted_hint, guest_posts_unpublished_hint, guest_posts_view_article, guest_posts_word_count, useRouter$1 } from "./_ssr/router-FRpG8iox.mjs";
import { Label } from "./_ssr/label-Cmbt5KTb.mjs";
import { Input$1 } from "./_ssr/input-CacA4PHh.mjs";
import { Card, CardContent } from "./_ssr/card-BkWHqUeW.mjs";
import { Dialog$1, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "./_ssr/dialog-oXWpGNwj.mjs";
import { countExternalLinks, formatPrice, guestPostSubmitProblem, useGuestPostInfo } from "./_ssr/use-guest-posts-BXr5R4sL.mjs";
import { MarkdownContent } from "./_ssr/markdown-content-CGTTvlKR.mjs";
import { RichTextEditor } from "./_ssr/rich-text-editor-Njj47010.mjs";
import { SlugInput } from "./_ssr/slug-input-DMXULfWA.mjs";
import { Textarea } from "./_ssr/textarea-sCd8zrH6.mjs";
import { GuestPostStatusBadge, describeSubmitProblem } from "./_ssr/-shared-atGxkMjq.mjs";
import { ImageUploader } from "./_ssr/image-uploader-CwZSQ5ZA.mjs";
import { PaymentProviderModal, useGuestPostCheckout } from "./_ssr/payment-provider-modal-BiUzc8S_.mjs";
// node_modules/.nitro/vite/services/ssr/assets/_id-DRYJxv2s.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function GuestPostEditorPage() {
	const { id } = Route$34.useParams();
	const { package: requestedPackage } = Route$34.useSearch();
	const isNew = id === "new";
	const router = useRouter$1();
	const queryClient = useQueryClient();
	const info = useGuestPostInfo();
	const detail = useQuery({
		queryKey: ["guest-post", id],
		queryFn: () => apiGet(`/api/guest-posts/${id}`),
		enabled: !isNew
	});
	const [productId, setProductId] = (0, import_react.useState)("");
	const [title, setTitle] = (0, import_react.useState)("");
	const [slug, setSlug] = (0, import_react.useState)("");
	const [description, setDescription] = (0, import_react.useState)("");
	const [image, setImage] = (0, import_react.useState)("");
	const [content, setContent] = (0, import_react.useState)("");
	const [loaded, setLoaded] = (0, import_react.useState)(isNew);
	(0, import_react.useEffect)(() => {
		if (!detail.data || loaded) return;
		const { submission, post } = detail.data;
		setProductId(submission.productId);
		setTitle(post.title || "");
		setSlug(post.slug || "");
		setDescription(post.description || "");
		setImage(post.image || "");
		setContent(post.content || "");
		setLoaded(true);
	}, [detail.data, loaded]);
	const packages = info.data?.packages ?? [];
	(0, import_react.useEffect)(() => {
		if (productId || !packages.length) return;
		const requested = packages.find((p) => p.productId === requestedPackage);
		setProductId((requested ?? packages[0]).productId);
	}, [
		packages,
		productId,
		requestedPackage
	]);
	const pkg = packages.find((p) => p.productId === productId);
	const price = pkg ? formatPrice(pkg.priceInCents, pkg.currency) : "";
	const submission = detail.data?.submission;
	const status = submission?.status ?? "draft";
	const isDraft = isNew || status === "draft";
	const editable = isDraft || status === "changes_requested";
	const words = (0, import_react.useMemo)(() => countWords(content), [content]);
	const links = (0, import_react.useMemo)(() => countExternalLinks(content), [content]);
	const minWords = info.data?.minWords ?? 0;
	const refresh = (savedId) => {
		queryClient.invalidateQueries({ queryKey: ["guest-posts"] });
		queryClient.invalidateQueries({ queryKey: ["guest-post", savedId] });
	};
	/** Save the form; returns the submission id (creates it when new). */
	async function saveForm(resubmit = false) {
		const body = {
			productId,
			title,
			slug,
			description,
			image,
			content,
			resubmit
		};
		if (isNew) return (await apiPost("/api/guest-posts", body)).id;
		await apiPut(`/api/guest-posts/${id}`, body);
		return id;
	}
	const save = useMutation({
		mutationFn: (resubmit) => saveForm(resubmit),
		onSuccess: (savedId, resubmit) => {
			toast.success(resubmit ? guest_posts_resubmitted_toast() : guest_posts_saved_toast());
			refresh(savedId);
			router.replace("/settings/guest-posts");
		},
		onError: (e) => toast.error(e.message)
	});
	const [deleteOpen, setDeleteOpen] = (0, import_react.useState)(false);
	const remove = useMutation({
		mutationFn: () => apiDelete(`/api/guest-posts/${id}`),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["guest-posts"] });
			router.replace("/settings/guest-posts");
		},
		onError: (e) => toast.error(e.message)
	});
	const createdId = (0, import_react.useRef)(null);
	const checkout = useGuestPostCheckout({
		resolveId: async () => {
			const savedId = createdId.current ?? await saveForm(false);
			if (isNew) {
				createdId.current = savedId;
				refresh(savedId);
			}
			return savedId;
		},
		onError: (e) => {
			toast.error(e.message);
			if (isNew && createdId.current) router.replace(`/settings/guest-posts/${createdId.current}`);
		}
	});
	if (!isNew && (detail.isPending || !loaded)) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "text-muted-foreground p-6",
		children: guest_posts_loading()
	});
	if (!isNew && detail.isError) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "text-muted-foreground p-6",
		children: detail.error.message
	});
	const busy = save.isPending || checkout.pending || remove.isPending;
	/** Check first (a failed submit saves nothing), then save and pay. */
	function submitAndPay() {
		const problem = guestPostSubmitProblem({
			title,
			content,
			minWords,
			maxLinks: pkg?.maxLinks ?? 0
		});
		if (problem) toast.error(describeSubmitProblem(problem));
		else checkout.pay();
	}
	const savedSlug = detail.data?.post.slug;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6 p-6 lg:max-w-4xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link$2, {
					href: "/settings/guest-posts",
					className: "text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), guest_posts_back()]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "text-2xl font-bold",
							children: isNew ? guest_posts_new_title() : guest_posts_edit_title()
						}),
						!isNew && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GuestPostStatusBadge, { status }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "ml-auto flex items-center gap-2",
							children: [
								isDraft && pkg && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button$1, {
									type: "button",
									size: "sm",
									className: "gap-1.5",
									disabled: busy,
									onClick: submitAndPay,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "size-3.5" }), guest_posts_pay_submit({ price })]
								}),
								!isNew && savedSlug && status !== "published" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: localizeHref(`/blog/${savedSlug}?preview=1`),
									target: "_blank",
									rel: "noopener",
									title: editable ? guest_posts_preview_saved_hint() : void 0,
									className: cn(buttonVariants({
										variant: "outline",
										size: "sm"
									}), "gap-1.5"),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "size-3.5" }), guest_posts_preview()]
								}),
								!isNew && status === "draft" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button$1, {
									type: "button",
									variant: "outline",
									size: "sm",
									className: "text-destructive hover:text-destructive gap-1.5",
									disabled: busy,
									onClick: () => setDeleteOpen(true),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-3.5" }), guest_posts_delete()]
								})
							]
						})
					]
				})]
			}),
			!isNew && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusPanel, {
				status,
				note: submission?.reviewNote,
				slug: savedSlug
			}),
			editable ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "min-w-0 space-y-6",
				onSubmit: (e) => {
					e.preventDefault();
					if (isDraft) submitAndPay();
					else save.mutate(true);
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: guest_posts_package() }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-3 sm:grid-cols-2",
							children: (isDraft ? packages : packages.filter((p) => p === pkg)).map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PackageOption, {
								pkg: p,
								selected: p.productId === productId,
								disabled: !isDraft,
								onSelect: () => setProductId(p.productId)
							}, p.productId))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "gp-title",
							children: guest_posts_field_title()
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input$1, {
							id: "gp-title",
							value: title,
							maxLength: 200,
							onChange: (e) => setTitle(e.target.value)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "gp-slug",
								children: guest_posts_field_slug()
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlugInput, {
								id: "gp-slug",
								prefix: "/blog/",
								value: slug,
								placeholder: guest_posts_slug_placeholder(),
								onChange: setSlug
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground text-xs",
								children: guest_posts_slug_hint()
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "gp-summary",
							children: guest_posts_field_summary()
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
							id: "gp-summary",
							value: description,
							maxLength: 500,
							rows: 2,
							onChange: (e) => setDescription(e.target.value)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: guest_posts_field_cover() }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageUploader, {
							maxSizeMB: 5,
							defaultPreviews: image ? [image] : void 0,
							onChange: (items) => {
								const done = items.find((i) => i.status === "uploaded" && i.url);
								setImage(done?.url || (items.length ? image : ""));
							}
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-baseline justify-between gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: guest_posts_field_content() }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-muted-foreground text-xs",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: cn(words < minWords && "text-destructive"),
											children: guest_posts_word_count({
												count: words,
												min: minWords
											})
										}),
										" · ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: cn(pkg && links > pkg.maxLinks && "text-destructive"),
											children: guest_posts_link_count({
												count: links,
												max: pkg?.maxLinks ?? 0
											})
										})
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RichTextEditor, {
								value: content,
								onChange: setContent,
								placeholder: guest_posts_content_placeholder()
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-muted-foreground flex items-start gap-1.5 text-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, { className: "mt-0.5 size-3.5 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
									guest_posts_sponsored_notice(),
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: localizeHref("/guest-post"),
										target: "_blank",
										rel: "noopener",
										className: "text-primary font-medium underline-offset-4 hover:underline",
										children: guest_posts_guidelines_link()
									})
								] })]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
								type: "submit",
								disabled: busy || !pkg,
								children: isDraft ? guest_posts_pay_submit({ price }) : guest_posts_resubmit()
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
								type: "button",
								variant: "outline",
								disabled: busy || !pkg,
								onClick: () => save.mutate(false),
								children: guest_posts_save_draft()
							})]
						}), isDraft && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground text-xs",
							children: guest_posts_pay_notice()
						})]
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
				className: "space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-xl font-semibold",
						children: title
					}),
					description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground",
						children: description
					}),
					image && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: image,
						alt: "",
						className: "rounded-xl border"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MarkdownContent, {
						content,
						sponsored: true
					})
				]
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog$1, {
				open: deleteOpen,
				onOpenChange: setDeleteOpen,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: guest_posts_delete_title() }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: guest_posts_delete_confirm({ title: title || "—" }) })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
					variant: "outline",
					onClick: () => setDeleteOpen(false),
					children: guest_posts_cancel()
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
					variant: "destructive",
					disabled: remove.isPending,
					onClick: () => remove.mutate(),
					children: guest_posts_delete()
				})] })] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaymentProviderModal, {
				...checkout.pickerProps,
				planName: pkg?.planName,
				price
			})
		]
	});
}
function PackageOption({ pkg, selected, disabled, onSelect }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: onSelect,
		disabled,
		"aria-pressed": selected,
		className: cn("rounded-xl border p-4 text-left transition-colors disabled:cursor-default", selected ? "border-primary bg-accent" : "hover:bg-muted/50"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-baseline justify-between gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-medium",
				children: pkg.planName
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-semibold",
				children: formatPrice(pkg.priceInCents, pkg.currency)
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-muted-foreground mt-1 text-sm",
			children: guest_posts_package_links({ count: pkg.maxLinks })
		})]
	});
}
function StatusPanel({ status, note, slug }) {
	let body = null;
	if (status === "submitted") body = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-sm",
		children: guest_posts_submitted_hint()
	});
	else if (status === "changes_requested") body = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-sm",
		children: guest_posts_changes_hint()
	});
	else if (status === "rejected") body = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-sm",
		children: guest_posts_rejected_hint()
	});
	else if (status === "published" && slug) body = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href: localizeHref(`/blog/${slug}`),
		target: "_blank",
		rel: "noopener",
		className: "text-primary inline-flex items-center gap-1.5 text-sm font-medium hover:underline",
		children: [guest_posts_view_article(), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-3.5" })]
	});
	else if (status === "unpublished") body = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-sm",
		children: guest_posts_unpublished_hint()
	});
	if (![
		"changes_requested",
		"rejected",
		"unpublished"
	].includes(status)) note = null;
	if (!body && !note) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
		className: "space-y-3",
		children: [body, note && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "bg-muted rounded-lg p-3 text-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-medium",
				children: guest_posts_review_note()
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground mt-1 whitespace-pre-line",
				children: note
			})]
		})]
	}) });
}
export { GuestPostEditorPage as component };
