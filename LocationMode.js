import React, { useState, useEffect } from 'react';
import airplaneOn from './images/onIcon.jpg';
import airplaneOff from './images/offIcon.jpg';
import { Link } from "react-router-dom";
import backword from './images/backword.png';
import './App.css';
const LocationMode = () => {
  const [isLocationMode, setIsLocationMode] = useState(false);

  useEffect(() => {
    fetch('http://localhost:4009/get-location-mode')
      .then(response => response.json())
      .then(data => setIsLocationMode(data.isLocationMode))
      .catch(error => console.error(error));
  }, []);

  const toggleLocationMode = () => {
    fetch('http://localhost:4009/update-location-mode', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ isLocationMode: !isLocationMode}),
    })
      .then(response => response.json())
      .then(() => setIsLocationMode(!isLocationMode))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <div style={{ marginBottom: '30px', marginTop: '30px'}}>
        <Link to="/"><img src={backword} alt="" className="my-image" /></Link>
        Location
      </div>
      <hr/>
      <p style={{ fontSize: '17px' }} className="my-li"> Location:
        <img
          src={isLocationMode ? airplaneOn : airplaneOff}
          alt=""
          className="air-image"
          onClick={toggleLocationMode}
          style={{ cursor: 'pointer' }}
        />
      </p>
      <p style={{ fontSize: '17px' }}>
        {isLocationMode ? 'Location is: ON' : 'Location is: OFF'}
      </p>
      <hr/>
    </div>
  );
};

export default LocationMode;
