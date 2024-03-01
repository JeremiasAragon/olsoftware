import { useQuery } from "@tanstack/react-query"
import { getUsersRoles } from "../../services/apiUsers"

export function useRoles() {
  const {
    isLoading,
    data: roles,
    error,
  } = useQuery({
    queryKey: ["roles"],
    queryFn: () => getUsersRoles(),
  })

  return { isLoading, roles, error }
}
