import { useEffect, useState } from "react";
import { CSVReader } from "react-papaparse";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import { firebaseConfig } from "./firebase_config";

let listRendered = false;

export const UploadQuestionsView = () => {
  const [exams, setExams] = useState([{ id: "", data: { name: "", id: "" } }]);
  const [selectedExam, setSelectedExam] = useState("");
  const [log, updateLog] = useState("$ ");

  let optionsList: any = [{}];
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  const db = firebase.firestore();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getExams = async () => {
    try {
      const data = await db.collection("exams").get();
      console.log("Exams");
      console.log(data.docs);
      data.docs.forEach(async (entry) => {
        console.log(entry.id);
        let id = entry.id;
        const docRef = db.collection("exams").doc(id);
        const doc = await docRef.get();
        if (!doc.exists) {
          console.log("No such document!");
        } else {
          //console.log("Document data:", doc.data());
          let composed = {
            id: id,
            data: doc.data(),
          };
          optionsList.push(composed);
          setExams([...optionsList]);
          //return res;
        }
      });
      return optionsList;
      // let id = data.docs[0].id;s
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

  const handleSelection = (e: any) => {
    if (e.target.value === "false") {
      return;
    }
    setSelectedExam(e.target.value);
  };

  const logging = (value: any) => {
    let update = log;
    update += value;
    updateLog(update);
  };

  const handleOnDrop = (data: any) => {
    logging(data);
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
    if (!listRendered) {
      getExams().then(() => {
        console.log(optionsList);
        optionsList.shift();
        listRendered = true;
      });
    }
  }, []);

  return (
    <>
      <div style={{ maxWidth: "600px", margin: "0 auto", paddingTop: "3em" }}>
        <div>
          <h1>CSV UPLOAD</h1>
          <h2>Upload Questions for an exam</h2>
          <p>
            To bulk upload questions, first make sure you have created the exam
            in the <a href="/c/exams">exams page</a>.
          </p>
          <p>
            Once you have the exam name and details filled out, select the exam
            from the dropdown below.{" "}
            <b>Make sure you have the correct exam selected.</b>
          </p>
        </div>
        <div>
          <h3 style={{ fontSize: "1.4em" }} className="">
            Exams
          </h3>
          <div>
            <select
              style={{ fontSize: "18px", padding: "0.3em" }}
              name="exam"
              id="examSelect"
              onChange={handleSelection}>
              <option value="false"> ~SELECT AN EXAM~</option>
              {exams
                ? exams.map((obj) => {
                    console.log("Rendering");
                    console.log(obj);
                    return <option value={obj.id}>{obj.data.name}</option>;
                  })
                : "No Exams."}
            </select>
          </div>
        </div>
        <h3>Click and Drag Upload</h3>
        <div style={{ backgroundColor: "rgba(0,255,0,0.15)" }}>
          <CSVReader
            onDrop={handleOnDrop}
            onError={handleOnError}
            addRemoveButton
            onRemoveFile={handleOnRemoveFile}>
            <div
              style={{
                height: "50px",
                paddingTop: "17px",
              }}>
              <span>Drop CSV file here or click to upload.</span>
            </div>
          </CSVReader>
        </div>
        <div style={{ marginTop: "2em" }}>
          <h3>Log</h3>
          <p>Useful information about the process will appear here.</p>
          <pre>
            <div
              id="logger"
              style={{
                height: "10em",
                padding: "1em",
                backgroundColor: "#00364a",
                color: "#fff",
                fontSize: "16px",
                fontFamily: '"Lucida Console", "Lucida Sans Typewriter"',
              }}>
              {log}
            </div>
          </pre>
        </div>
      </div>
    </>
  );
};
