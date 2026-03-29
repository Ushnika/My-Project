import banner1 from "@/assets/images/banner6.jpg";
import CardSkeleton from "@/components/common/skeleton/CardSkeleton";
import { FeatureBar } from "@/components/modules/home/FeatureBar";
import { SaleBanner } from "@/components/modules/home/SaleBanner";
import { Button } from "@/components/ui/button";
import { saleBannerList } from "@/data/sale-banner-list";
import { getProducts } from "@/services/product.service";
import Image from "next/image";
import React, { Suspense } from "react";

const TopRatedProductList = React.lazy(() => import('../../components/modules/home/TopRatedProductList'));
const HomeProductList = React.lazy(() => import('../../components/modules/home/HomeProductList'))


export default async function Home() {
  const { data } = await getProducts();
  return (
    <div>
      {/* banner image */}
      <div className="h-100 lg:h-full xl:h-112.5 relative w-full ">
        <Image
          src={banner1}
          alt="banner"
          className="h-100 lg:h-full xl:h-112.5 object-cover w-full"
        />
        <div className="absolute inset-0 bg-black/30 px-8 lg:px-32 py-16 text-white font-medium">
          <p className="font-semibold text-sm text-primary px-2 mb-4">
            Men's Wear
          </p>
          <h2 className="text-4xl w-full lg:text-7xl lg:w-1/2">
            Get start your favorite shopping
          </h2>
          <p className="text-xl lg:text-lg mt-4 mb-6">
            Get upto 25% off on every purchase. Hurry up and don't miss a
            chance.
          </p>
          <div>
            <Button className="bg-white text-black rounded-sm px-6 py-4">
              Shop Now
            </Button>
          </div>
        </div>
      </div>
      {/* product list */}
      <div className="my-8 px-8">
        <h3 className="text-center text-3xl font-semibold mb-8">
          {" "}
          Our Top Selling Product
        </h3>
        <Suspense
          fallback={
            <CardSkeleton
              columns="grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
              count={4}
              height="h-72"
            />
          }
        >
          <HomeProductList product={data} />
        </Suspense>
      </div>
      {/* Sale banner */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 bg-gray-200 mx-8 p-4 my-10">
        {saleBannerList.map((item, i) => {
          return (
            <SaleBanner
              key={`${item.title}-${i}`}
              image={item.image}
              offRate={item.offRate}
              subtitle={item.subtitle}
              title={item.title}
            />
          );
        })}
      </div>
      {/* top rated product list */}
      <div className="my-8 px-8">
        <h3 className="text-center text-3xl font-semibold mb-8">
          {" "}
          Top Rated Product
        </h3>
        <Suspense
          fallback={
            <CardSkeleton
              columns="grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
              count={4}
              height="h-72"
            />
          }
        >
          <TopRatedProductList product={data} />
        </Suspense>
      </div>
      <div className="px-8 my-8">
        <FeatureBar />
      </div>
    </div>
  );
}
