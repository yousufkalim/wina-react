import React from "react";
import Cvimg from "../../assets/Cvimg.svg";

const Accompagnement2 = () => {
  return (
    <>
      <div className="Accompagnement_mainDiv">
        <div className="Accompagnement_centerDiv">
          {/* content  */}
          <div className="Accompagnement_content">
            <p className="Accompagnement_avac">Avec l’abonnement Winaa</p>
            <h2 className="Accompagnement_h2">Accompagnement specialisé</h2>
          </div>
          {/* colmns  */}
          <div className="Accompagnement_colmn_mainDiv">
            <div className="Accompagnement_colmn">
              <div className="Accompagnement_card">
                <img src={Cvimg} alt="" className="Accompagnement_card_img" />
                <h2 className="Accompagnement_title">CV</h2>
                <p className="Accompagnement_p">
                  personnalise ton CV pour mettre toute tes chances
                  de ton coté en mettant en valeur des Hard/soft skills
                </p>
              </div>
            </div>
            <div className="Accompagnement_colmn">
              <div className="Accompagnement_card">
                <img src={Cvimg} alt="" className="Accompagnement_card_img" />
                <h2 className="Accompagnement_title">Coaching</h2>
                <p className="Accompagnement_p">
                  Nous te proposons de te coacher et de te trouver une offre d’alternance qui répond à ta formation
                </p>
              </div>
            </div>

            <div className="Accompagnement_colmn">
              <div className="Accompagnement_card">
                <img src={Cvimg} alt="" className="Accompagnement_card_img" />
                <h2 className="Accompagnement_title">Matching</h2>
                <p className="Accompagnement_p">
                  Swipe à droite pour liker une offre et à gauche pour passer à la suivante. Si le like est réciproque c’est un entretien !
                </p>
              </div>
            </div>
            {/* <div className="Accompagnement_colmn">2</div>
            <div className="Accompagnement_colmn">3</div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Accompagnement2;
