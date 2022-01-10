import React from "react";

const ServicesData = (props) => {
  return (
    <>
      <div className="ServicesHeading">
        <h2 className="ServicesH2">{props.heading}</h2>
        <hrs className={`Services_hr ${props.showBorder && "Services_hr1"}`} />
        <p className="ServicesP">{props.text}</p>
        <button className="ServicesBTN">{props.btnText}</button>
      </div>
    </>
  );
};

export default ServicesData;
