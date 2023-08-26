import React from 'react'
import ContactButtonShort from '../contact-button-short/contact-button-short'
import './footer.scss'

function Footer() {
  return (
    <div className="footer">
      <div className="footer_contacts-container">
        <div className="footer_contacts-container_contacts">
          <div className="footer_contacts-container_contacts_half footer_contacts-container_contacts_half-left">
            <div className="footer_contacts-container_contacts_line">
              <img
                src={require('../../icons/icon_phone.svg')}
                alt="phone icon"
                className="footer-contacts-line-icon"
              ></img>
              <p>+79501931645</p>
            </div>
            <div className="footer_contacts-container_contacts_line">
              <img
                src={require('../../icons/icon_mail.svg')}
                alt="mail icon"
                className="footer-contacts-line-icon"
              ></img>
              <p>vrkids@gmail.com</p>
            </div>
          </div>
          <div className="footer_contacts-container_contacts_half">
            <div className="footer_contacts-container_contacts_buttons-container">
              <ContactButtonShort
                bgColor="#000"
                iconUrl="icon_vk_short.svg"
                alt="vk-icon"
              />
              <ContactButtonShort
                bgColor="#4d9bf5"
                iconUrl="icon_tg_short.svg"
                alt="tg-icon"
              />
            </div>
          </div>
        </div>
        <div className="footer_contacts-container_info">
          <p>ООО “ВИАРКИДС”. Все права защищены.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer