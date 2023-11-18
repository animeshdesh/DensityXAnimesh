import React from "react";
import {
  serviceDiv,
  serviceImg,
  servicePrice,
  serviceSpan,
  serviceH1,
  servicePriceheading,
  servicesContainer,
  singlefeature,
  servicesImage,
  servicesContainer2,
  graphImg,
} from "./Services.module.css";
import { navButton } from "./Navbar.module.css";
import Service1 from "../images/Service1.png";
import Service2 from "../images/Service2.png";
import Service3 from "../images/Service3.png";
import coinDCX from "../images/CoinDCX.png";
import bitcoin from "../images/image01.png";
import vectorLine2 from "../images/vectorLine2.svg";
import Graph from "../images/Graph.png";

const Services = () => {
  return (
    <>
      <div className={serviceDiv}>
        <img src={Service1} className={serviceImg} alt="Service1" />
        <img src={Service2} className={serviceImg} alt="Service2" />
        <img src={Service3} className={serviceImg} alt="Service3" />
      </div>
      <div className={servicePrice}>
        <h1 className={serviceH1}>
          Trade More. <span className={serviceSpan}>Pay Less.</span>
        </h1>
        <p>Our low Fees Supercharge Your Profits</p>
        <div />
        <div className={servicesContainer}>
          <div className={singlefeature}>
            <img src={coinDCX} alt="CoinDCX" />
            <div>
              <h2>0.025</h2>
              <p>Maker Fees</p>
            </div>
            <div>
              <h2>0.07</h2>
              <p>Taker Fees</p>
            </div>
          </div>
          <div className={singlefeature}>
            <img src={coinDCX} alt="CoinDCX" />
            <div>
              <h2>0.025</h2>
              <p>Maker Fees</p>
            </div>
            <div>
              <h2>0.07</h2>
              <p>Taker Fees</p>
            </div>
          </div>
          <div className={singlefeature}>
            <img src={coinDCX} alt="CoinDCX" />
            <div>
              <h2>0.025</h2>
              <p>Maker Fees</p>
            </div>
            <div>
              <h2>0.07</h2>
              <p>Taker Fees</p>
            </div>
          </div>
        </div>
        <div className={servicePrice}>
          <h1 className={serviceH1}>
            Explore the Markets like it is your
            <span className={serviceSpan}> Playground.</span>
          </h1>
          <p>Search for your favorite coins and stay ahead of the market</p>
        </div>
        <div className={servicesImage}>
          <img src={bitcoin} alt="Images01" />
          <button className={navButton}>Explore Markets</button>
        </div>
        <div className={servicePrice}>
          <h1 className={serviceH1}>
            <span className={serviceSpan}> Unlock </span>
            New Frontiers.
          </h1>
          <p>
            Are you a stock trader looking for new opportunities to make money?
            We got you covered!
          </p>
        </div>
        <div className={servicesContainer2}>
          <h2>Same Strategies</h2>
          <img src={vectorLine2} alt="vector" />
          <h2>Same Indicators</h2>
          <img src={vectorLine2} alt="vector" />
          <h2>Better Leverage</h2>
          <img src={vectorLine2} alt="vector" />
          <h2>24x7 Trading</h2>
        </div>
        <div className={graphImg}>
          <img src={Graph} alt="Graph" />
        </div>
      </div>
    </>
  );
};

export default Services;
