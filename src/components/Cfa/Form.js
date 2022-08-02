import React, { useState } from 'react';
import '../../components/Cfa/Style.css';
import Footerimg from '../../assets/Footerimg.svg';
import Locat from '../../assets/locat.svg';
import Phone2 from '../../assets/Phone2.svg';
import Email2 from '../../assets/Email2.svg';

const Form = () => {
  const [forms, setForms] = useState({
    firstName: '',
    lastName: '',
    email: '',
    textArea: '',
  });

  const handleChange = (event) => {
    setForms({
      ...forms,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setForms({
      firstName: '',
      lastName: '',
      email: '',
      textArea: '',
    });
  };
  return (
    <>
      <div className="form" id="form">
        <div className="form-container">
          <div className="form-inter-div">
            {/*1 colmn div  */}
            <div className="contact_from">
              <div className="contact_from_content_div2">
                <div className="contact_from_content">
                  {/* logo  */}
                  <div className="contact_from_headings">
                    {/* <img src={Footerimg} alt="" className="foot_log" /> */}
                    <h2 className="contact_from_h2">Informations de contact</h2>
                    <p className="contact_from_p">
                      Nous restons à votre disposition pour <br /> toutes infirmations
                      complémentaires
                    </p>
                  </div>
                  {/*footer menu  */}
                  <div className="foot_heading_div">
                    <img src={Phone2} alt="" />
                    <span className="foot_span">+333 3333333</span>
                  </div>
                  <div className="foot_heading_div">
                    <img src={Email2} alt="" />
                    <span className="foot_span">entreprise@winaa.fr</span>
                  </div>
                  <div className="foot_heading_div">
                    <img src={Locat} alt="" />
                    <span className="foot_span">47 rue dutot 75015 paris</span>
                  </div>
                </div>
              </div>
            </div>
            {/*2 colmn div  */}
            <div className="form_colmn_div">
              <form action="" onSubmit={handleSubmit}>
                <label htmlFor="" className="form_label">
                  Prénom
                </label>
                <input
                  onChange={handleChange}
                  required
                  className="formInput"
                  type="text"
                  placeholder="Ton prénom"
                  name="firstName"
                  value={forms.firstName}
                />
                <label htmlFor="" className="form_label">
                  Nom
                </label>
                <input
                  onChange={handleChange}
                  required
                  className="formInput"
                  type="text"
                  placeholder="
                  Votre nom de famille"
                  name="lastName"
                  value={forms.lastName}
                />
                <label htmlFor="" className="form_label">
                  Email
                </label>
                <input
                  onChange={handleChange}
                  required
                  className="formInput"
                  type="email"
                  placeholder="Votre adresse e-mail "
                  name="email"
                  value={forms.email}
                />
                <label htmlFor="" className="form_label">
                  Message
                </label>
                <textarea
                  onChange={handleChange}
                  required
                  placeholder="Ecrivez votre message"
                  className="formInput"
                  name="textArea"
                  value={forms.textArea}
                  id=""
                  cols="30"
                  rows="3"
                ></textarea>
                <button className="formBTN">Envoyer le message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
