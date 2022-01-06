import React from "react";
import HomeHeader2 from "../../components/Header/header2";
import Winaa from "../../components/Regards/Winaa";
import Aboutimg from "../../assets/Aboutimg.png";
import Created from "../../components/About/Created";
import AboutText from "../../components/About/AboutText";
import Footer from "../../components/Footer";

const index = () => {
  return (
    <div>
      <HomeHeader2 />
      <Winaa
        img={Aboutimg}
        text3="Travaillant dans ce secteur, Marie décide également d'intégrer Jean-Yves, professionnel de l’alternance depuis plus de 5 ans qui avait aussi pour ambition de contribuer à la croissance des formations en apprentissage."
        text2="Elles ont pu constater d’une part la difficulté pour des jeunes à trouver une alternance et d'autre part, celle des entreprises à trouver un(e) apprenti(e) motivé(e) et rapidement opérationnel(le). Enfin, aucune entreprise n'avait encore choisi de se positionner de façon spécialisée sur le marché de l’apprentissage.
"
        text=" En 2019, Sarah et Marie se sont rencontrées sur les bancs d’une célèbre école de vente. Elles ont toutes les deux effectué leurs études supérieures en alternance, elles se sont rendu compte que cette voie allait, en France,devenir celle de l’excellence.
               "
      />
      <Created />
      <AboutText />
      <Footer />
    </div>
  );
};

export default index;
