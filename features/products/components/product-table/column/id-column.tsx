import { DataTableColumnHeader } from "@/components/data-table/data-table-column-header";
import { IProduct } from "@/features/products/types/product";
import { Row, type Column } from "@tanstack/react-table";

export const idColumn = {
  accessorKey: "pre_build_product_id",
  header: ({ column }: { column: Column<any, unknown> }) => (
    <DataTableColumnHeader column={column} title="Mã sản phẩm" />
  ),
    cell: ({ row }: { row: Row<IProduct> }) => (
    <div className="w-[80px]">{row.getValue("pre_build_product_id")}</div>
  ),
  enableSorting: false,
  enableHiding: false,
} as const;

export default idColumn;
