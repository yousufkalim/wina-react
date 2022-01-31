import React from "react";
import HomeHeader2 from "../../components/Header";
import Application from "../../components/Student/Application";
import Pack from "../../components/Student/Pack";
import Footer from "../../components/Footer";
const index = (props) => {
  return (
    <div>
      <HomeHeader2
        id={props.match.params.id}
        token={props.match.params.token}
        header="2"
      />
      <Application btnT="Annuel" text="Nos Packs entreprises" />
      <Pack
        addUpperMargin={true}
        texth1="Pack Recrutement"
        texth3="29,99€ / mois"
        texth4="99,99€ / mois"
        liPack="Recrutement facilité avec des soft skills et hard skills ciblées"
        liPack2="Accès à la plateforme Web avec un Tableau de bord intuitif et design"
        liPack3="Matching des profils potentiels sur l’application"
        liPack4="Accès à l’application pour maîtriser en 3 clics la gestion des candidatures"
        liPack5="Au lancement jusqu’à 6 mois max gratuit et sans engagement pour avoir de la donnée. Après 6 mois, Tarif : 29,99€ / mois "
        //////////
        pliPack=" Recrutement facilité avec des offres qui te correspondent"
        pliPack2="Accès à la plateforme Web avec un 
Tableau de bord intuitif et design 
"
        pliPack3="Matching des profils potentiels sur 
l’application
"
        pliPack4="Accès à l’application pour maîtriser  
en 3 clics la gestion des candidatures
"
        pliPack5="Accompagnement dans les démarches administratives et légales ( création du CERFA, le processus à suivre pour le dépôt des contrats, etc)"
        pliPack6="Conseil en optimisation de recrutement "
        PackBTNn2={true}
      />
      <Footer />
    </div>
  );
};

export default index;
