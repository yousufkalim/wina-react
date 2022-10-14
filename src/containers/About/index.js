import React from "react";
import HomeHeader2 from "../../components/Header";
import Winaa2 from "../../components/Regards/Winaa2";
// import Aboutimg from "../../assets/Aboutimg.svg";
import Created from "../../components/About/Created";
import AboutText from "../../components/About/AboutText";
import Footer from "../../components/Footer";

const index = (props) => {
  return (
    <div>
      <HomeHeader2 id={props.match.params.id} token={props.match.params.token} header="2" />
      <Winaa2
        heading="L’équipe Winaa"
        // img={Aboutimg}
        text3="En 2019, Sarah et Marie se sont rencontrées sur les bancs d’une célèbre école de vente. Elles ont toutes les deux effectué leurs études supérieures en alternance, elles se sont rendu compte que cette voie allait, en France,devenir celle de l’excellence. Elles ont pu constater d’une part la difficulté pour des jeunes à trouver une alternance et d'autre part, celle des entreprises à trouver un(e) apprenti(e) motivé(e) et rapidement opérationnel(le). Enfin, aucune entreprise n'avait encore choisi de se positionner de façon spécialisée sur le marché de l’apprentissage. Travaillant dans ce secteur, Marie décide également d'intégrer Jean-Yves, professionnel de l’alternance depuis"
      />
      <Created />
      <AboutText />
      <Footer />
    </div>
  );
};

export default index;
