import React from "react";
import "../../components/Cfa/Style.css";

const Together = () => {
  return (
    <>
      <div className="togather">
        <div className="togather-container">
          <div className="togetherHeading">
            <h1 className="togetherH1">Ensemble, boostons l’apprentissage </h1>
            <p className="togetherP">
              Notre équipe spécialisée accompagne les CFA sur différents axes :
            </p>
          </div>
          <div className="together-secondDiv">
            <div className="togetherCol1">
              <div className="checkIcon">
                {/* <i class="faIcon far fa-check-circle"></i> */}
              </div>
              <div className="checkIcon">
                {/* <i class="faIcon far fa-check-circle"></i> */}
              </div>
              <div className="checkIcon">
                {/* <i class="faIcon2 far fa-check-circle"></i> */}
              </div>
            </div>
            {/* col 1*/}
            <div className="togetherCol2">
              <div className="togetherPera">
                <i class="faIcon far fa-check-circle"></i>
                <p className="chackP">
                  Favoriser une meilleure communication de la part des CFA sur
                  leurs formations.
                </p>
              </div>
              <div className="togetherPera">
                <i class="faIcon far fa-check-circle"></i>
                <p className="chackP">
                  Proposer un accompagnement personnalisé aux apprentis et aux
                  entreprises pour renforcer l’attractivité de l’apprentissage
                  comme la voie royale vers le marché de l’emploi.
                </p>
              </div>
              <div className="togetherPera">
                <i class="faIcon2 far fa-check-circle"></i>
                <p className="chackP">
                  Soutenir les CFA dans les différentes campagnes de rentrée
                  scolaire pour atteindre l’objectif de 100% de placement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Together;
