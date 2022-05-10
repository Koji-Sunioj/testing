import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Hamburger.css";

const Hamburger = () => {
  const [click, setClick] = useState(false);

  const handleclick = () => setClick(!click);

  const closeMenu = () => setClick(false);

  return (
    <>
      <div className="hamburger__content">
        <button className="hamburger__icon" onClick={handleclick}>
          <i className={click ? "fa fa-close" : "fa fa-bars"}></i>
        </button>
        <ul className={click ? "hamburger__menu active" : "hamburger__menu"}>
          <li className="hamburger__item">
            <Link to="/" className="hamburger__links" onClick={closeMenu}>
              Red theme
            </Link>
          </li>
          <li className="hamburger__item">
            <Link to="/blue" className="hamburger__links" onClick={closeMenu}>
              Blue theme
            </Link>
          </li>
          <li className="hamburger__item">
            <Link to="/violet" className="hamburger__links" onClick={closeMenu}>
              Violet theme
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Hamburger;
