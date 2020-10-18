import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from './navbar/navbar.jsx'
import Registration from "./registration/registration"
import "./main.css"

function App() {
  return (
    <BrowserRouter>
      <div className="body">
        <Navbar />
        <Switch>
          <Route path="/registration" component={Registration} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
