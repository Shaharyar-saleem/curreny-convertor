import React, { useState } from "react";
import Switcher from "../assets/Switcher.png";
import Result from "./Result.jsx";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function Convertor(props) {
  let [amount, setAmount] = useState(1);
  let [from, setFrom] = useState("EUR");
  let [to, setTo] = useState("USD");
  let [result, setResult] = useState();
  let currencies = ["USD", "EUR", "CHF"]; //more currencies can be added here

  let handleConvertAmount = async (e) => {
    e.target.value <= 0
      ? props.alert("Please enter valid amount", "danger")
      : setAmount(e.target.value);
  };

  let handleConvetFrom = async (e) => {
    setFrom(e.target.value);
  };

  let handleConvertTo = async (e) => {
    setTo(e.target.value);
  };

  let convertCurrency = async () => {
    let convertFrom = from;
    let convertTo = to;
    let convertAmount = amount;
    let accessKey = "cce645e42f54228b3438d45c";
    const url = `https://v6.exchangerate-api.com/v6/${accessKey}/pair/${convertFrom}/${convertTo}/${convertAmount}`;
    let apiResult = await fetch(url);
    let data = await apiResult.json();
    setResult(data.conversion_result);

    let currentDate = new Date();
    let newRecord = [
      currentDate.toDateString(),
      convertAmount + " " + convertFrom,
      data.conversion_result + " " + convertTo,
    ];

    if (!window.localStorage.getItem("history")) {
      window.localStorage.setItem("history", "[]");
    }

    let oldRecord = JSON.parse(window.localStorage.getItem("history"));
    oldRecord.push(newRecord);
    window.localStorage.setItem("history", JSON.stringify(oldRecord));
    props.alert("Transaction is stored in history", "success");
  };

  // styling of component
  let convertorHeading = {
    fontWeight: "bold",
    fontSize: "40px",
    lineHeight: "47px",
    color: "white",
    paddingTop: "10%",
  };
  let convertorForm = {
    backgroundColor: "#353535",
    padding: "20px 20px 40px 20px",
    borderRadius: "10px",
    marginTop: "3%",
  };
  let formLabel = {
    color: "#C6C6C6",
    fontSize: "12px",
    fontWeight: "regular",
    fontFamily: "Roboto",
    textAlign: "left",
    paddingBottom: "7px",
    justifyContent: "start",
  };
  let inputField = {
    backgroundColor: "#454545",
    border: "none",
    borderRadius: "8px",
    color: "white",
    height: "40px",
  };
  let convertBtn = {
    backgroundColor: "#f3ff0a",
    color: "black",
    height: "40px",
    width: "117px",
    borderRadius: "8px",
    marginTop: "37px",
  };
  let historyLink = {
    position: "absolute",
    top: "60%",
    transform: "translateY(55%)",
    color: "#FFF",
    fontSize: "15px",
    lineHeight: "14px",
    opacity: "0.5",
    left: "10%",
  };
  let switcherIcon = {
    marginTop: "47px",
    height: "20px",
  };

  return (
    <div className="custom-container">
      <h2 style={convertorHeading}>Convert currencies in real-time.</h2>
      <div className="row">
        <div className="col-lg-9 col-md-12">
          <div className="row" style={convertorForm}>
            <div className="col-md-3">
              <label style={formLabel}>Amount</label>
              <input
                type="text"
                className="form-control"
                placeholder="1.0"
                style={inputField}
                defaultValue={1}
                onChange={handleConvertAmount}
              />
            </div>
            <div className="col-md-3">
              <label style={formLabel}>From</label>
              <select
                className="form-control"
                style={inputField}
                onChange={handleConvetFrom}
              >
                {currencies.map((currency) => (
                  <option
                    value={currency}
                    key={currency}
                    selected={currency === "EUR" ? true : false}
                  >
                    {currency}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-md-1 d-flex justify-content-center">
              <img src={Switcher} alt="Switcher Icon" style={switcherIcon} />
            </div>
            <div className="col-md-3">
              <label style={formLabel}>To</label>
              <select
                className="form-control"
                style={inputField}
                onChange={handleConvertTo}
              >
                {currencies.map((currency) => (
                  <option value={currency} key={currency}>
                    {currency}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-md-2">
              <button
                style={convertBtn}
                onClick={convertCurrency}
                disabled={amount > 0 ? false : true}
              >
                Convert
              </button>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-12">
          <Link to="/history" style={historyLink}>
            View conversion history &gt;{" "}
          </Link>
        </div>
      </div>

      <Result from={from} to={to} amount={amount} result={result} />
    </div>
  );
}
