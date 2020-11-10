import React from 'react';
import './../../dist/dist.css';
import {Link} from 'react-router-dom';


function ErgonomicWalkthrough() {
  return (
    <div className="ergonomicWalkthrough">
      <div className="WT_Image">
          <img src="/images/ergonomicAdjustments.svg" className="walkthroughImage" alt="Ergonomic Illustration"/>
      </div>
        <div className="WT_Info">
          
          <h2>Don’t Slouch!</h2>
          <p>Use our quick ergonomic adjustment tips to fix your workplace setup! Remember to sit in a comfortable position, with well supported posture.</p>

          <Link to= "/home/stretches">
            <button className="walkthrough-btn button" >Get Started</button>
          </Link>

        </div>
    </div>
  );
}

export default ErgonomicWalkthrough;