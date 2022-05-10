import React from "react";
import "./Navbar.css";
import SearchBar from "../SearchBar/Search";
import img from "../../assets/images/Earth.png";

import Hamburger from "../Hamburger/Hamburger";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__container">
        <Hamburger />
        <div className="navbar__logo">
          <img className="navbar__logo--image" src={img} alt="logo" />
        </div>
        <div className="navbar__search">
          <SearchBar />
        </div>
        <div className="navbar__cart">
          <i className="fa fa-shopping-cart"></i>
          <input
            name="shopping-cart"
            type="text"
            className="navbar__cart--count"
            value="0"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
