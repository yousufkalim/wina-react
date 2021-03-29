import React from "react";
import { FaFacebookF, GrGooglePlus } from "react-icons/all";
import { Link } from "react-router-dom";

export default function sidebar({ ModalInput }) {
  return (
    <div className="modal-left-side">
      <div className="Login">
        <div className="heading pb-4">Connexion</div>
        <div>
          <ModalInput placeholder="Adresse mail" type="email" />
        </div>

        <div className="my-4 pb-5">
          <ModalInput placeholder="Mot de passe" type="password" />
        </div>

        <div className="mt-5">
          <div className="modal-button" color="primary">
            Se connecter
          </div>
          <div className="forgetpassword">
            <Link to="/">Mot de passe oublié ?</Link>
          </div>
          <div className="faceBookGoogleGroup">
            <div color="primary" className="w-100 modal-social-buttons">
              <div className="modal-social-btn modal-facebook-btn">
                <span>
                  <FaFacebookF className="modal-social-icon" />
                </span>
                &nbsp;&nbsp; Facebook
              </div>
              <div className="modal-social-btn modal-google-btn">
                <span>
                  <GrGooglePlus className="modal-social-icon-google mr-2" />
                </span>
                Google +
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
