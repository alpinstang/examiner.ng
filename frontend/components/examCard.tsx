import Link from "next/link";
import React, { useEffect, useState } from "react";
import { firebase } from "../config/firebase";
import { truncateString } from "../lib/truncateString";

// interface ExamData {
//   id: string;
//   name: string;
//   exam_full_name: string;
//   description: string;
//   image: string;
// }

const ExamCard = (props: any) => {
  const { name, description, image, exam_full_name, id } = props;
  const [url, setUrl] = useState("");
  const [newColor, setColor] = useState("");

  const randomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const randomColor = () => {
    let value = randomNumber(1, 6);
    switch (value) {
      case 1:
        return "bright-blue";
      case 2:
        return "bright-green";
      case 3:
        return "bright-red";
      case 4:
        return "bright-purple";
      case 5:
        return "bright-orange";
      case 6:
        return "brightturquoise";
      default:
        return "bright-blue";
    }
    return "bright-green";
  };

  useEffect(() => {
    let color = randomColor();
    const getUrl = async () => {
      let storage = firebase.storage();
      var pathReference = storage.ref(image);
      await pathReference.getDownloadURL().then((url) => {
        setUrl(url);
        setColor(color);
      });
    };

    getUrl();
  }, []);

  return (
    <>
      <div className="w-full">
        <label
          style={{ border: `2px solid ${newColor.replace("bright-", "")}` }}
          aria-label={name + " - " + id}
          className={`flex flex-col h-100 rounded-super shadow-lg group relative cursor-pointer hover:shadow-2xl border border-gray-400`}
        >
          <div
            className="w-full rounded-tl-super rounded-tr-super bg-cover bg-center card-section-1"
            style={{
              height: "200px",
              backgroundImage: `url(${url ? url : "/static/loading.gif"})`,
            }}
          >
            <div
              style={{ height: "200px" }}
              className="w-full rounded-tl-super rounded-tr-super py-6 px-3 bg-gray-100 bg-opacity-20 hover:bg-opacity-80 opacity-0 hover:opacity-100 transition duration-100 ease-in-out"
            >
              <p className="mx-auto text-3xl font-bold text-center underline text-purple-500 group-hover:text-black">
                {name}
              </p>
              <p className="mx-auto text-sm font-bold text-center underline text-purple-500 group-hover:text-black">
                {truncateString(exam_full_name, 50)}
              </p>
              <p className="text-sm font-bold text-center uppercase group-hover:text-black text-purple-500">
                {truncateString(description, 100)}
              </p>
            </div>
          </div>
          <div
            style={{ border: `2px solid ${newColor.replace("bright-", "")}` }}
            className={`flex flex-col items-center justify-center w-full h-full rounded-b-super bg-gray-100 pt-6 pb-9 px-3`}
          >
            <div className="text-xl text-white">
              <div className="w-100">
                <div className="inline-block w-6 h-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path fill="#030303" d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path
                      fill="#030303"
                      d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    />
                  </svg>
                </div>
                <div className="inline text-black">12 Subjects</div>
              </div>
              <div className="w-full">
                <div className="inline-block w-6 h-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path fill="#030303" d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path
                      fill="#030303"
                      d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    />
                  </svg>
                </div>
                <div className="inline text-black">16345 Attempts</div>
              </div>

              <div className="w-full">
                <div className="inline-block w-6 h-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path fill="#030303" d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path
                      fill="#030303"
                      d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    />
                  </svg>
                </div>
                <div className="inline text-black">5 years</div>
              </div>
            </div>
            <Link
              href={{
                pathname: `/exams/exam/${encodeURI(name)}`,
                query: {
                  name,
                  id,
                },
              }}
            >
              <button
                style={{
                  backgroundColor: `${newColor.replace("bright-", "")}`,
                }}
                className="w-5/6 py-2 pt-4 mt-2 font-semibold text-xl text-center uppercase border border-transparent rounded-xl text-white"
              >
                View {name}
              </button>
            </Link>
          </div>
        </label>
      </div>
    </>
  );
};

export default ExamCard;
