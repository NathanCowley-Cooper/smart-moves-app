import React from 'react';
import './../../dist/dist.css';
import {Link} from 'react-router-dom';


function StretchWalkthrough() {
  return (
    <div className="stretchWalkthrough">
      <div className="WT_Image">
          <img src="/images/stretchIcon.svg" className="walkthroughImage" alt="Stretch Illustration"/>
      </div>
        <div className="WT_Info">
          
          <h2>Remember to Move!</h2>
          <p>Reguarly get up from sitting at your workstation every 30 minutes. Do gentle stretches and exercises throughout the day.</p>

          <Link to= "/ergonomicWalkthrough">
            <button className="walkthrough-btn button" >Continue</button>
          </Link>

        </div>
    </div>
  );
}

export default StretchWalkthrough;