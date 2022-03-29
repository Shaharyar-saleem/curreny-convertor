import React from "react";
import Switcher from "../assets/Switcher.png";

export default function Convertor() {
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
      webkitAppearance: 'none',
  }
  let convertBtn = {
      backgroundColor: '#f3ff0a',
      color: 'black',
      height: '40px',
      width: '117px',
      borderRadius: '8px',
      marginTop: '35px',
  }
  return (
    <div>
      <h2 style={convertorHeading}>Convert currencies in real-time.</h2>
      <form style={convertorForm}>
        <div className="row">
          <div className="col-md-3">
            <label style={formLabel}>Amount</label>
            <input
              type="text"
              className="form-control"
              value="1.00"
              style={inputField}
            />
          </div>
          <div className="col-md-3">
          <label style={formLabel}>From</label>
            <input
              type="number"
              className="form-control"
              value="1.00"
              style={inputField}
            />
          </div>
          <div className="col-md-1 d-flex justify-content-center">
            <img src={Switcher} alt="Switcher Icon" style={{marginTop: '50px'}} />
            </div>
          <div className="col-md-3">
            <label style={formLabel}>To</label>
            <input
              type="number"
              className="form-control"
              value="1.00"
              style={inputField}
            />
          </div>
          <div className="col-md-2">
              <input type="submit" value="Convert" style={convertBtn} />
          </div>
        </div>
      </form>
    </div>
  );
}
