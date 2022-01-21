import React from "react";
import HomeHeader2 from "../../components/Header";
import Hero from "../../components/LandingPage/Hero";
import Booste from "../../components/LandingPage/Booste";
import Perfect from "../../components/LandingPage/Perfect";
import Place from "../../components/LandingPage/Place";
import Recruited from "../../components/LandingPage/Recruited";
import Specialized from "../../components/LandingPage/Specialized";
import Simplified from "../../components/LandingPage/Simplified";
import Footer from "../../components/Footer";
import Heroimg from "../../assets/Heroimg.png";
import BusImg1 from "../../assets/BusImg1.png";
import BusImg2 from "../../assets/BusImg2.png";
import BusImg3 from "../../assets/BusImg3.png";
import BusImg4 from "../../assets/BusImg4.png";

import Formsimg from "../../assets/Formsimg.png";
import Speechimg from "../../assets/Speechimg.png";
import Supportimg from "../../assets/Supportimg.png";
import Cgv from "../../assets/Cgv.png";

const Index = (props) => {
  return (
    <>
      <HomeHeader2
        id={props.match.params.id}
        token={props.match.params.token}
        header="2"
      />
      <Hero
        srcImg={Heroimg}
        h2text="Matching.Echange.Recrutement"
        showBorder={true}
        btno="Créer mon profil  entreprise"
      />
      <Booste
        srcImg={BusImg1}
        text="Facilitez votre recrutement avec Winaa"
        text2=" Des profils adaptés à vos recherches "
        text3=" Winaa vous donne accès à des profils opérationnels qui correspondent à vos critères de recherche préalablement renseignés.
Winaa leur a apporté une formation et une mise à niveau personnalisée afin de faciliter leur employabilité. "
        showBorer={true}
      />
      <Perfect
        srcImg={BusImg2}
        text="Le Matching parfait"
        text2=" Nous mettons à votre disposition une application innovante et intuitive vous permettant d’être mis en relation directe avec des étudiants à la recherche d’un contrat d’apprentissage. Un outil basé sur des algorithmes de matching facilitant votre recrutement."
      />
      <Place
        srcImg={BusImg3}
        text="Place à l’échange"
        text3=" Il vous sera permis de communiquer, échanger, évaluer la pertinence des profils proposés et ainsi, planifier un entretien d’embauche avec votre futur(e) alternant(e). "
      />
      <Recruited
        srcImg={BusImg4}
        text="Recrutez !"
        text2="Félicitations  ! Vous avez trouvé votre alternant ! Nous sommes à votre disposition dans l’accompagnement contractuel et administratif  du recrutement de l’apprenti."
      />
      <Specialized
        srcImg={Formsimg}
        srcImg2={Speechimg}
        srcImg3={Supportimg}
        srcImg4={Cgv}
        p="CGV"
      />
      <Simplified
        heading="Suivez vos progressions en téléchargeant l’application Winaa
"
        text="Vous pouvez matcher , swiper à n’importe quel moment de la journée. 
Winaa sauvegarde toutes vos progressions et suivis journaliers. "
      />
      <Footer />
    </>
  );
};

export default Index;
