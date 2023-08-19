import './main.css';

function Main() {
  return (
    <div className="body">
      <div className="button-wrapper">
        <style>
          .payform-tinkoff-row{'display:block;margin:1%;width:160px;'}
        </style>
        <script src="https://securepay.tinkoff.ru/html/payForm/js/tinkoff_v2.js"></script>
        <form name="payform-tinkoff" onsubmit="pay(this); return false;">
          <input
            class="payform-tinkoff-row"
            type="hidden"
            name="terminalkey"
            value="TinkoffBankTest"
          />
          <input
            class="payform-tinkoff-row"
            type="hidden"
            name="frame"
            value="true"
          />
          <input
            class="payform-tinkoff-row"
            type="hidden"
            name="language"
            value="ru"
          />
          <input
            class="payform-tinkoff-row"
            type="text"
            placeholder="Сумма заказа"
            name="amount"
            required
          />
          <input
            class="payform-tinkoff-row"
            type="text"
            placeholder="Номер заказа"
            name="order"
          />
          <input
            class="payform-tinkoff-row"
            type="text"
            placeholder="Описание заказа"
            name="description"
          />
          <input
            class="payform-tinkoff-row"
            type="text"
            placeholder="ФИО плательщика"
            name="name"
          />
          <input
            class="payform-tinkoff-row"
            type="text"
            placeholder="E-mail"
            name="email"
          />
          <input
            class="payform-tinkoff-row"
            type="text"
            placeholder="Контактный телефон"
            name="phone"
          />
          <input
            class="payform-tinkoff-row"
            type="submit"
            value="Оплатить"
          ></input>
        </form>
      </div>
    </div>
  );
}

export default Main;
