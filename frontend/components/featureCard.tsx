const FeatureCard: React.FC = () => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white m-4">
      <div className="flex flex-col min-h-full">
        <div className="px-6 py-4 border-b">
          <div className="text-xl text-center">Feature Card</div>
        </div>
        <div className="px-6 py-10 flex-grow">
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <div className="flex-none bg-white rounded-b rounded-t-none overflow-hidden shadow">
          <div className="mx-auto pb-8 px-12">
            <button className="w-full lg:mx-0 hover:underline gradient-radial text-white font-bold rounded-full py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
              Action
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
