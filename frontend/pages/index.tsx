import React from "react";
import { ReactNode } from "react";
import Hero from "../components/hero";
import ThreeFeatures from "../components/threeFeatures";
import AlternatingFeatures from "../components/alternatingFeatures";
import CallToAction from "../components/callToAction";

const Home: ReactNode = () => {
  return (
    <>
      <Hero />
      <AlternatingFeatures />
      <ThreeFeatures />
      <CallToAction />
    </>
  );
};

export default Home;
