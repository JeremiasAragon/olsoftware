import toast from "react-hot-toast"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteUser as deleteUserApi } from "../../../services/apiUsers"

export function useDeleteUser() {
  const queryClient = useQueryClient()

  const { isLoading: isDeleting, mutate: deleteUser } = useMutation({
    mutationFn: deleteUserApi,
    onSuccess: () => {
      toast.success("Usuario eliminado correctamente")
      queryClient.invalidateQueries({ queryKey: ["users"] })
    },
    onError: (err) => toast.error(err.message),
  })

  return { isDeleting, deleteUser }
}
