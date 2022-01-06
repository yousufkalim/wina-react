import React from "react";
import "../../components/LandingPage/Style.css";

const Booste = (props) => {
  return (
    <>
      <div className="boost">
        <div className="boost_container">
          <h1 className="boostH1">{props.text}</h1>
          <div className="boost_div">
            <div className="boost_col1">
              <img className="boostGImg" src={props.srcImg} alt="" />
            </div>
            <div className="boost_col2">
              <div className="heading-div">
                <h3 className="boostH3">{props.text2}</h3>
              </div>
              <p className="boostP">{props.text3}</p>
              <p className="boostP2">{props.text4}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Booste;
