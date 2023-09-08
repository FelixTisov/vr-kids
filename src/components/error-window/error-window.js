import React from 'react'
import './error-window.scss'
import './error-window_mobile.scss'

function ErrorWindow() {
  // Обработчик закрытия окна
  const handleClose = () => {
    const form = document.querySelector('.error-window-wrapper')
    form.style.display = 'none'
  }
  return (
    <div className="error-window">
      <div className="error-window-container">
        <div className="error-window-wrapper">
          <div className="form-header">
            <div className="form-header_side-block"></div>
            <div className="form-header_side-block">
              <img
                className="form-header_close"
                src={require('../../icons/icon_close.svg')}
                onClick={handleClose}
              ></img>
            </div>
          </div>
          <div className="error-window-text-container">
            <p>Данный метод пока недоступен</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ErrorWindow
