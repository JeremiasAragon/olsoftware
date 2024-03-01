import "./modal.scss"
import { createPortal } from "react-dom"
import { cloneElement, createContext, useContext, useState } from "react"
import Overlay from "../Overlay/Overlay"
import { useOutsideClick } from "../../hooks/useClickOutside"

const ModalContext = createContext()

function Modal({ children }) {
  const [openName, setOpenName] = useState("")

  const open = setOpenName
  const close = () => setOpenName("")

  return (
    <ModalContext.Provider value={{ openName, open, close }}>
      {children}
    </ModalContext.Provider>
  )
}

function Open({ children, opens: opensWindowName }) {
  const { open } = useContext(ModalContext)
  return cloneElement(children, { onClick: () => open(opensWindowName) })
}

function Window({ children, name, clickOutside = true }) {
  const { openName, close } = useContext(ModalContext)
  const { ref } = useOutsideClick(close)

  if (name !== openName) return null

  return createPortal(
    <Overlay>
      <div className="modal" ref={clickOutside ? ref : null}>
        <div>{cloneElement(children, { onCloseModal: close })}</div>
      </div>
    </Overlay>,
    document.body
  )
}

Modal.Open = Open
Modal.Window = Window

export default Modal
