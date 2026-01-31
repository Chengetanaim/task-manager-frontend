import type { LoginCredentials, AuthResponse } from "../types";
import { api } from "../../api/http";
import camelcaseKeys from "camelcase-keys";


export const authService = {
    login: async (credentials:LoginCredentials): Promise<AuthResponse> => {
        const formData = new URLSearchParams()
        formData.append("username", credentials.email)
        formData.append("password", credentials.password)
        const response = await api.post('/login', formData, {headers: {"Content-Type": "application/x-www-form-urlencoded"}})
        
        const transformedData = camelcaseKeys(response.data)
      
        return transformedData
    },
    logout: async(): Promise<void> => {
        await api.get('/logout')
    }
}