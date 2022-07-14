import React, { useState } from "react";
import "../../components/Cfa/Style.css";
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
    <>
      <HomeHeader2
        id={props.match.params.id}
        token={props.match.params.token}
        header="2"
      />
      {/* <Application
        btnT="Trimestriel"
        text="Nos Packs Etudiants"
        textp="Sélectionne l’offre qui correspond le mieux à vos besoins"
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
            <button style={{ marginLeft: "1rem" }} className={activeYear ? "applicationBTN2" : "applicationBTN"} onClick={handleYear}>Trimestriel</button>
          </div>
        </div>
      </div>
      <Pack
        img={CheckCheck}
        texth3="Pack Decouverte "
        texth32={activeMonth ? "11,98" : activeYear ? "107,90" : "NAN"}

        // 131.76


        // 11.988
        texth33=" monthly subscription"
        xth1="Pack Accompagnement"
        texth4={activeMonth ? "32,98" : activeYear ? "324" : "NAN"}
        liPack="Recrutement facilité avec des offres qui te correspondent"
        liPack2="Candidature envoyée en Swipe"
        // liPack3="Matching assuré"
        liPack4="Suivi simplifié de tes candidatures"
        liPack5="Gratuit durant 1 semaine ensuite payant, puis 9,99€/mois, engagement 3 mois"
        ////////////////////
        pliPack=" Recrutement facilité avec des offres qui te correspondent"
        pliPack2="Candidature envoyée en Swipe"
        // pliPack3="Matching assuré"
        pliPack4="Suivi simplifié de tes candidatures"
        pliPack5="Coaching & accompagnement lors de ta recherche : 1 séance Coaching + équipe dédiée pour répondre à tes questions"
        pliPack6="Equipe dédiée pour répondre à tes questions"
      />
      <Footer />
    </>
  );
};

export default Index;
