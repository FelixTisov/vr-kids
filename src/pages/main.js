import React, { useState, useRef } from 'react'
import { Helmet } from 'react-helmet'
import ContactButton from '../components/contact-button/contact-button'
import './main.scss'

function Main() {
  const [price, setPrice] = useState('')
  const [order, setOrder] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const form = useRef()

  const w = window

  const handleSubmit = (e) => {
    e.preventDefault()
    w.pay(form.current)
  }

  return (
    <div className="body">
      <div className="wrapper">
        <div className="start">
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
                    />
                    <ContactButton
                      bgColor="#4d9bf5"
                      text="ТЕЛЕГРАМ"
                      iconUrl="icon_tg.svg"
                      alt="tg-icon"
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
      </div>

      {/* <div className="form-wrapper">
        <Helmet>
          <script
            src="https://securepay.tinkoff.ru/html/payForm/js/tinkoff_v2.js"
            type="text/javascript"
          />
        </Helmet>
        <form name="payform-tinkoff" onSubmit={handleSubmit} ref={form}>
          <input
            className="payform-tinkoff-row"
            type="hidden"
            name="terminalkey"
            value="1692359317567DEMO"
          />
          <input
            className="payform-tinkoff-row"
            type="hidden"
            name="frame"
            value="false"
          />
          <input
            className="payform-tinkoff-row"
            type="hidden"
            name="language"
            value="ru"
          />
          <input
            className="payform-tinkoff-row"
            placeholder="Сумма заказа"
            name="amount"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
          <input
            className="payform-tinkoff-row"
            placeholder="Номер заказа"
            name="order"
            value={order}
            onChange={(e) => setOrder(e.target.value)}
          />
          <input
            className="payform-tinkoff-row"
            type="text"
            placeholder="Имя"
            name="name"
            maxLength={15}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="payform-tinkoff-row"
            placeholder="E-mail"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="payform-tinkoff-row"
            type="text"
            mask="+7(\999) 999-99-99"
            placeholder="+7 (999) 999-99-99"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            className="payform-tinkoff-row"
            type="submit"
            value="Оплатить"
          />
        </form>
      </div> */}
    </div>
  )
}

export default Main
