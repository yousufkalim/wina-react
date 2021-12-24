import React from "react";
// import Header from "../../components/Header";
import Hero from "../../components/LandingPage/Hero";
import Booste from "../../components/LandingPage/Booste";

const Index = (props) => {
  return (
    <>
      {/* <Header id={props.match.params.id} token={props.match.params.token} /> */}
      <Hero />
      <Booste />
    </>
  );
};

export default Index;
