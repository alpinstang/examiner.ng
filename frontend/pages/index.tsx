import React from "react";
import { ReactNode } from "react";
import Hero from "../components/hero";
import ThreeFeatures from "../components/threeFeatures";
import AlternatingFeatures from "../components/alternatingFeatures";
import CallToAction from "../components/callToAction";
import { NextSeo } from "next-seo";
import PricingTable from "../components/pricingTable";

// import your default seo configuration

const Home: ReactNode = () => {
  return (
    <>
      <NextSeo
        title="Free Exam Prep"
        description="Examiner offers free exam prep credits when you sign up."
      />
      <Hero />
      <AlternatingFeatures />
      <ThreeFeatures />
      <PricingTable />
      <CallToAction />
    </>
  );
};

export default Home;
