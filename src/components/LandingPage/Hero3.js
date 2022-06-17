import React, { useState } from "react";
import "../../components/LandingPage/Style.css";
import StudentRegister from "../../components/Header/Modals/studentRegisterModal";
import CfaBG from "../../assets/CfaBG.svg";

const Hero3 = (props) => {
  const [studentModal, setstudentModal] = useState(false);

  const handleModal = () => {
    setstudentModal(!studentModal);
  };
  return (
    <div>
      <div className="hero_section">
        <div className="hero_container">
          <div className="hero_img">
            <img className="heroImg" src={CfaBG} alt="" />
          </div>
          {/* <hrs className={`${props.showBorder && "H2_boost_hr"}`} />
          <hrs className={`${props.showBorderS && "H2_boost_hr2"}`} /> */}
          <div className="hero_heading3">
            <img className="heroimgico" src={props.srcImg3} alt="" />
            <div style={{ position: "relative" }}>
              <h2 className="heroH2">{props.h2text}</h2>
            </div>
            <a href="#form" style={{ zIndex: "1" }}>
              <button className="heroBtn"> {props.btns}</button>
            </a>
          </div>
          <StudentRegister show={studentModal} handleModal={handleModal} />
        </div>
      </div>
    </div>
  );
};

export default Hero3;
