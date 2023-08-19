import React from 'react'
import './main.css'

function Main() {
  return (
    <div className="body">
      <div className="form-wrapper">
        <script src="https://securepay.tinkoff.ru/html/payForm/js/tinkoff_v2.js"></script>
        <form name="payform-tinkoff" onsubmit="pay(this); return false;">
          <input
            className="payform-tinkoff-row"
            type="hidden"
            name="1692359317567DEMO"
            value="rzn29q4h01tm0bkp"
          />
          <input
            className="payform-tinkoff-row"
            type="hidden"
            name="frame"
            value="true"
          />
          <input
            className="payform-tinkoff-row"
            type="hidden"
            name="language"
            value="ru"
          />
          <input
            className="payform-tinkoff-row"
            type="text"
            placeholder="Сумма заказа"
            name="amount"
            required
          />
          <input
            className="payform-tinkoff-row"
            type="text"
            placeholder="Номер заказа"
            name="order"
          />
          <input
            className="payform-tinkoff-row"
            type="text"
            placeholder="Описание заказа"
            name="description"
          />
          <input
            className="payform-tinkoff-row"
            type="text"
            placeholder="ФИО плательщика"
            name="name"
          />
          <input
            className="payform-tinkoff-row"
            type="text"
            placeholder="E-mail"
            name="email"
          />
          <input
            className="payform-tinkoff-row"
            type="text"
            placeholder="Контактный телефон"
            name="phone"
          />
          <input
            className="payform-tinkoff-row"
            type="submit"
            value="Оплатить"
          ></input>
        </form>
      </div>
    </div>
  )
}

export default Main
