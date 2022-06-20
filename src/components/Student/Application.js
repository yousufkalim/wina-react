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
            <p className="applicationP">{props.textp}</p>
            {/* <hrs className={`${props.showBorder && "H2_boost_hr"} */}
            {/* <hr className="application_hr" /> */}
          </div>
          <div className="application-heading-2">
            <p className="applicationP2">Économisez 10%</p>
            <h1 className="applicationH12">{props.text}</h1>
            <button className="applicationBTN">Mensuel</button>
            <button className="applicationBTN2">{props.btnT} </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Application;
