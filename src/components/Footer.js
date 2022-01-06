import React from "react";
import Footerimg from "../assets/Footerimg.png";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-container">
          <h2 className="footer-heading">NEWSLETTER</h2>
          <p className="footerP">Abonnez-vous à la Newsletter</p>
          <input
            className="footerInput"
            type="text"
            placeholder="Exemple@gmail.com"
          />
          <button className="footerInputBtn">Envoyer</button>
        </div>
        <div className="footerBox">
          <div className="ftrimg">
            <img src={Footerimg} alt="" />
          </div>
          <div className="manu">
            <a className="footerLi" href="">
              Application mobile
            </a>
            <a className="footerLi" href="/regards">
              A propos
            </a>
            <a className="footerLi" href="/about">
              Notre équipe
            </a>
            <a className="footerLi" href="/">
              FAQ
            </a>
            <a className="footerLi" href="">
              Contact
            </a>
            <a className="footerLi" href="">
              Ressources
            </a>
          </div>
          <div className="social_icon">
            <i className="social_icon" class="fab fa-facebook-f"></i>
          </div>
        </div>
      </div>
      <div className="blackFooter">
        <p className="footerPera">Falcon Consulting - 2022</p>
      </div>
    </>
  );
};

export default Footer;
