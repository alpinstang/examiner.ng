import React from "react";
import Lottie from "react-lottie";
import animationData from "../assets/lotties/urban-landscape.json";
import ContactForm from "../components/contactForm";

const About: React.FC = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    renderOptions: {
      preserveAspectRatio: true,
    },
  };

  return (
    <>
      <div className="h-full border-gray-600 border-b">
        <div className="relative h-full mb-2 lg:mb-12 xl:mb-44">
          <div className="absolute -mt-10 md:-mt-40 top-0 w-full z-0">
            <Lottie options={defaultOptions} />
          </div>
          <div className="relative z-40 my-auto pt-48 md:pt-24 pb-12">
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
