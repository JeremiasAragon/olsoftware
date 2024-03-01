import "./delete-user.scss"
import { useDeleteUser } from "../../features/users/hooks/useDeleteUser"
import Button from "../Button/Button"

function DeleteUser({ userId, onCloseModal }) {
  const { deleteUser, isDeleting } = useDeleteUser()

  function handleDelete() {
    deleteUser(userId, {
      onSuccess: () => {
        onCloseModal?.()
      },
    })
  }

  return (
    <div className="delete-user">
      <h2>¿Está seguro de que desea eliminar al usuario?</h2>

      <div className="delete-user__buttons">
        <Button color="danger" disabled={isDeleting} onClick={handleDelete}>
          Sí, eliminar
        </Button>
        <Button
          color="secondary-outline"
          onClick={onCloseModal}
          disabled={isDeleting}
        >
          no, cancelar
        </Button>
      </div>
    </div>
  )
}

export default DeleteUser
