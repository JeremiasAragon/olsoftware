import "./button.scss"

function Button({ onClick, color = "primary", children, disabled }) {
  return (
    <button
      className={`button button__${color}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
