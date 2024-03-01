import { useQuery } from "@tanstack/react-query"

export function useFilteredUsers() {
  const {
    isLoading,
    data: filteredUsers,
    error,
  } = useQuery({
    queryKey: ["filteredUsers"],
  })

  return { isLoading, filteredUsers, error }
}
