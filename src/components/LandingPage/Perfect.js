import React from "react";

import "../../components/LandingPage/Style.css";
const Perfect = (props) => {
  return (
    <>
      <div className="boost1">
        <div className="boost_container">
          <div className="boost_div">
            <div className="perfect_col2">
              <div className="heading-div" style={{ position: "relative" }}>
                <h3 className="boostH3">{props.text}</h3>
              </div>
              <p className="boostP">{props.text2}</p>
              <a href="#" className="reed_more">
                Read more &nbsp; &#5171;
              </a>
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
