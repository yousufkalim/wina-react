import React, { useState } from "react";
import "../../components/Cfa/Style.css";

const Form = () => {
  const [forms, setForms] = useState({
    firstName: "",
    lastName: "",
    email: "",
    textArea: "",
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
      firstName: "",
      lastName: "",
      email: "",
      textArea: "",
    });
  };
  return (
    <>
      <div className="form" id="form">
        <div className="form-container">
          <div className="form-inter-div">
            <h2 className="formH2">Contactez-nous !</h2>
            <form action="" onSubmit={handleSubmit}>
              <input
                onChange={handleChange}
                required
                className="formInput"
                type="text"
                placeholder="Prénom"
                name="firstName"
                value={forms.firstName}
              />
              <input
                onChange={handleChange}
                required
                className="formInput"
                type="text"
                placeholder="Nom"
                name="lastName"
                value={forms.lastName}
              />
              <input
                onChange={handleChange}
                required
                className="formInput"
                type="email"
                placeholder="Adresse mail"
                name="email"
                value={forms.email}
              />
              <textarea
                onChange={handleChange}
                required
                placeholder="Message"
                className="formInput"
                name="textArea"
                value={forms.textArea}
                id=""
                cols="30"
                rows="5"
              ></textarea>
              <button className="formBTN">CONNEXION</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
