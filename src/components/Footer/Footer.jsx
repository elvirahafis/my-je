import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {

  return (
    <footer id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="logo" />
          <p>
          Jl. Vila Dago Tol, Serua, Kec. Ciputat, Kota Tangerang Selatan, Banten
          </p>
          <div className="footer-social-icons">
            <a href="https://www.facebook.com">
              <img src={assets.facebook_icon} alt="facebook" />
            </a>
            <a href="https://www.twitter.com">
              <img src={assets.twitter_icon} alt="twitter" />
            </a>
            <a href="https://www.linkedin.com">
              <img src={assets.linkedin_icon} alt="linkedin" />
            </a>
          </div>
        </div>
        <div className="footer-content-top">
          <h2>Categories</h2>
          <ul>
            <li>Cupcake</li>
            <li>Pizza</li>
            <li>Kebab</li>
            <li>Salmon</li>
            <li>Doghnuts</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>About Us</h2>
          <ul>
            <li>About Us</li>
            <li>FAQ</li>
            <li>Report Problem</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">@ 2021 ELEMES ID, ALL RIGHTS RESERVED</p>
    </footer>
  );
};

export default Footer;
