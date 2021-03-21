import React from "react";
import ExamCard from "./examCard";
import { firebase } from "../config/firebase";
import { GetStaticProps } from "next";

const ExamTeaser = (props: any) => {
  const { exams, error } = props;

  if (error) {
    return <div>No data found</div>;
  } else {
    return (
      <div className="flex flex-wrap ">
        {exams ? (
          exams.length &&
          exams.map((exam: any) => {
            return (
              <div className="p-2 w-full sm:w-1/2 md:w-1/3 xl:w-1/6 mb-4">
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
    );
  }
};

export const getStaticProps: GetStaticProps = async () => {
  let exams: any = [];
  let error: any = null;
  try {
    // await the promise .orderBy("createdAt", "desc")
    const querySnapshot = await firebase.firestore().collection("exams").get();

    // "then" part after the await
    querySnapshot.forEach(function (doc) {
      let dt = Date.parse(doc.data().added_on.toDate().toString());
      exams.push({
        id: doc.id,
        name: doc.data().name,
        exam_full_name: doc.data().exam_full_name,
        added_on: dt,
        image: doc.data().main_image,
        description: doc.data().description,
      });
    });

    return {
      props: {
        exams,
        error,
      },
      revalidate: 60 * 60 * 24 * 15, // once every 15 days
    };
  } catch (err) {
    error = {
      error: error,
    };
    console.log(error);
    return {
      props: {
        exams,
        error,
      },
      revalidate: 60 * 60 * 24 * 15, // once every 15 days
    };
  }
};

export default ExamTeaser;
