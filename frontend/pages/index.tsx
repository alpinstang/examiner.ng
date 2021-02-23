import React from "react";
import { ReactNode } from "react";
import Hero from "../components/hero";
import ThreeFeatures from "../components/threeFeatures";

const Home: ReactNode = () => {
  return (
    <>
      <Hero />
      <ThreeFeatures />
    </>
  );
};

export default Home;
