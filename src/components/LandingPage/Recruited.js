import React from "react";

import "../../components/LandingPage/Style.css";

const Recruited = (props) => {
  return (
    <>
      <div className="boost1">
        <div className="boost_container">
          <div className="boost_div">
            <div className="perfect_col2">
              <h3 className="boostH3">Recruté(e) !</h3>
              <p className="boostP">
                Félicitations ! Tu as réussi à ton entretien. Il ne reste plus
                qu’à signer ton contrat d’apprentissage .
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

export default Recruited;
