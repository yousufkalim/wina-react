import React from "react";
import HomeHeader from "../../components/Header/header";
import Hero from "../../components/LandingPage/Hero";
import Cfaimg from "../../assets/Cfaimg.png";

const index = () => {
  return (
    <>
      <HomeHeader />
      <Hero
        srcImg={Cfaimg}
        h2text="Optimisez L’accompagnement des alternants"
        btn="Contactez-nous"
      />
    </>
  );
};

export default index;
