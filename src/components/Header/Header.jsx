import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <header>
      <div className="header-contents">
        <h2>Good Food Us <p><h2>Good Mood</h2></p> </h2>
        <p>
          I would think that conserving our natural Resources
          Should be conservative position: Not to waste food, and 
          not to throw away a lot of the food that we
        </p>
        <a href="#explore-menu">
          <button >Daftar Sekarang</button>
          <button  style={{backgroundColor: "#FFFFFF"}}>About Us</button>
        </a>

      </div>
    </header>
  );
};

export default Header;
