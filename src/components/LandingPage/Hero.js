import React, { useState } from "react";
import "../../components/LandingPage/Style.css";
import CompanyRegister from "../../components/Header/Modals/companyRegisterModal";
import HomeImage from "../../assets/HomeImage.svg";
import FindStar from "../../assets/FindStar.svg";

const Hero = (props) => {
  const [studentModal, setstudentModal] = useState(false);

  const handleModal = () => {
    setstudentModal(!studentModal);
  };

  return (
    <div>
      <div className="hero_section">
        <div className="hero_container">
          <div className="new_home_section">
            <div className="home_section_colmn">
              <div className="home_section_content">
                <p className="find_p">
                  <img src={FindStar} alt="" />
                  &nbsp; find/match your dream jobs
                </p>
                <h1 className="home_seciton_h1">
                  MATCHER & <br />
                  ECHANGER
                </h1>
                <p className="home_seciton_p">
                  sce varius justo et scelerisque varius ullam mollis orbi sollicitudin a eros sed cured ed sus.{" "}
                </p>
                <button className="home_section_btn" onClick={() => handleModal("company")}>
                  Creer mon profil entreprise
                </button>
              </div>
            </div>
            <div className="home_section_colmn">
              <img src={HomeImage} alt="" className="home_section_image" />
            </div>
          </div>
          {/* <div className="hero_img">
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
          </div> */}
        </div>
        {/* <CompanyRegister show={studentModal} handleModal={handleModal} /> */}
        <CompanyRegister show={studentModal} handleModal={handleModal} />
      </div>
    </div>
  );
};

export default Hero;
