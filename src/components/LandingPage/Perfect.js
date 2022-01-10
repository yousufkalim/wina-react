import React from "react";

import "../../components/LandingPage/Style.css";
const Perfect = (props) => {
  return (
    <>
      <div className="boost1">
        <div className="boost_container">
          <div className="boost_div">
            <div className="perfect_col2">
              <div className="heading-div2" style={{ position: "relative" }}>
                <h3 className="boostH3">{props.text}</h3>
                <hr className="boost_hr2" />
              </div>
              <p className="boostP">{props.text2}</p>
            </div>
            <div className="boost_col1">
              <img className="boostGImg" src={props.srcImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Perfect;
