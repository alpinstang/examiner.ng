const CallToAction: React.FC = () => {
  return (
    <div className="gradient-in-out shadow-lg">
      <section className="container mx-auto text-center py-6 mb-12">
        <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-white">
          Start Your Success Now
        </h1>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <h3 className="my-4 text-3xl font-bold text-gray-100 leading-tight">
          Sign up today and get free exam credits!
        </h3>
        <button className="mx-auto lg:mx-0 hover:bg-examiner-50 bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
          Sign Up for <span className="underline">Free</span>
        </button>
      </section>
    </div>
  );
};

export default CallToAction;
