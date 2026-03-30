import { columns } from "@/components/modules/dashboard/product/Columns";
import { ProductTable } from "@/components/modules/dashboard/product/ProductTable";
import { getProducts } from "@/services/product.service";

export default async function ProductListPage({
  searchParams,
}: {
  searchParams?: Promise<{ page?: string }>;
}) {
  const params = await searchParams;
  const page = Number(params?.page) || 1;
  const limit = 10;
  const { data, total } = await getProducts();
  const productData =
    page && limit ? data.slice((page - 1) * limit, page * limit) : data;
  return (
    <div className="container mx-auto py-10 px-4">
      <h3 className="text-lg font-medium mb-4">All Products</h3>
      <ProductTable
        columns={columns}
        data={productData}
        currentPage={page}
        totalData={total}
      />
    </div>
  );
}
