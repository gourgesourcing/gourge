import React from "react";
import Hero from "./Hero";
import About from "./About";
import Testimonial from "./Testimonial";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Home = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Gourge Sourcing</title>
        </Helmet>
        <Hero />
        <About />
        <Testimonial />
      </HelmetProvider>
    </>
  );
};

export default Home;
