import React, { useState } from "react";
import StudentRegister from "../../components/Header/Modals/studentRegisterModal";
import VideoImage from "../../assets/VideoImage.svg";
import FindStar from "../../assets/FindStar.svg";

const Hero2 = (props) => {
  const [studentModal, setstudentModal] = useState(false);

  const handleModal = () => {
    setstudentModal(!studentModal);
  };
  return (
    <div>
      <div className="hero_section">
        <div className="hero_container">
          {/* new home section  */}
          <div className="new_home_section">
            <div className="home_section_colmn">
              <div className="home_section_content">
                <p className="find_p">
                  <img src={FindStar} alt="" className="find_star" />
                  &nbsp; find/match your dream jobs
                </p>
                <h1 className="home_seciton_h1">
                  MATCHER & <br />
                  ECHANGER
                </h1>
                <p className="home_seciton_p">
                  sce varius justo et scelerisque varius ullam mollis orbi sollicitudin a eros sed cured ed sus.{" "}
                </p>
                <button className="home_section_btn" onClick={() => handleModal("student")}>
                  Creer mon profil etudiant
                </button>
              </div>
            </div>
            <div className="home_section_colmn">
              <img src={VideoImage} alt="" className="home_section_image" />
            </div>
          </div>
        </div>
        <StudentRegister show={studentModal} handleModal={handleModal} />
      </div>
    </div>
  );
};

export default Hero2;
