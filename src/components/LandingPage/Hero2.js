import React, { useState, useEffect } from 'react';
import StudentRegister from '../../components/Header/Modals/studentRegisterModal';
import VideoImage from '../../assets/VideoImage.jpg';
import FindStar from '../../assets/FindStar.svg';
import { useSelector } from 'react-redux';

const Hero2 = (props) => {
  const [studentModal, setstudentModal] = useState(false);
  const [user, setUser] = useState({});
  const store = useSelector((state) => state.student);
  useEffect(() => {
    setUser(store.user);
  }, [store.user]);
  const handleModal = () => {
    setstudentModal(!studentModal);
  };
  return (
    <div>
      <div className="hero_section">
        <div className="hero_container">
          {/* new home section  */}
          <div className="new_home_section">
            <div className="home_section_colmn">
              <div className="home_section_content">
                <p className="find_p">
                  <img src={FindStar} alt="" className="find_star" />
                  &nbsp; trouvez/correspondez aux emplois de vos rêves
                </p>
                <h1 className="home_seciton_h1">
                  MATCHER & <br />
                  ÉCHANGEUR
                </h1>
                <p className="home_seciton_p">
                  Winaa est la première plateforme de mise en relation 100% dédiée à l’alternance et
                  l’apprentissage. Winaa te propose des offres d’alternance en lien avec tes
                  critères de recherche.
                </p>
                {user ? (
                  ''
                ) : (
                  <button className="home_section_btn" onClick={() => handleModal('student')}>
                    Creer mon profil etudiant
                  </button>
                )}
              </div>
            </div>
            <div className="home_section_colmn">
              <img src={VideoImage} alt="" className="home_section_image" />
            </div>
          </div>
        </div>
        <StudentRegister show={studentModal} handleModal={handleModal} />
      </div>
    </div>
  );
};

export default Hero2;
