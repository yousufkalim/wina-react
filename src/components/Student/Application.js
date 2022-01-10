import React from "react";
import "../../components/Student/Style.css";

const Application = (props) => {
  return (
    <>
      <div className="application ">
        <div className="application-container">
          <div className="application-heading">
            <h1 className="applicationH1">
              Une tarification simple pour une application innovante
            </h1>
            <p className="applicationP">
              Il vous suffit simplement de choisir l’offre qui correspond le
              mieux à vos besoins.
            </p>
            {/* <hrs className={`${props.showBorder && "H2_boost_hr"} */}
            <hr className="application_hr" />
          </div>
          <div className="application-heading-2">
            <h1 className="applicationH12">Nos packs étudiants</h1>
            <button className="applicationBTN">Mensuel</button>
            <button className="applicationBTN2">{props.btnT} </button>
            <p className="applicationP2">Économisez 10%</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Application;
