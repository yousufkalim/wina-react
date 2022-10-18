import React, { useEffect, useState } from 'react';
import logo from '../assets/WinaaLogo.svg';
import Dashboard from '../assets/Vector.svg';
import ArrowDown from '../assets/Vector1.svg';
import Offer from '../assets/Group2.svg';
import Coaching from '../assets/Group3.svg';
import ArrowUp from '../assets/Vector3.svg';
import SignOut from '../assets/signout.svg';
import Header from '../containers/Dashboard/Components/header';
import GeneralInformations from '../containers/Dashboard/Student/DashbordView/GeneralInformations';
import ProfessionalProfile from '../containers/Dashboard/Student/DashbordView/ProfessionalProfile';
import Skills from '../containers/Dashboard/Student/DashbordView/Skills';
import ResearchedJob from '../containers/Dashboard/Student/DashbordView/ResearchedJob';
import Offers from '../containers/Dashboard/Student/CoachingView/Offres';
import RDV from '../containers/Dashboard/Student/CoachingView/RDV';
import ViewOffers from '../containers/Dashboard/Student/OffersView/OfferTab/ViewOffers';
import { Image } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { signout } from '../Redux/actions';
import MatchResearch from '../containers/Dashboard/Student/OffersView/ResearchTab/MatchResearch';
import { useHistory } from 'react-router-dom';
const Drawer = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [arrowUp1, setArrowUp1] = useState(false);
  const [arrowUp2, setArrowUp2] = useState(false);
  const [arrowUp3, setArrowUp3] = useState(false);
  const [arrowUp4, setArrowUp4] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [selected, setSelected] = useState('');
  useEffect(() => {
    handleStart();
  }, []);
  const handleStart = () => {
    setSelected('GeneralInformations');
    setArrowUp1(!arrowUp1);
    setOpen1(!open1);
  };

  const handleArrowUp1 = () => {
    setArrowUp1(!arrowUp1);
    setOpen1(!open1);
    setArrowUp2(false);
    setArrowUp3(false);
    setOpen2(false);
    setOpen3(false);
  };
  const handleArrowUp2 = () => {
    setArrowUp2(!arrowUp2);
    setOpen2(!open2);
    setArrowUp1(false);
    setArrowUp3(false);
    setOpen1(false);
    setOpen3(false);
  };
  const handleArrowUp3 = () => {
    setArrowUp3(!arrowUp3);
    setOpen3(!open3);
    setArrowUp2(false);
    setArrowUp1(false);
    setOpen2(false);
    setOpen1(false);
  };
  const handleArrowUp4 = () => {
    setArrowUp4(!arrowUp4);
    setOpen3(!open4);
    setArrowUp3(false);
    setArrowUp2(false);
    setArrowUp1(false);
    setOpen3(false);
    setOpen2(false);
    setOpen1(false);
  };
  const handleClick = e => {
    setSelected(e);
  };
  const handleLogoClick = () => {
    history.push('/');
  };
  console.log(selected, 'selected');
  return (
    <div>
      <div style={{ display: 'flex' }}>
        <div className="main_drawer_div">
          <div className="dashbordlogo" onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
            <img src={logo} alt="" />
          </div>
          <div
            className="drawer_head_text_div1"
            style={{ borderBottom: !open1 && '1px solid #E5E7ED' }}
            onClick={handleArrowUp1}>
            <div className="drawer_left_text">
              <img src={Dashboard} className="home_icon" alt="" />
              <span className="drawer_head_text">Dashboard</span>
            </div>
            <img src={arrowUp1 === false ? ArrowDown : ArrowUp} className="arrow_icon" alt="" />
          </div>
          <div style={{ display: !open1 && 'none' }}>
            <div
              className="dashbord-column"
              style={{ borderLeft: selected === 'GeneralInformations' ? '4px solid #18214A' : '' }}>
              <div
                onClick={() => handleClick('GeneralInformations')}
                className={
                  selected === 'GeneralInformations' ? 'selected_option' : 'not_selected_option'
                }>
                Informations Générales
              </div>
            </div>
            <div
              className="dashbord-column"
              style={{ borderLeft: selected === 'ProfessionalProfile' ? '4px solid #18214A' : '' }}>
              <div
                onClick={() => handleClick('ProfessionalProfile')}
                className={
                  selected === 'ProfessionalProfile' ? 'selected_option' : 'not_selected_option'
                }>
                Profil Professionnel
              </div>
            </div>
            <div
              className="dashbord-column"
              style={{ borderLeft: selected === 'Skills' ? '4px solid #18214A' : '' }}>
              <div
                onClick={() => handleClick('Skills')}
                className={selected === 'Skills' ? 'selected_option' : 'not_selected_option'}>
                Compétences
              </div>
            </div>
            <div
              className="dashbord-column"
              style={{ borderLeft: selected === 'ResearchedJob' ? '4px solid #18214A' : '' }}>
              <div
                onClick={() => handleClick('ResearchedJob')}
                className={
                  selected === 'ResearchedJob' ? 'selected_option' : 'not_selected_option'
                }>
                Poste Recherché
              </div>
            </div>
          </div>
          <div
            className="drawer_head_text_div2"
            style={{
              borderBottom: !open2 && '1px solid #E5E7ED',
              borderTop: open1 && '1px solid #E5E7ED',
              marginTop: open1 && '2.5rem'
            }}
            onClick={handleArrowUp2}>
            <div className="drawer_left_text">
              <img src={Offer} className="home_icon" alt="" />
              <span className="drawer_head_text">Offres</span>
            </div>
            <img src={arrowUp2 === false ? ArrowDown : ArrowUp} className="arrow_icon" alt="" />
          </div>
          <div style={{ display: !open2 && 'none' }}>
            <div
              className="dashbord-column"
              style={{ borderLeft: selected === 'ViewOffers' ? '4px solid #18214A' : '' }}>
              <div
                onClick={() => handleClick('ViewOffers')}
                className={selected === 'ViewOffers' ? 'selected_option' : 'not_selected_option'}>
                Suivi de mes candidatures
              </div>
            </div>
            <div
              className="dashbord-column"
              style={{ borderLeft: selected === 'MatchResearch' ? '4px solid #18214A' : '' }}>
              <div
                onClick={() => handleClick('MatchResearch')}
                className={
                  selected === 'MatchResearch' ? 'selected_option' : 'not_selected_option'
                }>
                Offres d'alternances
              </div>
            </div>
          </div>
          <div
            className="drawer_head_text_div2"
            style={{
              borderBottom: !open3 && '1px solid #E5E7ED',
              borderTop: open2 && '1px solid #E5E7ED',
              marginTop: open2 && '2.5rem'
            }}
            onClick={handleArrowUp3}>
            <div className="drawer_left_text">
              <img src={Coaching} className="home_icon" alt="" />
              <span className="drawer_head_text">Coaching</span>
            </div>
            <img src={arrowUp3 === false ? ArrowDown : ArrowUp} className="arrow_icon" alt="" />
          </div>
          <div style={{ display: !open3 && 'none' }}>
            <div
              className="dashbord-column"
              style={{ borderLeft: selected === 'Offers' ? '4px solid #18214A' : '' }}>
              <div
                onClick={() => handleClick('Offers')}
                className={selected === 'Offers' ? 'selected_option' : 'not_selected_option'}>
                Offres
              </div>
            </div>
            <div
              className="dashbord-column"
              style={{ borderLeft: selected === 'RDV' ? '4px solid #18214A' : '' }}>
              <div
                onClick={() => handleClick('RDV')}
                className={selected === 'RDV' ? 'selected_option' : 'not_selected_option'}>
                RDV
              </div>
            </div>
          </div>
          <div
            onClick={() => dispatch(signout(history))}
            style={{
              position: 'absolute',
              bottom: '3%',
              left: '2.4%',
              color: '#FF285C',
              fontSize: '1.1rem',
              cursor: 'pointer'
            }}>
            <Image src={SignOut} alt="" /> Se déconnecter
          </div>
        </div>

        <div className="dashbordLayout">
          <Header />
          <div className="dashbord_view_div">
            {selected === 'GeneralInformations' ? (
              <GeneralInformations />
            ) : selected === 'ProfessionalProfile' ? (
              <ProfessionalProfile />
            ) : selected === 'Skills' ? (
              <Skills />
            ) : selected === 'ResearchedJob' ? (
              <ResearchedJob />
            ) : selected === 'ViewOffers' ? (
              <ViewOffers />
            ) : selected === 'MatchResearch' ? (
              <MatchResearch />
            ) : selected === 'Offers' ? (
              <Offers />
            ) : selected === 'RDV' ? (
              <RDV />
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
