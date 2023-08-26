import React from 'react'
import './contact-button.scss'

function ContactButton({ bgColor, iconUrl, text, alt }) {
  return (
    <div className="contact-button" style={{ backgroundColor: bgColor }}>
      <div className="contact-button_wrapper">
        <div className="contact-button_wrapper_icon-container">
          <img src={require(`../../icons/${iconUrl}`)} alt={alt}></img>
        </div>
        <div className="contact-button_wrapper_text-container-wrapper">
          <p>{text}</p>
        </div>
      </div>
    </div>
  )
}

export default ContactButton
