import React, { useState, useEffect } from "react";
import MainModal from "./Modals/mainModal";
import StudentRegister from "./Modals/studentRegisterModal";
import CompanyRegister from "./Modals/companyRegisterModal";
import RequestForgotPasswordModal from "./Modals/requestModal";
import ResetPasswordModal from "./Modals/resetModal";
import EmailVerificationModal from "./Modals/emailVerificationModal";
import { Image, Accordion, Card, Button } from "react-bootstrap";
import { getUser } from "../../Redux/actions";
import HomeHeader1 from "./header";
import HomeHeader2 from "./header2";
import axios from "axios";
/**
 * @author
 * @function Header
 **/

const Header = (props) => {
  const [studentModal, setstudentModal] = useState(false);
  const [companyModal, setcompanyModal] = useState(false);
  const [mainModal, setmainModal] = useState(false);
  const [requestModal, setrequestModal] = useState(false);
  const [resetModal, setresetModal] = useState(false);
  const [emailVerifyModal, setemailVerifyModal] = useState(false);
  const [data, setData] = useState({});

  const handleModal = (name) => {
    if (name === "student") {
      setstudentModal(!studentModal);
      setmainModal(false);
      setcompanyModal(false);
    } else if (name === "company") {
      setcompanyModal(!companyModal);
      setstudentModal(false);
      setmainModal(false);
    } else if (name === "main") {
      setmainModal(!mainModal);
      setcompanyModal(false);
      setstudentModal(false);
    } else if (name === "reqforgotPassword") {
      setrequestModal(!requestModal);
      setmainModal(false);
      setcompanyModal(false);
      setstudentModal(false);
    } else if (name === "emailVerify") {
      setemailVerifyModal(!emailVerifyModal);
      setresetModal(false);
      setrequestModal(false);
      setmainModal(false);
      setcompanyModal(false);
      setstudentModal(false);
    } else {
      setresetModal(!resetModal);
      setrequestModal(false);
      setmainModal(false);
      setcompanyModal(false);
      setstudentModal(false);
    }
  };
  useEffect(async () => {
    if (props.id) {
      let DATA = await axios.get(
        `http://localhost:9190/api/v1/profile/getUser/${props.id}`
      );
      setData(DATA.data);
      setresetModal(!resetModal);
    } else if (props.token) {
      setemailVerifyModal(!emailVerifyModal);
    }
  }, []);
  return (
    <>
      <MainModal show={mainModal} handleModal={handleModal} />
      <StudentRegister show={studentModal} handleModal={handleModal} />
      <CompanyRegister show={companyModal} handleModal={handleModal} />
      <RequestForgotPasswordModal
        show={requestModal}
        handleModal={handleModal}
      />
      <ResetPasswordModal
        show={resetModal}
        handleModal={handleModal}
        id={props.id}
        data={data}
      />
      <EmailVerificationModal
        show={emailVerifyModal}
        handleModal={handleModal}
        id={props.token}
      />
      <div className="home_container">
        {props.header === "2" ? (
          <HomeHeader2 handleModal={handleModal} />
        ) : (
          <HomeHeader1 handleModal={handleModal} />
        )}
        {props.header === "2" ? (
          ""
        ) : (
          <div className="homeBackground">
            <div className="homebackground-text">
              <h1>
                BOOSTER DE <br />
                L’APPRENTISSAG
              </h1>
              <p>Faire de l’alternance, la voix de l’excellence</p>
            </div>

            <div className="post_mobile-view_responsive">
              <div
                className="post_mobile-view-content"
                style={{ paddingBottom: "6rem" }}
              >
                <div className="post_icons">
                  <Image src="../images/PostAnOffer.png" alt="Post an offer" />
                  <div className="label">Poster une offre</div>
                </div>

                <div className="post_icons">
                  <Image src="../images/faq.png" alt="Post an offer" />
                  <div className="label">FAQ</div>
                </div>

                <div className="post_icons">
                  <Image src="../images/uploadcv.png" alt="Post an offer" />
                  <div className="label">Télécharger votre CV</div>
                </div>

                <div className="post_icons">
                  <Image src="../images/register.png" alt="Post an offer" />
                  <div className="label">S’inscrire</div>
                </div>

                <div className="post_icons">
                  <Image src="../images/contact_us.png" alt="Post an offer" />
                  <div className="label">Contactez-nous</div>
                </div>

                <div className="post_icons">
                  <Image src="../images/cgv.png" alt="Post an offer" />
                  <div className="label">CGV</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
