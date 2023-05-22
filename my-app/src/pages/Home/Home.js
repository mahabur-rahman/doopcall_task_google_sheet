import React from "react";
// components
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import Guide from "../../components/Guide/Guide";
import CarrierWith from "../../components/CarrierWith/CarrierWith";
import LiveCourse from "../../components/LiveCourse/LiveCourse";
import Work from "../../components/Works/Works";
import Resource from "../../components/Resource/Resource";
import Community from "../../components/Community/Community";
import Industry from "../../components/Industry/Industry";
import TrastCompany from "../../components/TrustCompany/TrastCompany";
import ReadMore from "../../components/ReadMore/ReadMore";
import Footer from "../../components/Footer/Footer";
import Contact from "../../components/Contact/Contact";

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <Guide />
      <Resource />
      <Community />
      <TrastCompany />
      <ReadMore />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
