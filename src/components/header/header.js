import React, { useEffect, useRef, useState } from 'react'
import './header.scss'
import './header_mobile.scss'

function Header({ handleScrollToBlock, currentVisibleBlock }) {
  const about = useRef()
  const payment = useRef()
  const contacts = useRef()

  const [isVisible, setVisibility] = useState('hidden')
  const [openIsVisible, setOpenVisibility] = useState('visible')
  const [closeIsVisible, setCloseVisibility] = useState('hidden')

  // Изменение текущего раздела в шапке при прокрутке страницы
  useEffect(() => {
    const currentActiveButton = document.querySelector('.header_button_active')
    currentActiveButton?.classList.remove('header_button_active')
    let button
    switch (currentVisibleBlock) {
      case 'start':
        button = about.current
        button.classList.add('header_button_active')
        break
      case 'payment':
        button = payment.current
        button.classList.add('header_button_active')
        break
      case 'contacts':
        button = contacts.current
        button.classList.add('header_button_active')
        break
      default:
        button = about.current
        button.classList.add('header_button_active')
        break
    }
  }, [currentVisibleBlock])

  // Обработчик нажатия на кнопку десктопной шапки
  const handleCLick = (ref, blockName) => {
    const button = ref.current
    const currentActiveButton = document.querySelector('.header_button_active')

    currentActiveButton.classList.remove('header_button_active')
    button.classList.add('header_button_active')

    handleScrollToBlock(blockName)
  }

  // Обработчик нажатия кнокпи мобильного меню
  const menuBtnHandler = () => {
    let menu = document.querySelector('.menu-cont')

    if (openIsVisible === 'visible') {
      setOpenVisibility('hidden')
      setCloseVisibility('visible')
    } else {
      setOpenVisibility('visible')
      setCloseVisibility('hidden')
    }

    if (isVisible === 'hidden') {
      setVisibility('visible')
      menu.animate(
        [{ transform: 'translateY(-100vh)' }, { transform: `translateY(0vh)` }],
        {
          duration: 300,
          iterations: 1,
        }
      )
    } else {
      menu.animate(
        [{ transform: `translateY(0vh)` }, { transform: 'translateY(-100vh)' }],
        {
          duration: 300,
          iterations: 1,
        }
      )
      setTimeout(() => {
        setVisibility('hidden')
      }, 300)
    }
  }

  return (
    <div className="header-container">
      Мобильное меню
      <div className="mobile-menu">
        <div className="menu-btn" onClick={menuBtnHandler}>
          <div className="open-btn" style={{ visibility: openIsVisible }}>
            <div className="menu-line line-top" />
            <div className="menu-line line-middle" />
            <div className="menu-line line-bottom" />
          </div>

          <div className="close-btn" style={{ visibility: closeIsVisible }}>
            <img
              className="close-btn_icon"
              src={require('../../icons/icon_close.svg')}
            ></img>
          </div>
        </div>

        <div className="menu-cont" style={{ visibility: isVisible }}>
          <div className="menu-nav">
            <p
              onClick={() => {
                menuBtnHandler()
                handleCLick(about, 'about')
              }}
            >
              О НАС
            </p>
            <p
              onClick={() => {
                menuBtnHandler()
                handleCLick(payment, 'payment')
              }}
            >
              ОПЛАТА
            </p>
            <p
              onClick={() => {
                menuBtnHandler()
                handleCLick(contacts, 'contacts')
              }}
            >
              КОНТАКТЫ
            </p>
          </div>
        </div>
      </div>
      {/* Десктопная шапка */}
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
