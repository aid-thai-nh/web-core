import { useState, useCallback } from "react";

import { useMutation } from "@tanstack/react-query";

import { authApi } from "../services/auth-api";
import { LoginRequest, AuthResponse } from "../types";

export function useLoginMutation() {
  const [currentData, setCurrentData] = useState<AuthResponse | null>(null);

  const mutation = useMutation({
    mutationFn: authApi.login,
    onSuccess: data => {
      setCurrentData(data);
      if (typeof window !== "undefined") {
        localStorage.setItem("accessToken", data.accessToken);
        localStorage.setItem("refreshToken", data.refreshToken);
      }
    },
  });

  const login = useCallback(
    async (data: LoginRequest) => {
      // Let the error propagate (throw or bubble up) so that the calling component handles showing the error.
      // DO NOT import or use toast notifications (e.g., toast.error) inside the hook.
      const response = await mutation.mutateAsync(data);
      return response;
    },
    [mutation],
  );

  return {
    login,
    currentData,
    isPending: mutation.isPending,
    error: mutation.error,
  };
}
