import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function History() {
  let [previousData, setPreviousData] = useState(
    JSON.parse(window.localStorage.getItem("history"))
  );

  let homeLink = {
    position: "absolute",
    top: "15%",
    transform: "translateY(10%)",
    color: "#FFF",
    fontSize: "15px",
    lineHeight: "14px",
    opacity: "0.5",
  };
  let historyTable = {
    border: "none",
    color: "#FFF",
    borderCollapse: "separate",
    borderSpacing: "0 26px",
  };
  let tableRow = {
    backgroundColor: "#353535",
    marginTop: "10px",
    borderRadius: "20px",
    border: "1px solid #353535",
    borderRadius: "10px",
    borderTopLeftRadius: "16px",
  };
  let firstChild = {
    borderLeftStyle: "solid",
    borderTopLeftRadius: "15px",
    borderBottomLeftRadius: "15px",
  };
  let lastChild = {
    borderLeftStyle: "solid",
    borderTopRightRadius: "15px",
    borderBottomRightRadius: "15px",
  };

  return (
    <div className="mt-5" style={{ background: "#1A1A1A", height: "100vh" }}>
      <div className="custom-container table-responsive">
        <Link to="/" style={homeLink}>
          &lt; Go back
        </Link>
        <table className="table mt-5 table-borderless" style={historyTable}>
          <thead>
            <tr>
              <th scope="col" className="pl-5">
                Date
              </th>
              <th scope="col">From</th>
              <th scope="col">To</th>
            </tr>
          </thead>
          <tbody>
            { previousData ?
            previousData.map((data, index) => {
              return (
                <tr style={tableRow} className="mt-5">
                  <td className="pl-5" style={firstChild}>
                    {previousData[index][0]}
                  </td>
                  <td>{previousData[index][1]}</td>
                  <td style={lastChild}>{previousData[index][2]}</td>
                </tr>
              );
            }): <h4 className="pl-5">No, History Found</h4>}
          </tbody>
        </table>
      </div>
    </div>
  );
}
