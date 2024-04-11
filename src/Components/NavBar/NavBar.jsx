// NavBar.js

import React, { useContext, useState } from "react";
import "./NavBar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";

const NavBar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const {getTotalCartAmount} = useContext(StoreContext);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <div className="navbar">
        <Link to="/">
          <img src={assets.logo} className="logo" />
        </Link>
        <ul className={`navbar-menu ${menuOpen ? "active" : ""}`}>
          <Link
            to="/"
            onClick={() => {
              setMenu("home");
              toggleMenu();
            }}
            className={menu === "home" ? "active" : ""}
          >
            home
          </Link>
          <a
            href="#explore-menu"
            onClick={() => {
              setMenu("menu");
              toggleMenu();
            }}
            className={menu === "menu" ? "active" : ""}
          >
            menu
          </a>
          <a
            href="#App-download"
            onClick={() => {
              setMenu("mobile-app");
              toggleMenu();
            }}
            className={menu === "mobile-app" ? "active" : ""}
          >
            mobile-app
          </a>
          <a
            href="#footer"
            onClick={() => {
              setMenu("contactus");
              toggleMenu();
            }}
            className={menu === "contactus" ? "active" : ""}
          >
            Contact Us
          </a>
        </ul>
        <div className="navbar-right">
          <div className="navbar-search-icon">
            <Link to="/cart">
              <img src={assets.basket_icon} />
            </Link>
            <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
          </div>
          <button onClick={() => setShowLogin(true)}>SignIn</button>
        </div>
        <div className="menu-toggle" onClick={toggleMenu}>
          <div className={`bar ${menuOpen ? "active" : ""}`}></div>
          <div className={`bar ${menuOpen ? "active" : ""}`}></div>
          <div className={`bar ${menuOpen ? "active" : ""}`}></div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
