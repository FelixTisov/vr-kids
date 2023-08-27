import React, { useState, useRef } from 'react'
import { Helmet } from 'react-helmet'
import './pay-form.scss'

function PayForm() {
  const [price, setPrice] = useState(0)
  const [order, setOrder] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [number, setNumber] = useState(0)
  const form = useRef()

  const w = window

  const handleSubmit = (e) => {
    e.preventDefault()
    w.pay(form.current)
  }

  const handleClose = () => {
    const form = document.querySelector('.payment-form-wrapper')
    form.style.display = 'none'
  }

  return (
    <div className="form">
      <div className="form-container">
        <div className="form-wrapper">
          <Helmet>
            <script
              src="https://securepay.tinkoff.ru/html/payForm/js/tinkoff_v2.js"
              type="text/javascript"
            />
          </Helmet>
          <div className="form-header">
            <div className="form-header_side-block"></div>
            <div className="form-header_title">
              <h2>ЗАКАЗ</h2>
            </div>
            <div className="form-header_side-block">
              <img
                className="form-header_close"
                src={require('../../icons/icon_close.svg')}
                onClick={handleClose}
              ></img>
            </div>
          </div>

          <div className="payform-tinkoff-container">
            <form name="payform-tinkoff" onSubmit={handleSubmit} ref={form}>
              <div className="payform-tinkoff_form">
                <div className="payform-tinkoff_form_top">
                  <input
                    className="payform-tinkoff_input"
                    type="hidden"
                    name="terminalkey"
                    value="1692359317567DEMO"
                  />
                  <input
                    className="payform-tinkoff_input"
                    type="hidden"
                    name="frame"
                    value="false"
                  />
                  <input
                    className="payform-tinkoff_input"
                    type="hidden"
                    name="language"
                    value="ru"
                  />
                  <input
                    className="payform-tinkoff_input"
                    type="hidden"
                    name="order"
                    value=""
                  />
                  <input
                    className="payform-tinkoff_input"
                    type="text"
                    placeholder="ФИО"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                  <input
                    className="payform-tinkoff_input"
                    type="text"
                    mask="+7(\999) 999-99-99"
                    placeholder="+7 (999) 999-99-99"
                    name="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                  <input
                    className="payform-tinkoff_input"
                    placeholder="E-mail"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <input
                    class="payform-tinkoff_input"
                    type="text"
                    placeholder="Дополнительная информация"
                    name="description"
                  ></input>
                  <div className="participants">
                    <div className="participants_title">
                      <p>КОЛИЧЕСТВО УЧАСТНИКОВ</p>
                    </div>
                    <div className="participants_counter-container">
                      <div
                        className="participants_counter-button"
                        onClick={() => {
                          let newNumber = number - 1
                          if (newNumber > 0) {
                            setNumber(newNumber)
                            setPrice(newNumber * 400)
                          } else {
                            setNumber(number)
                            setPrice(price)
                          }
                        }}
                      >
                        -
                      </div>
                      <input
                        className="participants_counter-amount"
                        value={number}
                        onChange={(e) => {
                          let newNumber = e.target.value
                          if (newNumber >= 0) {
                            setNumber(newNumber)
                            setPrice(newNumber * 400)
                          } else {
                            setNumber(1)
                            setPrice(400)
                          }
                        }}
                      ></input>
                      <div
                        className="participants_counter-button"
                        onClick={() => {
                          let newNumber = number + 1
                          setNumber(newNumber)
                          setPrice(newNumber * 400)
                        }}
                      >
                        +
                      </div>
                    </div>
                  </div>
                </div>

                <div className="payform-tinkoff_form_bottom">
                  <div className="payform-tinkoff_form_bottom_title">
                    <p>К ОПЛАТЕ</p>
                  </div>
                  <div className="payform-tinkoff_form_bottom_summ">
                    <input
                      className=""
                      placeholder="0"
                      name="amount"
                      type="number"
                      value={price}
                      required
                    />
                    <p>РУБ.</p>
                  </div>
                </div>
              </div>
              <div className="form-footer">
                <input
                  className="payform-tinkoff_form_submit-button"
                  type="submit"
                  value="ДАЛЕЕ"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PayForm
