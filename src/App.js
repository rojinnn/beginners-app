import React, { useState, useRef, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Particular from "./ParticularItem";
import { sampleRecords  } from "./constants";
import RecordsList from './BasicList';
import BillingList from "./BillingList";

function App() {

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          ok
        </a> */}
      </header>
        <RecordsList />
        <BillingList />
    </div>
  );
}

export default App;
