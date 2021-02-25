import React from "react";
import { ReactNode } from "react";
import Hero from "../components/hero";
import ThreeFeatures from "../components/threeFeatures";
import AlternatingFeatures from "../components/alternatingFeatures";
import CallToAction from "../components/callToAction";
import { DefaultSeo } from "next-seo";

// import your default seo configuration
import SEO from "../next-seo.config";

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
