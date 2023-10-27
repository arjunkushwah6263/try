import React, { useState, useEffect } from 'react';
import airplaneOn from './images/onIcon.jpg';
import airplaneOff from './images/offIcon.jpg';
import { Link } from 'react-router-dom';
import backword from './images/backword.png';
import './App.css';

function ConnectionAndSharing() {
  const [connectionSharingState, setConnectionSharingState] = useState({
    isAirplaneMode: false,
    isHotspot: false,
    isBluetooth: false,
  });

  // Function to make a GET request to retrieve the initial state from the server
  const fetchInitialState = async () => {
    try {
      const response = await fetch('http://localhost:4009/get-connection-and-sharing');

      if (response.ok) {
        const data = await response.json();
        setConnectionSharingState(data);
      } else {
        console.error('Failed to fetch initial state');
      }
    } catch (error) {
      console.error('Error while fetching initial state:', error);
    }
  };

  useEffect(() => {
    // Fetch the initial state when the component mounts
    fetchInitialState();
  }, []);

  const toggleState = async (stateName) => {
    // Toggle the state locally
    setConnectionSharingState({
      ...connectionSharingState,
      [stateName]: !connectionSharingState[stateName],
    });

    // Send the updated state to the server
    try {
      const response = await fetch('http://localhost:4009/update-connection-and-sharing', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...connectionSharingState,
          [stateName]: !connectionSharingState[stateName], // Update the specific state
        }),
      });

      if (response.ok) {
        console.log('State updated successfully');
      } else {
        console.error('Failed to update state');
      }
    } catch (error) {
      console.error('Error while updating state:', error);
    }
  };

  return (
    <div>
      <div style={{ marginBottom: '40px', marginTop: '40px' }}>
        <Link to="/">
          <img src={backword} alt="" className="my-image" />
        </Link> Connection & sharing
      </div>
      <hr />

      <p style={{ fontSize: '17px' }} className="my-li">
        Airplane mode: <img
          src={connectionSharingState.isAirplaneMode ? airplaneOn : airplaneOff}
          alt=""
          className="air-image"
          onClick={() => toggleState('isAirplaneMode')}
          style={{ cursor: 'pointer' }}
        />
      </p>
      <hr />
      <p style={{ fontSize: '17px' }} className="my-li">
        Hotspot: <img
          src={connectionSharingState.isHotspot ? airplaneOn : airplaneOff}
          alt=""
          className="hot-image"
          onClick={() => toggleState('isHotspot')}
          style={{ cursor: 'pointer' }}
        />
      </p>
      <hr />
      <p style={{ fontSize: '17px' }} className="my-li">
        Bluetooth: <img
          src={connectionSharingState.isBluetooth ? airplaneOn : airplaneOff}
          alt=""
          className="blu-image"
          onClick={() => toggleState('isBluetooth')}
          style={{ cursor: 'pointer' }}
        />
      </p>

      <hr />

      <div>
        <p style={{ fontSize: '17px' }} className="my-li">
          Others
        </p>
        <div style={{ marginBottom: '20px', fontSize: '17px' }} className="my-li">
          VPN
        </div>
        <div style={{ marginBottom: '20px', fontSize: '17px' }} className="my-li">
          Private DNS
          <div style={{ color: 'blue', fontSize: '16px' }}>off</div>
        </div>
        <div style={{ marginBottom: '20px', fontSize: '17px' }} className="my-li">
          Anroid Auto
          <div style={{ color: 'blue', fontSize: '16px' }}>Use app on your car display</div>
        </div>
      </div>
      <hr />
      <div className="container">
        <p style={{ color: 'blue', fontSize: '16px' }} className="my-li">
          you might be looking for
        </p>
        <p style={{ fontSize: '17px' }} className="my-li">
          Wi-fi tethering
        </p>
      </div>
    </div>
  );
}

export default ConnectionAndSharing;
