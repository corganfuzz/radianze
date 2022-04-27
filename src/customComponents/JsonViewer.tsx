import React, { Component } from "react";
import ReactJson from "react-json-view";

function getExampleJson2() {
  return {
    normalized: {
      "1-grams": {
        body: 1,
        testing: 1,
      },
      "2-grams": {
        "testing body": 1,
      },
      "3-grams": {},
    },
    noun_phrases: {
      body: 1,
    },
    lemmatized: {
      "1-grams": {
        test: 1,
        body: 1,
      },
      "2-grams": {
        "test body": 1,
      },
      "3-grams": {},
    },
    dependency: {
      "1-grams": {
        testingVERBROOTtestingVERB: 1,
        bodyNOUNdobjtestingVERB: 1,
      },
      "2-grams": {
        "testingVERBROOTtestingVERB bodyNOUNdobjtestingVERB": 1,
      },
      "3-grams": {},
    },
  };
}

export default class JsonViewer extends Component {
  render() {
    return (
      <div style={{ width: "100%" }}>
        <ReactJson
          theme="pop"
          collapsed={false}
          name="large_array"
          displayDataTypes={false}
          src={getExampleJson2()}
        />
      </div>
    );
  }
}
