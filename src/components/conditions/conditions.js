import React from 'react'
import './conditions.scss'

function Conditions() {
  // Обработчик закрытия формы
  const handleClose = () => {
    const form = document.querySelector('.conditions-wrapper')
    form.style.display = 'none'
  }
  return (
    <div className="form">
      <div className="form-container">
        <div className="conditions-wrapper">
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
          <div className="conditions-text-container"></div>
        </div>
      </div>
    </div>
  )
}

export default Conditions
