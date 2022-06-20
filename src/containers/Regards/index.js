import React from "react";
import HomeHeader2 from "../../components/Header";
import Winaa from "../../components/Regards/Winaa";
import Services from "../../components/Regards/Services";
import Contract from "../../components/Regards/Contract";
import Footer from "../../components/Footer";
import LogoWina2 from "../../assets/LogoWina2.svg";

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
        img={LogoWina2}
        text6="placement des
        jeunes en entreprise."
        text5="collaboration avec les CFA afin de réaliser
        un véritable accompagnement lors du processus de"
        text4="d’apprenti(e)s pertinent(e)s selon les besoins émis sur
        les postes recherchés. Notre atout ? notre "
        text3="correspondants à leur profil. Nous aidons également les entreprises à cibler rapidement des
                profils "
        text2="faciliter les
                étudiants dans leur recherche d’alternance en les aidant à
                trouver les entreprises "
        text="Winaa est un site de matching mettant en relation entreprises et
                alternant(e)s. Notre ambition est de
               "
      />
      <Services />
      <Contract ServicesBorder={true} />
      <Footer />
    </>
  );
};

export default index;
