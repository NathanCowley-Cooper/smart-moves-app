//Import Components
import React, { useEffect, useState } from "react";
import './../../dist/dist.css';
import {Link} from 'react-router-dom';
import Timer from './../../components/Stretch Functionality/timer';

//Return Seat Forward Stretch Timer Page
function SeatForwardTimerPage({match}){
    useEffect(() => {
        console.log('match is', match.params.id)
        const getStretch = () => {
          //return a promise
          //fetch ergonomic.json
          fetch('https://smart-moves.herokuapp.com/api/daily/5f8ea80462025a600cfa4fb7')
            .then((res) => res.json())
            .then((stretch) => {
      
              setResult(stretch);
            })
            .catch((err) => {
              console.log(err);
            });
        };
        //Get Stretch Adjustment Info
        getStretch ();
      }, [match]);
    
      const [result, setResult] = useState([]);
    
    return (
      <div className="stretchPage">
          <Link to= "/routines/dailystretches/5f605c919258f504a4067ad1/timer">
              <img src="/images/back.png" className="backButtonTwo" alt="Back Button"/>
          </Link>
    
        {/* Return Stretch Data */}
        <div className="headerImageStretch">
          <img src={result.cover_image_wide} className="stretchImage" alt="Adjustment" />
        </div>
        <div className="timerHeading">
          <h1>{result.stretch_name}</h1>
        </div>
        <div className="rowTimer">
           <p><strong>Duration:</strong> {result.duration}</p>
        </div>
    
        {/* Return Countdown Timer */}
        <Timer/>
        
        <Link to= "/routines/dailystretches/5f8ea8a562025a600cfa4fb8/timer" className="timerLink" style={{textDecoration: 'none'}} >
            <div className="next_stretch">
                <div className= "stretchBox">
                    <img src="/images/stretches/Triceps-Stretch.jpg" className="routineStretchImage" alt="Stretch" />
                </div>
                <div className="nextStretch_info">
                    <h5>Continue: Tricep Stretch</h5>
                </div>
            </div>
        </Link>
    
    
      </div>
      );
    }

//Export Page
export default SeatForwardTimerPage;