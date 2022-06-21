import React, { useState } from "react";
import "../../components/Cfa/Style.css";
import Footerimg from "../../assets/Footerimg.svg";
import Locat from "../../assets/locat.svg";
import Phone2 from "../../assets/Phone2.svg";
import Email2 from "../../assets/Email2.svg";

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
            {/*1 colmn div  */}
            <div className="contact_from">
              <div className="contact_from_content_div2">
                <div className="contact_from_content">
                  {/* logo  */}
                  <div className="contact_from_headings">
                    {/* <img src={Footerimg} alt="" className="foot_log" /> */}
                    <h2 className="contact_from_h2">Contact Informaiton</h2>
                    <p className="contact_from_p">
                      Lorem ipsum dolor sit amet, consec <br /> etur adipiscing elit.
                    </p>
                  </div>
                  {/*footer menu  */}
                  <div className="foot_heading_div">
                    <img src={Phone2} alt="" />
                    <span className="foot_span">+333 3333333</span>
                  </div>
                  <div className="foot_heading_div">
                    <img src={Email2} alt="" />
                    <span className="foot_span">hello@winaa.com</span>
                  </div>
                  <div className="foot_heading_div">
                    <img src={Locat} alt="" />
                    <span className="foot_span">Winaa location</span>
                  </div>
                </div>
              </div>
            </div>
            {/*2 colmn div  */}
            <div className="form_colmn_div">
              <form action="" onSubmit={handleSubmit}>
                <label htmlFor="" className="form_label">
                  First Name
                </label>
                <input
                  onChange={handleChange}
                  required
                  className="formInput"
                  type="text"
                  placeholder="Your first name"
                  name="firstName"
                  value={forms.firstName}
                />
                <label htmlFor="" className="form_label">
                  Last Name
                </label>
                <input
                  onChange={handleChange}
                  required
                  className="formInput"
                  type="text"
                  placeholder="Your last name"
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
                  placeholder="Your Email adresse "
                  name="email"
                  value={forms.email}
                />
                <label htmlFor="" className="form_label">
                  Message
                </label>
                <textarea
                  onChange={handleChange}
                  required
                  placeholder="Write your message"
                  className="formInput"
                  name="textArea"
                  value={forms.textArea}
                  id=""
                  cols="30"
                  rows="2"
                ></textarea>
                <button className="formBTN">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
