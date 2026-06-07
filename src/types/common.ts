// Generic API response structure
export interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

// Paginated response structure
export interface PaginatedResponse<T> {
  data: T[];
  meta: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}

// Request parameters for pagination and filtering
export interface QueryParams {
  page?: number;
  limit?: number;
  search?: string;
  sortBy?: string;
  order?: "asc" | "desc";
  [key: string]: unknown;
}
