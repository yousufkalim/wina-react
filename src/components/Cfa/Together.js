import React from "react";
import "../../components/Cfa/Style.css";
import CfaBoostImg from "../../assets/CfaBoostImg.jpg";
import Check from "../../assets/Check.svg";

const Together = () => {
  return (
    <>
      <div className="togather">
        <div className="togather-container">
          <div className="Accompagnement_content">
            <p className="Accompagnement_avac">Notre equipe specialisee accompagne les CFA sur differents axes</p>
            <h2 className="Accompagnement_h2" style={{ textAlign: "center" }}>
              Ensemble boostons l’apprentissage
            </h2>
          </div>
          <div className="together-secondDiv">
            {/* col 1*/}
            <div className="togetherCol2">
              <div className="togetherPera">
                {/* <i class="faIcon far fa-check-circle"></i> */}
                <img src={Check} alt="" className="chack_icons" />
                <p className="chackP">Favoriser une meilleure communication de la part des CFA sur leurs formations.</p>
              </div>
              <div className="togetherPera">
                {/* <i class="faIcon far fa-check-circle"></i> */}
                <img src={Check} alt="" className="chack_icons" />
                <p className="chackP">
                  Proposer un accompagnement personnalisé aux apprentis et aux entreprises pour renforcer l’attractivité de
                  l’apprentissage comme la voie royale vers le marché de l’emploi.
                </p>
              </div>
              <div className="togetherPera">
                {/* <i class="faIcon2 far fa-check-circle"></i> */}
                <img src={Check} alt="" className="chack_icons" />
                <p className="chackP">
                  Soutenir les CFA dans les différentes campagnes de rentrée scolaire pour atteindre l’objectif de 100% de
                  placement.
                </p>
              </div>
            </div>
            <div className="together_col_div">
              <div className="togather_image_div">
                <img src={CfaBoostImg} alt="" className="togather_bost_img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Together;
