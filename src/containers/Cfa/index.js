import React from "react";
import HomeHeader2 from "../../components/Header";
import Hero3 from "../../components/LandingPage/Hero3";
import Cfaimg from "../../assets/Cfaimg.png";
import Together from "../../components/Cfa/Together";
import Animation from "../../components/Cfa/Animation";
import Form from "../../components/Cfa/Form";
import Footer from "../../components/Footer";

const index = (props) => {
  return (
    <>
      <HomeHeader2
        id={props.match.params.id}
        token={props.match.params.token}
        header="2"
      />
      <Hero3
        srcImg={Cfaimg}
        h2text="Optimisez L’accompagnement des alternants"
        btns="Contactez-nous"
        showBorderS={true}
      />
      <Together />
      <Animation />
      <Form />
      <Footer />
    </>
  );
};

export default index;
