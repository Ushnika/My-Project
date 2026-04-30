import { Product } from "@/types/product";
import { ProductCard } from "./ProductCard";

export default function HomeProductList({ product }: { product: Product[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {product.slice(0, 8).map((item, i) => (
        <ProductCard key={`${item.id}-${i}`} product={item} />
      ))}
    </div>
  );
}
