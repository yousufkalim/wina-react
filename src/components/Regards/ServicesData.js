import React, { useState } from "react";
import StudentRegister from "../../components/Header/Modals/studentRegisterModal";

const ServicesData = (props) => {
  const [studentModal, setstudentModal] = useState(false);

  const handleModal = () => {
    setstudentModal(!studentModal);
  };
  return (
    <>
      <div className="ServicesHeading">
        <h2 className="ServicesH2">{props.heading}</h2>
        {/* <hrs className={`Services_hr ${props.showBorder && "Services_hr1"}`} /> */}
        <p className="ServicesP">{props.text}</p>
        {props.btnValue === "register" ? (
          <button
            className="ServicesBTN"
            onClick={() => handleModal("student")}
          >
            {props.btnText}
          </button>
        ) : props.btnValue === "cfa" ? (
          <a href="/Cfa#form">
            <button className="ServicesBTN"> {props.btnText}</button>
          </a>
        ) : (
          <a href="/Company">
            <button className="ServicesBTN">{props.btnText}</button>
          </a>
        )}
      </div>
      <StudentRegister show={studentModal} handleModal={handleModal} />
    </>
  );
};

export default ServicesData;
