import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 phút
      gcTime: 1000 * 60 * 10, // 10 phút (thay vì cacheTime)
      retry: 2,
      refetchOnWindowFocus: false,
    },
  },
});
