import React from "react";
import Footerimg from "../assets/Footerimg.svg";
import Home from "../assets/Home.svg";
import Phone from "../assets/Phone.svg";
import Email from "../assets/Email.svg";
import In from "../assets/In.svg";
import Insta from "../assets/Insta.svg";
import Fb from "../assets/Fb.svg";
import Twit from "../assets/Twit.svg";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-container">
          <div className="foot_colmn">
            <div className="foot_colm_content">
              {/* logo  */}
              <div className="foot_img_div">
                <img src={Footerimg} alt="" className="foot_log" />
              </div>
              {/*footer menu  */}
              <div className="foot_heading_div">
                <img src={Home} alt="" />
                <span className="foot_span">
                  47 rue dutot 75015 paris 
                </span>
              </div>
              <div className="foot_heading_div">
                <img src={Phone} alt="" />
                <span className="foot_span">1234-567890</span>
              </div>
              <div className="foot_heading_div">
                <img src={Email} alt="" />
                <span className="foot_span">entreprise@winaa.fr</span>
              </div>
            </div>
          </div>
          {/* colmn2  */}
          <div className="foot_colmn2">
            <div className="foot_colm_content">
              <div className="foot_img_div">
                <h2 className="foot_title">About</h2>
              </div>
              <div className="foot_heading_div">
                <span className="foot_span2">Enterprises</span>
              </div>
              <div className="foot_heading_div">
                <span className="foot_span2">CTA</span>
              </div>
            </div>
          </div>
          <div className="foot_colmn2">
            <div className="foot_colm_content">
              <div className="foot_img_div">
                <h2 className="foot_title">FAQ</h2>
              </div>
              <div className="foot_heading_div">
                {/* <span className="foot_span2">Hire Doctor</span> */}
              </div>
              <div className="foot_heading_div">
                {/* <span className="foot_span2">Patients</span> */}
              </div>
            </div>
          </div>
          <div className="foot_colmn2">
            <div className="foot_colm_content">
              <div className="foot_img_div">
                <h2 className="foot_title">Support</h2>
              </div>
              <div className="foot_heading_div">
                <span className="foot_span2">Contact</span>
              </div>
              <div className="foot_heading_div">
                <span className="foot_span2">Resources</span>
              </div>
            </div>
          </div>
        </div>
        <div className="winaa_foot">
          <p className="footerPera">Winaa. @ 2022. All Rights Reserved. </p>
          <div className="winaa_foot_social_div">
            <img src={In} alt="" className="winaa_foot_icons" />
            <img src={Insta} alt="" className="winaa_foot_icons" />
            <img src={Fb} alt="" className="winaa_foot_icons" />
            <img src={Twit} alt="" className="winaa_foot_icons" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
