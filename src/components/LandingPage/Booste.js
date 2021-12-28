import React from "react";
import "../../components/LandingPage/Style.css";

const Booste = (props) => {
  return (
    <>
      <div className="boost">
        <div className="boost_container">
          <h1 className="boostH1">{props.text}</h1>
          <div className="boost_div">
            <div className="boost_col1">
              <img className="boostGImg" src={props.srcImg} alt="" />
            </div>
            <div className="boost_col2">
              <h3 className="boostH3">{props.text2}</h3>
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
