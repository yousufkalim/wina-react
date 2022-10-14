import React
  // , { useState }
  from "react";
// import Googleplay from "../../assets/Googleplay.png";
// import Appstore from "../../assets/Appstore.png";
// import Mobilepic from "../../assets/Mobilepic.png";
// import StudentRegister from "../../components/Header/Modals/studentRegisterModal";

const Simplified = (props) => {
  // const [studentModal, setstudentModal] = useState(false);

  // const handleModal = () => {
  //   setstudentModal(!studentModal);
  // };

  return (
    <>
      <div className="Simplified">
        <div className="Simplified_container">
          <div className="simp_content">
            <h1 className="simp_h1">Hey! Comment pouvons-nous vous aider ?</h1>
            <p className="simp_p" style={{ marginTop: "2rem" }}>
              Besoin d’aide ? contactez-nous par mail nous reviendrons vers vous sous <br />48H
            </p>
          </div>
          <div className="simp_email_div">
            <input
              type="text"
              className="email_input"
              placeholder="Votre adresse mail"
            />
            <button className="simp_btn">Envoyer</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Simplified;
