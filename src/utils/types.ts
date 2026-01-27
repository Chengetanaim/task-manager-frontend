export interface User {
    id: string;
    email:string;
    name: string;
}

export interface LoginCredentials {
    email: string;
    password: string;
}

export interface AuthContextType {
    token: string | null;
    user: User | null;
    login: (credentials: LoginCredentials) => Promise<void>;
    logout: () => void;
    isAuthenticated: boolean;
}

export interface AuthResponse {
    accessToken: string
    user: User;
}