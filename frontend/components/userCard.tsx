interface UserData {
  user: {
    first_name: string;
    last_name: string;
    phone: string;
    email: string;
    uid: string;
  };
}

const UserCard = (props: UserData) => {
  const { first_name, last_name, phone, email, uid } = props.user;
  console.log(props);

  return (
    <div className=" max-w-md mx-auto overflow-hidden bg-examiner-50 rounded-lg shadow-lg dark:bg-gray-800 p-4">
      <img
        className="object-cover object-center w-full h-56"
        src="https://i.pravatar.cc/350?img=7"
        alt="avatar"
      />

      {/* <div className="flex items-center px-6 py-3 bg-gray-900">
        <svg
          className="w-6 h-6 text-white fill-current"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M17 21C15.8954 21 15 20.1046 15 19V15C15 13.8954 15.8954 13 17 13H19V12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12V13H7C8.10457 13 9 13.8954 9 15V19C9 20.1046 8.10457 21 7 21H3V12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12V21H17ZM19 15H17V19H19V15ZM7 15H5V19H7V15Z"
          />
        </svg>

        <h1 className="mx-3 text-lg font-semibold text-white">Focusing</h1>
      </div> */}

      <div className="px-6 py-4">
        <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
          {first_name || "First Name"} {last_name || "Last Name"}
        </h1>

        <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
          <div className="w-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
          </div>

          <h1 className="px-2 text-sm">{email || "Email"}</h1>
        </div>

        <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
          <div className="w-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                width="24px"
                d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
              />
            </svg>
          </div>
          <h1 className="px-2 text-sm">{phone || "Phone"}</h1>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
