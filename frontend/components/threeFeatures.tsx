import TitleBar from "./titleBar";
import FeatureCard from "./featureCard";

const ThreeFeatures = () => {
  return (
    <section className="bg-gray-200 border-b py-8">
      <div className="container mx-auto flex flex-wrap">
        <TitleBar>What Makes Us Different?</TitleBar>
        <div className="mx-auto w-full md:w-1/3 flex flex-col flex-grow flex-shrink">
          <a
            href="#"
            className="mx-auto flex flex-wrap no-underline hover:no-underline"
          >
            <FeatureCard />
          </a>
        </div>
        <div className="mx-auto w-full md:w-1/3 flex flex-col flex-grow flex-shrink">
          <a
            href="#"
            className="mx-auto flex flex-wrap no-underline hover:no-underline"
          >
            <FeatureCard />
          </a>
        </div>
        <div className="mx-auto w-full md:w-1/3 flex flex-col flex-grow flex-shrink">
          <a
            href="#"
            className="mx-auto flex flex-wrap no-underline hover:no-underline"
          >
            <FeatureCard />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ThreeFeatures;
