import axios from "axios";
import toast from "react-hot-toast";

export const api = axios.create({
    baseURL: "http://127.0.0.1:8000",
    headers: {
        "Content-Type": "application/json",
    }
})

api.interceptors.request.use(config => {
    const token = localStorage.getItem('taskManagertoken')
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
})

api.interceptors.response.use(
    response => response,
    error => {
        if (error.response){
            const status = error.response.status
            const message = error.response.data?.detail

            const isLoginEndpoint = error.config?.url?.includes('login')
             
            switch (status) {
                case 401:
                    if (!isLoginEndpoint) {
                        localStorage.removeItem('taskManagertoken')
                        toast.error('Session expired. Please login again.')
                        window.location.href = '/login-or-signup'
                    }
                    break
                case 403:
                    toast.error("You do not have permissions to perform this action")
                    break
                case 404:
                    toast.error(message || "Resource not found.")
                    break
                case 500:
                    toast.error("Server error.  Please try again later.")
                    break
                default:
                    toast.error(message || "An error occurred ")

            } 
        } else if (error.request) {
            toast.error("Network error.  Please check your connection")
        } else {
            toast.error("An unexpected error occurred.")
        }

        return Promise.reject(error)
    }
)