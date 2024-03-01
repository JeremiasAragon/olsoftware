import "./sidebar.scss"
import { cloneElement } from "react"
import {
  FiChevronDown,
  FiMap,
  FiList,
  FiSliders,
  FiFileText,
  FiUser,
  FiLock,
} from "react-icons/fi"

import { FaCircle } from "react-icons/fa"
import { NavLink } from "react-router-dom"
import Uploader from "../../data/Uploader/Uploader"

const sidebarOptions = [
  {
    icon: <FiMap />,
    description: "Programación",
    children: [],
    path: "programming",
  },
  {
    icon: <FiList />,
    description: "Gestión de operaciones",
    children: [],
    path: "operations-management",
  },
  {
    icon: <FiSliders />,
    description: "Perfiles",
    children: [],
    path: "profiles",
  },
  {
    icon: <FiLock />,
    description: "Roles",
    path: "roles",
  },
  {
    icon: <FiUser />,
    description: "Usuarios",
    path: "users",
  },
  {
    icon: <FiFileText />,
    description: "Reportes",
    children: [],
    path: "reports",
  },
]

function Sidebar() {
  return (
    <div className="sidebar">
      <Logo />

      <hr />

      <div className="sidebar__options">
        {sidebarOptions.map((item, index) => (
          <SidebarItem key={index} item={item} iconSize={28} iconColor="#fff" />
        ))}
      </div>

      <Uploader />
    </div>
  )
}

function SidebarItem({ item, iconSize, iconColor }) {
  const { icon, description, children, path } = item

  return (
    <NavLink className="sidebar-item" to={path}>
      <div className="sidebar-item__icon">
        {cloneElement(icon, { size: iconSize, color: iconColor })}
      </div>
      <p className="sidebar-item__text">{description}</p>
      {children && (
        <FiChevronDown
          size={16}
          color={iconColor}
          className="sidebar-item__toggle"
        />
      )}
    </NavLink>
  )
}

function Logo() {
  return (
    <div className="logo">
      <FaCircle size={32} color="#fff" />
      <p>OLSoftware</p>
    </div>
  )
}

export default Sidebar
