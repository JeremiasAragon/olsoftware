import "../../styles/forms.scss"

function FormGroup({ label, children }) {
  return (
    <div className="form__group">
      <label htmlFor={children.props.id} className="form__label">
        {label}
      </label>
      {children}
    </div>
  )
}

export default FormGroup
