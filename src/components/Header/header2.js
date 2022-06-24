import React, { useState } from "react";
import { Navbar, Nav, Image } from "react-bootstrap";
import "../../components/Header/Style.css";
import StudentRegister from "./Modals/studentRegisterModal";
import Logo from "../../assets/WinaaLogoNew.svg";
import { ReactComponent as Menu } from "../../assets/Menu.svg";
import { ReactComponent as Cross } from "../../assets/Cross.svg";
export default function Header2(props) {
  const [showMenu, setShowMenu] = React.useState(true);

  const showMenuEvent = () => {
    setShowMenu(!showMenu);
  };

  const { handleModal } = props;
  return (
    <Navbar
      collapseOnSelect
      expand="xl"
      variant="light"
      className="homeNavBar"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{ marginLeft: "1rem" }}
        className={showMenu ? "landing_logo_div" : "landing_logo_div2"}
      >
        <Navbar.Brand href="/landing_page">
          <Image
            src={Logo}
            alt="logo"
            className={showMenu ? "navbar-image" : "Hide_menu"}
          />
        </Navbar.Brand>
      </div>

      <div className="responsive_manu">
        <Navbar.Collapse>
          <Nav
            style={{ marginLeft: "10rem", textAlign: "center" }}
            className={showMenu ? "Hide_menu" : "Show_menu"}
          >
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
                <a href="/Student">Etudiants</a>
                <a href="/Company">Entreprise</a>
              </div>
            </div>
            <Nav.Link className="navbar-left-link" href="/Regards">
              Assistance
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
      <div
        style={{ marginRight: "2rem" }}
        className={showMenu ? "nav_menu_btn" : "nav_menu_btn2"}
      >
        <Navbar.Collapse className="nav_menu_collapse">
          <Nav>
            <Nav.Link
              className=" navbar-right-link navbar-right-link2"
              onClick={() => handleModal("login")}
            >
              S’inscrire
            </Nav.Link>
            <Nav.Link
              className=" navbar-right-link-end navbar-right-link-end2"
              onClick={() => handleModal("main")}
            >
              Se connecter
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
      {showMenu ? (
        <>
          <Menu
            className="hambars"
            style={{ color: "#2b5aa6" }}
            onClick={showMenuEvent}
          />
        </>
      ) : (
        <>
          {" "}
          <Cross
            className="hambars"
            style={{ color: "#2b5aa6" }}
            onClick={showMenuEvent}
          />
        </>
      )}
    </Navbar>
  );
}
