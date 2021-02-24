import TitleBar from "./titleBar";
import FeatureCard from "./featureCard";

const ThreeFeatures = () => {
  return (
    <section className="bg-gray-200 border-b py-8">
      <div className="container mx-auto flex flex-wrap">
        <TitleBar>What Makes Us Different?</TitleBar>
        <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
          <a
            href="#"
            className="flex flex-wrap no-underline hover:no-underline"
          >
            <FeatureCard />
          </a>
        </div>
        <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
          <a
            href="#"
            className="flex flex-wrap no-underline hover:no-underline"
          >
            <FeatureCard />
          </a>
        </div>
        <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
          <a
            href="#"
            className="flex flex-wrap no-underline hover:no-underline"
          >
            <FeatureCard />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ThreeFeatures;
