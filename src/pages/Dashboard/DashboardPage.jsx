import { Outlet } from "react-router-dom"
import Sidebar from "../../components/Sidebar/Sidebar"
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"

function DashboardPage() {
  return (
    <div className="base-container">
      <Sidebar />

      <Header>Header here!</Header>

      <main className="main">
        <Outlet />
      </main>

      <Footer className="footer">Footer here!</Footer>
    </div>
  )
}

export default DashboardPage
