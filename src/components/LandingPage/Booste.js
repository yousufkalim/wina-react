import React from "react";
import "../../components/LandingPage/Style.css";
import Doted from "../../assets/Doted.svg";
import { ReactComponent as ArrowFront } from "../../assets/Arrorwfront.svg";

const Booste = (props) => {
  return (
    <>
      <div className="boost">
        <div className="boost_container">
          <p className="Accompagnement_avac">PROCESS</p>
          <h1 className="boostH1">{props.text}</h1>
          <p className="boost_pera">
            am suscipit felis sit amet convallis condimentum nterdu <br />
            malesuada fames ac ante
          </p>
          <div className="boost_div">
            <div className="boost_col1">
              <img className="boostGImg" src={props.srcImg} alt="" />
              <img src={Doted} alt="" className="dotted_line" />
            </div>
            <div className="boost_col2">
              <div className="heading-div">
                <h3 className="boostH3">{props.text2}</h3>
                {/* <hr
                  className={`boost_hr ${props.showBorer && "boost_hr2_div "}`}
                /> */}
              </div>
              <p className="boostP">{props.text3}</p>
              <a href="/about" className="reed_more">
                Read more &nbsp;
                <ArrowFront />
              </a>
              {/* <p className="boostP2">{props.text4}</p> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Booste;
