import React from "react"
import "../main.css"
//import Logo from "../../assets/navbar-logo.svg"

const Navbar = () => {
  return (
    <div className="container">
      <div className="navbar">
        <div className="navbar left">
          <i className="fab fa-soundcloud logo lp" />
          <div className="navbar__header lp">MERN cloud</div>
        </div>
        <div className="navbar right">
          <div className="navbar__login rp">Войти</div>
          <div className="navbar__registration rp">Регистрация</div>
        </div>
      </div>
    </div>
  );
}

export default Navbar
