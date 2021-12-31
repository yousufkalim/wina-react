import React from "react";

const ContractData = (props) => {
  return (
    <>
      <div className="ServicesHeading">
        <h2 className="ServicesH2">{props.heading}</h2>
        <p className="ServicesP">{props.text}</p>
      </div>
    </>
  );
};

export default ContractData;
