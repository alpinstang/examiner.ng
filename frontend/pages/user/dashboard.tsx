import React from "react";
import { useAuth } from "../../hooks/useAuth";
import UserCard from "../../components/userCard";
import Link from "next/link";

const DashBoardPage: React.FC = () => {
  const auth = useAuth();
  if (!auth.user) return null;
  return (
    <>
      <div className="container mx-auto">
        <div className="w-full">
          <h2 className="my-6 text-center text-3xl font-bold text-gray-900">
            {`Welcome ${auth.user.first_name}!`}
          </h2>
        </div>
        <div className="flex flex-wrap align-top overflow-hidden h-full">
          <div className="flex flex-col md:w-2/5 my-2 px-2 h-full">
            <UserCard user={auth.user} />
          </div>
          <div className="flex flex-col md:w-3/5 mx-auto my-2 px-2 h-full rounded-lg shadow-lg">
            <div className="text-center bg-gray-100 h-full">
              <h2 className="text-3xl">Exams</h2>
              <p>You have no exams in your list.</p>
              <div className="underline bg-examiner-500 border-2 p-4 m-8 text-white">
                <Link href="/exams-list">
                  <a>Add an Exam</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full"></div>
      </div>
    </>
  );
};

export default DashBoardPage;
