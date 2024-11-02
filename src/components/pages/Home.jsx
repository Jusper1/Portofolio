import React from "react";
import LoaderHome from "../LoaderHome/LoaderHome";
import Hero from "../hero/Hero";
import About from "../about/About";
import Navbar from "../navbar/Navbar";
import Work from "../work/Work";
import Service from "../service/Service";
import Footer from "../footer/Footer";

const Home = () => {
  return (
    <div>
      <LoaderHome />
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Service />
      <Footer />
    </div>
  );
};

export default Home;
