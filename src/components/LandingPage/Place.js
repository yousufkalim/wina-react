import React from "react";

const Place = (props) => {
  return (
    <>
      <div className="boost2">
        <div className="boost_container">
          <div className="boost_div">
            <div className="boost_col1">
              <img className="boostGImg" src={props.srcImg} alt="" />
            </div>
            <div className="plase_col2">
              <div>
                <h3 className="boostH3">{props.text}</h3>
              </div>
              <p className="boostP">{props.text3}</p>
              <p className="boostP">{props.text4}</p>
              <p className="boostP">{props.text5}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Place;
