import React from "react";
import HomeHeader2 from "../../components/Header";
import Hero2 from "../../components/LandingPage/Hero2";
import Booste from "../../components/LandingPage/Booste";
import Perfect from "../../components/LandingPage/Perfect";
import Place from "../../components/LandingPage/Place";
import Recruited from "../../components/LandingPage/Recruited";
import Specialized from "../../components/LandingPage/Specialized";
import Simplified from "../../components/LandingPage/Simplified";
import Footer from "../../components/Footer";
import Boostimg from "../../assets/Boostimg.png";
import Boostimg2 from "../../assets/Boostimg2.png";
import Boostimg3 from "../../assets/Boostimg3.png";
import Boostimg4 from "../../assets/Boostimg4.png";
import Videoicon from "../../assets/Videoicon.png";
import Heroimg from "../../assets/Heroimg.png";

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
        srcImg3={Videoicon}
        // srcImg={Heroimg}
        h2text="Matching.Echange.Recrutement"
        btn="Créer mon profil étudiant"
      />
      <Booste
        srcImg={Boostimg}
        text="Booste ton alternance avec Winaa"
        text2=" Une entreprise en fonction de ton profil"
        text3=" Trouver l’entreprise idéale n’a jamais été une mince affaire.
                Mais aujourd’hui, nous avons trouvé la solution qui te
                correspond."
        text4="
                Pour t’aider dans tes recherches, Winaa te sélectionne les
                entreprises en fonction de ton profil."
      />
      <Perfect
        srcImg={Boostimg2}
        text="Le Matching parfait"
        text2="Nous mettons à ta disposition une application fun et intuitive
                te permettant de matcher avec l’entreprise de ton choix. Rien de
                plus facile : il suffit de créer un CV personnalisé et notre
                algorithme se chargera du reste en sélectionnant les entreprises
                susceptibles de t’intéresser. Swipe et match !"
      />
      <Place
        srcImg={Boostimg3}
        text="Place à l’échange"
        text2=" Une fois le matching envoyé, il te suffit d’attendre la réponse
                de l’entreprise. Après validation de ton profil, l’entreprise
                revient vers toi pour mettre en place le processus de
                recrutement. "
        text3=" Une fois le matching envoyé, il te suffit d’attendre la réponse
                de l’entreprise. Après validation de ton profil, l’entreprise
                revient vers toi pour mettre en place le processus de
                recrutement."
        text4=" Qui dit échange, dit entretien ! "
        text5=" Pas
                de panique, Winaa te propose un coaching personnalisé juste
                avant ton entretien."
      />
      <Recruited
        srcImg={Boostimg4}
        text="Recruté(e)!"
        text2="Félicitations! Tu as réussi à ton entretien. Il ne reste plus
                qu’à signer ton contrat d’apprentissage."
      />
      <Specialized srcImg={Formsimg} srcImg2={Speechimg} srcImg3={Supportimg} />
      <Simplified />
      <Footer />
    </>
  );
};

export default Index;
