import React, { useState } from "react";
import { Navbar, Nav, Image } from "react-bootstrap";
import "../../components/Header/Style.css";
import StudentRegister from "./Modals/studentRegisterModal";

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
      <div>
        <Navbar.Brand href="/landing_page">
          <Image src="../images/logoWinaA-r.png" alt="logo" className="navbar-image" />
        </Navbar.Brand>
      </div>
      <div>
        {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
        <Navbar.Collapse>
          <Nav style={{ marginLeft: "10rem" }}>
            <Nav.Link className="navbar-left-link" href="/">
              Etudiants
            </Nav.Link>
            <Nav.Link className="navbar-left-link" href="/Business">
              Entreprise
            </Nav.Link>
            <Nav.Link className="navbar-left-link" href="/cfa">
              CFA
            </Nav.Link>
            <Nav.Link className="navbar-left-link" href="">
              Tarifs
            </Nav.Link>
            <Nav.Link className="navbar-left-link" href="">
              Assistance
            </Nav.Link>
            {/* <div class="dropdown">
            <button class="dropbtn">Tarifs</button>
            <div class="dropdown-content">
            <a href="/Student">Étudiants</a>
            <a href="/Company">Entreprise</a>
            </div>
          </div> */}
          </Nav>
        </Navbar.Collapse>
      </div>
      <div>
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
