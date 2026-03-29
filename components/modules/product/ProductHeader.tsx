"use client"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
const ProductHeader = ({currentSort}:{currentSort: string}) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParms = useSearchParams();

  const handleChange = (value:string) =>{
    const params = new URLSearchParams(searchParms.toString());
    params.set("sort", value);
    router.push(`${pathname}?${params.toString()}`)
  }

  return (
    <div className="flex flex-col sm:flex-row justify-between mb-3">
      <h3 className="text-3xl md:text-center pb-6">Our Products</h3>
      <Select value={currentSort} onValueChange={handleChange}>
        <SelectTrigger className="w-full sm:max-w-48">
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Sort by</SelectLabel>
            <SelectItem value="asc">Ascending order</SelectItem>
            <SelectItem value="desc">Descending order</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default ProductHeader;
