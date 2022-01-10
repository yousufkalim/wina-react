import React from "react";
import "../../components/Regards/Style.css";

const Winaa = (props) => {
  return (
    <>
      <div className="winaa">
        <h1 className="winaH1">{props.heading}</h1>
        <div className="wina-container">
          <div className="wina-col1">
            <div className="winaLogo">
              <img className="winaImg" src={props.img} alt="" />
            </div>
          </div>
          <div className="wina-col2">
            <div className="winaTaxt">
              <div className="winatext_container">
                <p className="winaPera">{props.text}</p>
                <p className="winaPera">{props.text2}</p>
                <p className="winaPera">{props.text3}</p>
                <p className="winaPera">{props.text4}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Winaa;
