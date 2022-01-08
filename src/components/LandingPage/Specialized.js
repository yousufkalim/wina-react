import React from "react";

const Specialized = (props) => {
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
                <img className="spec_icon" src={props.srcImg} alt="" />
                <p className="iconP">CV</p>
              </div>
              <div className="cv_clm">
                <img className="spec_icon" src={props.srcImg2} alt="" />
                <p className="iconP">Coaching</p>
              </div>
              {props.srcImg4 && (
                <div className="cv_clm">
                  <img className="spec_icon" src={props.srcImg4} alt="" />
                  <p className="iconP">{props.p}</p>
                </div>
              )}
              <div className="cv_clm">
                <img className="spec_icon" src={props.srcImg3} alt="" />
                <p className="iconP">Matching</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Specialized;
