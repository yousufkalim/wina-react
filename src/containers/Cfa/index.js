import React from "react";
import HomeHeader from "../../components/Header/header";
import Hero from "../../components/LandingPage/Hero";
import Cfaimg from "../../assets/Cfaimg.png";
import Together from "../../components/Cfa/Together";
import Animation from "../../components/Cfa/Animation";
import Form from "../../components/Cfa/Form";
import Footer from "../../components/Footer";

const index = () => {
  return (
    <>
      <HomeHeader />
      <Hero
        srcImg={Cfaimg}
        h2text="Optimisez L’accompagnement des alternants"
        btn="Contactez-nous"
      />
      <Together />
      <Animation />
      <Form />
      <Footer />
    </>
  );
};

export default index;
