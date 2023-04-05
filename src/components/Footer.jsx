import React from 'react'
import Logo from "../img/logo.png"


const Footer = () => {
  return (
    <div className="footer">
        <img src={Logo} alt="" />
        <span>Made by <b>Maciej & Cameron</b></span>
    </div>
  )
}

export default Footer