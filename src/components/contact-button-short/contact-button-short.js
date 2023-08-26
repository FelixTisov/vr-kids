import React from 'react'
import './contact-button-short.scss'

function ContactButtonShort({ bgColor, iconUrl, alt }) {
  return (
    <div className="contact-button-short" style={{ backgroundColor: bgColor }}>
      <div className="contact-button-short_icon-container">
        <img
          className="contact-button-short_icon-container_icon"
          src={require(`../../icons/${iconUrl}`)}
          alt={alt}
        ></img>
      </div>
    </div>
  )
}

export default ContactButtonShort
