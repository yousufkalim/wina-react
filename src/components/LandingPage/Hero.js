import React, { useState } from "react";
import "../../components/LandingPage/Style.css";
import CompanyRegister from "../../components/Header/Modals/companyRegisterModal";

const Hero = (props) => {
  const [studentModal, setstudentModal] = useState(false);

  const handleModal = () => {
    setstudentModal(!studentModal);
  };

  return (
    <div>
      <div className="hero_section">
        <div className="hero_container">
          <div className="hero_img">
            <img className="heroImg" src={props.srcImg} alt="" />
          </div>
          <hrs className={`${props.showBorder && "H2_boost_hr"}`} />
          <hrs className={`${props.showBorderS && "H2_boost_hr2"}`} />
          <div className="hero_heading">
            <img className="heroimgico" src={props.srcImg3} alt="" />
            <div style={{ position: "relative" }}>
              <h2 className="heroH2">{props.h2text}</h2>
            </div>
            <button className="heroBtn" onClick={() => handleModal("company")}>
              {props.btno}
            </button>
          </div>
          <CompanyRegister show={studentModal} handleModal={handleModal} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
