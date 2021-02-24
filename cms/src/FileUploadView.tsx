import { useEffect, useState } from "react";
import { CSVReader } from "react-papaparse";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import { firebaseConfig } from "./firebase_config";

export const UploadQuestionsView = () => {
  const someTest = "Hello";
  const [exams, setExams] = useState({ name: "" });
  let optionsList: any = [];
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  const db = firebase.firestore();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getExams = async () => {
    try {
      const data = await db.collection("exams").get();
      console.log("Exams");
      console.log(data.docs[0].id);
      let id = data.docs[0].id;
      const docRef = db.collection("exams").doc(id);
      const doc = await docRef.get();
      if (!doc.exists) {
        console.log("No such document!");
      } else {
        let data: any = doc.data();

        console.log("Document data:", doc.data());
        setExams(data);
        return data;
      }
    } catch (error) {
      return { error };
    }
  };

  const createRecord = async (data: any, exam: any) => {
    try {
      await db
        .collection("exams")
        .doc(exam.id)
        .collection("questions")
        .doc(data.id)
        .set(data);
      console.log("data created");
    } catch (error) {
      return { error };
    }
  };

  const handleOnDrop = (data: any) => {
    getExams();
    console.log("---------------------------");
    console.log(data);
    console.log("---------------------------");
  };

  const handleOnError = (err: any, file: any, inputElem: any, reason: any) => {
    console.log(err);
  };

  const handleOnRemoveFile = (data: any) => {
    console.log("---------------------------");
    console.log(data);
    console.log("---------------------------");
  };

  useEffect(() => {
    const update = () => {
      console.log("effect");
      getExams();
    };

    update();
  }, []);

  return (
    <>
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "12em" }}>
        <div>
          <h1>CSV UPLOAD</h1>
          <h2>Upload Questions for an exam</h2>
        </div>
        <div>
          <h3 style={{ fontSize: "1.4em" }} className="">
            Exams
          </h3>
          <ul>
            <li>{exams ? exams.name : "loading"}</li>
          </ul>
        </div>
        <div>
          <h5>Click and Drag Upload</h5>
          <CSVReader
            onDrop={handleOnDrop}
            onError={handleOnError}
            addRemoveButton
            onRemoveFile={handleOnRemoveFile}>
            <div
              style={{
                height: "100px",
                paddingTop: "40px",
              }}>
              <span>Drop CSV file here or click to upload.</span>
            </div>
          </CSVReader>
        </div>
      </div>
    </>
  );
};
