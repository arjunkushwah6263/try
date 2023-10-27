import React, { useState, useEffect } from 'react';
import airplaneOn from './images/onIcon.jpg';
import airplaneOff from './images/offIcon.jpg';
import { Link } from "react-router-dom";
import backword from './images/backword.png';
import './App.css';
const AirplaneMode = () => {
  const [isAirplaneMode, setIsAirplaneMode] = useState(false);

  useEffect(() => {
    fetch('http://localhost:4009/get-airplane-mode')
      .then(response => response.json())
      .then(data => setIsAirplaneMode(data.isAirplaneMode))
      .catch(error => console.error(error));
  }, []);

  const toggleAirplaneMode = () => {
    fetch('http://localhost:4009/update-airplane-mode', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ isAirplaneMode: !isAirplaneMode }),
    })
      .then(response => response.json())
      .then(() => setIsAirplaneMode(!isAirplaneMode))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <div style={{ marginBottom: '30px', marginTop: '30px'}}>
        <Link to="/"><img src={backword} alt="" className="my-image" /></Link>
        Airplane Mode
      </div>
      <hr/>
      <p style={{ fontSize: '17px' }} className="my-li"> Airplane Mode:
        <img
          src={isAirplaneMode ? airplaneOn : airplaneOff}
          alt=""
          className="air-image"
          onClick={toggleAirplaneMode}
          style={{ cursor: 'pointer' }}
        />
      </p>
      <p style={{ fontSize: '17px' }}>
        {isAirplaneMode ? 'Airplane Mode is: ON' : 'Airplane Mode is: OFF'}
      </p>
      <hr/>
    </div>
  );
};

export default AirplaneMode;
