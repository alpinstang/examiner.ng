import React from "react";
import { ReactNode } from "react";
import Hero from "../components/hero";
import ThreeFeatures from "../components/threeFeatures";
// import AlternatingFeatures from "../components/alternatingFeatures";
import ExamTeaser from "../components/examsTeaser";
import CallToAction from "../components/callToAction";
import { NextSeo } from "next-seo";
import PricingTable from "../components/pricingTable";
import EmailCallToAction from "../components/emailCallToAction";
import { firebase } from "../config/firebase";
import { GetStaticProps } from "next";

// import your default seo configuration

const Home: ReactNode = (props: any) => {
  const { exams, error } = props;

  return (
    <>
      <NextSeo
        title="Free Exam Prep"
        description="Examiner offers free exam prep credits when you sign up."
      />
      <Hero />
      <ExamTeaser exams={exams} error={error} />
      <EmailCallToAction />
      <ThreeFeatures />
      <PricingTable />
      <CallToAction />
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
    error = {
      error: error,
    };
    console.log(error);
  }

  return {
    props: {
      exams,
      error,
    },
    revalidate: 60 * 60 * 24 * 15, // once every 15 days
  };
};

export default Home;
