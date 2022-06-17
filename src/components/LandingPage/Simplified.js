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
          <div className="simp_content">
            <h1 className="simp_h1">Hey! How can we help you?</h1>
            <p className="simp_p">
              Nam suscipit felis sit amet convallis condimentum nterdum et
              malesuada <br /> fames ac ante.
            </p>
          </div>
          <div className="simp_email_div">
            <input
              type="text"
              className="email_input"
              placeholder="Your email"
            />
            <button className="simp_btn">Subscribe</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Simplified;
