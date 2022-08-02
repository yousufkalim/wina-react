import React, { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import ModalInput from '../../UI/Input';
import LeftSidebar from './Components/leftSideBar';
import { useFormik } from 'formik';
import { VERIFY_STATE } from '../../../Globals/InitialValues/Student';
import { VERIFY_YUP } from '../../Formik/Student/yupValidation';
import { Verify_email } from '../../../Redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../UI/Button';
import * as Yup from 'yup';
import Texts from '../../../Globals/Texts';
import { useHistory, useParams } from 'react-router-dom';
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
    formik.setFieldValue('token', params.token);
  }, [params.token]);
  return (
    <Modal
      className="student-modal"
      show={props.show}
      centered
      onHide={() => props.handleModal('emailVerify')}
    >
      <Modal.Header closeButton>
        <p
          className="heading"
          style={{ marginTop: '2rem', fontSize: '1.5rem', fontWeight: 600, color: '#30343E' }}
        >
          Confirmer
        </p>
      </Modal.Header>
      <Modal.Body>
        {/* <div className="d-flex justify-content-between p-3 Connexion-container">
          <div className="modal-left-side"> */}
        <div className="Login">
          <form onSubmit={formik.handleSubmit}>
            <div className="contact-form">
              <p style={{ marginBottom: '1rem', marginTop: '3rem', fontSize: '1.8rem' }}>
                {Texts.CLICK_BELOW_TO_VERIFY_EMAIL}
              </p>
            </div>

            {store.loading ? (
              <button
                className="modal-button modal-register-btn"
                type="submit"
                variant="primary"
                disabled={store.loading}
              >
                Loading....
              </button>
            ) : (
              <button
                className="modal-button modal-register-btn"
                type="submit"
                variant="primary"
                disabled={false}
              >
                Confirmer
              </button>
            )}
          </form>
        </div>
        {/* </div>
        </div> */}
      </Modal.Body>
    </Modal>
  );
}
