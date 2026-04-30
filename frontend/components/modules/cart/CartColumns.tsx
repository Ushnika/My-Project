"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { updateQuantity } from "@/lib/cart";
import { CartItem } from "@/types/cart";
import { ColumnDef } from "@tanstack/react-table";
import { Trash } from "lucide-react";
import Image from "next/image";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";

interface useCartColumnsProps {
  setDeleteOpen: (deleteOpen: boolean) => void;
  setDeleteId: (deleteId: number) => void;
}
export function useCartColumns({
  setDeleteOpen,
  setDeleteId,
}: useCartColumnsProps) {

  const columns: ColumnDef<CartItem>[] = [
    {
      accessorKey: "image",
      header: "Image",
      cell: ({ row }) => {
        return (
          <Image
            src={row.original.product.image}
            alt={row.original.product.title}
            width={30}
            height={30}
            className="w-8 h-auto"
          ></Image>
        );
      },
    },
    {
      accessorKey: "title",
      header: "Title",
      cell: ({ row }) => {
        return (
          <Tooltip>
            <TooltipTrigger className="text-left">
              <p className="truncate w-60">{row.original.product.title}</p>
            </TooltipTrigger>
            <TooltipContent>{row.original.product.title}</TooltipContent>
          </Tooltip>
        );
      },
    },
    {
      accessorKey: "quantity",
      header: "Quantity",
      cell: ({ row }) => {
        const data = row.original
        return (
          <div className="flex gap-3 items-center">
            <Button
              variant={"outline"}
              disabled={data.quantity === 1}
              className="px-4 cursor-pointer"
              onClick={() => updateQuantity(data.product.id, data.quantity - 1)} // ✅ updates store
            >
              -
            </Button>
            <Input
              type="number"
              className="w-12"
              value={data.quantity}
              readOnly={true}
            />
            <Button
              variant={"outline"}
              className="px-4 cursor-pointer"
              onClick={() => updateQuantity(data.product.id, data.quantity + 1)} // ✅ updates store
            >
              +
            </Button>
          </div>
        );
      },
    },
    {
      accessorKey: "price",
      header: "Price",
      cell: ({ row }) => {
        return <p className="font-medium">$ {row.original.product.price}</p>;
      },
    },
    {
      accessorKey: "action",
      header: "Action",
      cell: ({ row }) => {
        return (
          <Trash
            className="size-4 text-red-500 cursor-pointer"
            onClick={() => {
              setDeleteOpen(true);
              setDeleteId(row.original.product.id);
            }}
          />
        );
      },
    },
  ];
  return columns;
}
