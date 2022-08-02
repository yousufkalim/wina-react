import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Image } from 'react-bootstrap';
import '../../components/Header/Style.css';
import StudentRegister from './Modals/studentRegisterModal';
import Logo from '../../assets/WinaaLogoNew.svg';
import { ReactComponent as Menu } from '../../assets/Menu.svg';
import { ReactComponent as Cross } from '../../assets/Cross.svg';
import { baseUri } from '../../urlConfig';
import { DEFAULT_IMAGE } from '../../Globals';
import { useSelector } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';

export default function Header2(props) {
  const [showMenu, setShowMenu] = useState(true);
  const [User, setUser] = useState({});

  const { handleModal } = props;
  const history = useHistory();
  const store = useSelector((state) => state.student);
  const showMenuEvent = () => setShowMenu(!showMenu);

  useEffect(() => {
    setUser(store.user);
  }, [store.user]);

  const STUDENT_IMAGE =
    store.user && store.user.student && store.user.student.professional_Picture
      ? store.user.student.professional_Picture.image
      : '';

  const handleProfile = () => {
    if (User.type === 'student') {
      history.push('/students/dashboard');
    } else if (User.type === 'company') {
      history.push('/companies/dashboard');
    } else if (User.type === 'amdin') {
      history.push('/admins/dashboard');
    }
  };
  return (
    <Navbar
      collapseOnSelect
      expand="xl"
      variant="light"
      className="homeNavBar"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <div style={{ marginLeft: '1rem' }}>
        <Link to="/landing_page">
          <Image src={Logo} alt="logo" className={showMenu ? 'navbar-image' : 'Hide_menu'} />
        </Link>
      </div>

      <div className="responsive_manu">
        <Navbar.Collapse>
          <Nav
            style={{ marginLeft: '10rem', textAlign: 'center' }}
            className={showMenu ? 'Hide_menu' : 'Show_menu'}
          >
            <Link className="navbar-left-link" to="/">
              Apprenti
            </Link>
            <Link className="navbar-left-link" to="/Business">
              Entreprise
            </Link>
            <Link className="navbar-left-link" to="/cfa">
              CFA
            </Link>
            <div className="dropdown">
              <button className="dropbtn">Tarifs</button>
              <div className="dropdown-content">
                <a href="/Student">Etudiants</a>
                <a href="/Company">Entreprise</a>
              </div>
            </div>
            <Link className="navbar-left-link" to="/Regards">
              Assistance
            </Link>
          </Nav>
        </Navbar.Collapse>
      </div>
      {User ? (
        <div style={{ marginRight: '4rem' }}>
          <div className="header-profile row d-flex justify-content-start align-items-center">
            <div onClick={handleProfile} style={{ cursor: 'pointer' }}>
              <Image
                className="profilePic "
                roundedCircle
                src={STUDENT_IMAGE ? `${baseUri}/views/uploads/${STUDENT_IMAGE}` : DEFAULT_IMAGE}
                style={{ width: '4rem' }}
              />
            </div>
            <div style={{ marginLeft: '10px' }}>
              <p
                style={{
                  display: 'flex',
                  alignItem: 'center',
                  justifyContent: 'flex-start',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  color: '#25364F',
                }}
              >
                {store.user.firstName} {store.user.lastName}
              </p>
              <p style={{ display: 'flex', alignItem: 'center', justifyContent: 'flex-start' }}>
                {store.user.email}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div style={{ marginRight: '2rem' }} className="nav_menu_btn">
            <Navbar.Collapse>
              <Nav>
                <Nav.Link
                  className="navbar-right-link navbar-right-link2"
                  onClick={() => handleModal('main')}
                >
                  S’inscrire
                </Nav.Link>
                <Nav.Link
                  className="navbar-right-link-end navbar-right-link-end2"
                  onClick={() => handleModal('login')}
                >
                  Se connecter
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
          {showMenu ? (
            <Menu className="hambars" style={{ color: '#2b5aa6' }} onClick={showMenuEvent} />
          ) : (
            <Cross className="hambars" style={{ color: '#2b5aa6' }} onClick={showMenuEvent} />
          )}
        </>
      )}
    </Navbar>
  );
}
