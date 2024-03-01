import "./login-page.scss"
import LoginForm from "../../features/auth/LoginForm"

function LoginPage() {
  return (
    <div className="login-page">
      <div className="form-container">
        <LoginForm />
      </div>

      <p className="date">OlSoftware - {new Date().getFullYear()}</p>
    </div>
  )
}

export default LoginPage
