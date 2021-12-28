import React from "react";

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
                <i className="spec_icon" class="far fa-file-alt"></i>
                <p className="iconP">CV</p>
              </div>
              <div className="cv_clm">
                <i className="spec_icon" class="far fa-comments"></i>
                <p className="iconP">CV</p>
              </div>
              <div className="cv_clm">
                <i className="spec_icon" class="far fa-handshake"></i>
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
