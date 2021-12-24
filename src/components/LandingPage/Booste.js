import React from "react";
import "../../components/LandingPage/Style.css";
import Boostimg from "../../assets/Boostimg.png";

const Booste = () => {
  return (
    <>
      <div className="boost">
        <div className="boost_container">
          <h1 className="boostH1">Booste ton alternance avec Winaa</h1>
          <div className="boost_div">
            <div className="boost_col1">
              <img className="boostGImg" src={Boostimg} alt="" />
            </div>
            <div className="boost_col2">
              <h3 className="boostH3">
                Une entreprise en fonction de ton profil
              </h3>
              <p className="boostP">
                Trouver l’entreprise idéale n’a jamais été une mince affaire.
                Mais aujourd’hui, nous avons trouvé la solution qui te
                correspond.
                <br />
                Pour t’aider dans tes recherches, Winaa te sélectionne les
                entreprises en fonction de ton profil.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Booste;
