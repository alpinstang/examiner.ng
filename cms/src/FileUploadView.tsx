import { useEffect, useState } from "react";
import { CSVReader } from "react-papaparse";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import { firebaseConfig } from "./firebase_config";
import { useSnackbarController } from "@camberi/firecms";

let listRendered = false;
let parsedData: any = null;

const papaParseConfig = {
  delimiter: "", // auto-detect
  newline: "", // auto-detect
  header: true,
};

export const UploadQuestionsView = () => {
  const snackbarController = useSnackbarController();

  const [exams, setExams] = useState([{ id: "", data: { name: "", id: "" } }]);
  const [selectedExam, setSelectedExam] = useState("");
  const [log, updateLog] = useState("$_ ");

  let optionsList: any = [{}];
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  const db = firebase.firestore();
  const getExams = async () => {
    try {
      const data = await db.collection("exams").get();
      logging("Fetched exams");
      data.docs.forEach(async (entry) => {
        let id = entry.id;
        const docRef = db.collection("exams").doc(id);
        const doc = await docRef.get();
        if (!doc.exists) {
          logging("No such document!");
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

  const startDatabaseUpdate = () => {
    snackbarController.open({
      type: "info",
      title: "IMPORTANT",
      message: "Do not leave this page until process finishes.",
    });
    let examId = selectedExam;
    logging("Starting update...\n$_ please wait... " + examId);
    if (parsedData !== null) {
      parsedData.forEach((line: any) => {
        createRecord(line, examId);
      });
      logging("completed.");
    } else {
      snackbarController.open({
        type: "warning",
        title: "Missing Data",
        message: "There is no data to be saved. Please try again.",
      });
    }
  };

  const createRecord = async (data: any, examId: any) => {
    let fields = data.data;
    logging("🚀 sending data...");
    console.log("fields: ", fields);
    console.log(fields["S/N"]);
    try {
      await db
        .collection("exams")
        .doc(examId)
        .collection("questions")
        .doc(fields["S/N"])
        .set(fields);
      logging("added row...");
    } catch (error) {
      logging(error.message);
      return { error };
    }
  };

  const handleOnDrop = (data: any) => {
    logging("File added");
    console.log("---------------------------");
    console.log(data);
    console.log("---------------------------");
    parsedData = data;
    snackbarController.open({
      type: "info",
      title: "Success",
      message: "CSV file has parsed successfully.",
    });
    logging("Sample Preview (KEY: VAL)\n" + JSON.stringify(data[0].data));
  };

  const handleOnError = (err: any, file: any, inputElem: any, reason: any) => {
    logging("Error: " + reason);
  };

  const handleOnRemoveFile = (data: any) => {
    logging("File removed");
  };

  const handleSelection = (e: any) => {
    if (e.target.value === "false") {
      return;
    }
    logging("Exam selected. ID: " + e.target.value);
    setSelectedExam(e.target.value);
  };

  const logging = (value: any) => {
    let update = log;
    update += "\n$_ " + value;
    updateLog(update);
  };

  const updateScroll = () => {
    const element: any = document.getElementById("logger");
    if (element && element.length > 0) {
      element.scrollTop = element.scrollHeight;
    }
  };

  const processCSV = (e: any) => {
    e.preventDefault();
    startDatabaseUpdate();
  };

  useEffect(() => {
    setInterval(updateScroll, 1000);
    if (!listRendered) {
      getExams().then(() => {
        optionsList.shift();
        listRendered = true;
      });
    }
  }, []);

  return (
    <>
      <div
        style={{
          fontSize: "16px",
          maxWidth: "600px",
          margin: "0 auto",
          paddingTop: "1em",
        }}>
        <div>
          <h2>Upload Questions for an exam</h2>
          <p>
            <b style={{ color: "red" }}>Read directions first</b>
            <br />
            To bulk upload questions, first make sure you have created the exam
            in the <a href="/c/exams">exams page</a>. Once you have the exam
            name and details filled out, select the exam from the dropdown
            below. <b>Make sure you have the correct exam selected.</b>
          </p>
        </div>
        <div>
          <h3
            style={{
              fontSize: "1.4em",
              display: "inline-block",
              marginRight: "1em",
              marginBottom: "0",
            }}
            className="">
            Exams
          </h3>
          <div style={{ display: "inline-block" }}>
            <select
              style={{
                fontSize: "18px",
                padding: "0.3em",
                borderRadius: "5px",
              }}
              name="exam"
              id="examSelect"
              onChange={handleSelection}>
              <option value="false"> ~ SELECT AN EXAM ~ </option>
              {exams
                ? exams.map((obj) => {
                    return <option value={obj.id}>{obj.data.name}</option>;
                  })
                : "No Exams."}
            </select>
          </div>
        </div>
        <div
          style={{ backgroundColor: "rgba(0,255,0,0.15)", marginTop: "1em" }}>
          <CSVReader
            config={papaParseConfig}
            onDrop={handleOnDrop}
            onError={handleOnError}
            addRemoveButton
            onRemoveFile={handleOnRemoveFile}>
            <div
              style={{
                height: "120px",
                paddingTop: "55px",
              }}>
              <span>Drop CSV file here or click to upload.</span>
            </div>
          </CSVReader>
        </div>
        <button
          type="button"
          style={{
            marginTop: "1.0em",
            padding: "0.3em",
            paddingLeft: "1em",
            paddingRight: "1em",
            backgroundColor: "rgba(255,1,0,0.8)",
            color: "#fff",
            fontSize: "18px",
          }}
          onClick={(e) => processCSV(e)}>
          Process CSV
        </button>
        <div>
          <h3 style={{ display: "inline-block", marginBottom: "0" }}>Log </h3>
          <p
            style={{
              display: "inline-block",
              marginLeft: "0.4em",
              marginBottom: "0",
            }}>
            Useful information about the process will appear here.
          </p>
          <pre>
            <div
              id="logger"
              style={{
                overflowY: "scroll",
                overflowX: "auto",
                wordWrap: "break-word",
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
          <button
            type="button"
            style={{
              padding: "0.3em",
              paddingLeft: "1em",
              paddingRight: "1em",
              backgroundColor: "rgba(0,255,0,0.15)",
              color: "#000",
              fontSize: "18px",
            }}
            onClick={() => updateLog("$_ ")}>
            Clear Log
          </button>
        </div>
      </div>
    </>
  );
};
