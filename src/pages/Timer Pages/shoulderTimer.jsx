//Import Components
import React, { useEffect, useState } from "react";
import './../../dist/dist.css';
import {Link} from 'react-router-dom';
import Timer from './../../components/Stretch Functionality/timer';

//Return Shoulder Stretch Timer Page 
function ShoulderTimerPage({match}) {
  useEffect(() => {
    console.log('match is', match.params.id)
    const getStretch = () => {
      //return a promise
      //fetch ergonomic.json
      fetch('https://smart-moves.herokuapp.com/api/daily/5f8ea96662025a600cfa4fba')
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
      <Link to= "/routines/dailystretches/5f8ea8a562025a600cfa4fb8/timer">
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
    
    <Link to= "/progress" className="timerLink" style={{textDecoration: 'none'}} >
                <button className="timerComplete-btn button" >Stretch Completed</button>
    </Link>


  </div>
  );
}

//Export Page
export default ShoulderTimerPage;