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
            <h2 className="Accompagnement_h2">Accompagnement specialise</h2>
          </div>
          {/* colmns  */}
          <div className="Accompagnement_colmn_mainDiv">
            <div className="Accompagnement_colmn">
              <div className="Accompagnement_card">
                <img src={Cvimg} alt="" className="Accompagnement_card_img" />
                <h2 className="Accompagnement_title">CV</h2>
                <p className="Accompagnement_p">
                  Fusce varius justo et <br /> scelerisque varius. <br /> Nullam mollis augue.
                </p>
              </div>
            </div>
            <div className="Accompagnement_colmn">
              <div className="Accompagnement_card">
                <img src={Cvimg} alt="" className="Accompagnement_card_img" />
                <h2 className="Accompagnement_title">Coaching</h2>
                <p className="Accompagnement_p">
                  Fusce varius justo et <br /> scelerisque varius. <br /> Nullam mollis augue.
                </p>
              </div>
            </div>
            <div className="Accompagnement_colmn">
              <div className="Accompagnement_card">
                <img src={Cvimg} alt="" className="Accompagnement_card_img" />
                <h2 className="Accompagnement_title">CVG</h2>
                <p className="Accompagnement_p">
                  Fusce varius justo et <br /> scelerisque varius. <br /> Nullam mollis augue.
                </p>
              </div>
            </div>
            <div className="Accompagnement_colmn">
              <div className="Accompagnement_card">
                <img src={Cvimg} alt="" className="Accompagnement_card_img" />
                <h2 className="Accompagnement_title">Matching</h2>
                <p className="Accompagnement_p">
                  Fusce varius justo et <br /> scelerisque varius. <br /> Nullam mollis augue.
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
