import React from "react"
import "../main.css"
import { NavLink } from "react-router-dom/cjs/react-router-dom.min"
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../reducers/userReducer'
//import Logo from "../../assets/navbar-logo.svg"

const Navbar = () => {
  const isAuth = useSelector((s) => s.user.isAuth);
  const dispatch = useDispatch()

  return (
    <div className="container">
      <div className="navbar">
        <div className="navbar left">
          <i className="fab fa-soundcloud logo lp" />
          <div className="navbar__header lp">MERN cloud</div>
        </div>
        <div className="navbar right">
          {!isAuth && (
            <div className="navbar__login rp">
              <NavLink to="/login">Войти</NavLink>
            </div>
          )}
          {!isAuth && (
            <div className="navbar__registration rp">
              <NavLink to="/registration">Регистрация</NavLink>
            </div>
          )}
          {isAuth && (
            <div className="navbar__login rp" onClick={() => dispatch(logout())}>Выход</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar
