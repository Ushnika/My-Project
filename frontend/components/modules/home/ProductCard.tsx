"use client"
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Rating } from "@/components/ui/rating";
import { addToCart } from "@/lib/cart";
import { Product } from "@/types/product";
import Image from "next/image";
import { useRouter } from "next/navigation";

export function ProductCard ({product}: {product: Product})  {
  const router = useRouter();
  return (
    <div>
        <Card className="relative py-4 cursor-pointer" onClick={()=> router.push(`/products/${product.id}`)}>
              <div className="w-full h-56">
                <Image src={product.image} alt={product.title} className="object-contain w-full h-full" width={300} height={150} />
              </div>
              <Badge
                variant={"default"}
                className="absolute right-5 top-5 bg-primary rounded-sm capitalize"
              >
                {product.category}
              </Badge>
              <div className="px-4">
                <p className="mb-2 text-lg font-medium line-clamp-2 h-14">
                  {product.title}
                </p>
                <div className="flex justify-between">
                  <p className="mb-2">$ {product.price} </p>
                  <Rating rate={product.rating.rate} showScore />
                </div>
              <Button className="w-full mt-3" onClick={(e) => {
                e.stopPropagation()
                addToCart(product,1)
              }}>Add to cart</Button>
              </div>
            </Card></div>
  )
}

