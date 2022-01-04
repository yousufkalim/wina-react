import React from "react";
import "../../components/Student/Style.css";

const Pack = () => {
  return (
    <>
      <div className="Pack">
        <div className="pack-container">
          <div className="pack-col1">
            <div className="packbox">
              <div className="boxHeading">
                <h1 className="packH1">Pack Découverte</h1>
                <h3 className="packH3">9,99€ / mois</h3>
              </div>
              <div className="liHeading">
                <ul>
                  <li className="liPack">
                    Recrutement facilité avec des offres qui te correspondent
                  </li>
                  <li className="liPack">Candidature envoyée en Swipe</li>
                  <li className="liPack">Matching assuré</li>
                  <li className="liPack">Matching assuré</li>
                  <li className="liPack">
                    Suivi simplifié de tes candidatures
                  </li>
                  <li className="liPack">
                    Gratuit durant 1 semaine ensuite payant, puis 9,99€/mois,
                    engagement 3 mois
                  </li>
                </ul>
              </div>
              <button className="packBTN">Souscrire</button>
            </div>
          </div>

          {/* div2 */}
          <div className="pack-col1">
            <div className="packbox">
              <div className="boxHeading2">
                <h1 className="packH1">Pack Accompagnement</h1>
                <h3 className="packH3">29,99€ / mois</h3>
              </div>
              <div className="liHeading2">
                <ul>
                  <li className="liPack">
                    Recrutement facilité avec des offres qui te correspondent
                  </li>
                  <li className="liPack">Candidature envoyée en Swipe</li>
                  <li className="liPack">Matching assuré</li>
                  <li className="liPack">Matching assuré</li>
                  <li className="liPack">
                    Suivi simplifié de tes candidatures
                  </li>
                  <li className="liPack">
                    Coaching & accompagnement lors de ta recherche : 1 séance
                    Coaching + équipe dédiée pour répondre à tes questions
                  </li>
                  <li className="liPack">
                    Equipe dédiée pour répondre à tes questions
                  </li>
                </ul>
              </div>
              <button className="packBTN2">Souscrire</button>
            </div>
          </div>
          {/* div2 */}
        </div>
      </div>
    </>
  );
};

export default Pack;
