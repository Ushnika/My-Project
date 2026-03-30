import logo from "@/assets/images/logo1.png";
import logo1 from "@/assets/images/logo2.png";
import logo2 from "@/assets/images/logo3.png";
import logo3 from "@/assets/images/logo4.png";
import CarouselData from "@/components/modules/design/CarouselData";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function ServicePage() {
  return (
    <div className="p-4 lg:p-24">
      <div className="flex flex-col lg:flex-row justify-between gap-4">
        <div>
          <p className="text-4xl font-medium pr-0 lg:pr-80 leading-12 mb-6">
            Experience our expert solutions tailored to enhance your business
            with top-tier design, development, and animation.
          </p>
          <Button className="bg-blue-800 rounded-full px-8 py-6">
            Services
          </Button>
        </div>
        <div>
          <h2 className="text-5xl lg:text-7xl font-semibold leading-16 lg:leading-24">
            UI & UX Development Blockchain
          </h2>
        </div>
      </div>
      <div className="my-28 mx-2">
        <CarouselData/>
      </div>
      <div className="lg:mx-28">
        <p className="text-2xl font-medium mb-10 text-center">Our Partners</p>
        <div className="flex flex-wrap justify-center lg:justify-between  items-center gap-3">
          <Image src={logo} alt={"img"} width={150} height={150} />
          <Image src={logo1} alt={"img"} width={150} height={150} />
          <Image src={logo2} alt={"img"} width={150} height={150} />
          <Image src={logo3} alt={"img"} width={150} height={150} />
        </div>
      </div>
    </div>
  );
}
