import React, { useState } from "react";
import Googleplay from "../../assets/Googleplay.png";
import Appstore from "../../assets/Appstore.png";
import Mobilepic from "../../assets/Mobilepic.png";
import StudentRegister from "../../components/Header/Modals/studentRegisterModal";

const Simplified = (props) => {
  const [studentModal, setstudentModal] = useState(false);

  const handleModal = () => {
    setstudentModal(!studentModal);
  };

  return (
    <>
      <div className="Simplified">
        <div className="Simplified_container">
          <div className="Simplified_headings">
            <h3 className="SimplifiedH3">{props.heading}</h3>
            <p className="SimplifiedP">{props.text}</p>
            <div className="siple_btn">
              <div className="simle_button">
                <a className="app-btn blu flex vert" href="http:google.com">
                  <img className="googleImg" src={Googleplay} alt="" />
                </a>
              </div>
              <div className="simle_button">
                <a className="app-btn blu flex vert" href="http:google.com">
                  <img className="googleImg" src={Appstore} alt="" />
                </a>
              </div>
            </div>
            <p className="SimplifiedP">
              Facilite tes recherches de contrats d’apprentissage. <br />
              Inscris-toi dès maintenant!
            </p>
            <div className="buttons2">
              <button
                className="SimplifiedButon"
                onClick={() => handleModal("student")}
              >
                Je m’inscris
              </button>
              <a href="/Cfa#form">
                <button className="SimplifiedButon2">Contacte-nous !</button>
              </a>
            </div>
            <StudentRegister show={studentModal} handleModal={handleModal} />
          </div>
          <div className="SimplifiedImg-container">
            <div className="boxImg-div">
              <img className="mobiIMg" src={Mobilepic} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Simplified;
