import React from "react";
import "./Navbar.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg container-fluid">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Food Junction
        </Link>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="login">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="register">
                Register
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
