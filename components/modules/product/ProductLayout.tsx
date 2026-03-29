"use client";
import { useDebounce } from "@/hooks/use-debounce";
import { ProductListProps } from "@/types/product";
import { Suspense, useMemo, useState } from "react";
import ProductFilter from "./ProductFilter";
import ProductList from "./ProductList";

const ProductLayout = ({ data, total, page, limit }: ProductListProps) => {
  const [search, setSearch] = useState<string>("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const debounceValue = useDebounce(search, 600);
  const [priceRange, setPriceRange] = useState<[number, number]>([0,1000])
  const filtered = useMemo(() => {
    return data.filter((item) => {
      const matchedSearch = debounceValue
        ? item.title.toLowerCase().includes(debounceValue.toLowerCase())
        : true;
      const matchedCategory =
        selectedCategories.length > 0
          ? selectedCategories.includes(item.category)
          : true;
     const matchedPrice = item.price >= priceRange[0] && item.price <= priceRange[1]

      return matchedSearch && matchedCategory && matchedPrice;
    });
  }, [data, debounceValue, selectedCategories, priceRange]);

  return (
    <div className="flex flex-col lg:flex-row  gap-3">
      <div className="w-full lg:w-1/5">
        <ProductFilter
          search={search}
          setSearch={setSearch}
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
        />
      </div>
      <div className="flex-1">
        <Suspense fallback={<p>Loading...</p>}>
          <ProductList
            data={filtered}
            total={filtered?.length}
            page={page}
            limit={limit}
          />
        </Suspense>
      </div>
    </div>
  );
};

export default ProductLayout;
