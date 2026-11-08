import { AnnotationsSchema, AudioContentSchema, BaseMetadataSchema, BaseRequestParamsSchema, BlobResourceContentsSchema, BooleanSchemaSchema, CLIENT_CAPABILITIES_META_KEY, CLIENT_INFO_META_KEY, CallToolRequestParamsSchema, CallToolRequestSchema, CallToolResultSchema, CancelTaskRequestSchema, CancelTaskResultSchema, CancelledNotificationParamsSchema, CancelledNotificationSchema, ClientCapabilitiesSchema, ClientNotificationSchema, ClientRequestSchema, ClientResultSchema, ClientTasksCapabilitySchema, CompatibilityCallToolResultSchema, CompleteRequestParamsSchema, CompleteRequestSchema, CompleteResultSchema, ContentBlockSchema, CreateMessageRequestParamsSchema, CreateMessageRequestSchema, CreateMessageResultSchema, CreateMessageResultWithToolsSchema, CreateTaskResultSchema, CursorSchema, DiscoverRequestSchema, DiscoverResultSchema, ElicitRequestFormParamsSchema, ElicitRequestParamsSchema, ElicitRequestSchema, ElicitRequestURLParamsSchema, ElicitResultSchema, ElicitationCompleteNotificationParamsSchema, ElicitationCompleteNotificationSchema, EmbeddedResourceSchema, EmptyResultSchema, EnumSchemaSchema, GetPromptRequestParamsSchema, GetPromptRequestSchema, GetPromptResultSchema, GetTaskPayloadRequestSchema, GetTaskPayloadResultSchema, GetTaskRequestSchema, GetTaskResultSchema, IconSchema, IconsSchema, IdJagTokenExchangeResponseSchema, ImageContentSchema, ImplementationSchema, InitializeRequestParamsSchema, InitializeRequestSchema, InitializeResultSchema, InitializedNotificationSchema, JSONArraySchema, JSONObjectSchema, JSONRPCErrorResponseSchema, JSONRPCMessageSchema, JSONRPCNotificationSchema, JSONRPCRequestSchema, JSONRPCResponseSchema, JSONRPCResultResponseSchema, JSONValueSchema, LOG_LEVEL_META_KEY, LegacyTitledEnumSchemaSchema, ListChangedOptionsBaseSchema, ListPromptsRequestSchema, ListPromptsResultSchema, ListResourceTemplatesRequestSchema, ListResourceTemplatesResultSchema, ListResourcesRequestSchema, ListResourcesResultSchema, ListRootsRequestSchema, ListRootsResultSchema, ListTasksRequestSchema, ListTasksResultSchema, ListToolsRequestSchema, ListToolsResultSchema, LoggingLevelSchema, LoggingMessageNotificationParamsSchema, LoggingMessageNotificationSchema, ModelHintSchema, ModelPreferencesSchema, MultiSelectEnumSchemaSchema, NotificationSchema, NotificationsParamsSchema, NumberSchemaSchema, OAuthClientInformationFullSchema, OAuthClientInformationSchema, OAuthClientMetadataSchema, OAuthClientRegistrationErrorSchema, OAuthErrorResponseSchema, OAuthMetadataSchema, OAuthProtectedResourceMetadataSchema, OAuthTokenRevocationRequestSchema, OAuthTokensSchema, OpenIdProviderDiscoveryMetadataSchema, OpenIdProviderMetadataSchema, PROTOCOL_VERSION_META_KEY, PaginatedRequestParamsSchema, PaginatedRequestSchema, PaginatedResultSchema, PingRequestSchema, PrimitiveSchemaDefinitionSchema, ProgressNotificationParamsSchema, ProgressNotificationSchema, ProgressSchema, ProgressTokenSchema, PromptArgumentSchema, PromptListChangedNotificationSchema, PromptMessageSchema, PromptReferenceSchema, PromptSchema, ReadResourceRequestParamsSchema, ReadResourceRequestSchema, ReadResourceResultSchema, RelatedTaskMetadataSchema, RequestIdSchema, RequestMetaSchema, RequestSchema, ResourceContentsSchema, ResourceLinkSchema, ResourceListChangedNotificationSchema, ResourceRequestParamsSchema, ResourceSchema, ResourceTemplateReferenceSchema, ResourceTemplateSchema, ResourceUpdatedNotificationParamsSchema, ResourceUpdatedNotificationSchema, ResultMetaObjectSchema, ResultSchema, RoleSchema, RootSchema, RootsListChangedNotificationSchema, SERVER_INFO_META_KEY, SUBSCRIPTION_ID_META_KEY, SUPPORTED_PROTOCOL_VERSIONS, SamplingContentSchema, SamplingMessageContentBlockSchema, SamplingMessageSchema, ServerCapabilitiesSchema, ServerNotificationSchema, ServerRequestSchema, ServerResultSchema, ServerTasksCapabilitySchema, SetLevelRequestParamsSchema, SetLevelRequestSchema, SingleSelectEnumSchemaSchema, StringSchemaSchema, SubscribeRequestParamsSchema, SubscribeRequestSchema, SubscriptionFilterSchema, SubscriptionsAcknowledgedNotificationParamsSchema, SubscriptionsAcknowledgedNotificationSchema, SubscriptionsListenRequestParamsSchema, SubscriptionsListenRequestSchema, SubscriptionsListenResultMetaSchema, SubscriptionsListenResultSchema, TaskAugmentedRequestParamsSchema, TaskCreationParamsSchema, TaskMetadataSchema, TaskSchema, TaskStatusNotificationParamsSchema, TaskStatusNotificationSchema, TaskStatusSchema, TextContentSchema, TextResourceContentsSchema, TitledMultiSelectEnumSchemaSchema, TitledSingleSelectEnumSchemaSchema, ToolAnnotationsSchema, ToolChoiceSchema, ToolExecutionSchema, ToolListChangedNotificationSchema, ToolResultContentSchema, ToolSchema, ToolUseContentSchema, UnsubscribeRequestParamsSchema, UnsubscribeRequestSchema, UntitledMultiSelectEnumSchemaSchema, UntitledSingleSelectEnumSchemaSchema, _enum, _null, array, boolean$1 as boolean, date as date$1, datetime, discriminatedUnion, email, intersection, lazy, literal, looseObject, number$1 as number, object, optional, preprocess, record, safeParse, string$1 as string, toJSONSchema, union, unknown, url } from "./modelcontextprotocol__core+zod.mjs";
import "node:buffer";
// node_modules/.pnpm/@modelcontextprotocol+server@2.4.0/node_modules/@modelcontextprotocol/server/dist/chunk-vYduTEsO.mjs
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJSMin = (cb, mod) => () => (mod || cb((mod = { exports: {} }).exports, mod), mod.exports);
var __exportAll = (all, symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var __copyProps = (to, from, except, desc) => {
	if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
		key = keys[i];
		if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
			get: ((k) => from[k]).bind(null, key),
			enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
		});
	}
	return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
	value: mod,
	enumerable: true
}) : target, mod));
// node_modules/.pnpm/@modelcontextprotocol+server@2.4.0/node_modules/@modelcontextprotocol/server/dist/dialects-CDpMbily.mjs
/**
* Canonical `$schema` URIs per supported dialect (http + https variants, trailing-`#` stripped).
*/
var DRAFT_2020_12_URIS = /* @__PURE__ */ new Set(["https://json-schema.org/draft/2020-12/schema", "http://json-schema.org/draft/2020-12/schema"]);
var DRAFT_2019_09_URIS = /* @__PURE__ */ new Set(["https://json-schema.org/draft/2019-09/schema", "http://json-schema.org/draft/2019-09/schema"]);
var DRAFT_07_URIS = /* @__PURE__ */ new Set(["https://json-schema.org/draft-07/schema", "http://json-schema.org/draft-07/schema"]);
var DRAFT_06_URIS = /* @__PURE__ */ new Set(["https://json-schema.org/draft-06/schema", "http://json-schema.org/draft-06/schema"]);
/**
* Whether a `$schema` value declares the 2019-09 dialect — the only supported dialect with
* `$recursiveRef`/`$recursiveAnchor`. Non-throwing (unlike {@linkcode declaredDialect}) so
* wire-layer callers can consult it for documents whose dialect may be unsupported.
*/
function declares2019Dialect($schema) {
	return typeof $schema === "string" && DRAFT_2019_09_URIS.has($schema.replace(/#$/, ""));
}
/**
* Classify a schema's declared `$schema` dialect. No `$schema` (or a non-string one) means
* 2020-12. Any other dialect throws a plain `Error` with a clear message rather than letting the
* engine crash on an opaque internal error or silently mis-validate; `remedy` names the calling
* provider's escape hatch in that message.
*/
function declaredDialect(schema, remedy) {
	if (!("$schema" in schema) || typeof schema.$schema !== "string") return "2020-12";
	const declared = schema.$schema.replace(/#$/, "");
	if (DRAFT_2020_12_URIS.has(declared)) return "2020-12";
	if (DRAFT_2019_09_URIS.has(declared)) return "2019-09";
	if (DRAFT_07_URIS.has(declared) || DRAFT_06_URIS.has(declared)) return "draft-7";
	throw new Error(`JSON Schema declares an unsupported dialect ("$schema": "${schema.$schema.slice(0, 200)}"). The default validator supports JSON Schema 2020-12, 2019-09, draft-07, and draft-06; ${remedy}`);
}
// node_modules/.pnpm/@modelcontextprotocol+server@2.4.0/node_modules/@modelcontextprotocol/server/dist/src-DdvbAHrR.mjs
/**
* Cross-bundle `instanceof` support for the SDK error classes.
*
* `@modelcontextprotocol/client` and `@modelcontextprotocol/server` each bundle their
* own copy of `core-internal`, so an error constructed by one package fails a
* prototype-identity `instanceof` against the same class re-exported by the other —
* exactly the check a dual-role process (gateway, host, in-process test) writes.
*
* Instead of prototype identity, branded classes stamp every instance with the brand
* strings of its class chain under a registry symbol (`Symbol.for`, shared across
* bundles and realms), and resolve `instanceof` via `Symbol.hasInstance` against the
* brand set. Ordinary prototype-based `instanceof` is kept as a fallback so behavior
* is unchanged for anything unbranded.
*
* A class participates by defining an **own** `mcpBrand` static (via a `static {}`
* block, so nothing reaches the declaration files — a declared `protected static`
* field would make the constructor types nominally incompatible across the bundled
* copies) and (for hierarchy roots) installing {@linkcode brandedHasInstance} as
* `Symbol.hasInstance`. User-defined subclasses that do not declare their own brand
* keep plain prototype semantics — a foreign base-class instance never satisfies
* `instanceof UserSubclass`.
*
* Prior art — the same stamp-and-hook shape ships at scale elsewhere: Node core
* (stream.Writable since 2017, Console via a marker symbol, diagnostics_channel),
* undici's whole error hierarchy (vendored into Node as fetch), googleapis/gaxios
* (GaxiosError, Symbol.for marker), AWS SDK v3's ServiceException (which pairs a
* Symbol.hasInstance override with a static isInstance guard, as we do), and zod v4
* (Symbol.hasInstance on every schema class for cross-version interop).
*
* Contract notes:
* - Participation criterion: **every error class exported from a public package that
*   callers are documented to `instanceof` must be branded.** The per-package
*   errorBrandConformance tests walk the export surfaces and fail naming any
*   exported Error subclass that has not opted in.
* - Brands assert **identity, not shape**: brand strings are version-less, so an
*   instance from one SDK version matches the class of another. Members added to a
*   branded class in a later version may be absent on a matched instance — read
*   fields defensively, and treat branded classes as additive-only. The escape
*   hatch when a release must break a branded class's read contract: change that
*   class's brand string in the same release, which cleanly severs cross-version
*   matching for that class. The per-package brand pins make the rename
*   deliberate: errorSurfacePins.test.ts owns the core-internal brands, and each
*   package's errorBrandConformance test pins its package-local ones.
* - Cross-bundle matching requires **both** copies to be at or after the release
*   that introduced branding; against an older copy, behavior degrades to plain
*   prototype `instanceof` in both directions.
* - A consumer re-bundling the SDK with property mangling (`mangle.props`) would
*   break the brand statics; default esbuild/webpack/terser settings do not.
*/
/** Registry symbol — identical across bundled copies and realms. */
var BRANDS = Symbol.for("mcp.sdk.errorBrands");
/**
* Stamp `instance` with the brand of every class in `ctor`'s chain that declares an
* own `mcpBrand`. Call once from the hierarchy root's constructor with `new.target` —
* subclasses inherit the stamping without touching their constructors.
*
* Constructor-time only: never stamp arbitrary objects. A stamped non-instance would
* satisfy `instanceof` while lacking the prototype members (getters like `.status`)
* that callers reach for after the check.
*/
function stampErrorBrands(instance, ctor) {
	const brands = /* @__PURE__ */ new Set();
	let current = ctor;
	while (typeof current === "function") {
		const brand = current.mcpBrand;
		if (Object.prototype.hasOwnProperty.call(current, "mcpBrand") && typeof brand === "string") brands.add(brand);
		current = Object.getPrototypeOf(current);
	}
	if (brands.size === 0) return;
	Object.defineProperty(instance, BRANDS, {
		value: brands,
		enumerable: false,
		configurable: true
	});
}
/**
* `Symbol.hasInstance` implementation for branded hierarchy roots. Matches when the
* value carries the **own** brand of the class being tested against (cross-bundle
* path), falling back to ordinary prototype-based `instanceof` otherwise.
*/
function brandedHasInstance(cls, value) {
	try {
		if (typeof value === "object" && value !== null && Object.prototype.hasOwnProperty.call(cls, "mcpBrand") && typeof cls.mcpBrand === "string" && Object.prototype.hasOwnProperty.call(value, BRANDS)) {
			const carried = value[BRANDS];
			if (carried && typeof carried.has === "function" && carried.has(cls.mcpBrand)) return true;
		}
	} catch {}
	return Function.prototype[Symbol.hasInstance].call(cls, value);
}
/**
* OAuth error codes as defined by {@link https://datatracker.ietf.org/doc/html/rfc6749#section-5.2 | RFC 6749}
* and extensions.
*/
var OAuthErrorCode = /* @__PURE__ */ function(OAuthErrorCode$1) {
	/**
	* The request is missing a required parameter, includes an invalid parameter value,
	* includes a parameter more than once, or is otherwise malformed.
	*/
	OAuthErrorCode$1["InvalidRequest"] = "invalid_request";
	/**
	* Client authentication failed (e.g., unknown client, no client authentication included,
	* or unsupported authentication method).
	*/
	OAuthErrorCode$1["InvalidClient"] = "invalid_client";
	/**
	* The provided authorization grant or refresh token is invalid, expired, revoked,
	* does not match the redirection URI used in the authorization request, or was issued to another client.
	*/
	OAuthErrorCode$1["InvalidGrant"] = "invalid_grant";
	/**
	* The authenticated client is not authorized to use this authorization grant type.
	*/
	OAuthErrorCode$1["UnauthorizedClient"] = "unauthorized_client";
	/**
	* The authorization grant type is not supported by the authorization server.
	*/
	OAuthErrorCode$1["UnsupportedGrantType"] = "unsupported_grant_type";
	/**
	* The requested scope is invalid, unknown, malformed, or exceeds the scope granted by the resource owner.
	*/
	OAuthErrorCode$1["InvalidScope"] = "invalid_scope";
	/**
	* The resource owner or authorization server denied the request.
	*/
	OAuthErrorCode$1["AccessDenied"] = "access_denied";
	/**
	* The authorization server encountered an unexpected condition that prevented it from fulfilling the request.
	*/
	OAuthErrorCode$1["ServerError"] = "server_error";
	/**
	* The authorization server is currently unable to handle the request due to temporary overloading or maintenance.
	*/
	OAuthErrorCode$1["TemporarilyUnavailable"] = "temporarily_unavailable";
	/**
	* The authorization server does not support obtaining an authorization code using this method.
	*/
	OAuthErrorCode$1["UnsupportedResponseType"] = "unsupported_response_type";
	/**
	* The authorization server does not support the requested token type.
	*/
	OAuthErrorCode$1["UnsupportedTokenType"] = "unsupported_token_type";
	/**
	* The access token provided is expired, revoked, malformed, or invalid for other reasons.
	*/
	OAuthErrorCode$1["InvalidToken"] = "invalid_token";
	/**
	* The HTTP method used is not allowed for this endpoint. (Custom, non-standard error)
	*/
	OAuthErrorCode$1["MethodNotAllowed"] = "method_not_allowed";
	/**
	* Rate limit exceeded. (Custom, non-standard error based on RFC 6585)
	*/
	OAuthErrorCode$1["TooManyRequests"] = "too_many_requests";
	/**
	* The client metadata is invalid. (Custom error for dynamic client registration - RFC 7591)
	*/
	OAuthErrorCode$1["InvalidClientMetadata"] = "invalid_client_metadata";
	/**
	* The value of one or more redirection URIs is invalid. (Dynamic client registration - RFC 7591 §3.2.2)
	*/
	OAuthErrorCode$1["InvalidRedirectUri"] = "invalid_redirect_uri";
	/**
	* The request requires higher privileges than provided by the access token.
	*/
	OAuthErrorCode$1["InsufficientScope"] = "insufficient_scope";
	/**
	* The requested resource is invalid, missing, unknown, or malformed. (Custom error for resource indicators - RFC 8707)
	*/
	OAuthErrorCode$1["InvalidTarget"] = "invalid_target";
	/**
	* The DPoP proof accompanying the request is invalid, or does not match the key the grant
	* (e.g. a refresh token) is bound to. (RFC 9449 §5 / §7.1)
	*/
	OAuthErrorCode$1["InvalidDpopProof"] = "invalid_dpop_proof";
	/**
	* The server requires a server-supplied nonce in the DPoP proof; retry with the `DPoP-Nonce`
	* it returned. (RFC 9449 §8 / §9)
	*/
	OAuthErrorCode$1["UseDpopNonce"] = "use_dpop_nonce";
	return OAuthErrorCode$1;
}({});
/**
* OAuth error class for all OAuth-related errors.
*/
var OAuthError = class OAuthError extends Error {
	static {
		Object.defineProperty(this, "mcpBrand", { value: "mcp.OAuthError" });
	}
	static [Symbol.hasInstance](value) {
		return brandedHasInstance(this, value);
	}
	/**
	* Brand-based type guard: equivalent to `value instanceof this`, as an
	* explicit static predicate (the axios/AWS-SDK `isInstance` style). Reads
	* the caller's own brand via `this`, so every branded subclass gets a
	* correctly-scoped guard by inheritance. Must be invoked on the class —
	* in callback position write `v => SdkError.isInstance(v)`, not
	* `.filter(SdkError.isInstance)` (detached calls throw rather than
	* silently matching nothing).
	*/
	static isInstance(value) {
		if (typeof this !== "function") throw new TypeError("isInstance must be called on the class (e.g. `SdkError.isInstance(value)`); for callbacks use `v => SdkError.isInstance(v)`");
		return brandedHasInstance(this, value);
	}
	constructor(code, message, errorUri) {
		super(message);
		this.code = code;
		this.errorUri = errorUri;
		this.name = "OAuthError";
		stampErrorBrands(this, new.target);
	}
	/**
	* Converts the error to a standard OAuth error response object.
	*/
	toResponseObject() {
		const response = {
			error: this.code,
			error_description: this.message
		};
		if (this.errorUri) response.error_uri = this.errorUri;
		return response;
	}
	/**
	* Creates an {@linkcode OAuthError} from an OAuth error response.
	*/
	static fromResponse(response) {
		return new OAuthError(response.error, response.error_description ?? response.error, response.error_uri);
	}
};
/**
* Error codes for SDK errors (local errors that never cross the wire).
* Unlike {@linkcode ProtocolErrorCode} which uses numeric JSON-RPC codes, `SdkErrorCode` uses
* descriptive string values for better developer experience.
*
* These errors are thrown locally by the SDK and are never serialized as
* JSON-RPC error responses.
*/
var SdkErrorCode = /* @__PURE__ */ function(SdkErrorCode$1) {
	/** Transport is not connected */
	SdkErrorCode$1["NotConnected"] = "NOT_CONNECTED";
	/** Transport is already connected */
	SdkErrorCode$1["AlreadyConnected"] = "ALREADY_CONNECTED";
	/** Protocol is not initialized */
	SdkErrorCode$1["NotInitialized"] = "NOT_INITIALIZED";
	/** Required capability is not supported by the remote side */
	SdkErrorCode$1["CapabilityNotSupported"] = "CAPABILITY_NOT_SUPPORTED";
	/** Request timed out waiting for response */
	SdkErrorCode$1["RequestTimeout"] = "REQUEST_TIMEOUT";
	/** Connection was closed */
	SdkErrorCode$1["ConnectionClosed"] = "CONNECTION_CLOSED";
	/** Failed to send message */
	SdkErrorCode$1["SendFailed"] = "SEND_FAILED";
	/** Response result failed local schema validation */
	SdkErrorCode$1["InvalidResult"] = "INVALID_RESULT";
	/**
	* The response carried a `resultType` discriminator (protocol revision
	* 2026-07-28) naming a result kind this client cannot consume yet, e.g.
	* `input_required`. The kind is carried in `data.resultType`.
	*/
	SdkErrorCode$1["UnsupportedResultType"] = "UNSUPPORTED_RESULT_TYPE";
	/**
	* The multi-round-trip auto-fulfilment driver exhausted its round cap
	* (`inputRequired.maxRounds`) without the server returning a complete
	* result. `data.rounds` carries the cap that was hit and
	* `data.lastResult` carries the last `input_required` payload received
	* (`{ inputRequests, requestState? }`), so callers can inspect or resume
	* the flow manually.
	*/
	SdkErrorCode$1["InputRequiredRoundsExceeded"] = "INPUT_REQUIRED_ROUNDS_EXCEEDED";
	/**
	* The auto-aggregating no-`cursor` `listTools()` / `listPrompts()` /
	* `listResources()` / `listResourceTemplates()` walk hit the
	* `ClientOptions.listMaxPages` cap without the server's pagination
	* converging. `data.method` carries the list verb and
	* `data.listMaxPages` the cap that was hit; raise the cap or fall back to
	* explicit per-page `{ cursor }` calls.
	*/
	SdkErrorCode$1["ListPaginationExceeded"] = "LIST_PAGINATION_EXCEEDED";
	/**
	* The spec method being sent does not exist on the negotiated protocol
	* version's wire era (e.g. `tasks/get` toward a 2026-07-28 peer, or
	* `server/discover` toward a 2025-era peer). Raised locally, before
	* anything reaches the transport. The method and era are carried in
	* `data.method` / `data.era`.
	*/
	SdkErrorCode$1["MethodNotSupportedByProtocolVersion"] = "METHOD_NOT_SUPPORTED_BY_PROTOCOL_VERSION";
	/**
	* Protocol-era negotiation at connect time failed without producing either a
	* usable modern (2026-07-28+) era or a definitive legacy fallback signal —
	* e.g. the negotiation mode forbids falling back (`pin`), the probe hit a
	* network failure, or the server answered the probe with a 5xx (a typed
	* connect error, never an era verdict).
	*
	* Negotiation-phase only: this code is never used once an era is
	* established. Auth walls never carry it: a 401/403 rejecting the probe
	* uses {@linkcode ClientHttpAuthentication} / {@linkcode ClientHttpForbidden}
	* instead, so era-recovery flows keyed on this code (e.g. cached-verdict
	* gateways) can never persist a verdict for an unauthorized exchange.
	*/
	SdkErrorCode$1["EraNegotiationFailed"] = "ERA_NEGOTIATION_FAILED";
	SdkErrorCode$1["ClientHttpNotImplemented"] = "CLIENT_HTTP_NOT_IMPLEMENTED";
	/**
	* HTTP 401 authentication failure: the transport's re-auth retry still got
	* 401 (`Server returned 401 after re-authentication`), or the version
	* negotiation probe was rejected 401 with no `authProvider` configured
	* (`Version negotiation failed: the server requires authorization (HTTP 401)`).
	* Carried on an {@linkcode SdkHttpError} with `status: 401`.
	*/
	SdkErrorCode$1["ClientHttpAuthentication"] = "CLIENT_HTTP_AUTHENTICATION";
	/**
	* HTTP 403 denial: the step-up re-authorization retry limit was reached,
	* or the version negotiation probe was rejected 403
	* (`Version negotiation failed: the server denied access (HTTP 403)`).
	* Carried on an {@linkcode SdkHttpError} with `status: 403`.
	*/
	SdkErrorCode$1["ClientHttpForbidden"] = "CLIENT_HTTP_FORBIDDEN";
	SdkErrorCode$1["ClientHttpUnexpectedContent"] = "CLIENT_HTTP_UNEXPECTED_CONTENT";
	SdkErrorCode$1["ClientHttpFailedToOpenStream"] = "CLIENT_HTTP_FAILED_TO_OPEN_STREAM";
	SdkErrorCode$1["ClientHttpFailedToTerminateSession"] = "CLIENT_HTTP_FAILED_TO_TERMINATE_SESSION";
	return SdkErrorCode$1;
}({});
/**
* SDK errors are local errors that never cross the wire.
* They are distinct from {@linkcode ProtocolError} which represents JSON-RPC protocol errors
* that are serialized and sent as error responses.
*
* @example
* ```ts source="./sdkErrors.examples.ts#SdkError_basicUsage"
* try {
*     // Throwing an SDK error
*     throw new SdkError(SdkErrorCode.NotConnected, 'Transport is not connected');
* } catch (error) {
*     // Checking error type by code
*     if (error instanceof SdkError && error.code === SdkErrorCode.RequestTimeout) {
*         // Handle timeout
*     }
* }
* ```
*/
var SdkError = class extends Error {
	static {
		Object.defineProperty(this, "mcpBrand", { value: "mcp.SdkError" });
	}
	static [Symbol.hasInstance](value) {
		return brandedHasInstance(this, value);
	}
	/**
	* Brand-based type guard: equivalent to `value instanceof this`, as an
	* explicit static predicate (the axios/AWS-SDK `isInstance` style). Reads
	* the caller's own brand via `this`, so every branded subclass gets a
	* correctly-scoped guard by inheritance. Must be invoked on the class —
	* in callback position write `v => SdkError.isInstance(v)`, not
	* `.filter(SdkError.isInstance)` (detached calls throw rather than
	* silently matching nothing).
	*/
	static isInstance(value) {
		if (typeof this !== "function") throw new TypeError("isInstance must be called on the class (e.g. `SdkError.isInstance(value)`); for callbacks use `v => SdkError.isInstance(v)`");
		return brandedHasInstance(this, value);
	}
	/**
	* @param code - Stable string code identifying the failure ({@linkcode SdkErrorCode}).
	* @param message - Human-readable description.
	* @param data - Optional structured payload (for example the HTTP status carried by
	* {@linkcode SdkHttpError}). Opaque to the SDK: a `cause` key inside `data` is not
	* promoted to `Error.cause`.
	* @param options - Standard `ErrorOptions`, forwarded to `Error`. Pass the underlying
	* failure as `{ cause }` so it is reachable through the `Error.cause` chain that
	* loggers and error trackers walk.
	*/
	constructor(code, message, data, options) {
		super(message, options);
		this.code = code;
		this.data = data;
		this.name = "SdkError";
		stampErrorBrands(this, new.target);
	}
};
/**
* An {@linkcode SdkError} subclass for HTTP transport failures.
*
* Thrown by the streamable HTTP transport when the server responds with a
* non-OK status code. Narrows {@linkcode SdkError.data | data} to
* {@linkcode SdkHttpErrorData} so consumers can inspect the HTTP status
* without unsafe casting.
*
* @example
* ```ts source="./sdkErrors.examples.ts#SdkHttpError_basicUsage"
* if (error instanceof SdkHttpError) {
*     console.log(error.status); // number
*     console.log(error.statusText); // string | undefined
* }
* ```
*/
var SdkHttpError = class extends SdkError {
	static {
		Object.defineProperty(this, "mcpBrand", { value: "mcp.SdkHttpError" });
	}
	/**
	* @param options - Standard `ErrorOptions`, forwarded to `Error` (see {@linkcode SdkError}).
	*/
	constructor(code, message, data, options) {
		super(code, message, data, options);
		this.name = "SdkHttpError";
	}
	get status() {
		return this.data.status;
	}
	get statusText() {
		return this.data.statusText;
	}
};
/**
* Inbound request methods whose processing structurally requires a client
* capability, keyed by method, valued by the capabilities required.
*
* Currently empty: none of the request methods served on the 2026-07-28
* registry unconditionally requires a client capability. Entries appear here
* when such methods exist — for example requests whose handling embeds
* elicitation or sampling input requests (the input-request engine), or
* opt-in subscription delivery. Handler-conditional requirements (a specific
* tool that needs sampling) are not expressible as a static method table and
* are enforced at the point the requirement arises instead.
*/
var REQUIRED_CLIENT_CAPABILITIES_BY_METHOD = {};
/**
* The client capabilities a request method structurally requires, or
* `undefined` when the method has no static requirement.
*/
function requiredClientCapabilitiesForRequest(method) {
	return Object.hasOwn(REQUIRED_CLIENT_CAPABILITIES_BY_METHOD, method) ? REQUIRED_CLIENT_CAPABILITIES_BY_METHOD[method] : void 0;
}
function isPlainObject$7(value) {
	return value !== null && typeof value === "object" && !Array.isArray(value);
}
/**
* Whether a required nested member counts as declared even though it is not
* spelled out: a bare `elicitation: {}` declaration (no mode sub-capability at
* all) is read as form support — the pre-mode (2025) meaning of a bare
* declaration — so an `elicitation.form` requirement treats it as satisfied.
* Declaring any mode explicitly (for example `elicitation: { url: {} }`)
* removes the implication.
*/
function isImpliedCapabilityMember(capability, member, declaredValue) {
	return capability === "elicitation" && member === "form" && declaredValue["form"] === void 0 && declaredValue["url"] === void 0;
}
/**
* The client capabilities an embedded multi-round-trip input request requires
* (call site 2 — the outbound input-request leg): a server MUST NOT send an
* `inputRequests` kind the request's declared client capabilities do not
* cover. Returns `undefined` for entries whose method is not one of the
* embedded input-request kinds (those are a server bug handled separately,
* not a capability question).
*
* The requirement is mode-aware where the capability is: URL-mode elicitation
* requires `elicitation.url`; form-mode (or mode-omitted) elicitation requires
* `elicitation.form` (modes are sub-capabilities, and a server MUST NOT send a
* mode the client did not declare); sampling with `tools`/`toolChoice`
* requires `sampling.tools`. A bare `elicitation: {}` declaration satisfies
* the form requirement — see {@linkcode missingClientCapabilities}.
*/
function requiredClientCapabilitiesForInputRequest(entry) {
	switch (entry.method) {
		case "elicitation/create":
			if (entry.params?.["mode"] === "url") return { elicitation: { url: {} } };
			return { elicitation: { form: {} } };
		case "sampling/createMessage": {
			const params = entry.params;
			if (params !== void 0 && (params["tools"] !== void 0 || params["toolChoice"] !== void 0)) return { sampling: { tools: {} } };
			return { sampling: {} };
		}
		case "roots/list": return { roots: {} };
		default: return;
	}
}
/**
* Computes the subset of `required` client capabilities the client did not
* declare. Returns `undefined` when every required capability is declared;
* otherwise returns an object in the `ClientCapabilities` shape containing
* exactly the missing capabilities (suitable for
* `data.requiredCapabilities` on the `-32021` error).
*
* A capability counts as declared when its top-level key is present on the
* declared capabilities; when the requirement names nested members (for
* example `elicitation: { url: {} }`), each named member must also be present
* under the declared capability. One lenient reading applies: a bare
* `elicitation: {}` declaration (no mode sub-capability at all) counts as
* declaring `elicitation.form` — the pre-mode (2025) meaning of a bare
* declaration. An absent or empty `declared` value means
* nothing is declared — every required capability is missing (the structural
* clean-refusal posture for sessions with no per-request capability view).
*/
function missingClientCapabilities(required, declared) {
	const missing = {};
	for (const [capability, requirement] of Object.entries(required)) {
		if (requirement === void 0) continue;
		const declaredValue = declared === void 0 ? void 0 : declared[capability];
		if (declaredValue === void 0) {
			missing[capability] = requirement;
			continue;
		}
		if (isPlainObject$7(requirement) && isPlainObject$7(declaredValue)) {
			const missingMembers = {};
			for (const [member, memberRequirement] of Object.entries(requirement)) if (memberRequirement !== void 0 && declaredValue[member] === void 0 && !isImpliedCapabilityMember(capability, member, declaredValue)) missingMembers[member] = memberRequirement;
			if (Object.keys(missingMembers).length > 0) missing[capability] = missingMembers;
		}
	}
	return Object.keys(missing).length > 0 ? missing : void 0;
}
/**
* The first protocol revision of the modern (2026-07-28) era. Revision identifiers
* are ISO dates, so lexicographic comparison orders them chronologically.
*/
var FIRST_MODERN_PROTOCOL_VERSION = "2026-07-28";
/**
* Modern-era protocol revisions this SDK can negotiate via `server/discover`.
* Deliberately separate from {@linkcode SUPPORTED_PROTOCOL_VERSIONS} (the legacy
* `initialize` list), so adding a revision here can never leak a modern version
* string into a 2025-era handshake. Internal — not part of the public API surface.
*/
var SUPPORTED_MODERN_PROTOCOL_VERSIONS = [FIRST_MODERN_PROTOCOL_VERSION];
/** Whether the given protocol revision belongs to the modern (2026-07-28+) era. */
function isModernProtocolVersion(version) {
	return version >= FIRST_MODERN_PROTOCOL_VERSION;
}
/** The legacy-era (pre-2026-07-28) subset of a supported-versions list, in the list's own preference order. */
function legacyProtocolVersions(versions) {
	return versions.filter((version) => !isModernProtocolVersion(version));
}
/** The modern-era (2026-07-28+) subset of a supported-versions list, in the list's own preference order. */
function modernProtocolVersions(versions) {
	return versions.filter((version) => isModernProtocolVersion(version));
}
/**
* SEP-2106 §4.3 TextContent auto-append, era-agnostic, called from BOTH
* codecs' {@link WireCodec.projectCallToolResult}: when `structuredContent`
* is a non-object value (array/primitive/`null`) and the handler authored no
* `type:'text'` block, append `{type:'text', text: JSON.stringify(value)}`.
* Object-shaped (or absent) `structuredContent` returns the same reference.
*
* Leaf module: imported by both era codec modules, so it must NOT import from
* `./codec.js` (which value-imports the rev codecs at top level — that would
* make a runtime cycle and a TDZ hazard for entries that evaluate a rev codec
* module first).
*/
function appendTextFallbackForNonObject(result) {
	const sc = result.structuredContent;
	if (sc === void 0) return result;
	if (!(typeof sc !== "object" || sc === null || Array.isArray(sc))) return result;
	if (result.content?.some((c) => c.type === "text") ?? false) return result;
	return {
		...result,
		content: [...result.content ?? [], {
			type: "text",
			text: JSON.stringify(sc)
		}]
	};
}
/**
* Result-family keys that must never default into a `{content: []}` tools/call
* success. Shared by the 2025 wire-seam schema and server normalization.
* Leaf module (like `textFallback.ts`): imported by registry/server paths, so
* it must NOT import from `./codec.js` — that would close a runtime cycle.
*/
var TOOL_RESULT_FOREIGN_FAMILY_KEYS = [
	"task",
	"inputRequests",
	"requestState"
];
/**
* Single owner of the v1-parity ruling: a plain-object tool result without `content` (and
* without foreign-family keys) gains `content: []`. Shared by the 2025 wire seam and server-side handler normalization.
*/
function normalizeContentlessToolResult(value) {
	if (value === null || typeof value !== "object" || Array.isArray(value) || value.content !== void 0 || TOOL_RESULT_FOREIGN_FAMILY_KEYS.some((key) => key in value)) return value;
	return {
		...value,
		content: []
	};
}
/**
* Complete frozen 2025-11-25 wire schemas. Self-contained — no imports from
* the public/neutral types/schemas.ts. The neutral layer is the public-API
* superset and is free to evolve (e.g., SEP-2106 widening); this file is the
* 2025 wire-parse contract (Q10-L2 byte-identity) and is BEHAVIOR-FROZEN.
*
* This is the era's complete frozen wire-parse contract — both the 2025-only
* delta (the deprecated task family, the era role unions) AND frozen copies of
* every era-shared shape (Tool, CallToolResult, Initialize*, ContentBlock,
* prompts/resources/completion/elicitation, …). The 2026-era codec
* (`wire/rev2026-07-28/`) is symmetrically self-contained in the same way.
*
* The 2025-only delta (the task message surface, restored types-only by #2248
* for interop with task-capable 2025 peers) is parsed ONLY through this era's
* registry; the deprecated Task* schemas also live (marked `@deprecated`) in
* the neutral schema layer so the public types stay nameable without a
* cross-layer import — nameability is constant, runtime availability is
* version-keyed — but appear in no API signature. Q1 increment 2 — deletions
* are physical: the
* 2026-era REGISTRY has no Task* methods (its frozen building-block copies do
* carry the deprecated Task* sub-schemas by composition — soft contamination,
* tracked for anchor-exactness adjudication).
*
* The only cross-layer dependency is `import type { JSONObject, JSONValue }`
* from the neutral types barrel — pure structural type aliases with no parse
* behavior. No runtime schema is shared with the neutral layer.
*/
function build$1() {
	const JSONValueSchema$1 = lazy(() => union([
		string(),
		number(),
		boolean(),
		_null(),
		record(string(), JSONValueSchema$1),
		array(JSONValueSchema$1)
	]));
	const JSONObjectSchema$1 = record(string(), JSONValueSchema$1);
	/**
	* A progress token, used to associate progress notifications with the original request.
	*/
	const ProgressTokenSchema$1 = union([string(), number().int()]);
	/**
	* An opaque token used to represent a cursor for pagination.
	*/
	const CursorSchema$1 = string();
	/** @deprecated 2025-11-25 wire vocabulary with no SDK runtime; kept importable for interoperability only. */
	const TaskMetadataSchema$1 = object({ ttl: number().optional() });
	/**
	* Metadata for associating messages with a task.
	* Include this in the `_meta` field under the key `io.modelcontextprotocol/related-task`.
	*
	* @deprecated 2025-11-25 wire vocabulary with no SDK runtime; kept importable for interoperability only.
	*/
	const RelatedTaskMetadataSchema$1 = object({ taskId: string() });
	const RequestMetaSchema$1 = looseObject({
		progressToken: ProgressTokenSchema$1.optional(),
		"io.modelcontextprotocol/related-task": RelatedTaskMetadataSchema$1.optional()
	});
	/**
	* Common params for any request.
	*/
	const BaseRequestParamsSchema$1 = object({ _meta: RequestMetaSchema$1.optional() });
	/**
	* Common params for any task-augmented request.
	*
	* @deprecated 2025-11-25 wire vocabulary with no SDK runtime; kept importable for interoperability only.
	*/
	const TaskAugmentedRequestParamsSchema$1 = BaseRequestParamsSchema$1.extend({ task: TaskMetadataSchema$1.optional() });
	const RequestSchema$1 = object({
		method: string(),
		params: BaseRequestParamsSchema$1.loose().optional()
	});
	const NotificationsParamsSchema$1 = object({ _meta: RequestMetaSchema$1.optional() });
	const NotificationSchema$1 = object({
		method: string(),
		params: NotificationsParamsSchema$1.loose().optional()
	});
	const ResultSchema$1 = looseObject({ _meta: RequestMetaSchema$1.optional() });
	/**
	* A uniquely identifying ID for a request in JSON-RPC.
	*/
	const RequestIdSchema$1 = union([string(), number().int()]);
	/**
	* A response that indicates success but carries no data.
	*/
	const EmptyResultSchema$1 = ResultSchema$1.strict();
	const CancelledNotificationParamsSchema$1 = NotificationsParamsSchema$1.extend({
		requestId: RequestIdSchema$1.optional(),
		reason: string().optional()
	});
	/**
	* This notification can be sent by either side to indicate that it is cancelling a previously-issued request.
	*
	* The request SHOULD still be in-flight, but due to communication latency, it is always possible that this notification MAY arrive after the request has already finished.
	*
	* This notification indicates that the result will be unused, so any associated processing SHOULD cease.
	*
	* A client MUST NOT attempt to cancel its {@linkcode InitializeRequest | initialize} request.
	*/
	const CancelledNotificationSchema$1 = NotificationSchema$1.extend({
		method: literal("notifications/cancelled"),
		params: CancelledNotificationParamsSchema$1
	});
	/**
	* Icon schema for use in {@link Tool | tools}, {@link Prompt | prompts}, {@link Resource | resources}, and {@link Implementation | implementations}.
	*/
	const IconSchema$1 = object({
		src: string(),
		mimeType: string().optional(),
		sizes: array(string()).optional(),
		theme: _enum(["light", "dark"]).optional()
	});
	/**
	* Base schema to add `icons` property.
	*
	*/
	const IconsSchema$1 = object({ icons: array(IconSchema$1).optional() });
	/**
	* Base metadata interface for common properties across {@link Resource | resources}, {@link Tool | tools}, {@link Prompt | prompts}, and {@link Implementation | implementations}.
	*/
	const BaseMetadataSchema$1 = object({
		name: string(),
		title: string().optional()
	});
	/**
	* Describes the name and version of an MCP implementation.
	*/
	const ImplementationSchema$1 = BaseMetadataSchema$1.extend({
		...BaseMetadataSchema$1.shape,
		...IconsSchema$1.shape,
		version: string(),
		websiteUrl: string().optional(),
		description: string().optional()
	});
	const FormElicitationCapabilitySchema = intersection(object({ applyDefaults: boolean().optional() }), JSONObjectSchema$1);
	const ElicitationCapabilitySchema = preprocess((value) => {
		if (value && typeof value === "object" && !Array.isArray(value) && Object.keys(value).length === 0) return { form: {} };
		return value;
	}, intersection(object({
		form: FormElicitationCapabilitySchema.optional(),
		url: JSONObjectSchema$1.optional()
	}), JSONObjectSchema$1.optional()));
	/**
	* Task capabilities for clients, indicating which request types support task creation.
	*
	* @deprecated 2025-11-25 wire vocabulary with no SDK runtime; kept importable for interoperability only.
	*/
	const ClientTasksCapabilitySchema$1 = looseObject({
		list: JSONObjectSchema$1.optional(),
		cancel: JSONObjectSchema$1.optional(),
		requests: looseObject({
			sampling: looseObject({ createMessage: JSONObjectSchema$1.optional() }).optional(),
			elicitation: looseObject({ create: JSONObjectSchema$1.optional() }).optional()
		}).optional()
	});
	/**
	* Task capabilities for servers, indicating which request types support task creation.
	*
	* @deprecated 2025-11-25 wire vocabulary with no SDK runtime; kept importable for interoperability only.
	*/
	const ServerTasksCapabilitySchema$1 = looseObject({
		list: JSONObjectSchema$1.optional(),
		cancel: JSONObjectSchema$1.optional(),
		requests: looseObject({ tools: looseObject({ call: JSONObjectSchema$1.optional() }).optional() }).optional()
	});
	/**
	* Capabilities a client may support. Known capabilities are defined here, in this schema, but this is not a closed set: any client can define its own, additional capabilities.
	*/
	const ClientCapabilitiesSchema$1 = object({
		experimental: record(string(), JSONObjectSchema$1).optional(),
		sampling: object({
			context: JSONObjectSchema$1.optional(),
			tools: JSONObjectSchema$1.optional()
		}).optional(),
		elicitation: ElicitationCapabilitySchema.optional(),
		roots: object({ listChanged: boolean().optional() }).optional(),
		tasks: ClientTasksCapabilitySchema$1.optional(),
		extensions: record(string(), JSONObjectSchema$1).optional()
	});
	const InitializeRequestParamsSchema$1 = BaseRequestParamsSchema$1.extend({
		protocolVersion: string(),
		capabilities: ClientCapabilitiesSchema$1,
		clientInfo: ImplementationSchema$1
	});
	/**
	* This request is sent from the client to the server when it first connects, asking it to begin initialization.
	*/
	const InitializeRequestSchema$1 = RequestSchema$1.extend({
		method: literal("initialize"),
		params: InitializeRequestParamsSchema$1
	});
	/**
	* Capabilities that a server may support. Known capabilities are defined here, in this schema, but this is not a closed set: any server can define its own, additional capabilities.
	*/
	const ServerCapabilitiesSchema$1 = object({
		experimental: record(string(), JSONObjectSchema$1).optional(),
		logging: JSONObjectSchema$1.optional(),
		completions: JSONObjectSchema$1.optional(),
		prompts: object({ listChanged: boolean().optional() }).optional(),
		resources: object({
			subscribe: boolean().optional(),
			listChanged: boolean().optional()
		}).optional(),
		tools: object({ listChanged: boolean().optional() }).optional(),
		tasks: ServerTasksCapabilitySchema$1.optional(),
		extensions: record(string(), JSONObjectSchema$1).optional()
	});
	/**
	* After receiving an initialize request from the client, the server sends this response.
	*/
	const InitializeResultSchema$1 = ResultSchema$1.extend({
		protocolVersion: string(),
		capabilities: ServerCapabilitiesSchema$1,
		serverInfo: ImplementationSchema$1,
		instructions: string().optional()
	});
	/**
	* This notification is sent from the client to the server after initialization has finished.
	*/
	const InitializedNotificationSchema$1 = NotificationSchema$1.extend({
		method: literal("notifications/initialized"),
		params: NotificationsParamsSchema$1.optional()
	});
	/**
	* A ping, issued by either the server or the client, to check that the other party is still alive. The receiver must promptly respond, or else may be disconnected.
	*/
	const PingRequestSchema$1 = RequestSchema$1.extend({
		method: literal("ping"),
		params: BaseRequestParamsSchema$1.optional()
	});
	const ProgressSchema$1 = object({
		progress: number(),
		total: optional(number()),
		message: optional(string())
	});
	const ProgressNotificationParamsSchema$1 = object({
		...NotificationsParamsSchema$1.shape,
		...ProgressSchema$1.shape,
		progressToken: ProgressTokenSchema$1
	});
	/**
	* An out-of-band notification used to inform the receiver of a progress update for a long-running request.
	*
	* @category notifications/progress
	*/
	const ProgressNotificationSchema$1 = NotificationSchema$1.extend({
		method: literal("notifications/progress"),
		params: ProgressNotificationParamsSchema$1
	});
	const PaginatedRequestParamsSchema$1 = BaseRequestParamsSchema$1.extend({ cursor: CursorSchema$1.optional() });
	const PaginatedRequestSchema$1 = RequestSchema$1.extend({ params: PaginatedRequestParamsSchema$1.optional() });
	const PaginatedResultSchema$1 = ResultSchema$1.extend({ nextCursor: CursorSchema$1.optional() });
	/**
	* The contents of a specific resource or sub-resource.
	*/
	const ResourceContentsSchema$1 = object({
		uri: string(),
		mimeType: optional(string()),
		_meta: record(string(), unknown()).optional()
	});
	const TextResourceContentsSchema$1 = ResourceContentsSchema$1.extend({ text: string() });
	/**
	* A Zod schema for validating Base64 strings that is more performant and
	* robust for very large inputs than the default regex-based check. It avoids
	* stack overflows by using the native `atob` function for validation.
	*/
	const Base64Schema = string().refine((val) => {
		try {
			atob(val);
			return true;
		} catch {
			return false;
		}
	}, { message: "Invalid Base64 string" });
	const BlobResourceContentsSchema$1 = ResourceContentsSchema$1.extend({ blob: Base64Schema });
	/**
	* The sender or recipient of messages and data in a conversation.
	*/
	const RoleSchema$1 = _enum(["user", "assistant"]);
	/**
	* Optional annotations providing clients additional context about a resource.
	*/
	const AnnotationsSchema$1 = object({
		audience: array(RoleSchema$1).optional(),
		priority: number().min(0).max(1).optional(),
		lastModified: datetime({ offset: true }).optional()
	});
	/**
	* A known resource that the server is capable of reading.
	*/
	const ResourceSchema$1 = object({
		...BaseMetadataSchema$1.shape,
		...IconsSchema$1.shape,
		uri: string(),
		description: optional(string()),
		mimeType: optional(string()),
		size: optional(number()),
		annotations: AnnotationsSchema$1.optional(),
		_meta: optional(looseObject({}))
	});
	/**
	* A template description for resources available on the server.
	*/
	const ResourceTemplateSchema$1 = object({
		...BaseMetadataSchema$1.shape,
		...IconsSchema$1.shape,
		uriTemplate: string(),
		description: optional(string()),
		mimeType: optional(string()),
		annotations: AnnotationsSchema$1.optional(),
		_meta: optional(looseObject({}))
	});
	/**
	* Sent from the client to request a list of resources the server has.
	*/
	const ListResourcesRequestSchema$1 = PaginatedRequestSchema$1.extend({ method: literal("resources/list") });
	/**
	* The server's response to a {@linkcode ListResourcesRequest | resources/list} request from the client.
	*/
	const ListResourcesResultSchema$1 = PaginatedResultSchema$1.extend({ resources: array(ResourceSchema$1) });
	/**
	* Sent from the client to request a list of resource templates the server has.
	*/
	const ListResourceTemplatesRequestSchema$1 = PaginatedRequestSchema$1.extend({ method: literal("resources/templates/list") });
	/**
	* The server's response to a {@linkcode ListResourceTemplatesRequest | resources/templates/list} request from the client.
	*/
	const ListResourceTemplatesResultSchema$1 = PaginatedResultSchema$1.extend({ resourceTemplates: array(ResourceTemplateSchema$1) });
	const ResourceRequestParamsSchema$1 = BaseRequestParamsSchema$1.extend({ uri: string() });
	/**
	* Parameters for a {@linkcode ReadResourceRequest | resources/read} request.
	*/
	const ReadResourceRequestParamsSchema$1 = ResourceRequestParamsSchema$1;
	/**
	* Sent from the client to the server, to read a specific resource URI.
	*/
	const ReadResourceRequestSchema$1 = RequestSchema$1.extend({
		method: literal("resources/read"),
		params: ReadResourceRequestParamsSchema$1
	});
	/**
	* The server's response to a {@linkcode ReadResourceRequest | resources/read} request from the client.
	*/
	const ReadResourceResultSchema$1 = ResultSchema$1.extend({ contents: array(union([TextResourceContentsSchema$1, BlobResourceContentsSchema$1])) });
	/**
	* An optional notification from the server to the client, informing it that the list of resources it can read from has changed. This may be issued by servers without any previous subscription from the client.
	*/
	const ResourceListChangedNotificationSchema$1 = NotificationSchema$1.extend({
		method: literal("notifications/resources/list_changed"),
		params: NotificationsParamsSchema$1.optional()
	});
	const SubscribeRequestParamsSchema$1 = ResourceRequestParamsSchema$1;
	/**
	* Sent from the client to request `resources/updated` notifications from the server whenever a particular resource changes.
	*/
	const SubscribeRequestSchema$1 = RequestSchema$1.extend({
		method: literal("resources/subscribe"),
		params: SubscribeRequestParamsSchema$1
	});
	const UnsubscribeRequestParamsSchema$1 = ResourceRequestParamsSchema$1;
	/**
	* Sent from the client to request cancellation of {@linkcode ResourceUpdatedNotification | resources/updated} notifications from the server. This should follow a previous {@linkcode SubscribeRequest | resources/subscribe} request.
	*/
	const UnsubscribeRequestSchema$1 = RequestSchema$1.extend({
		method: literal("resources/unsubscribe"),
		params: UnsubscribeRequestParamsSchema$1
	});
	/**
	* Parameters for a {@linkcode ResourceUpdatedNotification | notifications/resources/updated} notification.
	*/
	const ResourceUpdatedNotificationParamsSchema$1 = NotificationsParamsSchema$1.extend({ uri: string() });
	/**
	* A notification from the server to the client, informing it that a resource has changed and may need to be read again. This should only be sent if the client previously sent a {@linkcode SubscribeRequest | resources/subscribe} request.
	*/
	const ResourceUpdatedNotificationSchema$1 = NotificationSchema$1.extend({
		method: literal("notifications/resources/updated"),
		params: ResourceUpdatedNotificationParamsSchema$1
	});
	/**
	* Describes an argument that a prompt can accept.
	*/
	const PromptArgumentSchema$1 = object({
		name: string(),
		description: optional(string()),
		required: optional(boolean())
	});
	/**
	* A prompt or prompt template that the server offers.
	*/
	const PromptSchema$1 = object({
		...BaseMetadataSchema$1.shape,
		...IconsSchema$1.shape,
		description: optional(string()),
		arguments: optional(array(PromptArgumentSchema$1)),
		_meta: optional(looseObject({}))
	});
	/**
	* Sent from the client to request a list of prompts and prompt templates the server has.
	*/
	const ListPromptsRequestSchema$1 = PaginatedRequestSchema$1.extend({ method: literal("prompts/list") });
	/**
	* The server's response to a {@linkcode ListPromptsRequest | prompts/list} request from the client.
	*/
	const ListPromptsResultSchema$1 = PaginatedResultSchema$1.extend({ prompts: array(PromptSchema$1) });
	/**
	* Parameters for a {@linkcode GetPromptRequest | prompts/get} request.
	*/
	const GetPromptRequestParamsSchema$1 = BaseRequestParamsSchema$1.extend({
		name: string(),
		arguments: record(string(), string()).optional()
	});
	/**
	* Used by the client to get a prompt provided by the server.
	*/
	const GetPromptRequestSchema$1 = RequestSchema$1.extend({
		method: literal("prompts/get"),
		params: GetPromptRequestParamsSchema$1
	});
	/**
	* Text provided to or from an LLM.
	*/
	const TextContentSchema$1 = object({
		type: literal("text"),
		text: string(),
		annotations: AnnotationsSchema$1.optional(),
		_meta: record(string(), unknown()).optional()
	});
	/**
	* An image provided to or from an LLM.
	*/
	const ImageContentSchema$1 = object({
		type: literal("image"),
		data: Base64Schema,
		mimeType: string(),
		annotations: AnnotationsSchema$1.optional(),
		_meta: record(string(), unknown()).optional()
	});
	/**
	* Audio content provided to or from an LLM.
	*/
	const AudioContentSchema$1 = object({
		type: literal("audio"),
		data: Base64Schema,
		mimeType: string(),
		annotations: AnnotationsSchema$1.optional(),
		_meta: record(string(), unknown()).optional()
	});
	/**
	* A tool call request from an assistant (LLM).
	* Represents the assistant's request to use a tool.
	*
	* @deprecated Deprecated as of protocol version 2026-07-28 (SEP-2577); remains
	* in the specification for at least twelve months. Migrate to calling LLM
	* provider APIs directly.
	*/
	const ToolUseContentSchema$1 = object({
		type: literal("tool_use"),
		name: string(),
		id: string(),
		input: record(string(), unknown()),
		_meta: record(string(), unknown()).optional()
	});
	/**
	* The contents of a resource, embedded into a prompt or tool call result.
	*/
	const EmbeddedResourceSchema$1 = object({
		type: literal("resource"),
		resource: union([TextResourceContentsSchema$1, BlobResourceContentsSchema$1]),
		annotations: AnnotationsSchema$1.optional(),
		_meta: record(string(), unknown()).optional()
	});
	/**
	* A resource that the server is capable of reading, included in a prompt or tool call result.
	*
	* Note: resource links returned by tools are not guaranteed to appear in the results of {@linkcode ListResourcesRequest | resources/list} requests.
	*/
	const ResourceLinkSchema$1 = ResourceSchema$1.extend({ type: literal("resource_link") });
	/**
	* A content block that can be used in prompts and tool results.
	*/
	const ContentBlockSchema$1 = union([
		TextContentSchema$1,
		ImageContentSchema$1,
		AudioContentSchema$1,
		ResourceLinkSchema$1,
		EmbeddedResourceSchema$1
	]);
	/**
	* Describes a message returned as part of a prompt.
	*/
	const PromptMessageSchema$1 = object({
		role: RoleSchema$1,
		content: ContentBlockSchema$1
	});
	/**
	* The server's response to a {@linkcode GetPromptRequest | prompts/get} request from the client.
	*/
	const GetPromptResultSchema$1 = ResultSchema$1.extend({
		description: string().optional(),
		messages: array(PromptMessageSchema$1)
	});
	/**
	* An optional notification from the server to the client, informing it that the list of prompts it offers has changed. This may be issued by servers without any previous subscription from the client.
	*/
	const PromptListChangedNotificationSchema$1 = NotificationSchema$1.extend({
		method: literal("notifications/prompts/list_changed"),
		params: NotificationsParamsSchema$1.optional()
	});
	/**
	* Additional properties describing a `Tool` to clients.
	*
	* NOTE: all properties in {@linkcode ToolAnnotations} are **hints**.
	* They are not guaranteed to provide a faithful description of
	* tool behavior (including descriptive properties like `title`).
	*
	* Clients should never make tool use decisions based on `ToolAnnotations`
	* received from untrusted servers.
	*/
	const ToolAnnotationsSchema$1 = object({
		title: string().optional(),
		readOnlyHint: boolean().optional(),
		destructiveHint: boolean().optional(),
		idempotentHint: boolean().optional(),
		openWorldHint: boolean().optional()
	});
	/**
	* Execution-related properties for a tool.
	*/
	const ToolExecutionSchema$1 = object({ taskSupport: _enum([
		"required",
		"optional",
		"forbidden"
	]).optional() });
	/**
	* Definition for a tool the client can call.
	*/
	const ToolSchema$1 = object({
		...BaseMetadataSchema$1.shape,
		...IconsSchema$1.shape,
		description: string().optional(),
		inputSchema: object({
			type: literal("object"),
			properties: record(string(), JSONValueSchema$1).optional(),
			required: array(string()).optional()
		}).catchall(unknown()),
		outputSchema: object({
			type: literal("object"),
			properties: record(string(), JSONValueSchema$1).optional(),
			required: array(string()).optional()
		}).catchall(unknown()).optional(),
		annotations: ToolAnnotationsSchema$1.optional(),
		execution: ToolExecutionSchema$1.optional(),
		_meta: record(string(), unknown()).optional()
	});
	/**
	* Sent from the client to request a list of tools the server has.
	*/
	const ListToolsRequestSchema$1 = PaginatedRequestSchema$1.extend({ method: literal("tools/list") });
	/**
	* The server's response to a {@linkcode ListToolsRequest | tools/list} request from the client.
	*/
	const ListToolsResultSchema$1 = PaginatedResultSchema$1.extend({ tools: array(ToolSchema$1) });
	/**
	* The server's response to a tool call.
	*/
	const CallToolResultSchema$1 = ResultSchema$1.extend({
		content: array(ContentBlockSchema$1),
		structuredContent: record(string(), unknown()).optional(),
		isError: boolean().optional()
	});
	/**
	* Parameters for a `tools/call` request.
	*/
	const CallToolRequestParamsSchema$1 = TaskAugmentedRequestParamsSchema$1.extend({
		name: string(),
		arguments: record(string(), unknown()).optional()
	});
	/**
	* Used by the client to invoke a tool provided by the server.
	*/
	const CallToolRequestSchema$1 = RequestSchema$1.extend({
		method: literal("tools/call"),
		params: CallToolRequestParamsSchema$1
	});
	/**
	* An optional notification from the server to the client, informing it that the list of tools it offers has changed. This may be issued by servers without any previous subscription from the client.
	*/
	const ToolListChangedNotificationSchema$1 = NotificationSchema$1.extend({
		method: literal("notifications/tools/list_changed"),
		params: NotificationsParamsSchema$1.optional()
	});
	/**
	* The severity of a log message.
	*
	* @deprecated Deprecated as of protocol version 2026-07-28 (SEP-2577); remains
	* in the specification for at least twelve months. Migrate to stderr logging
	* (STDIO servers) or OpenTelemetry.
	*/
	const LoggingLevelSchema$1 = _enum([
		"debug",
		"info",
		"notice",
		"warning",
		"error",
		"critical",
		"alert",
		"emergency"
	]);
	/**
	* Parameters for a `logging/setLevel` request.
	*
	* @deprecated Deprecated as of protocol version 2026-07-28 (SEP-2577); remains
	* in the specification for at least twelve months. Migrate to stderr logging
	* (STDIO servers) or OpenTelemetry.
	*/
	const SetLevelRequestParamsSchema$1 = BaseRequestParamsSchema$1.extend({ level: LoggingLevelSchema$1 });
	/**
	* A request from the client to the server, to enable or adjust logging.
	*
	* @deprecated Deprecated as of protocol version 2026-07-28 (SEP-2577); remains
	* in the specification for at least twelve months. Migrate to stderr logging
	* (STDIO servers) or OpenTelemetry.
	*/
	const SetLevelRequestSchema$1 = RequestSchema$1.extend({
		method: literal("logging/setLevel"),
		params: SetLevelRequestParamsSchema$1
	});
	/**
	* Parameters for a `notifications/message` notification.
	*
	* @deprecated Deprecated as of protocol version 2026-07-28 (SEP-2577); remains
	* in the specification for at least twelve months. Migrate to stderr logging
	* (STDIO servers) or OpenTelemetry.
	*/
	const LoggingMessageNotificationParamsSchema$1 = NotificationsParamsSchema$1.extend({
		level: LoggingLevelSchema$1,
		logger: string().optional(),
		data: unknown()
	});
	/**
	* Notification of a log message passed from server to client. If no `logging/setLevel` request has been sent from the client, the server MAY decide which messages to send automatically.
	*
	* @deprecated Deprecated as of protocol version 2026-07-28 (SEP-2577); remains
	* in the specification for at least twelve months. Migrate to stderr logging
	* (STDIO servers) or OpenTelemetry.
	*/
	const LoggingMessageNotificationSchema$1 = NotificationSchema$1.extend({
		method: literal("notifications/message"),
		params: LoggingMessageNotificationParamsSchema$1
	});
	/**
	* Hints to use for model selection.
	*
	* @deprecated Deprecated as of protocol version 2026-07-28 (SEP-2577); remains
	* in the specification for at least twelve months. Migrate to calling LLM
	* provider APIs directly.
	*/
	const ModelHintSchema$1 = object({ name: string().optional() });
	/**
	* The server's preferences for model selection, requested of the client during sampling.
	*
	* @deprecated Deprecated as of protocol version 2026-07-28 (SEP-2577); remains
	* in the specification for at least twelve months. Migrate to calling LLM
	* provider APIs directly.
	*/
	const ModelPreferencesSchema$1 = object({
		hints: array(ModelHintSchema$1).optional(),
		costPriority: number().min(0).max(1).optional(),
		speedPriority: number().min(0).max(1).optional(),
		intelligencePriority: number().min(0).max(1).optional()
	});
	/**
	* Controls tool usage behavior in sampling requests.
	*
	* @deprecated Deprecated as of protocol version 2026-07-28 (SEP-2577); remains
	* in the specification for at least twelve months. Migrate to calling LLM
	* provider APIs directly.
	*/
	const ToolChoiceSchema$1 = object({ mode: _enum([
		"auto",
		"required",
		"none"
	]).optional() });
	/**
	* The result of a tool execution, provided by the user (server).
	* Represents the outcome of invoking a tool requested via `ToolUseContent`.
	*
	* @deprecated Deprecated as of protocol version 2026-07-28 (SEP-2577); remains
	* in the specification for at least twelve months. Migrate to calling LLM
	* provider APIs directly.
	*/
	const ToolResultContentSchema$1 = object({
		type: literal("tool_result"),
		toolUseId: string().describe("The unique identifier for the corresponding tool call."),
		content: array(ContentBlockSchema$1),
		structuredContent: object({}).loose().optional(),
		isError: boolean().optional(),
		_meta: record(string(), unknown()).optional()
	});
	/**
	* Basic content types for sampling responses (without tool use).
	* Used for backwards-compatible {@linkcode CreateMessageResult} when tools are not used.
	*
	* @deprecated Deprecated as of protocol version 2026-07-28 (SEP-2577); remains
	* in the specification for at least twelve months. Migrate to calling LLM
	* provider APIs directly.
	*/
	const SamplingContentSchema$1 = discriminatedUnion("type", [
		TextContentSchema$1,
		ImageContentSchema$1,
		AudioContentSchema$1
	]);
	/**
	* Content block types allowed in sampling messages.
	* This includes text, image, audio, tool use requests, and tool results.
	*
	* @deprecated Deprecated as of protocol version 2026-07-28 (SEP-2577); remains
	* in the specification for at least twelve months. Migrate to calling LLM
	* provider APIs directly.
	*/
	const SamplingMessageContentBlockSchema$1 = discriminatedUnion("type", [
		TextContentSchema$1,
		ImageContentSchema$1,
		AudioContentSchema$1,
		ToolUseContentSchema$1,
		ToolResultContentSchema$1
	]);
	/**
	* Describes a message issued to or received from an LLM API.
	*
	* @deprecated Deprecated as of protocol version 2026-07-28 (SEP-2577); remains
	* in the specification for at least twelve months. Migrate to calling LLM
	* provider APIs directly.
	*/
	const SamplingMessageSchema$1 = object({
		role: RoleSchema$1,
		content: union([SamplingMessageContentBlockSchema$1, array(SamplingMessageContentBlockSchema$1)]),
		_meta: record(string(), unknown()).optional()
	});
	/**
	* Parameters for a `sampling/createMessage` request.
	*
	* @deprecated Deprecated as of protocol version 2026-07-28 (SEP-2577); remains
	* in the specification for at least twelve months. Migrate to calling LLM
	* provider APIs directly.
	*/
	const CreateMessageRequestParamsSchema$1 = TaskAugmentedRequestParamsSchema$1.extend({
		messages: array(SamplingMessageSchema$1),
		modelPreferences: ModelPreferencesSchema$1.optional(),
		systemPrompt: string().optional(),
		includeContext: _enum([
			"none",
			"thisServer",
			"allServers"
		]).optional(),
		temperature: number().optional(),
		maxTokens: number().int(),
		stopSequences: array(string()).optional(),
		metadata: JSONObjectSchema$1.optional(),
		tools: array(ToolSchema$1).optional(),
		toolChoice: ToolChoiceSchema$1.optional()
	});
	/**
	* A request from the server to sample an LLM via the client. The client has full discretion over which model to select. The client should also inform the user before beginning sampling, to allow them to inspect the request (human in the loop) and decide whether to approve it.
	*
	* @deprecated Deprecated as of protocol version 2026-07-28 (SEP-2577); remains
	* in the specification for at least twelve months. Migrate to calling LLM
	* provider APIs directly.
	*/
	const CreateMessageRequestSchema$1 = RequestSchema$1.extend({
		method: literal("sampling/createMessage"),
		params: CreateMessageRequestParamsSchema$1
	});
	/**
	* The client's response to a `sampling/create_message` request from the server.
	* This is the backwards-compatible version that returns single content (no arrays).
	* Used when the request does not include tools.
	*
	* @deprecated Deprecated as of protocol version 2026-07-28 (SEP-2577); remains
	* in the specification for at least twelve months. Migrate to calling LLM
	* provider APIs directly.
	*/
	const CreateMessageResultSchema$1 = ResultSchema$1.extend({
		model: string(),
		stopReason: optional(_enum([
			"endTurn",
			"stopSequence",
			"maxTokens"
		]).or(string())),
		role: RoleSchema$1,
		content: SamplingContentSchema$1
	});
	/**
	* The client's response to a `sampling/create_message` request when tools were provided.
	* This version supports array content for tool use flows.
	*
	* @deprecated Deprecated as of protocol version 2026-07-28 (SEP-2577); remains
	* in the specification for at least twelve months. Migrate to calling LLM
	* provider APIs directly.
	*/
	const CreateMessageResultWithToolsSchema$1 = ResultSchema$1.extend({
		model: string(),
		stopReason: optional(_enum([
			"endTurn",
			"stopSequence",
			"maxTokens",
			"toolUse"
		]).or(string())),
		role: RoleSchema$1,
		content: union([SamplingMessageContentBlockSchema$1, array(SamplingMessageContentBlockSchema$1)])
	});
	/**
	* Primitive schema definition for boolean fields.
	*/
	const BooleanSchemaSchema$1 = object({
		type: literal("boolean"),
		title: string().optional(),
		description: string().optional(),
		default: boolean().optional()
	});
	/**
	* Primitive schema definition for string fields.
	*/
	const StringSchemaSchema$1 = object({
		type: literal("string"),
		title: string().optional(),
		description: string().optional(),
		minLength: number().optional(),
		maxLength: number().optional(),
		format: _enum([
			"email",
			"uri",
			"date",
			"date-time"
		]).optional(),
		default: string().optional()
	});
	/**
	* Primitive schema definition for number fields.
	*/
	const NumberSchemaSchema$1 = object({
		type: _enum(["number", "integer"]),
		title: string().optional(),
		description: string().optional(),
		minimum: number().optional(),
		maximum: number().optional(),
		default: number().optional()
	});
	/**
	* Schema for single-selection enumeration without display titles for options.
	*/
	const UntitledSingleSelectEnumSchemaSchema$1 = object({
		type: literal("string"),
		title: string().optional(),
		description: string().optional(),
		enum: array(string()),
		default: string().optional()
	});
	/**
	* Schema for single-selection enumeration with display titles for each option.
	*/
	const TitledSingleSelectEnumSchemaSchema$1 = object({
		type: literal("string"),
		title: string().optional(),
		description: string().optional(),
		oneOf: array(object({
			const: string(),
			title: string()
		})),
		default: string().optional()
	});
	/**
	* Use {@linkcode TitledSingleSelectEnumSchema} instead.
	* This interface will be removed in a future version.
	*/
	const LegacyTitledEnumSchemaSchema$1 = object({
		type: literal("string"),
		title: string().optional(),
		description: string().optional(),
		enum: array(string()),
		enumNames: array(string()).optional(),
		default: string().optional()
	});
	const SingleSelectEnumSchemaSchema$1 = union([UntitledSingleSelectEnumSchemaSchema$1, TitledSingleSelectEnumSchemaSchema$1]);
	/**
	* Schema for multiple-selection enumeration without display titles for options.
	*/
	const UntitledMultiSelectEnumSchemaSchema$1 = object({
		type: literal("array"),
		title: string().optional(),
		description: string().optional(),
		minItems: number().optional(),
		maxItems: number().optional(),
		items: object({
			type: literal("string"),
			enum: array(string())
		}),
		default: array(string()).optional()
	});
	/**
	* Schema for multiple-selection enumeration with display titles for each option.
	*/
	const TitledMultiSelectEnumSchemaSchema$1 = object({
		type: literal("array"),
		title: string().optional(),
		description: string().optional(),
		minItems: number().optional(),
		maxItems: number().optional(),
		items: object({ anyOf: array(object({
			const: string(),
			title: string()
		})) }),
		default: array(string()).optional()
	});
	/**
	* Combined schema for multiple-selection enumeration
	*/
	const MultiSelectEnumSchemaSchema$1 = union([UntitledMultiSelectEnumSchemaSchema$1, TitledMultiSelectEnumSchemaSchema$1]);
	/**
	* Primitive schema definition for enum fields.
	*/
	const EnumSchemaSchema$1 = union([
		LegacyTitledEnumSchemaSchema$1,
		SingleSelectEnumSchemaSchema$1,
		MultiSelectEnumSchemaSchema$1
	]);
	/**
	* Union of all primitive schema definitions.
	*/
	const PrimitiveSchemaDefinitionSchema$1 = union([
		EnumSchemaSchema$1,
		BooleanSchemaSchema$1,
		StringSchemaSchema$1,
		NumberSchemaSchema$1
	]);
	/**
	* Parameters for an `elicitation/create` request for form-based elicitation.
	*/
	const ElicitRequestFormParamsSchema$1 = TaskAugmentedRequestParamsSchema$1.extend({
		mode: literal("form").optional(),
		message: string(),
		requestedSchema: object({
			type: literal("object"),
			properties: record(string(), PrimitiveSchemaDefinitionSchema$1),
			required: array(string()).optional()
		}).catchall(unknown())
	});
	/**
	* Parameters for an {@linkcode ElicitRequest | elicitation/create} request for URL-based elicitation.
	*/
	const ElicitRequestURLParamsSchema$1 = TaskAugmentedRequestParamsSchema$1.extend({
		mode: literal("url"),
		message: string(),
		elicitationId: string(),
		url: string().url()
	});
	/**
	* The parameters for a request to elicit additional information from the user via the client.
	*/
	const ElicitRequestParamsSchema$1 = union([ElicitRequestFormParamsSchema$1, ElicitRequestURLParamsSchema$1]);
	/**
	* A request from the server to elicit user input via the client.
	* The client should present the message and form fields to the user (form mode)
	* or navigate to a URL (URL mode).
	*/
	const ElicitRequestSchema$1 = RequestSchema$1.extend({
		method: literal("elicitation/create"),
		params: ElicitRequestParamsSchema$1
	});
	/**
	* Parameters for a {@linkcode ElicitationCompleteNotification | notifications/elicitation/complete} notification.
	*
	* @category notifications/elicitation/complete
	*/
	const ElicitationCompleteNotificationParamsSchema$1 = NotificationsParamsSchema$1.extend({ elicitationId: string() });
	/**
	* A notification from the server to the client, informing it of a completion of an out-of-band elicitation request.
	*
	* @category notifications/elicitation/complete
	*/
	const ElicitationCompleteNotificationSchema$1 = NotificationSchema$1.extend({
		method: literal("notifications/elicitation/complete"),
		params: ElicitationCompleteNotificationParamsSchema$1
	});
	/**
	* The client's response to an {@linkcode ElicitRequest | elicitation/create} request from the server.
	*/
	const ElicitResultSchema$1 = ResultSchema$1.extend({
		action: _enum([
			"accept",
			"decline",
			"cancel"
		]),
		content: preprocess((val) => val === null ? void 0 : val, record(string(), union([
			string(),
			number(),
			boolean(),
			array(string())
		])).optional())
	});
	/**
	* A reference to a resource or resource template definition.
	*/
	const ResourceTemplateReferenceSchema$1 = object({
		type: literal("ref/resource"),
		uri: string()
	});
	/**
	* Identifies a prompt.
	*/
	const PromptReferenceSchema$1 = object({
		type: literal("ref/prompt"),
		name: string()
	});
	/**
	* Parameters for a {@linkcode CompleteRequest | completion/complete} request.
	*/
	const CompleteRequestParamsSchema$1 = BaseRequestParamsSchema$1.extend({
		ref: union([PromptReferenceSchema$1, ResourceTemplateReferenceSchema$1]),
		argument: object({
			name: string(),
			value: string()
		}),
		context: object({ arguments: record(string(), string()).optional() }).optional()
	});
	/**
	* A request from the client to the server, to ask for completion options.
	*/
	const CompleteRequestSchema$1 = RequestSchema$1.extend({
		method: literal("completion/complete"),
		params: CompleteRequestParamsSchema$1
	});
	/**
	* The server's response to a {@linkcode CompleteRequest | completion/complete} request
	*/
	const CompleteResultSchema$1 = ResultSchema$1.extend({ completion: looseObject({
		values: array(string()).max(100),
		total: optional(number().int()),
		hasMore: optional(boolean())
	}) });
	/**
	* Represents a root directory or file that the server can operate on.
	*
	* @deprecated Deprecated as of protocol version 2026-07-28 (SEP-2577); remains
	* in the specification for at least twelve months. Migrate to passing paths via
	* tool parameters, resource URIs, or configuration.
	*/
	const RootSchema$1 = object({
		uri: string().startsWith("file://"),
		name: string().optional(),
		_meta: record(string(), unknown()).optional()
	});
	/**
	* Sent from the server to request a list of root URIs from the client.
	*
	* @deprecated Deprecated as of protocol version 2026-07-28 (SEP-2577); remains
	* in the specification for at least twelve months. Migrate to passing paths via
	* tool parameters, resource URIs, or configuration.
	*/
	const ListRootsRequestSchema$1 = RequestSchema$1.extend({
		method: literal("roots/list"),
		params: BaseRequestParamsSchema$1.optional()
	});
	/**
	* The client's response to a `roots/list` request from the server.
	*
	* @deprecated Deprecated as of protocol version 2026-07-28 (SEP-2577); remains
	* in the specification for at least twelve months. Migrate to passing paths via
	* tool parameters, resource URIs, or configuration.
	*/
	const ListRootsResultSchema$1 = ResultSchema$1.extend({ roots: array(RootSchema$1) });
	/**
	* A notification from the client to the server, informing it that the list of roots has changed.
	*
	* @deprecated Deprecated as of protocol version 2026-07-28 (SEP-2577); remains
	* in the specification for at least twelve months. Migrate to passing paths via
	* tool parameters, resource URIs, or configuration.
	*/
	const RootsListChangedNotificationSchema$1 = NotificationSchema$1.extend({
		method: literal("notifications/roots/list_changed"),
		params: NotificationsParamsSchema$1.optional()
	});
	/**
	* Task creation parameters, used to ask that the server create a task to represent a request.
	*
	* @deprecated 2025-11-25 wire vocabulary with no SDK runtime; kept importable for interoperability only.
	*/
	const TaskCreationParamsSchema$1 = looseObject({
		ttl: number().optional(),
		pollInterval: number().optional()
	});
	/**
	* The status of a task.
	*
	* @deprecated 2025-11-25 wire vocabulary with no SDK runtime; kept importable for interoperability only.
	*/
	const TaskStatusSchema$1 = _enum([
		"working",
		"input_required",
		"completed",
		"failed",
		"cancelled"
	]);
	/**
	* A pollable state object associated with a request.
	*
	* @deprecated 2025-11-25 wire vocabulary with no SDK runtime; kept importable for interoperability only.
	*/
	const TaskSchema$1 = object({
		taskId: string(),
		status: TaskStatusSchema$1,
		ttl: union([number(), _null()]),
		createdAt: string(),
		lastUpdatedAt: string(),
		pollInterval: optional(number()),
		statusMessage: optional(string())
	});
	/**
	* Result returned when a task is created, containing the task data wrapped in a `task` field.
	*
	* @deprecated 2025-11-25 wire vocabulary with no SDK runtime; kept importable for interoperability only.
	*/
	const CreateTaskResultSchema$1 = ResultSchema$1.extend({ task: TaskSchema$1 });
	/**
	* Parameters for task status notification.
	*
	* @deprecated 2025-11-25 wire vocabulary with no SDK runtime; kept importable for interoperability only.
	*/
	const TaskStatusNotificationParamsSchema$1 = NotificationsParamsSchema$1.merge(TaskSchema$1);
	/**
	* A notification sent when a task's status changes.
	*
	* @deprecated 2025-11-25 wire vocabulary with no SDK runtime; kept importable for interoperability only.
	*/
	const TaskStatusNotificationSchema$1 = NotificationSchema$1.extend({
		method: literal("notifications/tasks/status"),
		params: TaskStatusNotificationParamsSchema$1
	});
	/**
	* A request to get the state of a specific task.
	*
	* @deprecated 2025-11-25 wire vocabulary with no SDK runtime; kept importable for interoperability only.
	*/
	const GetTaskRequestSchema$1 = RequestSchema$1.extend({
		method: literal("tasks/get"),
		params: BaseRequestParamsSchema$1.extend({ taskId: string() })
	});
	/**
	* The response to a {@linkcode GetTaskRequest | tasks/get} request.
	*
	* @deprecated 2025-11-25 wire vocabulary with no SDK runtime; kept importable for interoperability only.
	*/
	const GetTaskResultSchema$1 = ResultSchema$1.merge(TaskSchema$1);
	/**
	* A request to get the result of a specific task.
	*
	* @deprecated 2025-11-25 wire vocabulary with no SDK runtime; kept importable for interoperability only.
	*/
	const GetTaskPayloadRequestSchema$1 = RequestSchema$1.extend({
		method: literal("tasks/result"),
		params: BaseRequestParamsSchema$1.extend({ taskId: string() })
	});
	/**
	* The response to a `tasks/result` request.
	* The structure matches the result type of the original request.
	* For example, a {@linkcode CallToolRequest | tools/call} task would return the `CallToolResult` structure.
	*
	*
	* @deprecated 2025-11-25 wire vocabulary with no SDK runtime; kept importable for interoperability only.
	*/
	const GetTaskPayloadResultSchema$1 = ResultSchema$1.loose();
	/**
	* A request to list tasks.
	*
	* @deprecated 2025-11-25 wire vocabulary with no SDK runtime; kept importable for interoperability only.
	*/
	const ListTasksRequestSchema$1 = PaginatedRequestSchema$1.extend({ method: literal("tasks/list") });
	/**
	* The response to a {@linkcode ListTasksRequest | tasks/list} request.
	*
	* @deprecated 2025-11-25 wire vocabulary with no SDK runtime; kept importable for interoperability only.
	*/
	const ListTasksResultSchema$1 = PaginatedResultSchema$1.extend({ tasks: array(TaskSchema$1) });
	/**
	* A request to cancel a specific task.
	*
	* @deprecated 2025-11-25 wire vocabulary with no SDK runtime; kept importable for interoperability only.
	*/
	const CancelTaskRequestSchema$1 = RequestSchema$1.extend({
		method: literal("tasks/cancel"),
		params: BaseRequestParamsSchema$1.extend({ taskId: string() })
	});
	return {
		JSONValueSchema: JSONValueSchema$1,
		JSONObjectSchema: JSONObjectSchema$1,
		ProgressTokenSchema: ProgressTokenSchema$1,
		CursorSchema: CursorSchema$1,
		TaskMetadataSchema: TaskMetadataSchema$1,
		RelatedTaskMetadataSchema: RelatedTaskMetadataSchema$1,
		RequestMetaSchema: RequestMetaSchema$1,
		BaseRequestParamsSchema: BaseRequestParamsSchema$1,
		TaskAugmentedRequestParamsSchema: TaskAugmentedRequestParamsSchema$1,
		RequestSchema: RequestSchema$1,
		NotificationsParamsSchema: NotificationsParamsSchema$1,
		NotificationSchema: NotificationSchema$1,
		ResultSchema: ResultSchema$1,
		RequestIdSchema: RequestIdSchema$1,
		EmptyResultSchema: EmptyResultSchema$1,
		CancelledNotificationParamsSchema: CancelledNotificationParamsSchema$1,
		CancelledNotificationSchema: CancelledNotificationSchema$1,
		IconSchema: IconSchema$1,
		IconsSchema: IconsSchema$1,
		BaseMetadataSchema: BaseMetadataSchema$1,
		ImplementationSchema: ImplementationSchema$1,
		ClientTasksCapabilitySchema: ClientTasksCapabilitySchema$1,
		ServerTasksCapabilitySchema: ServerTasksCapabilitySchema$1,
		ClientCapabilitiesSchema: ClientCapabilitiesSchema$1,
		InitializeRequestParamsSchema: InitializeRequestParamsSchema$1,
		InitializeRequestSchema: InitializeRequestSchema$1,
		ServerCapabilitiesSchema: ServerCapabilitiesSchema$1,
		InitializeResultSchema: InitializeResultSchema$1,
		InitializedNotificationSchema: InitializedNotificationSchema$1,
		PingRequestSchema: PingRequestSchema$1,
		ProgressSchema: ProgressSchema$1,
		ProgressNotificationParamsSchema: ProgressNotificationParamsSchema$1,
		ProgressNotificationSchema: ProgressNotificationSchema$1,
		PaginatedRequestParamsSchema: PaginatedRequestParamsSchema$1,
		PaginatedRequestSchema: PaginatedRequestSchema$1,
		PaginatedResultSchema: PaginatedResultSchema$1,
		ResourceContentsSchema: ResourceContentsSchema$1,
		TextResourceContentsSchema: TextResourceContentsSchema$1,
		BlobResourceContentsSchema: BlobResourceContentsSchema$1,
		RoleSchema: RoleSchema$1,
		AnnotationsSchema: AnnotationsSchema$1,
		ResourceSchema: ResourceSchema$1,
		ResourceTemplateSchema: ResourceTemplateSchema$1,
		ListResourcesRequestSchema: ListResourcesRequestSchema$1,
		ListResourcesResultSchema: ListResourcesResultSchema$1,
		ListResourceTemplatesRequestSchema: ListResourceTemplatesRequestSchema$1,
		ListResourceTemplatesResultSchema: ListResourceTemplatesResultSchema$1,
		ResourceRequestParamsSchema: ResourceRequestParamsSchema$1,
		ReadResourceRequestParamsSchema: ReadResourceRequestParamsSchema$1,
		ReadResourceRequestSchema: ReadResourceRequestSchema$1,
		ReadResourceResultSchema: ReadResourceResultSchema$1,
		ResourceListChangedNotificationSchema: ResourceListChangedNotificationSchema$1,
		SubscribeRequestParamsSchema: SubscribeRequestParamsSchema$1,
		SubscribeRequestSchema: SubscribeRequestSchema$1,
		UnsubscribeRequestParamsSchema: UnsubscribeRequestParamsSchema$1,
		UnsubscribeRequestSchema: UnsubscribeRequestSchema$1,
		ResourceUpdatedNotificationParamsSchema: ResourceUpdatedNotificationParamsSchema$1,
		ResourceUpdatedNotificationSchema: ResourceUpdatedNotificationSchema$1,
		PromptArgumentSchema: PromptArgumentSchema$1,
		PromptSchema: PromptSchema$1,
		ListPromptsRequestSchema: ListPromptsRequestSchema$1,
		ListPromptsResultSchema: ListPromptsResultSchema$1,
		GetPromptRequestParamsSchema: GetPromptRequestParamsSchema$1,
		GetPromptRequestSchema: GetPromptRequestSchema$1,
		TextContentSchema: TextContentSchema$1,
		ImageContentSchema: ImageContentSchema$1,
		AudioContentSchema: AudioContentSchema$1,
		ToolUseContentSchema: ToolUseContentSchema$1,
		EmbeddedResourceSchema: EmbeddedResourceSchema$1,
		ResourceLinkSchema: ResourceLinkSchema$1,
		ContentBlockSchema: ContentBlockSchema$1,
		PromptMessageSchema: PromptMessageSchema$1,
		GetPromptResultSchema: GetPromptResultSchema$1,
		PromptListChangedNotificationSchema: PromptListChangedNotificationSchema$1,
		ToolAnnotationsSchema: ToolAnnotationsSchema$1,
		ToolExecutionSchema: ToolExecutionSchema$1,
		ToolSchema: ToolSchema$1,
		ListToolsRequestSchema: ListToolsRequestSchema$1,
		ListToolsResultSchema: ListToolsResultSchema$1,
		CallToolResultSchema: CallToolResultSchema$1,
		CallToolRequestParamsSchema: CallToolRequestParamsSchema$1,
		CallToolRequestSchema: CallToolRequestSchema$1,
		ToolListChangedNotificationSchema: ToolListChangedNotificationSchema$1,
		LoggingLevelSchema: LoggingLevelSchema$1,
		SetLevelRequestParamsSchema: SetLevelRequestParamsSchema$1,
		SetLevelRequestSchema: SetLevelRequestSchema$1,
		LoggingMessageNotificationParamsSchema: LoggingMessageNotificationParamsSchema$1,
		LoggingMessageNotificationSchema: LoggingMessageNotificationSchema$1,
		ModelHintSchema: ModelHintSchema$1,
		ModelPreferencesSchema: ModelPreferencesSchema$1,
		ToolChoiceSchema: ToolChoiceSchema$1,
		ToolResultContentSchema: ToolResultContentSchema$1,
		SamplingContentSchema: SamplingContentSchema$1,
		SamplingMessageContentBlockSchema: SamplingMessageContentBlockSchema$1,
		SamplingMessageSchema: SamplingMessageSchema$1,
		CreateMessageRequestParamsSchema: CreateMessageRequestParamsSchema$1,
		CreateMessageRequestSchema: CreateMessageRequestSchema$1,
		CreateMessageResultSchema: CreateMessageResultSchema$1,
		CreateMessageResultWithToolsSchema: CreateMessageResultWithToolsSchema$1,
		BooleanSchemaSchema: BooleanSchemaSchema$1,
		StringSchemaSchema: StringSchemaSchema$1,
		NumberSchemaSchema: NumberSchemaSchema$1,
		UntitledSingleSelectEnumSchemaSchema: UntitledSingleSelectEnumSchemaSchema$1,
		TitledSingleSelectEnumSchemaSchema: TitledSingleSelectEnumSchemaSchema$1,
		LegacyTitledEnumSchemaSchema: LegacyTitledEnumSchemaSchema$1,
		SingleSelectEnumSchemaSchema: SingleSelectEnumSchemaSchema$1,
		UntitledMultiSelectEnumSchemaSchema: UntitledMultiSelectEnumSchemaSchema$1,
		TitledMultiSelectEnumSchemaSchema: TitledMultiSelectEnumSchemaSchema$1,
		MultiSelectEnumSchemaSchema: MultiSelectEnumSchemaSchema$1,
		EnumSchemaSchema: EnumSchemaSchema$1,
		PrimitiveSchemaDefinitionSchema: PrimitiveSchemaDefinitionSchema$1,
		ElicitRequestFormParamsSchema: ElicitRequestFormParamsSchema$1,
		ElicitRequestURLParamsSchema: ElicitRequestURLParamsSchema$1,
		ElicitRequestParamsSchema: ElicitRequestParamsSchema$1,
		ElicitRequestSchema: ElicitRequestSchema$1,
		ElicitationCompleteNotificationParamsSchema: ElicitationCompleteNotificationParamsSchema$1,
		ElicitationCompleteNotificationSchema: ElicitationCompleteNotificationSchema$1,
		ElicitResultSchema: ElicitResultSchema$1,
		ResourceTemplateReferenceSchema: ResourceTemplateReferenceSchema$1,
		PromptReferenceSchema: PromptReferenceSchema$1,
		CompleteRequestParamsSchema: CompleteRequestParamsSchema$1,
		CompleteRequestSchema: CompleteRequestSchema$1,
		CompleteResultSchema: CompleteResultSchema$1,
		RootSchema: RootSchema$1,
		ListRootsRequestSchema: ListRootsRequestSchema$1,
		ListRootsResultSchema: ListRootsResultSchema$1,
		RootsListChangedNotificationSchema: RootsListChangedNotificationSchema$1,
		TaskCreationParamsSchema: TaskCreationParamsSchema$1,
		TaskStatusSchema: TaskStatusSchema$1,
		TaskSchema: TaskSchema$1,
		CreateTaskResultSchema: CreateTaskResultSchema$1,
		TaskStatusNotificationParamsSchema: TaskStatusNotificationParamsSchema$1,
		TaskStatusNotificationSchema: TaskStatusNotificationSchema$1,
		GetTaskRequestSchema: GetTaskRequestSchema$1,
		GetTaskResultSchema: GetTaskResultSchema$1,
		GetTaskPayloadRequestSchema: GetTaskPayloadRequestSchema$1,
		GetTaskPayloadResultSchema: GetTaskPayloadResultSchema$1,
		ListTasksRequestSchema: ListTasksRequestSchema$1,
		ListTasksResultSchema: ListTasksResultSchema$1,
		CancelTaskRequestSchema: CancelTaskRequestSchema$1,
		CancelTaskResultSchema: ResultSchema$1.merge(TaskSchema$1),
		ClientRequestSchema: union([
			PingRequestSchema$1,
			InitializeRequestSchema$1,
			CompleteRequestSchema$1,
			SetLevelRequestSchema$1,
			GetPromptRequestSchema$1,
			ListPromptsRequestSchema$1,
			ListResourcesRequestSchema$1,
			ListResourceTemplatesRequestSchema$1,
			ReadResourceRequestSchema$1,
			SubscribeRequestSchema$1,
			UnsubscribeRequestSchema$1,
			CallToolRequestSchema$1,
			ListToolsRequestSchema$1,
			GetTaskRequestSchema$1,
			GetTaskPayloadRequestSchema$1,
			ListTasksRequestSchema$1,
			CancelTaskRequestSchema$1
		]),
		ClientNotificationSchema: union([
			CancelledNotificationSchema$1,
			ProgressNotificationSchema$1,
			InitializedNotificationSchema$1,
			RootsListChangedNotificationSchema$1,
			TaskStatusNotificationSchema$1
		]),
		ClientResultSchema: union([
			EmptyResultSchema$1,
			CreateMessageResultSchema$1,
			CreateMessageResultWithToolsSchema$1,
			ElicitResultSchema$1,
			ListRootsResultSchema$1,
			GetTaskResultSchema$1,
			ListTasksResultSchema$1,
			CreateTaskResultSchema$1
		]),
		ServerRequestSchema: union([
			PingRequestSchema$1,
			CreateMessageRequestSchema$1,
			ElicitRequestSchema$1,
			ListRootsRequestSchema$1,
			GetTaskRequestSchema$1,
			GetTaskPayloadRequestSchema$1,
			ListTasksRequestSchema$1,
			CancelTaskRequestSchema$1
		]),
		ServerNotificationSchema: union([
			CancelledNotificationSchema$1,
			ProgressNotificationSchema$1,
			LoggingMessageNotificationSchema$1,
			ResourceUpdatedNotificationSchema$1,
			ResourceListChangedNotificationSchema$1,
			ToolListChangedNotificationSchema$1,
			PromptListChangedNotificationSchema$1,
			TaskStatusNotificationSchema$1,
			ElicitationCompleteNotificationSchema$1
		]),
		ServerResultSchema: union([
			EmptyResultSchema$1,
			InitializeResultSchema$1,
			CompleteResultSchema$1,
			GetPromptResultSchema$1,
			ListPromptsResultSchema$1,
			ListResourcesResultSchema$1,
			ListResourceTemplatesResultSchema$1,
			ReadResourceResultSchema$1,
			CallToolResultSchema$1,
			ListToolsResultSchema$1,
			GetTaskResultSchema$1,
			ListTasksResultSchema$1,
			CreateTaskResultSchema$1
		]),
		CallToolResultWireSchema: unknown().superRefine((value, ctx) => {
			if (typeof value !== "object" || value === null || Array.isArray(value) || value.content !== void 0) return;
			for (const key of TOOL_RESULT_FOREIGN_FAMILY_KEYS) if (key in value) {
				ctx.addIssue({
					code: "custom",
					message: `content is required when the body carries '${key}' — another result family cannot default into an empty tools/call success`
				});
				return;
			}
		}).transform(normalizeContentlessToolResult).pipe(CallToolResultSchema$1)
	};
}
var memo$1;
/**
* Builds the era wire-schema set on first call and returns the same object
* thereafter. Module evaluation stays construction-free so importing the
* era codec/registry costs nothing until the first validation actually
* needs a schema; the registry, the codec, and the eager `schemas.ts`
* shim all pull through this memo, so reference identity holds across
* every consumer.
*/
function buildSchemas2025() {
	return memo$1 ??= build$1();
}
/**
* SEP-2106 legacy `outputSchema` wrap helpers (2025-era projection only).
*
* The neutral / 2026-07-28 model lets a tool's `outputSchema` carry any JSON
* Schema root. The 2025-11-25 wire shape requires `type:'object'` at the root,
* so when an era-blind handler advertises a non-object root, the 2025 codec's
* `encodeResult('tools/list', …)` projects it down to
* `{type:'object', properties:{result:<natural>}, required:['result']}`, and
* `projectCallToolResult` wraps the matching `structuredContent` as
* `{result:<value>}`. The 2026 codec's projections are the identity.
*
* These helpers are wire-layer property — they exist so the projection can
* live behind {@link WireCodec.encodeResult} / {@link WireCodec.projectCallToolResult}
* and never be re-derived in shared/ or server-side code.
*/
/**
* Whether a JSON Schema's root is non-object: either an explicit non-object
* `type`, or a typeless root such as `{anyOf:[…]}`. Object-shaped typeless
* roots that the schema-conversion layer can prove are objects are stamped
* `type:'object'` upstream, so they reach this predicate as object roots.
*/
function isNonObjectJsonSchemaRoot(json) {
	return json["type"] !== "object";
}
/**
* Keyword-position keys whose values are instance data (not subschemas). A
* `{$ref:…}` appearing inside one is a literal value, not a JSON Pointer to
* rewrite. Only consulted when the current object is in keyword position —
* a PROPERTY named `default`/`const` (under `properties`/`$defs`/…) is a name
* position whose value IS a subschema and is recursed into.
*/
var REF_REWRITE_DATA_POSITION_KEYS = /* @__PURE__ */ new Set([
	"const",
	"enum",
	"default",
	"examples"
]);
/**
* Keyword-position keys whose value is a name→subschema map. Entries inside
* such a map are in NAME position: their keys are author-chosen property
* names (which may collide with JSON Schema keywords), their values are
* subschemas to recurse into.
*/
var REF_REWRITE_NAME_MAP_KEYS = /* @__PURE__ */ new Set([
	"properties",
	"patternProperties",
	"$defs",
	"definitions",
	"dependentSchemas",
	"dependencies"
]);
/**
* Whether a subtree's `$id` establishes a new resolution base. A fragment-only
* `$id` (`"#item"`, the draft-07/06 spelling of 2020-12's `$anchor`) does not
* change the RFC 3986 base URI — same-document pointers inside still resolve
* against the document root and must be rewritten.
*/
function establishesNewBase(id) {
	return id !== void 0 && !(typeof id === "string" && id.startsWith("#"));
}
/**
* Wrap a non-object output schema in the 2025-era envelope:
* `{type:'object', properties:{result:<natural>}, required:['result']}`.
*
* Same-document `$ref` / `$dynamicRef` JSON Pointers inside the natural schema
* (e.g. `#/properties/foo` produced by zod for de-duplicated/recursive types)
* are rewritten to account for the new `#/properties/result` root: bare `#` →
* `#/properties/result`, `#/…` → `#/properties/result/…`. Cross-document refs
* (anything not starting with `#`) are left untouched.
*
* The rewrite is position-aware: data-valued keywords
* (`const`/`enum`/`default`/`examples`) in keyword position are NOT descended
* into; the same names appearing as property names under
* `properties`/`patternProperties`/`$defs`/`definitions`/`dependentSchemas`/
* `dependencies` ARE descended into (they're subschemas). The rewrite is also
* `$id`-scoped: if the natural root carries a base-establishing `$id` no
* pointer is rewritten (same-document refs inside resolve against the embedded
* `$id` base, not the wrapper root), and any subtree that establishes its own
* `$id` is left untouched for the same reason. Fragment-only `$id` (`"#item"`,
* draft-07's anchor spelling) does not establish a base and IS descended into.
*/
function wrapOutputSchemaForLegacy(natural) {
	const $schema = typeof natural["$schema"] === "string" ? natural["$schema"] : void 0;
	if (establishesNewBase(natural["$id"])) return {
		...$schema !== void 0 && { $schema },
		type: "object",
		properties: { result: natural },
		required: ["result"]
	};
	const convertRecursiveRefs = declares2019Dialect(natural["$schema"]) && natural["$recursiveAnchor"] !== true;
	const rewriteRefs = (node, parentIsNameMap) => {
		if (Array.isArray(node)) return node.map((item) => rewriteRefs(item, false));
		if (node === null || typeof node !== "object") return node;
		if (!parentIsNameMap && establishesNewBase(node["$id"])) return node;
		const out = {};
		let convertedRecursion = false;
		for (const [k, v] of Object.entries(node)) if (parentIsNameMap) out[k] = rewriteRefs(v, false);
		else if ((k === "$ref" || k === "$dynamicRef") && typeof v === "string") out[k] = v === "#" ? "#/properties/result" : v.startsWith("#/") ? `#/properties/result${v.slice(1)}` : v;
		else if (k === "$recursiveRef" && v === "#" && convertRecursiveRefs) convertedRecursion = true;
		else if (REF_REWRITE_DATA_POSITION_KEYS.has(k)) out[k] = v;
		else if (REF_REWRITE_NAME_MAP_KEYS.has(k)) out[k] = rewriteRefs(v, true);
		else out[k] = rewriteRefs(v, false);
		if (convertedRecursion) if ("$ref" in out) out["allOf"] = [...Array.isArray(out["allOf"]) ? out["allOf"] : [], { $ref: "#/properties/result" }];
		else out["$ref"] = "#/properties/result";
		return out;
	};
	return {
		...$schema !== void 0 && { $schema },
		type: "object",
		properties: { result: rewriteRefs(natural, false) },
		required: ["result"]
	};
}
var requestMethodKeys$1 = {
	ping: null,
	initialize: null,
	"completion/complete": null,
	"logging/setLevel": null,
	"prompts/get": null,
	"prompts/list": null,
	"resources/list": null,
	"resources/templates/list": null,
	"resources/read": null,
	"resources/subscribe": null,
	"resources/unsubscribe": null,
	"tools/call": null,
	"tools/list": null,
	"tasks/get": null,
	"tasks/result": null,
	"tasks/list": null,
	"tasks/cancel": null,
	"sampling/createMessage": null,
	"elicitation/create": null,
	"roots/list": null
};
var notificationMethodKeys$1 = {
	"notifications/cancelled": null,
	"notifications/progress": null,
	"notifications/initialized": null,
	"notifications/roots/list_changed": null,
	"notifications/tasks/status": null,
	"notifications/message": null,
	"notifications/resources/updated": null,
	"notifications/resources/list_changed": null,
	"notifications/tools/list_changed": null,
	"notifications/prompts/list_changed": null,
	"notifications/elicitation/complete": null
};
var resultMethodKeys = {
	ping: null,
	initialize: null,
	"completion/complete": null,
	"logging/setLevel": null,
	"prompts/get": null,
	"prompts/list": null,
	"resources/list": null,
	"resources/templates/list": null,
	"resources/read": null,
	"resources/subscribe": null,
	"resources/unsubscribe": null,
	"tools/call": null,
	"tools/list": null,
	"sampling/createMessage": null,
	"elicitation/create": null,
	"roots/list": null
};
var maps$1;
function registryMaps() {
	if (maps$1) return maps$1;
	const s = buildSchemas2025();
	maps$1 = {
		requestSchemas: {
			ping: s.PingRequestSchema,
			initialize: s.InitializeRequestSchema,
			"completion/complete": s.CompleteRequestSchema,
			"logging/setLevel": s.SetLevelRequestSchema,
			"prompts/get": s.GetPromptRequestSchema,
			"prompts/list": s.ListPromptsRequestSchema,
			"resources/list": s.ListResourcesRequestSchema,
			"resources/templates/list": s.ListResourceTemplatesRequestSchema,
			"resources/read": s.ReadResourceRequestSchema,
			"resources/subscribe": s.SubscribeRequestSchema,
			"resources/unsubscribe": s.UnsubscribeRequestSchema,
			"tools/call": s.CallToolRequestSchema,
			"tools/list": s.ListToolsRequestSchema,
			"tasks/get": s.GetTaskRequestSchema,
			"tasks/result": s.GetTaskPayloadRequestSchema,
			"tasks/list": s.ListTasksRequestSchema,
			"tasks/cancel": s.CancelTaskRequestSchema,
			"sampling/createMessage": s.CreateMessageRequestSchema,
			"elicitation/create": s.ElicitRequestSchema,
			"roots/list": s.ListRootsRequestSchema
		},
		notificationSchemas: {
			"notifications/cancelled": s.CancelledNotificationSchema,
			"notifications/progress": s.ProgressNotificationSchema,
			"notifications/initialized": s.InitializedNotificationSchema,
			"notifications/roots/list_changed": s.RootsListChangedNotificationSchema,
			"notifications/tasks/status": s.TaskStatusNotificationSchema,
			"notifications/message": s.LoggingMessageNotificationSchema,
			"notifications/resources/updated": s.ResourceUpdatedNotificationSchema,
			"notifications/resources/list_changed": s.ResourceListChangedNotificationSchema,
			"notifications/tools/list_changed": s.ToolListChangedNotificationSchema,
			"notifications/prompts/list_changed": s.PromptListChangedNotificationSchema,
			"notifications/elicitation/complete": s.ElicitationCompleteNotificationSchema
		},
		resultSchemas: {
			ping: s.EmptyResultSchema,
			initialize: s.InitializeResultSchema,
			"completion/complete": s.CompleteResultSchema,
			"logging/setLevel": s.EmptyResultSchema,
			"prompts/get": s.GetPromptResultSchema,
			"prompts/list": s.ListPromptsResultSchema,
			"resources/list": s.ListResourcesResultSchema,
			"resources/templates/list": s.ListResourceTemplatesResultSchema,
			"resources/read": s.ReadResourceResultSchema,
			"resources/subscribe": s.EmptyResultSchema,
			"resources/unsubscribe": s.EmptyResultSchema,
			"tools/call": s.CallToolResultWireSchema,
			"tools/list": s.ListToolsResultSchema,
			"sampling/createMessage": s.CreateMessageResultWithToolsSchema,
			"elicitation/create": s.ElicitResultSchema,
			"roots/list": s.ListRootsResultSchema
		}
	};
	return maps$1;
}
/**
* Forces the lazy registry maps (and, through them, the era's schema memo).
* Warm-up hook for `preloadSchemas()` — no-op once the maps exist.
*/
function warmRegistryMaps2025() {
	registryMaps();
}
/** The 2025-era request-method set (registry membership = the deletion story). */
function hasRequestMethod2025(method) {
	return Object.prototype.hasOwnProperty.call(requestMethodKeys$1, method);
}
/** The 2025-era notification-method set. */
function hasNotificationMethod2025(method) {
	return Object.prototype.hasOwnProperty.call(notificationMethodKeys$1, method);
}
/** Result-map membership: exactly the era's typed-method subset (no task entries, no 2026-only methods). */
function hasResultMethod(method) {
	return Object.prototype.hasOwnProperty.call(resultMethodKeys, method);
}
function getResultSchema(method) {
	return hasResultMethod(method) ? registryMaps().resultSchemas[method] : void 0;
}
function getRequestSchema(method) {
	return hasRequestMethod2025(method) ? registryMaps().requestSchemas[method] : void 0;
}
function getNotificationSchema(method) {
	return hasNotificationMethod2025(method) ? registryMaps().notificationSchemas[method] : void 0;
}
Object.keys(requestMethodKeys$1);
Object.keys(notificationMethodKeys$1);
function isPlainObject$6(value) {
	return value !== null && typeof value === "object" && !Array.isArray(value);
}
/** Tri-state wrap of an optional Zod schema lookup (the function-only contract). */
function triState$1(schema, raw) {
	if (schema === void 0) return {
		ok: false,
		reason: "not-in-era"
	};
	const parsed = schema.safeParse(raw);
	return parsed.success ? {
		ok: true,
		value: parsed.data
	} : {
		ok: false,
		reason: "invalid",
		message: String(parsed.error)
	};
}
var NOT_IN_ERA$1 = {
	ok: false,
	reason: "not-in-era"
};
/** Whether a `tools/list` entry advertises a non-object `outputSchema` root that needs the SEP-2106 legacy wrap. */
function toolNeedsLegacyWrap(t) {
	return isPlainObject$6(t) && isPlainObject$6(t["outputSchema"]) && isNonObjectJsonSchemaRoot(t["outputSchema"]);
}
/** The wire→neutral trust boundary: a decoded 2025-era wire result is adopted as the neutral `Result` here (the module's single deliberate assertion). */
function toNeutralResult(value) {
	return value;
}
var rev2025Codec = {
	era: "2025-11-25",
	hasRequestMethod: hasRequestMethod2025,
	hasNotificationMethod: hasNotificationMethod2025,
	validateRequest: (method, raw) => triState$1(getRequestSchema(method), raw),
	validateResult: (method, raw) => triState$1(getResultSchema(method), raw),
	validateNotification: (method, raw) => triState$1(getNotificationSchema(method), raw),
	hasInputRequestMethod: () => false,
	validateInputRequest: () => NOT_IN_ERA$1,
	validateInputResponse: () => NOT_IN_ERA$1,
	samplingResultVariant: ((hasTools, raw) => {
		const s = buildSchemas2025();
		return triState$1(hasTools ? s.CreateMessageResultWithToolsSchema : s.CreateMessageResultSchema, raw);
	}),
	outboundEnvelope: (_material) => void 0,
	validateEnvelopeMeta: (_meta) => [],
	projectCallToolResult(result, advertisedOutputSchema) {
		const withText = appendTextFallbackForNonObject(result);
		const sc = withText.structuredContent;
		if (sc === void 0) return withText;
		const valueIsNonObject = typeof sc !== "object" || sc === null || Array.isArray(sc);
		const schemaWrapped = advertisedOutputSchema !== void 0 && isNonObjectJsonSchemaRoot(advertisedOutputSchema);
		if (!valueIsNonObject && !schemaWrapped) return withText;
		return {
			...withText,
			structuredContent: { result: sc }
		};
	},
	decodeResult(_method, raw) {
		if (isPlainObject$6(raw) && "resultType" in raw) {
			const stripped = { ...raw };
			delete stripped["resultType"];
			return {
				kind: "complete",
				result: toNeutralResult(stripped)
			};
		}
		return {
			kind: "complete",
			result: toNeutralResult(raw)
		};
	},
	encodeResult(method, result) {
		if (method !== "tools/list") return result;
		const tools = result.tools;
		if (!Array.isArray(tools) || !tools.some((t) => toolNeedsLegacyWrap(t))) return result;
		return {
			...result,
			tools: tools.map((t) => toolNeedsLegacyWrap(t) ? {
				...t,
				outputSchema: wrapOutputSchemaForLegacy(t.outputSchema)
			} : t)
		};
	},
	encodeErrorCode: (code) => code === -32002 ? -32602 : code,
	checkInboundEnvelope: (_material) => void 0
};
/**
* 2026-era wire schemas (protocol revision 2026-07-28).
*
* Fully self-contained — no runtime imports from types/schemas.ts. The
* neutral types/schemas.ts layer is the public-API superset and is free to
* evolve; this file is the 2026 wire-parse contract and is BEHAVIOR-FROZEN
* against the 2026-07-28 anchor. Every era-shared building block (content
* blocks, resources, prompts, capabilities, notifications, …) that the wire
* shapes compose is a frozen LOCAL copy — verbatim from the neutral layer at
* the point this revision was sealed, dependencies first. The only cross-layer
* dependency is `import type { JSONObject, JSONValue }` from the neutral types
* barrel — pure structural type aliases with no parse behavior.
*
* This module is the only place the per-request `_meta` envelope is modeled.
* The envelope is wire-only vocabulary: the protocol layer lifts it off
* inbound requests before any handler runs and surfaces it at
* `ctx.mcpReq.envelope`; the 2026-era codec enforces its requiredness at
* dispatch time (`checkInboundEnvelope`) - the former neutral-schema JSDoc
* deferral ("enforced per request at dispatch time, not here") is now
* discharged by that codec step.
*
* No 2025-era traffic ever touches this module, so requiredness here is
* bare and spec-exact (the shared-schema `.catch` hazards do not apply).
*
* SPEC-CURRENCY RE-SEAL (2026-07-17): the 2026-07-28 revision was re-sealed
* upstream by spec PR #3002 (commit 71e30695, merged 2026-07-15 — after the
* previous anchor pin f68d864a): the envelope's `clientInfo` demoted from
* required to SHOULD, and `DiscoverResult.serverInfo` moved from the result
* body to the new `ResultMetaObject` key
* `_meta['io.modelcontextprotocol/serverInfo']` (optional on every result).
* The shapes below are the re-sealed anchor, exactly — no pre-#3002 shape is
* modeled anywhere (per ruling: the final revision is the only 2026-07-28).
*/
function build() {
	const JSONValueSchema$1 = lazy(() => union([
		string(),
		number(),
		boolean(),
		_null(),
		record(string(), JSONValueSchema$1),
		array(JSONValueSchema$1)
	]));
	const JSONObjectSchema$1 = record(string(), JSONValueSchema$1);
	/**
	* A progress token, used to associate progress notifications with the original request.
	*/
	const ProgressTokenSchema$1 = union([string(), number().int()]);
	/**
	* An opaque token used to represent a cursor for pagination.
	*/
	const CursorSchema$1 = string();
	/**
	* A uniquely identifying ID for a request in JSON-RPC.
	*/
	const RequestIdSchema$1 = union([string(), number().int()]);
	/**
	* The sender or recipient of messages and data in a conversation.
	*/
	const RoleSchema$1 = _enum(["user", "assistant"]);
	/**
	* The severity of a log message.
	*/
	const LoggingLevelSchema$1 = _enum([
		"debug",
		"info",
		"notice",
		"warning",
		"error",
		"critical",
		"alert",
		"emergency"
	]);
	/**
	* A Zod schema for validating Base64 strings that is more performant and
	* robust for very large inputs than the default regex-based check. It avoids
	* stack overflows by using the native `atob` function for validation.
	*/
	const Base64Schema = string().refine((val) => {
		try {
			atob(val);
			return true;
		} catch {
			return false;
		}
	}, { message: "Invalid Base64 string" });
	/** @deprecated 2025-11-25 wire vocabulary with no SDK runtime; kept importable for interoperability only. */
	const TaskMetadataSchema$1 = object({ ttl: number().optional() });
	/** @deprecated 2025-11-25 wire vocabulary with no SDK runtime; kept importable for interoperability only. */
	const RelatedTaskMetadataSchema$1 = object({ taskId: string() });
	const RequestMetaSchema$1 = looseObject({
		progressToken: ProgressTokenSchema$1.optional(),
		"io.modelcontextprotocol/related-task": RelatedTaskMetadataSchema$1.optional()
	});
	const BaseRequestParamsSchema$1 = object({ _meta: RequestMetaSchema$1.optional() });
	/** @deprecated 2025-11-25 wire vocabulary with no SDK runtime; kept importable for interoperability only. */
	const TaskAugmentedRequestParamsSchema$1 = BaseRequestParamsSchema$1.extend({ task: TaskMetadataSchema$1.optional() });
	const NotificationsParamsSchema$1 = object({ _meta: RequestMetaSchema$1.optional() });
	const NotificationSchema$1 = object({
		method: string(),
		params: NotificationsParamsSchema$1.loose().optional()
	});
	const IconSchema$1 = object({
		src: string(),
		mimeType: string().optional(),
		sizes: array(string()).optional(),
		theme: _enum(["light", "dark"]).optional()
	});
	const IconsSchema$1 = object({ icons: array(IconSchema$1).optional() });
	const BaseMetadataSchema$1 = object({
		name: string(),
		title: string().optional()
	});
	const ImplementationSchema$1 = BaseMetadataSchema$1.extend({
		...BaseMetadataSchema$1.shape,
		...IconsSchema$1.shape,
		version: string(),
		websiteUrl: string().optional(),
		description: string().optional()
	});
	const FormElicitationCapabilitySchema = intersection(object({ applyDefaults: boolean().optional() }), JSONObjectSchema$1);
	const ElicitationCapabilitySchema = preprocess((value) => {
		if (value && typeof value === "object" && !Array.isArray(value) && Object.keys(value).length === 0) return { form: {} };
		return value;
	}, intersection(object({
		form: FormElicitationCapabilitySchema.optional(),
		url: JSONObjectSchema$1.optional()
	}), JSONObjectSchema$1.optional()));
	/** @deprecated 2025-11-25 wire vocabulary with no SDK runtime; kept importable for interoperability only. */
	const ClientTasksCapabilitySchema$1 = looseObject({
		list: JSONObjectSchema$1.optional(),
		cancel: JSONObjectSchema$1.optional(),
		requests: looseObject({
			sampling: looseObject({ createMessage: JSONObjectSchema$1.optional() }).optional(),
			elicitation: looseObject({ create: JSONObjectSchema$1.optional() }).optional()
		}).optional()
	});
	/** @deprecated 2025-11-25 wire vocabulary with no SDK runtime; kept importable for interoperability only. */
	const ServerTasksCapabilitySchema$1 = looseObject({
		list: JSONObjectSchema$1.optional(),
		cancel: JSONObjectSchema$1.optional(),
		requests: looseObject({ tools: looseObject({ call: JSONObjectSchema$1.optional() }).optional() }).optional()
	});
	const ClientCapabilitiesSchema$1 = object({
		experimental: record(string(), JSONObjectSchema$1).optional(),
		sampling: object({
			context: JSONObjectSchema$1.optional(),
			tools: JSONObjectSchema$1.optional()
		}).optional(),
		elicitation: ElicitationCapabilitySchema.optional(),
		roots: object({ listChanged: boolean().optional() }).optional(),
		tasks: ClientTasksCapabilitySchema$1.optional(),
		extensions: record(string(), JSONObjectSchema$1).optional()
	});
	const ServerCapabilitiesSchema$1 = object({
		experimental: record(string(), JSONObjectSchema$1).optional(),
		logging: JSONObjectSchema$1.optional(),
		completions: JSONObjectSchema$1.optional(),
		prompts: object({ listChanged: boolean().optional() }).optional(),
		resources: object({
			subscribe: boolean().optional(),
			listChanged: boolean().optional()
		}).optional(),
		tools: object({ listChanged: boolean().optional() }).optional(),
		tasks: ServerTasksCapabilitySchema$1.optional(),
		extensions: record(string(), JSONObjectSchema$1).optional()
	});
	const ProgressSchema$1 = object({
		progress: number(),
		total: optional(number()),
		message: optional(string())
	});
	const ProgressNotificationParamsSchema$1 = object({
		...NotificationsParamsSchema$1.shape,
		...ProgressSchema$1.shape,
		progressToken: ProgressTokenSchema$1
	});
	const ProgressNotificationSchema$1 = NotificationSchema$1.extend({
		method: literal("notifications/progress"),
		params: ProgressNotificationParamsSchema$1
	});
	const LoggingMessageNotificationParamsSchema$1 = NotificationsParamsSchema$1.extend({
		level: LoggingLevelSchema$1,
		logger: string().optional(),
		data: unknown()
	});
	const LoggingMessageNotificationSchema$1 = NotificationSchema$1.extend({
		method: literal("notifications/message"),
		params: LoggingMessageNotificationParamsSchema$1
	});
	const ResourceContentsSchema$1 = object({
		uri: string(),
		mimeType: optional(string()),
		_meta: record(string(), unknown()).optional()
	});
	const TextResourceContentsSchema$1 = ResourceContentsSchema$1.extend({ text: string() });
	const BlobResourceContentsSchema$1 = ResourceContentsSchema$1.extend({ blob: Base64Schema });
	const AnnotationsSchema$1 = object({
		audience: array(RoleSchema$1).optional(),
		priority: number().min(0).max(1).optional(),
		lastModified: datetime({ offset: true }).optional()
	});
	const ResourceSchema$1 = object({
		...BaseMetadataSchema$1.shape,
		...IconsSchema$1.shape,
		uri: string(),
		description: optional(string()),
		mimeType: optional(string()),
		size: optional(number()),
		annotations: AnnotationsSchema$1.optional(),
		_meta: optional(looseObject({}))
	});
	const ResourceTemplateSchema$1 = object({
		...BaseMetadataSchema$1.shape,
		...IconsSchema$1.shape,
		uriTemplate: string(),
		description: optional(string()),
		mimeType: optional(string()),
		annotations: AnnotationsSchema$1.optional(),
		_meta: optional(looseObject({}))
	});
	const ResourceListChangedNotificationSchema$1 = NotificationSchema$1.extend({
		method: literal("notifications/resources/list_changed"),
		params: NotificationsParamsSchema$1.optional()
	});
	const ResourceUpdatedNotificationParamsSchema$1 = NotificationsParamsSchema$1.extend({ uri: string() });
	const ResourceUpdatedNotificationSchema$1 = NotificationSchema$1.extend({
		method: literal("notifications/resources/updated"),
		params: ResourceUpdatedNotificationParamsSchema$1
	});
	const PromptArgumentSchema$1 = object({
		name: string(),
		description: optional(string()),
		required: optional(boolean())
	});
	const PromptSchema$1 = object({
		...BaseMetadataSchema$1.shape,
		...IconsSchema$1.shape,
		description: optional(string()),
		arguments: optional(array(PromptArgumentSchema$1)),
		_meta: optional(looseObject({}))
	});
	const PromptListChangedNotificationSchema$1 = NotificationSchema$1.extend({
		method: literal("notifications/prompts/list_changed"),
		params: NotificationsParamsSchema$1.optional()
	});
	const TextContentSchema$1 = object({
		type: literal("text"),
		text: string(),
		annotations: AnnotationsSchema$1.optional(),
		_meta: record(string(), unknown()).optional()
	});
	const ImageContentSchema$1 = object({
		type: literal("image"),
		data: Base64Schema,
		mimeType: string(),
		annotations: AnnotationsSchema$1.optional(),
		_meta: record(string(), unknown()).optional()
	});
	const AudioContentSchema$1 = object({
		type: literal("audio"),
		data: Base64Schema,
		mimeType: string(),
		annotations: AnnotationsSchema$1.optional(),
		_meta: record(string(), unknown()).optional()
	});
	const ToolUseContentSchema$1 = object({
		type: literal("tool_use"),
		name: string(),
		id: string(),
		input: record(string(), unknown()),
		_meta: record(string(), unknown()).optional()
	});
	const EmbeddedResourceSchema$1 = object({
		type: literal("resource"),
		resource: union([TextResourceContentsSchema$1, BlobResourceContentsSchema$1]),
		annotations: AnnotationsSchema$1.optional(),
		_meta: record(string(), unknown()).optional()
	});
	const ResourceLinkSchema$1 = ResourceSchema$1.extend({ type: literal("resource_link") });
	const ContentBlockSchema$1 = union([
		TextContentSchema$1,
		ImageContentSchema$1,
		AudioContentSchema$1,
		ResourceLinkSchema$1,
		EmbeddedResourceSchema$1
	]);
	const PromptMessageSchema$1 = object({
		role: RoleSchema$1,
		content: ContentBlockSchema$1
	});
	const ToolAnnotationsSchema$1 = object({
		title: string().optional(),
		readOnlyHint: boolean().optional(),
		destructiveHint: boolean().optional(),
		idempotentHint: boolean().optional(),
		openWorldHint: boolean().optional()
	});
	const ToolListChangedNotificationSchema$1 = NotificationSchema$1.extend({
		method: literal("notifications/tools/list_changed"),
		params: NotificationsParamsSchema$1.optional()
	});
	const ModelHintSchema$1 = object({ name: string().optional() });
	const ModelPreferencesSchema$1 = object({
		hints: array(ModelHintSchema$1).optional(),
		costPriority: number().min(0).max(1).optional(),
		speedPriority: number().min(0).max(1).optional(),
		intelligencePriority: number().min(0).max(1).optional()
	});
	const ToolChoiceSchema$1 = object({ mode: _enum([
		"auto",
		"required",
		"none"
	]).optional() });
	const BooleanSchemaSchema$1 = object({
		type: literal("boolean"),
		title: string().optional(),
		description: string().optional(),
		default: boolean().optional()
	});
	const StringSchemaSchema$1 = object({
		type: literal("string"),
		title: string().optional(),
		description: string().optional(),
		minLength: number().optional(),
		maxLength: number().optional(),
		format: _enum([
			"email",
			"uri",
			"date",
			"date-time"
		]).optional(),
		default: string().optional()
	});
	const NumberSchemaSchema$1 = object({
		type: _enum(["number", "integer"]),
		title: string().optional(),
		description: string().optional(),
		minimum: number().optional(),
		maximum: number().optional(),
		default: number().optional()
	});
	const UntitledSingleSelectEnumSchemaSchema$1 = object({
		type: literal("string"),
		title: string().optional(),
		description: string().optional(),
		enum: array(string()),
		default: string().optional()
	});
	const TitledSingleSelectEnumSchemaSchema$1 = object({
		type: literal("string"),
		title: string().optional(),
		description: string().optional(),
		oneOf: array(object({
			const: string(),
			title: string()
		})),
		default: string().optional()
	});
	const LegacyTitledEnumSchemaSchema$1 = object({
		type: literal("string"),
		title: string().optional(),
		description: string().optional(),
		enum: array(string()),
		enumNames: array(string()).optional(),
		default: string().optional()
	});
	const SingleSelectEnumSchemaSchema$1 = union([UntitledSingleSelectEnumSchemaSchema$1, TitledSingleSelectEnumSchemaSchema$1]);
	const UntitledMultiSelectEnumSchemaSchema$1 = object({
		type: literal("array"),
		title: string().optional(),
		description: string().optional(),
		minItems: number().optional(),
		maxItems: number().optional(),
		items: object({
			type: literal("string"),
			enum: array(string())
		}),
		default: array(string()).optional()
	});
	const TitledMultiSelectEnumSchemaSchema$1 = object({
		type: literal("array"),
		title: string().optional(),
		description: string().optional(),
		minItems: number().optional(),
		maxItems: number().optional(),
		items: object({ anyOf: array(object({
			const: string(),
			title: string()
		})) }),
		default: array(string()).optional()
	});
	const MultiSelectEnumSchemaSchema$1 = union([UntitledMultiSelectEnumSchemaSchema$1, TitledMultiSelectEnumSchemaSchema$1]);
	const EnumSchemaSchema$1 = union([
		LegacyTitledEnumSchemaSchema$1,
		SingleSelectEnumSchemaSchema$1,
		MultiSelectEnumSchemaSchema$1
	]);
	const PrimitiveSchemaDefinitionSchema$1 = union([
		EnumSchemaSchema$1,
		BooleanSchemaSchema$1,
		StringSchemaSchema$1,
		NumberSchemaSchema$1
	]);
	const ElicitRequestFormParamsSchema$1 = TaskAugmentedRequestParamsSchema$1.extend({
		mode: literal("form").optional(),
		message: string(),
		requestedSchema: object({
			type: literal("object"),
			properties: record(string(), PrimitiveSchemaDefinitionSchema$1),
			required: array(string()).optional()
		}).catchall(unknown())
	});
	const ResourceTemplateReferenceSchema$1 = object({
		type: literal("ref/resource"),
		uri: string()
	});
	const PromptReferenceSchema$1 = object({
		type: literal("ref/prompt"),
		name: string()
	});
	const RootSchema$1 = object({
		uri: string().startsWith("file://"),
		name: string().optional(),
		_meta: record(string(), unknown()).optional()
	});
	const sharedClientCapabilityShape = ClientCapabilitiesSchema$1.shape;
	const ClientCapabilities2026Schema = object({
		experimental: sharedClientCapabilityShape.experimental,
		sampling: sharedClientCapabilityShape.sampling,
		elicitation: sharedClientCapabilityShape.elicitation,
		roots: sharedClientCapabilityShape.roots,
		extensions: sharedClientCapabilityShape.extensions
	});
	const sharedServerCapabilityShape = ServerCapabilitiesSchema$1.shape;
	const ServerCapabilities2026Schema = object({
		experimental: sharedServerCapabilityShape.experimental,
		logging: sharedServerCapabilityShape.logging,
		completions: sharedServerCapabilityShape.completions,
		prompts: sharedServerCapabilityShape.prompts,
		resources: sharedServerCapabilityShape.resources,
		tools: sharedServerCapabilityShape.tools,
		extensions: sharedServerCapabilityShape.extensions
	});
	/**
	* The per-request `_meta` envelope carried by every request under protocol revision
	* 2026-07-28: the protocol version governing the request, the client implementation
	* info, and the client's capabilities — declared per request rather than once at
	* initialization — plus the optional log-level opt-in.
	*
	* This schema models the complete envelope on its own (loose: foreign keys
	* pass through - the lift extracts exactly the reserved keys, so enforcement
	* never sees extension material). Requiredness is enforced per request at
	* dispatch time by the 2026-era codec's `checkInboundEnvelope` step.
	*/
	const RequestMetaEnvelopeSchema = looseObject({
		progressToken: ProgressTokenSchema$1.optional(),
		[PROTOCOL_VERSION_META_KEY]: string(),
		[CLIENT_INFO_META_KEY]: ImplementationSchema$1.optional(),
		[CLIENT_CAPABILITIES_META_KEY]: ClientCapabilities2026Schema,
		[LOG_LEVEL_META_KEY]: LoggingLevelSchema$1.optional()
	});
	/** 2026-era Tool: anchor-exact — no `execution` (deleted vocabulary). */
	const ToolSchema$1 = object({
		...BaseMetadataSchema$1.shape,
		...IconsSchema$1.shape,
		description: string().optional(),
		inputSchema: looseObject({
			$schema: string().optional(),
			type: literal("object")
		}),
		outputSchema: looseObject({ $schema: string().optional() }).optional(),
		annotations: ToolAnnotationsSchema$1.optional(),
		_meta: record(string(), unknown()).optional()
	});
	/** 2026-era ToolResultContent (anchor-exact: `structuredContent?: unknown`). */
	const ToolResultContentSchema$1 = object({
		type: literal("tool_result"),
		toolUseId: string(),
		content: array(ContentBlockSchema$1),
		structuredContent: unknown().optional(),
		isError: boolean().optional(),
		_meta: record(string(), unknown()).optional()
	});
	/** 2026-era sampling content union (composes the forked tool-result shape). */
	const SamplingMessageContentBlockSchema$1 = union([
		TextContentSchema$1,
		ImageContentSchema$1,
		AudioContentSchema$1,
		ToolUseContentSchema$1,
		ToolResultContentSchema$1
	]);
	/** 2026-era SamplingMessage (anchor-exact: single block or array). */
	const SamplingMessageSchema$1 = object({
		role: RoleSchema$1,
		content: union([SamplingMessageContentBlockSchema$1, array(SamplingMessageContentBlockSchema$1)]),
		_meta: record(string(), unknown()).optional()
	});
	/** Open union per the anchor: 'complete' | 'input_required' | string. */
	const ResultTypeSchema = string();
	/**
	* Result `_meta` (anchor `ResultMetaObject`, added by spec PR #3002):
	* loose, with the serverInfo key typed when present; the outbound stamp
	* is the encode contract's `stampServerInfoMeta` step.
	*/
	const ResultMetaSchema = looseObject({ [SERVER_INFO_META_KEY]: ImplementationSchema$1.optional().catch(void 0) });
	const wireMeta = ResultMetaSchema.optional();
	function wireResult(shape) {
		return looseObject({
			_meta: wireMeta,
			resultType: ResultTypeSchema.default("complete"),
			...shape
		});
	}
	const ResultSchema$1 = wireResult({});
	const PaginatedResultSchema$1 = wireResult({ nextCursor: CursorSchema$1.optional() });
	const CallToolResultSchema$1 = wireResult({
		content: array(ContentBlockSchema$1),
		structuredContent: unknown().optional(),
		isError: boolean().optional()
	});
	const ListToolsResultSchema$1 = wireResult({
		ttlMs: number().int().min(0),
		cacheScope: _enum(["public", "private"]),
		tools: array(ToolSchema$1),
		nextCursor: CursorSchema$1.optional()
	});
	const ListPromptsResultSchema$1 = wireResult({
		ttlMs: number().int().min(0),
		cacheScope: _enum(["public", "private"]),
		prompts: array(PromptSchema$1),
		nextCursor: CursorSchema$1.optional()
	});
	const GetPromptResultSchema$1 = wireResult({
		description: string().optional(),
		messages: array(PromptMessageSchema$1)
	});
	const ListResourcesResultSchema$1 = wireResult({
		ttlMs: number().int().min(0),
		cacheScope: _enum(["public", "private"]),
		resources: array(ResourceSchema$1),
		nextCursor: CursorSchema$1.optional()
	});
	const ListResourceTemplatesResultSchema$1 = wireResult({
		ttlMs: number().int().min(0),
		cacheScope: _enum(["public", "private"]),
		resourceTemplates: array(ResourceTemplateSchema$1),
		nextCursor: CursorSchema$1.optional()
	});
	const ReadResourceResultSchema$1 = wireResult({
		ttlMs: number().int().min(0),
		cacheScope: _enum(["public", "private"]),
		contents: array(union([TextResourceContentsSchema$1, BlobResourceContentsSchema$1]))
	});
	const CompleteResultSchema$1 = wireResult({ completion: object({
		values: array(string()).max(100),
		total: number().int().optional(),
		hasMore: boolean().optional()
	}).loose() });
	/** CacheableResult (SEP-2549): ttlMs and cacheScope REQUIRED per the anchor. */
	const CacheableResultSchema = wireResult({
		ttlMs: number().int().min(0),
		cacheScope: _enum(["public", "private"])
	});
	const DiscoverResultSchema$1 = wireResult({
		ttlMs: number().int().min(0).catch(0),
		cacheScope: _enum(["public", "private"]).catch("private"),
		supportedVersions: array(string()),
		capabilities: ServerCapabilities2026Schema,
		instructions: string().optional()
	});
	/** 2026-era CreateMessageRequestParams (anchor-exact: forked SamplingMessage/Tool, no task augmentation). */
	const CreateMessageRequestParamsSchema$1 = object({
		messages: array(SamplingMessageSchema$1),
		modelPreferences: ModelPreferencesSchema$1.optional(),
		systemPrompt: string().optional(),
		includeContext: _enum([
			"none",
			"thisServer",
			"allServers"
		]).optional(),
		temperature: number().optional(),
		maxTokens: number().int(),
		stopSequences: array(string()).optional(),
		metadata: JSONObjectSchema$1.optional(),
		tools: array(ToolSchema$1).optional(),
		toolChoice: ToolChoiceSchema$1.optional()
	});
	/** 2026-era embedded sampling request (de-JSON-RPC'd). */
	const CreateMessageRequestSchema$1 = object({
		method: literal("sampling/createMessage"),
		params: CreateMessageRequestParamsSchema$1
	});
	/**
	* 2026-era embedded roots listing request (de-JSON-RPC'd). Embedded input
	* requests do NOT carry the per-request `_meta` envelope on this revision —
	* the anchor declares a bare optional `_meta` on `params`.
	*/
	const ListRootsRequestSchema$1 = object({
		method: literal("roots/list"),
		params: object({ _meta: record(string(), unknown()).optional() }).optional()
	});
	/** 2026-era embedded sampling response (anchor-exact: extends the forked SamplingMessage). */
	const CreateMessageResultSchema$1 = object({
		...SamplingMessageSchema$1.shape,
		model: string(),
		stopReason: string().optional()
	});
	/** 2026-era embedded roots listing response (anchor-exact: bare `roots` array). */
	const ListRootsResultSchema$1 = object({ roots: array(RootSchema$1) });
	/** 2026-era embedded elicitation response (anchor-exact: bare result, restricted content value types). */
	const ElicitResultSchema$1 = object({
		action: _enum([
			"accept",
			"decline",
			"cancel"
		]),
		content: record(string(), union([
			string(),
			number(),
			boolean(),
			array(string())
		])).optional()
	});
	/**
	* 2026-era URL-mode elicitation params (anchor-exact fork): the draft removed
	* `elicitationId` (and the `notifications/elicitation/complete` channel it
	* keyed) — the shared schema keeps the field because it is required on the
	* frozen 2025-11-25 revision.
	*/
	const ElicitRequestURLParamsSchema$1 = object({
		mode: literal("url"),
		message: string(),
		url: string().url()
	});
	/** 2026-era elicitation params (form mode is revision-identical; URL mode is the fork above). */
	const ElicitRequestParamsSchema$1 = union([ElicitRequestFormParamsSchema$1, ElicitRequestURLParamsSchema$1]);
	/** 2026-era embedded elicitation request (de-JSON-RPC'd; see the URL-mode fork above). */
	const ElicitRequestSchema$1 = object({
		method: literal("elicitation/create"),
		params: ElicitRequestParamsSchema$1
	});
	/** A single embedded input request (one of the three demoted server→client requests). */
	const InputRequestSchema = union([
		CreateMessageRequestSchema$1,
		ListRootsRequestSchema$1,
		ElicitRequestSchema$1
	]);
	/** A single embedded input response — the BARE result union (never a `{method, result}` wrapper). */
	const InputResponseSchema = union([
		CreateMessageResultSchema$1,
		ListRootsResultSchema$1,
		ElicitResultSchema$1
	]);
	/** Map of embedded input requests, keyed by server-assigned identifiers. */
	const InputRequestsSchema = record(string(), InputRequestSchema);
	/** Map of embedded input responses, keyed by the corresponding request identifiers. */
	const InputResponsesSchema = record(string(), InputResponseSchema);
	/**
	* The wire InputRequiredResult: `resultType: 'input_required'` plus at least
	* one of `inputRequests` / `requestState` (the at-least-one rule is enforced
	* at the server seam, not by this parse shape).
	*/
	const InputRequiredResultSchema = wireResult({
		inputRequests: InputRequestsSchema.optional(),
		requestState: string().optional()
	});
	/** The retry-channel members carried by client-initiated requests on this revision. */
	const retryParamsShape = {
		inputResponses: InputResponsesSchema.optional(),
		requestState: string().optional()
	};
	/** Anchor InputResponseRequestParams: the retry channel on top of the required request `_meta` envelope. */
	const InputResponseRequestParamsSchema = object({
		_meta: RequestMetaEnvelopeSchema,
		...retryParamsShape
	});
	/** Post-lift request `_meta` (progressToken + extension keys; loose). */
	const DispatchRequestMetaSchema = looseObject({ progressToken: ProgressTokenSchema$1.optional() });
	function wireRequest(method, paramsShape) {
		return object({
			method: literal(method),
			params: object({
				_meta: RequestMetaEnvelopeSchema,
				...paramsShape
			})
		});
	}
	function dispatchRequest(method, paramsShape) {
		return object({
			method: literal(method),
			params: object({
				_meta: DispatchRequestMetaSchema.optional(),
				...paramsShape
			}).optional()
		});
	}
	const callToolParamsShape = {
		name: string(),
		arguments: record(string(), unknown()).optional(),
		...retryParamsShape
	};
	const paginatedParamsShape = { cursor: CursorSchema$1.optional() };
	const CallToolRequestSchema$1 = wireRequest("tools/call", callToolParamsShape);
	const ListToolsRequestSchema$1 = wireRequest("tools/list", paginatedParamsShape);
	const ListPromptsRequestSchema$1 = wireRequest("prompts/list", paginatedParamsShape);
	const GetPromptRequestSchema$1 = wireRequest("prompts/get", {
		name: string(),
		arguments: record(string(), string()).optional(),
		...retryParamsShape
	});
	const ListResourcesRequestSchema$1 = wireRequest("resources/list", paginatedParamsShape);
	const ListResourceTemplatesRequestSchema$1 = wireRequest("resources/templates/list", paginatedParamsShape);
	const ReadResourceRequestSchema$1 = wireRequest("resources/read", {
		uri: string(),
		...retryParamsShape
	});
	const completeParamsShape = {
		ref: union([PromptReferenceSchema$1, ResourceTemplateReferenceSchema$1]),
		argument: object({
			name: string(),
			value: string()
		}),
		context: object({ arguments: record(string(), string()).optional() }).optional()
	};
	const CompleteRequestSchema$1 = wireRequest("completion/complete", completeParamsShape);
	const DiscoverRequestSchema$1 = wireRequest("server/discover", {});
	/** Anchor SubscriptionFilter (2026-only). */
	const SubscriptionFilterSchema$1 = object({
		toolsListChanged: boolean().optional(),
		promptsListChanged: boolean().optional(),
		resourcesListChanged: boolean().optional(),
		resourceSubscriptions: array(string()).optional()
	});
	const subscriptionsListenParamsShape = { notifications: SubscriptionFilterSchema$1 };
	const SubscriptionsListenRequestSchema$1 = wireRequest("subscriptions/listen", subscriptionsListenParamsShape);
	/**
	* Anchor SubscriptionsListenResultMetaObject — required subscriptionId stamp on
	* the graceful-close result. Extends `ResultMetaObject` since spec PR
	* #3002 (composed, so the serverInfo key and its leniency stay single-sourced).
	*/
	const SubscriptionsListenResultMetaSchema$1 = ResultMetaSchema.extend({ "io.modelcontextprotocol/subscriptionId": RequestIdSchema$1 });
	/**
	* Anchor SubscriptionsListenResult (2026-only). The empty `subscriptions/listen`
	* response signalling that the subscription has ended gracefully (server
	* shutdown). An abrupt transport close carries no response — the client treats
	* stream-close-without-result as a disconnect.
	*/
	const SubscriptionsListenResultSchema$1 = looseObject({
		_meta: SubscriptionsListenResultMetaSchema$1,
		resultType: ResultTypeSchema.default("complete")
	});
	/** Dispatch (post-lift) request schemas, keyed by method — registry-internal. */
	const dispatchRequestSchemas = {
		"tools/call": dispatchRequest("tools/call", callToolParamsShape),
		"tools/list": dispatchRequest("tools/list", paginatedParamsShape),
		"prompts/get": dispatchRequest("prompts/get", {
			name: string(),
			arguments: record(string(), string()).optional()
		}),
		"prompts/list": dispatchRequest("prompts/list", paginatedParamsShape),
		"resources/list": dispatchRequest("resources/list", paginatedParamsShape),
		"resources/templates/list": dispatchRequest("resources/templates/list", paginatedParamsShape),
		"resources/read": dispatchRequest("resources/read", { uri: string() }),
		"completion/complete": dispatchRequest("completion/complete", completeParamsShape),
		"server/discover": dispatchRequest("server/discover", {}),
		"subscriptions/listen": dispatchRequest("subscriptions/listen", subscriptionsListenParamsShape)
	};
	/** Dispatch (post-lift) result schemas, keyed by method — what the funnel
	* validates AFTER `decodeResult` consumed `resultType`. */
	function liftedResult(shape) {
		return looseObject({
			_meta: wireMeta,
			...shape
		});
	}
	const dispatchResultSchemas = {
		"tools/call": liftedResult({
			content: array(ContentBlockSchema$1),
			structuredContent: unknown().optional(),
			isError: boolean().optional()
		}),
		"tools/list": liftedResult({
			ttlMs: number().int().min(0),
			cacheScope: _enum(["public", "private"]),
			tools: array(ToolSchema$1),
			nextCursor: CursorSchema$1.optional()
		}),
		"prompts/get": liftedResult({
			description: string().optional(),
			messages: array(PromptMessageSchema$1)
		}),
		"prompts/list": liftedResult({
			ttlMs: number().int().min(0),
			cacheScope: _enum(["public", "private"]),
			prompts: array(PromptSchema$1),
			nextCursor: CursorSchema$1.optional()
		}),
		"resources/list": liftedResult({
			ttlMs: number().int().min(0),
			cacheScope: _enum(["public", "private"]),
			resources: array(ResourceSchema$1),
			nextCursor: CursorSchema$1.optional()
		}),
		"resources/templates/list": liftedResult({
			ttlMs: number().int().min(0),
			cacheScope: _enum(["public", "private"]),
			resourceTemplates: array(ResourceTemplateSchema$1),
			nextCursor: CursorSchema$1.optional()
		}),
		"resources/read": liftedResult({
			ttlMs: number().int().min(0),
			cacheScope: _enum(["public", "private"]),
			contents: array(union([TextResourceContentsSchema$1, BlobResourceContentsSchema$1]))
		}),
		"completion/complete": liftedResult({ completion: object({
			values: array(string()).max(100),
			total: number().int().optional(),
			hasMore: boolean().optional()
		}).loose() }),
		"server/discover": liftedResult({
			ttlMs: number().int().min(0).catch(0),
			cacheScope: _enum(["public", "private"]).catch("private"),
			supportedVersions: array(string()),
			capabilities: ServerCapabilities2026Schema,
			instructions: string().optional()
		}),
		"subscriptions/listen": liftedResult({})
	};
	/**
	* Notification `_meta` (anchor `NotificationMetaObject`): loose, with the
	* subscriptions/listen demux key typed when present. Only the anchor-exact
	* SHAPE is modeled here — listen delivery itself (filter gating, demux,
	* teardown) is #14 scope and not implemented by this module.
	*/
	const NotificationMetaSchema = looseObject({ "io.modelcontextprotocol/subscriptionId": RequestIdSchema$1.optional() });
	/** Anchor SubscriptionsAcknowledgedNotification (2026-only). */
	const SubscriptionsAcknowledgedNotificationSchema$1 = object({
		method: literal("notifications/subscriptions/acknowledged"),
		params: object({
			_meta: NotificationMetaSchema.optional(),
			notifications: SubscriptionFilterSchema$1
		})
	});
	/**
	* 2026-era `notifications/cancelled` params (anchor-exact fork): `requestId`
	* is REQUIRED on this revision — the shared schema keeps it optional because
	* the frozen 2025-11-25 shape declares it optional (task cancellation goes
	* through `tasks/cancel` there). Requiredness is bare because no 2025-era
	* traffic touches this module.
	*/
	const CancelledNotificationParamsSchema$1 = object({
		_meta: NotificationMetaSchema.optional(),
		requestId: RequestIdSchema$1,
		reason: string().optional()
	});
	/** 2026-era `notifications/cancelled` (see the params fork above). */
	const CancelledNotificationSchema$1 = object({
		method: literal("notifications/cancelled"),
		params: CancelledNotificationParamsSchema$1
	});
	const notificationSchemas2026 = {
		"notifications/cancelled": CancelledNotificationSchema$1,
		"notifications/progress": ProgressNotificationSchema$1,
		"notifications/message": LoggingMessageNotificationSchema$1,
		"notifications/resources/updated": ResourceUpdatedNotificationSchema$1,
		"notifications/resources/list_changed": ResourceListChangedNotificationSchema$1,
		"notifications/tools/list_changed": ToolListChangedNotificationSchema$1,
		"notifications/prompts/list_changed": PromptListChangedNotificationSchema$1,
		"notifications/subscriptions/acknowledged": SubscriptionsAcknowledgedNotificationSchema$1
	};
	const wireResultResponse = (result) => object({
		jsonrpc: literal("2.0"),
		id: union([string(), number().int()]),
		result
	}).strict();
	return {
		JSONValueSchema: JSONValueSchema$1,
		JSONObjectSchema: JSONObjectSchema$1,
		ProgressTokenSchema: ProgressTokenSchema$1,
		CursorSchema: CursorSchema$1,
		RequestIdSchema: RequestIdSchema$1,
		RoleSchema: RoleSchema$1,
		LoggingLevelSchema: LoggingLevelSchema$1,
		TaskMetadataSchema: TaskMetadataSchema$1,
		RelatedTaskMetadataSchema: RelatedTaskMetadataSchema$1,
		RequestMetaSchema: RequestMetaSchema$1,
		BaseRequestParamsSchema: BaseRequestParamsSchema$1,
		TaskAugmentedRequestParamsSchema: TaskAugmentedRequestParamsSchema$1,
		NotificationsParamsSchema: NotificationsParamsSchema$1,
		NotificationSchema: NotificationSchema$1,
		IconSchema: IconSchema$1,
		IconsSchema: IconsSchema$1,
		BaseMetadataSchema: BaseMetadataSchema$1,
		ImplementationSchema: ImplementationSchema$1,
		ClientTasksCapabilitySchema: ClientTasksCapabilitySchema$1,
		ServerTasksCapabilitySchema: ServerTasksCapabilitySchema$1,
		ClientCapabilitiesSchema: ClientCapabilitiesSchema$1,
		ServerCapabilitiesSchema: ServerCapabilitiesSchema$1,
		ProgressSchema: ProgressSchema$1,
		ProgressNotificationParamsSchema: ProgressNotificationParamsSchema$1,
		ProgressNotificationSchema: ProgressNotificationSchema$1,
		LoggingMessageNotificationParamsSchema: LoggingMessageNotificationParamsSchema$1,
		LoggingMessageNotificationSchema: LoggingMessageNotificationSchema$1,
		ResourceContentsSchema: ResourceContentsSchema$1,
		TextResourceContentsSchema: TextResourceContentsSchema$1,
		BlobResourceContentsSchema: BlobResourceContentsSchema$1,
		AnnotationsSchema: AnnotationsSchema$1,
		ResourceSchema: ResourceSchema$1,
		ResourceTemplateSchema: ResourceTemplateSchema$1,
		ResourceListChangedNotificationSchema: ResourceListChangedNotificationSchema$1,
		ResourceUpdatedNotificationParamsSchema: ResourceUpdatedNotificationParamsSchema$1,
		ResourceUpdatedNotificationSchema: ResourceUpdatedNotificationSchema$1,
		PromptArgumentSchema: PromptArgumentSchema$1,
		PromptSchema: PromptSchema$1,
		PromptListChangedNotificationSchema: PromptListChangedNotificationSchema$1,
		TextContentSchema: TextContentSchema$1,
		ImageContentSchema: ImageContentSchema$1,
		AudioContentSchema: AudioContentSchema$1,
		ToolUseContentSchema: ToolUseContentSchema$1,
		EmbeddedResourceSchema: EmbeddedResourceSchema$1,
		ResourceLinkSchema: ResourceLinkSchema$1,
		ContentBlockSchema: ContentBlockSchema$1,
		PromptMessageSchema: PromptMessageSchema$1,
		ToolAnnotationsSchema: ToolAnnotationsSchema$1,
		ToolListChangedNotificationSchema: ToolListChangedNotificationSchema$1,
		ModelHintSchema: ModelHintSchema$1,
		ModelPreferencesSchema: ModelPreferencesSchema$1,
		ToolChoiceSchema: ToolChoiceSchema$1,
		BooleanSchemaSchema: BooleanSchemaSchema$1,
		StringSchemaSchema: StringSchemaSchema$1,
		NumberSchemaSchema: NumberSchemaSchema$1,
		UntitledSingleSelectEnumSchemaSchema: UntitledSingleSelectEnumSchemaSchema$1,
		TitledSingleSelectEnumSchemaSchema: TitledSingleSelectEnumSchemaSchema$1,
		LegacyTitledEnumSchemaSchema: LegacyTitledEnumSchemaSchema$1,
		SingleSelectEnumSchemaSchema: SingleSelectEnumSchemaSchema$1,
		UntitledMultiSelectEnumSchemaSchema: UntitledMultiSelectEnumSchemaSchema$1,
		TitledMultiSelectEnumSchemaSchema: TitledMultiSelectEnumSchemaSchema$1,
		MultiSelectEnumSchemaSchema: MultiSelectEnumSchemaSchema$1,
		EnumSchemaSchema: EnumSchemaSchema$1,
		PrimitiveSchemaDefinitionSchema: PrimitiveSchemaDefinitionSchema$1,
		ElicitRequestFormParamsSchema: ElicitRequestFormParamsSchema$1,
		ResourceTemplateReferenceSchema: ResourceTemplateReferenceSchema$1,
		PromptReferenceSchema: PromptReferenceSchema$1,
		RootSchema: RootSchema$1,
		ClientCapabilities2026Schema,
		ServerCapabilities2026Schema,
		RequestMetaEnvelopeSchema,
		ToolSchema: ToolSchema$1,
		ToolResultContentSchema: ToolResultContentSchema$1,
		SamplingMessageContentBlockSchema: SamplingMessageContentBlockSchema$1,
		SamplingMessageSchema: SamplingMessageSchema$1,
		ResultTypeSchema,
		ResultMetaSchema,
		ResultSchema: ResultSchema$1,
		PaginatedResultSchema: PaginatedResultSchema$1,
		CallToolResultSchema: CallToolResultSchema$1,
		ListToolsResultSchema: ListToolsResultSchema$1,
		ListPromptsResultSchema: ListPromptsResultSchema$1,
		GetPromptResultSchema: GetPromptResultSchema$1,
		ListResourcesResultSchema: ListResourcesResultSchema$1,
		ListResourceTemplatesResultSchema: ListResourceTemplatesResultSchema$1,
		ReadResourceResultSchema: ReadResourceResultSchema$1,
		CompleteResultSchema: CompleteResultSchema$1,
		CacheableResultSchema,
		DiscoverResultSchema: DiscoverResultSchema$1,
		CreateMessageRequestParamsSchema: CreateMessageRequestParamsSchema$1,
		CreateMessageRequestSchema: CreateMessageRequestSchema$1,
		ListRootsRequestSchema: ListRootsRequestSchema$1,
		CreateMessageResultSchema: CreateMessageResultSchema$1,
		ListRootsResultSchema: ListRootsResultSchema$1,
		ElicitResultSchema: ElicitResultSchema$1,
		ElicitRequestURLParamsSchema: ElicitRequestURLParamsSchema$1,
		ElicitRequestParamsSchema: ElicitRequestParamsSchema$1,
		ElicitRequestSchema: ElicitRequestSchema$1,
		InputRequestSchema,
		InputResponseSchema,
		InputRequestsSchema,
		InputResponsesSchema,
		InputRequiredResultSchema,
		InputResponseRequestParamsSchema,
		CallToolRequestSchema: CallToolRequestSchema$1,
		ListToolsRequestSchema: ListToolsRequestSchema$1,
		ListPromptsRequestSchema: ListPromptsRequestSchema$1,
		GetPromptRequestSchema: GetPromptRequestSchema$1,
		ListResourcesRequestSchema: ListResourcesRequestSchema$1,
		ListResourceTemplatesRequestSchema: ListResourceTemplatesRequestSchema$1,
		ReadResourceRequestSchema: ReadResourceRequestSchema$1,
		CompleteRequestSchema: CompleteRequestSchema$1,
		DiscoverRequestSchema: DiscoverRequestSchema$1,
		SubscriptionFilterSchema: SubscriptionFilterSchema$1,
		SubscriptionsListenRequestSchema: SubscriptionsListenRequestSchema$1,
		SubscriptionsListenResultMetaSchema: SubscriptionsListenResultMetaSchema$1,
		SubscriptionsListenResultSchema: SubscriptionsListenResultSchema$1,
		dispatchRequestSchemas,
		dispatchResultSchemas,
		NotificationMetaSchema,
		SubscriptionsAcknowledgedNotificationSchema: SubscriptionsAcknowledgedNotificationSchema$1,
		CancelledNotificationParamsSchema: CancelledNotificationParamsSchema$1,
		CancelledNotificationSchema: CancelledNotificationSchema$1,
		notificationSchemas2026,
		JSONRPCResultResponseSchema: wireResultResponse(ResultSchema$1),
		CallToolResultResponseSchema: wireResultResponse(union([CallToolResultSchema$1, InputRequiredResultSchema])),
		ListToolsResultResponseSchema: wireResultResponse(ListToolsResultSchema$1),
		ListPromptsResultResponseSchema: wireResultResponse(ListPromptsResultSchema$1),
		GetPromptResultResponseSchema: wireResultResponse(union([GetPromptResultSchema$1, InputRequiredResultSchema])),
		ListResourcesResultResponseSchema: wireResultResponse(ListResourcesResultSchema$1),
		ListResourceTemplatesResultResponseSchema: wireResultResponse(ListResourceTemplatesResultSchema$1),
		ReadResourceResultResponseSchema: wireResultResponse(union([ReadResourceResultSchema$1, InputRequiredResultSchema])),
		CompleteResultResponseSchema: wireResultResponse(CompleteResultSchema$1),
		DiscoverResultResponseSchema: wireResultResponse(DiscoverResultSchema$1),
		SubscriptionsListenResultResponseSchema: wireResultResponse(SubscriptionsListenResultSchema$1)
	};
}
var memo;
/**
* Builds the era wire-schema set on first call and returns the same object
* thereafter. Module evaluation stays construction-free so importing the
* era codec/registry costs nothing until the first validation actually
* needs a schema; the registry, the codec, and the eager `schemas.ts`
* shim all pull through this memo, so reference identity holds across
* every consumer.
*/
function buildSchemas2026() {
	return memo ??= build();
}
/**
* The operations whose results are cacheable on the 2026-07-28 revision (the
* `CacheableResult` extenders). This list is closed: no other operation's
* result ever receives cache fields from the SDK.
*/
var CACHEABLE_RESULT_METHODS = [
	"tools/list",
	"prompts/list",
	"resources/list",
	"resources/templates/list",
	"resources/read",
	"server/discover"
];
/** Whether the given method's result is cacheable on the 2026-07-28 revision. */
function isCacheableResultMethod(method) {
	return CACHEABLE_RESULT_METHODS.includes(method);
}
/**
* The symbol-keyed carrier for a configured cache hint on a result object.
* Symbol properties are invisible to JSON serialization, so the carrier can be
* attached era-blind: only the 2026-era encode seam consumes it.
*/
var RESULT_CACHE_HINT_FALLBACK = Symbol("modelcontextprotocol.resultCacheHintFallback");
/**
* Attaches a configured cache hint to a result as the encode-time fallback.
* Returns the result unchanged when there is nothing to attach. When a more
* specific hint is already attached, the two hints are combined per field
* (most-specific-author-wins for each of `ttlMs` and `cacheScope`): the
* per-registration hint attached by the feature layer keeps every field it
* sets, and the server-level per-operation hint only fills the fields the
* more specific hint leaves unset.
*/
function attachCacheHintFallback(result, hint) {
	if (hint === void 0) return result;
	const attached = result[RESULT_CACHE_HINT_FALLBACK];
	if (attached === void 0) return {
		...result,
		[RESULT_CACHE_HINT_FALLBACK]: hint
	};
	const merged = {};
	const ttlMs = attached.ttlMs ?? hint.ttlMs;
	if (ttlMs !== void 0) merged.ttlMs = ttlMs;
	const cacheScope = attached.cacheScope ?? hint.cacheScope;
	if (cacheScope !== void 0) merged.cacheScope = cacheScope;
	return {
		...result,
		[RESULT_CACHE_HINT_FALLBACK]: merged
	};
}
/** Reads the configured cache-hint fallback attached to a result, if any. */
function cacheHintFallbackOf(result) {
	return result[RESULT_CACHE_HINT_FALLBACK];
}
/**
* Whether a value is a valid `ttlMs`: a non-negative safe integer. Safe
* integers are required because the wire schemas validate `ttlMs` as an
* integer within `Number.MIN_SAFE_INTEGER`/`Number.MAX_SAFE_INTEGER`; a value
* outside that range is treated as invalid here so it falls through to the
* next author instead of being emitted and rejected downstream.
*/
function isValidCacheTtlMs(value) {
	return typeof value === "number" && Number.isSafeInteger(value) && value >= 0;
}
/** Whether a value is a valid `cacheScope`. */
function isValidCacheScope(value) {
	return value === "public" || value === "private";
}
/**
* Validates a configured cache hint at configuration time. Throws a
* `RangeError` naming the offending field, so misconfiguration fails at
* startup/registration rather than silently degrading at encode time.
*/
function assertValidCacheHint(hint, context) {
	if (hint.ttlMs !== void 0 && !isValidCacheTtlMs(hint.ttlMs)) throw new RangeError(`Invalid cache hint for ${context}: ttlMs must be a non-negative safe integer (got ${String(hint.ttlMs)})`);
	if (hint.cacheScope !== void 0 && !isValidCacheScope(hint.cacheScope)) throw new RangeError(`Invalid cache hint for ${context}: cacheScope must be 'public' or 'private' (got ${String(hint.cacheScope)})`);
}
/**
* Error codes for protocol errors that cross the wire as JSON-RPC error responses.
* These follow the JSON-RPC specification and MCP-specific extensions.
*/
var ProtocolErrorCode = /* @__PURE__ */ function(ProtocolErrorCode$1) {
	ProtocolErrorCode$1[ProtocolErrorCode$1["ParseError"] = -32700] = "ParseError";
	ProtocolErrorCode$1[ProtocolErrorCode$1["InvalidRequest"] = -32600] = "InvalidRequest";
	ProtocolErrorCode$1[ProtocolErrorCode$1["MethodNotFound"] = -32601] = "MethodNotFound";
	ProtocolErrorCode$1[ProtocolErrorCode$1["InvalidParams"] = -32602] = "InvalidParams";
	ProtocolErrorCode$1[ProtocolErrorCode$1["InternalError"] = -32603] = "InternalError";
	/**
	* Resource not found.
	*
	* Receive-tolerated only: the SDK never EMITS `-32002` — `resources/read`
	* misses answer `-32602` (Invalid Params) on every protocol revision per
	* the 2026-07-28 spec MUST, and a handler-thrown `-32002` is mapped to
	* `-32602` at the era encode seam. The member stays importable so clients
	* can recognise `-32002` from peers built on earlier SDK releases (the
	* spec's "clients SHOULD also accept `-32002`" backwards-compatibility
	* clause). Throw `ResourceNotFoundError` instead.
	*/
	ProtocolErrorCode$1[ProtocolErrorCode$1["ResourceNotFound"] = -32002] = "ResourceNotFound";
	/**
	* Processing the request requires a capability the client did not declare
	* in the request's `clientCapabilities` (protocol revision 2026-07-28).
	*/
	ProtocolErrorCode$1[ProtocolErrorCode$1["MissingRequiredClientCapability"] = -32021] = "MissingRequiredClientCapability";
	/**
	* The request's protocol version is unknown to the server or unsupported
	* by it (protocol revision 2026-07-28).
	*/
	ProtocolErrorCode$1[ProtocolErrorCode$1["UnsupportedProtocolVersion"] = -32022] = "UnsupportedProtocolVersion";
	ProtocolErrorCode$1[ProtocolErrorCode$1["UrlElicitationRequired"] = -32042] = "UrlElicitationRequired";
	return ProtocolErrorCode$1;
}({});
/**
* Protocol errors are JSON-RPC errors that cross the wire as error responses.
* They use numeric error codes from the {@linkcode ProtocolErrorCode} enum.
*
* `instanceof` on this class (and its subclasses) is brand-matched, so it works
* across separately bundled copies of the SDK — e.g. an error constructed by
* `@modelcontextprotocol/client` matches the class re-exported by
* `@modelcontextprotocol/server` in the same process.
*/
var ProtocolError = class ProtocolError extends Error {
	static {
		Object.defineProperty(this, "mcpBrand", { value: "mcp.ProtocolError" });
	}
	static [Symbol.hasInstance](value) {
		return brandedHasInstance(this, value);
	}
	/**
	* Brand-based type guard: equivalent to `value instanceof this`, as an
	* explicit static predicate (the axios/AWS-SDK `isInstance` style). Reads
	* the caller's own brand via `this`, so every branded subclass gets a
	* correctly-scoped guard by inheritance. Must be invoked on the class —
	* in callback position write `v => SdkError.isInstance(v)`, not
	* `.filter(SdkError.isInstance)` (detached calls throw rather than
	* silently matching nothing).
	*/
	static isInstance(value) {
		if (typeof this !== "function") throw new TypeError("isInstance must be called on the class (e.g. `SdkError.isInstance(value)`); for callbacks use `v => SdkError.isInstance(v)`");
		return brandedHasInstance(this, value);
	}
	constructor(code, message, data) {
		super(message);
		this.code = code;
		this.data = data;
		this.name = "ProtocolError";
		stampErrorBrands(this, new.target);
	}
	/**
	* Factory method to create the appropriate error type based on the error code and data
	*/
	static fromError(code, message, data) {
		if (code === ProtocolErrorCode.UrlElicitationRequired && data) {
			const errorData = data;
			if (errorData.elicitations) return new UrlElicitationRequiredError(errorData.elicitations, message);
		}
		if (code === ProtocolErrorCode.UnsupportedProtocolVersion && data) {
			const errorData = data;
			if (Array.isArray(errorData.supported) && typeof errorData.requested === "string") return new UnsupportedProtocolVersionError({
				supported: errorData.supported,
				requested: errorData.requested
			}, message);
		}
		if (code === ProtocolErrorCode.InvalidParams || code === ProtocolErrorCode.ResourceNotFound) {
			const errorData = data;
			if (typeof errorData?.uri === "string" && (code === ProtocolErrorCode.ResourceNotFound || Object.keys(errorData).length === 1)) return new ResourceNotFoundError(errorData.uri, message);
		}
		if (code === ProtocolErrorCode.MissingRequiredClientCapability && data) {
			const errorData = data;
			if (errorData.requiredCapabilities !== null && typeof errorData.requiredCapabilities === "object" && !Array.isArray(errorData.requiredCapabilities)) return new MissingRequiredClientCapabilityError({ requiredCapabilities: errorData.requiredCapabilities }, message);
		}
		return new ProtocolError(code, message, data);
	}
};
/**
* Error type for a `resources/read` miss: the requested resource does not
* exist. The wire code is `-32602` (Invalid Params) on every protocol
* revision — the spec MUST for revision 2026-07-28, and the value the v1.x
* SDK has always emitted on earlier revisions. The error data echoes the
* requested URI.
*
* Recognise this error by checking `error.data` is exactly `{ uri: string }`
* (a `-32602` whose data carries `uri` and nothing else is resource-not-found;
* any other `-32602` is an ordinary Invalid Params). For backwards compatibility, clients should also
* accept `-32002` as resource not found — earlier SDK builds emitted that
* code, and {@linkcode ProtocolError.fromError} reconstructs this class for
* either code **when `error.data` carries `uri`** (a bare `-32002` without
* `data.uri` stays a generic {@linkcode ProtocolError}). `instanceof` checks
* are brand-matched and work across separately bundled copies of the SDK.
*/
var ResourceNotFoundError = class extends ProtocolError {
	static {
		Object.defineProperty(this, "mcpBrand", { value: "mcp.ResourceNotFoundError" });
	}
	constructor(uri, message = `Resource not found: ${uri}`) {
		super(ProtocolErrorCode.InvalidParams, message, { uri });
	}
	/** The URI that was requested and not found. */
	get uri() {
		return this.data.uri;
	}
};
/**
* Specialized error type when a tool requires a URL mode elicitation.
* This makes it nicer for the client to handle since there is specific data to work with instead of just a code to check against.
*/
var UrlElicitationRequiredError = class extends ProtocolError {
	static {
		Object.defineProperty(this, "mcpBrand", { value: "mcp.UrlElicitationRequiredError" });
	}
	constructor(elicitations, message = `URL elicitation${elicitations.length > 1 ? "s" : ""} required`) {
		super(ProtocolErrorCode.UrlElicitationRequired, message, { elicitations });
	}
	get elicitations() {
		return this.data?.elicitations ?? [];
	}
};
/**
* Error type for the `-32022` UnsupportedProtocolVersion protocol error (protocol
* revision 2026-07-28): the request's protocol version is unknown to the server or
* unsupported by it.
*
* The error data lists the protocol versions the receiver supports (`supported`),
* so the sender can choose a mutually supported version and retry, and echoes the
* version that was requested (`requested`).
*/
var UnsupportedProtocolVersionError = class extends ProtocolError {
	static {
		Object.defineProperty(this, "mcpBrand", { value: "mcp.UnsupportedProtocolVersionError" });
	}
	constructor(data, message = `Unsupported protocol version: ${data.requested}`) {
		super(ProtocolErrorCode.UnsupportedProtocolVersion, message, data);
	}
	/**
	* Protocol versions the receiver supports.
	*/
	get supported() {
		return this.data.supported;
	}
	/**
	* The protocol version that was requested.
	*/
	get requested() {
		return this.data.requested;
	}
};
/**
* Error type for the `-32021` MissingRequiredClientCapability protocol error
* (protocol revision 2026-07-28): processing the request requires a capability
* the client did not declare in the request's `clientCapabilities`.
*
* The error data lists the missing capabilities (`requiredCapabilities`) in
* the `ClientCapabilities` shape, so the client can see exactly what it would
* have to declare for the request to be served. On HTTP, the response status
* is `400 Bad Request`.
*
* Recognize this error by its code and `data.requiredCapabilities`, or by
* `instanceof` — checks are brand-matched and work across separately bundled
* copies of the SDK.
*/
var MissingRequiredClientCapabilityError = class extends ProtocolError {
	static {
		Object.defineProperty(this, "mcpBrand", { value: "mcp.MissingRequiredClientCapabilityError" });
	}
	constructor(data, message = `Missing required client capabilities: ${Object.keys(data.requiredCapabilities).join(", ")}`) {
		super(ProtocolErrorCode.MissingRequiredClientCapability, message, data);
	}
	/**
	* The capabilities the server requires from the client to process the
	* request (only the missing capabilities are listed).
	*/
	get requiredCapabilities() {
		return this.data.requiredCapabilities;
	}
};
/** The default cache policy when neither the handler nor configuration provides one. */
var DEFAULT_CACHE_TTL_MS = 0;
var DEFAULT_CACHE_SCOPE = "private";
/**
* Request methods whose spec result vocabulary goes beyond `'complete'` on the
* 2026-07-28 revision: their results may be `input_required` (multi
* round-trip requests), so a handler-provided `resultType` passes through the
* stamp untouched. `subscriptions/listen` is NOT in this set: it never emits
* a JSON-RPC result — termination is stream close (HTTP) or
* `notifications/cancelled` (stdio) per the spec.
*/
var EXTENDED_RESULT_TYPE_METHODS = [
	"tools/call",
	"prompts/get",
	"resources/read"
];
/**
* Step 1 of the encode contract: ensure the outbound result carries the
* required `resultType` discriminator.
*
* - No handler-provided value → stamp `'complete'`.
* - Handler-provided `'complete'` → kept as-is.
* - Handler-provided non-`'complete'` value on a method whose vocabulary
*   allows it ({@linkcode EXTENDED_RESULT_TYPE_METHODS}) → passes through.
*   The value is forwarded verbatim — the wire vocabulary is an open union and
*   the SDK does not validate the string, so emitting a `resultType` the
*   negotiated revision does not define is the handler author's
*   responsibility.
* - Handler-provided non-`'complete'` value on any other method → internal
*   error (loud): the value would be mis-typed on the wire, and silently
*   rewriting it would hide a server bug.
*/
function stampResultType(method, result) {
	const provided = result["resultType"];
	if (provided === void 0) return {
		...result,
		resultType: "complete"
	};
	if (provided === "complete") return result;
	if (EXTENDED_RESULT_TYPE_METHODS.includes(method)) return result;
	throw new ProtocolError(ProtocolErrorCode.InternalError, `Handler for ${method} returned resultType '${String(provided)}', but results of ${method} only support 'complete' on protocol revision 2026-07-28`);
}
/**
* Step 2 of the encode contract: fill the required `ttlMs`/`cacheScope` fields
* on cacheable results.
*
* Applies only when the (post-stamp) `resultType` is `'complete'` and the
* method is one of the cacheable operations; everything else is returned
* untouched apart from removing the configured-hint carrier. Field resolution
* is per field, most specific author first: a valid handler-returned value,
* then the configured cache hint attached by the server layer, then the
* defaults. Handler-returned values are validated at encode time (`ttlMs`
* must be a non-negative integer, `cacheScope` must be `'public'` or
* `'private'`); invalid values are ignored rather than emitted.
*/
function fillCacheFields(method, result) {
	const fallback = cacheHintFallbackOf(result);
	if (result["resultType"] !== "complete" || !isCacheableResultMethod(method)) return fallback === void 0 ? result : stripCacheHintFallback(result);
	const provided = result;
	const ttlMs = isValidCacheTtlMs(provided["ttlMs"]) ? provided["ttlMs"] : resolveTtlMs(fallback);
	const cacheScope = isValidCacheScope(provided["cacheScope"]) ? provided["cacheScope"] : resolveCacheScope(fallback);
	const filled = {
		...provided,
		ttlMs,
		cacheScope
	};
	delete filled[RESULT_CACHE_HINT_FALLBACK];
	return filled;
}
function isPlainObject$5(value) {
	return value !== null && typeof value === "object" && !Array.isArray(value);
}
/**
* Step 3 of the encode contract: stamp the server's identity into the
* result's `_meta` under `io.modelcontextprotocol/serverInfo` (spec PR #3002:
* servers SHOULD include it on every response).
*
* - No `serverInfo` supplied (a client instance, or a hand-constructed
*   protocol object) → identity function.
* - The result's `_meta` already carries the key → kept as-is (the handler
*   is the more specific author; mirrors the cache-fill resolution order).
* - A present-but-non-object `_meta` (a dynamic-caller bug) → kept as-is:
*   the stamp never rewrites handler material, and the malformed value fails
*   loudly at the peer instead of being silently replaced here.
* - Otherwise → the key is added, preserving any other `_meta` entries.
*
* Runs for every result regardless of `resultType`: the anchor types
* `Result._meta` as `ResultMetaObject` on all results, `input_required`
* included.
*/
function stampServerInfoMeta(result, serverInfo) {
	if (serverInfo === void 0) return result;
	const meta = result["_meta"];
	if (meta === void 0) return {
		...result,
		_meta: { [SERVER_INFO_META_KEY]: serverInfo }
	};
	if (!isPlainObject$5(meta)) return result;
	if (meta["io.modelcontextprotocol/serverInfo"] !== void 0) return result;
	return {
		...result,
		_meta: {
			...meta,
			[SERVER_INFO_META_KEY]: serverInfo
		}
	};
}
function resolveTtlMs(fallback) {
	return fallback !== void 0 && isValidCacheTtlMs(fallback.ttlMs) ? fallback.ttlMs : DEFAULT_CACHE_TTL_MS;
}
function resolveCacheScope(fallback) {
	return fallback !== void 0 && isValidCacheScope(fallback.cacheScope) ? fallback.cacheScope : DEFAULT_CACHE_SCOPE;
}
function stripCacheHintFallback(result) {
	const copy = { ...result };
	delete copy[RESULT_CACHE_HINT_FALLBACK];
	return copy;
}
/**
* In-band input-request vocabulary of the 2026-07-28 revision (SEP-2322
* multi round-trip requests), dispatch view.
*
* The three former server→client wire requests (`elicitation/create`,
* `sampling/createMessage`, `roots/list`) are NOT wire request methods on
* this revision — they are demoted to de-JSON-RPC'd payloads embedded in an
* `input_required` result. The multi-round-trip driver dispatches those
* embedded payloads to the client's registered handlers through the normal
* handler machinery, and these are the schemas that dispatch parses them
* with: lenient where the anchor's wire-true artifacts are strict (an
* embedded request never carries the per-request `_meta` envelope), exact
* where the vocabulary forks (the sampling shapes compose the forked
* SamplingMessage/Tool payloads).
*
* Registry membership is intentionally NOT granted here — these methods stay
* absent from the 2026-era request registry (a peer sending one as a wire
* request still gets −32601 by absence). Only the codec's
* `inputRequestSchema`/`inputResponseSchema` accessors expose them.
*/
/** The embedded input-request methods of the 2026-07-28 revision. */
var INPUT_REQUEST_METHODS_2026 = [
	"elicitation/create",
	"sampling/createMessage",
	"roots/list"
];
var maps;
function inputSchemaMaps() {
	if (maps) return maps;
	const s = buildSchemas2026();
	maps = {
		request: {
			"elicitation/create": object({
				method: literal("elicitation/create"),
				params: s.ElicitRequestParamsSchema
			}),
			"sampling/createMessage": object({
				method: literal("sampling/createMessage"),
				params: s.CreateMessageRequestParamsSchema
			}),
			"roots/list": object({
				method: literal("roots/list"),
				params: looseObject({}).optional()
			})
		},
		response: {
			"elicitation/create": s.ElicitResultSchema,
			"sampling/createMessage": s.CreateMessageResultSchema,
			"roots/list": s.ListRootsResultSchema
		}
	};
	return maps;
}
/**
* Forces the lazy embedded-request maps (and, through them, the era's schema
* memo). Warm-up hook for `preloadSchemas()` — no-op once the maps exist.
*/
function warmInputSchemaMaps2026() {
	inputSchemaMaps();
}
function isInputRequestMethod2026(method) {
	return INPUT_REQUEST_METHODS_2026.includes(method);
}
function getInputRequestSchema2026(method) {
	return isInputRequestMethod2026(method) ? inputSchemaMaps().request[method] : void 0;
}
function getInputResponseSchema2026(method) {
	return isInputRequestMethod2026(method) ? inputSchemaMaps().response[method] : void 0;
}
var requestMethodKeys = {
	"tools/call": null,
	"tools/list": null,
	"prompts/get": null,
	"prompts/list": null,
	"resources/list": null,
	"resources/templates/list": null,
	"resources/read": null,
	"completion/complete": null,
	"server/discover": null,
	"subscriptions/listen": null
};
var notificationMethodKeys = {
	"notifications/cancelled": null,
	"notifications/progress": null,
	"notifications/message": null,
	"notifications/resources/updated": null,
	"notifications/resources/list_changed": null,
	"notifications/tools/list_changed": null,
	"notifications/prompts/list_changed": null,
	"notifications/subscriptions/acknowledged": null
};
/** The 2026-era request-method set (registry membership = the deletion story). */
function hasRequestMethod2026(method) {
	return Object.prototype.hasOwnProperty.call(requestMethodKeys, method);
}
/** The 2026-era notification-method set. */
function hasNotificationMethod2026(method) {
	return Object.prototype.hasOwnProperty.call(notificationMethodKeys, method);
}
/** Result-map membership (same key set as the request map on this era). */
function hasResultMethod2026(method) {
	return Object.prototype.hasOwnProperty.call(requestMethodKeys, method);
}
function getRequestSchema2026(method) {
	return hasRequestMethod2026(method) ? buildSchemas2026().dispatchRequestSchemas[method] : void 0;
}
function getResultSchema2026(method) {
	return hasResultMethod2026(method) ? buildSchemas2026().dispatchResultSchemas[method] : void 0;
}
function getNotificationSchema2026(method) {
	return hasNotificationMethod2026(method) ? buildSchemas2026().notificationSchemas2026[method] : void 0;
}
Object.keys(requestMethodKeys);
Object.keys(notificationMethodKeys);
function isPlainObject$4(value) {
	return value !== null && typeof value === "object" && !Array.isArray(value);
}
/** Tri-state wrap of an optional Zod schema lookup (the function-only contract). */
function triState(schema, raw) {
	if (schema === void 0) return {
		ok: false,
		reason: "not-in-era"
	};
	const parsed = schema.safeParse(raw);
	return parsed.success ? {
		ok: true,
		value: parsed.data
	} : {
		ok: false,
		reason: "invalid",
		message: String(parsed.error)
	};
}
var NOT_IN_ERA = {
	ok: false,
	reason: "not-in-era"
};
/**
* The reserved `_meta` keys an envelope must carry on this era (in reporting
* order). `clientInfo` is NOT here: spec PR #3002 demoted it to SHOULD, so a
* request without it is accepted (a present-but-malformed value still fails
* the envelope schema parse below).
*/
var REQUIRED_ENVELOPE_KEYS = [PROTOCOL_VERSION_META_KEY, CLIENT_CAPABILITIES_META_KEY];
/** Strip the known deleted-field set from an outbound result (Q1-SD3 iii). */
function enforceDeletedFields(method, result) {
	let next = result;
	let copied = false;
	const copy = () => {
		if (!copied) {
			next = { ...next };
			copied = true;
		}
		return next;
	};
	const tools = result.tools;
	if (method === "tools/list" && Array.isArray(tools) && tools.some((tool) => isPlainObject$4(tool) && "execution" in tool)) copy().tools = tools.map((tool) => {
		if (!isPlainObject$4(tool) || !("execution" in tool)) return tool;
		const rest = { ...tool };
		delete rest["execution"];
		return rest;
	});
	const capabilities = result.capabilities;
	if (isPlainObject$4(capabilities) && "tasks" in capabilities) {
		const rest = { ...capabilities };
		delete rest["tasks"];
		copy().capabilities = rest;
	}
	return next;
}
var rev2026Codec = {
	era: "2026-07-28",
	hasRequestMethod: hasRequestMethod2026,
	hasNotificationMethod: hasNotificationMethod2026,
	hasInputRequestMethod: (method) => getInputRequestSchema2026(method) !== void 0,
	validateRequest: (method, raw) => triState(getRequestSchema2026(method), raw),
	validateResult: (method, raw) => triState(getResultSchema2026(method), raw),
	validateNotification: (method, raw) => triState(getNotificationSchema2026(method), raw),
	validateInputRequest: (method, raw) => triState(getInputRequestSchema2026(method), raw),
	validateInputResponse: (method, raw) => triState(getInputResponseSchema2026(method), raw),
	samplingResultVariant: () => NOT_IN_ERA,
	outboundEnvelope(material) {
		return {
			[PROTOCOL_VERSION_META_KEY]: material.protocolVersion,
			[CLIENT_INFO_META_KEY]: material.clientInfo,
			[CLIENT_CAPABILITIES_META_KEY]: material.clientCapabilities,
			...material.logLevel !== void 0 && { ["io.modelcontextprotocol/logLevel"]: material.logLevel }
		};
	},
	validateEnvelopeMeta(meta) {
		const issues = [];
		for (const key of REQUIRED_ENVELOPE_KEYS) if (!(key in meta)) issues.push({
			key,
			problem: "missing"
		});
		const parsed = buildSchemas2026().RequestMetaEnvelopeSchema.safeParse(meta);
		if (!parsed.success) for (const issue of parsed.error.issues) {
			const path = issue.path.map(String);
			const key = path.length > 0 ? path.join(".") : "_meta";
			if (path.length === 1 && issues.some((existing) => existing.key === key && existing.problem === "missing")) continue;
			issues.push({
				key,
				problem: issue.message
			});
		}
		return issues;
	},
	projectCallToolResult: (result) => appendTextFallbackForNonObject(result),
	inputRequestSchema: getInputRequestSchema2026,
	decodeResult(method, raw) {
		if (!isPlainObject$4(raw)) return {
			kind: "invalid",
			error: new SdkError(SdkErrorCode.InvalidResult, `Invalid result for ${method}: not an object`, { method })
		};
		const rawResultType = raw["resultType"];
		if (rawResultType === void 0) return {
			kind: "invalid",
			error: new SdkError(SdkErrorCode.InvalidResult, `Invalid result for ${method}: missing required resultType — servers implementing protocol revision 2026-07-28 MUST include it (the absent-means-complete bridge applies only to earlier-revision servers)`, {
				method,
				violation: "missing-resultType"
			})
		};
		if (typeof rawResultType !== "string") return {
			kind: "invalid",
			error: new SdkError(SdkErrorCode.InvalidResult, `Invalid result for ${method}: non-string resultType`, {
				method,
				resultType: rawResultType
			})
		};
		if (rawResultType === "input_required") {
			const rawInputRequests = raw["inputRequests"];
			const inputRequests = isPlainObject$4(rawInputRequests) ? rawInputRequests : {};
			const requestState = raw["requestState"];
			const metaParse = raw["_meta"] === void 0 ? void 0 : buildSchemas2026().ResultMetaSchema.safeParse(raw["_meta"]);
			const meta = metaParse?.success ? metaParse.data : void 0;
			if (Object.keys(inputRequests).length === 0 && typeof requestState !== "string") return {
				kind: "invalid",
				error: new SdkError(SdkErrorCode.InvalidResult, `Invalid result for ${method}: input_required carries neither inputRequests nor requestState (every input_required result must include at least one of the two)`, {
					method,
					violation: "input-required-missing-both"
				})
			};
			return {
				kind: "input_required",
				inputRequests,
				...typeof requestState === "string" && { requestState },
				...meta !== void 0 && { _meta: meta }
			};
		}
		if (rawResultType !== "complete") return {
			kind: "invalid",
			error: new SdkError(SdkErrorCode.UnsupportedResultType, `Unsupported result type '${rawResultType}' for ${method}`, {
				resultType: rawResultType,
				method
			})
		};
		const wireResultSchemas = getWireResultSchemas();
		const wireSchema = Object.hasOwn(wireResultSchemas, method) ? wireResultSchemas[method] : void 0;
		if (wireSchema !== void 0) {
			const parsed = wireSchema.safeParse(raw);
			if (!parsed.success) return {
				kind: "invalid",
				error: new SdkError(SdkErrorCode.InvalidResult, `Invalid result for ${method}: ${parsed.error}`, { method })
			};
		}
		const lifted = { ...raw };
		delete lifted["resultType"];
		return {
			kind: "complete",
			result: lifted
		};
	},
	encodeResult(method, result, serverInfo) {
		return stampServerInfoMeta(fillCacheFields(method, stampResultType(method, enforceDeletedFields(method, result))), serverInfo);
	},
	encodeErrorCode: (code) => code === -32002 ? -32602 : code,
	checkInboundEnvelope(material) {
		if (material.envelope === void 0) return "Request is missing the required _meta envelope for protocol revision 2026-07-28 (io.modelcontextprotocol/protocolVersion, io.modelcontextprotocol/clientCapabilities)";
		const parsed = buildSchemas2026().RequestMetaEnvelopeSchema.safeParse(material.envelope);
		if (!parsed.success) return `Invalid _meta envelope for protocol revision 2026-07-28: ${parsed.error.issues.map((issue) => issue.message).join("; ")}`;
	}
};
/** Wire-true result wrappers consulted by decode step 2, keyed by method —
* built once through the era's schema memo on the first decode. */
var wireResultSchemasMemo;
function getWireResultSchemas() {
	if (wireResultSchemasMemo) return wireResultSchemasMemo;
	const s = buildSchemas2026();
	wireResultSchemasMemo = {
		"tools/call": s.CallToolResultSchema,
		"tools/list": s.ListToolsResultSchema,
		"prompts/get": s.GetPromptResultSchema,
		"prompts/list": s.ListPromptsResultSchema,
		"resources/list": s.ListResourcesResultSchema,
		"resources/templates/list": s.ListResourceTemplatesResultSchema,
		"resources/read": s.ReadResourceResultSchema,
		"completion/complete": s.CompleteResultSchema,
		"server/discover": s.DiscoverResultSchema
	};
	return wireResultSchemasMemo;
}
/**
* Forces the lazy wire-result wrapper map (and, through it, the era's schema
* memo). Warm-up hook for `preloadSchemas()` — no-op once the map exists.
*/
function warmWireResultSchemas2026() {
	getWireResultSchemas();
}
/**
* The modern wire revision literal. Internal only — deliberately NOT a public
* constant (G-D2-4: no public modern-version constant ships before era-aware
* list semantics exist).
*/
var MODERN_WIRE_REVISION = "2026-07-28";
/**
* Era resolution, many-to-one (Q1-SD1): every modern-era revision
* (`>= 2026-07-28`) → the 2026-era codec; every legacy revision (the five
* `SUPPORTED_PROTOCOL_VERSIONS`) and `undefined`/unknown → the 2025-era
* codec (the DV-13 default posture — hand-constructed instances and
* unclassified traffic are legacy-era). This is the same era predicate the
* rest of the SDK uses ({@link isModernProtocolVersion}); a pinned modern
* revision other than the literal '2026-07-28' must still resolve modern.
*/
function codecForVersion(version) {
	return version !== void 0 && isModernProtocolVersion(version) ? rev2026Codec : rev2025Codec;
}
/**
* The wire era an edge classification names (Q2 — produced at the
* transport/entry edge; this layer only CONSUMES it). The dispatch funnel no
* longer resolves a codec FROM the classification: era is instance state, and
* a classified inbound message is VALIDATED against the instance era — a
* mismatch is an entry/routing error, never a per-message era switch. The
* exact `revision` wins over the coarse era flag when both are present.
*/
function classifiedWireEra(classification) {
	if (classification.revision !== void 0) return codecForVersion(classification.revision).era;
	return classification.era === "modern" ? rev2026Codec.era : rev2025Codec.era;
}
/**
* The derived spec-method universe: the union of every codec registry. A
* method in this set is era-gated at dispatch and send time; a method outside
* it is a consumer-owned extension method (era-blind, schema-explicit).
* Derived from the registries — never hand-curated (the LEGACY_ONLY_METHODS
* table class is exactly what registry membership replaces).
*/
function isSpecRequestMethod(method) {
	return ALL_CODECS.some((codec) => codec.hasRequestMethod(method));
}
function isSpecNotificationMethod(method) {
	return ALL_CODECS.some((codec) => codec.hasNotificationMethod(method));
}
/** The names SEP-2663 re-defines for the Tasks extension on the era that removed them from core. */
function isExtensionReusedRequestMethod(method) {
	return method === "tasks/get" || method === "tasks/cancel";
}
var ALL_CODECS = [rev2025Codec, rev2026Codec];
/**
* Per-request `_meta` envelope claim helpers (protocol revision 2026-07-28).
*
* Pure, value-returning helpers used by the inbound HTTP classifier
* (`classifyInboundRequest`): claim detection and envelope validation with
* self-identifying issues. The envelope schema itself stays the wire layer's
* single source of truth (`RequestMetaEnvelopeSchema`); this module only maps
* its outcomes into the shapes the validation ladder emits.
*
* Claim detection is deliberately narrow: a message claims the 2026-07-28
* envelope mechanism if and only if the reserved protocol-version `_meta` key
* is present in `params._meta`. Other reserved keys (client info, client
* capabilities, log level), a bare `progressToken`, or unrelated keys under
* the `io.modelcontextprotocol/` prefix do NOT constitute a claim on their
* own — but once the claim key is present, a malformed envelope is a
* validation error, never a silent fall back to legacy handling.
*
* The wire-exact envelope schema, the required-key set, and the per-key issue
* mapping live in the wire layer (the 2026-era codec's `validateEnvelopeMeta`).
* This module never reaches into a per-revision wire module directly.
*/
function isPlainObject$3(value) {
	return value !== null && typeof value === "object" && !Array.isArray(value);
}
/** The `_meta` object of a message's params, when present. */
function requestMetaOf(params) {
	if (!isPlainObject$3(params)) return void 0;
	const meta = params["_meta"];
	return isPlainObject$3(meta) ? meta : void 0;
}
/**
* Whether a message's params carry the per-request envelope claim: the
* reserved protocol-version `_meta` key is present (regardless of whether the
* rest of the envelope is valid — validation is a separate, later step).
*/
function hasEnvelopeClaim(params) {
	const meta = requestMetaOf(params);
	return meta !== void 0 && "io.modelcontextprotocol/protocolVersion" in meta;
}
/**
* The protocol version named by a message's envelope claim, when the claim is
* present and carries a string value. A present claim with a non-string value
* still counts as a claim ({@linkcode hasEnvelopeClaim}); it surfaces as a
* validation issue instead of a version.
*/
function envelopeClaimVersion(params) {
	const value = requestMetaOf(params)?.[PROTOCOL_VERSION_META_KEY];
	return typeof value === "string" ? value : void 0;
}
/**
* Validates a request's `_meta` object as a 2026-07-28 per-request envelope
* and reports problems as self-identifying issues (which key, what problem).
*
* Returns an empty array when the envelope is valid. Missing required keys are
* reported first (as `problem: 'missing'`), then schema violations inside
* present keys, in a stable order.
*/
function validateEnvelopeMeta(meta) {
	return codecForVersion(MODERN_WIRE_REVISION).validateEnvelopeMeta(meta);
}
var schemas_exports = /* @__PURE__ */ __exportAll({
	AnnotationsSchema: () => AnnotationsSchema,
	AudioContentSchema: () => AudioContentSchema,
	BaseMetadataSchema: () => BaseMetadataSchema,
	BaseRequestParamsSchema: () => BaseRequestParamsSchema,
	BlobResourceContentsSchema: () => BlobResourceContentsSchema,
	BooleanSchemaSchema: () => BooleanSchemaSchema,
	CallToolRequestParamsSchema: () => CallToolRequestParamsSchema,
	CallToolRequestSchema: () => CallToolRequestSchema,
	CallToolResultSchema: () => CallToolResultSchema,
	CancelTaskRequestSchema: () => CancelTaskRequestSchema,
	CancelTaskResultSchema: () => CancelTaskResultSchema,
	CancelledNotificationParamsSchema: () => CancelledNotificationParamsSchema,
	CancelledNotificationSchema: () => CancelledNotificationSchema,
	ClientCapabilitiesSchema: () => ClientCapabilitiesSchema,
	ClientNotificationSchema: () => ClientNotificationSchema,
	ClientRequestSchema: () => ClientRequestSchema,
	ClientResultSchema: () => ClientResultSchema,
	ClientTasksCapabilitySchema: () => ClientTasksCapabilitySchema,
	CompatibilityCallToolResultSchema: () => CompatibilityCallToolResultSchema,
	CompleteRequestParamsSchema: () => CompleteRequestParamsSchema,
	CompleteRequestSchema: () => CompleteRequestSchema,
	CompleteResultSchema: () => CompleteResultSchema,
	ContentBlockSchema: () => ContentBlockSchema,
	CreateMessageRequestParamsSchema: () => CreateMessageRequestParamsSchema,
	CreateMessageRequestSchema: () => CreateMessageRequestSchema,
	CreateMessageResultSchema: () => CreateMessageResultSchema,
	CreateMessageResultWithToolsSchema: () => CreateMessageResultWithToolsSchema,
	CreateTaskResultSchema: () => CreateTaskResultSchema,
	CursorSchema: () => CursorSchema,
	DiscoverRequestSchema: () => DiscoverRequestSchema,
	DiscoverResultSchema: () => DiscoverResultSchema,
	ElicitRequestFormParamsSchema: () => ElicitRequestFormParamsSchema,
	ElicitRequestParamsSchema: () => ElicitRequestParamsSchema,
	ElicitRequestSchema: () => ElicitRequestSchema,
	ElicitRequestURLParamsSchema: () => ElicitRequestURLParamsSchema,
	ElicitResultSchema: () => ElicitResultSchema,
	ElicitationCompleteNotificationParamsSchema: () => ElicitationCompleteNotificationParamsSchema,
	ElicitationCompleteNotificationSchema: () => ElicitationCompleteNotificationSchema,
	EmbeddedResourceSchema: () => EmbeddedResourceSchema,
	EmptyResultSchema: () => EmptyResultSchema,
	EnumSchemaSchema: () => EnumSchemaSchema,
	GetPromptRequestParamsSchema: () => GetPromptRequestParamsSchema,
	GetPromptRequestSchema: () => GetPromptRequestSchema,
	GetPromptResultSchema: () => GetPromptResultSchema,
	GetTaskPayloadRequestSchema: () => GetTaskPayloadRequestSchema,
	GetTaskPayloadResultSchema: () => GetTaskPayloadResultSchema,
	GetTaskRequestSchema: () => GetTaskRequestSchema,
	GetTaskResultSchema: () => GetTaskResultSchema,
	IconSchema: () => IconSchema,
	IconsSchema: () => IconsSchema,
	ImageContentSchema: () => ImageContentSchema,
	ImplementationSchema: () => ImplementationSchema,
	InitializeRequestParamsSchema: () => InitializeRequestParamsSchema,
	InitializeRequestSchema: () => InitializeRequestSchema,
	InitializeResultSchema: () => InitializeResultSchema,
	InitializedNotificationSchema: () => InitializedNotificationSchema,
	JSONArraySchema: () => JSONArraySchema,
	JSONObjectSchema: () => JSONObjectSchema,
	JSONRPCErrorResponseSchema: () => JSONRPCErrorResponseSchema,
	JSONRPCMessageSchema: () => JSONRPCMessageSchema,
	JSONRPCNotificationSchema: () => JSONRPCNotificationSchema,
	JSONRPCRequestSchema: () => JSONRPCRequestSchema,
	JSONRPCResponseSchema: () => JSONRPCResponseSchema,
	JSONRPCResultResponseSchema: () => JSONRPCResultResponseSchema,
	JSONValueSchema: () => JSONValueSchema,
	LegacyTitledEnumSchemaSchema: () => LegacyTitledEnumSchemaSchema,
	ListChangedOptionsBaseSchema: () => ListChangedOptionsBaseSchema,
	ListPromptsRequestSchema: () => ListPromptsRequestSchema,
	ListPromptsResultSchema: () => ListPromptsResultSchema,
	ListResourceTemplatesRequestSchema: () => ListResourceTemplatesRequestSchema,
	ListResourceTemplatesResultSchema: () => ListResourceTemplatesResultSchema,
	ListResourcesRequestSchema: () => ListResourcesRequestSchema,
	ListResourcesResultSchema: () => ListResourcesResultSchema,
	ListRootsRequestSchema: () => ListRootsRequestSchema,
	ListRootsResultSchema: () => ListRootsResultSchema,
	ListTasksRequestSchema: () => ListTasksRequestSchema,
	ListTasksResultSchema: () => ListTasksResultSchema,
	ListToolsRequestSchema: () => ListToolsRequestSchema,
	ListToolsResultSchema: () => ListToolsResultSchema,
	LoggingLevelSchema: () => LoggingLevelSchema,
	LoggingMessageNotificationParamsSchema: () => LoggingMessageNotificationParamsSchema,
	LoggingMessageNotificationSchema: () => LoggingMessageNotificationSchema,
	ModelHintSchema: () => ModelHintSchema,
	ModelPreferencesSchema: () => ModelPreferencesSchema,
	MultiSelectEnumSchemaSchema: () => MultiSelectEnumSchemaSchema,
	NotificationSchema: () => NotificationSchema,
	NotificationsParamsSchema: () => NotificationsParamsSchema,
	NumberSchemaSchema: () => NumberSchemaSchema,
	PaginatedRequestParamsSchema: () => PaginatedRequestParamsSchema,
	PaginatedRequestSchema: () => PaginatedRequestSchema,
	PaginatedResultSchema: () => PaginatedResultSchema,
	PingRequestSchema: () => PingRequestSchema,
	PrimitiveSchemaDefinitionSchema: () => PrimitiveSchemaDefinitionSchema,
	ProgressNotificationParamsSchema: () => ProgressNotificationParamsSchema,
	ProgressNotificationSchema: () => ProgressNotificationSchema,
	ProgressSchema: () => ProgressSchema,
	ProgressTokenSchema: () => ProgressTokenSchema,
	PromptArgumentSchema: () => PromptArgumentSchema,
	PromptListChangedNotificationSchema: () => PromptListChangedNotificationSchema,
	PromptMessageSchema: () => PromptMessageSchema,
	PromptReferenceSchema: () => PromptReferenceSchema,
	PromptSchema: () => PromptSchema,
	ReadResourceRequestParamsSchema: () => ReadResourceRequestParamsSchema,
	ReadResourceRequestSchema: () => ReadResourceRequestSchema,
	ReadResourceResultSchema: () => ReadResourceResultSchema,
	RelatedTaskMetadataSchema: () => RelatedTaskMetadataSchema,
	RequestIdSchema: () => RequestIdSchema,
	RequestMetaSchema: () => RequestMetaSchema,
	RequestSchema: () => RequestSchema,
	ResourceContentsSchema: () => ResourceContentsSchema,
	ResourceLinkSchema: () => ResourceLinkSchema,
	ResourceListChangedNotificationSchema: () => ResourceListChangedNotificationSchema,
	ResourceRequestParamsSchema: () => ResourceRequestParamsSchema,
	ResourceSchema: () => ResourceSchema,
	ResourceTemplateReferenceSchema: () => ResourceTemplateReferenceSchema,
	ResourceTemplateSchema: () => ResourceTemplateSchema,
	ResourceUpdatedNotificationParamsSchema: () => ResourceUpdatedNotificationParamsSchema,
	ResourceUpdatedNotificationSchema: () => ResourceUpdatedNotificationSchema,
	ResultMetaObjectSchema: () => ResultMetaObjectSchema,
	ResultSchema: () => ResultSchema,
	RoleSchema: () => RoleSchema,
	RootSchema: () => RootSchema,
	RootsListChangedNotificationSchema: () => RootsListChangedNotificationSchema,
	SamplingContentSchema: () => SamplingContentSchema,
	SamplingMessageContentBlockSchema: () => SamplingMessageContentBlockSchema,
	SamplingMessageSchema: () => SamplingMessageSchema,
	ServerCapabilitiesSchema: () => ServerCapabilitiesSchema,
	ServerNotificationSchema: () => ServerNotificationSchema,
	ServerRequestSchema: () => ServerRequestSchema,
	ServerResultSchema: () => ServerResultSchema,
	ServerTasksCapabilitySchema: () => ServerTasksCapabilitySchema,
	SetLevelRequestParamsSchema: () => SetLevelRequestParamsSchema,
	SetLevelRequestSchema: () => SetLevelRequestSchema,
	SingleSelectEnumSchemaSchema: () => SingleSelectEnumSchemaSchema,
	StringSchemaSchema: () => StringSchemaSchema,
	SubscribeRequestParamsSchema: () => SubscribeRequestParamsSchema,
	SubscribeRequestSchema: () => SubscribeRequestSchema,
	SubscriptionFilterSchema: () => SubscriptionFilterSchema,
	SubscriptionsAcknowledgedNotificationParamsSchema: () => SubscriptionsAcknowledgedNotificationParamsSchema,
	SubscriptionsAcknowledgedNotificationSchema: () => SubscriptionsAcknowledgedNotificationSchema,
	SubscriptionsListenRequestParamsSchema: () => SubscriptionsListenRequestParamsSchema,
	SubscriptionsListenRequestSchema: () => SubscriptionsListenRequestSchema,
	SubscriptionsListenResultMetaSchema: () => SubscriptionsListenResultMetaSchema,
	SubscriptionsListenResultSchema: () => SubscriptionsListenResultSchema,
	TaskAugmentedRequestParamsSchema: () => TaskAugmentedRequestParamsSchema,
	TaskCreationParamsSchema: () => TaskCreationParamsSchema,
	TaskMetadataSchema: () => TaskMetadataSchema,
	TaskSchema: () => TaskSchema,
	TaskStatusNotificationParamsSchema: () => TaskStatusNotificationParamsSchema,
	TaskStatusNotificationSchema: () => TaskStatusNotificationSchema,
	TaskStatusSchema: () => TaskStatusSchema,
	TextContentSchema: () => TextContentSchema,
	TextResourceContentsSchema: () => TextResourceContentsSchema,
	TitledMultiSelectEnumSchemaSchema: () => TitledMultiSelectEnumSchemaSchema,
	TitledSingleSelectEnumSchemaSchema: () => TitledSingleSelectEnumSchemaSchema,
	ToolAnnotationsSchema: () => ToolAnnotationsSchema,
	ToolChoiceSchema: () => ToolChoiceSchema,
	ToolExecutionSchema: () => ToolExecutionSchema,
	ToolListChangedNotificationSchema: () => ToolListChangedNotificationSchema,
	ToolResultContentSchema: () => ToolResultContentSchema,
	ToolSchema: () => ToolSchema,
	ToolUseContentSchema: () => ToolUseContentSchema,
	UnsubscribeRequestParamsSchema: () => UnsubscribeRequestParamsSchema,
	UnsubscribeRequestSchema: () => UnsubscribeRequestSchema,
	UntitledMultiSelectEnumSchemaSchema: () => UntitledMultiSelectEnumSchemaSchema,
	UntitledSingleSelectEnumSchemaSchema: () => UntitledSingleSelectEnumSchemaSchema
});
var isJSONRPCRequest = (value) => JSONRPCRequestSchema.safeParse(value).success;
var isJSONRPCNotification = (value) => JSONRPCNotificationSchema.safeParse(value).success;
/**
* Checks if a value is a valid {@linkcode JSONRPCResultResponse}.
* @param value - The value to check.
*
* @returns True if the value is a valid {@linkcode JSONRPCResultResponse}, false otherwise.
*/
var isJSONRPCResultResponse = (value) => JSONRPCResultResponseSchema.safeParse(value).success;
/**
* Checks if a value is a valid {@linkcode JSONRPCErrorResponse}.
* @param value - The value to check.
*
* @returns True if the value is a valid {@linkcode JSONRPCErrorResponse}, false otherwise.
*/
var isJSONRPCErrorResponse = (value) => JSONRPCErrorResponseSchema.safeParse(value).success;
/**
* Checks whether a value is an input-required result (protocol revision
* 2026-07-28): the multi-round-trip return shape discriminated by
* `resultType: 'input_required'`.
*
* This is a discriminator check, not a full validator — the at-least-one rule
* (`inputRequests` or `requestState`) is enforced by the `inputRequired()`
* builder and re-checked by the server seam for hand-built values.
*
* @param value - The value to check.
* @returns True if the value carries the `input_required` discriminator.
*/
var isInputRequiredResult = (value) => typeof value === "object" && value !== null && !Array.isArray(value) && value.resultType === "input_required";
var isInitializeRequest = (value) => InitializeRequestSchema.safeParse(value).success;
function assertCompleteRequestPrompt(request) {
	if (request.params.ref.type !== "ref/prompt") throw new TypeError(`Expected CompleteRequestPrompt, but got ${request.params.ref.type}`);
}
function assertCompleteRequestResourceTemplate(request) {
	if (request.params.ref.type !== "ref/resource") throw new TypeError(`Expected CompleteRequestResourceTemplate, but got ${request.params.ref.type}`);
}
/** The fixed prefix every custom-parameter header carries. */
var MCP_PARAM_HEADER_PREFIX = "Mcp-Param-";
/** The schema-extension property name a tool's `inputSchema` carries. */
var X_MCP_HEADER_KEY = "x-mcp-header";
/**
* RFC 9110 §5.1 `token` syntax (`1*tchar`). Rejects empty, space, control
* characters (including CR/LF), and the listed delimiters.
*/
var RFC9110_TOKEN = /^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;
/**
* JSON Schema `type` values the spec admits on an `x-mcp-header` property:
* `integer`, `string` and `boolean`. `number` is explicitly not permitted
* (2026-07-28 Streamable HTTP, "Schema Extension"), so a tool that annotates a
* `number`-typed property is invalid (the server still checks its headers).
* Everything else (`object`, `array`, `null`, absent) is rejected too.
*/
var PERMITTED_X_MCP_HEADER_TYPES = /* @__PURE__ */ new Set([
	"string",
	"integer",
	"boolean"
]);
/**
* Scan a tool's JSON-serialized `inputSchema` for `x-mcp-header` declarations
* and validate every constraint the spec places on them. Returns either the
* collected declarations (possibly empty) or the first violated constraint
* (with the declarations too, when `number`-typed declarations are the only fault).
*
* The walk descends through `properties` at any depth (the spec's "any nesting
* depth" clause). The static-reachability MUST is enforced as a structural
* sweep: every position the chain MUST NOT pass through (`items`/
* `additionalProperties`, `oneOf`/`anyOf`/`allOf`/`not`, `if`/`then`/`else`,
* `$defs`, `$ref` targets within `$defs`) is visited too, and an
* `x-mcp-header` found anywhere on that path invalidates the schema — "an
* annotation anywhere else makes the tool definition invalid".
*/
function scanXMcpHeaderDeclarations(inputSchema) {
	const declarations = [];
	const seenLower = /* @__PURE__ */ new Map();
	let numberFault;
	const visit = (node, path, reachable) => {
		if (node === null || typeof node !== "object") return void 0;
		const schema = node;
		if (X_MCP_HEADER_KEY in schema) {
			if (!reachable || path.length === 0) return `${pathName(path)}: x-mcp-header is only permitted on properties statically reachable via a chain of 'properties' keys (not under items, additionalProperties, oneOf/anyOf/allOf/not, if/then/else, or $ref)`;
			const raw = schema[X_MCP_HEADER_KEY];
			if (typeof raw !== "string" || raw.length === 0) return `${pathName(path)}: x-mcp-header MUST be a non-empty string`;
			if (!RFC9110_TOKEN.test(raw)) return `${pathName(path)}: x-mcp-header '${raw}' is not a valid RFC 9110 token (no spaces, control characters or HTTP delimiters)`;
			const type = typeof schema.type === "string" ? schema.type : void 0;
			if (type === void 0 || !PERMITTED_X_MCP_HEADER_TYPES.has(type)) {
				const fault$1 = `${pathName(path)}: x-mcp-header is only permitted on primitive-typed properties (string, integer, boolean); got ${type ?? "<none>"}`;
				if (type !== "number") return fault$1;
				numberFault ??= fault$1;
			}
			const lower = raw.toLowerCase();
			const prior = seenLower.get(lower);
			if (prior !== void 0) return `x-mcp-header '${raw}' is not case-insensitively unique (also declared as '${prior}')`;
			seenLower.set(lower, raw);
			declarations.push({
				path,
				headerName: raw,
				type
			});
		}
		const properties = schema.properties;
		if (properties !== null && typeof properties === "object") for (const [key, child] of Object.entries(properties)) {
			const fault$1 = visit(child, [...path, key], reachable);
			if (fault$1 !== void 0) return fault$1;
		}
		for (const k of NON_REACHABLE_SUBSCHEMA_KEYWORDS) {
			const sub = schema[k];
			if (sub === void 0) continue;
			const branches = Array.isArray(sub) ? sub : sub !== null && typeof sub === "object" && OBJECT_VALUED_SUBSCHEMA_KEYWORDS.has(k) ? Object.values(sub) : [sub];
			for (const branch of branches) {
				const fault$1 = visit(branch, [...path, `<${k}>`], false);
				if (fault$1 !== void 0) return fault$1;
			}
		}
	};
	const fault = visit(inputSchema, [], true);
	if (fault !== void 0) return {
		valid: false,
		reason: numberFault ?? fault
	};
	return numberFault === void 0 ? {
		valid: true,
		declarations
	} : {
		valid: false,
		reason: numberFault,
		declarations
	};
}
/**
* JSON Schema keywords whose subschemas the SEP-2243 static-reachability
* constraint excludes from the `properties`-only chain. An `x-mcp-header`
* found under any of these invalidates the tool definition.
*/
var NON_REACHABLE_SUBSCHEMA_KEYWORDS = [
	"items",
	"prefixItems",
	"contains",
	"additionalProperties",
	"unevaluatedProperties",
	"unevaluatedItems",
	"propertyNames",
	"patternProperties",
	"dependentSchemas",
	"oneOf",
	"anyOf",
	"allOf",
	"not",
	"if",
	"then",
	"else",
	"$defs",
	"definitions"
];
/**
* Subschema-carrying keywords whose value is a `name → subschema` object
* (not a single subschema or array of subschemas). The visit branches over
* `Object.values()` for these.
*/
var OBJECT_VALUED_SUBSCHEMA_KEYWORDS = /* @__PURE__ */ new Set([
	"patternProperties",
	"dependentSchemas",
	"$defs",
	"definitions"
]);
function pathName(path) {
	return path.length === 0 ? "<root>" : path.join(".");
}
var BASE64_SENTINEL_PREFIX = "=?base64?";
var BASE64_SENTINEL_SUFFIX = "?=";
var BASE64_CANONICAL = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/;
var CANONICAL_DECIMAL = /^-?\d+(\.\d+)?$/;
/**
* Convert a primitive argument value to its string representation per the
* spec's type-conversion rules: strings pass through, integers and numbers
* become their decimal string, booleans become lowercase `'true'` / `'false'`.
* Non-finite numbers and integers outside the safe range are refused (the
* caller treats `undefined` as "do not emit a header for this value").
*/
function mcpParamPrimitiveToString(value) {
	if (typeof value === "string") return value;
	if (typeof value === "boolean") return value ? "true" : "false";
	if (typeof value === "number") {
		if (!Number.isFinite(value)) return void 0;
		if (Number.isInteger(value) && !Number.isSafeInteger(value)) return void 0;
		return String(value);
	}
}
function base64ToUtf8(b64) {
	const bin = atob(b64);
	const bytes = new Uint8Array(bin.length);
	for (let i = 0; i < bin.length; i++) bytes[i] = bin.codePointAt(i);
	return new TextDecoder("utf-8", { fatal: true }).decode(bytes);
}
/**
* Decode an `Mcp-Param-*` header value: when it carries the Base64 sentinel,
* the payload is decoded as UTF-8; otherwise the value is returned as-is.
* Returns `undefined` when the sentinel is present but the payload is not
* canonical Base64 (or not valid UTF-8) — the spec requires servers to reject
* such values.
*/
function decodeMcpParamValue(value) {
	if (!(value.startsWith(BASE64_SENTINEL_PREFIX) && value.endsWith(BASE64_SENTINEL_SUFFIX))) return value;
	const b64 = value.slice(9, value.length - 2);
	if (!BASE64_CANONICAL.test(b64)) return void 0;
	try {
		return base64ToUtf8(b64);
	} catch {
		return;
	}
}
function valueAtPath(root, path) {
	let node = root;
	for (const key of path) {
		if (node === null || typeof node !== "object") return void 0;
		node = node[key];
	}
	return node;
}
/**
* The header/body comparison the server performs at tool-resolution time.
*
* For each `x-mcp-header` declaration on the named tool: when the body
* `arguments` carries a value, the matching `Mcp-Param-{Name}` header MUST be
* present and decode to an equal value; when the body value is `null` or
* absent the server MUST NOT expect the header (a present header is ignored).
* A sentinel-carrying header whose payload is not canonical Base64 / valid
* UTF-8 is rejected as invalid characters.
*
* Integer- and number-typed declarations are compared numerically (the spec's SHOULD —
* `42.0` and `42` are equal); everything else is compared as decoded strings.
*
* Returns `undefined` when every check passes, or an
* {@linkcode InboundLadderRejection} carrying the same `-32020`
* (`HeaderMismatch`) shape the inbound classifier emits for the
* standard-header cross-checks — `400 Bad Request` with the disagreeing pair
* in `data.mismatch`.
*/
function validateMcpParamHeaders(declarations, args, headers) {
	for (const decl of declarations) {
		const headerKey = `${MCP_PARAM_HEADER_PREFIX}${decl.headerName}`;
		const headerValue = headers.get(headerKey);
		const bodyRaw = valueAtPath(args, decl.path);
		if (bodyRaw === void 0 || bodyRaw === null) continue;
		const bodyString = mcpParamPrimitiveToString(bodyRaw);
		if (bodyString === void 0) continue;
		if (headerValue === null) return paramHeaderMismatchRejection("param-header-missing", headerKey, `the body carries ${pathName(decl.path)}=${JSON.stringify(bodyRaw)} but the ${headerKey} header is absent`);
		const decoded = decodeMcpParamValue(headerValue);
		if (decoded === void 0) return paramHeaderMismatchRejection("param-header-invalid-encoding", headerKey, `the ${headerKey} header carries an invalid Base64 sentinel value`);
		if (!((decl.type === "integer" || decl.type === "number") && CANONICAL_DECIMAL.test(decoded) && typeof bodyRaw === "number" ? Number(decoded) === bodyRaw : decoded === bodyString)) return paramHeaderMismatchRejection("param-header-mismatch", headerKey, `the ${headerKey} header decodes to ${JSON.stringify(decoded)} but the body carries ${pathName(decl.path)}=${JSON.stringify(bodyRaw)}`);
	}
}
/**
* Build the `-32020` (`HeaderMismatch`) rejection for an `Mcp-Param-*`
* disagreement. Same shape as the inbound classifier's standard-header
* cross-check mismatch (HTTP `400`, `data.mismatch` naming the disagreeing
* pair, `settled: true`); only the rung differs because this check runs at the
* pre-dispatch step against a known tool's schema rather than at the edge.
*/
function paramHeaderMismatchRejection(cell, header, body) {
	return {
		kind: "reject",
		rung: "param-header-validation",
		cell,
		httpStatus: 400,
		code: HEADER_MISMATCH_ERROR_CODE,
		message: `Bad Request: the request headers and body disagree: ${body}`,
		data: { mismatch: {
			header,
			body
		} },
		settled: true
	};
}
/**
* Inbound HTTP request classification and the inbound validation ladder
* (protocol revision 2026-07-28).
*
* `classifyInboundRequest` is the body-primary era predicate for an HTTP
* entry that serves both protocol eras on one endpoint. It is evaluated
* exactly once, at the entry boundary, on the already-parsed request body:
*
* - `initialize` is a legacy-era request by definition (the modern era has no
*   `initialize` handshake) — unless it carries a valid envelope claim naming
*   a modern revision, in which case the claim wins and the request is
*   classified like any other enveloped request (the modern era then answers
*   it with method-not-found, exactly like every other method it does not
*   define).
* - A request whose `params._meta` carries the reserved protocol-version key
*   claims the per-request envelope mechanism and classifies into the era the
*   named revision belongs to (a malformed envelope behind a present claim is
*   a validation error, never a silent fall back to legacy handling).
* - A request without a claim is legacy-era traffic.
* - The `MCP-Protocol-Version` header is a cross-check only *for
*   classification*: it never upgrades or downgrades a body-derived
*   classification, and a disagreement between header and body is an explicit
*   ladder outcome. Its absence likewise never changes the era — but the spec
*   requires the header on every modern *request* POST, so a
*   modern-classified request that omits it is refused one rung later, by
*   {@linkcode validateStandardRequestHeaders}, not here. Notification POSTs
*   are exempt (see the next bullet), and that rung enforces presence on
*   requests only.
* - Notifications carry no envelope claim of their own under the current
*   spec, so for notification POSTs without a body claim the modern header is
*   determinative; the `Mcp-Method` header is validated against the body when
*   the message classifies modern and is never enforced on legacy traffic.
*   A notification that does carry a claim is treated body-primary like a
*   request, and a malformed claim is rejected the same way a request's
*   malformed claim is — never silently resolved against the header.
*   The notification-POST header cross-checks here are an SDK-defensive
*   posture, not a spec requirement: the spec leaves header rules for posted
*   notifications undefined (core client notifications do not occur over
*   Streamable HTTP); applying the request rules symmetrically is what an
*   ecosystem custom-notification POST expects, and the −32020 cells stay
*   passing for them.
* - `GET`/`DELETE` (and any other non-`POST` method) are body-less 2025-era
*   session operations: the modern era is `POST`-only, so they are routed to
*   legacy serving when it is configured and rejected otherwise.
* - Array (batch) bodies are classified element-wise: an array containing a
*   modern-claiming or invalid element is rejected, an all-legacy array is
*   legacy traffic unchanged, and a single-element array is still an array.
*
* The classifier returns plain values (it never throws and never touches a
* transport): a routing outcome (`legacy`/`modern`) or a ladder rejection
* carrying the JSON-RPC error to emit and the HTTP status to emit it with.
* Legacy routing outcomes deliberately carry NO `MessageClassification` —
* legacy and hand-wired traffic is never classified, which keeps its
* dispatch behavior byte-identical to today's.
*
* Error codes for the modern-path rejection cells follow the published
* conformance suite (and the spec text it asserts):
*
* - A header/body cross-check mismatch (the `MCP-Protocol-Version` header
*   disagreeing with the body, or the `Mcp-Method` header disagreeing with the
*   body method) is rejected with `-32020` (`HeaderMismatch`) on HTTP 400.
* - A request whose protocol-version header names a modern revision but whose
*   body carries no `_meta` envelope claim — including an envelope present but
*   missing the required protocol-version key — is rejected with `-32602`
*   (invalid params) naming the missing key(s), on HTTP 400.
*
* Should a future spec revision or conformance release change these
* assignments, the affected cells are re-derived against that release; the
* `settled` flag on {@linkcode InboundLadderRejection} stays available to mark
* a cell provisional again while such a change is in flight.
*/
/**
* The error code emitted for header/body cross-check mismatches: the
* `MCP-Protocol-Version` header disagreeing with the body's envelope claim (or
* with the body's classification), and the `Mcp-Method` header disagreeing
* with the body method.
*
* `-32020` is the draft schema's `HEADER_MISMATCH` constant (the SEP-2243
* `HeaderMismatch` code; the spec requires HTTP 400 for it), as also asserted
* by the published conformance suite for header-validation failures. It has no
* {@linkcode ProtocolErrorCode} member because it is not part of the 2025-era
* wire vocabulary; the validation ladder is its only emitter.
*/
var HEADER_MISMATCH_ERROR_CODE = -32020;
ProtocolErrorCode.InvalidRequest, ProtocolErrorCode.UnsupportedProtocolVersion, ProtocolErrorCode.InvalidParams, ProtocolErrorCode.MethodNotFound, ProtocolErrorCode.InvalidParams, ProtocolErrorCode.MissingRequiredClientCapability;
/**
* HTTP status for ladder-originated JSON-RPC error codes.
*
* Keyed on origin, not on the bare code: this table only applies to errors
* the ladder (or a pre-handler protocol gate) produced. Errors produced by
* request handlers — whatever their code — stay in-band on HTTP 200, and are
* never mapped to an HTTP status by this table; in particular `-32603` and
* domain-specific codes never become a blanket 500. The single exception is
* `MissingRequiredClientCapability` (-32021) — see
* {@linkcode httpStatusForErrorCode}.
*
* `-32602` (invalid params) deliberately has NO entry: the only invalid-params
* rejection that maps to HTTP 400 is the classifier's own envelope rung
* short-circuit, which carries its HTTP status directly. A dispatch- or
* handler-produced invalid-params error is always in-band.
*/
var LADDER_ERROR_HTTP_STATUS = {
	[ProtocolErrorCode.ParseError]: 400,
	[ProtocolErrorCode.InvalidRequest]: 400,
	[ProtocolErrorCode.MethodNotFound]: 404,
	[ProtocolErrorCode.UnsupportedProtocolVersion]: 400,
	[ProtocolErrorCode.MissingRequiredClientCapability]: 400,
	[HEADER_MISMATCH_ERROR_CODE]: 400
};
/**
* The HTTP status to answer a JSON-RPC error with, keyed on the error's
* origin. `in-band` errors (anything produced by a request handler) are
* HTTP 200 — the JSON-RPC error response is the payload, not an HTTP
* failure — with ONE exception: `MissingRequiredClientCapability` (-32021),
* whose 400 the spec mandates on the error itself with no origin condition,
* and which the SDK genuinely produces after dispatch (the `input_required`
* capability gate). A handler relaying some downstream peer's `-32020`/`-32022`
* is NOT that peer's spec error and stays in-band like every other handler
* code. `ladder` errors map through {@linkcode LADDER_ERROR_HTTP_STATUS}.
*
* The per-request transport intentionally does NOT delegate to this function:
* its `?? 400` ladder fallback is only correct for entry-gate codes known to
* the table, and would wrongly map dispatch-window errors outside it (a
* window `-32602` must stay in-band on 200). The transport indexes the table
* directly; keep the two in agreement when editing either.
*/
function httpStatusForErrorCode(code, origin) {
	if (origin === "in-band") return code === ProtocolErrorCode.MissingRequiredClientCapability ? 400 : 200;
	return LADDER_ERROR_HTTP_STATUS[code] ?? 400;
}
function rejection(rung, cell, httpStatus, error, settled) {
	return {
		kind: "reject",
		rung,
		cell,
		httpStatus,
		code: error.code,
		message: error.message,
		...error.data !== void 0 && { data: error.data },
		settled
	};
}
function crossCheckMismatch(cell, header, body, rung = "era-classification") {
	return rejection(rung, cell, 400, new ProtocolError(HEADER_MISMATCH_ERROR_CODE, `Bad Request: the request headers and body disagree: ${body}`, { mismatch: {
		header,
		body
	} }), true);
}
/**
* The methods whose body carries a `params.name` / `params.uri` /
* `params.taskId` value the `Mcp-Name` header must mirror, and which body
* field supplies it. The core rows come from SEP-2243 § Standard Request
* Headers (`Required For` column); the `tasks/*` rows come from SEP-2663's
* Streamable HTTP binding ("the client MUST set the `Mcp-Name` header to the
* value of `params.taskId`" for `tasks/get` / `tasks/update` /
* `tasks/cancel`, so intermediaries can route every request for a task to the
* instance holding its state). Shared by the client transport (header
* emission) and the server ladder (validation) so both sides derive from one
* table.
*/
var MCP_NAME_HEADER_SOURCE = {
	"tools/call": "name",
	"prompts/get": "name",
	"resources/read": "uri",
	"tasks/get": "taskId",
	"tasks/update": "taskId",
	"tasks/cancel": "taskId"
};
/**
* Resolve the `Mcp-Name` source for one request against
* {@linkcode MCP_NAME_HEADER_SOURCE}: which body field the header mirrors for
* `method`, and the string value that field carries in `params`.
*
* Returns `undefined` when `method` is off-table (no `Mcp-Name` is emitted or
* required). Otherwise `value` is the field's string value, or `undefined`
* when `params` is not a plain object or the field is absent / not a string —
* the client emits no header then, and the server leaves that body to the
* rungs further down the ladder.
*
* `method` is peer-supplied on the server and caller-supplied on the client,
* so the table lookup is `Object.hasOwn`-guarded against `Object.prototype`
* collisions (`constructor`, `toString`, …). Shared by the client transport
* (emission) and {@linkcode validateStandardRequestHeaders} (validation) so
* the extraction — not just the table — cannot drift between the two sides.
*/
function mcpNameSource(method, params) {
	const field = Object.hasOwn(MCP_NAME_HEADER_SOURCE, method) ? MCP_NAME_HEADER_SOURCE[method] : void 0;
	if (field === void 0) return;
	const raw = isPlainObject$2(params) ? params[field] : void 0;
	return {
		field,
		value: typeof raw === "string" ? raw : void 0
	};
}
/** Strip RFC 9110 optional whitespace (SP / HTAB) around a field value in linear time. */
function stripHttpOws(value) {
	let start = 0;
	while (start < value.length) {
		const code = value.codePointAt(start);
		if (code !== 9 && code !== 32) break;
		start += 1;
	}
	let end = value.length;
	while (end > start) {
		const code = value.codePointAt(end - 1);
		if (code !== 9 && code !== 32) break;
		end -= 1;
	}
	return start === 0 && end === value.length ? value : value.slice(start, end);
}
/**
* SEP-2243 standard-header server-side validation, evaluated by the HTTP
* entry on a modern-classified request immediately after
* {@linkcode classifyInboundRequest} returns a modern route.
*
* Returns the `-32020` (`HeaderMismatch`) ladder rejection (HTTP `400`,
* `standard-header-validation` rung — the same shape
* {@linkcode classifyInboundRequest} already emits on the edge
* `era-classification` rung for the `MCP-Protocol-Version` and
* `Mcp-Method` *mismatch* cells) when:
*
* - the required `MCP-Protocol-Version` header is absent (SEP-2243 requires it
*   on every modern *request* POST, and lists it first among the required
*   standard headers — so a request missing it *and* `Mcp-Method` is answered
*   by this cell);
* - the required `Mcp-Method` header is absent;
* - the required `Mcp-Name` header is absent on a `tools/call`,
*   `prompts/get`, `resources/read`, or (per SEP-2663's Streamable HTTP
*   binding) `tasks/get` / `tasks/update` / `tasks/cancel` request whose
*   body carries the `params.name` / `params.uri` / `params.taskId` value
*   the header mirrors;
* - the `Mcp-Name` header carries an invalid `=?base64?…?=` sentinel; or
* - the (decoded) `Mcp-Name` value disagrees with the body's
*   `params.name` / `params.uri` / `params.taskId`.
*
* Returns `undefined` (pass) for notifications (the spec table reads
* "All requests"), for methods that have no `Mcp-Name` source, and when the
* headers agree with the body. Never enforced on legacy traffic — the entry
* only calls this on a modern route.
*
* Kept separate from {@linkcode classifyInboundRequest} so that a body-only
* call to the classifier (no headers passed) keeps routing a modern request
* unchanged: the classifier remains a pure body-primary router, and this
* function is the presence/`Mcp-Name` half of the standard-header rung the
* entry layers on top. That separation is what lets the missing
* `MCP-Protocol-Version` cell live here without disturbing the body-primary
* rule — classification still resolves from the body (a proxy stripping the
* header must not change the era), and only this rung refuses to serve it.
*/
function validateStandardRequestHeaders(request, route) {
	if (route.messageKind !== "request") return;
	const method = route.message.method;
	if (request.protocolVersionHeader === void 0) {
		const claimed = route.classification.revision;
		return crossCheckMismatch("version-header-missing", "(missing)", claimed === void 0 ? "the body carries a modern per-request envelope but the required MCP-Protocol-Version header is absent" : `the body envelope names protocol version ${claimed} but the required MCP-Protocol-Version header is absent`, "standard-header-validation");
	}
	if (request.mcpMethodHeader === void 0) return crossCheckMismatch("method-header-missing", "(missing)", `the body names method ${method} but the required Mcp-Method header is absent`, "standard-header-validation");
	const source = mcpNameSource(method, route.message.params);
	if (source === void 0) return;
	const { field: sourceField, value: bodyValue } = source;
	if (request.mcpNameHeader === void 0) {
		if (bodyValue === void 0) return;
		return crossCheckMismatch("name-header-missing", "(missing)", `the body carries params.${sourceField}="${bodyValue}" but the required Mcp-Name header is absent`, "standard-header-validation");
	}
	const normalizedNameHeader = stripHttpOws(request.mcpNameHeader);
	const decoded = decodeMcpParamValue(normalizedNameHeader);
	if (decoded === void 0) return crossCheckMismatch("name-header-invalid-encoding", normalizedNameHeader, "the Mcp-Name header carries an invalid Base64 sentinel value", "standard-header-validation");
	if (bodyValue !== void 0 && decoded !== bodyValue) return crossCheckMismatch("name-header-mismatch", normalizedNameHeader, `the body carries params.${sourceField}="${bodyValue}" but the Mcp-Name header names "${decoded}"`, "standard-header-validation");
}
function isPlainObject$2(value) {
	return value !== null && typeof value === "object" && !Array.isArray(value);
}
function classificationForClaim(claimedVersion) {
	if (claimedVersion === void 0) return { era: "modern" };
	return {
		era: isModernProtocolVersion(claimedVersion) ? "modern" : "legacy",
		revision: claimedVersion
	};
}
/**
* Whether a request's params carry a per-request envelope claim that is both
* well-formed and names a modern protocol revision.
*
* Used by the `initialize` precedence rule: only such a claim overrides the
* `initialize` ⇒ legacy-handshake classification — a request carrying a valid
* modern envelope is a modern request regardless of its method name, and the
* modern era then answers `initialize` exactly like any other method it does
* not define (method-not-found). A malformed claim, or one naming a pre-2026
* revision, keeps the legacy-handshake routing unchanged.
*
* Exported on the core internal barrel for the stdio serving entry, which
* applies the same precedence rule to a connection's opening message; not
* public API.
*/
function carriesValidModernEnvelopeClaim(params) {
	if (!hasEnvelopeClaim(params)) return false;
	const claimedVersion = envelopeClaimVersion(params);
	if (claimedVersion === void 0 || !isModernProtocolVersion(claimedVersion)) return false;
	const meta = requestMetaOf(params);
	return meta !== void 0 && validateEnvelopeMeta(meta).length === 0;
}
function classifyBatch(body) {
	if (body.length === 0) return rejection("jsonrpc-shape", "empty-batch", 400, new ProtocolError(ProtocolErrorCode.InvalidRequest, "Bad Request: empty JSON-RPC batch"), true);
	for (const element of body) {
		if (hasEnvelopeClaim(isPlainObject$2(element) ? element["params"] : void 0)) return rejection("jsonrpc-shape", "batch-with-modern-element", 400, new ProtocolError(ProtocolErrorCode.InvalidRequest, "Bad Request: JSON-RPC batches may not contain requests for protocol revision 2026-07-28 or later"), true);
		if (!(isJSONRPCRequest(element) || isJSONRPCNotification(element) || isJSONRPCResultResponse(element) || isJSONRPCErrorResponse(element))) return rejection("jsonrpc-shape", "batch-with-invalid-element", 400, new ProtocolError(ProtocolErrorCode.InvalidRequest, "Bad Request: JSON-RPC batch contains an invalid message"), true);
	}
	return {
		kind: "legacy",
		reason: "batch"
	};
}
function classifyRequestBody(request, body) {
	const params = body.params;
	const method = body.method;
	const headerVersion = request.protocolVersionHeader;
	const headerNamesModern = headerVersion !== void 0 && isModernProtocolVersion(headerVersion);
	if (method === "initialize" && !carriesValidModernEnvelopeClaim(params)) {
		if (headerNamesModern) return crossCheckMismatch("initialize-with-modern-header", headerVersion, "an initialize request (legacy handshake) was sent with a modern MCP-Protocol-Version header");
		const requestedVersion = isPlainObject$2(params) && typeof params["protocolVersion"] === "string" ? params["protocolVersion"] : void 0;
		return {
			kind: "legacy",
			reason: "initialize",
			...requestedVersion !== void 0 && { requestedVersion }
		};
	}
	if (hasEnvelopeClaim(params)) {
		const meta = requestMetaOf(params);
		const firstIssue = (meta === void 0 ? [] : validateEnvelopeMeta(meta))[0];
		if (firstIssue !== void 0) return rejection("envelope", "envelope-invalid", 400, new ProtocolError(ProtocolErrorCode.InvalidParams, `Invalid _meta envelope for protocol revision 2026-07-28: ${firstIssue.key}: ${firstIssue.problem}`, { envelope: firstIssue }), true);
		const claimedVersion = envelopeClaimVersion(params);
		if (headerVersion !== void 0 && claimedVersion !== void 0 && headerVersion !== claimedVersion) return crossCheckMismatch("header-body-version-mismatch", headerVersion, `the body envelope names protocol version ${claimedVersion} but the MCP-Protocol-Version header names ${headerVersion}`);
		if (request.mcpMethodHeader !== void 0 && request.mcpMethodHeader !== method) return crossCheckMismatch("method-header-mismatch", request.mcpMethodHeader, `the body names method ${method} but the Mcp-Method header names ${request.mcpMethodHeader}`);
		return {
			kind: "modern",
			messageKind: "request",
			message: body,
			classification: classificationForClaim(claimedVersion)
		};
	}
	if (headerNamesModern) {
		const meta = requestMetaOf(params);
		const missingFromEnvelope = validateEnvelopeMeta(meta ?? {}).filter((issue) => issue.problem === "missing").map((issue) => issue.key);
		const missing = meta === void 0 ? ["_meta"] : missingFromEnvelope.length > 0 ? missingFromEnvelope : [PROTOCOL_VERSION_META_KEY];
		return rejection("envelope", "modern-header-without-claim", 400, new ProtocolError(ProtocolErrorCode.InvalidParams, `Invalid params: the MCP-Protocol-Version header names protocol revision ${headerVersion}, but the request is missing the required per-request envelope key(s): ${missing.join(", ")}`, { envelope: { missing } }), true);
	}
	return {
		kind: "legacy",
		reason: "no-claim",
		...headerVersion !== void 0 && { requestedVersion: headerVersion }
	};
}
function classifyNotificationBody(request, body) {
	const params = body.params;
	const method = body.method;
	const headerVersion = request.protocolVersionHeader;
	const headerNamesModern = headerVersion !== void 0 && isModernProtocolVersion(headerVersion);
	if (hasEnvelopeClaim(params)) {
		const claimedVersion = envelopeClaimVersion(params);
		if (claimedVersion === void 0) {
			const meta = requestMetaOf(params);
			const claimIssue = (meta === void 0 ? [] : validateEnvelopeMeta(meta)).find((issue) => issue.key === "io.modelcontextprotocol/protocolVersion") ?? {
				key: "io.modelcontextprotocol/protocolVersion",
				problem: "expected a protocol version string"
			};
			return rejection("envelope", "notification-envelope-invalid", 400, new ProtocolError(ProtocolErrorCode.InvalidParams, `Invalid _meta envelope for protocol revision 2026-07-28: ${claimIssue.key}: ${claimIssue.problem}`, { envelope: claimIssue }), true);
		}
		if (headerVersion !== void 0 && headerVersion !== claimedVersion) return crossCheckMismatch("notification-header-body-version-mismatch", headerVersion, `the notification envelope names protocol version ${claimedVersion} but the MCP-Protocol-Version header names ${headerVersion}`);
		const classification = classificationForClaim(claimedVersion);
		if (classification.era === "modern" && request.mcpMethodHeader !== void 0 && request.mcpMethodHeader !== method) return crossCheckMismatch("notification-method-header-mismatch", request.mcpMethodHeader, `the notification body names method ${method} but the Mcp-Method header names ${request.mcpMethodHeader}`);
		return {
			kind: "modern",
			messageKind: "notification",
			message: body,
			classification
		};
	}
	if (headerNamesModern) {
		if (request.mcpMethodHeader !== void 0 && request.mcpMethodHeader !== method) return crossCheckMismatch("notification-method-header-mismatch", request.mcpMethodHeader, `the notification body names method ${method} but the Mcp-Method header names ${request.mcpMethodHeader}`);
		return {
			kind: "modern",
			messageKind: "notification",
			message: body,
			classification: {
				era: "modern",
				revision: headerVersion
			}
		};
	}
	return {
		kind: "legacy",
		reason: "notification",
		...headerVersion !== void 0 && { requestedVersion: headerVersion }
	};
}
/**
* Classifies one inbound HTTP request for dual-era serving.
*
* The body-primary predicate, evaluated once at the entry boundary: see the
* module documentation for the rules. Returns a routing outcome (`legacy` or
* `modern`) or a ladder rejection; it never throws.
*/
function classifyInboundRequest(request) {
	request = {
		...request,
		...request.protocolVersionHeader !== void 0 && { protocolVersionHeader: stripHttpOws(request.protocolVersionHeader) },
		...request.mcpMethodHeader !== void 0 && { mcpMethodHeader: stripHttpOws(request.mcpMethodHeader) },
		...request.mcpNameHeader !== void 0 && { mcpNameHeader: stripHttpOws(request.mcpNameHeader) }
	};
	if (request.httpMethod.toUpperCase() !== "POST") return {
		kind: "legacy",
		reason: "http-method"
	};
	const body = request.body;
	if (Array.isArray(body)) return classifyBatch(body);
	if (isJSONRPCResultResponse(body) || isJSONRPCErrorResponse(body)) return {
		kind: "legacy",
		reason: "response"
	};
	if (isPlainObject$2(body) && isJSONRPCRequest(body)) return classifyRequestBody(request, body);
	if (isPlainObject$2(body) && isJSONRPCNotification(body)) return classifyNotificationBody(request, body);
	return rejection("jsonrpc-shape", "invalid-json-rpc-body", 400, new ProtocolError(ProtocolErrorCode.InvalidRequest, "Bad Request: the request body is not a valid JSON-RPC message"), true);
}
/**
* The rejection a modern-only endpoint (no legacy serving configured)
* answers a legacy-classified request with.
*
* - Envelope-less requests (including `initialize`) are answered with the
*   unsupported-protocol-version error carrying the endpoint's supported
*   versions and echoing the version the request named (when it named one —
*   `requested` is omitted rather than fabricated when the request named no
*   version at all), so a legacy client can discover what the endpoint serves
*   from the error alone.
* - Posted responses and batch arrays are invalid requests on the modern era.
* - Non-`POST` methods are not allowed.
* - Legacy-classified notifications return `undefined`: the caller answers
*   202 with no body and does not dispatch the notification (accept-and-drop).
*/
function modernOnlyStrictRejection(route, supportedVersions) {
	switch (route.reason) {
		case "http-method": return rejection("http-method", "modern-only-method-not-allowed", 405, new ProtocolError(-32e3, "Method not allowed."), true);
		case "batch": return rejection("jsonrpc-shape", "modern-only-batch-not-supported", 400, new ProtocolError(ProtocolErrorCode.InvalidRequest, "Bad Request: JSON-RPC batches are not supported by this endpoint"), true);
		case "response": return rejection("jsonrpc-shape", "modern-only-response-post", 400, new ProtocolError(ProtocolErrorCode.InvalidRequest, "Bad Request: JSON-RPC responses cannot be posted to this endpoint"), true);
		case "notification": return;
		case "initialize":
		case "no-claim": {
			const requested = route.requestedVersion;
			return rejection("era-classification", "modern-only-missing-envelope", 400, requested === void 0 ? new ProtocolError(ProtocolErrorCode.UnsupportedProtocolVersion, "Unsupported protocol version: the request did not name a protocol version", { supported: [...supportedVersions] }) : new UnsupportedProtocolVersionError({
				supported: [...supportedVersions],
				requested
			}), true);
		}
	}
}
/**
* Internal Zod schema utilities for protocol handling.
* These are used internally by the SDK for protocol message validation.
*/
/**
* Parses data against a Zod schema (synchronous).
* Returns a discriminated union with success/error.
*/
function parseSchema(schema, data) {
	return safeParse(schema, data);
}
/**
* Union of the declared shape keys across several Zod object schemas.
*/
function shapeKeys(schemas) {
	return new Set(schemas.flatMap((schema) => Object.keys(schema.shape)));
}
/**
* Standard Schema utilities for user-provided schemas.
* Supports Zod v4, Valibot, ArkType, and other Standard Schema implementations.
* @see https://standardschema.dev
*/
function isStandardSchema(schema) {
	if (schema == null) return false;
	const schemaType = typeof schema;
	if (schemaType !== "object" && schemaType !== "function") return false;
	if (!("~standard" in schema)) return false;
	return typeof schema["~standard"]?.validate === "function";
}
var warnedZodFallback = false;
/** JSON Schema draft targeted by every conversion; shared so pattern references above stay in lockstep. */
var JSON_SCHEMA_CONVERSION_TARGET = "draft-2020-12";
/**
* Converts a StandardSchema to JSON Schema for use as an MCP tool/prompt schema.
*
* MCP requires `type: "object"` at the root of tool `inputSchema` and prompt
* argument schemas; `outputSchema` may have any JSON Schema root (SEP-2106).
* Zod's discriminated unions emit `{oneOf: [...]}` without a top-level `type`,
* so for `io: 'input'` this function defaults `type` to `"object"` when absent
* and throws on an explicit non-object `type` (e.g. `z.string()`). For
* `io: 'output'` a non-object root is returned as-is; the `"object"` default is
* applied only when the root is provably object-shaped.
*/
function standardSchemaToJsonSchema(schema, io = "input") {
	const std = schema["~standard"];
	let result;
	if (std.jsonSchema) result = std.jsonSchema[io]({ target: JSON_SCHEMA_CONVERSION_TARGET });
	else if (std.vendor === "zod") {
		if (!("_zod" in schema)) throw new Error("Schema appears to be from zod 3, which the SDK cannot convert to JSON Schema. Upgrade to zod >=4.2.0, or wrap your JSON Schema with fromJsonSchema().");
		if (!warnedZodFallback) {
			warnedZodFallback = true;
			console.warn("[mcp-sdk] Your zod version does not implement `~standard.jsonSchema` (added in zod 4.2.0). Falling back to z.toJSONSchema(). Upgrade to zod >=4.2.0 to silence this warning.");
		}
		result = toJSONSchema(schema, {
			target: JSON_SCHEMA_CONVERSION_TARGET,
			io
		});
	} else throw new Error(`Schema library "${std.vendor}" does not implement StandardJSONSchemaV1 (\`~standard.jsonSchema\`). Upgrade to a version that does, or wrap your JSON Schema with fromJsonSchema().`);
	if (io === "output") {
		if (result.type !== void 0) return result;
		return isProvablyObjectShapedRoot(result) ? {
			type: "object",
			...result
		} : result;
	}
	if (result.type !== void 0 && result.type !== "object") throw new Error(`MCP tool and prompt schemas must describe objects (got type: ${JSON.stringify(result.type)}). Wrap your schema in z.object({...}) or equivalent.`);
	return {
		type: "object",
		...result
	};
}
var LOCAL_DEFINITION_REF = /^#\/(\$defs|definitions)\/([^/~%]+)$/;
/**
* A typeless JSON Schema root is "provably object-shaped" when either it carries object keywords
* directly (`properties`/`patternProperties`/`additionalProperties`/`required`), or it is a
* composition (`oneOf`/`anyOf`/`allOf`) whose every member is itself `type:'object'` or recursively
* provably object-shaped (e.g. a nested `discriminatedUnion`). A `$ref` is followed one hop, to an
* entry of the root's `$defs`/`definitions` that is itself `type:'object'`. Used to
* decide whether stamping `type:'object'` is safe (redundant-but-valid) versus self-contradictory.
*/
function isProvablyObjectShapedRoot(schema, root = schema) {
	if ("properties" in schema || "patternProperties" in schema || "additionalProperties" in schema || "required" in schema) return true;
	const ref = typeof schema.$ref === "string" && LOCAL_DEFINITION_REF.exec(schema.$ref);
	if (ref && root[ref[1]]?.[ref[2]]?.type === "object") return true;
	for (const key of [
		"oneOf",
		"anyOf",
		"allOf"
	]) {
		const members = schema[key];
		if (Array.isArray(members) && members.length > 0) return members.every((m) => m !== null && typeof m === "object" && (m.type === "object" || isProvablyObjectShapedRoot(m, "$id" in m ? {} : root)));
	}
	return false;
}
function formatIssue(issue) {
	if (!issue.path?.length) return issue.message;
	return `${issue.path.map((p) => String(typeof p === "object" ? p.key : p)).join(".")}: ${issue.message}`;
}
async function validateStandardSchema(schema, data) {
	const result = await schema["~standard"].validate(data);
	if (result.issues && result.issues.length > 0) return {
		success: false,
		error: result.issues.map((i) => formatIssue(i)).join(", ")
	};
	return {
		success: true,
		data: result.value
	};
}
function zodEmittedPattern(schema) {
	const jsonSchema = toJSONSchema(schema, {
		target: JSON_SCHEMA_CONVERSION_TARGET,
		io: "input"
	});
	return typeof jsonSchema.pattern === "string" ? jsonSchema.pattern : void 0;
}
var DATETIME_FRACTION_DIGITS = /\\\.\\d\{(\d+)\}/;
function datetimeReferenceSchemas(pattern) {
	const fractionDigits = DATETIME_FRACTION_DIGITS.exec(pattern);
	const precisions = [
		void 0,
		-1,
		0
	];
	if (fractionDigits) precisions.push(Number(fractionDigits[1]));
	return [false, true].flatMap((local) => [false, true].flatMap((offset) => precisions.map((precision) => datetime({
		local,
		offset,
		precision
	}))));
}
function referencePatternsForFormat(format, pattern) {
	let referenceSchemas;
	switch (format) {
		case "email":
			referenceSchemas = [email()];
			break;
		case "uri":
			referenceSchemas = [url()];
			break;
		case "date":
			referenceSchemas = [date$1()];
			break;
		case "date-time": referenceSchemas = datetimeReferenceSchemas(pattern);
	}
	return new Set(referenceSchemas.map((schema) => zodEmittedPattern(schema)).filter((emitted) => emitted !== void 0));
}
/** Whether `pattern` is the library's own realization of `format` (droppable) rather than a user customization. */
function isLibraryFormatPattern(format, pattern, vendor) {
	if (vendor !== "zod") return true;
	return referencePatternsForFormat(format, pattern).has(pattern);
}
function promptArgumentsFromStandardSchema(schema) {
	const jsonSchema = standardSchemaToJsonSchema(schema, "input");
	const properties = jsonSchema.properties || {};
	const required = jsonSchema.required || [];
	return Object.entries(properties).map(([name, prop]) => ({
		name,
		description: prop?.description,
		required: required.includes(name)
	}));
}
function isJsonObject(value) {
	return typeof value === "object" && value !== null && !Array.isArray(value);
}
function convertStandardElicitationSchema(schema) {
	try {
		return standardSchemaToJsonSchema(schema, "input");
	} catch (error) {
		const detail = error instanceof Error ? error.message : String(error);
		throw new ProtocolError(ProtocolErrorCode.InvalidParams, `Elicitation requestedSchema must describe an object with flat primitive properties: ${detail}`);
	}
}
var ANNOTATION_ONLY_JSON_SCHEMA_KEYWORDS = /* @__PURE__ */ new Set([
	"$comment",
	"deprecated",
	"description",
	"examples",
	"readOnly",
	"title",
	"writeOnly"
]);
function isAnnotationOnlyJsonSchemaKeyword(key) {
	return ANNOTATION_ONLY_JSON_SCHEMA_KEYWORDS.has(key) || key.startsWith("x-");
}
var ROOT_KEYS = /* @__PURE__ */ new Set(["$schema", ...Object.keys(ElicitRequestFormParamsSchema.shape.requestedSchema.shape)]);
var PROPERTY_KEYS_BY_TYPE = {
	string: shapeKeys([
		StringSchemaSchema,
		UntitledSingleSelectEnumSchemaSchema,
		TitledSingleSelectEnumSchemaSchema,
		LegacyTitledEnumSchemaSchema
	]),
	number: shapeKeys([NumberSchemaSchema]),
	integer: shapeKeys([NumberSchemaSchema]),
	boolean: shapeKeys([BooleanSchemaSchema]),
	array: shapeKeys([UntitledMultiSelectEnumSchemaSchema, TitledMultiSelectEnumSchemaSchema])
};
var SUPPORTED_STRING_FORMATS = new Set(StringSchemaSchema.shape.format.unwrap().options);
/** Walks one property node: keeps grammar keys, drops the library format pattern, rejects unknown constraints. */
function walkProperty(node, path, vendor, unsupported) {
	if (!isJsonObject(node)) return node;
	const allowedKeys = typeof node.type === "string" && Object.hasOwn(PROPERTY_KEYS_BY_TYPE, node.type) ? PROPERTY_KEYS_BY_TYPE[node.type] : void 0;
	if (allowedKeys === void 0) return node;
	const pruned = {};
	for (const [key, value] of Object.entries(node)) if (allowedKeys.has(key) || isAnnotationOnlyJsonSchemaKeyword(key)) pruned[key] = value;
	else if (key === "pattern" && node.type === "string" && typeof node.format === "string") {
		if (!SUPPORTED_STRING_FORMATS.has(node.format)) pruned[key] = value;
		else if (typeof value !== "string" || !isLibraryFormatPattern(node.format, value, vendor)) unsupported.push(`${path}.${key}`);
	} else unsupported.push(`${path}.${key}`);
	return pruned;
}
/** Walks the schema root: keeps the spec root keys, drops annotations, rejects the rest. */
function walkRequestedSchema(converted, vendor) {
	const pruned = {};
	const unsupported = [];
	for (const [key, value] of Object.entries(converted)) if (key === "properties" && isJsonObject(value)) pruned[key] = Object.fromEntries(Object.entries(value).map(([name, node]) => [name, walkProperty(node, `properties.${name}`, vendor, unsupported)]));
	else if (ROOT_KEYS.has(key)) pruned[key] = value;
	else if (!isAnnotationOnlyJsonSchemaKeyword(key)) unsupported.push(key);
	if (unsupported.length > 0) throw new ProtocolError(ProtocolErrorCode.InvalidParams, `Elicitation requestedSchema contains unsupported JSON Schema constraint(s) after Standard Schema conversion: ${unsupported.join(", ")}`);
	return pruned;
}
/** Names the properties that fail value validation, instead of surfacing a raw union dump. */
function describeUnsupportedProperties(pruned, fallback) {
	if (!isJsonObject(pruned.properties)) return fallback;
	const offenders = Object.entries(pruned.properties).filter(([, node]) => !parseSchema(PrimitiveSchemaDefinitionSchema, node).success).map(([name]) => `properties.${name}`);
	return offenders.length > 0 ? offenders.join(", ") : fallback;
}
function findDroppedConstraintPaths(original, parsed, path = "") {
	if (Array.isArray(original) && Array.isArray(parsed)) return original.flatMap((item, index) => findDroppedConstraintPaths(item, parsed[index], `${path}[${index}]`));
	if (!isJsonObject(original) || !isJsonObject(parsed)) return [];
	return Object.entries(original).flatMap(([key, value]) => {
		const childPath = path ? `${path}.${key}` : key;
		if (!Object.prototype.hasOwnProperty.call(parsed, key)) return isAnnotationOnlyJsonSchemaKeyword(key) ? [] : [childPath];
		return findDroppedConstraintPaths(value, parsed[key], childPath);
	});
}
/** Converts an authoring-friendly elicitation input into its wire-ready form. */
function normalizeElicitInputParams(input) {
	if (!isStandardSchema(input.requestedSchema)) return {
		...input,
		mode: "form",
		requestedSchema: input.requestedSchema
	};
	const vendor = input.requestedSchema["~standard"].vendor;
	const pruned = walkRequestedSchema(convertStandardElicitationSchema(input.requestedSchema), vendor);
	const parsed = parseSchema(ElicitRequestFormParamsSchema.shape.requestedSchema, pruned);
	if (!parsed.success) throw new ProtocolError(ProtocolErrorCode.InvalidParams, `Elicitation requestedSchema only supports flat primitive properties (string, number, integer, boolean, and string enums): ${describeUnsupportedProperties(pruned, parsed.error.message)}`);
	const droppedConstraints = findDroppedConstraintPaths(pruned, parsed.data);
	if (droppedConstraints.length > 0) throw new ProtocolError(ProtocolErrorCode.InvalidParams, `Elicitation requestedSchema contains unsupported JSON Schema constraint(s) after Standard Schema conversion: ${droppedConstraints.join(", ")}`);
	const danglingRequired = (parsed.data.required ?? []).filter((key) => !Object.prototype.hasOwnProperty.call(parsed.data.properties, key));
	if (danglingRequired.length > 0) throw new ProtocolError(ProtocolErrorCode.InvalidParams, `Elicitation requestedSchema lists required properties that are not defined in properties: ${danglingRequired.join(", ")}`);
	return {
		...input,
		mode: "form",
		requestedSchema: parsed.data
	};
}
/**
* Authoring helpers for multi-round-trip requests (protocol revision
* 2026-07-28).
*
* A handler for one of the multi-round-trip methods (`tools/call`,
* `prompts/get`, `resources/read`) requests additional client input by
* returning an {@linkcode InputRequiredResult} instead of a final result. The
* helpers here build that return value and its embedded requests as NEUTRAL
* values; only the 2026-07-28 wire codec maps them to/from the wire. The
* 2025-era codec has no input-required vocabulary — on a 2025-era request the
* server's legacy shim (on by default) fulfils the embedded requests as real
* server→client requests and re-enters the handler, so the same return shape
* serves both eras; `ServerOptions.inputRequired.legacyShim: false` restores
* the pre-shim loud failure.
*
* There is no nominal brand: `resultType: 'input_required'` is the
* discriminator, and hand-built result literals are equally legal — the
* server seam re-checks the at-least-one rule for them.
*/
function buildInputRequired(spec) {
	const hasInputRequests = spec.inputRequests !== void 0 && Object.keys(spec.inputRequests).length > 0;
	const hasRequestState = typeof spec.requestState === "string";
	if (!hasInputRequests && !hasRequestState) throw new TypeError("inputRequired() requires at least one of inputRequests (with at least one entry) or requestState (spec: every InputRequiredResult MUST include at least one of the two)");
	return {
		resultType: "input_required",
		...spec.inputRequests !== void 0 && { inputRequests: spec.inputRequests },
		...spec.requestState !== void 0 && { requestState: spec.requestState }
	};
}
Object.assign(buildInputRequired, {
	elicit(params) {
		try {
			return {
				method: "elicitation/create",
				params: normalizeElicitInputParams(params)
			};
		} catch (error) {
			throw error instanceof ProtocolError ? new TypeError(error.message, { cause: error }) : error;
		}
	},
	elicitUrl(params) {
		return {
			method: "elicitation/create",
			params: {
				...params,
				mode: "url"
			}
		};
	},
	createMessage(params) {
		return {
			method: "sampling/createMessage",
			params
		};
	},
	listRoots() {
		return { method: "roots/list" };
	}
});
/**
* The message both multi-round-trip loops emit when the round cap is
* exhausted — the client driver as a typed error, the server-side legacy
* shim as its per-family failure. One formatter so the texts cannot drift
* (hosts and models read the tool-result copy verbatim).
*/
function inputRequiredRoundsExceededMessage(method, maxRounds) {
	return `Multi-round-trip request '${method}' still required input after ${maxRounds} rounds (inputRequired.maxRounds)`;
}
/**
* Abortable delay: resolves after `ms`, or rejects with the signal's reason
* (wrapped in an `SdkError` when it isn't already one) if the signal aborts
* first. Aborting after resolution is a no-op. Shared with the server-side
* legacy shim (the pacing semantics must match per era).
*/
function sleep(ms, signal) {
	return new Promise((resolve, reject) => {
		if (signal?.aborted) {
			reject(signal.reason instanceof SdkError ? signal.reason : new SdkError(SdkErrorCode.RequestTimeout, String(signal.reason)));
			return;
		}
		const timer = setTimeout(() => {
			signal?.removeEventListener("abort", onAbort);
			resolve();
		}, ms);
		const onAbort = () => {
			clearTimeout(timer);
			reject(signal?.reason instanceof SdkError ? signal.reason : new SdkError(SdkErrorCode.RequestTimeout, String(signal?.reason)));
		};
		signal?.addEventListener("abort", onAbort, { once: true });
	});
}
/**
* A per-round abort linked to the caller's signal: the embedded sibling
* dispatches share it, so the first failure (or a caller abort) cancels the
* others instead of leaving them running. Shared with the server-side legacy
* shim (the abort-linkage semantics must match per era).
*/
function linkedRoundAbort(outer) {
	const controller = new AbortController();
	const onOuterAbort = () => controller.abort(outer?.reason);
	outer?.addEventListener("abort", onOuterAbort, { once: true });
	if (outer?.aborted) controller.abort(outer.reason);
	return {
		signal: controller.signal,
		abort: (reason) => controller.abort(reason),
		dispose: () => outer?.removeEventListener("abort", onOuterAbort)
	};
}
/**
* Explicit allowlist of protocol Zod schemas that correspond to a public spec type in `types.ts`.
*
* This intentionally excludes internal helper schemas exported from `schemas.ts` that have no
* matching public type (e.g. `ListChangedOptionsBaseSchema`, `BaseRequestParamsSchema`,
* `NotificationsParamsSchema`, `ClientTasksCapabilitySchema`, `ServerTasksCapabilitySchema`).
* Keeping the list explicit means new public spec types must be added here deliberately, and
* internals never leak into `SpecTypeName`.
*
* `ResourceTemplateSchema` is included; its public type is exported as `ResourceTemplateType`
* (the bare name collides with the server package's `ResourceTemplate` class), so
* `SpecTypes['ResourceTemplate']` is structurally equal to `ResourceTemplateType` rather than to
* a type literally named `ResourceTemplate`.
*/
var SPEC_SCHEMA_KEYS = [
	"AnnotationsSchema",
	"AudioContentSchema",
	"BaseMetadataSchema",
	"BlobResourceContentsSchema",
	"BooleanSchemaSchema",
	"CallToolRequestSchema",
	"CallToolRequestParamsSchema",
	"CallToolResultSchema",
	"CancelledNotificationSchema",
	"CancelledNotificationParamsSchema",
	"CancelTaskRequestSchema",
	"CancelTaskResultSchema",
	"ClientCapabilitiesSchema",
	"ClientNotificationSchema",
	"ClientRequestSchema",
	"ClientResultSchema",
	"CompatibilityCallToolResultSchema",
	"CompleteRequestSchema",
	"CompleteRequestParamsSchema",
	"CompleteResultSchema",
	"ContentBlockSchema",
	"CreateMessageRequestSchema",
	"CreateMessageRequestParamsSchema",
	"CreateMessageResultSchema",
	"CreateMessageResultWithToolsSchema",
	"CreateTaskResultSchema",
	"CursorSchema",
	"DiscoverRequestSchema",
	"DiscoverResultSchema",
	"ElicitationCompleteNotificationSchema",
	"ElicitationCompleteNotificationParamsSchema",
	"ElicitRequestSchema",
	"ElicitRequestFormParamsSchema",
	"ElicitRequestParamsSchema",
	"ElicitRequestURLParamsSchema",
	"ElicitResultSchema",
	"EmbeddedResourceSchema",
	"EmptyResultSchema",
	"EnumSchemaSchema",
	"GetPromptRequestSchema",
	"GetPromptRequestParamsSchema",
	"GetPromptResultSchema",
	"GetTaskPayloadRequestSchema",
	"GetTaskPayloadResultSchema",
	"GetTaskRequestSchema",
	"GetTaskResultSchema",
	"IconSchema",
	"IconsSchema",
	"ImageContentSchema",
	"ImplementationSchema",
	"InitializedNotificationSchema",
	"InitializeRequestSchema",
	"InitializeRequestParamsSchema",
	"InitializeResultSchema",
	"JSONArraySchema",
	"JSONObjectSchema",
	"JSONRPCErrorResponseSchema",
	"JSONRPCMessageSchema",
	"JSONRPCNotificationSchema",
	"JSONRPCRequestSchema",
	"JSONRPCResponseSchema",
	"JSONRPCResultResponseSchema",
	"JSONValueSchema",
	"LegacyTitledEnumSchemaSchema",
	"ListPromptsRequestSchema",
	"ListPromptsResultSchema",
	"ListResourcesRequestSchema",
	"ListResourcesResultSchema",
	"ListResourceTemplatesRequestSchema",
	"ListResourceTemplatesResultSchema",
	"ListRootsRequestSchema",
	"ListRootsResultSchema",
	"ListTasksRequestSchema",
	"ListTasksResultSchema",
	"ListToolsRequestSchema",
	"ListToolsResultSchema",
	"LoggingLevelSchema",
	"LoggingMessageNotificationSchema",
	"LoggingMessageNotificationParamsSchema",
	"ModelHintSchema",
	"ModelPreferencesSchema",
	"MultiSelectEnumSchemaSchema",
	"NotificationSchema",
	"NumberSchemaSchema",
	"PaginatedRequestSchema",
	"PaginatedRequestParamsSchema",
	"PaginatedResultSchema",
	"PingRequestSchema",
	"PrimitiveSchemaDefinitionSchema",
	"ProgressSchema",
	"ProgressNotificationSchema",
	"ProgressNotificationParamsSchema",
	"ProgressTokenSchema",
	"PromptSchema",
	"PromptArgumentSchema",
	"PromptListChangedNotificationSchema",
	"PromptMessageSchema",
	"PromptReferenceSchema",
	"ReadResourceRequestSchema",
	"ReadResourceRequestParamsSchema",
	"ReadResourceResultSchema",
	"RelatedTaskMetadataSchema",
	"RequestSchema",
	"RequestIdSchema",
	"RequestMetaSchema",
	"ResourceSchema",
	"ResourceContentsSchema",
	"ResourceLinkSchema",
	"ResourceListChangedNotificationSchema",
	"ResourceRequestParamsSchema",
	"ResourceTemplateSchema",
	"ResourceTemplateReferenceSchema",
	"ResourceUpdatedNotificationSchema",
	"ResourceUpdatedNotificationParamsSchema",
	"ResultMetaObjectSchema",
	"ResultSchema",
	"RoleSchema",
	"RootSchema",
	"RootsListChangedNotificationSchema",
	"SamplingContentSchema",
	"SamplingMessageSchema",
	"SamplingMessageContentBlockSchema",
	"ServerCapabilitiesSchema",
	"ServerNotificationSchema",
	"ServerRequestSchema",
	"ServerResultSchema",
	"SetLevelRequestSchema",
	"SetLevelRequestParamsSchema",
	"SingleSelectEnumSchemaSchema",
	"StringSchemaSchema",
	"SubscribeRequestSchema",
	"SubscribeRequestParamsSchema",
	"SubscriptionFilterSchema",
	"SubscriptionsAcknowledgedNotificationSchema",
	"SubscriptionsAcknowledgedNotificationParamsSchema",
	"SubscriptionsListenRequestSchema",
	"SubscriptionsListenRequestParamsSchema",
	"SubscriptionsListenResultSchema",
	"SubscriptionsListenResultMetaSchema",
	"TaskAugmentedRequestParamsSchema",
	"TaskCreationParamsSchema",
	"TaskMetadataSchema",
	"TaskSchema",
	"TaskStatusSchema",
	"TaskStatusNotificationSchema",
	"TaskStatusNotificationParamsSchema",
	"TextContentSchema",
	"TextResourceContentsSchema",
	"TitledMultiSelectEnumSchemaSchema",
	"TitledSingleSelectEnumSchemaSchema",
	"ToolSchema",
	"ToolAnnotationsSchema",
	"ToolChoiceSchema",
	"ToolExecutionSchema",
	"ToolListChangedNotificationSchema",
	"ToolResultContentSchema",
	"ToolUseContentSchema",
	"UnsubscribeRequestSchema",
	"UnsubscribeRequestParamsSchema",
	"UntitledMultiSelectEnumSchemaSchema",
	"UntitledSingleSelectEnumSchemaSchema"
];
var authSchemas = {
	IdJagTokenExchangeResponseSchema,
	OAuthClientInformationFullSchema,
	OAuthClientInformationSchema,
	OAuthClientMetadataSchema,
	OAuthClientRegistrationErrorSchema,
	OAuthErrorResponseSchema,
	OAuthMetadataSchema,
	OAuthProtectedResourceMetadataSchema,
	OAuthTokenRevocationRequestSchema,
	OAuthTokensSchema,
	OpenIdProviderDiscoveryMetadataSchema,
	OpenIdProviderMetadataSchema
};
var _specTypeSchemas = {};
var _isSpecType = {};
function register(key, schema) {
	const name = key.slice(0, -6);
	_specTypeSchemas[name] = schema;
	_isSpecType[name] = (v) => schema.safeParse(v).success;
}
for (const key of SPEC_SCHEMA_KEYS) register(key, schemas_exports[key]);
for (const [key, schema] of Object.entries(authSchemas)) register(key, schema);
Object.freeze(_specTypeSchemas);
Object.freeze(_isSpecType);
function bootstrapOutboundCodec(method) {
	switch (method) {
		case "initialize":
		case "notifications/initialized": return codecForVersion(void 0);
		case "server/discover": return codecForVersion(MODERN_WIRE_REVISION);
		default: return;
	}
}
/**
* The reserved per-request `_meta` envelope keys (protocol revision
* 2026-07-28). The protocol layer lifts these out of inbound `_meta` before
* handlers run and surfaces them at `ctx.mcpReq.envelope` — they are
* wire-level bookkeeping, not handler material.
*/
var RESERVED_ENVELOPE_META_KEYS = [
	PROTOCOL_VERSION_META_KEY,
	CLIENT_INFO_META_KEY,
	CLIENT_CAPABILITIES_META_KEY,
	LOG_LEVEL_META_KEY
];
/**
* Top-level params members carrying multi-round-trip driver material
* (protocol revision 2026-07-28). The spec reserves these names on
* client-initiated REQUESTS only — notification params keep them untouched
* (a vendor notification may legitimately use the same names).
*/
var RETRY_PARAMS_KEYS = ["inputResponses", "requestState"];
/**
* Lift wire-only material out of an inbound message so handlers see exactly
* the 2025-era shape, and surface it for the protocol layer (requests: via
* `ctx.mcpReq`). What counts as wire-only depends on the message kind: the
* reserved envelope `_meta` keys are reserved on every message, while the
* multi-round-trip retry fields (`inputResponses`/`requestState`) are
* reserved on client-initiated requests only — so notifications get only the
* envelope lift, and their top-level params stay untouched. Messages without
* wire-only material are returned unchanged (same reference).
*/
function liftWireOnlyMaterial(message, kind) {
	const params = message.params;
	if (!isPlainObject$1(params)) return {
		message,
		lifted: {}
	};
	const meta = params._meta;
	const envelopeKeys = isPlainObject$1(meta) ? RESERVED_ENVELOPE_META_KEYS.filter((key) => key in meta) : [];
	const retryKeys = kind === "request" ? RETRY_PARAMS_KEYS.filter((key) => key in params) : [];
	if (envelopeKeys.length === 0 && retryKeys.length === 0) return {
		message,
		lifted: {}
	};
	const lifted = {};
	const nextParams = { ...params };
	if (envelopeKeys.length > 0 && isPlainObject$1(meta)) {
		const envelope = {};
		const nextMeta = { ...meta };
		for (const key of envelopeKeys) {
			envelope[key] = meta[key];
			delete nextMeta[key];
		}
		lifted.envelope = envelope;
		if (Object.keys(nextMeta).length > 0) nextParams._meta = nextMeta;
		else delete nextParams._meta;
	}
	for (const key of retryKeys) {
		if (key === "inputResponses") lifted.inputResponses = nextParams[key];
		if (key === "requestState") lifted.requestState = nextParams[key];
		delete nextParams[key];
	}
	return {
		message: {
			...message,
			params: nextParams
		},
		lifted
	};
}
/**
* Standard Schema adapter over the era codec's `validateResult` function (the
* function-only WireCodec contract exposes no schema objects). Used by the
* spec-method `request()` overload so the request funnel keeps a single
* `StandardSchemaV1`-shaped validation seam for both spec and explicit-schema
* paths.
*
* Returns `undefined` when the method has no result entry on this era's
* registry — the caller maps that to the synchronous "pass a result schema"
* TypeError, exactly matching the pre-function-only behavior the
* typedMapAlignment suite pins (the result map deliberately excludes the
* `tasks/*` methods, so the spec-method overload refuses them up front).
*/
function codecResultValidator(codec, method) {
	const probe = codec.validateResult(method, void 0);
	if (!probe.ok && probe.reason === "not-in-era") return void 0;
	return { "~standard": {
		version: 1,
		vendor: "mcp-wire-codec",
		validate(value) {
			const outcome = codec.validateResult(method, value);
			if (outcome.ok) return { value: outcome.value };
			return { issues: [{ message: outcome.reason === "invalid" ? outcome.message : `not-in-era: ${method}` }] };
		}
	} };
}
/**
* Builds the `ctx.mcpReq.requestState` accessor for a resolved value. The
* `as T` below is the one place {@linkcode RequestStateAccessor}'s
* caller-asserted typing is implemented — no implementation can produce an
* arbitrary `T` from a runtime value honestly.
*/
function requestStateAccessor(value) {
	return () => value;
}
/** Shared no-state accessor: the common case allocates nothing per request. */
var NO_REQUEST_STATE = requestStateAccessor(void 0);
/**
* Returns a context whose `requestState` accessor reads the given value —
* how the server seam hands a verify hook's decoded payload (or the legacy
* shim's per-round echo) to the handler without mutating the original
* context.
*/
function withRequestStateValue(ctx, value) {
	return {
		...ctx,
		mcpReq: {
			...ctx.mcpReq,
			requestState: requestStateAccessor(value)
		}
	};
}
var writeNegotiatedProtocolVersion;
/**
* Package-internal write channel for a {@linkcode Protocol} instance's
* negotiated protocol version, for callers outside the class hierarchy:
* tests and the (future) modern-era server entry that marks a factory
* instance modern at binding time. Exported on the core internal barrel
* only — never public API.
*/
function setNegotiatedProtocolVersion(instance, version) {
	writeNegotiatedProtocolVersion(instance, version);
}
/**
* Implements MCP protocol framing on top of a pluggable transport, including
* features like request/response linking, notifications, and progress.
*
* `Protocol` is abstract; `Client` and `Server` are the concrete role-specific
* implementations most code should use.
*/
var Protocol = class {
	_transport;
	_requestMessageId = 0;
	_requestHandlers = /* @__PURE__ */ new Map();
	/** Methods registered with an explicit schema; the era gate in `_onrequest` reads it for the Tasks extension names. */
	_customSchemaRequestMethods = /* @__PURE__ */ new Set();
	_requestHandlerAbortControllers = /* @__PURE__ */ new Map();
	_notificationHandlers = /* @__PURE__ */ new Map();
	_responseHandlers = /* @__PURE__ */ new Map();
	_progressHandlers = /* @__PURE__ */ new Map();
	_timeoutInfo = /* @__PURE__ */ new Map();
	_pendingDebouncedNotifications = /* @__PURE__ */ new Set();
	/**
	* The protocol version negotiated for the current connection (`undefined`
	* before negotiation completes), which determines the wire era this
	* instance speaks. Set by the SDK's negotiation and initialize paths
	* (`Client.connect`, `Server._oninitialize`).
	*/
	_negotiatedProtocolVersion;
	static {
		writeNegotiatedProtocolVersion = (instance, version) => {
			instance._negotiatedProtocolVersion = version;
		};
	}
	_supportedProtocolVersions;
	/**
	* Callback for when the connection is closed for any reason.
	*
	* This is invoked when {@linkcode Protocol.close | close()} is called as well.
	*/
	onclose;
	/**
	* Callback for when an error occurs.
	*
	* Note that errors are not necessarily fatal; they are used for reporting any kind of exceptional condition out of band.
	*/
	onerror;
	/**
	* A handler to invoke for any request types that do not have their own handler installed.
	*/
	fallbackRequestHandler;
	/**
	* A handler to invoke for any notification types that do not have their own handler installed.
	*/
	fallbackNotificationHandler;
	constructor(_options) {
		this._options = _options;
		this._supportedProtocolVersions = _options?.supportedProtocolVersions ?? SUPPORTED_PROTOCOL_VERSIONS;
		this.setNotificationHandler("notifications/cancelled", (notification) => {
			this._oncancel(notification);
		});
		this.setNotificationHandler("notifications/progress", (notification) => {
			this._onprogress(notification);
		});
		this.setRequestHandler("ping", (_request) => ({}));
	}
	/**
	* Drop consult for inbound messages whose transport did not classify them
	* at the edge — long-lived channels such as stdio, where a role class may
	* need to decline traffic the negotiated era has no answer for (the
	* client-side inbound-request drop on modern-era connections: the
	* 2026-07-28 era has no server→client request channel, and on stdio the
	* client must never write JSON-RPC responses).
	*
	* Consulted ONLY when the transport supplied no
	* {@linkcode MessageExtraInfo.classification}: edge-classified traffic
	* never reaches the hook. Returning `'drop'` discards the message without
	* writing any response (requests are surfaced via `onerror`). The base
	* implementation returns `undefined`: unclassified traffic keeps today's
	* dispatch path unchanged. Era selection never happens here — era is
	* instance state, owned by the serving entry that constructed and
	* connected the instance.
	*/
	_shouldDropInbound(_message) {}
	/**
	* The per-request `_meta` envelope this instance attaches to every outgoing
	* request and notification, when one applies. The base implementation
	* returns `undefined` (no envelope — the 2025-era posture, so legacy-era
	* outbound traffic is byte-identical to a build without this seam).
	* `Client` overrides it on a connection that negotiated a modern (2026-07-28+)
	* era to return the reserved protocol-version / client-info /
	* client-capabilities keys. User-supplied `_meta` keys take precedence over
	* the auto-attached ones.
	*/
	_outboundMetaEnvelope() {}
	/**
	* Attach this instance's outbound `_meta` envelope (when one is configured)
	* to a request or notification. A no-op when the seam returns `undefined`
	* — the message returns by reference, so the legacy-era wire stays
	* byte-identical. User-supplied `_meta` keys are spread last so they win
	* over the auto-attached envelope keys.
	*/
	_envelopeOutbound(message) {
		const envelope = this._outboundMetaEnvelope();
		if (envelope === void 0) return message;
		const params = message.params ?? {};
		return {
			...message,
			params: {
				...params,
				_meta: {
					...envelope,
					...params._meta
				}
			}
		};
	}
	/**
	* Extension point for non-`complete` decoded results in the response
	* funnel: a result the wire codec discriminated into a kind other than
	* `'complete'` or `'invalid'` is handed here for the role class to
	* resolve. The base default surfaces it as a typed
	* {@linkcode SdkErrorCode.UnsupportedResultType} error (no retry).
	*
	* Intended consumers (named so the seam stays accountable):
	* - the `Client`'s multi-round-trip auto-fulfilment engine, which fulfils
	*   `'input_required'` results through the registered
	*   elicitation/sampling/roots handlers and retries via `flow.retry`;
	* - a future client-side terminal-result handler for
	*   `subscriptions/listen`, when the spec defines one.
	*
	* `Server` instances never receive `input_required` responses on their
	* outbound legs and leave the base behavior in place.
	*/
	_resolveNonCompleteResult(decoded, flow) {
		return Promise.reject(new SdkError(SdkErrorCode.UnsupportedResultType, `Unsupported result type '${decoded.kind}' for ${flow.request.method}`, {
			resultType: decoded.kind,
			method: flow.request.method
		}));
	}
	/**
	* Protected accessor for a registered request handler. Used by role
	* classes that dispatch synthesized requests through the same stored
	* handler chain (e.g. the `Client` fulfilling an embedded multi-round-trip
	* input request).
	*/
	_getRequestHandler(method) {
		return this._requestHandlers.get(method);
	}
	async _oncancel(notification) {
		if (notification.params.requestId === void 0) return;
		this._requestHandlerAbortControllers.get(notification.params.requestId)?.abort(notification.params.reason);
	}
	_setupTimeout(messageId, timeout, maxTotalTimeout, onTimeout, resetTimeoutOnProgress = false) {
		this._timeoutInfo.set(messageId, {
			timeoutId: setTimeout(onTimeout, timeout),
			startTime: Date.now(),
			timeout,
			maxTotalTimeout,
			resetTimeoutOnProgress,
			onTimeout
		});
	}
	_resetTimeout(messageId) {
		const info = this._timeoutInfo.get(messageId);
		if (!info) return false;
		const totalElapsed = Date.now() - info.startTime;
		if (info.maxTotalTimeout && totalElapsed >= info.maxTotalTimeout) {
			this._timeoutInfo.delete(messageId);
			throw new SdkError(SdkErrorCode.RequestTimeout, "Maximum total timeout exceeded", {
				maxTotalTimeout: info.maxTotalTimeout,
				totalElapsed
			});
		}
		clearTimeout(info.timeoutId);
		info.timeoutId = setTimeout(info.onTimeout, info.timeout);
		return true;
	}
	_cleanupTimeout(messageId) {
		const info = this._timeoutInfo.get(messageId);
		if (info) {
			clearTimeout(info.timeoutId);
			this._timeoutInfo.delete(messageId);
		}
	}
	/**
	* Attaches to the given transport, starts it, and starts listening for messages.
	*
	* The caller assumes ownership of the {@linkcode Transport}, replacing any callbacks that have already been set, and expects that it is the only user of the {@linkcode Transport} instance going forward.
	*/
	async connect(transport) {
		this._transport = transport;
		const _onclose = this.transport?.onclose;
		this._transport.onclose = () => {
			try {
				_onclose?.();
			} finally {
				this._onclose();
			}
		};
		const _onerror = this.transport?.onerror;
		this._transport.onerror = (error) => {
			_onerror?.(error);
			this._onerror(error);
		};
		const _onmessage = this._transport?.onmessage;
		this._transport.onmessage = (message, extra) => {
			_onmessage?.(message, extra);
			if (isJSONRPCResultResponse(message) || isJSONRPCErrorResponse(message)) this._onresponse(message);
			else if (isJSONRPCRequest(message)) this._onrequest(message, extra);
			else if (isJSONRPCNotification(message)) this._onnotification(message, extra);
			else this._onerror(/* @__PURE__ */ new Error(`Unknown message type: ${JSON.stringify(message)}`));
		};
		transport.setSupportedProtocolVersions?.(this._supportedProtocolVersions);
		await this._transport.start();
	}
	/**
	* Transport-close hook. Subclass overrides MUST call `super._onclose()`
	* after their own cleanup — base teardown (response-handler settlement,
	* timeout clearing, in-flight request abort) does not run otherwise.
	*/
	_onclose() {
		const responseHandlers = this._responseHandlers;
		this._responseHandlers = /* @__PURE__ */ new Map();
		this._progressHandlers.clear();
		this._pendingDebouncedNotifications.clear();
		for (const info of this._timeoutInfo.values()) clearTimeout(info.timeoutId);
		this._timeoutInfo.clear();
		const requestHandlerAbortControllers = this._requestHandlerAbortControllers;
		this._requestHandlerAbortControllers = /* @__PURE__ */ new Map();
		const error = new SdkError(SdkErrorCode.ConnectionClosed, "Connection closed");
		this._transport = void 0;
		try {
			this.onclose?.();
		} finally {
			for (const handler of responseHandlers.values()) handler(error);
			for (const controller of requestHandlerAbortControllers.values()) controller.abort(error);
		}
	}
	_onerror(error) {
		this.onerror?.(error);
	}
	/**
	* Inbound-notification dispatch. Subclass overrides MUST delegate
	* unmatched traffic to `super._onnotification(rawNotification, extra)` —
	* an override that consumes only what it owns and falls through to base
	* dispatch for everything else.
	*/
	_onnotification(rawNotification, extra) {
		const { message: notification } = liftWireOnlyMaterial(rawNotification, "notification");
		const codec = this._negotiatedWireCodec();
		if (extra?.classification === void 0 && this._shouldDropInbound(rawNotification) === "drop") return;
		if (extra?.classification !== void 0) {
			const classified = classifiedWireEra(extra.classification);
			if (classified !== codec.era) {
				this._onerror(/* @__PURE__ */ new Error(`Era mismatch on inbound notification '${notification.method}': classified as ${classified} but this instance serves ${codec.era}`));
				return;
			}
		}
		if (isSpecNotificationMethod(notification.method) && !codec.hasNotificationMethod(notification.method)) return;
		const handler = this._notificationHandlers.get(notification.method);
		const fallback = this.fallbackNotificationHandler;
		if (handler === void 0 && fallback === void 0) return;
		Promise.resolve().then(() => handler === void 0 ? fallback(notification) : handler(notification, codec)).catch((error) => this._onerror(/* @__PURE__ */ new Error(`Uncaught error in notification handler: ${error}`)));
	}
	_onrequest(rawRequest, extra) {
		const { message: request, lifted } = liftWireOnlyMaterial(rawRequest, "request");
		const codec = this._negotiatedWireCodec();
		if (extra?.classification === void 0 && this._shouldDropInbound(rawRequest) === "drop") {
			this._onerror(/* @__PURE__ */ new Error(`Dropped inbound request '${rawRequest.method}': not servable on this connection's protocol era`));
			return;
		}
		const capturedTransport = this._transport;
		const sendErrorResponse = (code, message, data) => {
			const errorResponse = {
				jsonrpc: "2.0",
				id: request.id,
				error: {
					code,
					message,
					...data !== void 0 && { data }
				}
			};
			capturedTransport?.send(errorResponse).catch((error) => this._onerror(/* @__PURE__ */ new Error(`Failed to send an error response: ${error}`)));
		};
		if (extra?.classification !== void 0) {
			const classified = classifiedWireEra(extra.classification);
			if (classified !== codec.era) {
				this._onerror(/* @__PURE__ */ new Error(`Era mismatch on inbound request '${request.method}': classified as ${classified} but this instance serves ${codec.era}`));
				const requested = extra.classification.revision ?? classified;
				sendErrorResponse(ProtocolErrorCode.UnsupportedProtocolVersion, `Unsupported protocol version: ${requested}`, {
					supported: this._supportedProtocolVersions,
					requested
				});
				return;
			}
		}
		if (isSpecRequestMethod(request.method) && !codec.hasRequestMethod(request.method) && !(isExtensionReusedRequestMethod(request.method) && this._customSchemaRequestMethods.has(request.method))) {
			sendErrorResponse(ProtocolErrorCode.MethodNotFound, "Method not found");
			return;
		}
		const handler = this._requestHandlers.get(request.method) ?? this.fallbackRequestHandler;
		if (handler === void 0) {
			sendErrorResponse(ProtocolErrorCode.MethodNotFound, "Method not found");
			return;
		}
		const envelopeError = codec.checkInboundEnvelope(lifted);
		if (envelopeError !== void 0) {
			sendErrorResponse(ProtocolErrorCode.InvalidParams, envelopeError);
			return;
		}
		const sendNotification = (notification, options) => this._notificationViaCodec(this._resolveOutboundCodec(notification.method), notification, {
			...options,
			relatedRequestId: request.id
		});
		const sendRequest = (r, resultSchema, options) => this._requestWithSchemaViaCodec(this._resolveOutboundCodec(r.method), r, resultSchema, {
			...options,
			relatedRequestId: request.id
		});
		const abortController = new AbortController();
		this._requestHandlerAbortControllers.set(request.id, abortController);
		const partitionedInputResponses = lifted.inputResponses === void 0 ? void 0 : partitionInputResponses(lifted.inputResponses);
		const baseCtx = {
			sessionId: capturedTransport?.sessionId,
			mcpReq: {
				id: request.id,
				method: request.method,
				_meta: request.params?._meta,
				...lifted.envelope !== void 0 && { envelope: lifted.envelope },
				...partitionedInputResponses !== void 0 && { inputResponses: partitionedInputResponses.accepted },
				...partitionedInputResponses !== void 0 && partitionedInputResponses.droppedKeys.length > 0 && { droppedInputResponseKeys: partitionedInputResponses.droppedKeys },
				requestState: lifted.requestState === void 0 ? NO_REQUEST_STATE : requestStateAccessor(lifted.requestState),
				signal: abortController.signal,
				send: ((r, schemaOrOptions, maybeOptions) => {
					const sendCodec = this._resolveOutboundCodec(r.method);
					this._assertOutboundRequestInEra(sendCodec, r.method);
					if (isStandardSchema(schemaOrOptions)) return sendRequest(r, schemaOrOptions, maybeOptions);
					const validate = codecResultValidator(sendCodec, r.method);
					if (validate === void 0) throw new TypeError(`'${r.method}' is not a spec method; pass a result schema as the second argument to ctx.mcpReq.send().`);
					return sendRequest(r, validate, schemaOrOptions);
				}),
				notify: sendNotification
			},
			http: extra?.authInfo ? { authInfo: extra.authInfo } : void 0
		};
		const ctx = this.buildContext(baseCtx, extra);
		Promise.resolve().then(() => handler(request, ctx)).then(async (result) => {
			if (abortController.signal.aborted) return;
			let encoded;
			try {
				encoded = codec.encodeResult(request.method, result, this._outboundServerInfo());
			} catch (error) {
				this._onerror(/* @__PURE__ */ new Error(`Failed to encode result for ${request.method}: ${error}`));
				sendErrorResponse(ProtocolErrorCode.InternalError, "Internal error");
				return;
			}
			const response = {
				result: encoded,
				jsonrpc: "2.0",
				id: request.id
			};
			await capturedTransport?.send(response);
		}, async (error) => {
			if (abortController.signal.aborted) return;
			const thrownCode = Number.isSafeInteger(error["code"]) ? error["code"] : ProtocolErrorCode.InternalError;
			const errorResponse = {
				jsonrpc: "2.0",
				id: request.id,
				error: {
					code: codec.encodeErrorCode(thrownCode),
					message: error.message ?? "Internal error",
					...error["data"] !== void 0 && { data: error["data"] }
				}
			};
			await capturedTransport?.send(errorResponse);
		}).catch((error) => this._onerror(/* @__PURE__ */ new Error(`Failed to send response: ${error}`))).finally(() => {
			if (this._requestHandlerAbortControllers.get(request.id) === abortController) this._requestHandlerAbortControllers.delete(request.id);
		});
	}
	_onprogress(notification) {
		const { progressToken, ...params } = notification.params;
		const messageId = Number(progressToken);
		const handler = this._progressHandlers.get(messageId);
		if (!handler) {
			this._onerror(/* @__PURE__ */ new Error(`Received a progress notification for an unknown token: ${JSON.stringify(notification)}`));
			return;
		}
		const responseHandler = this._responseHandlers.get(messageId);
		const timeoutInfo = this._timeoutInfo.get(messageId);
		if (timeoutInfo && responseHandler && timeoutInfo.resetTimeoutOnProgress) try {
			this._resetTimeout(messageId);
		} catch (error) {
			this._responseHandlers.delete(messageId);
			this._progressHandlers.delete(messageId);
			this._cleanupTimeout(messageId);
			responseHandler(error);
			return;
		}
		handler(params);
	}
	/**
	* Inbound-response dispatch. Subclass overrides MUST delegate unmatched
	* traffic to `super._onresponse(response)` — an override that consumes
	* only what it owns and falls through to base dispatch for everything
	* else.
	*/
	_onresponse(response) {
		const messageId = Number(response.id);
		const handler = this._responseHandlers.get(messageId);
		if (handler === void 0) {
			this._onerror(/* @__PURE__ */ new Error(`Received a response for an unknown message ID: ${JSON.stringify(response)}`));
			return;
		}
		this._responseHandlers.delete(messageId);
		this._cleanupTimeout(messageId);
		this._progressHandlers.delete(messageId);
		if (isJSONRPCResultResponse(response)) handler(response);
		else handler(ProtocolError.fromError(response.error.code, response.error.message, response.error.data));
	}
	get transport() {
		return this._transport;
	}
	/**
	* Closes the connection.
	*/
	async close() {
		await this._transport?.close();
	}
	request(request, schemaOrOptions, maybeOptions) {
		const codec = this._resolveOutboundCodec(request.method);
		if (isStandardSchema(schemaOrOptions)) {
			if (!isExtensionReusedRequestMethod(request.method)) this._assertOutboundRequestInEra(codec, request.method);
			return this._requestWithSchemaViaCodec(codec, request, schemaOrOptions, maybeOptions);
		}
		this._assertOutboundRequestInEra(codec, request.method);
		const validate = codecResultValidator(codec, request.method);
		if (validate === void 0) throw new TypeError(`'${request.method}' is not a spec method; pass a result schema as the second argument to request().`);
		return this._requestWithSchemaViaCodec(codec, request, validate, schemaOrOptions);
	}
	/**
	* The wire codec for this instance's negotiated era — the phase-2 truth:
	* everything an established connection sends and receives resolves
	* through it. Legacy until a version has been negotiated.
	*/
	_negotiatedWireCodec() {
		return codecForVersion(this._negotiatedProtocolVersion);
	}
	/**
	* Protected accessor for the instance's negotiated wire codec, for role
	* classes (Client/Server/McpServer) routing era-dependent behavior
	* through the codec's function-only surface — `samplingResultVariant`,
	* `outboundEnvelope`, `projectCallToolResult` — instead of branching on
	* the protocol version themselves.
	*/
	_wireCodec() {
		return this._negotiatedWireCodec();
	}
	/**
	* Outbound codec resolution: while the negotiated version is still unset
	* (the negotiation window), lifecycle messages are bootstrap-pinned BY
	* METHOD — they self-identify their era (`initialize` IS the legacy
	* handshake, `server/discover` IS the modern probe). Once a version has
	* been negotiated, the instance era is authoritative for everything — a
	* negotiated session never re-routes a method onto the other era.
	*/
	_resolveOutboundCodec(method) {
		if (this._negotiatedProtocolVersion === void 0) {
			const pinned = bootstrapOutboundCodec(method);
			if (pinned) return pinned;
		}
		return this._negotiatedWireCodec();
	}
	/**
	* Era gate for outbound requests — deletions are physical in BOTH
	* directions: sending a spec method that the resolved era does not define
	* dies locally with a typed error before anything reaches the transport.
	* Methods outside the spec universe are consumer-owned extension methods
	* and stay era-blind.
	*/
	_assertOutboundRequestInEra(codec, method) {
		if (isSpecRequestMethod(method) && !codec.hasRequestMethod(method)) throw new SdkError(SdkErrorCode.MethodNotSupportedByProtocolVersion, `Method '${method}' is not supported by the negotiated protocol version (wire era ${codec.era})`, {
			method,
			era: codec.era
		});
	}
	/**
	* Sends a request and waits for a response, using the provided schema for
	* validation instead of the era registry's method-keyed entry.
	*
	* This is the internal implementation used by SDK methods whose result
	* schema cannot be expressed as a method-keyed registry entry — the one
	* surviving case is `server.createMessage`, whose result schema depends
	* on the REQUEST params (tools vs no tools) — and by callers passing
	* explicit compatibility schemas. Spec methods are still era-gated here:
	* an explicit schema never smuggles a deleted method onto the wire.
	*/
	_requestWithSchema(request, resultSchema, options) {
		const codec = this._resolveOutboundCodec(request.method);
		this._assertOutboundRequestInEra(codec, request.method);
		return this._requestWithSchemaViaCodec(codec, request, resultSchema, options);
	}
	/**
	* The request funnel proper, keyed by the resolved era codec: the codec
	* owns result decoding (raw-first `resultType` discrimination — V-1 —
	* and the era's lift posture) before the schema validation step.
	*/
	_requestWithSchemaViaCodec(codec, request, resultSchema, options) {
		const { relatedRequestId, resumptionToken, onresumptiontoken, headers } = options ?? {};
		const flowStartedAt = Date.now();
		let onAbort;
		let cleanupMessageId;
		return new Promise((resolve, reject) => {
			const earlyReject = (error) => {
				reject(error);
			};
			if (!this._transport) {
				earlyReject(/* @__PURE__ */ new Error("Not connected"));
				return;
			}
			if (this._options?.enforceStrictCapabilities === true) try {
				this.assertCapabilityForMethod(request.method);
			} catch (error) {
				earlyReject(error);
				return;
			}
			if (options?.signal?.aborted) {
				const reason = options.signal.reason;
				throw reason instanceof SdkError ? reason : new SdkError(SdkErrorCode.RequestTimeout, String(reason));
			}
			const requestAbort = codec.era === "2026-07-28" && this._transport.hasPerRequestStream === true ? new AbortController() : void 0;
			const messageId = this._requestMessageId++;
			cleanupMessageId = messageId;
			const jsonrpcRequest = {
				...request,
				jsonrpc: "2.0",
				id: messageId
			};
			if (options?.onprogress) {
				this._progressHandlers.set(messageId, options.onprogress);
				jsonrpcRequest.params = {
					...request.params,
					_meta: {
						...request.params?._meta,
						progressToken: messageId
					}
				};
			}
			const outbound = this._envelopeOutbound(jsonrpcRequest);
			let responseReceived = false;
			const cancel = (reason) => {
				if (responseReceived) return;
				this._progressHandlers.delete(messageId);
				if (requestAbort === void 0) {
					if (request.method !== "initialize") this._transport?.send(this._envelopeOutbound({
						jsonrpc: "2.0",
						method: "notifications/cancelled",
						params: {
							requestId: messageId,
							reason: String(reason)
						}
					}), {
						relatedRequestId,
						resumptionToken,
						onresumptiontoken
					}).catch((error) => this._onerror(/* @__PURE__ */ new Error(`Failed to send cancellation: ${error}`)));
				} else requestAbort.abort();
				reject(reason instanceof SdkError ? reason : new SdkError(SdkErrorCode.RequestTimeout, String(reason)));
			};
			this._responseHandlers.set(messageId, (response) => {
				if (options?.signal?.aborted) return;
				responseReceived = true;
				if (response instanceof Error) return reject(response);
				let decoded;
				try {
					decoded = codec.decodeResult(request.method, response.result);
				} catch (error) {
					return reject(error instanceof Error ? error : new Error(String(error)));
				}
				if (decoded.kind === "invalid") return reject(decoded.error);
				if (decoded.kind === "input_required") {
					if (options?.allowInputRequired === true) return resolve(manualInputRequiredValue(decoded));
					const flow = {
						codec,
						request,
						resultSchema,
						options,
						flowStartedAt,
						retry: (params, legOptions) => this._requestWithSchemaViaCodec(codec, params === void 0 ? { method: request.method } : {
							method: request.method,
							params
						}, resultSchema, legOptions)
					};
					return resolve(this._resolveNonCompleteResult(decoded, flow));
				}
				const result = decoded.result;
				validateStandardSchema(resultSchema, result).then((parseResult) => {
					if (parseResult.success) resolve(parseResult.data);
					else reject(new SdkError(SdkErrorCode.InvalidResult, `Invalid result for ${request.method}: ${parseResult.error}`));
				}, reject);
			});
			onAbort = () => cancel(options?.signal?.reason);
			options?.signal?.addEventListener("abort", onAbort, { once: true });
			const timeout = options?.timeout ?? 6e4;
			const timeoutHandler = () => cancel(new SdkError(SdkErrorCode.RequestTimeout, "Request timed out", { timeout }));
			this._setupTimeout(messageId, timeout, options?.maxTotalTimeout, timeoutHandler, options?.resetTimeoutOnProgress ?? false);
			this._transport.send(outbound, {
				relatedRequestId,
				resumptionToken,
				onresumptiontoken,
				headers,
				requestSignal: requestAbort?.signal
			}).catch((error) => {
				this._progressHandlers.delete(messageId);
				reject(error);
			});
		}).finally(() => {
			if (onAbort) options?.signal?.removeEventListener("abort", onAbort);
			if (cleanupMessageId !== void 0) {
				this._responseHandlers.delete(cleanupMessageId);
				this._cleanupTimeout(cleanupMessageId);
			}
		});
	}
	/**
	* Emits a notification, which is a one-way message that does not expect a response.
	*/
	async notification(notification, options) {
		return await this._notificationViaCodec(this._resolveOutboundCodec(notification.method), notification, options);
	}
	/**
	* The notification funnel proper, keyed by the resolved era codec —
	* direct sends and related notifications (`ctx.mcpReq.notify`) alike
	* resolve through the instance's negotiated era at send time.
	*/
	async _notificationViaCodec(codec, notification, options) {
		if (!this._transport) throw new SdkError(SdkErrorCode.NotConnected, "Not connected");
		if (isSpecNotificationMethod(notification.method) && !codec.hasNotificationMethod(notification.method)) throw new SdkError(SdkErrorCode.MethodNotSupportedByProtocolVersion, `Notification '${notification.method}' is not supported by the negotiated protocol version (wire era ${codec.era})`, {
			method: notification.method,
			era: codec.era
		});
		this.assertNotificationCapability(notification.method);
		const jsonrpcNotification = this._envelopeOutbound({
			jsonrpc: "2.0",
			...notification
		});
		if ((this._options?.debouncedNotificationMethods ?? []).includes(notification.method) && !notification.params && options?.relatedRequestId === void 0) {
			if (this._pendingDebouncedNotifications.has(notification.method)) return;
			this._pendingDebouncedNotifications.add(notification.method);
			Promise.resolve().then(() => {
				this._pendingDebouncedNotifications.delete(notification.method);
				if (!this._transport) return;
				this._transport?.send(jsonrpcNotification, options).catch((error) => this._onerror(error));
			});
			return;
		}
		await this._transport.send(jsonrpcNotification, options);
	}
	setRequestHandler(method, schemasOrHandler, maybeHandler) {
		this.assertRequestHandlerCapability(method);
		let stored;
		if (typeof schemasOrHandler === "function") {
			if (!isSpecRequestMethod(method)) throw new TypeError(`'${method}' is not a spec request method; pass schemas as the second argument to setRequestHandler().`);
			stored = (request, ctx) => {
				const dispatchCodec = this._negotiatedWireCodec();
				let outcome = dispatchCodec.validateRequest(method, request);
				if (!outcome.ok && outcome.reason === "not-in-era") outcome = dispatchCodec.validateInputRequest(method, request);
				if (!outcome.ok) {
					if (outcome.reason === "not-in-era") throw new ProtocolError(ProtocolErrorCode.InternalError, `No wire schema for ${method} in the resolved era`);
					throw new Error(outcome.message);
				}
				return Promise.resolve(schemasOrHandler(outcome.value, ctx));
			};
		} else if (maybeHandler) stored = async (request, ctx) => {
			const parsed = await validateStandardSchema(schemasOrHandler.params, { ...request.params });
			if (!parsed.success) throw new ProtocolError(ProtocolErrorCode.InvalidParams, `Invalid params for ${method}: ${parsed.error}`);
			return maybeHandler(parsed.data, ctx);
		};
		else throw new TypeError("setRequestHandler: handler is required");
		if (typeof schemasOrHandler === "function") this._customSchemaRequestMethods.delete(method);
		else this._customSchemaRequestMethods.add(method);
		this._requestHandlers.set(method, this._wrapHandler(method, stored));
	}
	/**
	* Hook for subclasses to wrap a registered request handler with role-specific
	* validation or behavior (e.g. `Server` validates `tools/call` results, `Client`
	* validates `elicitation/create` mode and result). Runs for both the 2-arg and
	* 3-arg registration paths. The default implementation is identity.
	*
	* Subclasses overriding this hook avoid redeclaring `setRequestHandler`'s overload set.
	*/
	_wrapHandler(_method, handler) {
		return handler;
	}
	/**
	* Hook for subclasses to supply the implementation identity the 2026-era
	* encode seam stamps into outbound result `_meta` under
	* `io.modelcontextprotocol/serverInfo` (spec PR #3002: servers SHOULD
	* identify themselves on every response). The default is `undefined` — no
	* stamp. Only `Server` overrides this: the key identifies the software
	* producing a response, and the 2025-era codec never stamps anything
	* regardless (the never-stamp guarantee).
	*/
	_outboundServerInfo() {}
	/**
	* Removes the request handler for the given method.
	*/
	removeRequestHandler(method) {
		this._requestHandlers.delete(method);
		this._customSchemaRequestMethods.delete(method);
	}
	/**
	* Asserts that a request handler has not already been set for the given method, in preparation for a new one being automatically installed.
	*/
	assertCanSetRequestHandler(method) {
		if (this._requestHandlers.has(method)) throw new Error(`A request handler for ${method} already exists, which would be overridden`);
	}
	setNotificationHandler(method, schemasOrHandler, maybeHandler) {
		if (typeof schemasOrHandler === "function") {
			if (!isSpecNotificationMethod(method)) throw new TypeError(`'${method}' is not a spec notification method; pass schemas as the second argument to setNotificationHandler().`);
			this._notificationHandlers.set(method, (notification, codec) => {
				const outcome = codec.validateNotification(method, notification);
				if (!outcome.ok) {
					if (outcome.reason === "not-in-era") throw new ProtocolError(ProtocolErrorCode.InternalError, `No wire schema for ${method} in the resolved era`);
					throw new Error(outcome.message);
				}
				return Promise.resolve(schemasOrHandler(outcome.value));
			});
			return;
		}
		if (!maybeHandler) throw new TypeError("setNotificationHandler: handler is required");
		this._notificationHandlers.set(method, async (notification) => {
			const parsed = await validateStandardSchema(schemasOrHandler.params, { ...notification.params });
			if (!parsed.success) throw new ProtocolError(ProtocolErrorCode.InvalidParams, `Invalid params for notification ${method}: ${parsed.error}`);
			await maybeHandler(parsed.data, notification);
		});
	}
	/**
	* Removes the notification handler for the given method.
	*/
	removeNotificationHandler(method) {
		this._notificationHandlers.delete(method);
	}
};
function isPlainObject$1(value) {
	return value !== null && typeof value === "object" && !Array.isArray(value);
}
function mergeCapabilities(base, additional) {
	const result = { ...base };
	for (const key in additional) {
		const k = key;
		const addValue = additional[k];
		if (addValue === void 0) continue;
		const baseValue = result[k];
		result[k] = isPlainObject$1(baseValue) && isPlainObject$1(addValue) ? {
			...baseValue,
			...addValue
		} : addValue;
	}
	return result;
}
function isPlainObject(value) {
	return typeof value === "object" && value !== null && !Array.isArray(value);
}
/**
* Splits a retried request's `inputResponses` map into the BARE response
* entries the spec defines and everything else. The spec's embedded responses
* are the bare result objects (an `ElicitResult`, `CreateMessageResult`, or
* `ListRootsResult`); a wrapped `{method, result}` envelope (a shape some
* peers emit) is never accepted as a response — its key is recorded so the
* handler can re-issue the corresponding input request.
*/
function partitionInputResponses(inputResponses) {
	const accepted = {};
	const droppedKeys = [];
	if (!isPlainObject(inputResponses)) return {
		accepted,
		droppedKeys
	};
	for (const [key, entry] of Object.entries(inputResponses)) {
		if (!isPlainObject(entry) || "method" in entry || "result" in entry) {
			droppedKeys.push(key);
			continue;
		}
		accepted[key] = entry;
	}
	return {
		accepted,
		droppedKeys
	};
}
/**
* Builds the manual-mode {@linkcode InputRequiredResult} value from the
* codec's decoded payload — what an `allowInputRequired: true` caller
* receives instead of the auto-fulfilled complete result.
*/
function manualInputRequiredValue(decoded) {
	return {
		resultType: "input_required",
		inputRequests: decoded.inputRequests,
		...decoded.requestState !== void 0 && { requestState: decoded.requestState },
		...decoded._meta !== void 0 && { _meta: decoded._meta }
	};
}
/*!
* content-type
* Copyright(c) 2015 Douglas Christopher Wilson
* MIT Licensed
*/
var import_content_type = /* @__PURE__ */ __toESM((/* @__PURE__ */ __commonJSMin(((exports) => {
	/**
	* RegExp to match *( ";" parameter ) in RFC 7231 sec 3.1.1.1
	*
	* parameter     = token "=" ( token / quoted-string )
	* token         = 1*tchar
	* tchar         = "!" / "#" / "$" / "%" / "&" / "'" / "*"
	*               / "+" / "-" / "." / "^" / "_" / "`" / "|" / "~"
	*               / DIGIT / ALPHA
	*               ; any VCHAR, except delimiters
	* quoted-string = DQUOTE *( qdtext / quoted-pair ) DQUOTE
	* qdtext        = HTAB / SP / %x21 / %x23-5B / %x5D-7E / obs-text
	* obs-text      = %x80-FF
	* quoted-pair   = "\" ( HTAB / SP / VCHAR / obs-text )
	*/
	var PARAM_REGEXP = /; *([!#$%&'*+.^_`|~0-9A-Za-z-]+) *= *("(?:[\u000b\u0020\u0021\u0023-\u005b\u005d-\u007e\u0080-\u00ff]|\\[\u000b\u0020-\u00ff])*"|[!#$%&'*+.^_`|~0-9A-Za-z-]+) */g;
	/**
	* RegExp to match quoted-pair in RFC 7230 sec 3.2.6
	*
	* quoted-pair = "\" ( HTAB / SP / VCHAR / obs-text )
	* obs-text    = %x80-FF
	*/
	var QESC_REGEXP = /\\([\u000b\u0020-\u00ff])/g;
	/**
	* RegExp to match type in RFC 7231 sec 3.1.1.1
	*
	* media-type = type "/" subtype
	* type       = token
	* subtype    = token
	*/
	var TYPE_REGEXP = /^[!#$%&'*+.^_`|~0-9A-Za-z-]+\/[!#$%&'*+.^_`|~0-9A-Za-z-]+$/;
	exports.parse = parse;
	/**
	* Parse media type to object.
	*
	* @param {string|object} string
	* @return {Object}
	* @public
	*/
	function parse(string) {
		if (!string) throw new TypeError("argument string is required");
		var header = typeof string === "object" ? getcontenttype(string) : string;
		if (typeof header !== "string") throw new TypeError("argument string is required to be a string");
		var index = header.indexOf(";");
		var type = index !== -1 ? header.slice(0, index).trim() : header.trim();
		if (!TYPE_REGEXP.test(type)) throw new TypeError("invalid media type");
		var obj = new ContentType(type.toLowerCase());
		if (index !== -1) {
			var key;
			var match;
			var value;
			PARAM_REGEXP.lastIndex = index;
			while (match = PARAM_REGEXP.exec(header)) {
				if (match.index !== index) throw new TypeError("invalid parameter format");
				index += match[0].length;
				key = match[1].toLowerCase();
				value = match[2];
				if (value.charCodeAt(0) === 34) {
					value = value.slice(1, -1);
					if (value.indexOf("\\") !== -1) value = value.replace(QESC_REGEXP, "$1");
				}
				obj.parameters[key] = value;
			}
			if (index !== header.length) throw new TypeError("invalid parameter format");
		}
		return obj;
	}
	/**
	* Get content-type from req/res objects.
	*
	* @param {object}
	* @return {Object}
	* @private
	*/
	function getcontenttype(obj) {
		var header;
		if (typeof obj.getHeader === "function") header = obj.getHeader("content-type");
		else if (typeof obj.headers === "object") header = obj.headers && obj.headers["content-type"];
		if (typeof header !== "string") throw new TypeError("content-type header is missing from object");
		return header;
	}
	/**
	* Class to represent a content type.
	* @private
	*/
	function ContentType(type) {
		this.parameters = Object.create(null);
		this.type = type;
	}
})))(), 1);
/**
* Extracts the media type (the lowercased `type/subtype` pair, without
* parameters) from a raw `Content-Type` header value, or `undefined` when the
* header is missing or empty.
*
* Content-Type comparisons must use the parsed media type, never a substring
* search of the raw header: a value like `text/plain; a=application/json`
* contains the substring `application/json` but its media type is
* `text/plain`, and case variants or parameters make naive string comparison
* wrong in both directions.
*
* "Essence" is the WHATWG MIME Sniffing standard's term for the bare
* `type/subtype` pair (https://mimesniff.spec.whatwg.org/#mime-type-essence);
* the Fetch standard's request classification is defined against it
* (https://fetch.spec.whatwg.org/#cors-safelisted-request-header).
*
* Parsing is RFC 9110 (`content-type` package) first. When the parameter
* section is malformed (`application/json;`, `application/json; charset=`),
* browsers and most HTTP stacks still derive the media type from the segment
* before the first `;` — the fallback matches that widely-implemented
* behavior, so a header whose media type is unambiguous is not rejected for
* a sloppy parameter section.
*/
function mediaTypeEssence(header) {
	if (!header) return;
	try {
		return import_content_type.parse(header).type;
	} catch {
		const essence = (header.split(";", 1)[0] ?? "").trim().toLowerCase();
		if (essence === "" || header.slice(essence.length).includes(",")) return;
		return essence;
	}
}
/**
* Whether a raw `Content-Type` header value denotes `application/json`.
* Parameters (for example `charset=utf-8`) are allowed and ignored; malformed
* parameter sections do not reject a header whose media type is unambiguously
* `application/json` (see `mediaTypeEssence` for the exact grammar).
*/
function isJsonContentType(header) {
	if (header === "application/json") return true;
	return mediaTypeEssence(header) === "application/json";
}
/**
* Tool name validation utilities according to SEP: Specify Format for Tool Names
*
* Tool names SHOULD be between 1 and 128 characters in length (inclusive).
* Tool names are case-sensitive.
* Allowed characters: uppercase and lowercase ASCII letters (`A-Z`, `a-z`), digits
* (`0-9`), underscore (`_`), dash (`-`), and dot (`.`).
* Tool names SHOULD NOT contain spaces, commas, or other special characters.
*
* @see {@link https://github.com/modelcontextprotocol/modelcontextprotocol/issues/986 | SEP-986: Specify Format for Tool Names}
*/
/**
* Regular expression for valid tool names according to SEP-986 specification
*/
var TOOL_NAME_REGEX = /^[A-Za-z0-9._-]{1,128}$/;
/**
* Validates a tool name according to the SEP specification
* @param name - The tool name to validate
* @returns An object containing validation result and any warnings
*/
function validateToolName(name) {
	const warnings = [];
	if (name.length === 0) return {
		isValid: false,
		warnings: ["Tool name cannot be empty"]
	};
	if (name.length > 128) return {
		isValid: false,
		warnings: [`Tool name exceeds maximum length of 128 characters (current: ${name.length})`]
	};
	if (name.includes(" ")) warnings.push("Tool name contains spaces, which may cause parsing issues");
	if (name.includes(",")) warnings.push("Tool name contains commas, which may cause parsing issues");
	if (name.startsWith("-") || name.endsWith("-")) warnings.push("Tool name starts or ends with a dash, which may cause parsing issues in some contexts");
	if (name.startsWith(".") || name.endsWith(".")) warnings.push("Tool name starts or ends with a dot, which may cause parsing issues in some contexts");
	if (!TOOL_NAME_REGEX.test(name)) {
		const invalidChars = [...name].filter((char) => !/[A-Za-z0-9._-]/.test(char)).filter((char, index, arr) => arr.indexOf(char) === index);
		warnings.push(`Tool name contains invalid characters: ${invalidChars.map((c) => `"${c}"`).join(", ")}`, "Allowed characters are: A-Z, a-z, 0-9, underscore (_), dash (-), and dot (.)");
		return {
			isValid: false,
			warnings
		};
	}
	return {
		isValid: true,
		warnings
	};
}
/**
* Issues warnings for non-conforming tool names
* @param name - The tool name that triggered the warnings
* @param warnings - Array of warning messages
*/
function issueToolNameWarning(name, warnings) {
	if (warnings.length > 0) {
		console.warn(`Tool name validation warning for "${name}":`);
		for (const warning of warnings) console.warn(`  - ${warning}`);
		console.warn("Tool registration will proceed, but this may cause compatibility issues.");
		console.warn("Consider updating the tool name to conform to the MCP tool naming standard.");
		console.warn("See SEP: Specify Format for Tool Names (https://github.com/modelcontextprotocol/modelcontextprotocol/issues/986) for more details.");
	}
}
/**
* Validates a tool name and issues warnings for non-conforming names
* @param name - The tool name to validate
* @returns `true` if the name is valid, `false` otherwise
*/
function validateAndWarnToolName(name) {
	const result = validateToolName(name);
	issueToolNameWarning(name, result.warnings);
	return result.isValid;
}
/**
* Zod-specific helpers for the v1-compat raw-shape shorthand on
* `registerTool`/`registerPrompt`. Kept separate from `standardSchema.ts` so
* that file stays library-agnostic per the Standard Schema spec.
*/
function isZodV4Schema(v) {
	return typeof v === "object" && v !== null && "_zod" in v;
}
function looksLikeZodV3(v) {
	return typeof v === "object" && v !== null && !("_zod" in v) && "_def" in v && typeof v._def?.typeName === "string";
}
/**
* Detects a "raw shape" — a plain object whose values are Zod field schemas,
* e.g. `{ name: z.string() }`. Powers the auto-wrap in
* {@linkcode normalizeRawShapeSchema}, which wraps with `z.object()`, so only
* Zod values are supported.
*
* @internal
*/
function isZodRawShape(obj) {
	if (typeof obj !== "object" || obj === null) return false;
	if (isStandardSchema(obj)) return false;
	const proto = Object.getPrototypeOf(obj);
	if (proto !== Object.prototype && proto !== null) return false;
	return Object.values(obj).every((v) => isZodV4Schema(v));
}
/**
* Accepts either a {@linkcode StandardSchemaWithJSON} or a raw Zod shape
* `{ field: z.string() }` and returns a {@linkcode StandardSchemaWithJSON}.
* Raw shapes are wrapped with `z.object()` so the rest of the pipeline sees a
* uniform schema type; already-wrapped schemas pass through unchanged.
*
* @internal
*/
function normalizeRawShapeSchema(schema) {
	if (schema === void 0) return void 0;
	if (isZodRawShape(schema)) return object(schema);
	if (typeof schema === "object" && schema !== null && !isStandardSchema(schema) && Object.values(schema).some((v) => looksLikeZodV3(v))) throw new TypeError("Raw-shape inputSchema/outputSchema/argsSchema fields must be Zod v4 schemas. Got a Zod v3 field schema. Import from `zod/v4` (or upgrade your zod import), or wrap with `z.object({...})` yourself.");
	if (!isStandardSchema(schema)) throw new TypeError("inputSchema/outputSchema/argsSchema must be a Standard Schema (e.g. z.object({...})) or a raw Zod shape ({ field: z.string() }).");
	return schema;
}
/**
* Explicit warm-up entry for the lazy wire-schema layers.
*
* The per-revision wire schemas are built lazily: each era's schema set sits
* behind a memoized factory (`buildSchemas2025`/`buildSchemas2026`), and the
* registry/codec lookup maps above those factories are memoized the same way.
* That laziness is the right default on process-per-invocation runtimes (CLI
* tools, dev servers), where module evaluation IS startup latency and most
* short-lived processes never validate a message on both eras.
*
* On platforms that bill request CPU but not module evaluation — isolate-based
* edge/serverless runtimes such as Cloudflare Workers — the trade inverts:
* module-scope work runs during isolate warm-up outside any request, while
* lazy construction lands inside the first request's billed (and latency
* budgeted) CPU. `preloadSchemas()` lets deployments on such platforms move
* the one-time construction cost back to module scope by calling it at module
* scope themselves. The packages' own workerd shims already do this, so
* Workers deployments get eager construction automatically.
*/
/**
* Eagerly builds every lazily-constructed wire-schema layer, so that no later
* validation pays schema-construction cost.
*
* Synchronous and idempotent: every layer is a memo, so the first call does
* all the work and subsequent calls return immediately. Reference identity is
* unaffected — this forces the same memos every lazy consumer pulls through.
*
* Call it at module scope on platforms that bill per-request CPU but not
* module evaluation (isolate-based edge/serverless runtimes), where deferring
* construction would move it into the first request of every fresh isolate:
*
* ```ts
* // from '@modelcontextprotocol/server' or '@modelcontextprotocol/client' —
* // each package bundles its own schema copy, so warm the one(s) you import.
* preloadSchemas(); // module scope — runs during isolate warm-up
* ```
*
* On Node CLIs and other process-per-invocation runtimes, prefer the lazy
* default — there, module-scope construction is pure added boot latency.
*/
function preloadSchemas() {
	buildSchemas2025();
	buildSchemas2026();
	warmRegistryMaps2025();
	warmInputSchemaMaps2026();
	warmWireResultSchemas2026();
}
// node_modules/.pnpm/@modelcontextprotocol+server@2.4.0/node_modules/@modelcontextprotocol/server/dist/cfWorkerProvider-hgYAfIZf.mjs
function deepCompareStrict(a, b) {
	const typeofa = typeof a;
	if (typeofa !== typeof b) return false;
	if (Array.isArray(a)) {
		if (!Array.isArray(b)) return false;
		const length = a.length;
		if (length !== b.length) return false;
		for (let i = 0; i < length; i++) if (!deepCompareStrict(a[i], b[i])) return false;
		return true;
	}
	if (typeofa === "object") {
		if (!a || !b) return a === b;
		const aKeys = Object.keys(a);
		const bKeys = Object.keys(b);
		if (aKeys.length !== bKeys.length) return false;
		for (const k of aKeys) if (!deepCompareStrict(a[k], b[k])) return false;
		return true;
	}
	return a === b;
}
function encodePointer(p) {
	return encodeURI(escapePointer(p));
}
function escapePointer(p) {
	return p.replace(/~/g, "~0").replace(/\//g, "~1");
}
var schemaArrayKeyword = {
	prefixItems: true,
	items: true,
	allOf: true,
	anyOf: true,
	oneOf: true
};
var schemaMapKeyword = {
	$defs: true,
	definitions: true,
	properties: true,
	patternProperties: true,
	dependentSchemas: true
};
var ignoredKeyword = {
	id: true,
	$id: true,
	$ref: true,
	$schema: true,
	$anchor: true,
	$vocabulary: true,
	$comment: true,
	default: true,
	enum: true,
	const: true,
	required: true,
	type: true,
	maximum: true,
	minimum: true,
	exclusiveMaximum: true,
	exclusiveMinimum: true,
	multipleOf: true,
	maxLength: true,
	minLength: true,
	pattern: true,
	format: true,
	maxItems: true,
	minItems: true,
	uniqueItems: true,
	maxProperties: true,
	minProperties: true
};
var initialBaseURI = typeof self !== "undefined" && self.location && self.location.origin !== "null" ? new URL(self.location.origin + self.location.pathname + location.search) : new URL("https://github.com/cfworker");
function dereference(schema, lookup = Object.create(null), baseURI = initialBaseURI, basePointer = "") {
	if (schema && typeof schema === "object" && !Array.isArray(schema)) {
		const id = schema.$id || schema.id;
		if (id) {
			const url = new URL(id, baseURI.href);
			if (url.hash.length > 1) lookup[url.href] = schema;
			else {
				url.hash = "";
				if (basePointer === "") baseURI = url;
				else dereference(schema, lookup, baseURI);
			}
		}
	} else if (schema !== true && schema !== false) return lookup;
	const schemaURI = baseURI.href + (basePointer ? "#" + basePointer : "");
	if (lookup[schemaURI] !== void 0) throw new Error(`Duplicate schema URI "${schemaURI}".`);
	lookup[schemaURI] = schema;
	if (schema === true || schema === false) return lookup;
	if (schema.__absolute_uri__ === void 0) Object.defineProperty(schema, "__absolute_uri__", {
		enumerable: false,
		value: schemaURI
	});
	if (schema.$ref && schema.__absolute_ref__ === void 0) {
		const url = new URL(schema.$ref, baseURI.href);
		url.hash = url.hash;
		Object.defineProperty(schema, "__absolute_ref__", {
			enumerable: false,
			value: url.href
		});
	}
	if (schema.$recursiveRef && schema.__absolute_recursive_ref__ === void 0) {
		const url = new URL(schema.$recursiveRef, baseURI.href);
		url.hash = url.hash;
		Object.defineProperty(schema, "__absolute_recursive_ref__", {
			enumerable: false,
			value: url.href
		});
	}
	if (schema.$anchor) {
		const url = new URL("#" + schema.$anchor, baseURI.href);
		lookup[url.href] = schema;
	}
	for (let key in schema) {
		if (ignoredKeyword[key]) continue;
		const keyBase = `${basePointer}/${encodePointer(key)}`;
		const subSchema = schema[key];
		if (Array.isArray(subSchema)) {
			if (schemaArrayKeyword[key]) {
				const length = subSchema.length;
				for (let i = 0; i < length; i++) dereference(subSchema[i], lookup, baseURI, `${keyBase}/${i}`);
			}
		} else if (schemaMapKeyword[key]) for (let subKey in subSchema) dereference(subSchema[subKey], lookup, baseURI, `${keyBase}/${encodePointer(subKey)}`);
		else dereference(subSchema, lookup, baseURI, keyBase);
	}
	return lookup;
}
var DATE = /^(\d\d\d\d)-(\d\d)-(\d\d)$/;
var DAYS = [
	0,
	31,
	28,
	31,
	30,
	31,
	30,
	31,
	31,
	30,
	31,
	30,
	31
];
var TIME = /^(\d\d):(\d\d):(\d\d)(\.\d+)?(z|[+-]\d\d(?::?\d\d)?)?$/i;
var HOSTNAME = /^(?=.{1,253}\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?$/i;
var URIREF = /^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i;
var URITEMPLATE = /^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i;
var URL_ = /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u{00a1}-\u{ffff}0-9]+-?)*[a-z\u{00a1}-\u{ffff}0-9]+)(?:\.(?:[a-z\u{00a1}-\u{ffff}0-9]+-?)*[a-z\u{00a1}-\u{ffff}0-9]+)*(?:\.(?:[a-z\u{00a1}-\u{ffff}]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/iu;
var UUID = /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i;
var JSON_POINTER = /^(?:\/(?:[^~/]|~0|~1)*)*$/;
var JSON_POINTER_URI_FRAGMENT = /^#(?:\/(?:[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i;
var RELATIVE_JSON_POINTER = /^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/;
var EMAIL = (input) => {
	if (input[0] === "\"") return false;
	const [name, host, ...rest] = input.split("@");
	if (!name || !host || rest.length !== 0 || name.length > 64 || host.length > 253) return false;
	if (name[0] === "." || name.endsWith(".") || name.includes("..")) return false;
	if (!/^[a-z0-9.-]+$/i.test(host) || !/^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+$/i.test(name)) return false;
	return host.split(".").every((part) => /^[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?$/i.test(part));
};
var IPV4 = /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/;
var IPV6 = /^((([0-9a-f]{1,4}:){7}([0-9a-f]{1,4}|:))|(([0-9a-f]{1,4}:){6}(:[0-9a-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){5}(((:[0-9a-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){4}(((:[0-9a-f]{1,4}){1,3})|((:[0-9a-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){3}(((:[0-9a-f]{1,4}){1,4})|((:[0-9a-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){2}(((:[0-9a-f]{1,4}){1,5})|((:[0-9a-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){1}(((:[0-9a-f]{1,4}){1,6})|((:[0-9a-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9a-f]{1,4}){1,7})|((:[0-9a-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))$/i;
var DURATION = (input) => input.length > 1 && input.length < 80 && (/^P\d+([.,]\d+)?W$/.test(input) || /^P[\dYMDTHS]*(\d[.,]\d+)?[YMDHS]$/.test(input) && /^P([.,\d]+Y)?([.,\d]+M)?([.,\d]+D)?(T([.,\d]+H)?([.,\d]+M)?([.,\d]+S)?)?$/.test(input));
function bind(r) {
	return r.test.bind(r);
}
var format = {
	date,
	time: time.bind(void 0, false),
	"date-time": date_time,
	duration: DURATION,
	uri,
	"uri-reference": bind(URIREF),
	"uri-template": bind(URITEMPLATE),
	url: bind(URL_),
	email: EMAIL,
	hostname: bind(HOSTNAME),
	ipv4: bind(IPV4),
	ipv6: bind(IPV6),
	regex,
	uuid: bind(UUID),
	"json-pointer": bind(JSON_POINTER),
	"json-pointer-uri-fragment": bind(JSON_POINTER_URI_FRAGMENT),
	"relative-json-pointer": bind(RELATIVE_JSON_POINTER)
};
function isLeapYear(year) {
	return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}
function date(str) {
	const matches = str.match(DATE);
	if (!matches) return false;
	const year = +matches[1];
	const month = +matches[2];
	const day = +matches[3];
	return month >= 1 && month <= 12 && day >= 1 && day <= (month == 2 && isLeapYear(year) ? 29 : DAYS[month]);
}
function time(full, str) {
	const matches = str.match(TIME);
	if (!matches) return false;
	const hour = +matches[1];
	const minute = +matches[2];
	const second = +matches[3];
	const timeZone = !!matches[5];
	return (hour <= 23 && minute <= 59 && second <= 59 || hour == 23 && minute == 59 && second == 60) && (!full || timeZone);
}
var DATE_TIME_SEPARATOR = /t|\s/i;
function date_time(str) {
	const dateTime = str.split(DATE_TIME_SEPARATOR);
	return dateTime.length == 2 && date(dateTime[0]) && time(true, dateTime[1]);
}
var NOT_URI_FRAGMENT = /\/|:/;
var URI_PATTERN = /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i;
function uri(str) {
	return NOT_URI_FRAGMENT.test(str) && URI_PATTERN.test(str);
}
var Z_ANCHOR = /[^\\]\\Z/;
function regex(str) {
	if (Z_ANCHOR.test(str)) return false;
	try {
		new RegExp(str, "u");
		return true;
	} catch (e) {
		return false;
	}
}
function ucs2length(s) {
	let result = 0;
	let length = s.length;
	let index = 0;
	let charCode;
	while (index < length) {
		result++;
		charCode = s.charCodeAt(index++);
		if (charCode >= 55296 && charCode <= 56319 && index < length) {
			charCode = s.charCodeAt(index);
			if ((charCode & 64512) == 56320) index++;
		}
	}
	return result;
}
function validate(instance, schema, draft = "2019-09", lookup = dereference(schema), shortCircuit = true, recursiveAnchor = null, instanceLocation = "#", schemaLocation = "#", evaluated = Object.create(null)) {
	if (schema === true) return {
		valid: true,
		errors: []
	};
	if (schema === false) return {
		valid: false,
		errors: [{
			instanceLocation,
			keyword: "false",
			keywordLocation: instanceLocation,
			error: "False boolean schema."
		}]
	};
	const rawInstanceType = typeof instance;
	let instanceType;
	switch (rawInstanceType) {
		case "boolean":
		case "number":
		case "string":
			instanceType = rawInstanceType;
			break;
		case "object":
			if (instance === null) instanceType = "null";
			else if (Array.isArray(instance)) instanceType = "array";
			else instanceType = "object";
			break;
		default: throw new Error(`Instances of "${rawInstanceType}" type are not supported.`);
	}
	const { $ref, $recursiveRef, $recursiveAnchor, type: $type, const: $const, enum: $enum, required: $required, not: $not, anyOf: $anyOf, allOf: $allOf, oneOf: $oneOf, if: $if, then: $then, else: $else, format: $format, properties: $properties, patternProperties: $patternProperties, additionalProperties: $additionalProperties, unevaluatedProperties: $unevaluatedProperties, minProperties: $minProperties, maxProperties: $maxProperties, propertyNames: $propertyNames, dependentRequired: $dependentRequired, dependentSchemas: $dependentSchemas, dependencies: $dependencies, prefixItems: $prefixItems, items: $items, additionalItems: $additionalItems, unevaluatedItems: $unevaluatedItems, contains: $contains, minContains: $minContains, maxContains: $maxContains, minItems: $minItems, maxItems: $maxItems, uniqueItems: $uniqueItems, minimum: $minimum, maximum: $maximum, exclusiveMinimum: $exclusiveMinimum, exclusiveMaximum: $exclusiveMaximum, multipleOf: $multipleOf, minLength: $minLength, maxLength: $maxLength, pattern: $pattern, __absolute_ref__, __absolute_recursive_ref__ } = schema;
	const errors = [];
	if ($recursiveAnchor === true && recursiveAnchor === null) recursiveAnchor = schema;
	if ($recursiveRef === "#") {
		const refSchema = recursiveAnchor === null ? lookup[__absolute_recursive_ref__] : recursiveAnchor;
		const keywordLocation = `${schemaLocation}/$recursiveRef`;
		const result = validate(instance, recursiveAnchor === null ? schema : recursiveAnchor, draft, lookup, shortCircuit, refSchema, instanceLocation, keywordLocation, evaluated);
		if (!result.valid) errors.push({
			instanceLocation,
			keyword: "$recursiveRef",
			keywordLocation,
			error: "A subschema had errors."
		}, ...result.errors);
	}
	if ($ref !== void 0) {
		const refSchema = lookup[__absolute_ref__ || $ref];
		if (refSchema === void 0) {
			let message = `Unresolved $ref "${$ref}".`;
			if (__absolute_ref__ && __absolute_ref__ !== $ref) message += `  Absolute URI "${__absolute_ref__}".`;
			message += `\nKnown schemas:\n- ${Object.keys(lookup).join("\n- ")}`;
			throw new Error(message);
		}
		const keywordLocation = `${schemaLocation}/$ref`;
		const result = validate(instance, refSchema, draft, lookup, shortCircuit, recursiveAnchor, instanceLocation, keywordLocation, evaluated);
		if (!result.valid) errors.push({
			instanceLocation,
			keyword: "$ref",
			keywordLocation,
			error: "A subschema had errors."
		}, ...result.errors);
		if (draft === "4" || draft === "7") return {
			valid: errors.length === 0,
			errors
		};
	}
	if (Array.isArray($type)) {
		let length = $type.length;
		let valid = false;
		for (let i = 0; i < length; i++) if (instanceType === $type[i] || $type[i] === "integer" && instanceType === "number" && instance % 1 === 0 && instance === instance) {
			valid = true;
			break;
		}
		if (!valid) errors.push({
			instanceLocation,
			keyword: "type",
			keywordLocation: `${schemaLocation}/type`,
			error: `Instance type "${instanceType}" is invalid. Expected "${$type.join("\", \"")}".`
		});
	} else if ($type === "integer") {
		if (instanceType !== "number" || instance % 1 || instance !== instance) errors.push({
			instanceLocation,
			keyword: "type",
			keywordLocation: `${schemaLocation}/type`,
			error: `Instance type "${instanceType}" is invalid. Expected "${$type}".`
		});
	} else if ($type !== void 0 && instanceType !== $type) errors.push({
		instanceLocation,
		keyword: "type",
		keywordLocation: `${schemaLocation}/type`,
		error: `Instance type "${instanceType}" is invalid. Expected "${$type}".`
	});
	if ($const !== void 0) {
		if (instanceType === "object" || instanceType === "array") {
			if (!deepCompareStrict(instance, $const)) errors.push({
				instanceLocation,
				keyword: "const",
				keywordLocation: `${schemaLocation}/const`,
				error: `Instance does not match ${JSON.stringify($const)}.`
			});
		} else if (instance !== $const) errors.push({
			instanceLocation,
			keyword: "const",
			keywordLocation: `${schemaLocation}/const`,
			error: `Instance does not match ${JSON.stringify($const)}.`
		});
	}
	if ($enum !== void 0) {
		if (instanceType === "object" || instanceType === "array") {
			if (!$enum.some((value) => deepCompareStrict(instance, value))) errors.push({
				instanceLocation,
				keyword: "enum",
				keywordLocation: `${schemaLocation}/enum`,
				error: `Instance does not match any of ${JSON.stringify($enum)}.`
			});
		} else if (!$enum.some((value) => instance === value)) errors.push({
			instanceLocation,
			keyword: "enum",
			keywordLocation: `${schemaLocation}/enum`,
			error: `Instance does not match any of ${JSON.stringify($enum)}.`
		});
	}
	if ($not !== void 0) {
		const keywordLocation = `${schemaLocation}/not`;
		if (validate(instance, $not, draft, lookup, shortCircuit, recursiveAnchor, instanceLocation, keywordLocation).valid) errors.push({
			instanceLocation,
			keyword: "not",
			keywordLocation,
			error: "Instance matched \"not\" schema."
		});
	}
	let subEvaluateds = [];
	if ($anyOf !== void 0) {
		const keywordLocation = `${schemaLocation}/anyOf`;
		const errorsLength = errors.length;
		let anyValid = false;
		for (let i = 0; i < $anyOf.length; i++) {
			const subSchema = $anyOf[i];
			const subEvaluated = Object.create(evaluated);
			const result = validate(instance, subSchema, draft, lookup, shortCircuit, $recursiveAnchor === true ? recursiveAnchor : null, instanceLocation, `${keywordLocation}/${i}`, subEvaluated);
			errors.push(...result.errors);
			anyValid = anyValid || result.valid;
			if (result.valid) subEvaluateds.push(subEvaluated);
		}
		if (anyValid) errors.length = errorsLength;
		else errors.splice(errorsLength, 0, {
			instanceLocation,
			keyword: "anyOf",
			keywordLocation,
			error: "Instance does not match any subschemas."
		});
	}
	if ($allOf !== void 0) {
		const keywordLocation = `${schemaLocation}/allOf`;
		const errorsLength = errors.length;
		let allValid = true;
		for (let i = 0; i < $allOf.length; i++) {
			const subSchema = $allOf[i];
			const subEvaluated = Object.create(evaluated);
			const result = validate(instance, subSchema, draft, lookup, shortCircuit, $recursiveAnchor === true ? recursiveAnchor : null, instanceLocation, `${keywordLocation}/${i}`, subEvaluated);
			errors.push(...result.errors);
			allValid = allValid && result.valid;
			if (result.valid) subEvaluateds.push(subEvaluated);
		}
		if (allValid) errors.length = errorsLength;
		else errors.splice(errorsLength, 0, {
			instanceLocation,
			keyword: "allOf",
			keywordLocation,
			error: `Instance does not match every subschema.`
		});
	}
	if ($oneOf !== void 0) {
		const keywordLocation = `${schemaLocation}/oneOf`;
		const errorsLength = errors.length;
		const matches = $oneOf.filter((subSchema, i) => {
			const subEvaluated = Object.create(evaluated);
			const result = validate(instance, subSchema, draft, lookup, shortCircuit, $recursiveAnchor === true ? recursiveAnchor : null, instanceLocation, `${keywordLocation}/${i}`, subEvaluated);
			errors.push(...result.errors);
			if (result.valid) subEvaluateds.push(subEvaluated);
			return result.valid;
		}).length;
		if (matches === 1) errors.length = errorsLength;
		else errors.splice(errorsLength, 0, {
			instanceLocation,
			keyword: "oneOf",
			keywordLocation,
			error: `Instance does not match exactly one subschema (${matches} matches).`
		});
	}
	if (instanceType === "object" || instanceType === "array") Object.assign(evaluated, ...subEvaluateds);
	if ($if !== void 0) {
		const keywordLocation = `${schemaLocation}/if`;
		if (validate(instance, $if, draft, lookup, shortCircuit, recursiveAnchor, instanceLocation, keywordLocation, evaluated).valid) {
			if ($then !== void 0) {
				const thenResult = validate(instance, $then, draft, lookup, shortCircuit, recursiveAnchor, instanceLocation, `${schemaLocation}/then`, evaluated);
				if (!thenResult.valid) errors.push({
					instanceLocation,
					keyword: "if",
					keywordLocation,
					error: `Instance does not match "then" schema.`
				}, ...thenResult.errors);
			}
		} else if ($else !== void 0) {
			const elseResult = validate(instance, $else, draft, lookup, shortCircuit, recursiveAnchor, instanceLocation, `${schemaLocation}/else`, evaluated);
			if (!elseResult.valid) errors.push({
				instanceLocation,
				keyword: "if",
				keywordLocation,
				error: `Instance does not match "else" schema.`
			}, ...elseResult.errors);
		}
	}
	if (instanceType === "object") {
		if ($required !== void 0) {
			for (const key of $required) if (!(key in instance)) errors.push({
				instanceLocation,
				keyword: "required",
				keywordLocation: `${schemaLocation}/required`,
				error: `Instance does not have required property "${key}".`
			});
		}
		const keys = Object.keys(instance);
		if ($minProperties !== void 0 && keys.length < $minProperties) errors.push({
			instanceLocation,
			keyword: "minProperties",
			keywordLocation: `${schemaLocation}/minProperties`,
			error: `Instance does not have at least ${$minProperties} properties.`
		});
		if ($maxProperties !== void 0 && keys.length > $maxProperties) errors.push({
			instanceLocation,
			keyword: "maxProperties",
			keywordLocation: `${schemaLocation}/maxProperties`,
			error: `Instance does not have at least ${$maxProperties} properties.`
		});
		if ($propertyNames !== void 0) {
			const keywordLocation = `${schemaLocation}/propertyNames`;
			for (const key in instance) {
				const subInstancePointer = `${instanceLocation}/${encodePointer(key)}`;
				const result = validate(key, $propertyNames, draft, lookup, shortCircuit, recursiveAnchor, subInstancePointer, keywordLocation);
				if (!result.valid) errors.push({
					instanceLocation,
					keyword: "propertyNames",
					keywordLocation,
					error: `Property name "${key}" does not match schema.`
				}, ...result.errors);
			}
		}
		if ($dependentRequired !== void 0) {
			const keywordLocation = `${schemaLocation}/dependantRequired`;
			for (const key in $dependentRequired) if (key in instance) {
				const required = $dependentRequired[key];
				for (const dependantKey of required) if (!(dependantKey in instance)) errors.push({
					instanceLocation,
					keyword: "dependentRequired",
					keywordLocation,
					error: `Instance has "${key}" but does not have "${dependantKey}".`
				});
			}
		}
		if ($dependentSchemas !== void 0) for (const key in $dependentSchemas) {
			const keywordLocation = `${schemaLocation}/dependentSchemas`;
			if (key in instance) {
				const result = validate(instance, $dependentSchemas[key], draft, lookup, shortCircuit, recursiveAnchor, instanceLocation, `${keywordLocation}/${encodePointer(key)}`, evaluated);
				if (!result.valid) errors.push({
					instanceLocation,
					keyword: "dependentSchemas",
					keywordLocation,
					error: `Instance has "${key}" but does not match dependant schema.`
				}, ...result.errors);
			}
		}
		if ($dependencies !== void 0) {
			const keywordLocation = `${schemaLocation}/dependencies`;
			for (const key in $dependencies) if (key in instance) {
				const propsOrSchema = $dependencies[key];
				if (Array.isArray(propsOrSchema)) {
					for (const dependantKey of propsOrSchema) if (!(dependantKey in instance)) errors.push({
						instanceLocation,
						keyword: "dependencies",
						keywordLocation,
						error: `Instance has "${key}" but does not have "${dependantKey}".`
					});
				} else {
					const result = validate(instance, propsOrSchema, draft, lookup, shortCircuit, recursiveAnchor, instanceLocation, `${keywordLocation}/${encodePointer(key)}`);
					if (!result.valid) errors.push({
						instanceLocation,
						keyword: "dependencies",
						keywordLocation,
						error: `Instance has "${key}" but does not match dependant schema.`
					}, ...result.errors);
				}
			}
		}
		const thisEvaluated = Object.create(null);
		let stop = false;
		if ($properties !== void 0) {
			const keywordLocation = `${schemaLocation}/properties`;
			for (const key in $properties) {
				if (!(key in instance)) continue;
				const subInstancePointer = `${instanceLocation}/${encodePointer(key)}`;
				const result = validate(instance[key], $properties[key], draft, lookup, shortCircuit, recursiveAnchor, subInstancePointer, `${keywordLocation}/${encodePointer(key)}`);
				if (result.valid) evaluated[key] = thisEvaluated[key] = true;
				else {
					stop = shortCircuit;
					errors.push({
						instanceLocation,
						keyword: "properties",
						keywordLocation,
						error: `Property "${key}" does not match schema.`
					}, ...result.errors);
					if (stop) break;
				}
			}
		}
		if (!stop && $patternProperties !== void 0) {
			const keywordLocation = `${schemaLocation}/patternProperties`;
			for (const pattern in $patternProperties) {
				const regex$1 = new RegExp(pattern, "u");
				const subSchema = $patternProperties[pattern];
				for (const key in instance) {
					if (!regex$1.test(key)) continue;
					const subInstancePointer = `${instanceLocation}/${encodePointer(key)}`;
					const result = validate(instance[key], subSchema, draft, lookup, shortCircuit, recursiveAnchor, subInstancePointer, `${keywordLocation}/${encodePointer(pattern)}`);
					if (result.valid) evaluated[key] = thisEvaluated[key] = true;
					else {
						stop = shortCircuit;
						errors.push({
							instanceLocation,
							keyword: "patternProperties",
							keywordLocation,
							error: `Property "${key}" matches pattern "${pattern}" but does not match associated schema.`
						}, ...result.errors);
					}
				}
			}
		}
		if (!stop && $additionalProperties !== void 0) {
			const keywordLocation = `${schemaLocation}/additionalProperties`;
			for (const key in instance) {
				if (thisEvaluated[key]) continue;
				const subInstancePointer = `${instanceLocation}/${encodePointer(key)}`;
				const result = validate(instance[key], $additionalProperties, draft, lookup, shortCircuit, recursiveAnchor, subInstancePointer, keywordLocation);
				if (result.valid) evaluated[key] = true;
				else {
					stop = shortCircuit;
					errors.push({
						instanceLocation,
						keyword: "additionalProperties",
						keywordLocation,
						error: `Property "${key}" does not match additional properties schema.`
					}, ...result.errors);
				}
			}
		} else if (!stop && $unevaluatedProperties !== void 0) {
			const keywordLocation = `${schemaLocation}/unevaluatedProperties`;
			for (const key in instance) if (!evaluated[key]) {
				const subInstancePointer = `${instanceLocation}/${encodePointer(key)}`;
				const result = validate(instance[key], $unevaluatedProperties, draft, lookup, shortCircuit, recursiveAnchor, subInstancePointer, keywordLocation);
				if (result.valid) evaluated[key] = true;
				else errors.push({
					instanceLocation,
					keyword: "unevaluatedProperties",
					keywordLocation,
					error: `Property "${key}" does not match unevaluated properties schema.`
				}, ...result.errors);
			}
		}
	} else if (instanceType === "array") {
		if ($maxItems !== void 0 && instance.length > $maxItems) errors.push({
			instanceLocation,
			keyword: "maxItems",
			keywordLocation: `${schemaLocation}/maxItems`,
			error: `Array has too many items (${instance.length} > ${$maxItems}).`
		});
		if ($minItems !== void 0 && instance.length < $minItems) errors.push({
			instanceLocation,
			keyword: "minItems",
			keywordLocation: `${schemaLocation}/minItems`,
			error: `Array has too few items (${instance.length} < ${$minItems}).`
		});
		const length = instance.length;
		let i = 0;
		let stop = false;
		if ($prefixItems !== void 0) {
			const keywordLocation = `${schemaLocation}/prefixItems`;
			const length2 = Math.min($prefixItems.length, length);
			for (; i < length2; i++) {
				const result = validate(instance[i], $prefixItems[i], draft, lookup, shortCircuit, recursiveAnchor, `${instanceLocation}/${i}`, `${keywordLocation}/${i}`);
				evaluated[i] = true;
				if (!result.valid) {
					stop = shortCircuit;
					errors.push({
						instanceLocation,
						keyword: "prefixItems",
						keywordLocation,
						error: `Items did not match schema.`
					}, ...result.errors);
					if (stop) break;
				}
			}
		}
		if ($items !== void 0) {
			const keywordLocation = `${schemaLocation}/items`;
			if (Array.isArray($items)) {
				const length2 = Math.min($items.length, length);
				for (; i < length2; i++) {
					const result = validate(instance[i], $items[i], draft, lookup, shortCircuit, recursiveAnchor, `${instanceLocation}/${i}`, `${keywordLocation}/${i}`);
					evaluated[i] = true;
					if (!result.valid) {
						stop = shortCircuit;
						errors.push({
							instanceLocation,
							keyword: "items",
							keywordLocation,
							error: `Items did not match schema.`
						}, ...result.errors);
						if (stop) break;
					}
				}
			} else for (; i < length; i++) {
				const result = validate(instance[i], $items, draft, lookup, shortCircuit, recursiveAnchor, `${instanceLocation}/${i}`, keywordLocation);
				evaluated[i] = true;
				if (!result.valid) {
					stop = shortCircuit;
					errors.push({
						instanceLocation,
						keyword: "items",
						keywordLocation,
						error: `Items did not match schema.`
					}, ...result.errors);
					if (stop) break;
				}
			}
			if (!stop && $additionalItems !== void 0) {
				const keywordLocation$1 = `${schemaLocation}/additionalItems`;
				for (; i < length; i++) {
					const result = validate(instance[i], $additionalItems, draft, lookup, shortCircuit, recursiveAnchor, `${instanceLocation}/${i}`, keywordLocation$1);
					evaluated[i] = true;
					if (!result.valid) {
						stop = shortCircuit;
						errors.push({
							instanceLocation,
							keyword: "additionalItems",
							keywordLocation: keywordLocation$1,
							error: `Items did not match additional items schema.`
						}, ...result.errors);
					}
				}
			}
		}
		if ($contains !== void 0) if (length === 0 && $minContains === void 0) errors.push({
			instanceLocation,
			keyword: "contains",
			keywordLocation: `${schemaLocation}/contains`,
			error: `Array is empty. It must contain at least one item matching the schema.`
		});
		else if ($minContains !== void 0 && length < $minContains) errors.push({
			instanceLocation,
			keyword: "minContains",
			keywordLocation: `${schemaLocation}/minContains`,
			error: `Array has less items (${length}) than minContains (${$minContains}).`
		});
		else {
			const keywordLocation = `${schemaLocation}/contains`;
			const errorsLength = errors.length;
			let contained = 0;
			for (let j = 0; j < length; j++) {
				const result = validate(instance[j], $contains, draft, lookup, shortCircuit, recursiveAnchor, `${instanceLocation}/${j}`, keywordLocation);
				if (result.valid) {
					evaluated[j] = true;
					contained++;
				} else errors.push(...result.errors);
			}
			if (contained >= ($minContains || 0)) errors.length = errorsLength;
			if ($minContains === void 0 && $maxContains === void 0 && contained === 0) errors.splice(errorsLength, 0, {
				instanceLocation,
				keyword: "contains",
				keywordLocation,
				error: `Array does not contain item matching schema.`
			});
			else if ($minContains !== void 0 && contained < $minContains) errors.push({
				instanceLocation,
				keyword: "minContains",
				keywordLocation: `${schemaLocation}/minContains`,
				error: `Array must contain at least ${$minContains} items matching schema. Only ${contained} items were found.`
			});
			else if ($maxContains !== void 0 && contained > $maxContains) errors.push({
				instanceLocation,
				keyword: "maxContains",
				keywordLocation: `${schemaLocation}/maxContains`,
				error: `Array may contain at most ${$maxContains} items matching schema. ${contained} items were found.`
			});
		}
		if (!stop && $unevaluatedItems !== void 0) {
			const keywordLocation = `${schemaLocation}/unevaluatedItems`;
			for (; i < length; i++) {
				if (evaluated[i]) continue;
				const result = validate(instance[i], $unevaluatedItems, draft, lookup, shortCircuit, recursiveAnchor, `${instanceLocation}/${i}`, keywordLocation);
				evaluated[i] = true;
				if (!result.valid) errors.push({
					instanceLocation,
					keyword: "unevaluatedItems",
					keywordLocation,
					error: `Items did not match unevaluated items schema.`
				}, ...result.errors);
			}
		}
		if ($uniqueItems) for (let j = 0; j < length; j++) {
			const a = instance[j];
			const ao = typeof a === "object" && a !== null;
			for (let k = 0; k < length; k++) {
				if (j === k) continue;
				const b = instance[k];
				if (a === b || ao && typeof b === "object" && b !== null && deepCompareStrict(a, b)) {
					errors.push({
						instanceLocation,
						keyword: "uniqueItems",
						keywordLocation: `${schemaLocation}/uniqueItems`,
						error: `Duplicate items at indexes ${j} and ${k}.`
					});
					j = Number.MAX_SAFE_INTEGER;
					k = Number.MAX_SAFE_INTEGER;
				}
			}
		}
	} else if (instanceType === "number") {
		if (draft === "4") {
			if ($minimum !== void 0 && ($exclusiveMinimum === true && instance <= $minimum || instance < $minimum)) errors.push({
				instanceLocation,
				keyword: "minimum",
				keywordLocation: `${schemaLocation}/minimum`,
				error: `${instance} is less than ${$exclusiveMinimum ? "or equal to " : ""} ${$minimum}.`
			});
			if ($maximum !== void 0 && ($exclusiveMaximum === true && instance >= $maximum || instance > $maximum)) errors.push({
				instanceLocation,
				keyword: "maximum",
				keywordLocation: `${schemaLocation}/maximum`,
				error: `${instance} is greater than ${$exclusiveMaximum ? "or equal to " : ""} ${$maximum}.`
			});
		} else {
			if ($minimum !== void 0 && instance < $minimum) errors.push({
				instanceLocation,
				keyword: "minimum",
				keywordLocation: `${schemaLocation}/minimum`,
				error: `${instance} is less than ${$minimum}.`
			});
			if ($maximum !== void 0 && instance > $maximum) errors.push({
				instanceLocation,
				keyword: "maximum",
				keywordLocation: `${schemaLocation}/maximum`,
				error: `${instance} is greater than ${$maximum}.`
			});
			if ($exclusiveMinimum !== void 0 && instance <= $exclusiveMinimum) errors.push({
				instanceLocation,
				keyword: "exclusiveMinimum",
				keywordLocation: `${schemaLocation}/exclusiveMinimum`,
				error: `${instance} is less than ${$exclusiveMinimum}.`
			});
			if ($exclusiveMaximum !== void 0 && instance >= $exclusiveMaximum) errors.push({
				instanceLocation,
				keyword: "exclusiveMaximum",
				keywordLocation: `${schemaLocation}/exclusiveMaximum`,
				error: `${instance} is greater than or equal to ${$exclusiveMaximum}.`
			});
		}
		if ($multipleOf !== void 0) {
			const remainder = instance % $multipleOf;
			if (Math.abs(0 - remainder) >= 1.1920929e-7 && Math.abs($multipleOf - remainder) >= 1.1920929e-7) errors.push({
				instanceLocation,
				keyword: "multipleOf",
				keywordLocation: `${schemaLocation}/multipleOf`,
				error: `${instance} is not a multiple of ${$multipleOf}.`
			});
		}
	} else if (instanceType === "string") {
		const length = $minLength === void 0 && $maxLength === void 0 ? 0 : ucs2length(instance);
		if ($minLength !== void 0 && length < $minLength) errors.push({
			instanceLocation,
			keyword: "minLength",
			keywordLocation: `${schemaLocation}/minLength`,
			error: `String is too short (${length} < ${$minLength}).`
		});
		if ($maxLength !== void 0 && length > $maxLength) errors.push({
			instanceLocation,
			keyword: "maxLength",
			keywordLocation: `${schemaLocation}/maxLength`,
			error: `String is too long (${length} > ${$maxLength}).`
		});
		if ($pattern !== void 0 && !new RegExp($pattern, "u").test(instance)) errors.push({
			instanceLocation,
			keyword: "pattern",
			keywordLocation: `${schemaLocation}/pattern`,
			error: `String does not match pattern.`
		});
		if ($format !== void 0 && format[$format] && !format[$format](instance)) errors.push({
			instanceLocation,
			keyword: "format",
			keywordLocation: `${schemaLocation}/format`,
			error: `String does not match format "${$format}".`
		});
	}
	return {
		valid: errors.length === 0,
		errors
	};
}
var Validator = class {
	schema;
	draft;
	shortCircuit;
	lookup;
	constructor(schema, draft = "2019-09", shortCircuit = true) {
		this.schema = schema;
		this.draft = draft;
		this.shortCircuit = shortCircuit;
		this.lookup = dereference(schema);
	}
	validate(instance) {
		return validate(instance, this.schema, this.draft, this.lookup, this.shortCircuit);
	}
	addSchema(schema, id) {
		if (id) schema = {
			...schema,
			$id: id
		};
		dereference(schema, this.lookup);
	}
};
/**
* Cloudflare Worker-compatible JSON Schema validator provider
*
* This provider uses @cfworker/json-schema for validation without code generation,
* making it compatible with edge runtimes like Cloudflare Workers that restrict
* eval and new Function.
*
* @see {@linkcode AjvJsonSchemaValidator} for the Node.js alternative
*/
/**
* `@cfworker/json-schema`-backed JSON Schema validator. See
* `@modelcontextprotocol/{client,server}/validators/cf-worker` for the customisation entry point.
*
* Default dispatches on the schema's declared dialect: no `$schema` or 2020-12 → `'2020-12'`
* (SEP-1613); 2019-09 → `'2019-09'`; draft-07 or draft-06 → `'7'`. Schemas declaring any other `$schema` are rejected
* with a plain `Error`. Passing an explicit `draft` to the constructor
* overrides this — that draft is used for every schema regardless of `$schema`.
*
* Known draft-07 engine gap: `@cfworker/json-schema` does not treat draft-07 `dependencies` as
* a name→subschema map during `$ref` collection, so a dependency entry whose KEY collides with
* a JSON Schema keyword (`type`, `default`, `format`, `required`, `pattern`, …) and whose
* subschema contains a `$ref` throws `Unresolved $ref` at validation time when the dependency
* triggers — data-dependently, not at compile. The Node (classic Ajv) engine handles the same
* schema correctly. Callers that hit this receive the SDK's typed validation error (the throw
* is captured by the validation paths), and the deviation is pinned by a recorded-contract test.
*
* @example Use with default configuration (2020-12, shortcircuit on)
* ```ts source="./cfWorkerProvider.examples.ts#CfWorkerJsonSchemaValidator_default"
* const validator = new CfWorkerJsonSchemaValidator();
* ```
*
* @example Use with custom configuration
* ```ts source="./cfWorkerProvider.examples.ts#CfWorkerJsonSchemaValidator_customConfig"
* const validator = new CfWorkerJsonSchemaValidator({
*     draft: '2020-12',
*     shortcircuit: false // Report all errors
* });
* ```
*/
var CfWorkerJsonSchemaValidator = class {
	shortcircuit;
	/** Caller-supplied draft; when set, the `$schema` check is skipped (caller owns dialect). */
	draft;
	/**
	* Create a validator
	*
	* @param options - Configuration options
	* @param options.shortcircuit - If `true`, stop validation after first error (default: `true`)
	* @param options.draft - JSON Schema draft version to force for every schema. When set, the
	* `$schema` dispatch is skipped. When omitted, the provider dispatches on each schema's
	* declared `$schema` (2020-12, 2019-09, draft-07, draft-06; absent means 2020-12) and rejects others.
	*/
	constructor(options) {
		this.shortcircuit = options?.shortcircuit ?? true;
		this.draft = options?.draft;
	}
	/**
	* Pick the engine draft for a schema's declared dialect (a caller-forced `{draft}` bypasses
	* this — do not second-guess by `$schema`). No `$schema` or 2020-12 → `'2020-12'`; 2019-09 →
	* `'2019-09'`; draft-07 or draft-06 → `'7'`; anything else → `Error`.
	*/
	_draftFor(schema) {
		const dialect = declaredDialect(schema, "pass an explicit { draft } to CfWorkerJsonSchemaValidator to validate other dialects.");
		return dialect === "draft-7" ? "7" : dialect;
	}
	/**
	* Create a validator for the given JSON Schema
	*
	* Unlike AJV, this validator is not cached internally
	*
	* @param schema - Standard JSON Schema object
	* @returns A validator function that validates input data
	*/
	getValidator(schema) {
		const validator = new Validator(schema, this.draft ?? this._draftFor(schema), this.shortcircuit);
		return (input) => {
			const result = validator.validate(input);
			return result.valid ? {
				valid: true,
				data: input,
				errorMessage: void 0
			} : {
				valid: false,
				data: void 0,
				errorMessage: result.errors.map((err) => `${err.instanceLocation}: ${err.error}`).join("; ")
			};
		};
	}
};
// node_modules/.pnpm/@modelcontextprotocol+server@2.4.0/node_modules/@modelcontextprotocol/server/dist/shimsWorkerd.mjs
/**
* Cloudflare Workers runtime shims for server package
*
* This file is selected via package.json export conditions when running in workerd.
*/
preloadSchemas();
// node_modules/.pnpm/@modelcontextprotocol+server@2.4.0/node_modules/@modelcontextprotocol/server/dist/mcp-oHn3ureC.mjs
var COMPLETABLE_SYMBOL = Symbol.for("mcp.completable");
/**
* Checks if a schema is completable (has completion metadata).
*/
function isCompletable(schema) {
	return !!schema && typeof schema === "object" && COMPLETABLE_SYMBOL in schema;
}
/**
* Gets the completer callback from a completable schema, if it exists.
*/
function getCompleter(schema) {
	return schema[COMPLETABLE_SYMBOL]?.complete;
}
var MAX_TIMER_DELAY_MS = 2 ** 31 - 1;
/** Arms an unref'd timer, or disables keep-alive for invalid delays. */
function armSseKeepAlive(intervalMs, onTick) {
	if (!Number.isFinite(intervalMs) || intervalMs < 1) return;
	const timer = setInterval(onTick, Math.min(intervalMs, MAX_TIMER_DELAY_MS));
	timer.unref?.();
	return timer;
}
var readClassification;
/**
* The per-request micro-transport: a real, connected `Transport` whose whole
* lifetime is one HTTP exchange. See the module documentation for the
* response shapes it produces.
*
* Connecting a `Server` binds the instance to the classified modern revision
* when its `supportedProtocolVersions` lists it and the SDK implements it.
*/
var PerRequestHTTPServerTransport = class {
	static {
		readClassification = (transport) => transport._classification;
	}
	onclose;
	onerror;
	onmessage;
	_classification;
	_responseMode;
	_started = false;
	_used = false;
	_closed = false;
	_terminalDelivered = false;
	/**
	* `true` only while the inbound message is being delivered synchronously
	* to the connected protocol layer. The pre-handler gates (the era
	* registry gate, the edge→instance handoff check, the missing-handler
	* rejection) answer inside this window; request handlers always run
	* after it (the protocol layer defers them to a microtask). An error
	* sent inside the window is therefore ladder-originated, and an error
	* sent after it is handler-produced.
	*/
	_dispatchWindowOpen = false;
	_requestId;
	_deferredResponse;
	_sse;
	_abortCleanup;
	_keepAliveMs;
	constructor(options) {
		this._classification = options.classification;
		this._responseMode = options.responseMode ?? "auto";
		this._keepAliveMs = options.keepAliveMs ?? 15e3;
	}
	async start() {
		if (this._started) throw new Error("PerRequestHTTPServerTransport is already started");
		this._started = true;
	}
	/**
	* Serves the single exchange: delivers the classified message to the
	* connected server instance and resolves with the HTTP response.
	*
	* Throws when called a second time (the transport is strictly
	* single-use), or before a server has been connected to the transport.
	* The returned promise rejects with a connection-closed error when the
	* transport is closed before a response was produced (for example because
	* the client disconnected).
	*/
	async handleMessage(message, extra) {
		if (this._used) throw new Error("PerRequestHTTPServerTransport serves exactly one exchange; construct a new transport per request");
		if (!this._started || this.onmessage === void 0) throw new Error("PerRequestHTTPServerTransport is not connected: connect a server to this transport before handling a message");
		if (this._closed) throw new Error("PerRequestHTTPServerTransport is closed");
		this._used = true;
		const signal = extra?.request?.signal;
		if (signal?.aborted) {
			await this.close();
			throw new SdkError(SdkErrorCode.ConnectionClosed, "The request was aborted before it could be handled");
		}
		const messageExtra = {
			classification: this._classification,
			...extra?.request !== void 0 && { request: extra.request },
			...extra?.authInfo !== void 0 && { authInfo: extra.authInfo }
		};
		if (isJSONRPCRequest(message)) {
			this._requestId = message.id;
			let resolve;
			let reject;
			const promise = new Promise((promiseResolve, promiseReject) => {
				resolve = promiseResolve;
				reject = promiseReject;
			});
			this._deferredResponse = {
				promise,
				resolve,
				reject,
				settled: false
			};
			if (signal !== void 0) {
				const onAbort = () => void this.close();
				signal.addEventListener("abort", onAbort, { once: true });
				this._abortCleanup = () => signal.removeEventListener("abort", onAbort);
			}
			this._dispatchWindowOpen = true;
			try {
				this.onmessage(message, messageExtra);
			} finally {
				this._dispatchWindowOpen = false;
			}
			if (this._responseMode === "sse" && !this._closed && !this._deferredResponse.settled) this.upgradeToSse();
			return promise;
		}
		this.onmessage(message, messageExtra);
		return new Response(null, { status: 202 });
	}
	async send(message, options) {
		if (this._closed) return;
		const isResponse = isJSONRPCResultResponse(message) || isJSONRPCErrorResponse(message);
		const relatedId = isResponse ? message.id : options?.relatedRequestId;
		if (this._requestId === void 0 || relatedId === void 0 || relatedId !== this._requestId) {
			if (isResponse) this.onerror?.(/* @__PURE__ */ new Error(`Received a response for an unknown request id: ${String(message.id)}`));
			return;
		}
		if (isResponse) {
			if (this._terminalDelivered) return;
			this._terminalDelivered = true;
			const errorCode = isJSONRPCErrorResponse(message) ? message.error.code : void 0;
			const ladderStatus = errorCode !== void 0 && (this._dispatchWindowOpen || errorCode === ProtocolErrorCode.MissingRequiredClientCapability) ? LADDER_ERROR_HTTP_STATUS[errorCode] : void 0;
			if (ladderStatus !== void 0 && this._sse === void 0) {
				this.settleResponse(Response.json(message, {
					status: ladderStatus,
					headers: { "Content-Type": "application/json" }
				}));
				queueMicrotask(() => void this.close());
				return;
			}
			if (this._sse !== void 0 || this._responseMode === "sse") {
				if (this._sse === void 0) this.upgradeToSse();
				this.writeMessageFrame(message);
				this.finalizeStream();
				return;
			}
			this.settleResponse(Response.json(message, {
				status: 200,
				headers: { "Content-Type": "application/json" }
			}));
			queueMicrotask(() => void this.close());
			return;
		}
		if (this._responseMode === "json") return;
		if (this._sse === void 0) this.upgradeToSse();
		this.writeMessageFrame(message);
	}
	/**
	* Writes an SSE comment frame (a keep-alive heartbeat). Dropped when the
	* exchange is not currently streaming.
	*/
	writeCommentFrame(comment) {
		if (this._closed || this._sse === void 0 || this._sse.closed) return;
		const frame = comment.split("\n").map((line) => `: ${line}`).join("\n");
		this.writeFrame(`${frame}\n\n`);
	}
	async close() {
		if (this._closed) return;
		this._closed = true;
		this._abortCleanup?.();
		this._abortCleanup = void 0;
		if (this._sse?.keepAliveTimer !== void 0) clearInterval(this._sse.keepAliveTimer);
		if (this._sse !== void 0 && !this._sse.closed) {
			this._sse.closed = true;
			try {
				this._sse.controller.close();
			} catch {}
		}
		if (this._deferredResponse !== void 0 && !this._deferredResponse.settled) {
			this._deferredResponse.settled = true;
			this._deferredResponse.reject(new SdkError(SdkErrorCode.ConnectionClosed, "Connection closed before a response was produced"));
		}
		this.onclose?.();
	}
	settleResponse(response) {
		if (this._deferredResponse === void 0 || this._deferredResponse.settled) return;
		this._deferredResponse.settled = true;
		this._deferredResponse.resolve(response);
	}
	upgradeToSse() {
		let controller;
		const readable = new ReadableStream({
			start: (streamController) => {
				controller = streamController;
			},
			cancel: () => {
				this.close();
			}
		});
		this._sse = {
			controller,
			encoder: new TextEncoder(),
			closed: false
		};
		this._sse.keepAliveTimer = armSseKeepAlive(this._keepAliveMs, () => this.writeCommentFrame("keepalive"));
		this.settleResponse(new Response(readable, {
			status: 200,
			headers: {
				"Content-Type": "text/event-stream",
				"Cache-Control": "no-cache, no-transform",
				Connection: "keep-alive",
				"X-Accel-Buffering": "no"
			}
		}));
	}
	finalizeStream() {
		if (this._sse?.keepAliveTimer !== void 0) clearInterval(this._sse.keepAliveTimer);
		if (this._sse !== void 0 && !this._sse.closed) {
			this._sse.closed = true;
			try {
				this._sse.controller.close();
			} catch {}
		}
		queueMicrotask(() => void this.close());
	}
	writeMessageFrame(message) {
		this.writeFrame(`event: message\ndata: ${JSON.stringify(message)}\n\n`);
	}
	writeFrame(frame) {
		if (this._sse === void 0 || this._sse.closed) return;
		try {
			this._sse.controller.enqueue(this._sse.encoder.encode(frame));
		} catch (error) {
			this.onerror?.(/* @__PURE__ */ new Error(`Failed to write to the response stream: ${error}`));
		}
	}
};
/** Package-internal: the classification a per-request transport serves; `undefined` for any other transport. Not public API. */
function perRequestClassificationOf(transport) {
	return transport instanceof PerRequestHTTPServerTransport ? readClassification(transport) : void 0;
}
function headerQuotedValue(value) {
	return value.replaceAll(/[\\"]/g, String.raw`\$&`).replaceAll(/[^\u0020-\u007E]/g, " ");
}
/**
* Build a `WWW-Authenticate: Bearer …` challenge header value (RFC 6750).
*
* The single formatter behind every challenge this package emits — the
* bearer-auth 401/403 answers and the per-operation scope-challenge 403 — so
* all challenges from one server agree on parameter order and quoting. Every
* parameter value is emitted as an HTTP quoted-string with `\` and `"`
* escaped and non-printable characters replaced.
*/
function buildWwwAuthenticateHeader(errorCode, description, requiredScopes, resourceMetadataUrl) {
	let header = `Bearer error="${headerQuotedValue(errorCode)}", error_description="${headerQuotedValue(description)}"`;
	if (requiredScopes.length > 0) header += `, scope="${headerQuotedValue(requiredScopes.join(" "))}"`;
	if (resourceMetadataUrl) header += `, resource_metadata="${headerQuotedValue(resourceMetadataUrl)}"`;
	return header;
}
/**
* Build the HTTP answer for a Bearer authentication failure.
*
* Maps an {@link OAuthError} to its status — `401` for `invalid_token` and
* `403` for `insufficient_scope` (both carrying the `WWW-Authenticate: Bearer …`
* challenge, with `resource_metadata` when configured so clients can discover
* the Authorization Server), `500` for `server_error`, `400` for anything
* else. A non-`OAuthError` value answers `500 server_error`. The body is the
* OAuth error JSON.
*/
function bearerAuthChallengeResponse(error, options) {
	const { requiredScopes = [], resourceMetadataUrl } = options ?? {};
	if (!(error instanceof OAuthError)) {
		const serverError = new OAuthError(OAuthErrorCode.ServerError, "Internal Server Error");
		return Response.json(serverError.toResponseObject(), { status: 500 });
	}
	switch (error.code) {
		case OAuthErrorCode.InvalidToken: {
			const challenge = buildWwwAuthenticateHeader(error.code, error.message, requiredScopes, resourceMetadataUrl);
			return Response.json(error.toResponseObject(), {
				status: 401,
				headers: { "WWW-Authenticate": challenge }
			});
		}
		case OAuthErrorCode.InsufficientScope: {
			const challenge = buildWwwAuthenticateHeader(error.code, error.message, requiredScopes, resourceMetadataUrl);
			return Response.json(error.toResponseObject(), {
				status: 403,
				headers: { "WWW-Authenticate": challenge }
			});
		}
		case OAuthErrorCode.ServerError: return Response.json(error.toResponseObject(), { status: 500 });
		default: return Response.json(error.toResponseObject(), { status: 400 });
	}
}
/**
* Builds the RFC 9728 Protected Resource Metadata URL for a given MCP server
* URL by inserting `/.well-known/oauth-protected-resource` ahead of the path.
*
* @example
* ```ts
* getOAuthProtectedResourceMetadataUrl(new URL('https://api.example.com/mcp'))
* // → 'https://api.example.com/.well-known/oauth-protected-resource/mcp'
* ```
*/
function getOAuthProtectedResourceMetadataUrl(serverUrl) {
	const metadataUrl = new URL(serverUrl);
	metadataUrl.pathname = protectedResourceMetadataPath(serverUrl);
	metadataUrl.hash = "";
	return metadataUrl.href;
}
/** The RFC 9728 path-aware well-known path for a resource URL. */
function protectedResourceMetadataPath(resourceServerUrl) {
	const rsPath = stripTrailingSlash(resourceServerUrl.pathname);
	return `/.well-known/oauth-protected-resource${rsPath === "/" ? "" : rsPath}`;
}
function stripTrailingSlash(path) {
	return path.length > 1 && path.endsWith("/") ? path.slice(0, -1) : path;
}
/** @internal */
function supportsScopeChallengeResolver(transport) {
	return typeof transport === "object" && transport !== null && "setScopeChallengeResolver" in transport && typeof transport.setScopeChallengeResolver === "function";
}
function assertScope(scope, location) {
	if (typeof scope !== "string" || !/^[\u0021\u0023-\u005B\u005D-\u007E]+$/.test(scope)) throw new TypeError(`${location} must satisfy the OAuth scope-token grammar`);
}
function validateScopeChallenge(challenge) {
	if (challenge === null || typeof challenge !== "object" || !Array.isArray(challenge.scopes) || challenge.scopes.length === 0) throw new TypeError("scope challenge must contain at least one scope");
	for (const [index, scope] of challenge.scopes.entries()) assertScope(scope, `scope challenge scopes[${index}]`);
	if (challenge.errorDescription !== void 0 && typeof challenge.errorDescription !== "string") throw new TypeError("scope challenge errorDescription must be a string");
	if (challenge.errorDescription !== void 0 && !/^[\u0020-\u0021\u0023-\u005B\u005D-\u007E]+$/.test(challenge.errorDescription)) throw new TypeError("scope challenge errorDescription must satisfy the RFC 6750 error-description grammar");
	return challenge;
}
/** @internal */
async function findScopeChallenge(requests, authInfo, resolve) {
	for (const request of requests) {
		const challenge = await resolve({
			request,
			...authInfo !== void 0 && { authInfo }
		});
		if (challenge !== void 0) return validateScopeChallenge(challenge);
	}
}
/**
* The RFC 9728 Protected Resource Metadata URL to advertise on a scope
* challenge, derived from the verified {@link AuthInfo}: the URL the
* authentication gate stamped (`authInfo.resourceMetadataUrl`, set by the
* bearer-auth helpers from their `resourceMetadataUrl` option), falling back
* to the well-known location for an HTTP(S) RFC 8707 `resource` identifier, or
* `undefined` when neither is available (the `resource_metadata` parameter is
* then omitted, matching the bearer-auth challenges).
*
* @internal
*/
function scopeChallengeResourceMetadataUrl(authInfo) {
	if (authInfo?.resourceMetadataUrl !== void 0) return authInfo.resourceMetadataUrl;
	if (authInfo?.resource?.protocol === "https:" || authInfo?.resource?.protocol === "http:") return getOAuthProtectedResourceMetadataUrl(authInfo.resource);
}
/** @internal */
function createScopeChallengeResponse(challenge, resourceMetadataUrl) {
	return bearerAuthChallengeResponse(new OAuthError(OAuthErrorCode.InsufficientScope, challenge.errorDescription ?? "Insufficient scope"), {
		requiredScopes: [...challenge.scopes],
		resourceMetadataUrl
	});
}
/**
* Default handler re-entries per originating request — tighter than the
* client driver's 10 because the shim holds a live wire request open.
*/
var DEFAULT_LEGACY_SHIM_MAX_ROUNDS = 8;
/** Default per-leg timeout: legs are human-paced, so the 60s protocol default is wrong. */
var DEFAULT_LEGACY_SHIM_ROUND_TIMEOUT_MS = 6e5;
/** Resolves and validates `ServerOptions.inputRequired`, failing loudly at construction time. */
function resolveLegacyShimOptions(options) {
	if (options?.maxRounds !== void 0 && (!Number.isInteger(options.maxRounds) || options.maxRounds < 1)) throw new RangeError(`inputRequired.maxRounds must be a positive integer (got ${options.maxRounds})`);
	if (options?.roundTimeoutMs !== void 0 && (!Number.isFinite(options.roundTimeoutMs) || options.roundTimeoutMs <= 0)) throw new RangeError(`inputRequired.roundTimeoutMs must be a positive number (got ${options.roundTimeoutMs})`);
	return {
		maxRounds: options?.maxRounds ?? DEFAULT_LEGACY_SHIM_MAX_ROUNDS,
		roundTimeoutMs: options?.roundTimeoutMs ?? DEFAULT_LEGACY_SHIM_ROUND_TIMEOUT_MS,
		legacyShim: options?.legacyShim ?? true
	};
}
/**
* Validates one `inputRequests` entry: malformed or unknown kinds are server
* bugs and fail loudly on both eras. Shared by the modern seam's capability
* check and the shim's gate.
*/
function coerceEmbeddedInputRequest(method, key, entry) {
	if (entry === null || typeof entry !== "object" || typeof entry.method !== "string") throw new ProtocolError(ProtocolErrorCode.InternalError, `Handler for ${method} returned an invalid input request '${key}': each inputRequests entry must be an embedded elicitation/create, sampling/createMessage, or roots/list request`);
	const embedded = entry;
	const required = requiredClientCapabilitiesForInputRequest(embedded);
	if (required === void 0) throw new ProtocolError(ProtocolErrorCode.InternalError, `Handler for ${method} returned an input request '${key}' of kind '${embedded.method}', which is not an embedded request the 2026-07-28 revision defines`);
	return {
		embedded,
		required
	};
}
/**
* The 2025-11-25 URL-mode wire shape requires an `elicitationId`; the 2026
* in-band shape has none, so URL legs mint one (CSPRNG-backed, with a
* getRandomValues fallback for runtimes without `randomUUID`).
*/
function syntheticElicitationId() {
	const webCrypto = globalThis.crypto;
	if (webCrypto?.randomUUID !== void 0) return webCrypto.randomUUID();
	const bytes = /* @__PURE__ */ new Uint8Array(16);
	webCrypto.getRandomValues(bytes);
	bytes[6] = bytes[6] & 15 | 64;
	bytes[8] = bytes[8] & 63 | 128;
	const hex = [...bytes].map((byte) => byte.toString(16).padStart(2, "0")).join("");
	return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`;
}
/** Per-family surfacing: tools/call → isError result (the 2025 idiom); prompts/resources → JSON-RPC error. */
function legacyShimFailure(method, message) {
	if (method === "tools/call") return {
		content: [{
			type: "text",
			text: message
		}],
		isError: true
	};
	throw new ProtocolError(ProtocolErrorCode.InternalError, message);
}
/** The fulfilment loop — see the module doc for the contract. */
var LegacyInputRequiredShim = class {
	constructor(_host) {
		this._host = _host;
	}
	async fulfill(method, handler, request, ctx, firstResult) {
		const { maxRounds, roundTimeoutMs } = this._host;
		const outerSignal = ctx.mcpReq.signal;
		let current = firstResult;
		let round = 0;
		while (true) {
			round += 1;
			if (round > maxRounds) return legacyShimFailure(method, inputRequiredRoundsExceededMessage(method, maxRounds));
			const inputRequests = current.inputRequests;
			const hasInputRequests = inputRequests != null && Object.keys(inputRequests).length > 0;
			const requestState = typeof current.requestState === "string" ? current.requestState : void 0;
			if (!hasInputRequests && requestState === void 0) throw new ProtocolError(ProtocolErrorCode.InternalError, `Handler for ${method} returned an input-required result with neither inputRequests nor requestState (every InputRequiredResult must include at least one of the two)`);
			let responses;
			if (hasInputRequests) {
				const declared = this._host.resolvedClientCapabilities(ctx);
				const coerced = [];
				for (const [key, entry] of Object.entries(inputRequests)) {
					const { embedded, required } = coerceEmbeddedInputRequest(method, key, entry);
					if (embedded.method !== "roots/list" && embedded.params === void 0) throw new ProtocolError(ProtocolErrorCode.InternalError, `Handler for ${method} returned an input request '${key}' of kind '${embedded.method}' without params`);
					if (missingClientCapabilities(required, declared) !== void 0) return legacyShimFailure(method, `Cannot request input '${key}' (${embedded.method}): the client on this 2025-era connection did not declare the required capability${declared === void 0 ? " (no client capabilities are available on this connection — per-request legacy serving cannot receive server-to-client requests)" : ""}`);
					coerced.push([key, embedded]);
				}
				const roundAbort = linkedRoundAbort(outerSignal);
				try {
					const legOptions = {
						relatedRequestId: ctx.mcpReq.id,
						timeout: roundTimeoutMs,
						resetTimeoutOnProgress: true,
						onprogress: () => {},
						signal: roundAbort.signal
					};
					const fulfilled = await Promise.all(coerced.map(async ([key, embedded]) => {
						try {
							return [key, await this._dispatchLeg(embedded, legOptions)];
						} catch (error) {
							roundAbort.abort(error);
							throw error;
						}
					}));
					responses = Object.fromEntries(fulfilled);
				} catch (error) {
					if (outerSignal.aborted) throw error;
					return legacyShimFailure(method, `Fulfilling input required by '${method}' failed: ${error instanceof Error ? error.message : String(error)}`);
				} finally {
					roundAbort.dispose();
				}
			} else await sleep(250, outerSignal);
			let ctxNext = {
				...ctx,
				mcpReq: {
					...ctx.mcpReq,
					inputResponses: responses,
					droppedInputResponseKeys: void 0,
					requestState: requestStateAccessor(requestState)
				}
			};
			if (requestState !== void 0) {
				const decoded = await this._host.verifyRequestState(requestState, ctxNext, method);
				if (decoded !== void 0) ctxNext = withRequestStateValue(ctxNext, decoded);
			}
			const next = await handler(request, ctxNext);
			if (!isInputRequiredResult(next)) return next;
			current = next;
		}
	}
	/** Routes one embedded request through the host's existing 2025-era senders (gate already ran). */
	async _dispatchLeg(embedded, options) {
		switch (embedded.method) {
			case "elicitation/create": {
				let params = embedded.params;
				if (params.mode === "url" && params.elicitationId === void 0) params = {
					...params,
					elicitationId: syntheticElicitationId()
				};
				return await this._host.sendElicitation(params, options);
			}
			case "sampling/createMessage": return await this._host.sendSampling(embedded.params, options);
			case "roots/list": return await this._host.listRoots(embedded.params, options);
		}
	}
};
/**
* The request methods whose 2026-07-28 result vocabulary includes
* `input_required` (the multi round-trip methods). Returning an
* input-required result from any other handler is a server bug.
*/
var INPUT_REQUIRED_CAPABLE_METHODS = /* @__PURE__ */ new Set([
	"tools/call",
	"prompts/get",
	"resources/read"
]);
var writeClientIdentity;
var installDiscoverHandler;
var readServerIdentity;
/**
* Package-internal: backfills the connection-scoped client-identity fields of a
* per-request server instance from the request's validated `_meta` envelope, so the
* (deprecated) {@linkcode Server.getClientCapabilities} / {@linkcode Server.getClientVersion}
* accessors keep answering on instances that never see an `initialize` handshake.
* Not public API.
*/
function seedClientIdentityFromEnvelope(server, identity) {
	writeClientIdentity(server, identity);
}
/**
* Package-internal: installs the modern-only `server/discover` handler on an instance
* the HTTP entry has marked as serving the 2026-07-28 era, and makes sure the modern
* revisions the entry serves appear in the instance's supported-versions list (so the
* discover advertisement and version-mismatch errors name them). Idempotent.
* Hand-constructed instances are unaffected: nothing else calls this, so they keep
* answering `-32601` unless their own supported-versions list opts into a modern
* revision. Not public API.
*/
function installModernOnlyHandlers(server, servedModernVersions) {
	installDiscoverHandler(server, servedModernVersions);
}
/**
* Package-internal: the instance's implementation identity, for the serving
* entries to stamp onto entry-built results (the `subscriptions/listen`
* graceful-close result — built outside the encode seam, but the spec's
* `SubscriptionsListenResultMetaObject` extends `ResultMetaObject`, so it carries
* the serverInfo SHOULD like every other result). Not public API.
*/
function serverIdentityOf(server) {
	return readServerIdentity(server);
}
/**
* An MCP server on top of a pluggable transport.
*
* This server will automatically respond to the initialization flow as initiated from the client.
*
* @deprecated Use {@linkcode server/mcp.McpServer | McpServer} instead for the high-level API. Only use `Server` for advanced use cases.
*/
var Server = class extends Protocol {
	_clientCapabilities;
	_clientVersion;
	static {
		writeClientIdentity = (server, identity) => {
			if (identity.clientCapabilities !== void 0) server._clientCapabilities = identity.clientCapabilities;
			if (identity.clientInfo !== void 0) server._clientVersion = identity.clientInfo;
		};
		installDiscoverHandler = (server, servedModernVersions) => {
			const missing = servedModernVersions.filter((version) => !server._supportedProtocolVersions.includes(version));
			if (missing.length > 0) server._supportedProtocolVersions = [...server._supportedProtocolVersions, ...missing];
			server.setRequestHandler("server/discover", () => server._ondiscover());
		};
		readServerIdentity = (server) => server._serverInfo;
	}
	_capabilities;
	_instructions;
	_jsonSchemaValidator;
	_cacheHints;
	_requestStateVerify;
	_inputRequiredServing;
	_legacyShim;
	_boundFromTransport = false;
	/** Lazily-built legacy shim; the loop lives in legacyInputRequiredShim.ts behind a narrow host contract. */
	_legacyInputRequiredShim() {
		return this._legacyShim ??= new LegacyInputRequiredShim({
			maxRounds: this._inputRequiredServing.maxRounds,
			roundTimeoutMs: this._inputRequiredServing.roundTimeoutMs,
			resolvedClientCapabilities: (ctx) => this._inputRequestCapabilityView(ctx),
			verifyRequestState: (state, ctx, method) => this._verifyRequestState(state, ctx, method),
			sendElicitation: (params, options) => this._sendElicitationLeg(params, options, { validateAcceptedContent: false }),
			sendSampling: (params, options) => this.createMessage(params, options),
			listRoots: (params, options) => this.listRoots(params, options)
		});
	}
	/**
	* Callback for when initialization has fully completed (i.e., the client has sent an `notifications/initialized` notification).
	*/
	oninitialized;
	/**
	* Initializes this server with the given name and version information.
	*/
	constructor(_serverInfo, options) {
		super(options);
		this._serverInfo = _serverInfo;
		this._capabilities = options?.capabilities ? { ...options.capabilities } : {};
		this._instructions = options?.instructions;
		this._jsonSchemaValidator = options?.jsonSchemaValidator ?? new CfWorkerJsonSchemaValidator();
		this._requestStateVerify = options?.requestState?.verify;
		this._inputRequiredServing = resolveLegacyShimOptions(options?.inputRequired);
		if (options?.cacheHints !== void 0) {
			for (const [operation, hint] of Object.entries(options.cacheHints)) if (hint !== void 0) assertValidCacheHint(hint, `cacheHints['${operation}']`);
			this._cacheHints = options.cacheHints;
		}
		this.setRequestHandler("initialize", (request) => this._oninitialize(request));
		this.setNotificationHandler("notifications/initialized", () => this.oninitialized?.());
		if (modernProtocolVersions(this._supportedProtocolVersions).length > 0) this.setRequestHandler("server/discover", () => this._ondiscover());
		if (this._capabilities.logging) this._registerLoggingHandler();
	}
	/** Attaches to the given transport; rejects while this instance is connected to another one. */
	async connect(transport) {
		if (this.transport !== void 0) throw new SdkError(SdkErrorCode.AlreadyConnected, "Use a separate Server instance per connection: this instance is already connected to a transport. To connect it to a new transport, call close() first.");
		if (this._boundFromTransport) {
			this._boundFromTransport = false;
			this._negotiatedProtocolVersion = void 0;
		}
		const revision = perRequestClassificationOf(transport)?.revision;
		if (revision !== void 0 && !this._servedModernEra() && SUPPORTED_MODERN_PROTOCOL_VERSIONS.includes(revision) && modernProtocolVersions(this._supportedProtocolVersions).includes(revision)) {
			this._negotiatedProtocolVersion = revision;
			this._boundFromTransport = true;
		}
		await super.connect(transport);
	}
	/**
	* Registers the built-in `logging/setLevel` request handler.
	*
	* @deprecated Deprecated as of protocol version 2026-07-28 (SEP-2577).
	* Remains functional during the deprecation window (at least twelve months).
	* Migrate to stderr logging (STDIO servers) or OpenTelemetry.
	*/
	_registerLoggingHandler() {
		this.setRequestHandler("logging/setLevel", async (request, ctx) => {
			const transportSessionId = ctx.sessionId || ctx.http?.req?.headers.get("mcp-session-id") || void 0;
			const { level } = request.params;
			const parseResult = parseSchema(LoggingLevelSchema, level);
			if (parseResult.success) this._loggingLevels.set(transportSessionId, parseResult.data);
			return {};
		});
	}
	buildContext(ctx, transportInfo) {
		const hasHttpInfo = ctx.http || transportInfo?.request || transportInfo?.closeSSEStream || transportInfo?.closeStandaloneSSEStream;
		return {
			...ctx,
			mcpReq: {
				...ctx.mcpReq,
				log: (level, data, logger) => {
					if (!this._capabilities.logging) return Promise.resolve();
					let threshold;
					if (this._servedModernEra()) {
						threshold = ctx.mcpReq.envelope?.[LOG_LEVEL_META_KEY];
						if (threshold === void 0) return Promise.resolve();
					} else threshold = this._loggingLevels.get(ctx.sessionId) ?? this._loggingLevels.get(void 0);
					if (threshold !== void 0 && this.LOG_LEVEL_SEVERITY.get(level) < this.LOG_LEVEL_SEVERITY.get(threshold)) return Promise.resolve();
					return ctx.mcpReq.notify({
						method: "notifications/message",
						params: {
							level,
							data,
							logger
						}
					});
				},
				elicitInput: (params, options) => this.elicitInput(params, options),
				requestSampling: (params, options) => this.createMessage(params, options)
			},
			http: hasHttpInfo ? {
				...ctx.http,
				req: transportInfo?.request,
				closeSSE: transportInfo?.closeSSEStream,
				closeStandaloneSSE: transportInfo?.closeStandaloneSSEStream
			} : void 0
		};
	}
	_loggingLevels = /* @__PURE__ */ new Map();
	LOG_LEVEL_SEVERITY = new Map(LoggingLevelSchema.options.map((level, index) => [level, index]));
	isMessageIgnored = (level, sessionId) => {
		const currentLevel = this._loggingLevels.get(sessionId);
		return currentLevel ? this.LOG_LEVEL_SEVERITY.get(level) < this.LOG_LEVEL_SEVERITY.get(currentLevel) : false;
	};
	/**
	* Registers new capabilities. This can only be called before connecting to a transport.
	*
	* The new capabilities will be merged with any existing capabilities previously given (e.g., at initialization).
	*/
	registerCapabilities(capabilities) {
		if (this.transport) throw new SdkError(SdkErrorCode.AlreadyConnected, "Cannot register capabilities after connecting to transport");
		const hadLogging = !!this._capabilities.logging;
		this._capabilities = mergeCapabilities(this._capabilities, capabilities);
		if (!hadLogging && this._capabilities.logging) this._registerLoggingHandler();
	}
	/**
	* Enforces server-side validation for `tools/call` results regardless of how the
	* handler was registered, attaches the configured per-operation cache hint
	* (when one exists) so the 2026-07-28 encode seam can fill `ttlMs`/`cacheScope`
	* for results that do not provide their own, and owns the multi-round-trip
	* seam: on the methods whose 2026-07-28 result vocabulary includes
	* `input_required` (`tools/call`, `prompts/get`, `resources/read`) an
	* input-required return skips result-schema validation and is checked
	* against the served era, the at-least-one rule, and the request's own
	* declared client capabilities; on every other method an input-required
	* return is a server bug and fails loudly. The hint rides a symbol-keyed
	* property that is never serialized, so 2025-era responses are unaffected.
	*/
	_wrapHandler(method, handler) {
		if (method !== "tools/call") {
			const cacheHint = this._cacheHints?.[method];
			const isInputRequiredCapable = INPUT_REQUIRED_CAPABLE_METHODS.has(method);
			if (cacheHint === void 0 && !isInputRequiredCapable) return async (request, ctx) => {
				const result = await handler(request, ctx);
				if (isInputRequiredResult(result)) throw new ProtocolError(ProtocolErrorCode.InternalError, `Handler for ${method} returned an input-required result, but only tools/call, prompts/get and resources/read support input_required (protocol revision 2026-07-28)`);
				return result;
			};
			return async (request, ctx) => {
				const result = isInputRequiredCapable ? await this._invokeInputRequiredCapableHandler(method, handler, request, ctx) : await handler(request, ctx);
				if (isInputRequiredResult(result)) {
					if (!isInputRequiredCapable) throw new ProtocolError(ProtocolErrorCode.InternalError, `Handler for ${method} returned an input-required result, but only tools/call, prompts/get and resources/read support input_required (protocol revision 2026-07-28)`);
					return result;
				}
				return cacheHint === void 0 ? result : attachCacheHintFallback(result, cacheHint);
			};
		}
		return async (request, ctx) => {
			const codec = codecForVersion(this._negotiatedProtocolVersion);
			const validatedRequest = codec.validateRequest("tools/call", request);
			if (!validatedRequest.ok) throw new ProtocolError(validatedRequest.reason === "not-in-era" ? ProtocolErrorCode.InternalError : ProtocolErrorCode.InvalidParams, validatedRequest.reason === "not-in-era" ? "No wire schema for tools/call in the resolved era" : `Invalid tools/call request: ${validatedRequest.message}`);
			const result = await this._invokeInputRequiredCapableHandler("tools/call", handler, request, ctx);
			if (isInputRequiredResult(result)) return result;
			const normalizedResult = normalizeContentlessToolResult(result);
			const validationResult = codec.validateResult("tools/call", normalizedResult);
			if (!validationResult.ok) throw new ProtocolError(validationResult.reason === "not-in-era" ? ProtocolErrorCode.InternalError : ProtocolErrorCode.InvalidParams, validationResult.reason === "not-in-era" ? "No wire schema for tools/call in the resolved era" : `Invalid tools/call result: ${validationResult.message}`);
			return validationResult.value;
		};
	}
	/**
	* Whether this instance is bound to a 2026-07-28-or-later protocol
	* revision. Era is instance state — a serving entry (`createMcpHandler`,
	* `serveStdio`) marks the instance modern at construction; a 2025-era
	* `initialize` handshake binds it legacy. The multi-round-trip seam reads
	* this directly: there is no per-request era consult.
	*/
	_servedModernEra() {
		return this._negotiatedProtocolVersion !== void 0 && isModernProtocolVersion(this._negotiatedProtocolVersion);
	}
	/**
	* Invokes a handler for one of the multi-round-trip methods and applies
	* the input-required seam:
	*
	* - a `UrlElicitationRequiredError` (or any 2025-style server→client
	*   request idiom) escaping the handler on a request served on the
	*   2026-07-28 era fails LOUDLY with a clear steer to
	*   `inputRequired.elicitUrl(...)` — the `-32042` error never reaches the
	*   2026-07-28 wire and the throw is not silently converted. Requests
	*   served on the 2025 era keep today's `-32042` behavior byte-exact (the
	*   error is rethrown unchanged).
	* - an input-required RETURN toward a 2026-07-28 request must satisfy
	*   the at-least-one rule, and every embedded request must be covered by
	*   the capabilities declared on the request's envelope (violations
	*   answer the typed `-32021` error). Toward a 2025-era request the
	*   return is fulfilled by the default-on legacy shim, whose own gate
	*   consults the initialize-declared capabilities and surfaces
	*   violations per family; `inputRequired.legacyShim: false` restores
	*   the pre-shim loud failure.
	*/
	async _invokeInputRequiredCapableHandler(method, handler, request, ctx) {
		const servedModern = this._servedModernEra();
		const rawRequestState = ctx.mcpReq.requestState();
		if (rawRequestState !== void 0 && typeof rawRequestState !== "string") throw new ProtocolError(ProtocolErrorCode.InvalidParams, "Invalid or expired requestState", { reason: "invalid_request_state" });
		let ctxForHandler = ctx;
		if (typeof rawRequestState === "string") {
			const decoded = await this._verifyRequestState(rawRequestState, ctx, method);
			if (decoded !== void 0) ctxForHandler = withRequestStateValue(ctx, decoded);
		}
		let result;
		try {
			result = await handler(request, ctxForHandler);
		} catch (error) {
			if (error instanceof ProtocolError && error.code === ProtocolErrorCode.UrlElicitationRequired) {
				if (!servedModern) throw error;
				throw new ProtocolError(ProtocolErrorCode.InternalError, `URL elicitation cannot be signalled by throwing UrlElicitationRequiredError on protocol revision ${this._negotiatedProtocolVersion}: return inputRequired({ inputRequests: { …: inputRequired.elicitUrl(...) } }) from the handler instead. The urlElicitationRequired error (-32042) of earlier revisions is not available on this revision.`);
			}
			throw error;
		}
		if (!isInputRequiredResult(result)) return result;
		if (!servedModern) {
			if (!this._inputRequiredServing.legacyShim) throw new ProtocolError(ProtocolErrorCode.InternalError, `Handler for ${method} returned an input-required result, but this request is served on protocol revision ${this._negotiatedProtocolVersion ?? "2025-11-25"}, which has no input_required vocabulary`);
			return await this._legacyInputRequiredShim().fulfill(method, handler, request, ctxForHandler, result);
		}
		const inputRequests = result.inputRequests;
		const hasInputRequests = inputRequests != null && Object.keys(inputRequests).length > 0;
		const hasRequestState = typeof result.requestState === "string";
		if (!hasInputRequests && !hasRequestState) throw new ProtocolError(ProtocolErrorCode.InternalError, `Handler for ${method} returned an input-required result with neither inputRequests nor requestState (every InputRequiredResult must include at least one of the two)`);
		if (hasInputRequests) {
			const declared = this._inputRequestCapabilityView(ctx);
			for (const [key, entry] of Object.entries(inputRequests)) {
				const { embedded, required } = coerceEmbeddedInputRequest(method, key, entry);
				const missing = missingClientCapabilities(required, declared);
				if (missing !== void 0) throw new MissingRequiredClientCapabilityError({ requiredCapabilities: missing }, `Cannot request input '${key}' (${embedded.method}): the request's client capabilities do not declare the required capability`);
			}
		}
		return result;
	}
	/**
	* Runs the configured `requestState.verify` hook and returns its
	* resolved value (`undefined` when unconfigured or the hook returns
	* nothing). Deny-on-error: any hook failure answers the frozen `-32602`;
	* the reason goes to `onerror` only.
	*/
	async _verifyRequestState(state, ctx, method) {
		if (this._requestStateVerify === void 0) return;
		try {
			return await this._requestStateVerify(state, ctx);
		} catch (error) {
			this.onerror?.(/* @__PURE__ */ new Error(`requestState verification rejected ${method}: ${error instanceof Error ? error.message : String(error)}`));
			throw new ProtocolError(ProtocolErrorCode.InvalidParams, "Invalid or expired requestState", { reason: "invalid_request_state" });
		}
	}
	/**
	* The per-request resolved client-capabilities view: the request's own
	* `_meta` envelope on the 2026 era; the `initialize`-declared state on a
	* 2025-era connection. Per-request instances that never saw an
	* initialize (stateless legacy) hold nothing, so gates refuse there.
	*/
	_inputRequestCapabilityView(ctx) {
		return this._servedModernEra() ? ctx.mcpReq.envelope?.[CLIENT_CAPABILITIES_META_KEY] : this._clientCapabilities;
	}
	/**
	* Guard for the push-style server→client request APIs ({@linkcode createMessage},
	* {@linkcode elicitInput}, {@linkcode listRoots}, {@linkcode ping}) on a
	* modern-era instance: the 2026-07-28 revision has no server→client request
	* channel, so the call fails before any wire traffic with a typed error
	* whose message steers to `inputRequired(...)`. The base era gate would
	* also reject it; this guard runs first to carry the steer.
	*/
	_assertPushApiInServedEra(method) {
		if (this._servedModernEra()) throw new SdkError(SdkErrorCode.MethodNotSupportedByProtocolVersion, `Server-to-client requests are not available on protocol revision ${this._negotiatedProtocolVersion}: '${method}' cannot be sent while serving a request on that revision. Return inputRequired({ ... }) from the handler instead — the client fulfils the embedded requests and retries the original request (multi round-trip requests).`, {
			method,
			era: "2026-07-28"
		});
	}
	assertCapabilityForMethod(method) {
		switch (method) {
			case "sampling/createMessage":
				if (!this._clientCapabilities?.sampling) throw new SdkError(SdkErrorCode.CapabilityNotSupported, `Client does not support sampling (required for ${method})`);
				break;
			case "elicitation/create":
				if (!this._clientCapabilities?.elicitation) throw new SdkError(SdkErrorCode.CapabilityNotSupported, `Client does not support elicitation (required for ${method})`);
				break;
			case "roots/list": if (!this._clientCapabilities?.roots) throw new SdkError(SdkErrorCode.CapabilityNotSupported, `Client does not support listing roots (required for ${method})`);
		}
	}
	assertNotificationCapability(method) {
		switch (method) {
			case "notifications/message":
				if (!this._capabilities.logging) throw new SdkError(SdkErrorCode.CapabilityNotSupported, `Server does not support logging (required for ${method})`);
				break;
			case "notifications/resources/updated":
			case "notifications/resources/list_changed":
				if (!this._capabilities.resources) throw new SdkError(SdkErrorCode.CapabilityNotSupported, `Server does not support notifying about resources (required for ${method})`);
				break;
			case "notifications/tools/list_changed":
				if (!this._capabilities.tools) throw new SdkError(SdkErrorCode.CapabilityNotSupported, `Server does not support notifying of tool list changes (required for ${method})`);
				break;
			case "notifications/prompts/list_changed":
				if (!this._capabilities.prompts) throw new SdkError(SdkErrorCode.CapabilityNotSupported, `Server does not support notifying of prompt list changes (required for ${method})`);
				break;
			case "notifications/elicitation/complete": if (!this._clientCapabilities?.elicitation?.url) throw new SdkError(SdkErrorCode.CapabilityNotSupported, `Client does not support URL elicitation (required for ${method})`);
		}
	}
	assertRequestHandlerCapability(method) {
		switch (method) {
			case "completion/complete":
				if (!this._capabilities.completions) throw new SdkError(SdkErrorCode.CapabilityNotSupported, `Server does not support completions (required for ${method})`);
				break;
			case "logging/setLevel":
				if (!this._capabilities.logging) throw new SdkError(SdkErrorCode.CapabilityNotSupported, `Server does not support logging (required for ${method})`);
				break;
			case "prompts/get":
			case "prompts/list":
				if (!this._capabilities.prompts) throw new SdkError(SdkErrorCode.CapabilityNotSupported, `Server does not support prompts (required for ${method})`);
				break;
			case "resources/list":
			case "resources/templates/list":
			case "resources/read":
				if (!this._capabilities.resources) throw new SdkError(SdkErrorCode.CapabilityNotSupported, `Server does not support resources (required for ${method})`);
				break;
			case "tools/call":
			case "tools/list": if (!this._capabilities.tools) throw new SdkError(SdkErrorCode.CapabilityNotSupported, `Server does not support tools (required for ${method})`);
		}
	}
	async _oninitialize(request) {
		const requestedVersion = request.params.protocolVersion;
		this._clientCapabilities = request.params.capabilities;
		this._clientVersion = request.params.clientInfo;
		const legacyVersions = legacyProtocolVersions(this._supportedProtocolVersions);
		const protocolVersion = legacyVersions.includes(requestedVersion) ? requestedVersion : legacyVersions[0] ?? "2025-11-25";
		this._negotiatedProtocolVersion = protocolVersion;
		this.transport?.setProtocolVersion?.(protocolVersion);
		return {
			protocolVersion,
			capabilities: this.getCapabilities(),
			serverInfo: this._serverInfo,
			...this._instructions && { instructions: this._instructions }
		};
	}
	/**
	* Answers `server/discover` (protocol revision 2026-07-28). `supportedVersions`
	* lists only modern revisions (2025-era versions are negotiated via `initialize`);
	* the capabilities are advertised as-is, listChanged/subscribe bits included
	* (see {@linkcode discoverAdvertisedCapabilities}).
	*/
	_ondiscover() {
		return {
			supportedVersions: modernProtocolVersions(this._supportedProtocolVersions),
			capabilities: discoverAdvertisedCapabilities(this.getCapabilities()),
			...this._instructions && { instructions: this._instructions }
		};
	}
	/**
	* The identity the 2026-era encode seam stamps into every outbound
	* result's `_meta` under `io.modelcontextprotocol/serverInfo` (spec PR
	* #3002: servers SHOULD identify themselves on every response).
	*/
	_outboundServerInfo() {
		return this._serverInfo;
	}
	/**
	* After initialization has completed, this will be populated with the client's reported capabilities.
	*
	* @deprecated Read client identity from the per-request handler context instead: on
	* 2026-07-28 (per-request envelope) requests `ctx.mcpReq.envelope` carries the client's
	* declared capabilities, while on 2025-era connections this accessor keeps returning the
	* `initialize`-scoped value. The accessor remains functional where `createMcpHandler`
	* serves the 2026-07-28 era: it backfills it per request from the validated envelope.
	*/
	getClientCapabilities() {
		return this._clientCapabilities;
	}
	/**
	* After initialization has completed, this will be populated with information about the client's name and version.
	*
	* @deprecated Read client identity from the per-request handler context instead: on
	* 2026-07-28 (per-request envelope) requests `ctx.mcpReq.envelope` carries the client's
	* name and version, while on 2025-era connections this accessor keeps returning the
	* `initialize`-scoped value. The accessor remains functional where `createMcpHandler`
	* serves the 2026-07-28 era: it backfills it per request from the validated envelope.
	*/
	getClientVersion() {
		return this._clientVersion;
	}
	/**
	* After initialization has completed, this will be populated with the protocol version negotiated
	* with the client (the version the server responded with during the initialize handshake), or
	* `undefined` before initialization.
	*
	* @deprecated Read the protocol revision from the per-request handler context instead: on
	* 2026-07-28 (per-request envelope) requests `ctx.mcpReq.envelope` names the revision the
	* request was sent for, while on 2025-era connections this accessor keeps returning the
	* `initialize`-negotiated version. The accessor remains functional — instances serving the
	* 2026-07-28 era report that revision.
	*/
	getNegotiatedProtocolVersion() {
		return this._negotiatedProtocolVersion;
	}
	/**
	* Project a `tools/call` result through this instance's negotiated wire
	* codec — the era-agnostic SEP-2106 §4.3 TextContent auto-append, plus on
	* the 2025 era the `{result:…}` wrap when `structuredContent` is a
	* non-object value or the advertised `outputSchema` had a non-object root.
	* Identity for object-shaped `structuredContent` on the 2026 era.
	*
	* `McpServer`'s built-in `tools/call` handler routes through this method.
	* Low-level `setRequestHandler('tools/call', …)` authors call it
	* themselves so the projection lives in one place (the codec) and the
	* server-side handler stays era-blind.
	*
	* This is the only codec function exposed on `Server` — the full
	* `WireCodec` is intentionally not part of the public surface.
	*/
	projectCallToolResult(result, advertisedOutputSchema) {
		return this._wireCodec().projectCallToolResult(result, advertisedOutputSchema);
	}
	/**
	* Returns the current server capabilities.
	*/
	getCapabilities() {
		return this._capabilities;
	}
	/**
	* Sends a `ping` request to the connected client.
	*
	* @deprecated The 2026-07-28 protocol removed ping; it throws on a 2026-07-28-era instance.
	* If your factory serves both eras, this only works on the legacy path.
	*/
	async ping() {
		this._assertPushApiInServedEra("ping");
		return this.request({ method: "ping" });
	}
	async createMessage(params, options) {
		this._assertPushApiInServedEra("sampling/createMessage");
		if ((params.tools || params.toolChoice) && !this._clientCapabilities?.sampling?.tools) throw new SdkError(SdkErrorCode.CapabilityNotSupported, "Client does not support sampling tools capability.");
		if (params.messages.length > 0) {
			const lastMessage = params.messages.at(-1);
			const lastContent = Array.isArray(lastMessage.content) ? lastMessage.content : [lastMessage.content];
			const hasToolResults = lastContent.some((c) => c.type === "tool_result");
			const previousMessage = params.messages.length > 1 ? params.messages.at(-2) : void 0;
			const previousContent = previousMessage ? Array.isArray(previousMessage.content) ? previousMessage.content : [previousMessage.content] : [];
			const hasPreviousToolUse = previousContent.some((c) => c.type === "tool_use");
			if (hasToolResults) {
				if (lastContent.some((c) => c.type !== "tool_result")) throw new ProtocolError(ProtocolErrorCode.InvalidParams, "The last message must contain only tool_result content if any is present");
				if (!hasPreviousToolUse) throw new ProtocolError(ProtocolErrorCode.InvalidParams, "tool_result blocks are not matching any tool_use from the previous message");
			}
			if (hasPreviousToolUse) {
				const toolUseIds = new Set(previousContent.filter((c) => c.type === "tool_use").map((c) => c.id));
				const toolResultIds = new Set(lastContent.filter((c) => c.type === "tool_result").map((c) => c.toolUseId));
				if (toolUseIds.size !== toolResultIds.size || ![...toolUseIds].every((id) => toolResultIds.has(id))) throw new ProtocolError(ProtocolErrorCode.InvalidParams, "ids of tool_result blocks and tool_use blocks from previous message do not match");
			}
		}
		const hasTools = Boolean(params.tools || params.toolChoice);
		const wide = await this.request({
			method: "sampling/createMessage",
			params
		}, options);
		const outcome = this._wireCodec().samplingResultVariant(hasTools, wide);
		if (!outcome.ok) throw new SdkError(SdkErrorCode.InvalidResult, `Invalid sampling/createMessage result: ${outcome.reason === "invalid" ? outcome.message : outcome.reason}`);
		return outcome.value;
	}
	/**
	* Creates an elicitation request for the given parameters.
	* For backwards compatibility, `mode` may be omitted for form requests and will default to `"form"`.
	* @param params The parameters for the elicitation request.
	* @param options Optional request options.
	* @returns The result of the elicitation request.
	*
	* @deprecated Throws on a 2026-07-28-era request — use {@link index.inputRequired | inputRequired} (multi-round-trip)
	* instead. The 2025 push-style server-to-client request model is replaced by input_required
	* results in the 2026-07-28 protocol. If your factory serves both eras, this only works on the
	* legacy path.
	*/
	async elicitInput(params, options) {
		this._assertPushApiInServedEra("elicitation/create");
		switch (params.mode ?? "form") {
			case "url":
				if (!this._clientCapabilities?.elicitation?.url) throw new SdkError(SdkErrorCode.CapabilityNotSupported, "Client does not support url elicitation.");
				break;
			case "form": if (!this._clientCapabilities?.elicitation?.form) throw new SdkError(SdkErrorCode.CapabilityNotSupported, "Client does not support form elicitation.");
		}
		return this._sendElicitationLeg(params, options);
	}
	/**
	* The capability-check-free core of {@linkcode elicitInput}. The shim
	* uses it because its gate differs from the public checks: a bare
	* `elicitation: {}` counts as form support (the pre-mode rule), and
	* accepted content passes through unvalidated for parity with the
	* modern client driver (handlers validate via the schema-aware
	* `acceptedContent` overload and can re-ask).
	*/
	async _sendElicitationLeg(params, options, behavior) {
		const mode = params.mode ?? "form";
		const validateAcceptedContent = behavior?.validateAcceptedContent ?? true;
		switch (mode) {
			case "url": {
				const urlParams = params;
				return this.request({
					method: "elicitation/create",
					params: urlParams
				}, options);
			}
			case "form": {
				const formParams = params.mode === "form" ? params : {
					...params,
					mode: "form"
				};
				const result = await this.request({
					method: "elicitation/create",
					params: formParams
				}, options);
				if (validateAcceptedContent && result.action === "accept" && result.content && formParams.requestedSchema) try {
					const validationResult = this._jsonSchemaValidator.getValidator(formParams.requestedSchema)(result.content);
					if (!validationResult.valid) throw new ProtocolError(ProtocolErrorCode.InvalidParams, `Elicitation response content does not match requested schema: ${validationResult.errorMessage}`);
				} catch (error) {
					if (error instanceof ProtocolError) throw error;
					throw new ProtocolError(ProtocolErrorCode.InternalError, `Error validating elicitation response: ${error instanceof Error ? error.message : String(error)}`);
				}
				return result;
			}
		}
	}
	/**
	* Creates a reusable callback that, when invoked, will send a `notifications/elicitation/complete`
	* notification for the specified elicitation ID.
	*
	* The notification (and the `elicitationId` it references) exists only on protocol revision
	* 2025-11-25 — the 2026-07-28 revision removed both. On a connection negotiated at 2026-07-28 the
	* returned callback rejects with a typed local error before anything reaches the transport
	* (the method is not part of that revision's wire registry).
	*
	* @param elicitationId The ID of the elicitation to mark as complete.
	* @param options Optional notification options. Useful when the completion notification should be related to a prior request.
	* @returns A function that emits the completion notification when awaited.
	*/
	createElicitationCompletionNotifier(elicitationId, options) {
		if (!this._clientCapabilities?.elicitation?.url) throw new SdkError(SdkErrorCode.CapabilityNotSupported, "Client does not support URL elicitation (required for notifications/elicitation/complete)");
		return () => this.notification({
			method: "notifications/elicitation/complete",
			params: { elicitationId }
		}, options);
	}
	/**
	* Requests the list of roots from the client.
	*
	* @deprecated Deprecated as of protocol version 2026-07-28 (SEP-2577).
	* Throws on a 2026-07-28-era request — use {@link index.inputRequired | inputRequired} (multi-round-trip) instead,
	* or migrate to passing paths via tool parameters, resource URIs, or configuration. The 2025
	* push-style server-to-client request model is replaced by input_required results in the
	* 2026-07-28 protocol. If your factory serves both eras, this only works on the legacy path.
	*/
	async listRoots(params, options) {
		this._assertPushApiInServedEra("roots/list");
		return this.request({
			method: "roots/list",
			params
		}, options);
	}
	/**
	* Sends a logging message to the client, if connected.
	* Note: You only need to send the parameters object, not the entire JSON-RPC message.
	* @see {@linkcode LoggingMessageNotification}
	* @param params
	* @param sessionId Optional for stateless transports and backward compatibility.
	*
	* @deprecated Deprecated as of protocol version 2026-07-28 (SEP-2577).
	* Remains functional during the deprecation window (at least twelve months).
	* Migrate to stderr logging (STDIO servers) or OpenTelemetry.
	*/
	async sendLoggingMessage(params, sessionId) {
		if (this._capabilities.logging && !this.isMessageIgnored(params.level, sessionId)) return this.notification({
			method: "notifications/message",
			params
		});
	}
	async sendResourceUpdated(params) {
		return this.notification({
			method: "notifications/resources/updated",
			params
		});
	}
	async sendResourceListChanged() {
		return this.notification({ method: "notifications/resources/list_changed" });
	}
	async sendToolListChanged() {
		return this.notification({ method: "notifications/tools/list_changed" });
	}
	async sendPromptListChanged() {
		return this.notification({ method: "notifications/prompts/list_changed" });
	}
};
/**
* The capability set a server advertises on `server/discover`. Pure — never
* mutates the input; the legacy `initialize` advertisement is untouched.
*
* The serving entries serve `subscriptions/listen` themselves, so the
* `listChanged` and `resources.subscribe` capability bits are advertised
* as-is: a modern-era client uses them to decide which notification types to
* request on its listen filter.
*/
function discoverAdvertisedCapabilities(capabilities) {
	return { ...capabilities };
}
function toolInputElementCount(value, max) {
	let count = 0;
	const stack = [value];
	while (stack.length > 0) {
		const node = stack.pop();
		if (node === null || typeof node !== "object") continue;
		if (Array.isArray(node)) for (const child of node) {
			if (++count > max) return count;
			if (child !== null && typeof child === "object") stack.push(child);
		}
		else for (const key in node) {
			if (!Object.prototype.hasOwnProperty.call(node, key)) continue;
			if (++count > max) return count;
			const child = node[key];
			if (child !== null && typeof child === "object") stack.push(child);
		}
	}
	return count;
}
function resolveMaxToolInputElements(value) {
	if (value === void 0 || value === Infinity) return void 0;
	if (typeof value !== "number" || Number.isNaN(value) || value < 1) throw new RangeError(`maxToolInputElements must be a number of at least 1, or Infinity, got ${String(value)}`);
	return value;
}
/**
* High-level MCP server that provides a simpler API for working with resources, tools, and prompts.
* For advanced usage (like sending notifications or setting custom request handlers), use the underlying
* {@linkcode Server} instance available via the {@linkcode McpServer.server | server} property.
*
* @example
* ```ts source="./mcp.examples.ts#McpServer_basicUsage"
* const server = new McpServer({
*     name: 'my-server',
*     version: '1.0.0'
* });
* ```
*/
var McpServer = class {
	/**
	* The underlying {@linkcode Server} instance, useful for advanced operations like sending notifications.
	*/
	server;
	_maxToolInputElements;
	_registeredResources = {};
	_registeredResourceTemplates = {};
	_registeredTools = {};
	_registeredPrompts = {};
	/** Per-tool JSON-converted `inputSchema`, filled on first use by `toolInputSchemaJson()`. */
	_toolInputSchemaJson = {};
	/**
	* The JSON-serialized `inputSchema` of a registered tool, or `undefined`
	* when no such tool is registered. Used by the HTTP entry's pre-dispatch
	* SEP-2243 `Mcp-Param-*` validation step (which needs the same JSON Schema
	* `tools/list` would emit, before dispatch reaches the handler).
	*
	* @internal
	*/
	toolInputSchemaJson(name) {
		const tool = this._registeredTools[name];
		if (tool === void 0 || !tool.enabled) return void 0;
		if (Object.hasOwn(this._toolInputSchemaJson, name)) return this._toolInputSchemaJson[name];
		if (tool.inputSchema === void 0) return EMPTY_OBJECT_JSON_SCHEMA;
		try {
			const json = standardSchemaToJsonSchema(tool.inputSchema, "input");
			this._toolInputSchemaJson[name] = json;
			return json;
		} catch {
			return;
		}
	}
	constructor(serverInfo, options) {
		this.server = new Server(serverInfo, options);
		this._maxToolInputElements = resolveMaxToolInputElements(options?.maxToolInputElements);
		if (options?.capabilities?.tools) this.setToolRequestHandlers();
		if (options?.capabilities?.resources) this.setResourceRequestHandlers();
		if (options?.capabilities?.prompts) this.setPromptRequestHandlers();
	}
	/**
	* Attaches to the given transport, starts it, and starts listening for messages.
	*
	* The `server` object assumes ownership of the {@linkcode Transport}, replacing any callbacks that have already been set, and expects that it is the only user of the {@linkcode Transport} instance going forward.
	*
	* @example
	* ```ts source="./mcp.examples.ts#McpServer_connect_stdio"
	* const server = new McpServer({ name: 'my-server', version: '1.0.0' });
	* const transport = new StdioServerTransport();
	* await server.connect(transport);
	* ```
	*/
	async connect(transport) {
		if (supportsScopeChallengeResolver(transport)) transport.setScopeChallengeResolver((context) => this.resolveScopeChallenge(context));
		return await this.server.connect(transport);
	}
	/**
	* Closes the connection.
	*/
	async close() {
		await this.server.close();
	}
	/** @internal */
	resolveScopeChallenge = (context) => {
		switch (context.request.method) {
			case "tools/call": {
				const toolName = context.request.params?.name;
				if (typeof toolName !== "string") return;
				const tool = this._registeredTools[toolName];
				if (tool === void 0 || !tool.enabled) return;
				return tool.scopeChallenge?.(context);
			}
			case "resources/read": {
				const resourceUri = context.request.params?.uri;
				if (typeof resourceUri !== "string") return;
				let uri;
				try {
					uri = new URL(resourceUri);
				} catch {
					return;
				}
				const resource = this._registeredResources[uri.toString()];
				if (resource !== void 0) return resource.enabled ? resource.scopeChallenge?.(context) : void 0;
				for (const template of Object.values(this._registeredResourceTemplates)) if (template.resourceTemplate.uriTemplate.match(uri.toString())) return template.enabled ? template.scopeChallenge?.(context) : void 0;
				return;
			}
			case "prompts/get": {
				const promptName = context.request.params?.name;
				if (typeof promptName !== "string") return;
				const prompt = this._registeredPrompts[promptName];
				if (prompt === void 0 || !prompt.enabled) return;
				return prompt.scopeChallenge?.(context);
			}
			default: return;
		}
	};
	_toolHandlersInitialized = false;
	setToolRequestHandlers() {
		if (this._toolHandlersInitialized) return;
		this.server.assertCanSetRequestHandler("tools/list");
		this.server.assertCanSetRequestHandler("tools/call");
		this.server.registerCapabilities({ tools: { listChanged: this.server.getCapabilities().tools?.listChanged ?? true } });
		this.server.setRequestHandler("tools/list", () => ({ tools: Object.entries(this._registeredTools).filter(([, tool]) => tool.enabled).map(([name, tool]) => {
			const toolDefinition = {
				name,
				title: tool.title,
				description: tool.description,
				inputSchema: tool.inputSchema ? convertListedInputSchema(name, tool.inputSchema) : EMPTY_OBJECT_JSON_SCHEMA,
				annotations: tool.annotations,
				icons: tool.icons,
				execution: tool.execution,
				_meta: tool._meta
			};
			if (tool.outputSchema) toolDefinition.outputSchema = standardSchemaToJsonSchema(tool.outputSchema, "output");
			return toolDefinition;
		}) }));
		this.server.setRequestHandler("tools/call", async (request, ctx) => {
			const tool = this._registeredTools[request.params.name];
			if (!tool) throw new ProtocolError(ProtocolErrorCode.InvalidParams, `Tool ${request.params.name} not found`);
			if (!tool.enabled) throw new ProtocolError(ProtocolErrorCode.InvalidParams, `Tool ${request.params.name} disabled`);
			try {
				const args = await this.validateToolInput(tool, request.params.arguments, request.params.name);
				const result = await this.executeToolHandler(tool, args, ctx);
				await this.validateToolOutput(tool, result, request.params.name);
				if (isInputRequiredResult(result)) return result;
				return this.server.projectCallToolResult(result, tool.outputSchemaJson);
			} catch (error) {
				if (error instanceof ProtocolError && error.code === ProtocolErrorCode.UrlElicitationRequired) throw error;
				return this.createToolError(error instanceof Error ? error.message : String(error));
			}
		});
		this._toolHandlersInitialized = true;
	}
	/**
	* Creates a tool error result.
	*
	* @param errorMessage - The error message.
	* @returns The tool error result.
	*/
	createToolError(errorMessage) {
		return {
			content: [{
				type: "text",
				text: errorMessage
			}],
			isError: true
		};
	}
	/**
	* Validates tool input arguments against the tool's input schema.
	*/
	async validateToolInput(tool, args, toolName) {
		if (this._maxToolInputElements !== void 0 && toolInputElementCount(args, this._maxToolInputElements) > this._maxToolInputElements) throw new ProtocolError(ProtocolErrorCode.InvalidParams, `Invalid arguments for tool ${toolName}: arguments contain more than the maximum of ${this._maxToolInputElements} elements`);
		if (!tool.inputSchema) return;
		const parseResult = await validateStandardSchema(tool.inputSchema, args ?? {});
		if (!parseResult.success) throw new ProtocolError(ProtocolErrorCode.InvalidParams, `Input validation error: Invalid arguments for tool ${toolName}: ${parseResult.error}`);
		return parseResult.data;
	}
	/**
	* Validates tool output against the tool's output schema.
	*/
	async validateToolOutput(tool, result, toolName) {
		if (!tool.outputSchema) return;
		if (isInputRequiredResult(result)) return;
		if (result.isError) return;
		if (result.structuredContent === void 0) throw new ProtocolError(ProtocolErrorCode.InvalidParams, `Output validation error: Tool ${toolName} has an output schema but no structured content was provided`);
		const parseResult = await validateStandardSchema(tool.outputSchema, result.structuredContent);
		if (!parseResult.success) throw new ProtocolError(ProtocolErrorCode.InvalidParams, `Output validation error: Invalid structured content for tool ${toolName}: ${parseResult.error}`);
	}
	/**
	* Executes a tool handler.
	*/
	async executeToolHandler(tool, args, ctx) {
		return tool.executor(args, ctx);
	}
	_completionHandlerInitialized = false;
	setCompletionRequestHandler() {
		if (this._completionHandlerInitialized) return;
		this.server.assertCanSetRequestHandler("completion/complete");
		this.server.registerCapabilities({ completions: {} });
		this.server.setRequestHandler("completion/complete", async (request) => {
			switch (request.params.ref.type) {
				case "ref/prompt":
					assertCompleteRequestPrompt(request);
					return this.handlePromptCompletion(request, request.params.ref);
				case "ref/resource":
					assertCompleteRequestResourceTemplate(request);
					return this.handleResourceCompletion(request, request.params.ref);
				default: throw new ProtocolError(ProtocolErrorCode.InvalidParams, `Invalid completion reference: ${request.params.ref}`);
			}
		});
		this._completionHandlerInitialized = true;
	}
	async handlePromptCompletion(request, ref) {
		const prompt = this._registeredPrompts[ref.name];
		if (!prompt) throw new ProtocolError(ProtocolErrorCode.InvalidParams, `Prompt ${ref.name} not found`);
		if (!prompt.enabled) throw new ProtocolError(ProtocolErrorCode.InvalidParams, `Prompt ${ref.name} disabled`);
		if (!prompt.argsSchema) return EMPTY_COMPLETION_RESULT;
		const field = unwrapOptionalSchema(getSchemaShape(prompt.argsSchema)?.[request.params.argument.name]);
		if (!isCompletable(field)) return EMPTY_COMPLETION_RESULT;
		const completer = getCompleter(field);
		if (!completer) return EMPTY_COMPLETION_RESULT;
		return createCompletionResult(await completer(request.params.argument.value, request.params.context));
	}
	async handleResourceCompletion(request, ref) {
		const template = Object.values(this._registeredResourceTemplates).find((t) => t.resourceTemplate.uriTemplate.toString() === ref.uri);
		if (!template) {
			if (this._registeredResources[ref.uri]) return EMPTY_COMPLETION_RESULT;
			throw new ProtocolError(ProtocolErrorCode.InvalidParams, `Resource template ${request.params.ref.uri} not found`);
		}
		const completer = template.resourceTemplate.completeCallback(request.params.argument.name);
		if (!completer) return EMPTY_COMPLETION_RESULT;
		return createCompletionResult(await completer(request.params.argument.value, request.params.context));
	}
	_resourceHandlersInitialized = false;
	setResourceRequestHandlers() {
		if (this._resourceHandlersInitialized) return;
		this.server.assertCanSetRequestHandler("resources/list");
		this.server.assertCanSetRequestHandler("resources/templates/list");
		this.server.assertCanSetRequestHandler("resources/read");
		this.server.registerCapabilities({ resources: { listChanged: this.server.getCapabilities().resources?.listChanged ?? true } });
		this.server.setRequestHandler("resources/list", async (_request, ctx) => {
			const resources = Object.entries(this._registeredResources).filter(([_, resource]) => resource.enabled).map(([uri, resource]) => ({
				uri,
				name: resource.name,
				...resource.metadata
			}));
			const templateResources = [];
			for (const template of Object.values(this._registeredResourceTemplates)) {
				if (!template.resourceTemplate.listCallback) continue;
				const result = await template.resourceTemplate.listCallback(ctx);
				for (const resource of result.resources) templateResources.push({
					...template.metadata,
					...resource
				});
			}
			return { resources: [...resources, ...templateResources] };
		});
		this.server.setRequestHandler("resources/templates/list", async () => {
			return { resourceTemplates: Object.entries(this._registeredResourceTemplates).map(([name, template]) => ({
				name,
				uriTemplate: template.resourceTemplate.uriTemplate.toString(),
				...template.metadata
			})) };
		});
		this.server.setRequestHandler("resources/read", async (request, ctx) => {
			let uri;
			try {
				uri = new URL(request.params.uri);
			} catch {
				throw new ProtocolError(ProtocolErrorCode.InvalidParams, `Resource URI ${request.params.uri} is invalid`, {
					uri: request.params.uri,
					reason: "invalid_uri"
				});
			}
			const resource = this._registeredResources[uri.toString()];
			if (resource) {
				if (!resource.enabled) throw new ProtocolError(ProtocolErrorCode.InvalidParams, `Resource ${uri} disabled`);
				return attachCacheHintFallback(await resource.readCallback(uri, ctx), resource.cacheHint);
			}
			for (const template of Object.values(this._registeredResourceTemplates)) {
				const variables = template.resourceTemplate.uriTemplate.match(uri.toString());
				if (variables) {
					if (!template.enabled) throw new ProtocolError(ProtocolErrorCode.InvalidParams, `Resource template ${template.resourceTemplate.uriTemplate} disabled`);
					return attachCacheHintFallback(await template.readCallback(uri, variables, ctx), template.cacheHint);
				}
			}
			throw new ResourceNotFoundError(request.params.uri);
		});
		this._resourceHandlersInitialized = true;
	}
	_promptHandlersInitialized = false;
	setPromptRequestHandlers() {
		if (this._promptHandlersInitialized) return;
		this.server.assertCanSetRequestHandler("prompts/list");
		this.server.assertCanSetRequestHandler("prompts/get");
		this.server.registerCapabilities({ prompts: { listChanged: this.server.getCapabilities().prompts?.listChanged ?? true } });
		this.server.setRequestHandler("prompts/list", () => ({ prompts: Object.entries(this._registeredPrompts).filter(([, prompt]) => prompt.enabled).map(([name, prompt]) => {
			return {
				name,
				title: prompt.title,
				description: prompt.description,
				arguments: prompt.argsSchema ? promptArgumentsFromStandardSchema(prompt.argsSchema) : void 0,
				icons: prompt.icons,
				_meta: prompt._meta
			};
		}) }));
		this.server.setRequestHandler("prompts/get", async (request, ctx) => {
			const prompt = this._registeredPrompts[request.params.name];
			if (!prompt) throw new ProtocolError(ProtocolErrorCode.InvalidParams, `Prompt ${request.params.name} not found`);
			if (!prompt.enabled) throw new ProtocolError(ProtocolErrorCode.InvalidParams, `Prompt ${request.params.name} disabled`);
			return prompt.handler(request.params.arguments, ctx);
		});
		this._promptHandlersInitialized = true;
	}
	registerResource(name, uriOrTemplate, config, readCallback) {
		const { cacheHint, scopeChallenge, ...resourceMetadata } = config;
		const metadata = resourceMetadata;
		if (cacheHint !== void 0) assertValidCacheHint(cacheHint, `resource ${name}`);
		if (typeof uriOrTemplate === "string") {
			if (this._registeredResources[uriOrTemplate]) throw new Error(`Resource ${uriOrTemplate} is already registered`);
			const registeredResource = this._createRegisteredResource(name, config.title, uriOrTemplate, metadata, scopeChallenge, readCallback);
			if (cacheHint !== void 0) registeredResource.cacheHint = cacheHint;
			this.setResourceRequestHandlers();
			this.sendResourceListChanged();
			return registeredResource;
		} else {
			if (this._registeredResourceTemplates[name]) throw new Error(`Resource template ${name} is already registered`);
			const registeredResourceTemplate = this._createRegisteredResourceTemplate(name, config.title, uriOrTemplate, metadata, scopeChallenge, readCallback);
			if (cacheHint !== void 0) registeredResourceTemplate.cacheHint = cacheHint;
			this.setResourceRequestHandlers();
			this.sendResourceListChanged();
			return registeredResourceTemplate;
		}
	}
	_createRegisteredResource(name, title, uri, metadata, scopeChallenge, readCallback) {
		const registeredResource = {
			name,
			title,
			metadata,
			readCallback,
			scopeChallenge,
			enabled: true,
			disable: () => registeredResource.update({ enabled: false }),
			enable: () => registeredResource.update({ enabled: true }),
			remove: () => registeredResource.update({ uri: null }),
			update: (updates) => {
				if (updates.uri !== void 0 && updates.uri !== uri) {
					delete this._registeredResources[uri];
					if (updates.uri) this._registeredResources[updates.uri] = registeredResource;
				}
				if (updates.name !== void 0) registeredResource.name = updates.name;
				if (updates.metadata !== void 0) registeredResource.metadata = updates.metadata;
				if (updates.title !== void 0) {
					registeredResource.title = updates.title;
					registeredResource.metadata = {
						...registeredResource.metadata,
						title: updates.title
					};
				}
				if (updates.callback !== void 0) registeredResource.readCallback = updates.callback;
				if (updates.scopeChallenge !== void 0) registeredResource.scopeChallenge = updates.scopeChallenge === null ? void 0 : updates.scopeChallenge;
				if (updates.enabled !== void 0) registeredResource.enabled = updates.enabled;
				this.sendResourceListChanged();
			}
		};
		this._registeredResources[uri] = registeredResource;
		return registeredResource;
	}
	_createRegisteredResourceTemplate(name, title, template, metadata, scopeChallenge, readCallback) {
		const registeredResourceTemplate = {
			resourceTemplate: template,
			title,
			metadata,
			readCallback,
			scopeChallenge,
			enabled: true,
			disable: () => registeredResourceTemplate.update({ enabled: false }),
			enable: () => registeredResourceTemplate.update({ enabled: true }),
			remove: () => registeredResourceTemplate.update({ name: null }),
			update: (updates) => {
				if (updates.name !== void 0 && updates.name !== name) {
					delete this._registeredResourceTemplates[name];
					if (updates.name) this._registeredResourceTemplates[updates.name] = registeredResourceTemplate;
				}
				if (updates.template !== void 0) registeredResourceTemplate.resourceTemplate = updates.template;
				if (updates.metadata !== void 0) registeredResourceTemplate.metadata = updates.metadata;
				if (updates.title !== void 0) {
					registeredResourceTemplate.title = updates.title;
					registeredResourceTemplate.metadata = {
						...registeredResourceTemplate.metadata,
						title: updates.title
					};
				}
				if (updates.callback !== void 0) registeredResourceTemplate.readCallback = updates.callback;
				if (updates.scopeChallenge !== void 0) registeredResourceTemplate.scopeChallenge = updates.scopeChallenge === null ? void 0 : updates.scopeChallenge;
				if (updates.enabled !== void 0) registeredResourceTemplate.enabled = updates.enabled;
				this.sendResourceListChanged();
			}
		};
		this._registeredResourceTemplates[name] = registeredResourceTemplate;
		const variableNames = template.uriTemplate.variableNames;
		if (Array.isArray(variableNames) && variableNames.some((v) => !!template.completeCallback(v))) this.setCompletionRequestHandler();
		return registeredResourceTemplate;
	}
	_createRegisteredPrompt(name, title, description, argsSchema, callback, icons, scopeChallenge, _meta) {
		let currentArgsSchema = argsSchema;
		let currentCallback = callback;
		const registeredPrompt = {
			title,
			description,
			argsSchema,
			icons,
			scopeChallenge,
			_meta,
			handler: createPromptHandler(name, argsSchema, callback),
			enabled: true,
			disable: () => registeredPrompt.update({ enabled: false }),
			enable: () => registeredPrompt.update({ enabled: true }),
			remove: () => registeredPrompt.update({ name: null }),
			update: (updates) => {
				if (updates.name !== void 0 && updates.name !== name) {
					delete this._registeredPrompts[name];
					if (updates.name) this._registeredPrompts[updates.name] = registeredPrompt;
				}
				if (updates.title !== void 0) registeredPrompt.title = updates.title;
				if (updates.description !== void 0) registeredPrompt.description = updates.description;
				if (updates.icons !== void 0) registeredPrompt.icons = updates.icons;
				if (updates.scopeChallenge !== void 0) registeredPrompt.scopeChallenge = updates.scopeChallenge === null ? void 0 : updates.scopeChallenge;
				if (updates._meta !== void 0) registeredPrompt._meta = updates._meta;
				let needsHandlerRegen = false;
				if (updates.argsSchema !== void 0) {
					registeredPrompt.argsSchema = updates.argsSchema;
					currentArgsSchema = updates.argsSchema;
					needsHandlerRegen = true;
				}
				if (updates.callback !== void 0) {
					currentCallback = updates.callback;
					needsHandlerRegen = true;
				}
				if (needsHandlerRegen) registeredPrompt.handler = createPromptHandler(name, currentArgsSchema, currentCallback);
				if (updates.enabled !== void 0) registeredPrompt.enabled = updates.enabled;
				this.sendPromptListChanged();
			}
		};
		this._registeredPrompts[name] = registeredPrompt;
		if (argsSchema) {
			const shape = getSchemaShape(argsSchema);
			if (shape) {
				if (Object.values(shape).some((field) => {
					return isCompletable(unwrapOptionalSchema(field));
				})) this.setCompletionRequestHandler();
			}
		}
		return registeredPrompt;
	}
	_createRegisteredTool(name, title, description, inputSchema, outputSchema, annotations, icons, execution, scopeChallenge, _meta, handler) {
		validateAndWarnToolName(name);
		let currentHandler = handler;
		let outputSchemaJson;
		const registeredTool = {
			title,
			description,
			inputSchema,
			outputSchema,
			get outputSchemaJson() {
				return outputSchemaJson ??= convertOutputSchemaJson(registeredTool.outputSchema);
			},
			set outputSchemaJson(value) {
				outputSchemaJson = value;
			},
			annotations,
			icons,
			execution,
			scopeChallenge,
			_meta,
			handler,
			executor: createToolExecutor(inputSchema, handler),
			enabled: true,
			disable: () => registeredTool.update({ enabled: false }),
			enable: () => registeredTool.update({ enabled: true }),
			remove: () => registeredTool.update({ name: null }),
			update: (updates) => {
				if (updates.name !== void 0 && updates.name !== name) {
					if (typeof updates.name === "string") validateAndWarnToolName(updates.name);
					delete this._registeredTools[name];
					delete this._toolInputSchemaJson[name];
					if (updates.name) {
						delete this._toolInputSchemaJson[updates.name];
						this._registeredTools[updates.name] = registeredTool;
						name = updates.name;
					}
				}
				if (updates.title !== void 0) registeredTool.title = updates.title;
				if (updates.description !== void 0) registeredTool.description = updates.description;
				let needsExecutorRegen = false;
				if (updates.paramsSchema !== void 0) {
					registeredTool.inputSchema = updates.paramsSchema;
					delete this._toolInputSchemaJson[name];
					needsExecutorRegen = true;
				}
				if (updates.callback !== void 0) {
					registeredTool.handler = updates.callback;
					currentHandler = updates.callback;
					needsExecutorRegen = true;
				}
				if (needsExecutorRegen) registeredTool.executor = createToolExecutor(registeredTool.inputSchema, currentHandler);
				if (updates.outputSchema !== void 0) {
					registeredTool.outputSchema = updates.outputSchema;
					registeredTool.outputSchemaJson = convertOutputSchemaJson(updates.outputSchema);
				}
				if (updates.annotations !== void 0) registeredTool.annotations = updates.annotations;
				if (updates.icons !== void 0) registeredTool.icons = updates.icons;
				if (updates.scopeChallenge !== void 0) registeredTool.scopeChallenge = updates.scopeChallenge === null ? void 0 : updates.scopeChallenge;
				if (updates._meta !== void 0) registeredTool._meta = updates._meta;
				if (updates.enabled !== void 0) registeredTool.enabled = updates.enabled;
				this.sendToolListChanged();
			}
		};
		this._registeredTools[name] = registeredTool;
		this.setToolRequestHandlers();
		this.sendToolListChanged();
		return registeredTool;
	}
	registerTool(name, config, cb) {
		if (this._registeredTools[name]) throw new Error(`Tool ${name} is already registered`);
		const { title, description, inputSchema, outputSchema, annotations, icons, scopeChallenge, _meta } = config;
		return this._createRegisteredTool(name, title, description, normalizeRawShapeSchema(inputSchema), normalizeRawShapeSchema(outputSchema), annotations, icons, void 0, scopeChallenge, _meta, cb);
	}
	registerPrompt(name, config, cb) {
		if (this._registeredPrompts[name]) throw new Error(`Prompt ${name} is already registered`);
		const { title, description, argsSchema, icons, scopeChallenge, _meta } = config;
		const registeredPrompt = this._createRegisteredPrompt(name, title, description, normalizeRawShapeSchema(argsSchema), cb, icons, scopeChallenge, _meta);
		this.setPromptRequestHandlers();
		this.sendPromptListChanged();
		return registeredPrompt;
	}
	/**
	* Checks if the server is connected to a transport.
	* @returns `true` if the server is connected
	*/
	isConnected() {
		return this.server.transport !== void 0;
	}
	/**
	* Sends a logging message to the client, if connected.
	* Note: You only need to send the parameters object, not the entire JSON-RPC message.
	* @see {@linkcode LoggingMessageNotification}
	* @param params
	* @param sessionId Optional for stateless transports and backward compatibility.
	*
	* @example
	* ```ts source="./mcp.examples.ts#McpServer_sendLoggingMessage_basic"
	* await server.sendLoggingMessage({
	*     level: 'info',
	*     data: 'Processing complete'
	* });
	* ```
	*
	* @deprecated Deprecated as of protocol version 2026-07-28 (SEP-2577).
	* Remains functional during the deprecation window (at least twelve months).
	* Migrate to stderr logging (STDIO servers) or OpenTelemetry.
	*/
	async sendLoggingMessage(params, sessionId) {
		return this.server.sendLoggingMessage(params, sessionId);
	}
	/**
	* Sends a resource list changed event to the client, if connected.
	*/
	sendResourceListChanged() {
		if (this.isConnected()) this.server.sendResourceListChanged();
	}
	/**
	* Sends a tool list changed event to the client, if connected.
	*/
	sendToolListChanged() {
		if (this.isConnected()) this.server.sendToolListChanged();
	}
	/**
	* Sends a prompt list changed event to the client, if connected.
	*/
	sendPromptListChanged() {
		if (this.isConnected()) this.server.sendPromptListChanged();
	}
};
/**
* Creates an executor that invokes the handler with the appropriate arguments.
* When `inputSchema` is defined, the handler is called with `(args, ctx)`.
* When `inputSchema` is undefined, the handler is called with just `(ctx)`.
*/
function createToolExecutor(inputSchema, handler) {
	if (inputSchema) {
		const callback$1 = handler;
		return async (args, ctx) => callback$1(args, ctx);
	}
	const callback = handler;
	return async (_args, ctx) => callback(ctx);
}
var EMPTY_OBJECT_JSON_SCHEMA = {
	type: "object",
	properties: {}
};
/** Converts a tool's `inputSchema` for `tools/list` and warns on an invalid SEP-2243 `x-mcp-header` declaration. */
function convertListedInputSchema(name, inputSchema) {
	const json = standardSchemaToJsonSchema(inputSchema, "input");
	const scan = scanXMcpHeaderDeclarations(json);
	if (!scan.valid) console.warn(`[mcp-sdk] tool '${name}' carries an invalid x-mcp-header declaration and will be excluded by conforming Streamable HTTP clients: ${scan.reason}`);
	return json;
}
/**
* Convert a registered `outputSchema` to JSON Schema, memoised on {@link RegisteredTool.outputSchemaJson}
* so `tools/call` passes the SAME advertised schema to the wire codec's `projectCallToolResult` that
* `tools/list` emits (and that the 2025 codec's `encodeResult('tools/list', …)` may wrap). A conversion
* failure yields `undefined` so the failure surfaces where it always has (`tools/list`).
*/
function convertOutputSchemaJson(outputSchema) {
	if (outputSchema === void 0) return void 0;
	try {
		return standardSchemaToJsonSchema(outputSchema, "output");
	} catch {
		return;
	}
}
/**
* Creates a type-safe prompt handler that captures the schema and callback in a closure.
* This eliminates the need for type assertions at the call site.
*/
function createPromptHandler(name, argsSchema, callback) {
	if (argsSchema) {
		const typedCallback = callback;
		return async (args, ctx) => {
			const parseResult = await validateStandardSchema(argsSchema, args ?? {});
			if (!parseResult.success) throw new ProtocolError(ProtocolErrorCode.InvalidParams, `Invalid arguments for prompt ${name}: ${parseResult.error}`);
			return typedCallback(parseResult.data, ctx);
		};
	} else {
		const typedCallback = callback;
		return async (_args, ctx) => {
			return typedCallback(ctx);
		};
	}
}
function createCompletionResult(suggestions) {
	return { completion: {
		values: suggestions.map(String).slice(0, 100),
		total: suggestions.length,
		hasMore: suggestions.length > 100
	} };
}
var EMPTY_COMPLETION_RESULT = { completion: {
	values: [],
	hasMore: false
} };
/** @internal Gets the shape of a Zod object schema */
function getSchemaShape(schema) {
	const candidate = schema;
	if (candidate.shape && typeof candidate.shape === "object") return candidate.shape;
}
/** @internal Checks if a Zod schema is optional */
function isOptionalSchema(schema) {
	return schema?.type === "optional";
}
/** @internal Unwraps an optional Zod schema */
function unwrapOptionalSchema(schema) {
	if (!isOptionalSchema(schema)) return schema;
	return schema.def?.innerType ?? schema;
}
// node_modules/.pnpm/@modelcontextprotocol+server@2.4.0/node_modules/@modelcontextprotocol/server/dist/listenRouter-Bartj63y.mjs
/**
* A `ServerEventBus` backed by an in-process listener set.
*
* `publish()` delivers synchronously to the live listener set (a listener
* unsubscribing itself mid-dispatch is safe; the entry's listen-router
* listeners never unsubscribe peers). A throwing listener does not stop
* delivery to the others.
*/
var InMemoryServerEventBus = class {
	_listeners = /* @__PURE__ */ new Set();
	/**
	* @param onerror - Optional callback for errors thrown by listeners
	*   during dispatch.
	*/
	constructor(onerror) {
		this.onerror = onerror;
	}
	publish(event) {
		for (const listener of this._listeners) try {
			listener(event);
		} catch (error) {
			this.onerror?.(error instanceof Error ? error : new Error(String(error)));
		}
	}
	subscribe(listener) {
		this._listeners.add(listener);
		let live = true;
		return () => {
			if (!live) return;
			live = false;
			this._listeners.delete(listener);
		};
	}
	/** The number of currently registered listeners (test/introspection only — the routers track capacity via their own open-subscription set). */
	get listenerCount() {
		return this._listeners.size;
	}
};
/** Build a {@linkcode ServerNotifier} over a bus. */
function createServerNotifier(bus) {
	return {
		toolsChanged: () => bus.publish({ kind: "tools_list_changed" }),
		promptsChanged: () => bus.publish({ kind: "prompts_list_changed" }),
		resourcesChanged: () => bus.publish({ kind: "resources_list_changed" }),
		resourceUpdated: (uri) => bus.publish({
			kind: "resource_updated",
			uri
		})
	};
}
/**
* Whether a `subscriptions/listen` filter accepts a given change event.
*
* Pure: no I/O, no mutation. The filter governs ONLY the four
* subscription-gated change types — non-gated notifications never reach the
* bus and are not modeled here.
*
* `resource_updated` matches only when `resourceSubscriptions` is present and
* contains the event's URI exactly (per the spec: "for these resource URIs").
*/
function listenFilterAccepts(filter, event) {
	switch (event.kind) {
		case "tools_list_changed": return filter.toolsListChanged === true;
		case "prompts_list_changed": return filter.promptsListChanged === true;
		case "resources_list_changed": return filter.resourcesListChanged === true;
		case "resource_updated": return filter.resourceSubscriptions !== void 0 && filter.resourceSubscriptions.includes(event.uri);
	}
}
/**
* The honored subset of a requested filter: keeps only the fields the client
* explicitly opted in to (drops `false` and absent fields), narrowed against
* the server's declared capabilities when supplied. The serving entry sends
* this back in `notifications/subscriptions/acknowledged` so the ack reflects
* what the server can actually deliver.
*
* - `toolsListChanged` is honored only when `capabilities.tools.listChanged`
*   is advertised; likewise `promptsListChanged` / `resourcesListChanged`.
* - `resourceSubscriptions` is honored only when
*   `capabilities.resources.subscribe` is advertised.
*
* `capabilities` is optional on this pure helper for test convenience only —
* both wired routers REQUIRE capabilities at the call site (the HTTP router's
* `serve()` takes a required parameter; `StdioListenRouter.serve()` throws
* before `setServerCapabilities()` was called), so the fail-open
* `undefined → honor everything` branch is never reachable on a wired entry.
*/
function honoredSubset(requested, capabilities) {
	const honored = {};
	const allow = (bit) => capabilities === void 0 || bit === true;
	if (requested.toolsListChanged === true && allow(capabilities?.tools?.listChanged)) honored.toolsListChanged = true;
	if (requested.promptsListChanged === true && allow(capabilities?.prompts?.listChanged)) honored.promptsListChanged = true;
	if (requested.resourcesListChanged === true && allow(capabilities?.resources?.listChanged)) honored.resourcesListChanged = true;
	if (requested.resourceSubscriptions !== void 0 && requested.resourceSubscriptions.length > 0 && allow(capabilities?.resources?.subscribe)) honored.resourceSubscriptions = [...requested.resourceSubscriptions];
	return honored;
}
/** Map a {@linkcode ServerEvent} onto its wire notification `{method, params}`. */
function serverEventToNotification(event) {
	switch (event.kind) {
		case "tools_list_changed": return {
			method: "notifications/tools/list_changed",
			...event.params !== void 0 && { params: event.params }
		};
		case "prompts_list_changed": return {
			method: "notifications/prompts/list_changed",
			...event.params !== void 0 && { params: event.params }
		};
		case "resources_list_changed": return {
			method: "notifications/resources/list_changed",
			...event.params !== void 0 && { params: event.params }
		};
		case "resource_updated": return {
			method: "notifications/resources/updated",
			params: {
				...event.params,
				uri: event.uri
			}
		};
	}
}
function jsonRpcError(id, code, message) {
	return Response.json({
		jsonrpc: "2.0",
		error: {
			code,
			message
		},
		id
	}, { status: 200 });
}
/** Stamp the subscription id onto a notification's `_meta`. Non-mutating. */
function stampSubscriptionId(notification, subscriptionId) {
	return {
		method: notification.method,
		params: {
			...notification.params,
			_meta: {
				...notification.params?._meta,
				[SUBSCRIPTION_ID_META_KEY]: subscriptionId
			}
		}
	};
}
/**
* Read the requested filter off a `subscriptions/listen` request body.
* Returns the validated filter, or `undefined` when `params.notifications`
* is absent or fails the schema (the caller answers `-32602` — the spec
* marks `notifications` REQUIRED on the listen request).
*/
function parseListenFilter(message) {
	const outcome = codecForVersion(MODERN_WIRE_REVISION).validateRequest("subscriptions/listen", message);
	return outcome.ok ? outcome.value.params?.notifications : void 0;
}
function createListenRouter(options) {
	const { bus, onerror } = options;
	const maxSubscriptions = options.maxSubscriptions ?? 1024;
	const keepAliveMs = options.keepAliveMs ?? 15e3;
	const open = /* @__PURE__ */ new Set();
	function serve(message, signal, capabilities, serverInfo) {
		if (open.size >= maxSubscriptions) {
			onerror?.(/* @__PURE__ */ new Error(`subscriptions/listen refused: subscription limit reached (${maxSubscriptions})`));
			return jsonRpcError(message.id, -32603, "Subscription limit reached");
		}
		const filter = parseListenFilter(message);
		if (filter === void 0) return jsonRpcError(message.id, -32602, "Invalid params: 'notifications' is required and must be a valid SubscriptionFilter");
		const honored = honoredSubset(filter, capabilities);
		const subscriptionId = message.id;
		const encoder = new TextEncoder();
		let controller;
		let closed = false;
		let unsubscribe;
		let keepAliveTimer;
		let abortCleanup;
		const writeFrame = (frame) => {
			if (closed) return;
			try {
				controller.enqueue(encoder.encode(frame));
			} catch (error) {
				onerror?.(error instanceof Error ? error : new Error(String(error)));
			}
		};
		const writeNotification = (method, params) => {
			writeFrame(`event: message\ndata: ${JSON.stringify({
				jsonrpc: "2.0",
				method,
				params
			})}\n\n`);
		};
		const teardown = (graceful) => {
			if (closed) return;
			if (graceful) writeFrame(`event: message\ndata: ${JSON.stringify({
				jsonrpc: "2.0",
				id: subscriptionId,
				result: {
					resultType: "complete",
					_meta: {
						[SUBSCRIPTION_ID_META_KEY]: subscriptionId,
						[SERVER_INFO_META_KEY]: serverInfo
					}
				}
			})}\n\n`);
			closed = true;
			try {
				unsubscribe?.();
			} catch (error) {
				onerror?.(error instanceof Error ? error : new Error(String(error)));
			}
			if (keepAliveTimer !== void 0) clearInterval(keepAliveTimer);
			abortCleanup?.();
			open.delete(teardown);
			try {
				controller.close();
			} catch {}
		};
		const readable = new ReadableStream({
			start(streamController) {
				controller = streamController;
				const ack = stampSubscriptionId({
					method: "notifications/subscriptions/acknowledged",
					params: { notifications: honored }
				}, subscriptionId);
				writeNotification(ack.method, ack.params);
				if (Object.keys(honored).length === 0) {
					teardown(true);
					return;
				}
				unsubscribe = bus.subscribe((event) => {
					if (closed || !listenFilterAccepts(honored, event)) return;
					const note = stampSubscriptionId(serverEventToNotification(event), subscriptionId);
					writeNotification(note.method, note.params);
				});
				keepAliveTimer = armSseKeepAlive(keepAliveMs, () => writeFrame(": keepalive\n\n"));
				open.add(teardown);
			},
			cancel() {
				teardown(false);
			}
		});
		if (signal !== void 0) if (signal.aborted) teardown(false);
		else {
			const onAbort = () => teardown(false);
			signal.addEventListener("abort", onAbort, { once: true });
			abortCleanup = () => signal.removeEventListener("abort", onAbort);
		}
		return new Response(readable, {
			status: 200,
			headers: {
				"Content-Type": "text/event-stream",
				"Cache-Control": "no-cache, no-transform",
				Connection: "keep-alive",
				"X-Accel-Buffering": "no"
			}
		});
	}
	return {
		serve,
		closeAll() {
			for (const teardown of open) teardown(true);
		},
		get openCount() {
			return open.size;
		}
	};
}
// node_modules/.pnpm/@modelcontextprotocol+server@2.4.0/node_modules/@modelcontextprotocol/server/dist/index.mjs
/**
* Serves one classified inbound message on the given server instance and
* returns the HTTP response for the exchange.
*
* The instance is connected to a fresh single-exchange transport, the message
* is injected through the normal transport message path, and whatever the
* dispatch layer produces (the handler result, a protocol-level rejection, or
* streamed related messages followed by the result) is captured as the
* returned `Response`. For request exchanges, teardown rides the transport's
* close chain once the terminal response has been delivered; notification
* exchanges resolve with the 202 response immediately and do NOT run the
* close chain — the transport stays connected until the caller closes it or
* drops the per-request instance, which is the caller's choice either way.
*/
async function invoke(server, message, ctx) {
	const transport = new PerRequestHTTPServerTransport({
		classification: ctx.classification,
		...ctx.responseMode !== void 0 && { responseMode: ctx.responseMode },
		...ctx.keepAliveMs !== void 0 && { keepAliveMs: ctx.keepAliveMs }
	});
	await server.connect(transport);
	return transport.handleMessage(message, {
		...ctx.request !== void 0 && { request: ctx.request },
		...ctx.authInfo !== void 0 && { authInfo: ctx.authInfo }
	});
}
/** Default upper bound, in bytes, on a request body read by the HTTP entry points (4 MiB). */
var DEFAULT_MAX_REQUEST_BODY_SIZE = 4194304;
/** Upper bound on the number of messages accepted in one JSON-RPC batch array. */
var MAX_BATCH_SIZE = 100;
/** The message answered with 413 for a request body over `maxBytes`. */
function requestBodyTooLargeMessage(maxBytes) {
	return `Payload Too Large: Request body must not exceed ${maxBytes} bytes`;
}
/**
* Resolves a `maxRequestBodySize` option to the bound to apply: the default when
* omitted, otherwise the value itself, which must be a positive finite number of
* bytes (a `RangeError` is thrown at configuration time for anything else).
*/
function resolveMaxRequestBodySize(value) {
	if (value === void 0) return DEFAULT_MAX_REQUEST_BODY_SIZE;
	if (typeof value !== "number" || !Number.isFinite(value) || value <= 0) throw new RangeError(`maxRequestBodySize must be a positive number of bytes, got ${String(value)}`);
	return value;
}
/**
* Reads a request body as text, up to `maxBytes` (default
* {@linkcode DEFAULT_MAX_REQUEST_BODY_SIZE}). A declared `Content-Length` over the
* limit is refused without reading anything; otherwise the read stops as soon as
* more than the limit has arrived. Stream failures propagate.
*/
async function readRequestBody(request, maxBytes = DEFAULT_MAX_REQUEST_BODY_SIZE) {
	if (Number(request.headers.get("content-length")) > maxBytes) return { tooLarge: true };
	if (request.body === null) return {
		tooLarge: false,
		text: ""
	};
	const reader = request.body.getReader();
	const decoder = new TextDecoder();
	let received = 0;
	let text = "";
	try {
		for (;;) {
			const { done, value } = await reader.read();
			if (done) break;
			received += value.byteLength;
			if (received > maxBytes) return { tooLarge: true };
			text += decoder.decode(value, { stream: true });
		}
	} finally {
		reader.releaseLock();
	}
	return {
		tooLarge: false,
		text: text + decoder.decode()
	};
}
/**
* Server transport for Web Standards Streamable HTTP: this implements the MCP Streamable HTTP transport specification
* using Web Standard APIs (`Request`, `Response`, `ReadableStream`).
*
* This transport works on any runtime that supports Web Standards: Node.js 18+, Cloudflare Workers, Deno, Bun, etc.
*
* In stateful mode:
* - Session ID is generated and included in response headers
* - Session ID is always included in initialization responses
* - Requests with invalid session IDs are rejected with `404 Not Found`
* - Non-initialization requests without a session ID are rejected with `400 Bad Request`
* - State is maintained in-memory (connections, message history)
*
* In stateless mode:
* - No Session ID is included in any responses
* - No session validation is performed
*
* @example Stateful setup
* ```ts source="./streamableHttp.examples.ts#WebStandardStreamableHTTPServerTransport_stateful"
* const server = new McpServer({ name: 'my-server', version: '1.0.0' });
*
* const transport = new WebStandardStreamableHTTPServerTransport({
*     sessionIdGenerator: () => crypto.randomUUID()
* });
*
* await server.connect(transport);
* ```
*
* @example Stateless setup
* ```ts source="./streamableHttp.examples.ts#WebStandardStreamableHTTPServerTransport_stateless"
* const transport = new WebStandardStreamableHTTPServerTransport({
*     sessionIdGenerator: undefined
* });
* ```
*
* @example Hono.js
* ```ts source="./streamableHttp.examples.ts#WebStandardStreamableHTTPServerTransport_hono"
* app.all('/mcp', async c => {
*     // Stateless example: create a server and a transport per request.
*     const server = new McpServer({ name: 'my-server', version: '1.0.0' });
*     const transport = new WebStandardStreamableHTTPServerTransport({ sessionIdGenerator: undefined });
*     await server.connect(transport);
*     return transport.handleRequest(c.req.raw);
* });
* ```
*
* @example Cloudflare Workers
* ```ts source="./streamableHttp.examples.ts#WebStandardStreamableHTTPServerTransport_workers"
* const worker = {
*     async fetch(request: Request): Promise<Response> {
*         // Stateless example: create a server and a transport per request.
*         const server = new McpServer({ name: 'my-server', version: '1.0.0' });
*         const transport = new WebStandardStreamableHTTPServerTransport({ sessionIdGenerator: undefined });
*         await server.connect(transport);
*         return transport.handleRequest(request);
*     }
* };
* ```
*/
var WebStandardStreamableHTTPServerTransport = class {
	sessionIdGenerator;
	_started = false;
	_hasHandledRequest = false;
	_closed = false;
	_streamMapping = /* @__PURE__ */ new Map();
	_requestToStreamMapping = /* @__PURE__ */ new Map();
	_requestResponseMap = /* @__PURE__ */ new Map();
	_initialized = false;
	_enableJsonResponse = false;
	_standaloneSseStreamId = "_GET_stream";
	_eventStore;
	_onsessioninitialized;
	_onsessionclosed;
	_allowedHosts;
	_allowedOrigins;
	_enableDnsRebindingProtection;
	_retryInterval;
	_supportedProtocolVersions;
	_keepAliveMs;
	_maxRequestBodySize;
	_scopeChallengeResolver;
	sessionId;
	onclose;
	onerror;
	onmessage;
	constructor(options = {}) {
		this.sessionIdGenerator = options.sessionIdGenerator;
		this._enableJsonResponse = options.enableJsonResponse ?? false;
		this._eventStore = options.eventStore;
		this._onsessioninitialized = options.onsessioninitialized;
		this._onsessionclosed = options.onsessionclosed;
		this._allowedHosts = options.allowedHosts;
		this._allowedOrigins = options.allowedOrigins;
		this._enableDnsRebindingProtection = options.enableDnsRebindingProtection ?? false;
		this._retryInterval = options.retryInterval;
		this._supportedProtocolVersions = options.supportedProtocolVersions ?? SUPPORTED_PROTOCOL_VERSIONS;
		this._keepAliveMs = options.keepAliveMs ?? 15e3;
		this._maxRequestBodySize = resolveMaxRequestBodySize(options.maxRequestBodySize);
	}
	startKeepAlive(controller, encoder) {
		if (this._closed) return void 0;
		const timer = armSseKeepAlive(this._keepAliveMs, () => {
			try {
				controller.enqueue(encoder.encode(": keepalive\n\n"));
			} catch {
				if (timer !== void 0) clearInterval(timer);
			}
		});
		return timer;
	}
	/** Sets the scope challenge resolver for parsed JSON-RPC requests. */
	setScopeChallengeResolver(resolver) {
		this._scopeChallengeResolver = resolver;
	}
	/**
	* Starts the transport. This is required by the {@linkcode Transport} interface but is a no-op
	* for the Streamable HTTP transport as connections are managed per-request.
	*/
	async start() {
		if (this._started) throw new Error("Transport already started");
		this._started = true;
	}
	/**
	* Sets the supported protocol versions for header validation.
	* Called by the server during {@linkcode server/server.Server.connect | connect()} to pass its supported versions.
	*/
	setSupportedProtocolVersions(versions) {
		this._supportedProtocolVersions = versions;
	}
	/**
	* Helper to create a JSON error response
	*/
	createJsonErrorResponse(status, code, message, options) {
		const error = {
			code,
			message
		};
		if (options?.data !== void 0) error.data = options.data;
		return Response.json({
			jsonrpc: "2.0",
			error,
			id: null
		}, {
			status,
			headers: {
				"Content-Type": "application/json",
				...options?.headers
			}
		});
	}
	async _checkScopeChallenge(messages, authInfo) {
		if (!this._scopeChallengeResolver) return;
		const challenge = await findScopeChallenge(messages.filter((message) => isJSONRPCRequest(message)), authInfo, this._scopeChallengeResolver);
		return challenge === void 0 ? void 0 : createScopeChallengeResponse(challenge, scopeChallengeResourceMetadataUrl(authInfo));
	}
	/**
	* Validates request headers for DNS rebinding protection.
	* @returns Error response if validation fails, `undefined` if validation passes.
	*/
	validateRequestHeaders(req) {
		if (!this._enableDnsRebindingProtection) return;
		if (this._allowedHosts && this._allowedHosts.length > 0) {
			const hostHeader = req.headers.get("host");
			if (!hostHeader || !this._allowedHosts.includes(hostHeader)) {
				const error = `Invalid Host header: ${hostHeader}`;
				this.onerror?.(new Error(error));
				return this.createJsonErrorResponse(403, -32e3, error);
			}
		}
		if (this._allowedOrigins && this._allowedOrigins.length > 0) {
			const originHeader = req.headers.get("origin");
			if (originHeader && !this._allowedOrigins.includes(originHeader)) {
				const error = `Invalid Origin header: ${originHeader}`;
				this.onerror?.(new Error(error));
				return this.createJsonErrorResponse(403, -32e3, error);
			}
		}
	}
	/**
	* Handles an incoming HTTP request, whether `GET`, `POST`, or `DELETE`
	* Returns a `Response` object (Web Standard)
	*/
	async handleRequest(req, options) {
		if (this._closed) return this.createJsonErrorResponse(404, -32001, "Session not found");
		if (!this.sessionIdGenerator && this._hasHandledRequest) throw new Error("Stateless transport cannot be reused across requests. Create a new transport per request.");
		this._hasHandledRequest = true;
		const validationError = this.validateRequestHeaders(req);
		if (validationError) return validationError;
		switch (req.method) {
			case "POST": return this.handlePostRequest(req, options);
			case "GET": return this.handleGetRequest(req);
			case "DELETE": return this.handleDeleteRequest(req);
			default: return this.handleUnsupportedRequest();
		}
	}
	/**
	* Returns true if the client's protocol version supports empty SSE data in
	* priming events (the fix shipped with protocol version `2025-11-25`).
	*
	* The version is checked for membership in this transport instance's
	* supported protocol versions rather than with an open-ended
	* `>= '2025-11-25'` comparison: the value may come from an `initialize`
	* request body, which (unlike the `MCP-Protocol-Version` header) is not
	* validated against `supportedProtocolVersions` before reaching this
	* check. An unknown future version string must not silently enable
	* behavior reserved for versions this transport actually supports.
	*/
	supportsEmptySSEData(protocolVersion) {
		return this._supportedProtocolVersions.includes(protocolVersion) && protocolVersion >= "2025-11-25";
	}
	/**
	* Writes a priming event to establish resumption capability.
	* Only sends if `eventStore` is configured (opt-in for resumability) and
	* the client's protocol version supports empty SSE data (a supported
	* version that is >= `2025-11-25`).
	*/
	async writePrimingEvent(controller, encoder, streamId, protocolVersion) {
		if (!this._eventStore) return;
		if (!this.supportsEmptySSEData(protocolVersion)) return;
		const primingEventId = await this._eventStore.storeEvent(streamId, {});
		let primingEvent = `id: ${primingEventId}\ndata: \n\n`;
		if (this._retryInterval !== void 0) primingEvent = `id: ${primingEventId}\nretry: ${this._retryInterval}\ndata: \n\n`;
		controller.enqueue(encoder.encode(primingEvent));
	}
	/**
	* Handles `GET` requests for SSE stream
	*/
	async handleGetRequest(req) {
		if (!req.headers.get("accept")?.includes("text/event-stream")) {
			this.onerror?.(/* @__PURE__ */ new Error("Not Acceptable: Client must accept text/event-stream"));
			return this.createJsonErrorResponse(406, -32e3, "Not Acceptable: Client must accept text/event-stream");
		}
		const sessionError = this.validateSession(req);
		if (sessionError) return sessionError;
		const protocolError = this.validateProtocolVersion(req);
		if (protocolError) return protocolError;
		if (this._eventStore) {
			const lastEventId = req.headers.get("last-event-id");
			if (lastEventId) return this.replayEvents(lastEventId);
		}
		if (this._streamMapping.get(this._standaloneSseStreamId) !== void 0) {
			this.onerror?.(/* @__PURE__ */ new Error("Conflict: Only one SSE stream is allowed per session"));
			return this.createJsonErrorResponse(409, -32e3, "Conflict: Only one SSE stream is allowed per session");
		}
		const encoder = new TextEncoder();
		let streamController;
		let keepAliveTimer;
		const readable = new ReadableStream({
			start: (controller) => {
				streamController = controller;
			},
			cancel: () => {
				if (keepAliveTimer !== void 0) clearInterval(keepAliveTimer);
				if (this._streamMapping.get(this._standaloneSseStreamId)?.controller === streamController) this._streamMapping.delete(this._standaloneSseStreamId);
			}
		});
		const headers = {
			"Content-Type": "text/event-stream",
			"Cache-Control": "no-cache, no-transform",
			Connection: "keep-alive",
			"X-Accel-Buffering": "no"
		};
		if (this.sessionId !== void 0) headers["mcp-session-id"] = this.sessionId;
		this._streamMapping.set(this._standaloneSseStreamId, {
			controller: streamController,
			encoder,
			cleanup: () => {
				if (keepAliveTimer !== void 0) clearInterval(keepAliveTimer);
				this._streamMapping.delete(this._standaloneSseStreamId);
				try {
					streamController.close();
				} catch {}
			}
		});
		keepAliveTimer = this.startKeepAlive(streamController, encoder);
		return new Response(readable, { headers });
	}
	/**
	* Replays events that would have been sent after the specified event ID
	* Only used when resumability is enabled
	*/
	async replayEvents(lastEventId) {
		if (!this._eventStore) {
			this.onerror?.(/* @__PURE__ */ new Error("Event store not configured"));
			return this.createJsonErrorResponse(400, -32e3, "Event store not configured");
		}
		try {
			let streamId;
			if (this._eventStore.getStreamIdForEventId) {
				streamId = await this._eventStore.getStreamIdForEventId(lastEventId);
				if (!streamId) {
					this.onerror?.(/* @__PURE__ */ new Error("Invalid event ID format"));
					return this.createJsonErrorResponse(400, -32e3, "Invalid event ID format");
				}
				if (this._streamMapping.get(streamId) !== void 0) {
					this.onerror?.(/* @__PURE__ */ new Error("Conflict: Stream already has an active connection"));
					return this.createJsonErrorResponse(409, -32e3, "Conflict: Stream already has an active connection");
				}
			}
			const headers = {
				"Content-Type": "text/event-stream",
				"Cache-Control": "no-cache, no-transform",
				Connection: "keep-alive",
				"X-Accel-Buffering": "no"
			};
			if (this.sessionId !== void 0) headers["mcp-session-id"] = this.sessionId;
			const encoder = new TextEncoder();
			let streamController;
			let keepAliveTimer;
			let cancelled = false;
			let replayedStreamId;
			const readable = new ReadableStream({
				start: (controller) => {
					streamController = controller;
				},
				cancel: () => {
					cancelled = true;
					if (keepAliveTimer !== void 0) clearInterval(keepAliveTimer);
					if (replayedStreamId !== void 0 && this._streamMapping.get(replayedStreamId)?.controller === streamController) this._streamMapping.delete(replayedStreamId);
				}
			});
			const replayedEventIds = /* @__PURE__ */ new Set();
			replayedStreamId = await this._eventStore.replayEventsAfter(lastEventId, { send: async (eventId, message) => {
				replayedEventIds.add(eventId);
				if (!this.writeSSEEvent(streamController, encoder, message, eventId)) try {
					streamController.close();
				} catch {}
			} });
			if (this._closed || cancelled) {
				try {
					streamController.close();
				} catch {}
				return this.createJsonErrorResponse(404, -32001, "Session not found");
			}
			this._streamMapping.get(replayedStreamId)?.cleanup();
			this._streamMapping.set(replayedStreamId, {
				controller: streamController,
				encoder,
				replayedEventIds,
				cleanup: () => {
					if (keepAliveTimer !== void 0) clearInterval(keepAliveTimer);
					this._streamMapping.delete(replayedStreamId);
					try {
						streamController.close();
					} catch {}
				}
			});
			if (replayedStreamId !== this._standaloneSseStreamId) {
				if (![...this._requestToStreamMapping.values()].includes(replayedStreamId)) {
					this._streamMapping.delete(replayedStreamId);
					try {
						streamController.close();
					} catch {}
				}
			}
			if (this._streamMapping.get(replayedStreamId)?.controller === streamController) keepAliveTimer = this.startKeepAlive(streamController, encoder);
			return new Response(readable, { headers });
		} catch (error) {
			this.onerror?.(error);
			return this.createJsonErrorResponse(500, -32e3, "Error replaying events");
		}
	}
	/**
	* Writes an event to an SSE stream via controller with proper formatting
	*/
	writeSSEEvent(controller, encoder, message, eventId) {
		try {
			let eventData = `event: message\n`;
			if (eventId) eventData += `id: ${eventId}\n`;
			eventData += `data: ${JSON.stringify(message)}\n\n`;
			controller.enqueue(encoder.encode(eventData));
			return true;
		} catch (error) {
			this.onerror?.(error);
			return false;
		}
	}
	/**
	* Handles unsupported requests (`PUT`, `PATCH`, etc.)
	*/
	handleUnsupportedRequest() {
		this.onerror?.(/* @__PURE__ */ new Error("Method not allowed."));
		return Response.json({
			jsonrpc: "2.0",
			error: {
				code: -32e3,
				message: "Method not allowed."
			},
			id: null
		}, {
			status: 405,
			headers: {
				Allow: "GET, POST, DELETE",
				"Content-Type": "application/json"
			}
		});
	}
	/**
	* Handles `POST` requests containing JSON-RPC messages
	*/
	async handlePostRequest(req, options) {
		try {
			const acceptHeader = req.headers.get("accept");
			if (!acceptHeader?.includes("application/json") || !acceptHeader.includes("text/event-stream")) {
				this.onerror?.(/* @__PURE__ */ new Error("Not Acceptable: Client must accept both application/json and text/event-stream"));
				return this.createJsonErrorResponse(406, -32e3, "Not Acceptable: Client must accept both application/json and text/event-stream");
			}
			if (!isJsonContentType(req.headers.get("content-type"))) {
				this.onerror?.(/* @__PURE__ */ new Error("Unsupported Media Type: Content-Type must be application/json"));
				return this.createJsonErrorResponse(415, -32e3, "Unsupported Media Type: Content-Type must be application/json");
			}
			const request = req;
			let rawMessage;
			if (options?.parsedBody === void 0) try {
				const body = await readRequestBody(req, this._maxRequestBodySize);
				if (body.tooLarge) {
					const message = requestBodyTooLargeMessage(this._maxRequestBodySize);
					this.onerror?.(new Error(message));
					return this.createJsonErrorResponse(413, -32e3, message);
				}
				rawMessage = JSON.parse(body.text);
			} catch (error) {
				this.onerror?.(error);
				return this.createJsonErrorResponse(400, -32700, "Parse error: Invalid JSON");
			}
			else rawMessage = options.parsedBody;
			if (Array.isArray(rawMessage) && rawMessage.length > MAX_BATCH_SIZE) {
				this.onerror?.(/* @__PURE__ */ new Error(`Invalid Request: Batch must not exceed ${MAX_BATCH_SIZE} messages`));
				return this.createJsonErrorResponse(400, -32600, `Invalid Request: Batch must not exceed ${MAX_BATCH_SIZE} messages`);
			}
			let messages;
			try {
				messages = Array.isArray(rawMessage) ? rawMessage.map((msg) => JSONRPCMessageSchema.parse(msg)) : [JSONRPCMessageSchema.parse(rawMessage)];
			} catch (error) {
				this.onerror?.(error);
				return this.createJsonErrorResponse(400, -32700, "Parse error: Invalid JSON-RPC message");
			}
			if (this._closed) return this.createJsonErrorResponse(404, -32001, "Session not found");
			const isInitializationRequest = messages.some((element) => isInitializeRequest(element));
			if (isInitializationRequest) {
				if (this._initialized && this.sessionId !== void 0) {
					this.onerror?.(/* @__PURE__ */ new Error("Invalid Request: Server already initialized"));
					return this.createJsonErrorResponse(400, -32600, "Invalid Request: Server already initialized");
				}
				if (messages.length > 1) {
					this.onerror?.(/* @__PURE__ */ new Error("Invalid Request: Only one initialization request is allowed"));
					return this.createJsonErrorResponse(400, -32600, "Invalid Request: Only one initialization request is allowed");
				}
				this.sessionId = this.sessionIdGenerator?.();
				this._initialized = true;
				if (this.sessionId && this._onsessioninitialized) await Promise.resolve(this._onsessioninitialized(this.sessionId));
			}
			if (!isInitializationRequest) {
				const sessionError = this.validateSession(req);
				if (sessionError) return sessionError;
				const protocolError = this.validateProtocolVersion(req);
				if (protocolError) return protocolError;
			}
			if (this._closed) return this.createJsonErrorResponse(404, -32001, "Session not found");
			let scopeChallengeResponse;
			try {
				scopeChallengeResponse = await this._checkScopeChallenge(messages, options?.authInfo);
			} catch (error) {
				this.onerror?.(error);
				return this.createJsonErrorResponse(500, -32603, "Internal server error");
			}
			if (scopeChallengeResponse) return scopeChallengeResponse;
			if (!messages.some((element) => isJSONRPCRequest(element))) {
				for (const message of messages) this.onmessage?.(message, {
					authInfo: options?.authInfo,
					request
				});
				return new Response(null, { status: 202 });
			}
			const streamId = crypto.randomUUID();
			const initRequest = messages.find((m) => isInitializeRequest(m));
			const clientProtocolVersion = initRequest ? initRequest.params.protocolVersion : req.headers.get("mcp-protocol-version") ?? "2025-03-26";
			if (this._enableJsonResponse) return new Promise((resolve) => {
				this._streamMapping.set(streamId, {
					resolveJson: resolve,
					cleanup: () => {
						this._streamMapping.delete(streamId);
					}
				});
				for (const message of messages) if (isJSONRPCRequest(message)) this._requestToStreamMapping.set(message.id, streamId);
				for (const message of messages) this.onmessage?.(message, {
					authInfo: options?.authInfo,
					request
				});
			});
			const encoder = new TextEncoder();
			let streamController;
			let keepAliveTimer;
			const readable = new ReadableStream({
				start: (controller) => {
					streamController = controller;
				},
				cancel: () => {
					if (keepAliveTimer !== void 0) clearInterval(keepAliveTimer);
					if (this._streamMapping.get(streamId)?.controller === streamController) this._streamMapping.delete(streamId);
				}
			});
			const headers = {
				"Content-Type": "text/event-stream",
				"Cache-Control": "no-cache, no-transform",
				Connection: "keep-alive",
				"X-Accel-Buffering": "no"
			};
			if (this.sessionId !== void 0) headers["mcp-session-id"] = this.sessionId;
			for (const message of messages) if (isJSONRPCRequest(message)) {
				this._streamMapping.set(streamId, {
					controller: streamController,
					encoder,
					cleanup: () => {
						if (keepAliveTimer !== void 0) clearInterval(keepAliveTimer);
						this._streamMapping.delete(streamId);
						try {
							streamController.close();
						} catch {}
					}
				});
				this._requestToStreamMapping.set(message.id, streamId);
			}
			await this.writePrimingEvent(streamController, encoder, streamId, clientProtocolVersion);
			for (const message of messages) {
				let closeSSEStream;
				let closeStandaloneSSEStream;
				if (isJSONRPCRequest(message) && this._eventStore && this.supportsEmptySSEData(clientProtocolVersion)) {
					closeSSEStream = () => {
						this.closeSSEStream(message.id);
					};
					closeStandaloneSSEStream = () => {
						this.closeStandaloneSSEStream();
					};
				}
				this.onmessage?.(message, {
					authInfo: options?.authInfo,
					request,
					closeSSEStream,
					closeStandaloneSSEStream
				});
			}
			if (this._streamMapping.get(streamId)?.controller === streamController) keepAliveTimer = this.startKeepAlive(streamController, encoder);
			return new Response(readable, {
				status: 200,
				headers
			});
		} catch (error) {
			this.onerror?.(error);
			return this.createJsonErrorResponse(400, -32700, "Parse error", { data: String(error) });
		}
	}
	/**
	* Handles `DELETE` requests to terminate sessions
	*/
	async handleDeleteRequest(req) {
		const sessionError = this.validateSession(req);
		if (sessionError) return sessionError;
		const protocolError = this.validateProtocolVersion(req);
		if (protocolError) return protocolError;
		try {
			await Promise.resolve(this._onsessionclosed?.(this.sessionId));
			return new Response(null, { status: 200 });
		} finally {
			await this.close();
		}
	}
	/**
	* Validates session ID for non-initialization requests.
	* Returns `Response` error if invalid, `undefined` otherwise
	*/
	validateSession(req) {
		if (this.sessionIdGenerator === void 0) return;
		if (!this._initialized) {
			this.onerror?.(/* @__PURE__ */ new Error("Bad Request: Server not initialized"));
			return this.createJsonErrorResponse(400, -32e3, "Bad Request: Server not initialized");
		}
		const sessionId = req.headers.get("mcp-session-id");
		if (!sessionId) {
			this.onerror?.(/* @__PURE__ */ new Error("Bad Request: Mcp-Session-Id header is required"));
			return this.createJsonErrorResponse(400, -32e3, "Bad Request: Mcp-Session-Id header is required");
		}
		if (sessionId !== this.sessionId) {
			this.onerror?.(/* @__PURE__ */ new Error("Session not found"));
			return this.createJsonErrorResponse(404, -32001, "Session not found");
		}
	}
	/**
	* Validates the `MCP-Protocol-Version` header on incoming requests.
	*
	* For initialization: Version negotiation handles unknown versions gracefully
	* (server responds with its supported version).
	*
	* For subsequent requests with `MCP-Protocol-Version` header:
	* - Accept if in supported list
	* - 400 if unsupported
	*
	* For HTTP requests without the `MCP-Protocol-Version` header:
	* - Accept and default to the version negotiated at initialization
	*/
	validateProtocolVersion(req) {
		const protocolVersion = req.headers.get("mcp-protocol-version");
		if (protocolVersion !== null && !this._supportedProtocolVersions.includes(protocolVersion)) {
			const error = `Bad Request: Unsupported protocol version: ${protocolVersion} (supported versions: ${this._supportedProtocolVersions.join(", ")})`;
			this.onerror?.(new Error(error));
			return this.createJsonErrorResponse(400, -32e3, error);
		}
	}
	async close() {
		if (this._closed) return;
		this._closed = true;
		for (const { cleanup } of this._streamMapping.values()) cleanup();
		this._streamMapping.clear();
		this._requestResponseMap.clear();
		this.onclose?.();
	}
	/**
	* Close an SSE stream for a specific request, triggering client reconnection.
	* Use this to implement polling behavior during long-running operations -
	* client will reconnect after the retry interval specified in the priming event.
	*/
	closeSSEStream(requestId) {
		const streamId = this._requestToStreamMapping.get(requestId);
		if (!streamId) return;
		const stream = this._streamMapping.get(streamId);
		if (stream) stream.cleanup();
	}
	/**
	* Close the standalone `GET` SSE stream, triggering client reconnection.
	* Use this to implement polling behavior for server-initiated notifications.
	*/
	closeStandaloneSSEStream() {
		const stream = this._streamMapping.get(this._standaloneSseStreamId);
		if (stream) stream.cleanup();
	}
	async send(message, options) {
		let requestId = options?.relatedRequestId;
		if (isJSONRPCResultResponse(message) || isJSONRPCErrorResponse(message)) requestId = message.id;
		if (requestId === void 0) {
			if (isJSONRPCResultResponse(message) || isJSONRPCErrorResponse(message)) throw new Error("Cannot send a response on a standalone SSE stream unless resuming a previous client request");
			let eventId;
			if (this._eventStore) eventId = await this._eventStore.storeEvent(this._standaloneSseStreamId, message);
			const standaloneSse = this._streamMapping.get(this._standaloneSseStreamId);
			if (standaloneSse === void 0) return;
			if (standaloneSse.controller && standaloneSse.encoder && (eventId === void 0 || !standaloneSse.replayedEventIds?.has(eventId))) this.writeSSEEvent(standaloneSse.controller, standaloneSse.encoder, message, eventId);
			return;
		}
		const streamId = this._requestToStreamMapping.get(requestId);
		if (!streamId) throw new Error(`No connection established for request ID: ${String(requestId)}`);
		let stream = this._streamMapping.get(streamId);
		if (!this._enableJsonResponse) {
			let eventId;
			if (this._eventStore) {
				eventId = await this._eventStore.storeEvent(streamId, message);
				stream = this._streamMapping.get(streamId);
			}
			if (stream?.controller && stream?.encoder && (eventId === void 0 || !stream.replayedEventIds?.has(eventId))) this.writeSSEEvent(stream.controller, stream.encoder, message, eventId);
		}
		if (isJSONRPCResultResponse(message) || isJSONRPCErrorResponse(message)) {
			this._requestResponseMap.set(requestId, message);
			const relatedIds = [...this._requestToStreamMapping.entries()].filter(([_, sid]) => sid === streamId).map(([id]) => id);
			if (relatedIds.every((id) => this._requestResponseMap.has(id))) {
				if (!stream) {
					if (this._enableJsonResponse) throw new Error(`No connection established for request ID: ${String(requestId)}`);
					if (!this._eventStore) {
						this.onerror?.(/* @__PURE__ */ new Error(`Response for request ID ${String(requestId)} is undeliverable: per-request stream is disconnected and no eventStore is configured`));
						for (const id of relatedIds) {
							this._requestResponseMap.delete(id);
							this._requestToStreamMapping.delete(id);
						}
						return;
					}
					for (const id of relatedIds) {
						this._requestResponseMap.delete(id);
						this._requestToStreamMapping.delete(id);
					}
					return;
				}
				if (this._enableJsonResponse && stream.resolveJson) {
					const headers = { "Content-Type": "application/json" };
					if (this.sessionId !== void 0) headers["mcp-session-id"] = this.sessionId;
					const responses = relatedIds.map((id) => this._requestResponseMap.get(id));
					if (responses.length === 1) stream.resolveJson(Response.json(responses[0], {
						status: 200,
						headers
					}));
					else stream.resolveJson(Response.json(responses, {
						status: 200,
						headers
					}));
					stream.cleanup();
				} else stream.cleanup();
				for (const id of relatedIds) {
					this._requestResponseMap.delete(id);
					this._requestToStreamMapping.delete(id);
				}
			}
		}
	}
};
/**
* The JSON-RPC id to echo on an entry-built error response: the body's `id`
* when the body is a single JSON-RPC request whose id is a string or number,
* `null` otherwise. Error responses must carry the id of the request they
* correspond to whenever it could be read; `null` is reserved for the cases
* where no single request id is determinable — unparseable bodies, body-less
* methods, notifications, posted responses and batch arrays.
*/
function echoableRequestId(body) {
	if (body === null || typeof body !== "object" || Array.isArray(body)) return null;
	const { method, id } = body;
	if (typeof method !== "string") return null;
	return typeof id === "string" || typeof id === "number" ? id : null;
}
function jsonRpcErrorResponse(httpStatus, code, message, data, id = null) {
	return Response.json({
		jsonrpc: "2.0",
		error: {
			code,
			message,
			...data !== void 0 && { data }
		},
		id
	}, {
		status: httpStatus,
		...httpStatus === 405 && { headers: { Allow: "POST" } }
	});
}
function rejectionResponse(rejection, id = null) {
	return jsonRpcErrorResponse(rejection.httpStatus, rejection.code, rejection.message, rejection.data, id);
}
function toError(value) {
	return value instanceof Error ? value : new Error(String(value));
}
function internalServerErrorResponse(id = null) {
	return jsonRpcErrorResponse(500, -32603, "Internal server error", void 0, id);
}
/** Throws when the factory returned an instance that is still connected to another exchange. */
function assertNotServing(server) {
	if (server.transport !== void 0) throw new Error("The factory returned an instance that is still serving another request. Return a new instance for each request.");
}
/**
* The entry's default legacy serving (`legacy: 'stateless'`): per-request
* stateless serving of 2025-era traffic using the same factory as the modern
* path. Exported as a standalone building block for hand-wired compositions
* (for example mounting legacy stateless serving on its own route next to a
* strict modern endpoint).
*
* Each POST is served by a fresh instance from the factory connected to a
* fresh streamable HTTP transport constructed with only
* `sessionIdGenerator: undefined` — the established stateless idiom, unchanged.
* Because serving is per-request and stateless, GET and DELETE (2025 session
* operations) are answered with `405` / `Method not allowed.`, exactly like the
* canonical stateless example.
*
* The optional `onerror` callback receives factory and serving failures on
* this leg (reporting only — the response stays the 500 internal-error body).
* The entry passes its own `onerror` here when expanding the default, so
* legacy-leg failures are never silently swallowed.
*/
function createLegacyStatelessFallback(factory, onerror, keepAliveMs, maxRequestBodySize) {
	return async (request, options) => {
		if (request.method.toUpperCase() !== "POST") return jsonRpcErrorResponse(405, -32e3, "Method not allowed.");
		try {
			const product = await factory({
				era: "legacy",
				...options?.authInfo !== void 0 && { authInfo: options.authInfo },
				requestInfo: request
			});
			const transport = new WebStandardStreamableHTTPServerTransport({
				sessionIdGenerator: void 0,
				...keepAliveMs !== void 0 && { keepAliveMs },
				...maxRequestBodySize !== void 0 && { maxRequestBodySize }
			});
			await product.connect(transport);
			const teardown = () => {
				transport.close().catch(() => {});
				product.close().catch(() => {});
			};
			request.signal?.addEventListener("abort", teardown, { once: true });
			const response = await transport.handleRequest(request, {
				...options?.authInfo !== void 0 && { authInfo: options.authInfo },
				...options?.parsedBody !== void 0 && { parsedBody: options.parsedBody }
			});
			if (response.body === null || mediaTypeEssence(response.headers.get("content-type")) !== "text/event-stream") {
				teardown();
				return response;
			}
			const reader = response.body.getReader();
			let toreDown = false;
			const completeExchange = () => {
				if (!toreDown) {
					toreDown = true;
					teardown();
				}
			};
			const monitoredBody = new ReadableStream({
				pull: async (controller) => {
					try {
						const { done, value } = await reader.read();
						if (done) {
							completeExchange();
							controller.close();
							return;
						}
						if (value !== void 0) controller.enqueue(value);
					} catch (error) {
						completeExchange();
						controller.error(error);
					}
				},
				cancel: (reason) => {
					completeExchange();
					return reader.cancel(reason).catch(() => {});
				}
			});
			return new Response(monitoredBody, {
				status: response.status,
				statusText: response.statusText,
				headers: response.headers
			});
		} catch (error) {
			try {
				onerror?.(toError(error));
			} catch {}
			return internalServerErrorResponse(echoableRequestId(options?.parsedBody));
		}
	};
}
/**
* Read the SEP-2243 standard request headers off the inbound request.
*
* Both halves of the standard-header story need them — the body-primary
* classifier for its cross-check cells, and
* {@linkcode validateStandardRequestHeaders} for the presence half — and a
* header read at one site but not the other is precisely how a required header
* goes unenforced: that divergence is what let a modern POST omitting
* `MCP-Protocol-Version` be served. Read them here once so a header added to
* {@linkcode InboundHttpRequest} reaches both sites together.
*/
function standardHeadersOf(request) {
	return {
		protocolVersionHeader: request.headers.get("mcp-protocol-version") ?? void 0,
		mcpMethodHeader: request.headers.get("mcp-method") ?? void 0,
		mcpNameHeader: request.headers.get("mcp-name") ?? void 0
	};
}
/**
* The entry's classification step: read the request body exactly once (unless
* a pre-parsed body is supplied) and classify the request with
* {@linkcode classifyInboundRequest}. This is the single code path behind both
* {@linkcode createMcpHandler}'s routing and the exported
* {@linkcode isLegacyRequest} predicate, so the two can never disagree.
*
* Pass `needsForward: false` when the caller never reads `forwardRequest` —
* the body-preserving clone is then skipped and `forwardRequest` is the
* (consumed) input request.
*/
async function classifyEntryRequest(request, providedParsedBody, needsForward = true, maxRequestBodySize = DEFAULT_MAX_REQUEST_BODY_SIZE) {
	const httpMethod = request.method.toUpperCase();
	let body;
	let parsedBody = providedParsedBody;
	let forwardRequest = request;
	let unparseable = false;
	if (httpMethod === "POST") {
		if (parsedBody === void 0) {
			if (needsForward) forwardRequest = request.clone();
			let bodyText;
			try {
				const read = await readRequestBody(request, maxRequestBodySize);
				if (read.tooLarge) return { step: "body-too-large" };
				bodyText = read.text;
			} catch {
				return { step: "unreadable-body" };
			}
			try {
				body = bodyText.length === 0 ? void 0 : JSON.parse(bodyText);
			} catch {
				unparseable = true;
			}
			if (!unparseable && body !== void 0) parsedBody = body;
		} else body = parsedBody;
		if (unparseable || body === void 0) return {
			step: "no-json-body",
			forwardRequest
		};
	}
	return {
		step: "classified",
		outcome: classifyInboundRequest({
			httpMethod,
			...standardHeadersOf(request),
			...body !== void 0 && { body }
		}),
		body,
		parsedBody,
		forwardRequest
	};
}
/**
* Creates an HTTP handler that serves the 2026-07-28 protocol revision from a
* per-request server factory and, by default, falls back to old-school
* stateless serving for 2025-era traffic. Pass `legacy: 'reject'` for a
* modern-only strict endpoint.
*
* Mounting: `handler.fetch` is the web-standard face (Cloudflare Workers,
* Deno, Bun, Hono's `c.req.raw`); for Express/Fastify/plain `node:http`, wrap
* the handler once with `toNodeHandler(handler)` from
* `@modelcontextprotocol/node`. When mounting bare on a fetch-native runtime,
* put Origin/Host validation in front of the handler — the entry itself is
* deliberately validation-free:
*
* ```ts
* import { hostHeaderValidationResponse, originValidationResponse, localhostAllowedHostnames, localhostAllowedOrigins } from '@modelcontextprotocol/server';
*
* export default {
*     async fetch(request: Request): Promise<Response> {
*         const rejected =
*             hostHeaderValidationResponse(request, localhostAllowedHostnames()) ??
*             originValidationResponse(request, localhostAllowedOrigins());
*         return rejected ?? handler.fetch(request);
*     }
* };
* ```
*
* Use ONE factory for both legs: the same tools/resources/prompts definition
* backs the modern path and the stateless legacy fallback, so the two eras can
* never drift apart. To keep an existing legacy deployment (for example a
* sessionful streamable HTTP wiring) serving 2025 traffic instead of the
* stateless fallback, route in user land with {@linkcode isLegacyRequest} in
* front of a strict handler — see that predicate's documentation for the
* pattern. Power users composing transport-neutral routing can also use the
* exported building blocks directly: {@linkcode classifyInboundRequest} for
* the era decision and `PerRequestHTTPServerTransport` for single-exchange
* serving — such compositions must reject POSTs whose Content-Type media type
* is not `application/json` (415) before parsing the body, using
* {@linkcode isJsonContentType}; neither building block performs this
* validation itself.
*
* The entry performs no token verification: `authInfo` given to `fetch` is
* passed through to handlers and the factory as-is and is never derived from
* request headers.
*/
function createMcpHandler(factory, options = {}) {
	const { legacy, onerror, responseMode } = options;
	const maxRequestBodySize = resolveMaxRequestBodySize(options.maxRequestBodySize);
	if (typeof legacy === "function") throw new TypeError("The 'legacy' option only accepts 'stateless' or 'reject', not a handler function. To serve 2025-era traffic with your own handler, route in user land with the exported isLegacyRequest(request) predicate in front of a strict (legacy: 'reject') handler.");
	/** Modern per-request instances with an exchange still in flight (close() tears these down). */
	const inflight = /* @__PURE__ */ new Set();
	let closed = false;
	const reportError = (error) => {
		try {
			onerror?.(error);
		} catch {}
	};
	const bus = options.bus ?? new InMemoryServerEventBus(reportError);
	const notify = createServerNotifier(bus);
	const listenRouter = createListenRouter({
		bus,
		maxSubscriptions: options.maxSubscriptions ?? 1024,
		keepAliveMs: options.keepAliveMs ?? 15e3,
		onerror: reportError
	});
	if (responseMode === "json") console.warn("responseMode: 'json' drops mid-call notifications. subscriptions/listen streams are always served over SSE regardless; other notifications emitted before a result are dropped.");
	const legacyHandler = legacy === "reject" ? void 0 : createLegacyStatelessFallback(factory, reportError, options.keepAliveMs, maxRequestBodySize);
	async function serveModern(route, request, authInfo) {
		const claimedRevision = route.classification.revision;
		if (claimedRevision === void 0 || !SUPPORTED_MODERN_PROTOCOL_VERSIONS.includes(claimedRevision)) {
			const error = new UnsupportedProtocolVersionError({
				supported: [...SUPPORTED_MODERN_PROTOCOL_VERSIONS],
				requested: claimedRevision ?? "unknown"
			});
			reportError(error);
			return jsonRpcErrorResponse(400, error.code, error.message, error.data, echoableRequestId(route.message));
		}
		const stdHeaderRejection = validateStandardRequestHeaders({
			httpMethod: request.method,
			...standardHeadersOf(request)
		}, route);
		if (stdHeaderRejection !== void 0) {
			reportError(/* @__PURE__ */ new Error(`Rejected inbound request (${stdHeaderRejection.cell}): ${stdHeaderRejection.message}`));
			return rejectionResponse(stdHeaderRejection, echoableRequestId(route.message));
		}
		const meta = route.messageKind === "request" ? requestMetaOf(route.message.params) : void 0;
		const declaredClientCapabilities = meta?.[CLIENT_CAPABILITIES_META_KEY];
		if (route.messageKind === "request") {
			const required = requiredClientCapabilitiesForRequest(route.message.method);
			if (required !== void 0) {
				const missing = missingClientCapabilities(required, declaredClientCapabilities);
				if (missing !== void 0) {
					const error = new MissingRequiredClientCapabilityError({ requiredCapabilities: missing });
					reportError(error);
					return jsonRpcErrorResponse(httpStatusForErrorCode(error.code, "ladder"), error.code, error.message, error.data, route.message.id);
				}
			}
		}
		const product = await factory({
			era: "modern",
			...authInfo !== void 0 && { authInfo },
			requestInfo: request
		});
		const server = product instanceof McpServer ? product.server : product;
		assertNotServing(server);
		if (route.messageKind === "request" && route.message.method === "subscriptions/listen") {
			const capabilities = server.getCapabilities();
			const serverInfo = serverIdentityOf(server);
			product.close().catch(reportError);
			return listenRouter.serve(route.message, request.signal, capabilities, serverInfo);
		}
		if (route.messageKind === "request" && route.message.method === "tools/call" && product instanceof McpServer) {
			const callParams = route.message.params;
			const toolName = typeof callParams?.name === "string" ? callParams.name : void 0;
			const inputSchema = toolName === void 0 ? void 0 : product.toolInputSchemaJson(toolName);
			if (inputSchema !== void 0) {
				const scan = scanXMcpHeaderDeclarations(inputSchema);
				if (scan.declarations !== void 0 && scan.declarations.length > 0) {
					const rejection = validateMcpParamHeaders(scan.declarations, callParams?.arguments, request.headers);
					if (rejection !== void 0) {
						product.close().catch(reportError);
						reportError(/* @__PURE__ */ new Error(`Rejected inbound request (${rejection.cell}): ${rejection.message}`));
						return rejectionResponse(rejection, route.message.id);
					}
				}
			}
		}
		if (route.messageKind === "request" && product instanceof McpServer) try {
			const challenge = await findScopeChallenge([route.message], authInfo, (context) => product.resolveScopeChallenge(context));
			if (challenge !== void 0) {
				product.close().catch(reportError);
				return createScopeChallengeResponse(challenge, scopeChallengeResourceMetadataUrl(authInfo));
			}
		} catch (error) {
			product.close().catch(reportError);
			reportError(toError(error));
			return internalServerErrorResponse(route.message.id);
		}
		assertNotServing(server);
		setNegotiatedProtocolVersion(server, claimedRevision);
		installModernOnlyHandlers(server, SUPPORTED_MODERN_PROTOCOL_VERSIONS);
		if (meta !== void 0) seedClientIdentityFromEnvelope(server, {
			clientInfo: meta[CLIENT_INFO_META_KEY],
			clientCapabilities: declaredClientCapabilities
		});
		const previousOnClose = server.onclose;
		inflight.add(server);
		const onExchangeClose = () => {
			inflight.delete(server);
			if (server.onclose === onExchangeClose) server.onclose = previousOnClose;
			previousOnClose?.();
		};
		server.onclose = onExchangeClose;
		try {
			const response = await invoke(product, route.message, {
				classification: route.classification,
				request,
				...authInfo !== void 0 && { authInfo },
				...responseMode !== void 0 && { responseMode },
				...options.keepAliveMs !== void 0 && { keepAliveMs: options.keepAliveMs }
			});
			if (route.messageKind === "notification") queueMicrotask(() => void server.close().catch(() => {}));
			return response;
		} catch (error) {
			if (error instanceof SdkError && error.code === SdkErrorCode.ConnectionClosed) return new Response(null, { status: 499 });
			await server.close().catch(() => {});
			inflight.delete(server);
			reportError(toError(error));
			return internalServerErrorResponse(echoableRequestId(route.message));
		}
	}
	async function serveLegacyRoute(route, forwardRequest, authInfo, parsedBody) {
		if (legacyHandler !== void 0) return legacyHandler(forwardRequest, {
			...authInfo !== void 0 && { authInfo },
			...parsedBody !== void 0 && { parsedBody }
		});
		const strict = modernOnlyStrictRejection(route, SUPPORTED_MODERN_PROTOCOL_VERSIONS);
		if (strict === void 0) return new Response(null, { status: 202 });
		reportError(/* @__PURE__ */ new Error(`Rejected 2025-era request on a modern-only endpoint (${strict.cell}): ${strict.message}`));
		return rejectionResponse(strict, echoableRequestId(parsedBody));
	}
	async function handle(request, requestOptions) {
		const authInfo = requestOptions?.authInfo;
		if (request.method.toUpperCase() === "POST" && !isJsonContentType(request.headers.get("content-type"))) {
			reportError(/* @__PURE__ */ new Error("Unsupported Media Type: Content-Type must be application/json"));
			return jsonRpcErrorResponse(415, -32e3, "Unsupported Media Type: Content-Type must be application/json");
		}
		const classified = await classifyEntryRequest(request, requestOptions?.parsedBody, true, maxRequestBodySize);
		if (classified.step === "unreadable-body") return jsonRpcErrorResponse(400, -32700, "Parse error: the request body could not be read");
		if (classified.step === "body-too-large") return jsonRpcErrorResponse(413, -32e3, requestBodyTooLargeMessage(maxRequestBodySize));
		if (classified.step === "no-json-body") {
			if (legacyHandler !== void 0) return legacyHandler(classified.forwardRequest, { ...authInfo !== void 0 && { authInfo } });
			return jsonRpcErrorResponse(400, -32700, "Parse error: the request body is not valid JSON");
		}
		const { outcome, body, parsedBody, forwardRequest } = classified;
		try {
			switch (outcome.kind) {
				case "reject":
					reportError(/* @__PURE__ */ new Error(`Rejected inbound request (${outcome.cell}): ${outcome.message}`));
					return rejectionResponse(outcome, echoableRequestId(body));
				case "modern": return await serveModern(outcome, request, authInfo);
				case "legacy": return await serveLegacyRoute(outcome, forwardRequest, authInfo, parsedBody);
			}
		} catch (error) {
			reportError(toError(error));
			return internalServerErrorResponse(echoableRequestId(body));
		}
	}
	const fetchFace = async (request, requestOptions) => {
		if (closed) throw new Error("This MCP handler has been closed");
		try {
			return await handle(request, requestOptions);
		} catch (error) {
			reportError(toError(error));
			return internalServerErrorResponse(echoableRequestId(requestOptions?.parsedBody));
		}
	};
	return {
		fetch: fetchFace,
		notify,
		bus,
		close: async () => {
			closed = true;
			listenRouter.closeAll();
			const closing = [...inflight].map((server) => server.close().catch(() => {}));
			inflight.clear();
			await Promise.all(closing);
		}
	};
}
export { McpServer, createMcpHandler };
