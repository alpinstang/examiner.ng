import BlogPreview from "../../components/blogPreview";
import React from "react";
import { firebase } from "../../config/firebase";
import { NextSeo } from "next-seo";
import { GetStaticProps } from "next";

const Blog = (props: any) => {
  return (
    <>
      <NextSeo
        title="Official Blog"
        description="Examiner.NG company news, exam updates, team blog posts."
      />
      <section className="prose container max-w-3xl mx-auto">
        <div className="divide-y divide-gray-200 mb-12">
          <div className="pt-6 pb-8 space-y-2 md:space-y-5">
            <h1 className="text-3xl leading-9 font-extrabold text-gray-900 tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              Latest
            </h1>
            <p className="text-lg leading-7 text-gray-500">
              All of the latest news and exam updates from the Examiner Team!
            </p>
          </div>
          {props.error && <div>There was an error fetching the data.</div>}
          {props.posts.length &&
            props.posts.map((post: any) => (
              <BlogPreview key={post.id} {...post} />
            ))}
        </div>
      </section>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  let posts: any = [];
  let error: any = null;
  try {
    // await the promise .orderBy("createdAt", "desc")
    const querySnapshot = await firebase
      .firestore()
      .collection("blog")
      .orderBy("publish_date", "desc")
      .get();

    // "then" part after the await
    querySnapshot.forEach(function (doc) {
      let dt = Date.parse(doc.data().publish_date.toDate().toString());
      posts.push({
        id: doc.id,
        name: doc.data().name,
        gold_text: doc.data().gold_text,
        publish_date: dt,
        description: doc.data().description,
        short_description: doc.data().short_description,
        tags: doc.data().tags,
        images: doc.data().images,
      });
    });
  } catch (err) {
    error = err;
  }

  return {
    props: {
      posts,
      error,
    },
    revalidate: 60 * 60 * 24, // once every day
  };
};

export default Blog;
