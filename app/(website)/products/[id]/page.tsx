import SingleProductView from "@/components/modules/product/SingleProductView";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { getSingleProduct } from "@/services/single-product.service";
import Image from "next/image";

export default async function SingleProductPage({params}:{params: Promise<{id:string}>}) {
  const {id} = await params;
  const {product} = await getSingleProduct(id);
  return (
    <div className="px-8 py-6">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/products">Product</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink>{product.title}</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="my-4 grid grid-cols-1 lg:grid-cols-2 gap-3">
        <div className="w-full h-110">
          <Image src={product?.image} alt="img" width={300} height={300} className="w-full h-full object-contain" />
        </div>
        <div className="">
          <SingleProductView product={product} />
        </div>
      </div>
    </div>
  );
}
