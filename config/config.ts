import { ApiClient } from "@/lib/api";

export const api = new ApiClient({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL
})