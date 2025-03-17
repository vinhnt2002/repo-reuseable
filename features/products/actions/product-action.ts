"use server";
import { unstable_noStore as noStore, revalidatePath } from "next/cache";

import { ApiListResponse, fetchListData } from "@/lib/api/api-handler/generic";
import { SearchParams } from "@/types/table";
import { IProduct } from "../types/product";

export const getProducts = async (
  searchParams: SearchParams
): Promise<ApiListResponse<IProduct>> => {
  noStore();

  const result = await fetchListData<IProduct>("/products", searchParams);

  if (!result.success) {
    console.error("Failed to fetch list IProduct:", result.error);
    return { data: [], pageCount: 0, error: result.error };
  }

  return result.data;
};
