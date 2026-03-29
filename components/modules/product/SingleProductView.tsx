import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Rating } from "@/components/ui/rating";
import { Separator } from "@/components/ui/separator";
import { Product } from "@/types/product";
import { Heart, Share } from "lucide-react";

const SingleProductView = ({product}: {product: Product}) => {
  return (
    <div className="flex flex-col gap-4 h-full justify-around">
      <h1 className="text-3xl font-medium">
        {product.title}
      </h1>
      <div className="flex flex-col lg:flex-row lg: justify-between">
        <Rating rate={product.rating.rate} showScore />
        <div className="flex gap-2">
          <Heart className="size-5 text-gray-500"/>
          <Share className="size-5 text-gray-500"/>
        </div>
      </div>
      <p className="text-gray-500 text-sm">
        {product.description}
      </p>
      <Separator />
      <p className="text-4xl font-semibold">$ {product.price}</p>
      <Separator />

      <div className="flex gap-3 items-center">
        <Button variant={"outline"} className="px-4 cursor-pointer">
          +
        </Button>
        <Input type="number" className="w-12" />
        <Button variant={"outline"} className="px-4 cursor-pointer">
          -
        </Button>
      </div>
      <Button className="p-6 rounded-sm w-full md:w-56">Add to Cart</Button>
    </div>
  );
};

export default SingleProductView;
