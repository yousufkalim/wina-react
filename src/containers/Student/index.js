import React from "react";
import "../../components/Cfa/Style.css";
import HomeHeader from "../../components/Header/header";
import Application from "../../components/Student/Application";
import Pack from "../../components/Student/Pack";
import Footer from "../../components/Footer";

const index = () => {
  return (
    <>
      <HomeHeader />
      <Application />
      <Pack />
      <Footer />
    </>
  );
};

export default index;
