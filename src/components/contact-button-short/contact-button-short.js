import React from 'react'
import './contact-button-short.scss'
import './contact-button-short_mobile.scss'

function ContactButtonShort({ bgColor, iconUrl, alt, link }) {
  return (
    <div className="contact-button-short" style={{ backgroundColor: bgColor }}>
      <a href={link} target="_blank">
        <div className="contact-button-short_icon-container">
          <img
            className="contact-button-short_icon-container_icon"
            src={require(`../../icons/${iconUrl}`)}
            alt={alt}
          ></img>
        </div>
      </a>
    </div>
  )
}

export default ContactButtonShort
