import React from 'react';
import { FaFacebookF, FcGoogle, FaLinkedin } from 'react-icons/all';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { googleLogin } from '../../../../Redux/actions';
import { LinkedInLogin } from '../../../../Redux/actions';
import { baseUrl } from '../../../../config';

export default function Sidebar({ ModalInput, dispatch, useFormik, LOGIN_STATE, LOGIN_YUP, login, handleModal }) {
  const store = useSelector((state) => state.auth);
  const formik = useFormik({
    initialValues: LOGIN_STATE,
    validationSchema: LOGIN_YUP,
    onSubmit: (values) => {
      dispatch(login(values, formik));
    },
    handleChange: (e) => {
      const { name, value } = e.target;
      formik.setFieldValue(name, value);
    },
  });
  const handleFacebookClick = (props) => {
    LinkedInLogin();
  };
  const handleGoogleClick = (props) => {
    googleLogin();
  };
  return (
    // <div className="modal-left-side">
    <div className="Login" style={{ borderTop: '1px solid #DBE8FF' }}>
      <form onSubmit={formik.handleSubmit} style={{ marginTop: '2rem' }}>
        <div>
          <ModalInput
            placeholder="Adresse mail"
            type="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? <div className="formikError">{formik.errors.email}</div> : null}
        </div>

        <div className="my-4 pb-2">
          <ModalInput
            placeholder="Mot de passe"
            type="password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? <div className="formikError">{formik.errors.password}</div> : null}
        </div>
        <button className="modal-button" type="submit" disabled={store.loading}>
          {store.loading ? 'LOADING....' : 'Se connecter'}
        </button>
        <div className="forgetpassword mt-1" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '1.1rem', color: '#848D9F' }}>
              Vous n'avez pas de compte ?
              <a onClick={() => handleModal('main')} style={{ color: '#2B5AA6', fontWeight: '600', marginLeft: '5px' }}>
                S'inscrire
              </a>
            </p>
          </span>

          <span>
            <a onClick={() => handleModal('reqforgotPassword')}> Mot de passe oublié ?</a>
          </span>
        </div>
      </form>
      <div className="mt-3">
        <div className="linkedinGoogleGroup">
          <div className="w-100">
            <a href={baseUrl + '/auth/linkedin'} className="modal-social-btn modal-facebook-btn">
              <span>
                <FaLinkedin className="modal-social-icon mr-2" />
                <>Connectez-vous avec LinkedIn</>
              </span>
            </a>
            <a href={baseUrl + '/auth/google'} className="modal-social-btn-google modal-google-btn">
              <span>
                <FcGoogle className="modal-social-icon-google mr-2 ml-0" />
                <>Connectez-vous avec Google</>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
}
