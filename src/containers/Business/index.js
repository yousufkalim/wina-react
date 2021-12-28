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
import Heroimg from "../../assets/Heroimg.png";
import BusImg1 from "../../assets/BusImg1.png";
import BusImg2 from "../../assets/BusImg2.png";
import BusImg3 from "../../assets/BusImg3.png";
import BusImg4 from "../../assets/BusImg4.png";

const Index = () => {
  return (
    <>
      <HomeHeader />
      <Hero srcImg={Heroimg} />
      <Booste
        srcImg={BusImg1}
        text="Facilitez votre recrutement avec Winaa"
        text2=" Des profils adaptés à vos recherches "
      />
      <Perfect srcImg={BusImg2} />
      <Place srcImg={BusImg3} />
      <Recruited srcImg={BusImg4} />
      <Specialized />
      <Simplified />
      <Footer />
    </>
  );
};

export default Index;
