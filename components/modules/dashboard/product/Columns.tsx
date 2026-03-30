"use client";

import { Rating } from "@/components/ui/rating";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Product } from "@/types/product";
import { ColumnDef } from "@tanstack/react-table";
import { Edit, Trash } from "lucide-react";
import Image from "next/image";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<Product>[] = [
  {
    accessorKey: "image",
    header: "Image",
    cell: ({ row }) => {
      return (
          <Image
            src={row.original.image}
            alt={row.original.title}
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
            <p className="truncate w-60">{row.original.title}</p>
          </TooltipTrigger>
          <TooltipContent>{row.original.title}</TooltipContent>
        </Tooltip>
      );
    },
  },
  {
    accessorKey: "price",
    header: "Price",
    cell: ({ row }) => {
      return <p className="font-medium">$ {row.original.price}</p>;
    },
  },
  {
    accessorKey: "category",
    header: "Category",
    cell: ({ row }) => {
      return <p className="capitalize">{row.original.category}</p>;
    },
  },
  {
    accessorKey: "rate",
    header: "Rating",
    cell: ({ row }) => {
      return <Rating rate={row.original.rating.rate} showScore />;
    },
  },
  {
    accessorKey: "action",
    header: "Action",
    cell: () => {
      return (
        <div className="flex gap-2">
          <Edit className="size-4 text-green-500" />
          <Trash className="size-4 text-red-500" />
        </div>
      );
    },
  },
];
