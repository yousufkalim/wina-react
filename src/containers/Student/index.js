import React from "react";
import "../../components/Cfa/Style.css";
import HomeHeader2 from "../../components/Header";
import Application from "../../components/Student/Application";
import Pack from "../../components/Student/Pack";
import Footer from "../../components/Footer";
import CheckCheck from "../../assets/CheckCheck.svg";

const index = (props) => {
  return (
    <>
      <HomeHeader2
        id={props.match.params.id}
        token={props.match.params.token}
        header="2"
      />
      <Application
        btnT="Trimestriel"
        text="Nos Packs Etudiants"
        textp="Sélectionne l’offre qui correspond le mieux à vos besoins"
      />
      <Pack
        img={CheckCheck}
        texth3="Pack Decouverte "
        texth32="9,99 "
        texth33=" monthly subscription"
        xth1="Pack Accompagnement"
        texth4="29,99"
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

export default index;
