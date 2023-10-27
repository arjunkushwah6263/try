import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import backword from './images/backword.png';
import './App.css';
import modes from './images/modes.jpg';
import logo from './images/disp.png';
import airplaneOn from './images/onIcon.jpg';
import airplaneOff from './images/offIcon.jpg';

const DisplayAndBrightness = () => {
  const [displayBrightnessState, setDisplayBrightnessState] = useState({
    brightness: 50,
    mode: 'light',
    isAutobrightness: false,
    isEyecomfort: false,
    isAutorotate: false,
    isOsi: false,
  });

  useEffect(() => {
    // Fetch Display and Brightness state from the server when the component mounts
    fetch('http://localhost:4009/get-display-brightness')
      .then((response) => response.json())
      .then((data) => {
        if (data && data.brightness) {
          setDisplayBrightnessState(data);
        }
      });
  }, []);

  const updateDisplayBrightnessState = () => {
    // Combine the state updates
    const updatedState = {
      brightness: displayBrightnessState.brightness,
      mode: displayBrightnessState.mode,
      isAutobrightness: displayBrightnessState.isAutobrightness,
      isEyecomfort: displayBrightnessState.isEyecomfort,
      isAutorotate: displayBrightnessState.isAutorotate,
      isOsi: displayBrightnessState.isOsi,
    };

    // Send a single request to update all the states
    fetch('http://localhost:4009/update-display-brightness', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedState),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Log the response from the server
      });
  };

  const handleStateChange = (stateName) => {
    setDisplayBrightnessState((prevState) => ({
      ...prevState,
      [stateName]: !prevState[stateName],
    }));
  };

  const handleBrightnessChange = (e) => {
    const newBrightness = e.target.value;
    setDisplayBrightnessState((prevState) => ({
      ...prevState,
      brightness: newBrightness,
    }));
  };

  const handleModeChange = (e) => {
    const newMode = e.target.value;
    setDisplayBrightnessState((prevState) => ({
      ...prevState,
      mode: newMode,
    }));
  };

  const handleSave = () => {
    updateDisplayBrightnessState();
  };

  return (
    <>
      <h3 to="/" className="no-underline">
        <Link to="/"><img src={backword} alt="" className="my-image" /></Link> Display & brightness
      </h3>
      <div className={displayBrightnessState.mode === 'dark' ? "dark-mode" : "light-mode"} style={{ textAlign: 'center' }}>
        <hr />
        <div>
          <label className='brightm'>Display Mode:</label>
          <div>
            <img src={modes} alt="" className="" />
          </div>
          <div style={{ marginBottom: '40px' }}>
            <label>
              <input
                type="radio"
                name="mode"
                value="light"
                checked={displayBrightnessState.mode === 'light'}
                onChange={handleModeChange}
              />
              Light
            </label>
            <label>
              <input
                type="radio"
                name="mode"
                value="dark"
                checked={displayBrightnessState.mode === 'dark'}
                onChange={handleModeChange}
              />
              Dark
            </label>
          </div>
        </div>
        <hr />
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="brightness"><img src={logo} alt="" className="my-image" /></label>

          <input
            type="range"
            id="brightness"
            min="0"
            max="100"
            value={displayBrightnessState.brightness}
            onChange={handleBrightnessChange}
          />
        </div>
        <p style={{ textAlign: 'center' }}>Brightness: {displayBrightnessState.brightness}%</p>
        <p style={{ textAlign: 'left', fontSize: '17px' }} className="my-li"> Auto brightness: <img
          src={displayBrightnessState.isAutobrightness ? airplaneOn : airplaneOff}
          alt=""
          className="auto-image"
          onClick={() => handleStateChange('isAutobrightness')}
          style={{ cursor: 'pointer' }}
        />
        </p>
        <hr />
        <p style={{ textAlign: 'left', fontSize: '17px' }} className="my-li"> Eye comfort: <img
          src={displayBrightnessState.isEyecomfort ? airplaneOn : airplaneOff}
          alt=""
          className="eye-image"
          onClick={() => handleStateChange('isEyecomfort')}
          style={{ cursor: 'pointer' }}
        />
        </p>
        <hr />
        <p style={{ textAlign: 'left', fontSize: '17px' }} className="my-li"> Auto rotate: <img
          src={displayBrightnessState.isAutorotate ? airplaneOn : airplaneOff}
          alt=""
          className="autob-image"
          onClick={() => handleStateChange('isAutorotate')}
          style={{ cursor: 'pointer' }}
        />
        </p>
        <hr />
        <p style={{ textAlign: 'left', fontSize: '17px' }} className="my-li"> OSIE visual effects: <img
          src={displayBrightnessState.isOsi ? airplaneOn : airplaneOff}
          alt=""
          className="osi-image"
          onClick={() => handleStateChange('isOsi')}
          style={{ cursor: 'pointer' }}
        />
        </p>
        <hr />
        <button onClick={handleSave}>Save</button>
        <div className="containerb">
          <p style={{ color: 'blue', fontSize: '16px' }}>you might be looking for</p>
          <p style={{ fontSize: '15px' }}>Always-On-Display</p>
          <p style={{ fontSize: '15px' }}>Edge lighting</p>
          <p style={{ fontSize: '15px' }}>wallpapers</p>
          <p style={{ fontSize: '15px' }}>Battery Saver</p>
        </div>
      </div>
    </>
  );
};

export default DisplayAndBrightness;
