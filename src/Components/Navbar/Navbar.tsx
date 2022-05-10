import React from "react";
import "./Navbar.css";
import SearchBar from "../SearchBar/Search";
//import img from "../../assets/images/Earth.png";

//import Hamburger from "../Hamburger/Hamburger";
import { Link } from "react-router-dom";
//the hamburger menu was a little challenging for me here is a good example of one:
//https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_mobile_navbar
//you could implement this well with react, by adding an event listener for the screen size
//and store it into a local state: https://github.com/Koji-Sunioj/fs10-react/blob/main/assignment1/src/components/Header.js
//essentially display is none or block

const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <i className="fa fa-globe"></i>
        <Link to={"/"}>Home</Link>
      </div>
      <SearchBar />
      <i className="fa fa-shopping-cart"></i>
    </div>
  );
};

export default Navbar;
