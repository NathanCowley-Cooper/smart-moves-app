import React, { useEffect, useState } from "react";
import './../../dist/dist.css';
import {Link} from 'react-router-dom';
import Timer from './../../components/Stretch Functionality/timer';






function TricepTimerPage({match}) {
  useEffect(() => {
    console.log('match is', match.params.id)
    const getStretch = () => {
      //return a promise
      //fetch ergonomic.json
      fetch('https://smart-moves.herokuapp.com/api/daily/5f8ea8a562025a600cfa4fb8')
        .then((res) => res.json())
        .then((stretch) => {
  
          setResult(stretch);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getStretch ();
  }, [match]);

  const [result, setResult] = useState([]);

return (
  <div className="stretchPage">
      <Link to= "/routines/dailystretches/5f8ea80462025a600cfa4fb7/timer">
          <img src="/images/back.png" className="backButtonTwo" alt="Back Button"/>
      </Link>

    <div className="headerImageStretch">
      <img src={result.cover_image_wide} className="stretchImage" alt="Adjustment" />
    </div>
    <div className="timerHeading">
      <h1>{result.stretch_name}</h1>
    </div>
    <div className="rowTimer">
      <p><strong>Duration:</strong> {result.duration}</p>
    </div>

    <Timer/>
    
    
    <Link to= "/routines/dailystretches/5f8ea96662025a600cfa4fba/timer" className="timerLink" style={{textDecoration: 'none'}} >
        <div className="next_stretch">
            <div className= "stretchBox">
                <img src="/images/stretches/Shoulder-Stretch.jpg" className="routineStretchImage" alt="Stretch" />
            </div>
            <div className="nextStretch_info">
                <h5>Continue: Shoulder Stretch</h5>
            </div>
        </div>
    </Link>


  </div>
  );
}

export default TricepTimerPage;