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

const Index = (props) => {
  return (
    <>
      <HomeHeader />
      <Hero />
      <Booste />
      <Perfect />
      <Place />
      <Recruited />
      <Specialized />
      <Simplified />
      <Footer />
    </>
  );
};

export default Index;
