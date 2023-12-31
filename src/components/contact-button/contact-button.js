import React from 'react'
import './contact-button.scss'
import './contact-button_mobile.scss'

function ContactButton({ bgColor, iconUrl, text, alt, link }) {
  return (
    <div className="contact-button" style={{ backgroundColor: bgColor }}>
      <a href={link} target="_blank">
        <div className="contact-button_wrapper">
          <div className="contact-button_wrapper_icon-container">
            <img src={require(`../../icons/${iconUrl}`)} alt={alt}></img>
          </div>
          <div className="contact-button_wrapper_text-container-wrapper">
            <p>{text}</p>
          </div>
        </div>
      </a>
    </div>
  )
}

export default ContactButton
