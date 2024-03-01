import "./inner-panel.scss"

function InnerPanel({ icon, title, button, children }) {
  return (
    <div className="inner-panel">
      <div className="inner-panel__header">
        <div className="inner-panel__header__title-wrapper">
          {icon}
          <h3 className="inner-panel__header__title">{title}</h3>
        </div>

        {button}
      </div>
      {children}
    </div>
  )
}

export default InnerPanel
