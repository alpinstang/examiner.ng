import TitleBar from "./titleBar";
import { TestingSVG } from "./svg/testing.svg";
import { GraphSVG } from "./svg/graph.svg";

const AlternatingFeatures: React.FC = () => {
  return (
    <section className="bg-white border-b pt-8 pb-8">
      <div className="container max-w-5xl mx-auto m-8">
        <TitleBar>Examinations Done Correctly</TitleBar>
        <div className="flex flex-wrap">
          <div className="w-5/6 sm:w-1/2 p-6">
            <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
              Lorem ipsum dolor sit amet
            </h3>
            <p className="text-gray-600 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              at ipsum eu nunc commodo posuere et sit amet ligula.
            </p>
          </div>
          <div className="w-full sm:w-1/2 p-6">
            <div className="max-w-lg">
              <TestingSVG />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap flex-col-reverse sm:flex-row">
          <div className="w-full sm:w-1/2 p-6 mt-6">
            <div className="max-w-lg">
              <GraphSVG />
            </div>
          </div>
          <div className="w-full sm:w-1/2 p-6 mt-6">
            <div className="align-middle">
              <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                Lorem ipsum dolor sit amet
              </h3>
              <p className="text-gray-600 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                at ipsum eu nunc commodo posuere et sit amet ligula.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlternatingFeatures;
