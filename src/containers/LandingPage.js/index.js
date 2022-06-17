import React from "react";
import HomeHeader2 from "../../components/Header";
import Hero2 from "../../components/LandingPage/Hero2";
import Booste from "../../components/LandingPage/Booste";
import Perfect from "../../components/LandingPage/Perfect";
import Place from "../../components/LandingPage/Place";
import Recruited from "../../components/LandingPage/Recruited";
import Specialized from "../../components/LandingPage/Specialized";
import Simplified from "../../components/LandingPage/Simplified";
import Accompagnement from "../../components/LandingPage/Accompagnement";
import Footer from "../../components/Footer";
import FindStar from "../../assets/FindStar.svg";
import Boostimg from "../../assets/Boostimg.jpg";
import Boostimg2 from "../../assets/Boostimg2.jpg";
import Boostimg3 from "../../assets/Boostimg3.jpg";
import Boostimg4 from "../../assets/Boostimg4.svg";
// import Videoicon from "../../assets/Videoicon.png";
// import Heroimg from "../../assets/Heroimg.png";

import Formsimg from "../../assets/Formsimg.png";
import Speechimg from "../../assets/Speechimg.png";
import Supportimg from "../../assets/Supportimg.png";

const Index = (props) => {
  return (
    <>
      <HomeHeader2
        id={props.match.params.id}
        token={props.match.params.token}
        header="2"
      />
      <Hero2
        srcImg3={FindStar}
        // srcImg={Heroimg}
        // h2text="Matching.Echange.Recrutement"
        // btn="Créer mon profil étudiant"
      />
      <Accompagnement />
      <Booste
        srcImg={Boostimg}
        text="How It Works"
        text2="Le Matching parfait"
        text3="Lam suscipit felis sit amet convallis condimentum nterdum et malesuada fames ac ante ipsum primis in faucibus vestibulum eget augue consectetu"
      />
      <Perfect
        srcImg={Boostimg2}
        text="Place a l’echange"
        text2="Lam suscipit felis sit amet convallis condimentum nterdum et malesuada fames ac ante ipsum primis in faucibus vestibulum eget augue consectetu"
      />
      <Place
        srcImg={Boostimg3}
        text="Recrute(e) !"
        text2="Lam suscipit felis sit amet convallis condimentum nterdum et malesuada fames ac ante ipsum primis in faucibus vestibulum eget augue consectetu "
      />
      <Recruited
        srcImg={Boostimg4}
        heading="Booste ton apprentissage avec Winaa"
        text="Une entreprise en fonction de ton profil"
        text2="Dusce varius justo et scelerisque varius usce varius justo et scelerisque varius sce varius justo et scelerisque varius."
      />
      <Specialized srcImg={Formsimg} srcImg2={Speechimg} srcImg3={Supportimg} />
      <Simplified
      // heading=" Simplifie-toi la vie, télécharge l’application Winaa"
      // text=" Tu peux matcher , swiper à n’importe quel moment de la journée.
      //       Wina sauvegarde toutes tes progressions et tes suivis journaliers."
      />
      <Footer />
    </>
  );
};

export default Index;
