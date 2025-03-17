import { DataTableSkeleton } from "@/components/data-table/data-table-skeleton";
import { FeatureFlagsToggle } from "@/components/data-table/custom-table/featureflag-toogle";
import { Shell } from "@/components/shared/custom-ui/shell";
import { getUsers } from "@/features/users/actions/users-action";
import { UsersTable } from "@/features/users/components/user-table/user-table";
import { SearchParams } from "@/types/table";
import React from "react";
import { getProducts } from "@/features/products/actions/product-action";
import { ProductsTable } from "@/features/products/components/product-table/product-table";

export interface IndexPageProps {
  searchParams: SearchParams;
}

const UserPage = ({ searchParams }: IndexPageProps) => {
  // call
  const productPromise = getProducts(searchParams);
  return (
    <div className="min-w-full">
      <Shell>
        <FeatureFlagsToggle />
        <React.Suspense
          fallback={
            <DataTableSkeleton
              columnCount={5}
              searchableColumnCount={1}
              filterableColumnCount={2}
              cellWidths={["10rem", "40rem", "12rem", "12rem", "8rem"]}
              shrinkZero
            />
          }
        >
          <ProductsTable productPromise={productPromise} />
        </React.Suspense>
      </Shell>
    </div>
  );
};

export default UserPage;
