import { useState, useEffect } from "react";
import script from "./worker/worker.js";
import WebWorker from "./worker/workerSetup";
import data from "./data/data_1.csv";
import "./App.css";

function App() {
  useEffect(() => {
    const worker = new WebWorker(script);
    async function postData() {
      await worker.postMessage(data);
    }
    postData();
    worker.addEventListener("message", (e) => {
      console.log(e.data);
    });
  }, []);

  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}

export default App;
