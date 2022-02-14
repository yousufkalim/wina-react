import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import ModalInput from "../../UI/Input";
import LeftSidebar from "./Components/leftSideBar";
import { useFormik } from "formik";
import { VERIFY_STATE } from "../../../Globals/InitialValues/Student";
import { VERIFY_YUP } from "../../Formik/Student/yupValidation";
import { Verify_email } from "../../../Redux/actions";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../UI/Button";
import * as Yup from "yup";
import Texts from "../../../Globals/Texts";
import { useHistory, useParams } from "react-router-dom";
export default function StudentRegister(props) {
  // Dispatch
  const dispatch = useDispatch();
  const history = useHistory();
  let params = useParams();
  const store = useSelector((state) => state.auth);

  // formik
  const formik = useFormik({
    initialValues: VERIFY_STATE,
    validationSchema: VERIFY_YUP,
    onSubmit: (values) => {
      dispatch(Verify_email(params.token, formik, props, history));
    },
    handleChange: (e) => {
      const { name, value } = e.target;
      formik.setFieldValue(name, value);
    },
  });

  useEffect(() => {
    formik.setFieldValue("token", params.token);
  }, [params.token]);
  return (
    <Modal
      className="student-modal"
      show={props.show}
      centered
      onHide={() => props.handleModal("emailVerify")}
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <div className="d-flex justify-content-between p-3 Connexion-container">
          <div className="modal-left-side">
            <div className="Login">
              <div className="heading pb-5">Confirmer</div>
              <form onSubmit={formik.handleSubmit}>
                <div className="contact-form">
                  <h3 style={{ marginBottom: "3rem" }}>
                    {Texts.CLICK_BELOW_TO_VERIFY_EMAIL}
                  </h3>
                </div>

                {store.loading ? (
                  <Button
                    className="Enregistrer"
                    type="submit"
                    variant="primary"
                    value="Loading...."
                    disabled={store.loading}
                  />
                ) : (
                  <Button
                    className="Enregistrer"
                    type="submit"
                    variant="primary"
                    value="Confirmer"
                    disabled={false}
                  />
                )}
              </form>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
