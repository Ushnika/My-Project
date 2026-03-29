import { api } from "@/config/config";

export async function getCategories(): Promise<{ categories: string[] }> {
  try {
    const categories = await api.get<string[]>("/products/categories");

    return { categories };
  } catch (error: any) {
    console.error("Error", error.message);
    throw error;
  }
}
