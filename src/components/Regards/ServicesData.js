import React, { useState, useEffect } from "react";
import StudentRegister from "../../components/Header/Modals/studentRegisterModal";
import { useSelector } from "react-redux";

const ServicesData = (props) => {
  const [studentModal, setstudentModal] = useState(false);
  const [user, setUser] = useState({});
  const store = useSelector((state) => state.student);
  useEffect(() => {
    setUser(store.user);
  }, [store.user]);
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
          user ? (
            ""
          ) : (
            <button className="ServicesBTN" onClick={() => handleModal("student")}>
              {props.btnText}
            </button>
          )
        ) : props.btnValue === "cfa" ? (
          user ? (
            ""
          ) : (
            <a href="/Cfa#form">
              <button className="ServicesBTN"> {props.btnText}</button>
            </a>
          )
        ) : (
          ""
        )}
      </div>
      <StudentRegister show={studentModal} handleModal={handleModal} />
    </>
  );
};

export default ServicesData;
