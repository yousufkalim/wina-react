import React, { useState, useEffect } from "react";
import CompanyRegister from "../../components/Header/Modals/companyRegisterModal";
import { useSelector } from "react-redux";

const ServicesData = (props) => {
  const [companyModal, setCompanyModal] = useState(false);
  const [user, setUser] = useState({});
  const store = useSelector((state) => state.student);
  useEffect(() => {
    setUser(store.user);
  }, [store.user]);
  const handleModal = () => {
    setCompanyModal(!companyModal);
  };
  return (
    <>
      <div className="ServicesHeading">
        <h2 className="ServicesH2">{props.heading}</h2>
        <p className="ServicesP">{props.text}</p>
        {user ? (
          ""
        ) : (
          <button className="ServicesBTN" onClick={() => handleModal("company")}>
            {props.btnText}
          </button>
        )}
      </div>
      <CompanyRegister show={companyModal} handleModal={handleModal} />
    </>
  );
};

export default ServicesData;
