import React from "react"
import "../main.css"
import { NavLink } from "react-router-dom/cjs/react-router-dom.min"
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
          <div className="navbar__login rp">
            <NavLink to="/login">Войти</NavLink>
          </div>
          <div className="navbar__registration rp">
            <NavLink to="/registration">Регистрация</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar
