import { api } from "@/config/config";
import { Product } from "@/types/product";

export async function getSingleProduct(id:string): Promise<{ product: Product }> {
  try {
    const product = await api.get<Product>(`/products/${id}`);

    return { product };
  } catch (error: any) {
    console.error("Error", error.message);
    throw error;
  }
}
