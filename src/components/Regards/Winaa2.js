import React from "react";
import "../../components/Regards/Style.css";

const Winaa2 = (props) => {
  return (
    <>
      <div className="winaa">
        <div className="wina-container2">
          <div className="windaa2_about">
            <div className="wina-col1">
              <div className="winaLogo2">
                {/* <img className="winaImg" src={props.img} alt="" /> */}
                <h1 className="winaH1">{props.heading}</h1>
              </div>
            </div>
            <div className="wina-col2">
              <div className="winaTaxt">
                <div className="winatext_container2">
                  <p className="winaPera">{props.text}</p>
                  <p className="winaPera">{props.text2}</p>
                  <p className="winaPera">{props.text3}</p>
                  <p className="winaPera">{props.text4}</p>
                  <p className="winaPera">{props.text5}</p>
                  <p className="winaPera">{props.text6}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Winaa2;
