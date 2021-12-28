import React from "react";
import Googleplay from "../../assets/Googleplay.png";
import Appstore from "../../assets/Appstore.png";
import Mobilepic from "../../assets/Mobilepic.png";

const Simplified = () => {
  return (
    <>
      <div className="Simplified">
        <div className="Simplified_container">
          {/* col-div */}
          <div className="Simplified_headings">
            <h3 className="SimplifiedH3">
              Simplifie-toi la vie, télécharge l’application Wina
            </h3>
            <p className="SimplifiedP">
              Tu peux matcher , swiper à n’importe quel moment de la journée.
              Wina sauvegarde toutes tes progressions et tes suivis journaliers.
            </p>
            {/* ///////////////////////btn ///////////////////// */}
            <div className="siple_btn">
              <div className="simle_button">
                <a className="app-btn blu flex vert" href="http:google.com">
                  <img className="googleImg" src={Googleplay} alt="" />
                </a>
              </div>
              <div className="simle_button">
                <a className="app-btn blu flex vert" href="http:google.com">
                  <img className="googleImg" src={Appstore} alt="" />
                </a>
              </div>
            </div>
            {/* ///////////////////////btn ///////////////////// */}
            <p className="SimplifiedP">
              Facilite tes recherches de contrats d’apprentissage. <br />
              Inscris-toi dès maintenant !
            </p>
            <div className="buttons2">
              <button className="SimplifiedButon">Je m’inscris</button>
              <button className="SimplifiedButon">Contacte-nous !</button>
            </div>
          </div>
          {/* col-div */}
          <div className="SimplifiedImg-container">
            <div className="boxImg-div">
              <img className="mobiIMg" src={Mobilepic} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Simplified;
