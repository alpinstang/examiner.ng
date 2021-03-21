import ExamCard from "../../components/examCard";
import React, { useState } from "react";
import { firebase } from "../../config/firebase";
import { NextSeo } from "next-seo";
import { GetStaticProps } from "next";
import TitleBar from "../../components/titleBar";
import { ArrowLeft } from "../../components/svg/arrowLeft.svg";
import { ArrowRight } from "../../components/svg/arrowRight.svg";

const Exams = (props: any) => {
  const [scrolling, setScrolling] = useState(false);

  const doScroll = (e: any, hover: any) => {
    console.log(scrolling, e);
    let scrollInterval;
    let element: any;
    element = document.getElementById("scrollable");
    if (hover) {
      setScrolling(true);
      element.scrollLeft += 100;
      return;
    } else {
      element.scrollLeft = element.scrollLeft;
      clearInterval(scrollInterval);
      setScrolling(false);
    }
  };

  return (
    <>
      <NextSeo
        title="Find Exams"
        description="Browse Exams offered and choose a practice test for free."
      />

      <div className="md:pt-10 max-w-xl mx-auto">
        <TitleBar>
          <span>Exams</span>
        </TitleBar>
        <h3 className="text-center">
          Find our list of real exams for you to practice. We are constantly
          updating our questions database to give you the latest information
          available.
        </h3>
      </div>
      <div className="relative group">
        <div
          id="scrollable"
          className="relative flex overflow-x-scroll py-10 hide-scroll-bar"
        >
          <div className="flex flex-nowrap lg:ml-20 md:ml-21 ml-10 ">
            {props.exams.length &&
              props.exams.map((exam: any) => {
                return (
                  <div className="inline-block px-3">
                    <div className="w-96 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                      <ExamCard key={exam.id} {...exam} />
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <div
          id="left"
          onClick={(e) => doScroll(e, true)}
          onMouseEnter={(e) => doScroll(e, true)}
          onMouseLeave={(e) => doScroll(e, false)}
          className="absolute top-0 w-36 border-2 h-full border-black group-hover:opacity-100 opacity-40 transition delay-150 duration-300 ease-in-out"
        >
          <div className="relative top-1/2 -mt-7 w-12 h-12">{ArrowLeft}</div>
        </div>
        <div
          id="right"
          onClick={(e) => doScroll(e, true)}
          onMouseEnter={(e) => doScroll(e, true)}
          onMouseLeave={(e) => doScroll(e, false)}
          className="absolute top-0 right-0 w-36 border-2 h-full border-black group-hover:opacity-100 opacity-40 transition delay-150 duration-300 ease-in-out"
        >
          <div className="relative float-right top-1/2 -mt-7 w-12 h-12">
            {ArrowRight}
          </div>
        </div>
      </div>

      {/* <div className="flex flex-wrap ">
        {props.exams.length &&
          props.exams.map((exam: any) => {
            let color = randomColor();
            return (
              <div className="p-2 w-full sm:w-1/2 md:w-1/3 xl:w-1/6 mb-4">
                <ExamCard key={exam.id} color={color} {...exam} />
              </div>
            );
          })}
      </div> */}

      <div className="container mx-auto my-12">
        <section className="prose">
          <div className="mb-12 text-center text-xl text-red-500">
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

export default Exams;
