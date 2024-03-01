import "./users-table.scss"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TablePagination,
  TableContainer,
} from "@mui/material"
import { useState } from "react"
import { FiEdit2, FiTrash2 } from "react-icons/fi"
import Modal from "../../../components/Modal/Modal"
import UsersForm from "../UsersForm/UsersForm"
import DeleteUser from "../../../components/DeleteUser/DeleteUser"

function UsersTable({ users }) {
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(6)

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  return (
    <>
      <TableContainer>
        <Table className="table">
          <TableHead>
            <TableRow>
              <TableCell className="table-header">Nombres</TableCell>
              <TableCell className="table-header">Apellidos</TableCell>
              <TableCell className="table-header">
                Identificación (C.C.)
              </TableCell>
              <TableCell className="table-header">Rol Asociado</TableCell>
              <TableCell className="table-header">Estado</TableCell>
              <TableCell className="table-header">Teléfono</TableCell>
              <TableCell className="table-header">Correo electrónico</TableCell>
              <TableCell className="table-header">Acción</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((user) => (
                <TableRow key={user.id} style={{ fontSize: "1.4rem" }}>
                  <TableCell className="table-cell">{user.name}</TableCell>
                  <TableCell className="table-cell">{user.last_name}</TableCell>
                  <TableCell className="table-cell">{user.document}</TableCell>
                  <TableCell className="table-cell">
                    {user.roles.description}
                  </TableCell>
                  <TableCell className="table-cell">
                    {user.state ? "Activo" : "Inactivo"}
                  </TableCell>
                  <TableCell className="table-cell">{user.phone}</TableCell>
                  <TableCell className="table-cell">{user.email}</TableCell>
                  <TableCell align="right" className="table-cell-buttons">
                    <Modal>
                      <Modal.Open opens="edit-user">
                        <button
                          className="action-button"
                          style={{ marginRight: "0.8rem" }}
                        >
                          <FiEdit2 size={16} color={"#2f51e0"} />
                        </button>
                      </Modal.Open>
                      <Modal.Window name="edit-user">
                        <UsersForm user={user} />
                      </Modal.Window>
                    </Modal>
                    <Modal>
                      <Modal.Open opens="delete-user">
                        <button className="action-button">
                          <FiTrash2 size={16} color={"#e92828"} />
                        </button>
                      </Modal.Open>
                      <Modal.Window name="delete-user">
                        <DeleteUser userId={user.id} />
                      </Modal.Window>
                    </Modal>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        className="pagination"
        rowsPerPage={rowsPerPage}
        page={page}
        count={users.length}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        rowsPerPageOptions={[6, 10]}
        component="div"
      />
    </>
  )
}

export default UsersTable
