import React from "react";
import {
  container,
  mainLogoCss,
  navItems,
  navButton,
} from "./Navbar.module.css";
import mainLogo from "../images/mainLogo.svg";
const Navbar = () => {
  return (
    <div className={container}>
      <div>
        <img className={mainLogoCss} src={mainLogo} alt="Main Logo" />
      </div>
      <div className={navItems}>
        <a>Career</a>
        <a>Blogs</a>
        <a>Leaderboard</a>
        <a>Fees</a>
        <button className={navButton}>Trade Now</button>
      </div>
    </div>
  );
};

export default Navbar;
