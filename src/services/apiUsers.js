import supabase from "./supabase"

export async function getUsers() {
  let { data, error } = await supabase
    .from("users")
    .select("*, roles(description)")

  if (error) {
    throw new Error("Users could not be loaded")
  }

  return data
}

export async function getUsersRoles() {
  let { data, error } = await supabase.from("roles").select("*")

  if (error) {
    throw new Error("User roles could not be loaded")
  }

  return data
}

export async function createEditUser(user, id) {
  let query = supabase.from("users")

  if (!id) {
    query = query.insert([user])
  }

  if (id) {
    query = query.update(user).eq("id", id)
  }

  const { data, error } = await query.select().single()

  if (error) {
    throw new Error("Se ha presentado un error")
  }

  return data
}

export async function deleteUser(id) {
  const { data, error } = await supabase.from("users").delete().eq("id", id)

  if (error) {
    console.error(error)
    throw new Error("No se pudo eliminar el usuario")
  }

  return data
}
