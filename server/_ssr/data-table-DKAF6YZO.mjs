import { __toESM } from "../_runtime.mjs";
import { require_jsx_runtime, require_react } from "../_libs/@base-ui/react+[...].mjs";
import { ChevronLeft, ChevronRight, LoaderCircle, RefreshCw, Search } from "../_libs/lucide-react.mjs";
import { Button$1, cn, common_search_placeholder, common_table_loading, common_table_next, common_table_no_data, common_table_previous, common_table_refresh, common_table_total } from "./router-FRpG8iox.mjs";
import { Input$1 } from "./input-CacA4PHh.mjs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./table-BkuyEj07.mjs";
import { flexRender, getCoreRowModel, useReactTable } from "../_libs/@tanstack/react-table+[...].mjs";
// node_modules/.nitro/vite/services/ssr/assets/data-table-DKAF6YZO.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function DataTable({ columns, data, total, page, pageSize, onPageChange, search, onSearchChange, searchPlaceholder, toolbar, emptyText, rowKey, onRefresh, loading }) {
	const [refreshing, setRefreshing] = (0, import_react.useState)(false);
	const totalPages = Math.max(1, Math.ceil(total / pageSize));
	const tableColumns = (0, import_react.useMemo)(() => columns.map((col, i) => ({
		id: String(i),
		header: () => col.header,
		cell: ({ row }) => col.cell(row.original),
		meta: { className: col.className }
	})), [columns]);
	const table = useReactTable({
		data,
		columns: tableColumns,
		getCoreRowModel: getCoreRowModel(),
		manualPagination: true,
		rowCount: total,
		getRowId: (row) => rowKey(row)
	});
	async function handleRefresh() {
		if (!onRefresh || refreshing) return;
		setRefreshing(true);
		try {
			await onRefresh();
		} finally {
			setRefreshing(false);
		}
	}
	const showHeader = onSearchChange || toolbar || onRefresh;
	const busy = refreshing || loading;
	const initialLoading = !!loading && data.length === 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [
			showHeader && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [
					onSearchChange && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative max-w-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "text-muted-foreground absolute top-2.5 left-2.5 size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input$1, {
							value: search || "",
							onChange: (e) => onSearchChange(e.target.value),
							placeholder: searchPlaceholder || common_search_placeholder(),
							className: "h-9 pl-8"
						})]
					}),
					toolbar,
					onRefresh && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
						variant: "outline",
						size: "icon",
						className: "ml-auto size-9",
						onClick: handleRefresh,
						disabled: busy,
						"aria-label": common_table_refresh(),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: cn("size-4", busy && "animate-spin") })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-x-auto",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: table.getHeaderGroups().map((headerGroup) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableRow, { children: headerGroup.headers.map((header) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
					className: header.column.columnDef.meta?.className,
					children: flexRender(header.column.columnDef.header, header.getContext())
				}, header.id)) }, headerGroup.id)) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, { children: initialLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableRow, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
					colSpan: columns.length,
					className: "text-muted-foreground py-8 text-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }), common_table_loading()]
					})
				}) }) : table.getRowModel().rows.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableRow, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
					colSpan: columns.length,
					className: "text-muted-foreground py-8 text-center",
					children: emptyText || common_table_no_data()
				}) }) : table.getRowModel().rows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableRow, { children: row.getVisibleCells().map((cell) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
					className: cell.column.columnDef.meta?.className,
					children: flexRender(cell.column.columnDef.cell, cell.getContext())
				}, cell.id)) }, row.id)) })] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between px-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground text-sm",
					children: initialLoading ? "" : common_table_total({ count: total })
				}), total > pageSize && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button$1, {
						variant: "outline",
						size: "sm",
						onClick: () => onPageChange(page - 1),
						disabled: page <= 1,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-4" }), common_table_previous()]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button$1, {
						variant: "outline",
						size: "sm",
						onClick: () => onPageChange(page + 1),
						disabled: page >= totalPages,
						children: [common_table_next(), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-4" })]
					})]
				})]
			})
		]
	});
}
export { DataTable };
