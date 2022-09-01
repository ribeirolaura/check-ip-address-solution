import "./App.css";
import {useState} from 'react';

function App() {

  const [IPNumber, setIPNumber] = useState(); 

  function getIPAddress() {
    fetch('https://api.ipify.org/?format=json')
      .then(res => res.json())
      .then(data => setIPNumber(data.ip))
  }



  return (
    <div className="App">
      <h1>Check IP Solution</h1>
      <button onClick={getIPAddress} className="main-btn">Check your IP</button>
      <span>Your IP Address is: </span>
      <span>{IPNumber}</span>
    </div>
  );
}

export default App;
