import React from "react";
import "../../components/Cfa/Style.css";
import AnimImg1 from "../../assets/AnimImg1.png";
import AnimImg2 from "../../assets/AnimImg2.png";
import AnimImg3 from "../../assets/AnimImg3.png";
import AnimImg4 from "../../assets/AnimImg4.png";

const Animation = () => {
  return (
    <>
      <div className="animaitn_div">
        <div className="animaiton_container">
          <div className="animaiton_box">
            <img src={AnimImg1} alt="" className="animationIMG" />
            <button className="animBTN">
              <i class=" animIcon">+</i>
            </button>
            <h4 className="animaitonH4">Animation d’atelier TRE</h4>
          </div>
          <div className="animaiton_box">
            <img src={AnimImg2} alt="" className="animationIMG" />
            <button className="animBTN">
              <i class=" animIcon">+</i>
            </button>
            <h4 className="animaitonH4">
              Coaching individuel à distance pour les alternants (savoir-être,
              présenta
            </h4>
          </div>
          <div className="animaiton_box">
            <img src={AnimImg3} alt="" className="animationIMG" />
            <button className="animBTN">
              <i class=" animIcon">+</i>
            </button>
            <h4 className="animaitonH4">
              Placement de candidats avec une entreprise sur des filières en
              tension
            </h4>
          </div>
          <div className="animaiton_box">
            <img src={AnimImg4} alt="" className="animationIMG" />
            <button className="animBTN">
              <i class=" animIcon">+</i>
            </button>
            <h4 className="animaitonH4">
              Mise en relation entre CFA et grands groupes pour un besoin de
              recrutement massif Job Dating)
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Animation;
