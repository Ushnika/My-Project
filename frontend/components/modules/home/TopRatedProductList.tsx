import { Product } from "@/types/product";
import { ProductCard } from "./ProductCard";

export default function TopRatedProductList({ product }: { product: Product[] }) {
  return (
     
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {product.filter((item) => item.rating.rate > 3.5).slice(0, 8).map((item, i) => (
          <ProductCard key={`${item.id}-${i}`} product={item} />
        ))}
      </div>
  );
}
