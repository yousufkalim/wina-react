import React, { useState } from "react";
import { Row, Col, Nav, Tab, Tabs, Image } from "react-bootstrap";
import GIModal from "./GIModal";
import { Link } from "react-router-dom";
import InfoCard from "../../../../../components/UI/InfoCard/InfoCard";

const cards = [
  {
    image: "sup",
    title: "SUP’Internet, l’école des hauts potentiels du Web",
    duration: "2017 - 2020 . 3ans",
    location: "Région de Paris, France",
    description: "Création de visuels web pour le merchandising des sites.Mise à jour du calendrier e-commerce. Suivi de projete-commerce en collaboration avec l’équipe de développeurweb. Contrôle de l’offre et du bon fonctionnement des sites."
  },
  {
    image: "sup",
    title: "SUP’Internet, l’école des hauts potentiels du Web",
    duration: "2017 - 2020 . 3ans",
    location: "Région de Paris, France",
    description: "Création de visuels web pour le merchandising des sites.Mise à jour du calendrier e-commerce. Suivi de projete-commerce en collaboration avec l’équipe de développeurweb. Contrôle de l’offre et du bon fonctionnement des sites."
  }
]

const GeneralInformations = () => {
  const [show, setShow] = useState(false);
  const SchoolModalShow = () => {
    setShow(!show);
  };
  return (
    <>
      <GIModal show={show} setShow={setShow} />
      <Tabs
        defaultActiveKey="generalPresentation"
        id="Profile"
        className="Profile upper-nav custom-tabs"
      >
        <Tab eventKey="generalPresentation" title="Présentation Générales" className="h-100">
          <div className="genProfileBox">
            
              <div className="genProfile">
                <Row className="p-3 w-100">
                  <Col lg={3} md={4}>
                    <div className="profileImage">
                      <Image src="../images/profileImage_.png" />
                    </div>
                    <div className="profileImage">
                      <Image src="../images/profilevedio.png" />
                    </div>
                    <div className="profileImage">
                      <Image src="../images/uploadcons.png" />
                    </div>
                  </Col>
                  <Col lg={9} md={8}>
                    
                    <div className="profilename">Julie DURAND</div>
                    <div className="profileProfession">Étudiante</div>
                    <div className="generalDescription">
                    Description générale
                    </div>
                    <div className="description">
                    Je suis étudiante et je recherche une alternance en webdesigner. J’ai effectuer 
                    une stage de 6 mois en entreprise en tant qu’assistante graphiste.
                    </div>
                    <div className="professionalNetwork">
                    Réseau pro
                    </div>
                    <ul className="PLinks">
                      <li>
                        <Image src="../images/linkedIn.png" />
                      </li>
                      <li>Linkedin &nbsp;&nbsp;: </li>
                      <li>
                        <Link to="#">https://www.linkedin.com</Link>
                      </li>
                    </ul>
                    <ul className="PLinks">
                      <li>
                        <Image src="../images/behance.png" />
                      </li>
                      <li>Behance &nbsp;&nbsp;: </li>
                      <li>
                        <Link to="#">https://www.behance.com</Link>
                      </li>
                    </ul>
                    <ul className="PLinks">
                      <li>
                        <Image src="../images/dribble.png" />
                      </li>
                      <li>Dribble &nbsp;&nbsp;: </li>
                      <li>
                        <Link to="#">https://www.dribble.com</Link>
                      </li>
                    </ul>
                    <ul className="PLinks">
                      <li>
                        <Image src="../images/github.png" />
                      </li>
                      <li>Github &nbsp;&nbsp;: </li>
                      <li>
                        <Link to="#">https://www.github.com</Link>
                      </li>
                    </ul>
                  </Col>
                  <Link to="#" className="edit_icons">
                      <Image src="../images/edit_icon.png" />
                    </Link>
                </Row>
              </div>
         
          </div>
        </Tab>

        {/* DiplomaSchool Tab*/}

        <Tab eventKey="diplomaSchool" title="Formation / École" className="h-100">
          <div className="diplomaSchoolBox">
            
              <div className="diplomaSchool">
                    <Image className="modal-icon" src="../images/add_icons.png" onClick={SchoolModalShow} />
                
                    {
                      cards.map((card, index) => (
                        <InfoCard item={card} key={index} cindex={index} />
                      ))
                    }

                
              </div>
           
          </div>
        </Tab>
      </Tabs>
    </>
  );
};
export default GeneralInformations;
