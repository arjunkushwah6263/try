import React from "react";
import { Link } from "react-router-dom";
import backword from './images/backword.png';
import './App.css';
function AboutPhone() {
    return (
    <>
    <div style={{ marginBottom: '20px',  
marginTop: '20px'}}><Link to="/"><img src={backword}   alt="" className="my-image"/></Link> About phone</div>
<hr/>
    <div class="aboutPhoneBox">
        <div class="column-layout">
            <p>Device name<br/>Realme Xt</p>
            <p>Version<br/>Baseband & kernal</p>
        </div>
        <div class="column-layout">
            <p>realme UI version<br/>V2.0</p>
            <p>Android version<br/>11</p>
        </div>
        <div class="column-layout">
            <p>Processor<br/>Qualcomm SDM712<br/>Octa-core</p>
            <p>RAM<br/>8.00GB</p>
        </div>
        <div class="column-layout">
            <p>Device storage<br/>25.22 GB(Available)<br/>128.0GB(Total)</p>
            <p>Legal information<br/>User agreement privacy<br/>policy and more</p>
        </div>
        <div class="column-layout">
            <p>Model<br/>RMX1921</p>
            <p>Simcard status<br/>sim 1: jio<br/>sim 2: Airtel</p>
        </div>
        <div class="column-layout">
            <p>Status<br/>IMEI & IP</p>
            <p>Regularly</p>
        </div>
        <hr/>
    </div> 
        
    </>
        
    )
}
export default AboutPhone;