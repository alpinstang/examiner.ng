import React from "react";
import ExamCard from "./examCard";
import TitleBar from "./titleBar";

const ExamTeaser = (props: any) => {
  const { exams, error } = props;

  if (error) {
    return <div>No data found</div>;
  } else {
    return (
      <>
        <div className="md:pt-3 md:pb-3 max-w-xl mx-auto">
          <TitleBar>
            <span>Exams</span>
          </TitleBar>
          <h3 className="text-center">
            Find our list of real exams for you to practice. We are constantly
            updating our questions database to give you the latest information
            available.
          </h3>
        </div>
        <div className="pb-2 flex flex-wrap container mx-auto">
          {exams ? (
            exams.length &&
            exams.map((exam: any) => {
              return (
                <div className="p-2 w-full sm:w-1/2 md:w-1/3 mb-4">
                  <ExamCard key={exam.id} {...exam} />
                </div>
              );
            })
          ) : (
            <div className="text-red-500 text-3xl mx-auto py-10">
              No exams found
            </div>
          )}
        </div>
      </>
    );
  }
};

export default ExamTeaser;
