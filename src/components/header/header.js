import React, { useRef } from 'react'
import './header.scss'

function Header({ handleScrollToBlock }) {
  const about = useRef()
  const payment = useRef()
  const contacts = useRef()

  const handleCLick = (ref, blockName) => {
    const button = ref.current
    const currentActiveButton = document.querySelector('.header_button_active')

    currentActiveButton.classList.remove('header_button_active')
    button.classList.add('header_button_active')
    handleScrollToBlock(blockName)
  }

  return (
    <div className="header-container">
      <div className="header">
        <div className="header_buttons-container">
          <div
            ref={about}
            onClick={() => handleCLick(about, 'about')}
            className="header_button header_button_active"
          >
            <p>О НАС</p>
          </div>
          <div
            ref={payment}
            onClick={() => handleCLick(payment, 'payment')}
            className="header_button"
          >
            <p>ОПЛАТА</p>
          </div>
          <div
            ref={contacts}
            onClick={() => handleCLick(contacts, 'contacts')}
            className="header_button"
          >
            <p>КОНТАКТЫ</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
