import { useState } from "react";
import { useAuth } from "../hooks/useAuth";

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
  const auth = useAuth();
  if (!auth.user) return null;

  const { first_name, last_name, phone, email, uid } = props.user;
  console.log(props);

  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState(props.user.phone);

  const handleClick = () => {
    if (editing && value !== phone) {
      let user = props.user;
      user.phone = value;
      console.log(user);
      auth.updateUserData(user);
    }
    setEditing(!editing);
  };

  return (
    <div className=" max-w-md mx-auto overflow-hidden bg-examiner-50 rounded-lg shadow-lg dark:bg-gray-800 p-4">
      <img
        className="object-cover object-center w-full h-56"
        src="https://i.pravatar.cc/350?img=7"
        alt="avatar"
      />

      <div className="px-6 py-4">
        <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">
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

          <h1 className="px-2 text-lg">{email || "Email"}</h1>
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
          {editing ? (
            <input
              onChange={(e) => setValue(e.target.value)}
              value={value}
              type="tel"
              className=" m-0 w-40 border-gray-400 border-2"
            />
          ) : (
            <h1 className="px-2 text-lg">{phone || "Phone"}</h1>
          )}
        </div>
        <div className="mt-6">
          <button
            onClick={handleClick}
            className="float-right px-4 py-2 bg-examiner-400 text-lg font-bold rounded-lg"
          >
            {editing ? "Save" : "Edit"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
