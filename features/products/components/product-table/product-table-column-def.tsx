"use client";

import { type ColumnDef } from "@tanstack/react-table";
import { IProduct } from "../../types/product";
import selectColumn from "./column/select-column";
import nameColumn from "./column/name-column";
import idColumn from "./column/id-column";
import categoryColumn from "./column/catecogy-column";
import sideColumn from "./column/side-column";

export function fetchProductTableColumnDefs(): ColumnDef<IProduct, unknown>[] {
  return [
    selectColumn,
    idColumn,
    nameColumn,
    categoryColumn,
    sideColumn,
  ];
}
