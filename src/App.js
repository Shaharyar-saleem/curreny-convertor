import "./App.css";
import Header from "./Components/Header.jsx";
import Convertor from "./Components/Convertor.jsx";
import History from "./Components/History";
import Alert from "./Components/Alert";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);

  const createAlert = (message, typ) => {
    setAlert({
      msg: message,
      type: typ,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          exact="true"
          element={<Convertor alert={createAlert} />}
        />
        <Route path="/history" exact="true" element={<History />} />
      </Routes>
      <Alert alertBox={alert} />
    </div>
  );
}

export default App;
