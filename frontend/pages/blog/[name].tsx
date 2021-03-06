import Link from "next/link";
import { GetStaticProps } from "next";
import { firebase } from "../../config/firebase";
import markdownToHtml from "../../lib/markdownToHtml";
import React from "react";

const Post = (props: any) => {
  console.log(props);
  const { post, content } = props;
  return (
    <>
      <div className="max-w-3xl container mx-auto my-12 prose dark:prose-light">
        <div className="">
          <h1>{post.name}</h1>
          <div className="blog-post">
            <article className="prose lg:prose-xl">
              <div dangerouslySetInnerHTML={{ __html: content }} />
            </article>
          </div>
          <ul>
            {post.tags
              ? post.tags.map((tag: any) => {
                  return <li key={tag}>{tag}</li>;
                })
              : "No Tags"}
          </ul>
          <div className="float-right">
            <Link href="/blog">
              <a className="blog-link">Back to Post List</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  let post: any = {};
  console.log(params);
  // const docRef = firebase
  //   .firestore()
  //   .collection("blog")
  //   .where("name", "==", params.name);

  await firebase
    .firestore()
    .collection("blog")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc: any) => {
        // doc.data() is never undefined for query doc snapshots
        if (doc.data().name == params.name) {
          console.log("match!");
          let dt = Date.parse(doc.data().publish_date.toDate().toString());
          post = {
            id: doc.id,
            name: doc.data().name,
            gold_text: doc.data().gold_text,
            publish_date: dt,
            description: doc.data().description,
            short_description: doc.data().short_description,
            tags: [],
            images: doc.data().images,
          };
        } else {
          console.log("No such document!");
        }
      });
    });

  let content = await markdownToHtml(post.description || "");

  return {
    props: { post, content },
    revalidate: 60 * 60 * 24 * 30, // once every month
  };
};

export async function getStaticPaths() {
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
    return error;
  }
  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post: any) => ({
    params: { name: post.name },
  }));

  // We'll pre-render only these paths at build time.
  return { paths, fallback: false };
}

export default Post;
