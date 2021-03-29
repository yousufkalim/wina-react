import React, { useState } from "react";
import { Link } from "react-router-dom";
import MainModal from "./Modals/mainModal";
import StudentRegister from "./Modals/studentRegisterModal";
import CompanyRegister from "./Modals/companyRegisterModal";
import HomeHeader from "./header";

/**
 * @author
 * @function Header
 **/

const Header = (props) => {
  const [studentModal, setstudentModal] = useState(false);
  const [companyModal, setcompanyModal] = useState(false);
  const [mainModal, setmainModalModal] = useState(false);

  const handleModal = (name) => {
    if (name === "student") {
      setstudentModal(!studentModal);
      setmainModalModal(false);
      setcompanyModal(false);
    } else if (name === "company") {
      setcompanyModal(!companyModal);
      setstudentModal(false);
      setmainModalModal(false);
    } else {
      setmainModalModal(!mainModal);
      setcompanyModal(false);
      setstudentModal(false);
    }
  };

  return (
    <>
      <MainModal show={mainModal} handleModal={handleModal} />
      <StudentRegister show={studentModal} handleModal={handleModal} />
      <CompanyRegister show={companyModal} handleModal={handleModal} />
      <HomeHeader handleModal={handleModal} />
      <div className="homeBackground">
        <div className="homebackground-text">
          <h1>
            BOOSTER DE <br />
            L’APPRENTISSAGE
          </h1>
          <p>Faire de l’alternance, la voix de l’excellence</p>
        </div>
      </div>
    </>
  );
};

export default Header;
