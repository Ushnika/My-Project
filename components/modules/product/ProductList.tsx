"use client";
import PaginationComponent from "@/components/common/Pagination";
import { ProductListProps } from "@/types/product";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import ProductCard from "../home/ProductCard";

const ProductList = ({ data, page, limit, total }: ProductListProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", String(page));
    router.push(`${pathname}?${params.toString()}`);
  };
  const productData =
    page && limit ? data.slice((page - 1) * limit, page * limit) : data;
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {productData?.map((item, i) => (
          <ProductCard key={`${item.id}-${i}`} product={item} />
        ))}
      </div>
      <div className="my-3">
        <PaginationComponent
          currentPage={page}
          itemsPerPage={limit}
          totalData={total}
          setCurrentPage={handlePageChange}
        />
      </div>
    </div>
  );
};

export default ProductList;
