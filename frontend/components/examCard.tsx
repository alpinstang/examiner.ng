import React from "react";
import { truncateString } from "../lib/truncateString";

interface ExamData {
  name: string;
  description: string;
  added_on: string;
  id: string;
}

const ExamCard = ({ name, description, added_on, id }: ExamData) => {
  return (
    <>
      <div className="md:flex md:w-1/2 lg:w-1/3 px-2 py-2">
        <div className="md:flex-1 p-4 rounded bg-white ">
          <div className="relative py-3 h-full w-full min-h-48 sm:max-w-xl sm:mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-examiner-400 via-green-400 to-examiner-500 shadow-lg transform -skew-y-2 sm:skew-y-0 sm:-rotate-2 sm:rounded-lg"></div>
            <div className="relative h-full px-4 py-10 bg-white shadow-lg sm:rounded-lg sm:p-4 border-2 border-examiner-300 bg-gray-100">
              <div className="max-w-md mx-auto">
                <div></div>
                <div className="divide-y divide-gray-200">
                  <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                    <h3>{name}</h3>
                    <p>{truncateString(description, 80)}</p>
                    <ul className="list-disc space-y-2 ml-1 mr-4">
                      <li className="flex items-start">
                        <div className="w-1/6">
                          <span className="h-6 flex items-center-left sm:h-7">
                            <svg
                              className="flex-shrink-0 h-5 w-5 text-cyan-500"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clip-rule="evenodd"
                              />
                            </svg>
                          </span>
                        </div>
                        <div className="w-3/6 text-center">Number of Years</div>
                        <div className="w-2/6">
                          <span className="float-right">3</span>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="w-1/6">
                          <span className="h-6 flex items-center-left sm:h-7">
                            <svg
                              className="flex-shrink-0 h-5 w-5 text-cyan-500"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clip-rule="evenodd"
                              />
                            </svg>
                          </span>
                        </div>
                        <div className="w-3/6 text-center">Total Subjects</div>
                        <div className="w-2/6">
                          <span className="float-right">16</span>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="w-1/6">
                          <span className="h-6 flex items-center-left sm:h-7">
                            <svg
                              className="flex-shrink-0 h-5 w-5 text-cyan-500"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clip-rule="evenodd"
                              />
                            </svg>
                          </span>
                        </div>
                        <div className="w-3/6 text-center">Total Attempts</div>
                        <div className="w-2/6">
                          <span className="float-right">1231241</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExamCard;
