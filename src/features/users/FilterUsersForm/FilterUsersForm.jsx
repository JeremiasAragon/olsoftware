import { useForm } from "react-hook-form"
import FormGroup from "../../../components/Forms/FormGroup"
import { useRoles } from "../../roles/useRoles"
import { useQueryClient } from "@tanstack/react-query"
import Button from "../../../components/Button/Button"

function FilterUsersForm() {
  const { roles, isLoading: isLoadingRoles } = useRoles()
  const queryClient = useQueryClient()

  const { register, handleSubmit, reset } = useForm()

  function onSubmit(data) {
    const usersData = queryClient.getQueryData(["users"])
    if (!usersData) return

    queryClient.setQueryData(
      ["filteredUsers"],
      usersData.filter((user) => {
        for (let key in data) {
          if (data[key] === "") {
            continue
          } else {
            const filterValue = data[key].toString().toLowerCase()
            const userFieldValue = user[key].toString().toLowerCase()

            if (userFieldValue.includes(filterValue)) {
              return true
            }
          }
        }

        return false
      })
    )
  }

  function handleReset() {
    reset({
      name: "",
      last_name: "",
      document: "",
      role_id: "",
      state: "",
      password: "",
      phone: "",
      email: "",
    })
  }

  if (isLoadingRoles) {
    return false
  }

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)} onReset={reset}>
      <FormGroup label="Nombres">
        <input
          type="text"
          id="first-name"
          name="first-name"
          className="form__input"
          {...register("name")}
        />
      </FormGroup>

      <FormGroup label="Apellidos">
        <input
          type="text"
          id="last-name"
          name="last-name"
          className="form__input"
          {...register("last_name")}
        />
      </FormGroup>

      <FormGroup label="Identificación (C.C.)">
        <input
          type="number"
          id="document"
          name="document"
          className="form__input"
          {...register("document")}
        />
      </FormGroup>

      <FormGroup label="Rol asociado">
        <select
          id="role"
          name="role"
          className="form__input"
          {...register("role_id")}
        >
          <option value="">Seleccione...</option>
          {roles.map((role) => (
            <option key={role.id} value={role.id}>
              {role.description}
            </option>
          ))}
        </select>
      </FormGroup>

      <FormGroup label="Estado">
        <select
          id="state"
          name="state"
          className="form__input"
          {...register("state")}
        >
          <option value="">Seleccione...</option>
          <option value={true}>Activo</option>
          <option value={false}>Inactivo</option>
        </select>
      </FormGroup>

      <FormGroup label="Teléfono">
        <input
          type="tel"
          id="phone"
          name="phone"
          className="form__input"
          {...register("phone")}
        />
      </FormGroup>

      <FormGroup label="Correo electrónico">
        <input
          type="text"
          id="email"
          name="email"
          className="form__input"
          {...register("email")}
        />
      </FormGroup>

      <div className="form__buttons">
        <Button
          type="submit"
          color="secondary"
          onClick={handleSubmit(onSubmit)}
        >
          Filtrar
        </Button>
        <Button color="secondary-outline" onClick={handleReset}>
          Limpiar
        </Button>
      </div>
    </form>
  )
}

export default FilterUsersForm
