import React from 'react';
import BorderImg from '../../assets/BorderImg.svg';
import MobleImg from '../../assets/MobleImg.png';
import Apple from '../../assets/Apple.svg';
import Google from '../../assets/Google.svg';

const Specialized = (props) => {
  return (
    <>
      <div className="specialized">
        <div className="specialized_container">
          <div className="spec_colmn">
            <div className="areYou_div">
              <h1 className="spec_h1">
                Êtes-vous excité <br /> pour Winaa ?
              </h1>
              <img src={BorderImg} alt="" className="spec_border_img" />
              <p className="spec_download_social">Téléchargez WinaApp dès aujourd'hui !</p>
              <div className="spec_plystor_div">
                <img src={Google} alt="" className="Google_btn" />
                <img src={Apple} alt="" className="AppStore_btn" />
              </div>
            </div>
          </div>
          <div className="spec_colmn2">
            <div className="spec_mobile_img">
              <img src={MobleImg} alt="" className="spec_image" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Specialized;
