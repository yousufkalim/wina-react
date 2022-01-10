import React from "react";

const ContractData = (props) => {
  return (
    <>
      <div className="ServicesHeading2" style={{ position: "relative" }}>
        <h2 className="ServicesH2">{props.heading}</h2>
        <hrs className="Services_hr1" />
        <hrs className={`Services_hr1 ${props.showBorder && "Services_hr2"}`} />
        <hrs
          className={`Services_hr1 ${props.showBorders && "Services_hr3"}`}
        />
        <p className="ServicesP">{props.text}</p>
        <p className="ServicesP">{props.text2}</p>
        <p className="ServicesP">{props.text3}</p>
      </div>
    </>
  );
};

export default ContractData;
