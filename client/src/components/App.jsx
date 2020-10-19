import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from './navbar/navbar.jsx'
import Registration from "./authorization/authorization"
import "./main.css"
import Login from './authorization/login.jsx';
import { useSelector } from 'react-redux';

function App() {
  const isAuth = useSelector(s => s.user.isAuth)

  return (
    <BrowserRouter>
      <div className="body">
        <Navbar />
        {isAuth && (
          <Switch>
            <Route path="/registration" component={Registration} />
            <Route path="/login" component={Login} />
          </Switch>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
