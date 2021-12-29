import React from "react";
import "../../components/LandingPage/Style.css";

const Hero = (props) => {
  return (
    <div>
      <div className="hero_section">
        <div className="hero_container">
          <div className="hero_img">
            <img className="heroImg" src={props.srcImg} alt="" />
          </div>
          <div className="hero_heading">
            <img className="heroimgico" src={props.srcImg3} alt="" />
            <h2 className="heroH2">{props.h2text}</h2>
            <button className="heroBtn">{props.btn}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
