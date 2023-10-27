import React, { useState, useEffect } from 'react';
import airplaneOn from './images/onIcon.jpg';
import airplaneOff from './images/offIcon.jpg';
import { Link } from "react-router-dom";
import backword from './images/backword.png';
import './App.css';
const Location = () => {
  const [isLocation, setIsLocation] = useState(false);

  useEffect(() => {
    fetch('http://localhost:4009/get-airplane-mode')
      .then(response => response.json())
      .then(data => setIsLocation(data.isLocation))
      .catch(error => console.error(error));
  }, []);

  const toggleLocation= () => {
    fetch('http://localhost:4009/update-airplane-mode', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ isLocation: !isLocation }),
    })
      .then(response => response.json())
      .then(() => setIsLocation(!isLocation))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <div style={{ marginBottom: '30px', marginTop: '30px'}}>
        <Link to="/"><img src={backword} alt="" className="my-image" /></Link>
        Location
      </div>
      <hr/>
      <p style={{ fontSize: '17px' }} className="my-li"> Airplane Mode:
        <img
          src={isLocation ? airplaneOn : airplaneOff}
          alt=""
          className="air-image"
          onClick={toggleLocation}
          style={{ cursor: 'pointer' }}
        />
      </p>
      <p style={{ fontSize: '17px' }}>
        {isLocation? 'Location is: ON' : 'Location is: OFF'}
      </p>
      <hr/>
    </div>
  );
};

export default Location;
