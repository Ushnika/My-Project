import { Product } from "@/types/product";
import ProductCard from "./ProductCard";


const HomeProductList = ({product}:{product: Product[]}) => {
  return (
    <div className="px-8">
      <h3 className="text-center text-3xl font-semibold mb-8">
        {" "}
        Our Top Selling Product
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {product.slice(0,8).map((item,i) => (
            <ProductCard key={`${item.id}-${i}`} product={item}/>
          )
        )}
      </div>
    </div>
  );
};

export default HomeProductList;
