import React from "react";
import HomeHeader from "../../components/Header/header";
import Hero from "../../components/LandingPage/Hero";
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

const Index = () => {
  return (
    <>
      <HomeHeader />
      <Hero />
      <Booste
        srcImg={Boostimg}
        text="Booste ton alternance avec Winaa"
        text2=" Une entreprise en fonction de ton profil"
      />
      <Perfect srcImg={Boostimg2} />
      <Place srcImg={Boostimg3} />
      <Recruited srcImg={Boostimg4} />
      <Specialized />
      <Simplified />
      <Footer />
    </>
  );
};

export default Index;
