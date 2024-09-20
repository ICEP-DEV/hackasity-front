import React from 'react'
import { NavLink, Link} from "react-router-dom";
import './Header.css'
function header() {
  return (

         <div className="header">
        <header className="navbar">
          <h1 className="header-title">TVH Hackathon</h1>
          <nav className="nav-links">
            <NavLink to="/Register" className="nav-link">Register</NavLink>
            <NavLink to="/Logout" className="nav-link">Logout</NavLink>
            <NavLink to="/Login" className="nav-link">Login</NavLink>
           
          </nav>
        </header>
      </div>
    
  )
}

export default header