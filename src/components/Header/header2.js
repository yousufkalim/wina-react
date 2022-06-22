import React from "react";
import { Navbar, Nav, Image } from "react-bootstrap";
import "../../components/Header/Style.css";
import StudentRegister from "./Modals/studentRegisterModal";
import Logo from "../../assets/WinaaLogoNew.svg";

export default function header2(props) {
  const { handleModal } = props;
  return (
    <Navbar
      collapseOnSelect
      expand="xl"
      variant="light"
      className="homeNavBar"
      style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}
    >
      <div style={{ marginLeft: "1rem" }}>
        <Navbar.Brand href="/landing_page">
          <Image src={Logo} alt="logo" className="navbar-image" />
        </Navbar.Brand>
      </div>
      <div>
        {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
        <Navbar.Collapse>
          <Nav style={{ marginLeft: "10rem" }}>
            <Nav.Link className="navbar-left-link" href="/">
              Apprenti
            </Nav.Link>
            <Nav.Link className="navbar-left-link" href="/Business">
              Entreprise
            </Nav.Link>
            <Nav.Link className="navbar-left-link" href="/cfa">
              CFA
            </Nav.Link>
            <div className="dropdown">
              <button className="dropbtn">Tarifs</button>
              <div className="dropdown-content">
                <a href="/Student">Student</a>
                <a href="/Company">Company</a>
              </div>
            </div>
            {/* <Nav.Link className="navbar-left-link" href="/">
              Tarifs
            </Nav.Link> */}
            <Nav.Link className="navbar-left-link" href="/Regards">
              Assistance
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
      <div style={{ marginRight: "2rem" }}>
        <Navbar.Collapse>
          <Nav>
            <Nav.Link className=" navbar-right-link navbar-right-link2" onClick={() => handleModal("login")}>
              S’inscrire
            </Nav.Link>
            <Nav.Link className=" navbar-right-link-end navbar-right-link-end2" onClick={() => handleModal("main")}>
              Se connecter
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}
