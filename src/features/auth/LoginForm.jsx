import { useNavigate } from "react-router-dom"
import Button from "../../components/Button/Button"
import FormGroup from "../../components/Forms/FormGroup"
import "../../styles/forms.scss"
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"
import { useEffect } from "react"

function LoginForm() {
  const {
    register,
    formState: { isValid },
    handleSubmit,
    setValue,
  } = useForm({ mode: "all" })

  const navigate = useNavigate()

  useEffect(() => {
    setValue("user", "admin", { shouldValidate: true })
    setValue("password", "123456", { shouldValidate: true })
  }, [setValue])

  function onSubmit(data) {
    if (isValid) {
      if (data.user === "admin" && data.password === "123456") {
        navigate("/dashboard")
      } else {
        toast.error("Usuario o contraseña incorrectos")
      }
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <div className="form__title-wrapper">
        <p className="form__title">Inicio de sesión</p>
      </div>
      <FormGroup label="Nombre de usuario">
        <input
          type="text"
          id="user"
          name="user"
          className="form__input"
          {...register("user", {
            required: "Este campo es requerido",
          })}
        />
      </FormGroup>

      <FormGroup label="Contraseña">
        <input
          type="text"
          id="password"
          name="password"
          className="form__input"
          {...register("password", { required: "Este campo es requerido" })}
        />
      </FormGroup>

      <div className="form__buttons">
        <Button type="submit" color="primary">
          Iniciar sesión
        </Button>
      </div>
    </form>
  )
}

export default LoginForm
