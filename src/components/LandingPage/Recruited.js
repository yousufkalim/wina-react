import React from "react";
import Boostimg4 from "../../assets/Boostimg4.png";
import "../../components/LandingPage/Style.css";

const Recruited = () => {
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
              <img className="boostGImg" src={Boostimg4} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Recruited;
