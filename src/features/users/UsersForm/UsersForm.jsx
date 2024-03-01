import "../../../styles/forms.scss"
import FormGroup from "../../../components/Forms/FormGroup"
import Button from "../../../components/Button/Button"
import { useForm } from "react-hook-form"
import { IoMdClose } from "react-icons/io"
import { useRoles } from "../../roles/useRoles"
import { useCreateUser } from "../hooks/useCreateUser"
import { useEdituser } from "../hooks/useEditUser"

function UsersForm({ user, onCloseModal }) {
  const isEditingSession = !!user

  const { register, handleSubmit, reset } = useForm({
    defaultValues: isEditingSession ? user : { state: true },
  })

  const { roles, isLoading: isLoadingRoles } = useRoles()

  const { createUser } = useCreateUser()
  const { editUser } = useEdituser()

  function onSubmit(data) {
    //remove unnecesary field roles
    delete data.roles

    if (isEditingSession) {
      editUser(
        { user: data, id: user.id },
        {
          onSuccess: () => {
            reset()
            onCloseModal?.()
          },
        }
      )
    } else {
      createUser(data, {
        onSuccess: (data) => {
          reset()
          onCloseModal?.()
        },
      })
    }
  }

  if (isLoadingRoles) {
    return false
  }

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <div className="form__title-wrapper">
        <p className="form__title">
          {!user ? `Agregar nuevo usuario` : "Editar usuario"}
        </p>
        <IoMdClose size={24} className="form__close" onClick={onCloseModal} />
      </div>
      <div className="form__row">
        <FormGroup label="Nombres">
          <input
            type="text"
            id="first-name"
            name="first-name"
            className="form__input"
            {...register("name", {
              required: "Este campo es requerido",
            })}
          />
        </FormGroup>

        <FormGroup label="Apellidos">
          <input
            type="text"
            id="last-name"
            name="last-name"
            className="form__input"
            {...register("last_name", { required: "Este campo es requerido" })}
          />
        </FormGroup>
      </div>

      <div className="form__row">
        <FormGroup label="Identificación (C.C.)">
          <input
            type="number"
            id="document"
            name="document"
            className="form__input"
            {...register("document", { required: "Este campo es requerido" })}
          />
        </FormGroup>

        <FormGroup label="Rol asociado">
          <select
            id="role"
            name="role"
            className="form__input"
            {...register("role_id", { required: "Este campo es requerido" })}
          >
            <option value={-1}>Seleccione...</option>
            {roles.map((role) => (
              <option key={role.id} value={role.id}>
                {role.description}
              </option>
            ))}
          </select>
        </FormGroup>
      </div>

      <div className="form__row">
        <FormGroup label="Estado">
          <select
            id="state"
            name="state"
            className="form__input"
            {...register("state", { required: "Este campo es requerido" })}
          >
            <option value={true}>Activo</option>
            <option value={false}>Inactivo</option>
          </select>
        </FormGroup>

        <FormGroup label="Contraseña">
          <input
            type="password"
            id="password"
            name="password"
            className="form__input"
            {...register("password", { required: "Este campo es requerido" })}
          />
        </FormGroup>
      </div>

      <div className="form__row">
        <FormGroup label="Teléfono">
          <input
            type="tel"
            id="phone"
            name="phone"
            className="form__input"
            {...register("phone", { required: "Este campo es requerido" })}
          />
        </FormGroup>

        <FormGroup label="Correo electrónico">
          <input
            type="text"
            id="email"
            name="email"
            className="form__input"
            {...register("email", { required: "Este campo es requerido" })}
          />
        </FormGroup>
      </div>

      <div className="form__buttons">
        <Button type="submit" color="secondary">
          Guardar
        </Button>
        <Button type="submit" color="secondary-outline" onClick={onCloseModal}>
          Cancelar
        </Button>
      </div>
    </form>
  )
}

export default UsersForm
