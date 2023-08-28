import React, { useRef, useState } from 'react'
import ContactButton from '../components/contact-button/contact-button'
import PayForm from '../components/pay-form/pay-form'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import './main.scss'

function Main() {
  const about = useRef()
  const payment = useRef()
  const contacts = useRef()
  const tinkPaymentForm = useRef()

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
    let rect = block.getBoundingClientRect(),
      windowHeight = window.innerHeight || document.documentElement.clientHeight

    return !(
      Math.floor(100 - ((rect.top >= 0 ? 0 : rect.top) / +-rect.height) * 100) <
        percentVisible ||
      Math.floor(100 - ((rect.bottom - windowHeight) / rect.height) * 100) <
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
        setCurrentVisibleBlock(block.className)
      } else return
    })
  }

  // Обработчик открытия платежной формы
  const handleOpen = () => {
    const form = document.querySelector('.payment-form-wrapper')
    form.style.display = 'flex'
  }

  return (
    <div className="body">
      <div className="wrapper">
        <Header
          handleScrollToBlock={handleScrollToBlock}
          currentVisibleBlock={currentVisibleBlock}
        />
        <div className="payment-form-wrapper" ref={tinkPaymentForm}>
          <PayForm />
        </div>
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
                  src={require('../images/gir-ltop.png')}
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
                    src={require('../images/screaming-boy.png')}
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
                    src={require('../images/boy-on-skateboard.png')}
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
              <img
                src={require('../images/videobg.png')}
                alt="video example about dinosaurs"
              ></img>
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
                  src={require('../images/pushkin-card.png')}
                  alt="pushkinskaia karta"
                ></img>
                <img
                  className="bank-card"
                  src={require('../images/bank-card.png')}
                  alt="bankovskaia karta"
                  onClick={handleOpen}
                ></img>
              </div>
              <div className="payment-methods_content_half">
                <div className=""></div>
                <h3>ПРОСТО. БЫСТРО. УДОБНО.</h3>
                <p>
                  Выберите наиболее подходящий
                  <br />
                  вам метод оплаты.
                </p>
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
