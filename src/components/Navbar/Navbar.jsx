import React, { useContext, useState } from "react";
import { StoreContext } from "../../context/StoreContext";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

const Navbar = ({ setShowLogin }) => {
  const { getTotalQuantity } = useContext(StoreContext);

  const [menu, setMenu] = useState("home");

  return (
    <div className="navbar">
      <Link to="/">
        <img src={assets.logo} alt="logo" className="logo" />
      </Link>
      <ul className="navbar-menu">
        <Link
          to="/"
          className={menu === "home" ? "active" : ""}
        >
          Home
        </Link>
        <a
          href="#explore-menu"
          className={menu === "menu" ? "active" : ""}
        >
          About
        </a>
        <a
          href="#app-download"
          className={menu === "mobile-app" ? "active" : ""}
        >
          Promotions
        </a>
        <a
          href="#footer"
          className={menu === "contact-us" ? "active" : ""}
        >
          Blogs
        </a>
        <a
          href="#footer"
          className={menu === "contact-us" ? "active" : ""}
        >
          Contact Us
        </a>
      </ul>
      <div className="navbar-right">
        <a
            href="#footer"
  
            className={menu === "contact-us" ? "active" : ""}
          >
            Masuk
          </a>
        <button className="button-right">Daftar Sekarang</button>
      </div>
    </div>
  );
};

export default Navbar;
