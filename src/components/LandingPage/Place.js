import React from "react";

const Place = (props) => {
  return (
    <>
      <div className="boost2">
        <div className="boost_container">
          <div className="boost_div">
            <div className="boost_col1">
              <img className="boostGImg" src={props.srcImg} alt="" />
            </div>
            <div className="plase_col2">
              <h3 className="boostH3">Place à l’échange</h3>
              <p className="boostP">
                Une fois le matching envoyé, il te suffit d’attendre la réponse
                de l’entreprise. Après validation de ton profil, l’entreprise
                revient vers toi pour mettre en place le processus de
                recrutement. <br /> Qui dit échange, dit entretien ! <br /> Pas
                de panique, Winaa te propose un coaching personnalisé juste
                avant ton entretien.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Place;
