import toast from "react-hot-toast"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createEditUser } from "../../../services/apiUsers"

export function useCreateUser() {
  const queryClient = useQueryClient()

  const { mutate: createUser, isLoading: isCreating } = useMutation({
    mutationFn: createEditUser,
    onSuccess: () => {
      toast.success("El usuario se creo correctamente")
      queryClient.invalidateQueries({ queryKey: ["users"] })
    },
    onError: (error) => toast.error(error.message),
  })

  return { isCreating, createUser }
}
