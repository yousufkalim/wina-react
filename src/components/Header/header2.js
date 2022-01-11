import React, { useState } from "react";
import { Navbar, Nav, Image } from "react-bootstrap";
import "../../components/Header/Style.css";
import StudentRegister from "./Modals/studentRegisterModal";

export default function header2(props) {
  const { handleModal } = props;
  return (
    <Navbar collapseOnSelect expand="xl" variant="light" className="homeNavBar">
      <Navbar.Brand href="/landing_page">
        <Image
          src="../images/logoWinaA-r.png"
          alt="logo"
          className="navbar-image"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link className="navbar-left-link" href="/Student ">
            Etudiants
          </Nav.Link>
          <Nav.Link className="navbar-left-link" href="/Business">
            Entreprise
          </Nav.Link>
          <Nav.Link className="navbar-left-link" href="/cfa">
            CFA
          </Nav.Link>
          <div class="dropdown">
            <button class="dropbtn">Tarifs</button>
            <div class="dropdown-content">
              <a href="/Student">Étudiants</a>
              <a href="/Company">Entreprise</a>
            </div>
          </div>
        </Nav>
        <Nav>
          <Nav.Link
            className=" navbar-right-link navbar-right-link2"
            onClick={() => handleModal("student")}
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
    </Navbar>
  );
}
