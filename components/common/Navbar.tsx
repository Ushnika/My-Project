"use client";
import logo from "@/assets/images/logo.png";
import { useCartStore } from "@/store/cart.store";
import {
  FileIcon,
  Heart,
  Home,
  Info,
  Menu,
  Phone,
  Search,
  ShoppingBag,
  ShoppingCart,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const itemsCount = useCartStore((state) => state.items.length);
  return (
    <div className="w-full px-8 py-2 flex flex-row gap-3 justify-between items-center border-b-2">
      <div className="w-30">
        <Image src={logo} alt="Logo" width={60} height={60} />
      </div>

      {/* desktop view navbar */}
      <div className="hidden md:flex flex-1  justify-center">
        <div className="w-full">
          <ul className="flex justify-center items-center gap-8 lg:gap-14 uppercase text-sm font-medium">
            <li className="cursor-pointer">
              {" "}
              <Link href={"/"}>Home</Link>
            </li>
            <li className="cursor-pointer">
              <Link href={"/products"}>Products</Link>
            </li>
            <li className="cursor-pointer">
              {" "}
              <Link href={"/service"}>Service</Link>{" "}
            </li>
            <li className="cursor-pointer">
              {" "}
              <Link href={"/course"}>Course</Link>{" "}
            </li>
            <li className="cursor-pointer"> Contact </li>
          </ul>
        </div>
      </div>

      {/* button like login wishlist and cart */}
      <div className="w-50 flex gap-3 items-center">
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="size-8 border-2 rounded-full flex justify-center items-center cursor-pointer">
              <Search className="size-4 text-primary" />
            </div>
          </TooltipTrigger>
          <TooltipContent>Search</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="size-8 border-2 rounded-full flex justify-center items-center cursor-pointer">
              <Heart className="size-4 text-primary" />
            </div>
          </TooltipTrigger>
          <TooltipContent>Wishlist</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link href={"/cart"}>
              {" "}
              <div className="relative">
                <div className="size-8 border-2 rounded-full flex justify-center items-center cursor-pointer">
                  <ShoppingCart className="size-4 text-primary" />
                </div>
                {itemsCount > 0 && (
                  <div className="absolute -top-3 -right-2 size-6 border-2 rounded-full flex items-center justify-center bg-primary text-white text-xs">
                    {itemsCount}
                  </div>
                )}
              </div>
            </Link>
          </TooltipTrigger>
          <TooltipContent>Shopping Cart</TooltipContent>
        </Tooltip>
        <Button className="bg-primary px-4 hidden md:block">Login</Button>
      </div>

      {/* mobile view */}
      <div className="block md:hidden">
        <Menu className="cursor-pointer" onClick={() => setOpen(true)} />
      </div>
      {/* mobile view navbar */}
      {open && (
        <div className="absolute bg-white uppercase text-sm font-medium right-0 top-0 z-999 w-full h-full  max-h-auto">
          <div className="w-full flex justify-between py-3 px-6 border-b-2">
            <p className="uppercase text-base font-medium">All in one</p>
            <X className="cursor-pointer" onClick={() => setOpen(false)} />
          </div>
          <ul className="flex flex-col gap-4 my-4 px-6">
            <li className="flex gap-2 items-center ">
              {" "}
              <Link href={"/"}>
                <Home className="size-4" /> <span>Home</span>
              </Link>
            </li>
            <li className="flex gap-2 items-center ">
              {" "}
              <Link href={"/products"}>
                <ShoppingBag className="size-4" /> <span>Products</span>
              </Link>
            </li>
            <li className="flex gap-2 items-center ">
              {" "}
              <Link href={"/products"}>
                <Info className="size-4" /> Service{" "}
              </Link>
            </li>
            <li className="flex gap-2 items-center ">
              {" "}
              <FileIcon className="size-4" /> Course{" "}
            </li>
            <li className="flex gap-2 items-center ">
              {" "}
              <Phone className="size-4" /> Contact{" "}
            </li>
          </ul>
          <div className="px-6">
            <Button className="bg-primary px-4">Login</Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
