import facebook from "@/assets/icons/facebook.png";
import instagram from "@/assets/icons/instagram.png";
import tiktok from "@/assets/icons/tiktok.png";
import { Mail, Phone, Truck } from "lucide-react";
import Image from "next/image";

const Topbar = () => {
  return (
    <div className="w-full bg-primary flex flex-col justify-center items-center sm:flex-row sm:justify-between px-8 text-sm border-b-2 text-white">
      <div className="flex gap-2">
        <div className="py-2 pr-2 flex gap-1 items-center sm:border-r-2">
          <Mail className="size-4" />
          <p>support@gmail.com</p>
        </div>
        <div className="py-2 flex gap-1 items-center">
          <Phone className="size-4" />
          <p>+1 234 567 890</p>
        </div>
      </div>
      <div className="flex gap-2 items-center">
        <Truck />
        Free delivery all over Nepal
      </div>
      <div className="flex gap-2 p-2">
        <div className="flex justify-center items-center border size-8 rounded-full">
          <Image src={facebook} alt="facebook" width={15} height={8} />
        </div>
        <div className="flex justify-center items-center border size-8 rounded-full">
          <Image src={instagram} alt="instagram" width={15} height={8} />
        </div>
        <div className="flex justify-center items-center border size-8 rounded-full">
          <Image src={tiktok} alt="tiktok" width={15} height={8} />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
