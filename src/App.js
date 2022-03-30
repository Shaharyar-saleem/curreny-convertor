import './App.css';
import Header from './Components/Header.jsx';
import Convertor from './Components/Convertor.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="row">
        <div className="col-md-9">
        <Convertor />
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
}

export default App;
