import React from "react";
import HomeHeader from "../../components/Header/header";
import Application from "../../components/Student/Application";
import Pack from "../../components/Student/Pack";
import Footer from "../../components/Footer";
const index = () => {
  return (
    <div>
      <HomeHeader />
      <Application btnT="Annuel" />
      <Pack />
      <Footer />
    </div>
  );
};

export default index;
