// THIS WILL RENDER THE SPECIFIC TESTS (subjects)
// OF AN EXAM TYPE COLLECTION

import { GetStaticProps } from "next";
import { firebase } from "../../../config/firebase";

const Tests = (props: any) => {
  console.log(props);

  return (
    <div>
      <h1>Subjects</h1>
      Tests List Page - Specific tests of an exam type <p>test</p>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  let exam: any = {};
  let tests: any = [];
  let testArray: any = [];
  console.log(params);
  const docRef = firebase
    .firestore()
    .collection("exams")
    .where("name", "==", params.name);
  // "then" part after the await
  await docRef
    .get()
    .then((doc: any) => {
      if (doc.exists) {
        console.log("Document data:", doc.data());

        if (doc.data().tests_list) {
          doc.data().tests_list.forEach(async (test: any) => {
            await test.get().then((doc: any) => {
              testArray.push(doc);
              console.log("array pf tests");
            });
          });
        }

        exam = {
          id: doc.id,
          name: doc.data().name,
          //tests_list: testArray,
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

  const querySnapshot = await firebase.firestore().collection("tests").get();

  // "then" part after the await
  querySnapshot.forEach(function (doc) {
    tests.push({
      id: doc.id,
      name: doc.data().name,
      test_full_name: doc.data().test_full_name,
      questions_count: doc.data().questions_count,
    });
  });

  return {
    props: { tests, exam },
    revalidate: 60 * 60 * 24 * 30, // once every month
  };
};

export async function getStaticPaths() {
  let exams: any = [];
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
        description: doc.data().description,
        added_on: dt,
      });
    });
  } catch (err) {
    console.log(err);
  }
  // Get the paths we want to pre-render based on posts
  const paths = exams.map((exam: any) => ({
    params: { name: exam.name },
  }));

  // We'll pre-render only these paths at build time.
  return { paths, fallback: false };
}

export default Tests;
