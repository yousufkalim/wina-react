import React, { useState } from "react";
import HomeHeader2 from "../../components/Header";
import Application from "../../components/Student/Application";
import Pack from "../../components/Student/Pack";
import Footer from "../../components/Footer";
import CheckCheck from "../../assets/CheckCheck.svg";
const Index = (props) => {
  const [activeMonth, setActiveMonth] = useState(false)
  const [activeYear, setActiveYear] = useState(true)
  const handleMonth = () => {
    setActiveMonth(true)
    setActiveYear(false)
  }
  const handleYear = () => {
    setActiveYear(true)
    setActiveMonth(false)
  }
  return (
    <div>
      <HomeHeader2
        id={props.match.params.id}
        token={props.match.params.token}
        header="2"
      />
      {/* <Application
        btnT="Annuel"
        text="Nos packs Entreprises"
        textp="Il vous suffit simplement de choisir l’offre qui correspond le mieux à vos besoins."
      /> */}
      <div className="application ">
        <div className="application-container">
          <div className="application-heading">
            <h1 className="applicationH1">
              Une tarification simple pour une application innovante
            </h1>
            <p className="applicationP">Nos Packs Etudiants</p>
          </div>
          <div className="application-heading-2">
            <p className="applicationP2">Économisez 10%</p>
            <h1 className="applicationH12">Sélectionne l’offre qui correspond le mieux à vos besoins</h1>
            <button className={activeMonth ? "applicationBTN2" : "applicationBTN"} onClick={handleMonth}>Mensuel</button>
            <button style={{ marginLeft: "1rem" }} className={activeYear ? "applicationBTN2" : "applicationBTN"} onClick={handleYear}>Annuel</button>
          </div>
        </div>
      </div>
      <Pack
        img={CheckCheck}
        img2={CheckCheck}
        addUpperMargin={true}
        texth3="Matchez Recrutez "
        texth32={activeMonth ? "32,98" : activeYear ? "324" : "NAN"}
        texth33=" monthly subscription"
        xth1="Recrutement & Conseil"
        texth4={activeMonth ? "109,98" : activeYear ? "1,080" : "NAN"}
        liPack="Recrutement facilité avec des soft skills et hard skills ciblées"
        liPack2="Accès à la plateforme Web avec un Tableau de bord intuitif et design"
        liPack3="Matching des profils potentiels sur l’application"
        liPack4="Accès à l’application pour maîtriser en 3 clics la gestion des candidatures"
        liPack5="Au lancement jusqu’à 6 mois max gratuit et sans engagement pour avoir de la donnée. Après 6 mois, Tarif : 29,99€ / mois "
        //////////
        pliPack=" Recrutement facilité avec des soft skills et hard skills ciblées"
        pliPack2="Accès à la plateforme Web avec un Tableau de bord intuitif et design"
        pliPack3="Matching des profils potentiels sur l’application"
        pliPack4="Accès à l’application pour maîtriser en 3 clics la gestion des candidatures"
        pliPack5="Accompagnement dans les démarches administratives et légales ( création du CERFA, le processus à suivre pour le dépôt des contrats, etc)"
        pliPack6="Conseil en optimisation de recrutement "
        pliPack7="Accès à l’application pour maîtriser  en 3 clicks la gestion des candidatures "
        PackBTNn2={true}
      />
      <Footer />
    </div>
  );
};

export default Index;
