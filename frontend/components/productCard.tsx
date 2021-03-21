const ProductCard: React.FC = () => {
  return (
    <>
      <div className="max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 border-gray-400 border-2 border-opacity-50">
        <div className="px-4 py-2">
          <h1 className="text-3xl font-bold text-gray-800 uppercase dark:text-white">
            Flash Cards
          </h1>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
            BECE Study Cards - These cards will provide you with example
            questions and answers from real exams. Use them to study easily
            anywhere and pass the BECE.
          </p>
        </div>

        <img
          className="object-cover w-full h-48 mt-2"
          src="/static/bece-card.png"
          alt="Flash Cards for BECE Exam"
        />

        <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
          <h1 className="text-lg font-bold text-white">$2.50</h1>
          <button className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-200 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
