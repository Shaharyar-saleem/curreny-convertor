import './App.css';
import Header from './Components/Header.jsx';
import Convertor from './Components/Convertor.jsx';
import History from './Components/History';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Header />
          <Routes>
            <Route path="/" exact="true" element={<Convertor />}/>
            <Route path="/history" exact="true" element={<History />}/>
          </Routes>  
    </div>
  );
}

export default App;
