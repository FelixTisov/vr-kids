import React, { useRef, useState } from 'react'
import AnimatedCursor from 'react-animated-cursor'
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
  function CheckCurrentBlock() {
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

  // Анимация выезда блоков
  function CheckMoveSlides() {
    // Для левого блока
    let blockLeft = document.querySelector('.about_section_left')
    let offsetTopLeft = blockLeft?.getBoundingClientRect().top
    let offsetLeft = blockLeft?.getBoundingClientRect().left

    if (Math.abs(offsetTopLeft) < blockLeft.offsetHeight * 0.5) {
      if (
        Math.floor(Math.abs(offsetLeft)) >
        Math.abs(blockLeft.offsetWidth * 0.849)
      )
        blockLeft.classList.add('block-in')
    } else {
      if (Math.floor(Math.abs(offsetLeft)) === 100)
        blockLeft.classList.remove('block-in')
    }

    if (Math.abs(offsetTopLeft) > blockLeft.offsetHeight * 0.5) {
      if (Math.floor(Math.abs(offsetLeft)) === 100)
        blockLeft.classList.add('block-out')
    } else {
      if (
        Math.floor(Math.abs(offsetLeft)) >
        Math.abs(blockLeft.offsetWidth * 0.849)
      )
        blockLeft.classList.remove('block-out')
    }

    // Для правого блока
    let blockRight = document.querySelector('.about_section_right')
    let offsetTopRight = blockRight?.getBoundingClientRect().top
    let offsetRight = blockRight?.getBoundingClientRect().left

    if (Math.abs(offsetTopRight) < blockRight.offsetHeight * 0.5) {
      if (
        Math.floor(Math.abs(offsetRight)) >
        Math.abs(blockRight.offsetWidth * 0.849)
      )
        blockRight.classList.add('block-in-right')
    } else {
      if (Math.floor(Math.abs(offsetRight)) === 100)
        blockRight.classList.remove('block-in-right')
    }

    if (Math.abs(offsetTopRight) > blockRight.offsetHeight * 0.5) {
      if (Math.floor(Math.abs(offsetRight)) === 100)
        blockRight.classList.add('block-out-right')
    } else {
      if (
        Math.floor(Math.abs(offsetRight)) >
        Math.abs(blockRight.offsetWidth * 0.849)
      )
        blockRight.classList.remove('block-out-right')
    }
  }

  window.onscroll = function () {
    CheckCurrentBlock()
    CheckMoveSlides()
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

  return (
    <div className="body">
      <AnimatedCursor
        color="255, 255, 255"
        innerSize={15}
        outerSize={45}
        innerScale={1}
        outerScale={1.7}
        outerAlpha={1}
        outerStyle={{
          mixBlendMode: 'exclusion',
        }}
        clickables={[
          'a',
          'select',
          'button',
          'input[type="submit"]',
          '.header_button',
          '.form-header_close',
          '.payform-tinkoff_input',
          '.participants_counter-button',
          '.participants_counter-amount',
          '.pushkin-card',
          '.bank-card',
        ]}
      />

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
                      bgColor="#67A3E8"
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
                    cовершенно новый подход к образованию. Уникальная
                    возможность погрузиться в виртуальный мир, полный новых
                    знаний и удивительных открытий.
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
                    Очки виртуальной реальности помогают закрепить пройденный
                    материал и дают дополнительные знания. Делают сухую теорию
                    более наглядной, понятной и интересной, тем самым увлекают
                    учеников в процесс обучения.
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
        <div className="reviews">
          <div className="review_header">
            <h2>НАШИ ОТЗЫВЫ</h2>
          </div>
          <div className="review_content">
            <div className="review_content-center">
              <div className="review_content_review-container container-1">
                <div className="review_content_review-container_header">
                  <img src={require('../../icons/quotes.svg')}></img>
                  <h2>Вязанкина Алевтина Витальевна</h2>
                </div>
                <div className="review_content_review-container_body">
                  <p>
                    Сегодня вечером погрузились в виртуальную реальность.
                    Простоты космоса, невероятные виды, звезды и планеты.
                    Наблюдали спутники планет, побывали среди колец
                    Сатурна.Безумные взлёты и падения, невероятное путешествие
                    по космосу. А после, вернулись на миллионы лет назад и
                    подсмотрели жизнь доисторических динозавров. Всё это
                    подарила ребятам команда ВИАРКИДС. Благодарим за прекрасно
                    проведённое время.
                  </p>
                </div>
                <div className="review_content_review-container_bottom">
                  <h3>
                    ГКУ КО «ЦЕНТР ПОМОЩИ ДЕТЯМ, <br />
                    ОСТАВШИМСЯ БЕЗ ПОПЕЧЕНИЯ РОДИТЕЛЕЙ»
                  </h3>
                </div>
              </div>

              <div className="review_content_review-container container-2">
                <div className="review_content_review-container_header">
                  <img src={require('../../icons/quotes.svg')}></img>
                  <h2>Усикова Нина Алексеевна</h2>
                </div>
                <div className="review_content_review-container_body">
                  <p>
                    воспитанники центра побывали в незабываемом познавательном
                    путешествии, благодаря команде VRKIDS. Дети в увлекательной
                    форме с очками виртуальной реальности окунулись в эпоху
                    динозавров, узнали о них много нового и интересного,
                    смотрели фильм о космосе, пополнили свои знания о Солнечной
                    системе, наблюдали за спутниками разных планет И побывали
                    среди колец Сатурна. Делясь впечатлениями, они отметили, что
                    реально ощущали полёт в космическом пространстве. Мы
                    благодарим Никиту и Дениса за яркие эмоции, новые
                    впечатления и ждём в гости!
                  </p>
                </div>
                <div className="review_content_review-container_bottom">
                  <h3>ГКУ КО «ВОЛЖСКИЙ ЦЕНТР ПОМОЩИ ДЕТЯМ»</h3>
                </div>
              </div>

              <div className="review_content_review-container container-3">
                <div className="review_content_review-container_header">
                  <img src={require('../../icons/quotes.svg')}></img>
                  <h2>Вязанкина Алевтина Витальевна</h2>
                </div>
                <div className="review_content_review-container_body">
                  <p>
                    Сегодня вечером погрузились в виртуальную реальность.
                    Простоты космоса, невероятные виды, звезды и планеты.
                    Наблюдали спутники планет, побывали среди колец
                    Сатурна.Безумные взлёты и падения, невероятное путешествие
                    по космосу. А после, вернулись на миллионы лет назад и
                    подсмотрели жизнь доисторических динозавров. Всё это
                    подарила ребятам команда ВИАРКИДС. Благодарим за прекрасно
                    проведённое время.
                  </p>
                </div>
                <div className="review_content_review-container_bottom">
                  <h3>
                    ГКУ КО «ЦЕНТР ПОМОЩИ ДЕТЯМ, <br />
                    ОСТАВШИМСЯ БЕЗ ПОПЕЧЕНИЯ РОДИТЕЛЕЙ»
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="payment">
          <div className="example-video-wrapper">
            <div className="example-video-container_shadow">
              <p>
                МНОЖЕСТВО ОБРАЗОВАТЕЛЬНЫХ
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
                <h3>
                  Тут вы можете оплатить
                  <br />
                  уже запланированный
                  <br />
                  сеанс!
                </h3>
                <p>Выберите подходящий способ оплаты</p>
                <div className="payment-methods_content_half_conditions">
                  {/* <p
                    onClick={handleOpenConditions}
                    className="payment-methods_content_half_conditions_underlined"
                  >
                    Условия
                  </p>
                  <p className="payment-methods_content_half_conditions_last-text">
                    предоставления услуг
                  </p> */}
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
