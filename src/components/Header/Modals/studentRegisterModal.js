import React from "react";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import ModalInput from "../../UI/ModalInput/ModalInput";
import LeftSidebar from "./Components/leftSideBar";

const StudentRegister = (props) => {
  return (
    <Modal
      className="student-modal"
      show={props.show}
      centered
      onHide={() => props.handleModal("student")}
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <div className="d-flex justify-content-between p-3">
          <LeftSidebar ModalInput={ModalInput} />
          <div className="modal-right-side">
            <div className="Register">
              <div className="heading pb-4">S’inscrire</div>
              <div>
                <ModalInput placeholder="Nom" type="text" />
              </div>
              <div className="my-4">
                <ModalInput placeholder="Prénom" type="text" />
              </div>
              <div className="my-4">
                <ModalInput placeholder="Adresse mail" type="email" />
              </div>
              <div className="my-4">
                <ModalInput placeholder="Numéro de téléphone" type="text" />
              </div>
              <div className="my-4">
                <ModalInput placeholder="Adresse postale" type="text" />
              </div>
              <Link to="/student/dashboard">
                <div
                  className="modal-button modal-register-btn"
                  color="primary"
                >
                  S’inscrire
                </div>
              </Link>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};
export default StudentRegister;
