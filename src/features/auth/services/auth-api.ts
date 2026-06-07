import { LoginRequest, AuthResponse } from "../types";

export const authApi = {
  login: async (data: LoginRequest): Promise<AuthResponse> => {
    // In a real application this would make an actual call:
    // const response = await httpClient.post<AuthResponse>("/auth/login", data);
    // return response.data;

    // For demo purposes and testing correctness, we simulate a latency-based success login:
    await new Promise(resolve => setTimeout(resolve, 800));

    if (data.email.includes("error")) {
      throw new Error("Tài khoản hoặc mật khẩu không chính xác.");
    }

    return {
      accessToken: "mock-access-token-" + Math.random().toString(36).substring(2),
      refreshToken: "mock-refresh-token",
      user: {
        id: "usr_123",
        email: data.email,
        name: "Khách hàng GlobalSafe",
        role: "user",
      },
    };
  },

  logout: async (): Promise<void> => {
    // Simulated logout
    await new Promise(resolve => setTimeout(resolve, 500));
  },
};
