import React, { useState } from "react";

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
            <button className="hamburger__links" onClick={closeMenu}>
              Red theme
            </button>
          </li>
          <li className="hamburger__item">
            <button className="hamburger__links" onClick={closeMenu}>
              Blue theme
            </button>
          </li>
          <li className="hamburger__item">
            <button className="hamburger__links" onClick={closeMenu}>
              Violet theme
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Hamburger;
