import Link from "next/link";
import React, { useEffect, useState } from "react";

// interface ExamData {
//   id: string;
//   name: string;
//   exam_full_name: string;
//   description: string;
//   image: string;
// }

const TestCard = (props: any) => {
  const { name, questions_count, test_full_name, id } = props;
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
    setColor(color);
  }, []);

  return (
    <>
      <div id={id} className="flex flex-wrap mx-auto">
        <div className="w-full relative z-0 classroom-bg-image rounded-3xl border-black border-lg border-2">
          <div className="text-center text-xl p-5 opacity-100 relative z-40">
            <h2 className="pb-2">{name}</h2>
            <h3>{test_full_name}</h3>
            <p className="pt-1 font-normal">Description of the test...</p>
            <hr className="bg-gray-800 my-2 h-1 mx-12" />
            <p className="text-lg pt-2">
              <ul>
                <li>Number of questions: {questions_count}</li>
              </ul>
            </p>
            <Link
              href={{
                pathname: `/exams/exam/${encodeURI(id)}`,
                query: {
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
                Take {name} Test
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestCard;
