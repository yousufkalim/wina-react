import React from "react";
import Cvimg from "../../assets/Cvimg.svg";

const Accompagnement = () => {
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
                <h2 className="Accompagnement_title">Offres</h2>
                <p className="Accompagnement_p">
                  Publier gratuitement <br /> votre offre d’alternance 
                </p>
              </div>
            </div>
            {/* <div className="Accompagnement_colmn">
              <div className="Accompagnement_card">
                <img src={Cvimg} alt="" className="Accompagnement_card_img" />
                <h2 className="Accompagnement_title">Coaching</h2>
                <p className="Accompagnement_p">
                  Fusce varius justo et <br /> scelerisque varius. <br /> Nullam
                  mollis augue.
                </p>
              </div>
            </div> */}
            <div className="Accompagnement_colmn">
              <div className="Accompagnement_card">
                <img src={Cvimg} alt="" className="Accompagnement_card_img" />
                <h2 className="Accompagnement_title">Accompagnement</h2>
                <p className="Accompagnement_p">
                  Nous déléguer toute la partie recrutement, administrative <br />et contractuelle avec <br />l’apprenti et l’école
                </p>
              </div>
            </div>
            <div className="Accompagnement_colmn">
              <div className="Accompagnement_card">
                <img src={Cvimg} alt="" className="Accompagnement_card_img" />
                <h2 className="Accompagnement_title">Matching</h2>
                <p className="Accompagnement_p">
                  Déroulé l’ensemble des <br />profils étudiants afin de <br />trouver le match parfait et<br /> débuter vos entretiens.
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

export default Accompagnement;
