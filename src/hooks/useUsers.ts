import { createUser } from "@/api/users";
import { useMutation } from "@tanstack/react-query";

export const useCreateUser = () => {
    
    return useMutation({
        mutationFn: createUser,
        
    })
}