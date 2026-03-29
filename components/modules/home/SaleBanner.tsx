import { Card } from "@/components/ui/card";
import Image, { StaticImageData } from "next/image";

interface SaleBannerProps{
    title: string;
    subtitle:string;
    offRate: number;
    image: StaticImageData
}

const SaleBanner = ({title, subtitle, offRate, image}: SaleBannerProps) => {
  return (
    <div>
        <Card className="flex flex-row gap-1 px-6">
            <div className="w-3/4 flex flex-col justify-center">
                <p className="text-gray-500 text-sm mb-3">{subtitle}</p>
                <h3 className="text-xl text-primary mb-3"> {title}</h3>
                <h1 className="text-5xl">{offRate}% off</h1>
            </div>
            <div className="w-1/4 h-40">
                <Image src={image} alt="image" className="ml-auto h-full object-cover"/>
            </div>
        </Card>
    </div>
  )
}

export default SaleBanner