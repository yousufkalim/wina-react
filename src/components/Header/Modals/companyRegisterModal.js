import React from "react";
import { Modal } from "react-bootstrap";
import ModalInput from "../../UI/Input";
import { Company_Types } from "../../Data";
import LeftSidebar from "./Components/leftSideBar";
import { Link } from "react-router-dom";

const StudentRegister = (props) => {
  return (
    <Modal
      className="student-modal"
      show={props.show}
      centered
      onHide={() => props.handleModal("company")}
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <div className="d-flex justify-content-between p-3">
          <LeftSidebar ModalInput={ModalInput} />
          <div className="modal-right-side">
            <div className="Register">
              <div className="heading pb-4">S’inscrire - Société</div>
              <div>
                <ModalInput placeholder="Nom de l’entreprise" type="text" />
              </div>
              <div className="my-4">
                <ModalInput
                  placeholder="Type d Entreprise"
                  type="select"
                  options={Company_Types}
                />
              </div>
              <div className="my-4">
                <ModalInput placeholder="Numéro SIRET" type="text" />
              </div>
              <div className="my-4">
                <ModalInput placeholder="Site internet" type="text" />
              </div>
              <div className="my-4">
                <ModalInput placeholder="Profil Linkedin" type="text" />
              </div>
              <div className="my-4">
                <ModalInput
                  placeholder="L’entreprise fait-elle partie d’un groupement ? Si oui, préciser le nom"
                  type="text"
                />
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
