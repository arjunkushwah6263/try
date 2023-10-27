import React from 'react';
import { Link } from 'react-router-dom';
import backword from './images/backword.png';
import profile from './images/profile.png'; 
import './App.css';
const TextWithContainers = ({ text, container1, container2, container3 }) => {
  return (
    <div className="text-with-containers">
      <p>{text}</p>
      <div style={{ marginBottom: '40px', marginTop: '40px' }}>
        <Link to="/">
          <img src={backword} alt="" className="my-image" />
        </Link> Account
      </div>
      <hr />
      
      <div className="containeru">
        <p style={{  fontSize: '16px' }} className="my-li"><img src={profile}   alt="" className="profile-image"/>
          USERNAME: Arjun kushwah
        </p>
      </div>
      <div className="containeru">
        <p style={{  fontSize: '16px' }} className="my-li">
        <img src={profile}   alt="" className="profile-image"/>
        </p>
        <p style={{  fontSize: '14px' }} >My profile:</p>
        <p style={{  fontSize: '12px' }}>Display name, phone number</p>
      </div>
    </div>
  );
};

export default TextWithContainers;
