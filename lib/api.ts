type QueryParams = Record<string, string | number | boolean | undefined>;

interface ApiClientOptions {
  baseUrl?: string;
  headers?: HeadersInit;
}

interface RequestOptions {
  queryParams?: QueryParams;
  headers?: HeadersInit;
  body?: any;
}

export class ApiError extends Error {
  status: number;
  data?: any;

  constructor(message: string, status: number, data?: any) {
    super(message);
    this.status = status;
    this.data = data;
  }
}

export class ApiClient {
  private baseUrl: string;
  private defaultHeaders: HeadersInit;

  constructor(options?: ApiClientOptions) {
    this.baseUrl = options?.baseUrl || "";
    this.defaultHeaders = options?.headers || {
      "Content-Type": "application/json",
    };
  }

  private buildUrl(url: string, queryParams?: QueryParams) {
    const fullUrl = this.baseUrl + url;
    if (!queryParams) return fullUrl;
    const params = new URLSearchParams();
    Object.entries(queryParams).forEach(([key, value]) => {
      if (value != undefined && value != null) {
        params.append(key, String(value));
      }
    });
    return `${fullUrl}?${params.toString()}`;
  }

  private async request<T>(
    method: "GET" | "POST" | "PUT" | "DELETE",
    url: string,
    options?: RequestOptions,
  ): Promise<T> {
    const finalUrl = this.buildUrl(url, options?.queryParams);
    try {
      const res = await fetch(finalUrl, {
        method,
        headers: {
          ...this.defaultHeaders,
          ...options?.headers,
        },
        body: options?.body ? JSON.stringify(options.body) : undefined,
        cache: "no-store",
      });
      let data: any = null;
      try {
        data = await res.json();
      } catch {
        data = null;
      }
      if (!res.ok) {
        switch (res.status) {
          case 401:
            console.error("Unauthorized - maybe logout user");
            break;
          case 404:
            console.error("Resource not found");
            break;
          case 500:
            console.error("Server error");
            break;
          default:
            console.error("Unexpected error");
        }
        throw new ApiError(
          data?.message || "Something went wrong",
          res.status,
          data,
        );
      }
      return data as T;
    } catch (error) {
      if (error instanceof ApiError) throw error;
      throw new ApiError("Network error", 0);
    }
  }

  get<T>(url: string, options?: RequestOptions) {
    return this.request<T>("GET", url, options);
  }

  post<T>(url: string, body?: any, options?: RequestOptions) {
    return this.request<T>("POST", url, { ...options, body });
  }

  put<T>(url: string, body?: any, options?: RequestOptions) {
    return this.request<T>("PUT", url, { ...options, body });
  }

  delete<T>(url: string, options?: RequestOptions) {
    return this.request<T>("DELETE", url, options);
  }
}
