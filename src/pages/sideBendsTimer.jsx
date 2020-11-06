import React, { useEffect, useState } from "react";
import './../dist/dist.css';
import {Link} from 'react-router-dom';
import ShortTimer from '../components/shortTimer';


function SideBendsTimerPage({match}) {
  useEffect(() => {
    console.log('match is', match.params.id)
    const getStretch = () => {
      //return a promise
      //fetch ergonomic.json
      fetch('https://smart-moves.herokuapp.com/api/office/5f9043dd62025a600cfa4fbc')
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
      <Link to= "/routines/officestretches/5f90436a62025a600cfa4fbb/timer">
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

    <ShortTimer/>

    <Link to= "/routines/officestretches/5f9044a962025a600cfa4fbd/timer" className="timerLink" style={{textDecoration: 'none'}} >
        <div className="next_stretch">
        <div className= "stretchBox">
          <img src="/images/stretches/Backward Reach.jpg" className="routineStretchImage" alt="Stretch" />
        </div>
        <div className="nextStretch_info">
          <h5>Continue: Backward Reach</h5>
        </div>
      </div>
    </Link>


  </div>
  );
}

export default SideBendsTimerPage;