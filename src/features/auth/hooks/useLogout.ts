import { useState, useCallback } from "react";

import { useMutation } from "@tanstack/react-query";

import { authApi } from "../services/auth-api";

export function useLogout() {
  const [currentData, setCurrentData] = useState<void | null>(null);

  const mutation = useMutation({
    mutationFn: authApi.logout,
    onSuccess: () => {
      setCurrentData(null);
      if (typeof window !== "undefined") {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
      }
    },
  });

  const logout = useCallback(async () => {
    // Let the error propagate (throw or bubble up) so that the calling component handles showing the error.
    // DO NOT import or use toast notifications (e.g., toast.error) inside the hook.
    const response = await mutation.mutateAsync();
    return response;
  }, [mutation]);

  return {
    logout,
    currentData,
    isPending: mutation.isPending,
    error: mutation.error,
  };
}
