import React from "react";
import {
  whiteservicecontainer,
  whiteservicecontainer1,
} from "./WhiteServices.module.css";
import Deposite from "../images/Deposite.png";
import Dedicated from "../images/Dedicated.png";

const WhiteServices = () => {
  return (
    <>
      <div className={whiteservicecontainer}>
        <h1>Start Small. Earn Big.</h1>
        <p>
          Deposity a minimum of 1000 and get a Deposit bonus + dedicagted
          relationship manager
        </p>
      </div>
      <div className={whiteservicecontainer1}>
        <img src={Deposite} alt="Deposite" />
        <img src={Dedicated} alt="Deposite" />
      </div>
    </>
  );
};

export default WhiteServices;
