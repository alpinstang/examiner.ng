// THIS WILL RENDER THE SPECIFIC TESTS (subjects)
// OF AN EXAM TYPE COLLECTION

import { GetStaticProps } from "next";
import { firebase } from "../../../config/firebase";

const Tests = (props: any) => {
  console.log(props);

  return (
    <div>
      <h1>{JSON.stringify(props, null, 2)} Subjects</h1>
      Tests List Page - Specific tests of an exam type <p>test</p>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  //let exam: any = {};
  let tests: any = [];

  const docRef = firebase.firestore().collection("exams").doc(params.id);

  // "then" part after the await
  await docRef
    .get()
    .then((doc: any) => {
      if (doc.exists) {
        console.log("Document data:", doc.data());
        exam = {
          id: doc.id,
          name: doc.data().name,
          gold_text: doc.data().gold_text,
          publish_date: dt,
          description: doc.data().description,
          short_description: doc.data().short_description,
          tags: doc.data().tags || [],
          images: doc.data().images,
        };
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    })
    .catch((error: any) => {
      console.log("Error getting document:", error);
      return error;
    });

  return {
    props: { tests },
    revalidate: 60 * 60 * 24 * 30, // once every month
  };
};

export async function getStaticPaths() {
  let exams: any = [];
  let error: any = null;
  try {
    // await the promise .orderBy("createdAt", "desc")
    const querySnapshot = await firebase.firestore().collection("exams").get();

    // "then" part after the await
    querySnapshot.forEach(function (doc) {
      let dt = Date.parse(doc.data().publish_date.toDate().toString());
      exams.push({
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
  const paths = exams.map((exam: any) => ({
    params: { id: exam.id },
  }));

  // We'll pre-render only these paths at build time.
  return { paths, fallback: false };
}

export default Tests;
