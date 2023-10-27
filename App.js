import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes, useLocation } from 'react-router-dom';
import './App.css';
import DisplayAndBrightness from './DisplayAndBrightness';
import Userinfo from './Userinfo';
import AboutPhone from './AboutPhone';
import LocationMode from './LocationMode';
import ConnectionAndSharing from './ConnectionAndSharing';
import SoundAndVibration from './SoundAndVibration';
import AirplaneMode from './AirplaneMode';
import 'font-awesome/css/font-awesome.min.css';

import logo from './images/disp.png';
import profile from './images/profile.png';
import sound from './images/sound.png';
import airplan from './images/airp.png';
import about from './images/about.png';
import loca from './images/location.png';

import connection from './images/con-png.webp';
import forword from './images/forword.png';
import battery from './images/battery.png';

function App() {
  return (
    <Router>
      <div className="container"> {}
        <AppContent />
      </div>
    </Router>
  );
}

function AppContent() {
  const location = useLocation();

  return (
    
    <div>
      <div className=''> <img src={battery}   alt="" className="battery-image"/></div>
      

        <div className='settinicon'>Settings</div>
        <div className="full-width-container">
      <div className="search-container">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input type="text" className="search-input" placeholder="Search Settings" />
      </div>
    </div>
      
      {location.pathname === '/' ? (
        <nav>
          <ul className="nav-menu">
          <li className="my-li">
              
              <Link to="/Userinfo"> <img src={profile}   alt="" className="profile-image"/>Name: Arjun Kushwah<img src={forword}   alt="" className="pro-image"/></Link>
            </li>
            <li className="my-li">
              
              <Link to="/DisplayAndBrightness"> <img src={logo}   alt="" className="my-image"/>DisplayAndBrightness<img src={forword}   alt="" className="conn-image"/></Link>
            </li>
            
            <li className="my-li">
              <Link to="/ConnectionAndSharing"><img src={connection}   alt="" className="my-image"/>ConnectionAndSharing<img src={forword}   alt="" className="for-image"/></Link>
            </li>
            <li className="my-li">
              <Link to="/SoundAndVibration"><img src={sound}   alt="" className="my-image"/>SoundAndVibration<img src={forword}   alt="" className="s-image"/></Link>
            </li>
            <li className="my-li">
              <Link to="/AirplaneMode"><img src={airplan}   alt="" className="my-image"/>AirplaneMode<img src={forword}   alt="" className="airplan-image"/></Link>
            </li>
            <li className="my-li">
              <Link to="AboutPhone"><img src={about}   alt="" className="my-image"/>AboutPhone<img src={forword}   alt="" className="about-image"/></Link>
            </li>

            <li className="my-li">
              <Link to="LocationMode"><img src={loca}   alt="" className="my-image"/>Location<img src={forword}   alt="" className="loca-image"/></Link>
            </li>
          </ul>
        </nav>
      ) : null}

      <Routes>
        <Route path="/Userinfo" element={<Userinfo />} />
        <Route path="/DisplayAndBrightness" element={<DisplayAndBrightness />} />
        <Route path="/AboutPhone" element={<AboutPhone />} />
        <Route path="/ConnectionAndSharing" element={<ConnectionAndSharing />} />
        <Route path="/SoundAndVibration" element={<SoundAndVibration/>} />
        <Route path="/AirplaneMode" element={<AirplaneMode />} />
        <Route path="/LocationMode" element={<LocationMode />} />
      </Routes>
    </div>
  );
}

export default App;
