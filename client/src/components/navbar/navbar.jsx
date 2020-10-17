import React from "react"
import "../main.css"
//import Logo from "../../assets/navbar-logo.svg"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__header">
        <i className="fab fa-soundcloud logo" />
        MERN cloud
      </div>
      <div className="navbar__login">Войти</div>
      <div className="navbar__registration">Регистрация</div>
    </div>
  );
}

export default Navbar
