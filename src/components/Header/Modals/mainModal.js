import React from 'react';
import { Modal } from 'react-bootstrap';
import LeftSidebar from './Components/leftSideBar';
import ModalInput from '../../UI/Input';
import { useFormik } from 'formik';
import { LOGIN_STATE } from '../../../Globals/InitialValues/Student';
import { LOGIN_YUP } from '../../Formik/Student/yupValidation';
import { login } from '../../../Redux/actions';
import { useDispatch, useSelector } from 'react-redux';

const StudentLogin = (props) => {
  // const classes = useStyles();
  const { show, handleModal } = props;
  let dispatch = useDispatch();

  return (
    <Modal className="student-modal" show={show} centered onHide={() => handleModal('main')}>
      <Modal.Header closeButton>
        <p
          className="heading"
          style={{
            marginTop: '2rem',
            fontSize: '1.5rem',
            fontWeight: 600,
            color: '#30343E',
          }}
        >
          S’inscrire
        </p>
      </Modal.Header>
      <Modal.Body>
        {/* <div className="d-flex justify-content-between p-3"> */}
        {/* <LeftSidebar
            ModalInput={ModalInput}
            dispatch={dispatch}
            useFormik={useFormik}
            LOGIN_STATE={LOGIN_STATE}
            LOGIN_YUP={LOGIN_YUP}
            login={login}
            useSelector={useSelector}
            handleModal={handleModal}
          /> */}
        {/* <div className="modal-right-side"> */}
        <div className="Register">
          <div className="modal-sub-heading" style={{ borderTop: '1px solid #DBE8FF' }}>
            ÉTUDIANT
          </div>
          <div className="studentRegisterbtn">
            <div className="modal-button" onClick={() => handleModal('student')}>
              S’inscrire
            </div>
          </div>
          <div className="modal-sub-heading">ENTREPRISE</div>
          <div className="BUSINESSRegisterbtn">
            <div className="modal-button" onClick={() => handleModal('company')}>
              Société
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: '20px',
            }}
          >
            <p style={{ color: '#848D9F', fontSize: '1.2rem' }}>Vous avez déjà un compte?</p>
            <p
              style={{
                color: 'Black',
                fontSize: '1.2rem',
                fontWeight: '600',
                marginLeft: '4px',
                cursor: 'pointer',
              }}
              onClick={() => handleModal('login')}
            >
              Connexion
            </p>
          </div>
        </div>
        {/* </div> */}
        {/* </div> */}
      </Modal.Body>
    </Modal>
  );
};
export default StudentLogin;
