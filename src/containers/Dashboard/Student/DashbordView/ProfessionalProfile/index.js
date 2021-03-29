import React, { useState } from "react";
import { Row, Col, Nav, Tab, Tabs, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import PPModal from "./PPModal";
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
  },
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

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: "none",
  },
}));

const ProfessionalProfile = () => {
  const [key, setKey] = useState("Professionalcareer");
  const [show, setShow] = useState(false);
  const classes = useStyles();

  const ProfessionalCareerModal = () => {
    setShow(!show);
  };

  return (
    <>
      <PPModal show={show} setShow={setShow} />
      <div className="importCV">
        <div className={classes.root}>
          <input
            accept="image/*"
            className={classes.input}
            id="contained-button-file"
            multiple
            type="file"
          />
          <label htmlFor="contained-button-file">
            <Button variant="contained" color="primary" component="span">
              Importer CV
            </Button>
          </label>
          <input
            accept="image/*"
            className={classes.input}
            id="icon-button-file"
            type="file"
          />
        </div>
      </div>
      <Tabs
        activeKey={key}
        id="Profile"
        className="Profile upper-nav custom-tabs"
        onSelect={(k) => setKey(k)}
      >
        <Tab eventKey="Professionalcareer" title="Parcours professionnels" className="w-100 h-100">
          <div className="ProfessionalcareerBox">
            
              <div className="Professionalcareer">
              <Image className="modal-icon" src="../images/add_icons.png" onClick={ProfessionalCareerModal} />
                
                {
                  cards.map((card, index) => (
                    <InfoCard item={card} key={index} cindex={index} />
                  ))
                }
              </div>
           
          </div>
        </Tab>
        <Tab eventKey="generalPresentation" title="CV en ligne" className="h-100">
          <div className="CVOnlineBox">
            
              <div className="CVOnline custom-box">
                <Row>
                  <Col lg={3} md={4}>
                    <div className="profileImage">
                      <Image src="../images/profileImage_.png" />
                    </div>
                  </Col>
                  <Col lg={9} md={8}>
                    <Link to="#" className="edit_icons">
                      <Image src="../images/edit_icon.png" />
                    </Link>
                    <div className="profilename">Julie DURAND</div>
                    <div className="profileProfession">
                      <div className="pb-1">Étudiante</div>
                     
                      <div className="pb-1">Né(e) le 14 septembre 1999 à Paris</div>
                     
                      <div className="pb-1">Mobile : +33 (6) 76 65 34 09</div>
                     
                      <div className="pb-1">Email : Julie.Durand@gmail.com</div>
                      
                    </div>
                    <div className="formation">FORMATION</div>
                    <div className="companyNameH">
                      SUP’Internet, l’école des hauts potentiels du Web
                    </div>
                    <div className="companydate">
                      2017 - 2020 . 3ans
                      <br />
                      Région de Paris, France
                    </div>
                    <div className="description">
                      Je suis étudiante et je recherche une alternance en
                      webdesigner. J’ai effectuer une stage de 6 mois en
                      entreprise en tant qu’assistante graphiste.
                      <br />
                      Suivi de projet e-commerce en collaboration avec l’équipe
                      de développeur web. Contrôle de l’offre et du bon
                      fonctionnement des sites.
                    </div>

                    <div className="formation">
                      EXPÉRIENCES PROFESSIONNELLES
                    </div>
                    <div className="companyNameH">
                      SUP’Internet, l’école des hauts potentiels du Web
                    </div>
                    <div className="companyName">NOM DE L’ENTREPRISE</div>
                    <div className="companydateDuration">
                      2017 - 2020 . 3ans
                      <br />
                      Région de Paris, France
                    </div>
                    <div className="description">
                      Je suis étudiante et je recherche une alternance en
                      webdesigner. J’ai effectuer une stage de 6 mois en
                      entreprise en tant qu’assistante graphiste.
                      <br />
                      Suivi de projet e-commerce en collaboration avec l’équipe
                      de développeur web. Contrôle de l’offre et du bon
                      fonctionnement des sites.
                    </div>
                  </Col>
                </Row>
              </div>
           
          </div>
        </Tab>
       
      </Tabs>
    </>
  );
};
export default ProfessionalProfile;
