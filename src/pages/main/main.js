import React, { useRef, useState } from 'react'
import ContactButton from '../../components/contact-button/contact-button'
import PayForm from '../../components/pay-form/pay-form'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import AnimatedBg from '../../components/animated-bg/animated-bg'
import Conditions from '../../components/conditions/conditions'
import ErrorWindow from '../../components/error-window/error-window'
import './main.scss'
import './main_mobile.scss'

function Main() {
  const about = useRef()
  const payment = useRef()
  const contacts = useRef()

  const [currentVisibleBlock, setCurrentVisibleBlock] = useState('about')

  // Обработчки прокрутки до определенного блока
  const handleScrollToBlock = (targetBlock) => {
    let ref = null

    switch (targetBlock) {
      case 'about':
        ref = about
        break
      case 'payment':
        ref = payment
        break
      case 'contacts':
        ref = contacts
        break
      default:
        ref = about
        break
    }

    ref.current.scrollIntoView({ behavior: 'smooth' })
  }

  // Вычисление нахождения блока в viewport на percentVisible %
  const isElementXPercentInViewport = function (block, percentVisible) {
    let rect = block?.getBoundingClientRect(),
      windowHeight = window.innerHeight || document.documentElement.clientHeight

    return !(
      Math.floor(
        100 - ((rect?.top >= 0 ? 0 : rect?.top) / +-rect?.height) * 100
      ) < percentVisible ||
      Math.floor(100 - ((rect?.bottom - windowHeight) / rect?.height) * 100) <
        percentVisible
    )
  }

  // Вычисление текущего видимого блока
  window.onscroll = function () {
    let about = document.querySelector('.start')
    let payment = document.querySelector('.payment')
    let contacts = document.querySelector('.contacts')

    const blocks = [about, payment, contacts]
    blocks.forEach((block) => {
      if (isElementXPercentInViewport(block, 50)) {
        setCurrentVisibleBlock(block?.className)
      } else return
    })
  }

  // Обработчик открытия платежной формы
  const handleOpenPayForm = () => {
    const form = document.querySelector('.payment-form-wrapper')
    form.style.display = 'flex'
  }

  // Обработчик открытия окна ошибки
  const handleOpenErrorWindow = () => {
    const form = document.querySelector('.error-window-wrapper')
    form.style.display = 'flex'
  }

  // Обработчик открытия окна условий оказаняи услуг
  const handleOpenConditions = () => {
    const form = document.querySelector('.conditions-wrapper')
    form.style.display = 'flex'
  }

  /* Сдвиг бг при прокрутке */
  window.onscroll = function () {
    // Для левого блока
    let blockLeft = document.querySelector('.about_section_left')
    let offsetTopLeft = blockLeft?.getBoundingClientRect().top
    let offsetLeft = blockLeft?.getBoundingClientRect().left

    if (
      (offsetTopLeft < 0 && -offsetTopLeft < blockLeft.offsetHeight * 0.5) ||
      (offsetTopLeft > 0 && offsetTopLeft < blockLeft.offsetHeight * 0.5)
    ) {
      blockLeft.classList.add('block-in')
    } else {
      blockLeft.classList.remove('block-in')
    }

    if (
      (offsetTopLeft < 0 && -offsetTopLeft > blockLeft.offsetHeight * 0.5) ||
      (offsetTopLeft > 0 &&
        offsetTopLeft > blockLeft.offsetHeight * 0.5 &&
        -offsetLeft < blockLeft.offsetWidth * 0.84)
    ) {
      blockLeft.classList.add('block-out')
    } else {
      blockLeft.classList.remove('block-out')
    }

    // Для правого блока
    let blockRight = document.querySelector('.about_section_right')
    let offsetTopRight = blockRight?.getBoundingClientRect().top
    let offsetRight = blockRight?.getBoundingClientRect().left

    if (
      (offsetTopRight < 0 && -offsetTopRight < blockRight.offsetHeight * 0.5) ||
      (offsetTopRight > 0 && offsetTopRight < blockRight.offsetHeight * 0.5)
    ) {
      blockRight.classList.add('block-in-right')
    } else {
      blockRight.classList.remove('block-in-right')
    }

    if (
      (offsetTopRight < 0 && -offsetTopRight > blockRight.offsetHeight * 0.5) ||
      (offsetTopRight > 0 &&
        offsetTopRight > blockRight.offsetHeight * 0.5 &&
        -offsetRight < blockRight.offsetWidth * 0.84)
    ) {
      blockRight.classList.add('block-out-right')
    } else {
      blockRight.classList.remove('block-out-right')
    }
  }

  return (
    <div className="body">
      <div className="wrapper area">
        <Header
          handleScrollToBlock={handleScrollToBlock}
          currentVisibleBlock={currentVisibleBlock}
        />
        <div className="error-window-wrapper">
          <ErrorWindow />
        </div>
        <div className="payment-form-wrapper">
          <PayForm />
        </div>
        <div className="conditions-wrapper">
          <Conditions />
        </div>
        <AnimatedBg />
        <div ref={about} className="start">
          <div className="start_content">
            <div className="start_content-left">
              <div className="start_content_main-info">
                <div className="start_content_main-info_title">
                  <div className="start_content_main-info_h1-container">
                    <h1>VRKIDS</h1>
                  </div>
                  <div className="start_content_main-info_p-container">
                    <p>
                      МИР УДИВИТЕЛЬНЫХ ОТКРЫТИЙ
                      <br />
                      ДЛЯ ВАШИХ ДЕТЕЙ
                    </p>
                  </div>
                </div>
                <div className="start_content_main-info_contacts">
                  <div className="start_content_main-info_contacts_buttons">
                    <ContactButton
                      bgColor="#000"
                      text="ВКОНТАКТЕ"
                      iconUrl="icon_vk.svg"
                      alt="vk-icon"
                      link="https://vk.com/vrkids"
                    />
                    <ContactButton
                      bgColor="#4d9bf5"
                      text="ТЕЛЕГРАМ"
                      iconUrl="icon_tg.svg"
                      alt="tg-icon"
                      link="https://t.me/vrkids"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="start_content-right">
              <div className="start_content_main-image-container">
                <img
                  className="start_content_main-image-container_img"
                  src={require('../../images/gir-ltop1.png')}
                  alt="girl-in-vr-helmet"
                ></img>
              </div>
              <div className="start_content_blue-box"></div>
            </div>
          </div>
        </div>
        <div className="about">
          <div className="about_section about_section_left">
            <div className="about_group">
              <div className="about_group_content">
                <div className="about_group_content_image-container">
                  <img
                    className="about_group_content_image-container_image-first"
                    src={require('../../images/screaming-boy.png')}
                  ></img>
                </div>
                <div className="about_group_content_text">
                  <h3>VR Kids - это</h3>
                  <p>
                    совершенно новый подход к образованию. Уникальная
                    возможность погрузиться в виртуальный мир, полный новых
                    открытий и удивительных историй.
                  </p>
                </div>
              </div>
              <div className="about_group_group-bg about_group_group-bg_left"></div>
            </div>
          </div>
          <div className="about_section about_section_right">
            <div className="about_group">
              <div className="about_group_content">
                <div className="about_group_content_text about_group_content_text_second">
                  <p>
                    совершенно новый подход к образованию. Уникальная
                    возможность погрузиться в виртуальный мир, полный новых
                    открытий и удивительных историй.
                  </p>
                </div>
                <div className="about_group_content_image-container">
                  <img
                    className="about_group_content_image-container_image-second"
                    src={require('../../images/boy-on-skateboard.png')}
                  ></img>
                </div>
              </div>
              <div className="about_group_group-bg about_group_group-bg_right"></div>
            </div>
          </div>
        </div>
        <div className="payment">
          <div className="example-video-wrapper">
            <div className="example-video-container_shadow">
              <p>
                МНОЖЕССТВО ОБРАЗОВАТЕЛЬНЫХ
                <br />
                ФИЛЬМОВ ДЛЯ ВСЕХ ВОЗРАСТОВ
              </p>
            </div>
            <div className="example-video-container_video">
              <video
                className="example-video"
                autoPlay={true}
                muted
                loop
                playsInline={true}
              >
                <source
                  type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
                  src={require('../../videos/example-video.mp4')}
                ></source>
              </video>
            </div>
          </div>
          <div ref={payment} className="payment-methods">
            <div className="payment-methods_title">
              <h2>ВАРИАНТЫ ОПЛАТЫ</h2>
            </div>
            <div className="payment-methods_content">
              <div className="payment-methods_content_half">
                <img
                  className="pushkin-card"
                  src={require('../../images/pushkin-card.png')}
                  alt="pushkinskaia karta"
                  onClick={handleOpenErrorWindow}
                  onTouchEnd={handleOpenErrorWindow}
                ></img>
                <img
                  className="bank-card"
                  src={require('../../images/bank-card.png')}
                  alt="bankovskaia karta"
                  onClick={handleOpenPayForm}
                  onTouchEnd={handleOpenPayForm}
                ></img>
              </div>
              <div className="payment-methods_content_half">
                <h3>ПРОСТО. БЫСТРО. УДОБНО.</h3>
                <p>
                  Выберите наиболее подходящий
                  <br />
                  вам метод оплаты.
                </p>
                <div className="payment-methods_content_half_conditions">
                  <p
                    onClick={handleOpenConditions}
                    className="payment-methods_content_half_conditions_underlined"
                  >
                    Условия
                  </p>
                  <p className="payment-methods_content_half_conditions_last-text">
                    предоставления услуг
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="payment-bg"></div>
        </div>
        <div ref={contacts} className="contacts">
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Main
