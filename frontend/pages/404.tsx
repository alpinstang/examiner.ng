import { NextSeo } from "next-seo";
import React from "react";
import Lottie from "react-lottie";
import animationData from "../assets/lotties/error-glitch.json";

const NotFound = () => {
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
        title="Not Found"
        description="Examiner online and offline exam preparation."
      />
      <div className="h-screen w-screen bg-gray-200 flex items-center">
        <div className="container flex flex-col md:flex-row mx-auto items-center justify-center px-5 text-gray-700">
          <div className="max-w-md">
            <div className="text-5xl font-dark font-bold">Oops...</div>
            <p className="text-2xl md:text-3xl font-light leading-normal pt-2">
              Sorry we couldn't find this page.{" "}
            </p>
            <p className="mb-8">
              But dont worry, you can find plenty of other things on our
              homepage.
            </p>

            <button className="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-blue-600 active:bg-blue-600 hover:bg-blue-700">
              back to homepage
            </button>
          </div>
          <div className="max-w-xl order-first">
            <Lottie options={defaultOptions} />
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
