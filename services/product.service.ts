import { api } from "@/config/config";
import { Product } from "@/types/product";

export async function getProducts(
  sort?: "asc" | "desc",
): Promise<{ data: Product[]; total: number }> {
  try {
    const products = await api.get<Product[]>("/products", {
      queryParams: {
        sort: sort,
      },
    });

    const total = products.length;

    return { data: products, total };
  } catch (error: any) {
    console.error("Error", error.message);
    throw error;
  }
}
