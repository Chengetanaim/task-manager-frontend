import type { LoginCredentials, AuthResponse } from "../types";
import { api } from "../../api/http";


export const authService = {
    login: async (credentials:LoginCredentials): Promise<AuthResponse> => {
        const response = await api.post('/login', credentials)
        return response.data
    },
    logout: async(): Promise<void> => {
        await api.get('/logout')
    }
}