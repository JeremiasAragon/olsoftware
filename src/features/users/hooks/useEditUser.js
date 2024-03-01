import toast from "react-hot-toast"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createEditUser } from "../../../services/apiUsers"

export function useEdituser() {
  const queryClient = useQueryClient()

  const { mutate: editUser, isLoading: isEditing } = useMutation({
    mutationFn: ({ user, id }) => createEditUser(user, id),
    onSuccess: () => {
      toast.success("El usuario se actualizó correctamente")
      queryClient.invalidateQueries({ queryKey: ["users"] })
    },
    onError: (error) => toast.error(error.message),
  })

  return { editUser, isEditing }
}
