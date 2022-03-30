import React, {useState, useEffect} from "react";
import Switcher from "../assets/Switcher.png";
import Result from "./Result.jsx";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function Convertor() {
  let [amount, setAmount] = useState(1)
  let [from, setFrom] = useState('EUR')
  let [to, setTo] = useState('USD')
  let [result, setResult] = useState()
  
  let [historyData, setHistoryData] = useState([])

  let currencies = ['USD', 'EUR', 'CHF']

  window.onload = () => {
    convertCurrency()
  }

  let handleConvertAmount = async(e) => {
    setAmount(e.target.value)
  }

  let handleConvetFrom = async(e) => {
    setFrom(e.target.value)
  }

  let handleConvertTo = async(e) => {
    setTo(e.target.value)
  }


  let convertCurrency = async() => {
    let convertFrom = from
    let convertTo = to
    let convertAmount = amount
    let accessKey = 'cce645e42f54228b3438d45c'
    const url = `https://v6.exchangerate-api.com/v6/${accessKey}/pair/${convertFrom}/${convertTo}/${convertAmount}`
    console.log('api url', url)
    let apiResult = await fetch(url)
    let data = await apiResult.json()
    setResult(data.conversion_result)

    if(result){
      let currentDate = new Date()
      let newRecord = [currentDate.toDateString(), convertAmount + ' ' + convertFrom ,data.conversion_result + ' ' + convertTo];
      
      if(!localStorage.getItem('history')){
        localStorage.setItem('history', '[]')
      }
      
      let oldRecord = JSON.parse(localStorage.getItem('history'))
      oldRecord.push(newRecord)
      localStorage.setItem('history', JSON.stringify(oldRecord))
    }
    
 }

//  useEffect(() => {
//    return () => {
//      localStorage.setItem('history', JSON.stringify(historyData))
//      console.log("hi")
//    };
//  }, [historyData]);

  // styling of component
  let convertorHeading = {
    fontWeight: "bold",
    fontSize: "40px",
    lineHeight: "47px",
    color: "white",
    paddingTop: "10%",
  }
  let convertorForm = {
    backgroundColor: "#353535",
    padding: "20px 20px 40px 20px",
    borderRadius: "10px",
    marginTop: "5%",
  }
  let formLabel = {
    color: '#C6C6C6',
    fontSize: '12px',
    fontWeight: 'regular',
    fontFamily: 'Roboto',
    textAlign: 'left',
    paddingBottom: '7px',
    justifyContent: 'start',
  }
  let inputField = {
      backgroundColor: '#454545',
      border: 'none',
      borderRadius: '8px',
      color: 'white',
      height: '40px',
  }
  let convertBtn = {
      backgroundColor: '#f3ff0a',
      color: 'black',
      height: '40px',
      width: '117px',
      borderRadius: '8px',
      marginTop: '37px',
  }
  let historyLink = {
    position: 'absolute',
    top: '60%',
    transform: 'translateY(55%)',
    color: '#FFF',
    fontSize: '15px',
    lineHeight: '14px',
    opacity: '0.5',
    left: '10%',
  }

  return (
    <div className="custom-container">
      <h2 style={convertorHeading}>Convert currencies in real-time.</h2>
        <div className="row">
          <div className="col-md-9">
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
          <select className="form-control" style={inputField} onChange={handleConvetFrom}>
            {currencies.map(currency => 
              <option value={currency} key={currency} selected={currency ===  'EUR' ? true : false} >{currency}</option> 
            )}
          </select>

          </div>
          <div className="col-md-1 d-flex justify-content-center">
            <img src={Switcher} alt="Switcher Icon" style={{marginTop: '50px'}} />
            </div>
          <div className="col-md-3">
            <label style={formLabel}>To</label>
            <select className="form-control" style={inputField} onChange={handleConvertTo}>
            {currencies.map(currency => 
              <option value={currency} key={currency}>{currency}</option> 
            )}
          </select>
          </div>
          <div className="col-md-2">
              <button style={convertBtn} onClick={convertCurrency}>Convert</button>
          </div>
            </div>
          </div>
          <div className="col-md-3">
          <Link to="/history" style={historyLink}>View conversion history &gt; </Link>
          </div>
        </div>

      <Result from={from} to={to} amount={amount} result={result} />
    </div>
  );
}
