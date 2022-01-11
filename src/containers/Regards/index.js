import React from "react";
import HomeHeader2 from "../../components/Header";
import Winaa from "../../components/Regards/Winaa";
import Services from "../../components/Regards/Services";
import Contract from "../../components/Regards/Contract";
import Footer from "../../components/Footer";
import LogoWina from "../../assets/LogoWina.png";

const index = (props) => {
  return (
    <>
      <HomeHeader2
        id={props.match.params.id}
        token={props.match.params.token}
        header="2"
      />
      <Winaa
        heading="Winaa, booster d’alternance"
        img={LogoWina}
        text4=" Notre atout ? notre collaboration avec les CFA afin de réaliser
                un véritable accompagnement lors du processus de placement des
                jeunes en entreprise."
        text3=" Nous aidons également les entreprises à cibler rapidement des
                profils d’apprenti(e)s pertinent(e)s selon les besoins émis sur
                les postes recherchés."
        text2="Notre ambition est de faciliter les
                étudiants dans leur recherche d’alternance en les aidant à
                trouver les entreprises correspondants à leur profil."
        text=" Winaa est un site de matching mettant en relation entreprises et
                alternant(e)s.
               "
      />
      <Services />
      <Contract ServicesBorder={true} />
      <Footer />
    </>
  );
};

export default index;
