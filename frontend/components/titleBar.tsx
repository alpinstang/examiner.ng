const TitleBar: React.FC = (props) => {
  return (
    <>
      <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
        {props.children}
      </h1>
      <div className="w-full mb-4">
        <div className="h-1 mx-auto bg-examiner-600 w-64 opacity-25 my-0 py-0 rounded-t"></div>
      </div>
    </>
  );
};

export default TitleBar;
