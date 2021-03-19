import ExamCard from "../../components/examCard";
import React from "react";
import { firebase } from "../../config/firebase";
import { NextSeo } from "next-seo";
import { GetStaticProps } from "next";

const Exams = (props: any) => {
  const randomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const randomColor = () => {
    let value = randomNumber(1, 6);
    console.log("value", value);
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
        color = "brightturquoise";
        break;
      default:
        return "bright-blue";
    }
    return "bright-green";
  };

  return (
    <>
      <NextSeo
        title="Find Exams"
        description="Browse Exams offered and choose a practice test for free."
      />
      <div className="container mx-auto my-12">
        <div className="md:flex content-center flex-wrap -mx-2 p-3 m-1">
          {props.exams.length &&
            props.exams.map((exam: any) => {
              let color = randomColor();
              return <ExamCard key={exam.id} color={color} {...exam} />;
            })}
        </div>
        <section className="prose container max-w-7xl mx-auto">
          <div className="flex divide divide-transparent mb-12">
            {props.error && <div>There was an error fetching the data.</div>}
          </div>
        </section>
      </div>
    </>
  );
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
  } catch (err) {
    error = err;
  }

  return {
    props: {
      exams,
      error,
    },
    revalidate: 60 * 60 * 24 * 15, // once every 15 days
  };
};

export default Exams;
