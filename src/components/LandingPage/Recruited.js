import React from "react";


import "../../components/LandingPage/Style.css";

const Recruited = (props) => {
  return (
    <>
      <div className="boost1">
        <div className="boost_container">
          <h1 className="boost_h1">{props.heading}</h1>
          <div className="boost_div">
            <div className="perfect_col2">
              <h3 className="boostH3">{props.text}</h3>
              <p className="boostP">{props.text2}</p>
              <a href="/about">
                <button className="Learn_More">En savoir plus</button>
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

export default Recruited;
