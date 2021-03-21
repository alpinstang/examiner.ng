import { NextSeo } from "next-seo";
import React from "react";
import Lottie from "react-lottie";
import animationData from "../assets/lotties/work-server.json";
import animationData2 from "../assets/lotties/rocket.json";

import CallToAction from "../components/callToAction";
import TitleBar from "../components/titleBar";

const About: React.FC = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    renderOptions: {
      preserveAspectRatio: true,
    },
  };
  const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData: animationData2,
    renderOptions: {
      preserveAspectRatio: true,
    },
  };

  return (
    <>
      <NextSeo
        title="About Examiner"
        description="Examiner.NG is a Nigerian Exam Preparation Company."
      />
      <div className="container prose dark:prose-light my-12 mx-auto max-w-5xl h-full ">
        <TitleBar>Our Company Story</TitleBar>
        <div className="flex divide-x-8 divide-transparent h-full my-4">
          <div className="w-1/2 p-8">
            {" "}
            <Lottie options={defaultOptions} />
          </div>
          <div className="w-1/2 p-8">
            <h1>Examiner Values</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut
              vehicula velit. <b>Lorem ipsum</b> dolor sit amet, consectetur
              adipiscing elit. Nulla nec odio posuere, bibendum massa ac,
              ultricies augue. Nulla ultricies est quis nulla ultricies, vel
              fringilla diam ultricies.
            </p>
            <p>
              <i>Always moving forward.</i>
            </p>
          </div>
        </div>
        <div className="flex divide-x-8 divide-transparent h-full my-4">
          <div className="w-1/2 p-8">
            <h1>Some Text</h1>
            <p>
              Curabitur augue erat, molestie non elementum vel, blandit nec
              massa. Nam quis posuere quam, ut bibendum leo. In condimentum
              interdum orci at ultricies.
            </p>
            <p>
              Aenean id pharetra sem, eget tempus dui. Curabitur enim risus,
              volutpat vitae eros at, blandit elementum mi. Donec eu pulvinar
              tortor. Nam molestie, dolor non vestibulum laoreet, nunc nisl
              pharetra risus.
            </p>
          </div>
          <div className="w-1/2 p-8">
            <Lottie options={defaultOptions2} />
          </div>
        </div>
      </div>
      <CallToAction />
    </>
  );
};

export default About;
