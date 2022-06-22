import React, { useState } from "react";
import CompanyRegister from "../../components/Header/Modals/companyRegisterModal";

const ServicesData = (props) => {
  const [companyModal, setCompanyModal] = useState(false);

  const handleModal = () => {
    setCompanyModal(!companyModal);
  };
  return (
    <>
      <div className="ServicesHeading">
        <h2 className="ServicesH2">{props.heading}</h2>
        {/* <hrs className={`Services_hr ${props.showBorder && "Services_hr1"}`} /> */}
        <p className="ServicesP">{props.text}</p>
        <button className="ServicesBTN" onClick={() => handleModal("company")}>
          {props.btnText}
        </button>{" "}
      </div>
      <CompanyRegister show={companyModal} handleModal={handleModal} />
    </>
  );
};

export default ServicesData;
