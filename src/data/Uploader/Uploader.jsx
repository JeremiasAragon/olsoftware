import { useState } from "react"
import supabase from "../../services/supabase"
import Button from "../../components/Button/Button"
import roles from "../data-roles"
import users from "../data-users"

import "./uploader.scss"
import LoadingIndicator from "../../components/LoadingIndicator/LoadingIndicator"
import { useQueryClient } from "@tanstack/react-query"

async function createRoles() {
  const { error } = await supabase.from("roles").insert(roles)
  if (error) console.log(error.message)
}

async function deleteRoles() {
  const { error } = await supabase.from("roles").delete().gt("id", 0)
  if (error) console.log(error.message)
}

async function createUsers() {
  const { data: roles } = await supabase.from("roles").select("id").order("id")

  const rolesIds = roles.map((role) => role.id)

  const finalUsers = users.map((user) => {
    return {
      ...user,
      role_id: rolesIds.at(user.role_id),
    }
  })

  console.log(finalUsers)

  const { error } = await supabase.from("users").insert(finalUsers)
  if (error) console.log(error.message)
}

async function deleteUsers() {
  const { error } = await supabase.from("users").delete().gt("id", 0)
  if (error) console.log(error.message)
}

function Uploader() {
  const [isLoading, setIsLoading] = useState(false)
  const queryClient = useQueryClient()

  async function uploadData() {
    setIsLoading(true)

    // Delete all data first
    await deleteUsers()
    await deleteRoles()

    // Insert data
    await createRoles()
    await createUsers()

    queryClient.invalidateQueries({ queryKey: ["users"] })
    setIsLoading(false)
  }

  async function deleteData() {
    setIsLoading(true)

    // Delete all data first
    await deleteUsers()
    await deleteRoles()

    queryClient.invalidateQueries({ queryKey: ["users"] })
    setIsLoading(false)
  }

  if (isLoading) {
    return <LoadingIndicator />
  }

  return (
    <div className="uploader">
      <p>DATA DE PRUEBA</p>

      <div className="uploader__actions">
        <Button onClick={uploadData} color="secondary">
          Importar Data
        </Button>
        <Button onClick={deleteData} color="danger">
          Eliminar Data
        </Button>
      </div>
    </div>
  )
}

export default Uploader
