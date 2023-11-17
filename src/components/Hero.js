import React from "react";
import {
  heroContainer,
  heroHeading,
  heroFuture,
  imagesHero1,
  imagesHero2,
  imagesHeroMain,
  divHero,
  heroServices,
} from "./Hero.module.css";
import image1 from "../images/Phone1.png";
import image2 from "../images/phone2.png";
import image3 from "../images/phone3.png";
import vectorLine from "../images/vertorLine.svg";

const Hero = () => {
  return (
    <div className={heroContainer}>
      <div className={heroHeading}>
        <h1>It's Time to trade</h1>
        <h1>
          the <span className={heroFuture}>future.</span>
        </h1>
        <p>Trade BTC, ETH Futures with 125x leverage and earn rewards.</p>
      </div>
      <div className={divHero}>
        <img src={image1} className={imagesHero1} alt="Image 1" />
        <img src={image3} className={imagesHeroMain} alt="Image 3" />
        <img src={image2} className={imagesHero2} alt="Image 2" />
      </div>
      <div className={heroServices}>
        <div>
          <h2>00%</h2>
          <p>Conversion Fee</p>
        </div>
        <img src={vectorLine} alt="Line" />
        <div>
          <h2>500 Mn+</h2>
          <p>LifeTime Volume Traded</p>
        </div>
        <img src={vectorLine} alt="Line" />
        <div>
          <h2>250+</h2>
          <p>Total Tradable Pairs</p>
        </div>
        <img src={vectorLine} alt="Line" />
        <div>
          <h2>15,000+</h2>
          <p>Traders</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
