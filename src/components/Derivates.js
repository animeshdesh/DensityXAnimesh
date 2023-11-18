import React from "react";
import {
  DerivatesContainer,
  DerivatesBox,
  DerivatesBox1,
} from "./Derivates.module.css";
import iphone1401 from "../images/iphone1401.png";
import profile from "../images/Profile.svg";
import iphone1402 from "../images/Iphone1402.png";
import funds from "../images/Funds.png";
import iphone1403 from "../images/Iphone1403.png";
import trade from "../images/Trader.png";
import companies from "../images/Companies.png";
import People from "../images/People.png";

const Derivates = () => {
  return (
    <div className={DerivatesContainer}>
      <h1>
        Derivates made simple in <span>3 Easy</span> Steps
      </h1>
      <div className={DerivatesBox}>
        <img src={iphone1401} alt="Iphone14" />
        <img src={profile} alt="Profile" />
      </div>
      <div className={DerivatesBox}>
        <img src={iphone1402} alt="Iphone14" />
        <img src={funds} alt="Funds" />
      </div>
      <div className={DerivatesBox}>
        <img src={iphone1403} alt="Iphone14" />
        <img src={trade} alt="Funds" />
      </div>
      <div className={DerivatesBox1}>
        <h1>Backed by the Best.</h1>
        <img src={companies} alt="Companies" />
        <img src={People} alt="People" />
      </div>
    </div>
  );
};

export default Derivates;
