import { api } from "./http";
import type { CreateUserInput, User } from "@/utils/types";

export const createUser = async(newUser: CreateUserInput): Promise<User> => {
    const response = await api.post('/users', newUser)
    return response.data
}