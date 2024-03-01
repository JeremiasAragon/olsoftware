import "./users-page.scss"
import "../../styles/variables.scss"
import UsersTable from "../../features/users/UsersTable/UsersTable"
import { FiUsers } from "react-icons/fi"
import InnerPanel from "../../components/InnerPanel/InnerPanel"
import Button from "../../components/Button/Button"
import UsersForm from "../../features/users/UsersForm/UsersForm"
import Modal from "../../components/Modal/Modal"
import { FiFilter } from "react-icons/fi"
import FilterUsersForm from "../../features/users/FilterUsersForm/FilterUsersForm"
import { useUsers } from "../../features/users/hooks/useUsers"
import { useFilteredUsers } from "../../features/users/hooks/useFilteredUsers"

function UsersPage() {
  const { isLoading, users } = useUsers()
  const { filteredUsers } = useFilteredUsers()

  const usersToShow =
    filteredUsers && filteredUsers.length > 0 ? filteredUsers : users

  if (isLoading) return false

  return (
    <div className="users-page">
      <InnerPanel
        icon={<FiUsers size={24} className="inner-panel__header__icon" />}
        title="Usuarios existentes"
        button={
          <Modal>
            <Modal.Open opens="create-user">
              <Button color="primary">Crear</Button>
            </Modal.Open>
            <Modal.Window name="create-user">
              <UsersForm user={null} />
            </Modal.Window>
          </Modal>
        }
      >
        {usersToShow.length === 0 ? (
          <h2>No hay usuarios para mostrar</h2>
        ) : (
          <UsersTable users={usersToShow} />
        )}
      </InnerPanel>

      <InnerPanel
        icon={<FiFilter size={24} className="inner-panel__header__icon" />}
        title="Filtrar búsqueda"
      >
        <FilterUsersForm />
      </InnerPanel>
    </div>
  )
}

export default UsersPage
