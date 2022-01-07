import React, { useState, useRef, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Particular from "./ParticularItem";
import { sampleRecords as sample } from "./constants";

function BillingList() {
  const [products, setProducts] = useState([]);
  const [entries, setEntries] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState('');

  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
      const recordsStored = localStorage.getItem('records-stored');
      if(!!recordsStored) {
          setProducts(JSON.parse(recordsStored));
      }
  },[])
  console.log(entries, 'test entries');

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
      <div className="records-container">
          {entries.map(en => (<div key={en.productId}>
            <span>{en.productId}</span>
            <span>{en.quantity}</span>
          </div>))}
        {/* {records.map((r, i) => (
          <Particular
            key={r.name}
            title={r.name}
            price={r.price}
            id={r.id}
            sn={i + 1}
            onRemove={removeRecord}
            onEdit={handleEditRecord}
          />
        ))} */}
        {/* {records.length > 0 ? (
          <Particular title={"Total"} price={total} />
        ) : (
          <div>
            <span>No Records found!!</span>
          </div>
        )} */}
      </div>
      <div className="input-container">
        <div className="name-input">
          <select
            // ref={recordNameRef}
            type="text"
            placeholder="Product"
            // value={newRecordName}
            onChange={(e) => setSelectedProductId(e.target.value)}
            // onKeyPress={handlePressEnterAtRecordName}
          >
            {products.map((r) => (
              <option key={r.id} value={r.id}>{r.name}</option>
            ))}
          </select>
        </div>
        <div className="price-input">
          <input
            // ref={recordPriceRef}
            type="number"
            placeholder="Quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            // onKeyPress={handlePressEnterAtRecordPrice}
          />
        </div>
        <div className="add-record">
          <button
            onClick={e => setEntries([...entries, { productId: selectedProductId, quantity }])}
          >
            <span>{`"Add Entry`}</span>
          </button>
          {/* {editMode && (
            <button onClick={(e) => setEditMode(false)}>
              <span>cancel</span>
            </button>
          )} */}
        </div>
      </div>
    </div>
  );
}

export default BillingList;
