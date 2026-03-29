"use client";
import CardSkeleton from "@/components/common/skeleton/CardSkeleton";
import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldContent, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import { getCategories } from "@/services/categories.service";
import { getProducts } from "@/services/product.service";
import { useEffect, useState } from "react";

interface ProductFilterProps {
  search: string;
  setSearch: (search: string) => void;
  selectedCategories: string[];
  setSelectedCategories: React.Dispatch<React.SetStateAction<string[]>>;
  priceRange: [number, number];
  setPriceRange: (range: [number, number]) => void;
}

export function ProductFilter({
  search,
  setSearch,
  selectedCategories,
  setSelectedCategories,
  priceRange,
  setPriceRange,
}: ProductFilterProps) {
  const [total, setTotal] = useState<number>(0);
  const [categories, setCategories] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    getCategoriesData();
  }, []);

  const getCategoriesData = async () => {
    setIsLoading(true);
    try {
      const data = await getCategories();
      const products = await getProducts();
      setCategories(data.categories);
      setTotal(products.total);
    } catch (error) {
      console.log("Error", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCategoryChange = (category: string, checked: boolean) => {
    setSelectedCategories((prev: string[]) =>
      checked ? [...prev, category] : prev.filter((c) => c != category),
    );
  };

  return (
    <div className="flex flex-col align-items-stretch justify-between gap-6">
      <p className="text-sm text-gray-500">{total} Products</p>
      {/* search field */}
      <div>
        <Label className="mb-3">Search</Label>
        <Input
          id="input-button-group"
          className="focus:bg-white bg-white!"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {/* category list */}
      <div>
        <Label className="mb-4">Filter by Category</Label>
        {
          isLoading?
          <CardSkeleton columns="grid-cols-1" count={5} height="h-6"/>:
          <RadioGroup className="w-fit">
          {categories.map((item) => (
            <Field orientation="horizontal" key={item}>
              <Checkbox
                id="terms-checkbox-2"
                name="terms-checkbox-2"
                checked={selectedCategories.includes(item)}
                onCheckedChange={(checked) =>
                  handleCategoryChange(item, checked as boolean)
                }
              />
              <FieldContent>
                <FieldLabel htmlFor="terms-checkbox-2" className="capitalize">
                  {item}
                </FieldLabel>
              </FieldContent>
            </Field>
          ))}
        </RadioGroup>
        }
      </div>
      <div>
        <Label className="mb-4">Price Range</Label>
        <Slider
          value={priceRange}
          min={0}
          max={1000}
          step={10}
          onValueChange={(value) => setPriceRange(value as [number, number])}
          className="mx-auto w-full max-w-xs"
        />
        <div className="flex justify-between text-sm">
          <p>${priceRange[0]}</p>
          <p>${priceRange[1]}</p>
        </div>
      </div>
    </div>
  );
}
