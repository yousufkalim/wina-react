import React from "react";
import HomeHeader2 from "../../components/Header";
import Hero2 from "../../components/LandingPage/Hero2";
import Booste from "../../components/LandingPage/Booste";
import Perfect from "../../components/LandingPage/Perfect";
import Place from "../../components/LandingPage/Place";
import Recruited from "../../components/LandingPage/Recruited";
import Specialized from "../../components/LandingPage/Specialized";
import Simplified from "../../components/LandingPage/Simplified";
import Accompagnement2 from "../../components/LandingPage/Accompagnement2";
import Footer from "../../components/Footer";
import FindStar from "../../assets/FindStar.svg";
import Boostimg from "../../assets/Boostimg.jpg";
import Boostimg2 from "../../assets/Boostimg2.jpg";
import Boostimg3 from "../../assets/Boostimg3.jpg";
import Boostimg4 from "../../assets/Boostimg4.svg";
import Formsimg from "../../assets/Formsimg.png";
import Speechimg from "../../assets/Speechimg.png";
import Supportimg from "../../assets/Supportimg.png";
const Index = (props) => {
  return (
    <>
      <HomeHeader2 id={props.match.params.id} token={props.match.params.token} header="2" />
      <Hero2 srcImg3={FindStar} />
      <Accompagnement2 />
      <Booste
        srcImg={Boostimg}
        text="Comment ça marche ?"
        text2="Le Matching parfait"
        text3="Nous mettons à ta disposition une application fun et intuitive te permettant de matcher avec l’entreprise de ton choix. Rien de plus facile : il suffit de créer un CV personnalisé. Notre algorithme se chargera su reste en sélectionnant  les entreprises succeptibles de t’interesser. Swipe et Matche !"
      />
      <Perfect
        srcImg={Boostimg2}
        text="Place a l’echange"
        text2="Une fois le matching envoyé, il te suffit d’attendre la réponse de l’entreprise. Après validation de ton profil, l’entreprise revient vers toi pour mettre en place le processus de recrutement. 
        Qui dit échange, dit entretien ! 
        Pas de panique, Winaa te propose un coaching personnalisé juste avant ton entretien"
      />
      <Place
        srcImg={Boostimg3}
        text="Recrute(e) !"
        text2="
        Félcitations ! Tu as  réussi à ton entretien. Il ne reste plus qu’à signer le contrat d’apprentisaage .
        "
      />
      <Recruited
        srcImg={Boostimg4}
        heading="Booste ton apprentissage avec Winaa"
        text="Une entreprise en fonction de ton profil"
        text2="Trouver l’entreprise idéal n’a jamais été une mince affaire.  Mais aujourd’hui, nous avons trouvé la solution qui te correspond. 
        Pour t’aider dans tes recherches, Winaa te sélectionne les entreprises en fonction de ton profil"
      />
      <Specialized srcImg={Formsimg} srcImg2={Speechimg} srcImg3={Supportimg} />
      <Simplified />
      <Footer />
    </>
  );
};

export default Index;
