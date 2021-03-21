import React from "react";
import TestCard from "./testCard";
import TitleBar from "./titleBar";

const TestCardList = (props: any) => {
  const { tests, error } = props;

  if (error) {
    return <div>No data found</div>;
  } else {
    return (
      <>
        <div className="md:pt-3 md:pb-3 max-w-xl mx-auto">
          <TitleBar>
            <span>Tests</span>
          </TitleBar>
          <h3 className="text-center">
            Choose a test subject below to get started practicing your test.
            Each test will have it's own unique set of instructions for the
            student. Please follow these carefully.
          </h3>
        </div>
        <div className="pb-2 flex flex-wrap container mx-auto">
          {tests ? (
            tests.length &&
            tests.map((test: any) => {
              return (
                <div className="p-2 w-full sm:w-1/2 md:w-1/3 mb-4">
                  <TestCard key={test.id} {...test} />
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

export default TestCardList;
