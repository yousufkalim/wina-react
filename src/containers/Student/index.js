import React from "react";
import "../../components/Cfa/Style.css";
import HomeHeader2 from "../../components/Header/header2";
import Application from "../../components/Student/Application";
import Pack from "../../components/Student/Pack";
import Footer from "../../components/Footer";

const index = () => {
  return (
    <>
      <HomeHeader2 />
      <Application btnT="Trimestriel" />
      <Pack
        texth1="Pack Découverte"
        texth3="9,99€ / mois"
        liPack="Recrutement facilité avec des offres qui te correspondent"
        liPack2="Candidature envoyée en Swipe"
        liPack3="Matching assuré"
        liPack4="Suivi simplifié de tes candidatures"
        liPack5="  Gratuit durant 1 semaine ensuite payant, puis 9,99€/mois, engagement 3 mois"
        ////////////////////
        pliPack=" Recrutement facilité avec des offres qui te correspondent"
        pliPack2="Candidature envoyée en Swipe"
        pliPack3="Matching assuré"
        pliPack4="Suivi simplifié de tes candidatures"
        pliPack5="Coaching & accompagnement lors de ta recherche : 1 séance Coaching + équipe dédiée pour répondre à tes questions"
        pliPack6="Equipe dédiée pour répondre à tes questions"
      />
      <Footer />
    </>
  );
};

export default index;
