import React, { Component } from "react";
import { CSVReader } from "react-papaparse";
import { useAuthContext } from "@camberi/firecms";

export const UploadQuestionsView = () => {
  const auth = useAuthContext();

  const handleOnDrop = (data: any) => {
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

  return (
    <>
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "12em" }}>
        <div>
          <h1>CSV UPLOAD</h1>
          <h2>Upload Questions for an exam</h2>
        </div>
        <div>
          <h5>Click and Drag Upload</h5>
          <CSVReader
            onDrop={handleOnDrop}
            onError={handleOnError}
            addRemoveButton
            onRemoveFile={handleOnRemoveFile}>
            <span>Drop CSV file here or click to upload.</span>
          </CSVReader>
        </div>
      </div>
    </>
  );
};
