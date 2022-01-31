import React, { useState, useRef, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Particular from "./ParticularItem";
import { sampleRecords } from "./constants";
import RecordsList from "./BasicList";
import BillingList from "./BillingList";

function App() {
  const [selectedList, setSelectedList] = useState("");

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
      {/* <label>
        <input type="checkbox" checked={selectedList === 'Basic'} onChange={e => e.target.checked ? setSelectedList('Basic'): console.log(e, 'uncheck')}/>
        <span>Basic Product List</span>
      </label>
      <label>
        <input type="checkbox" checked={selectedList === 'Billing'} onChange={e => e.target.checked ? setSelectedList('Billing'):console.log(e, 'uncheck')}/>
        <span>Billing List</span>
      </label> */}
      <div className="main-container">
        <div className="options-container">
          <div className="option">
            <button
              onClick={(e) => setSelectedList("Basic")}
              className={selectedList === "Basic" ? "selected" : ""}
            >
              <span>Basic Product List</span>
            </button>
          </div>
          <div className="option">
            <button
              onClick={(e) => setSelectedList("Billing")}
              className={selectedList === "Billing" ? "selected" : ""}
            >
              <span>Billing Product List</span>
            </button>
          </div>
        </div>
        <div className="pages-container">
          {selectedList === "Basic" && <RecordsList />}
          {selectedList === "Billing" && <BillingList />}
        </div>
      </div>
    </div>
  );
}

export default App;
