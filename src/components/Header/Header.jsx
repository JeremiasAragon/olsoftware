import "./header.scss"
import { FiMenu } from "react-icons/fi"
import { IoIosLogOut } from "react-icons/io"
import { FaRegUserCircle } from "react-icons/fa"
import { useNavigate } from "react-router-dom"

function Header() {
  const navigate = useNavigate()

  return (
    <div className="header">
      <div className="header__title-wrapper">
        <FiMenu size={28} className="header__menu-btn" />
        <p className="header__title">Prueba frontend</p>
      </div>

      <div className="header__logout-wrapper">
        <FaRegUserCircle size={24} />
        <p className="header__user-name">Jeremías Aragón Bonilla</p>
        <IoIosLogOut
          size={28}
          className="header__logout-btn"
          onClick={() => navigate("/")}
        />
      </div>
    </div>
  )
}

export default Header
