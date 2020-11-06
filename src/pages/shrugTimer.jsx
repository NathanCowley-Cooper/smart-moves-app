import React, { useEffect, useState } from "react";
import './../dist/dist.css';
import {Link} from 'react-router-dom';
import ShortTimer from '../components/shortTimer';


function ShrugTimerPage({match}) {
  useEffect(() => {
    console.log('match is', match.params.id)
    const getStretch = () => {
      //return a promise
      //fetch ergonomic.json
      fetch('https://smart-moves.herokuapp.com/api/office/5f605c919258f504a4067ad1')
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
      <Link to= "/routines/5f89a323b3f43055f41a4635/info">
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

    <Link to= "/routines/officestretches/5f90436a62025a600cfa4fbb/timer" className="timerLink" style={{textDecoration: 'none'}} >
        <div className="next_stretch">
        <div className= "stretchBox">
          <img src="/images/stretches/behindHead.jpg" className="routineStretchImage" alt="Stretch" />
        </div>
        <div className="nextStretch_info">
          <h5>Continue: Behind The Head</h5>
        </div>
      </div>
    </Link>


  </div>
  );
}

export default ShrugTimerPage;