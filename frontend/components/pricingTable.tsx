import React from "react";
import TitleBar from "./titleBar";

const PricingTable = () => {
  return (
    <>
      <div className="container flex flex-wrap pt-4 pb-10 m-auto mt-6 md:mt-15 lg:px-12 xl:px-16">
        <div className="w-full px-0 lg:px-4">
          <TitleBar>
            <span className="text-3xl lg:text-5xl">Choose Your Plan</span>
          </TitleBar>
          <p className="py-1 text-sm text-center text-blue-700 mb-10">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
          <div className="flex flex-wrap items-center justify-center py-4 pt-0">
            <div className="w-full p-4 md:w-1/2 lg:w-1/4 plan-card">
              <label className="flex flex-col rounded-lg shadow-lg group relative hover:bg-blue-500 cursor-pointer hover:shadow-2xl">
                <div className="w-full px-4 py-6 rounded-t-lg card-section-1">
                  <h3 className="mx-auto text-base font-semibold text-center underline text-blue-500 group-hover:text-white">
                    Free
                  </h3>
                  <p className="text-5xl font-bold text-center group-hover:text-white text-blue-500">
                    $0.<span className="text-3xl">00</span>
                  </p>
                  <p className="text-xs text-center uppercase group-hover:text-white text-blue-500">
                    monthly
                  </p>
                  <p className="text-sm text-center uppercase group-hover:text-white text-blue-500">
                    Start for free with 100 credits!
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center w-full h-full py-6 rounded-b-lg bg-blue-500">
                  <p className="text-xl text-white uppercase">Pay-As-You-Go</p>
                  <button className="w-5/6 py-2 mt-2 font-semibold text-center uppercase bg-white border border-transparent rounded text-blue-500">
                    Get Started
                  </button>
                </div>
              </label>
            </div>

            <div className="w-full p-4 md:w-1/2 lg:w-1/4 plan-card">
              <label className="flex flex-col rounded-lg shadow-lg group relative hover:bg-purple-500 cursor-pointer hover:shadow-2xl">
                <div className="w-full px-4 py-6 rounded-t-lg card-section-1">
                  <div className="w-auto absolute rounded-lg shadow-lg bg-gold p-2 -top-7 right-8">
                    <span className="text-sm font-bold text-black">
                      Most Popular
                      <span className="absolute left-0 -bottom-6 text-lg text-gold">
                        ▼
                      </span>
                    </span>
                  </div>
                  <h3 className="mx-auto text-base font-semibold text-center underline text-purple-500 group-hover:text-white">
                    Premium
                  </h3>
                  <p className="text-5xl font-bold text-center group-hover:text-white text-purple-500">
                    $3.<span className="text-3xl">95</span>
                  </p>
                  <p className="text-xs text-center uppercase group-hover:text-white text-purple-500">
                    monthly
                  </p>
                  <p className="text-sm text-center uppercase group-hover:text-white text-purple-500">
                    Get 100 credits and premium access!
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center w-full h-full py-6 rounded-b-lg bg-purple-500">
                  <p className="text-xl text-white">3 Months</p>
                  <button className="w-5/6 py-2 mt-2 font-semibold text-center uppercase bg-white border border-transparent rounded text-blue-500">
                    Save 15%
                  </button>
                </div>
              </label>
            </div>

            <div className="w-full p-4 md:w-1/2 lg:w-1/4 plan-card">
              <label className="flex flex-col rounded-lg shadow-lg group card-group relative hover:bg-blue-500 cursor-pointer hover:shadow-2xl">
                <div className="w-full px-4 py-6 rounded-t-lg card-section-1">
                  <h3 className="mx-auto text-base font-semibold text-center underline text-blue-500 group-hover:text-white">
                    Elite
                  </h3>
                  <p className="text-5xl font-bold text-center group-hover:text-white text-blue-500">
                    $2.<span className="text-3xl">50</span>
                  </p>
                  <p className="text-xs text-center uppercase group-hover:text-white text-blue-500">
                    monthly
                  </p>
                  <p className="text-sm text-center uppercase group-hover:text-white text-blue-500">
                    100 credits, premium access, and save!
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center w-full h-full py-6 rounded-b-lg bg-blue-500">
                  <p className="text-xl text-white">6 months</p>
                  <button className="w-5/6 py-2 mt-2 font-semibold text-center uppercase bg-white border border-transparent rounded text-blue-500">
                    Save 25%
                  </button>
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingTable;
