import React from "react";

import "../../components/LandingPage/Style.css";
const Perfect = (props) => {
  return (
    <>
      <div className="boost1">
        <div className="boost_container">
          <div className="boost_div">
            <div className="perfect_col2">
              <div className="heading-div">
                <h3 className="boostH3">Le Matching parfait</h3>
              </div>
              <p className="boostP">
                Nous mettons à ta disposition une application fun et intuitive
                te permettant de matcher avec l’entreprise de ton choix. Rien de
                plus facile : il suffit de créer un CV personnalisé et notre
                algorithme se chargera du reste en sélectionnant les entreprises
                susceptibles de t’intéresser. Swipe et match !
              </p>
            </div>
            <div className="boost_col1">
              <img className="boostGImg" src={props.srcImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Perfect;
