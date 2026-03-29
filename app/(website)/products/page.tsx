import ProductHeader from "@/components/modules/product/ProductHeader";
import ProductLayout from "@/components/modules/product/ProductLayout";

import { getProducts } from "@/services/product.service";

export default async function ProductPage({
  searchParams,
}: {
  searchParams?: Promise<{ page?: string, sort?: "asc" | "desc" }>;
}) {
  const params = await searchParams;
  const page = Number(params?.page) || 1;
  const sort = params?.sort || "asc"
  const limit = 10;
  const { data, total } = await getProducts(sort);

  return (
    <div className="px-8 py-6">
      <ProductHeader currentSort={sort}/>
      <ProductLayout data={data} limit={limit} page={page} total={total}/>
    </div>
  );
}
