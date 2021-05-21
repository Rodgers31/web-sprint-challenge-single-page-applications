import React from "react";
import { Link, Route } from "react-router-dom";
import Form from "./Form";
import Home from "./Home";
import "./App.css";



function Header() {
  return (
    <div className="nav-links">
      <div className="navBar">
      <div className="linkA">
      </div>
      <div className="linkB">
     </div> 
     </div>
     
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/Form">
        <Form />
      </Route>

    
   </div>

  );
}
export default Header; 