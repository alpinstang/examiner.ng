import React from "react";

const CallToAction: React.FC = () => {
  // const getForm = () => {
  //   console.log("onSubmit");
  // };

  return (
    <div className="gradient shadow-lg">
      <section className="container flex flex-wrap mx-auto text-center py-6 pt-8">
        <div className="text-white w-auto px-2">
          <h3 className="float-none md:float-right md:pr-4 my-4 text-xl md:text-3xl font-bold text-gray-100 leading-tight">
            Sign up today and get free exam credits!
          </h3>
        </div>
        <div className="text-white md:w-1/4 w-auto my-2 px-2">
          <input
            type="text"
            placeholder="EMAIL"
            className="text-white p-2 w-full rounded-lg"
          />
        </div>
        <div className="text-white w-full md:w-1/4 my-2 md:pl-4">
          <button className="mx-auto w-full hover:bg-brightblue hover:text-white bg-white text-gray-800 font-bold rounded-full py-2 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
            <span>Join for free!</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default CallToAction;
