import { useState } from "react";
import type { ReactNode } from "react";
import { AuthContext } from "../utils/auth/auth-context";
import { authService } from "../utils/auth/auth-service";
import type { User, LoginCredentials } from "../utils/types";

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("token"),
  );
  const [user, setUser] = useState<User | null>(null);
  const login = async (credentials: LoginCredentials): Promise<void> => {
    const data = await authService.login(credentials);
    setToken(data.token);
    setUser(data.user);
    localStorage.setItem("token", data.token);
  };
  const logout = (): void => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("token");
    authService.logout();
  };
  const isAuthenticated = !!token;
  return (
    <AuthContext.Provider
      value={{ token, user, login, logout, isAuthenticated }}
    >
      {children}
    </AuthContext.Provider>
  );
}
