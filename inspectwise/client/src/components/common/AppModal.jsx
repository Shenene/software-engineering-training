import "./AppModal.css";

// ---------------------------------- //

function AppModal({ title, message, confirmText, cancelText, onConfirm, onCancel, showCancel = false, type = "default" }) {
  const iconClass = type === "success" ? "bi bi-check-circle-fill" : type === "warning" ? "bi bi-exclamation-triangle-fill" : "bi bi-info-circle-fill";

  return (
    <div className="app-modal-overlay" onClick={onCancel}>
      <div className={`app-modal app-modal--${type}`} role="dialog" aria-modal="true" aria-labelledby="app-modal-title" aria-describedby="app-modal-message" onClick={(event) => event.stopPropagation()}>
        <div className="app-modal__heading">
          <i className={`app-modal__icon ${iconClass}`} aria-hidden="true"></i>

          <h2 id="app-modal-title">{title}</h2>
        </div>

        <p id="app-modal-message">{message}</p>

        <div className="app-modal__actions">
          {showCancel && (
            <button className="button button--secondary button--medium" type="button" onClick={onCancel}>
              {cancelText}
            </button>
          )}

          <button className="button button--primary button--medium" type="button" onClick={onConfirm}>
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
}

// ---------------------------------- //

export default AppModal;
