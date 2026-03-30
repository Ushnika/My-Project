"use client";
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import { Progress } from "@/components/ui/progress";
import { SliderData } from "@/data/slider-data";
import Image from "next/image";
import { useEffect, useState } from "react";

const CarouselData = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!api) return;

    const updateProgress = () => {
      const current = api.selectedScrollSnap(); // 0-based index
      const total = api.scrollSnapList().length;
      setProgress(((current + 1) / total) * 100);
    };

    // Set initial progress
    updateProgress();

    // Update on slide change
    api.on("select", updateProgress);

    return () => {
      api.off("select", updateProgress);
    };
  }, [api]);

  return (
    <div>
      <Carousel className="w-full" setApi={setApi}>
        <CarouselContent className="w-full ml-0!">
          {SliderData.map((slider, index) => (
            <CarouselItem
              key={`slider-${index}`}
              className="pl-0 basis-[82%] pr-3 w-full "
            >
              <div className="relative h-72 md:h-125 overflow-hidden rounded-xl">
                <Image
                  src={slider.img}
                  alt={"img"}
                  className="w-full h-full object-cover"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="mt-8">
        <Progress value={progress}/>
        </div>
    </div>
  );
};

export default CarouselData;
