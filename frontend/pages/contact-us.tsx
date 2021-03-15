import { NextSeo } from "next-seo";
import React from "react";
import Lottie from "react-lottie";
import animationData from "../assets/lotties/urban-landscape.json";
import CallToAction from "../components/callToAction";
import ContactForm from "../components/contactForm";

const Contact: React.FC = () => {
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
      <NextSeo
        title="Contact Us"
        description="Examiner.NG is a Nigerian Exam Preparation Company."
      />
      <div className="absolute -mt-96 md:-mt-40 top-0 w-full z-0 inset-0">
        <Lottie options={defaultOptions} />
      </div>
      <div className="h-full border-gray-600 border-b">
        <div className="relative h-full mb-2 md:mb-0 lg:mb-6 xl:mb-12">
          <div className="relative z-40 pt-48 md:pt-24 pb-12 md:pb-0">
            <ContactForm />
          </div>
        </div>
      </div>
      <CallToAction />
    </>
  );
};

export default Contact;
