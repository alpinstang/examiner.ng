import ProductCard from "./productCard";

const ProductGrid: React.FC = () => {
  return (
    <div className="bg-gray-100">
      <div className="container max-w-7xl mx-auto py-12">
        <div className="flex flex-wrap overflow-hidden items-center justify-items-center">
          <div className="my-2 px-2 overflow-hidden w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
            <ProductCard />
          </div>

          <div className="my-2 px-2 overflow-hidden w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
            <ProductCard />
          </div>

          <div className="my-2 px-2 overflow-hidden w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
            <ProductCard />
          </div>

          <div className="my-2 px-2 overflow-hidden w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
            <ProductCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
