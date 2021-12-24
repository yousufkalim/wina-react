import React from "react";
import Heroimg from "../../assets/Heroimg.png";
import Videoicon from "../../assets/Videoicon.png";
import "../../components/LandingPage/Style.css";

const Hero = () => {
  return (
    <div>
      <div className="hero_section">
        <div className="hero_container">
          <div className="hero_img">
            <img className="heroImg" src={Heroimg} alt="" />
          </div>
          <div className="hero_heading">
            <img className="heroimgicon" src={Videoicon} alt="" />
            <h2 className="heroH2">Matching.Enhange.Recrutement</h2>
            <button className="heroBtn">Créer mon profil étudiant</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
