import React from "react";
import Formsimg from "../../assets/Formsimg.png";
import Speechimg from "../../assets/Speechimg.png";
import Supportimg from "../../assets/Supportimg.png";

const Specialized = () => {
  return (
    <>
      <div className="specialized">
        <div className="specialized_container">
          <div className="specialized_heading">
            <h2 className="specializedH2">Accompagnement spécialisé</h2>
            <p className="specializedP">Avec l’abonnement Winaa</p>
          </div>
          <div className="cv-box">
            <div className="cv-container">
              <div className="cv_clm">
                <img className="spec_icon" src={Formsimg} alt="" />
                <p className="iconP">CV</p>
              </div>
              <div className="cv_clm">
                <img className="spec_icon" src={Speechimg} alt="" />
                <p className="iconP">CV</p>
              </div>
              <div className="cv_clm">
                <img className="spec_icon" src={Supportimg} alt="" />
                <p className="iconP">CV</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Specialized;
