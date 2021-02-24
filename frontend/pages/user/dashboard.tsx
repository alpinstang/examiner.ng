import { useAuth } from "../../hooks/useAuth";

const DashBoardPage: React.FC = () => {
  const auth = useAuth();
  if (!auth.user) return null;
  return (
    <>
      <div className="container mx-auto">
        <div className="w-full">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            {`Welcome ${auth.user.first_name}!`}
          </h2>
          {`You are logged in with ${auth.user.email}`}
        </div>
        <div className="w-1/5"></div>
        <div className="w-4/5">
          <div className="flex flex-wrap overflow-hidden md:-mx-2">
            <div className="w-full overflow-hidden md:my-2 md:px-2 md:w-1/2"></div>

            <div className="w-full overflow-hidden md:my-2 md:px-2 md:w-1/2"></div>

            <div className="w-full overflow-hidden md:my-2 md:px-2 md:w-1/2"></div>

            <div className="w-full overflow-hidden md:my-2 md:px-2 md:w-1/2"></div>
          </div>
        </div>
        <div className="w-full"></div>
      </div>
    </>
  );
};

export default DashBoardPage;
