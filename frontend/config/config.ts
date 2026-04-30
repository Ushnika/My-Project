import { ApiClient } from "@/lib/api";

const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL ||
  process.env.BASE_URL ||
  "http://localhost:8080";

export const api = new ApiClient({
  baseUrl,
});
