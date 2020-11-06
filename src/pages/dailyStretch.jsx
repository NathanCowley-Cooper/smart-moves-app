import React, {useEffect, useState} from 'react';
import './../dist/dist.css';
import {Link} from 'react-router-dom';

function DailyStretches() {
  useEffect(() => {
    getDailyStretch();
  }, []);

  const [results, setResults] = useState([]);

  const getDailyStretch =  () => {
    //return a promise
      //fetch rentals.json
      fetch('https://smart-moves.herokuapp.com/api/daily')
      .then((res) => res.json())
      .then((stretches) => {
        const list = [];
        console.log(stretches);
        stretches.forEach((stretch) => {
          console.log(stretch.stretch_name);
          list.push(
            
            
            <li key={stretch.stretch_name}>
              <Link to={`/routines/dailyStretches/${stretch._id}/info`} style={{textDecoration: 'none'}}>
                <div className="result_stretch">
                  <div className= "stretchBox">
                      <img src={stretch.cover_image} className="routineStretchImage" alt="Stretch" />
                  </div>
                  <div className="stretch_info">
                      <h5>{stretch.stretch_name}</h5>
                  </div>
                    <img src="/images/next_btn.png" className="nextBtn" alt="Next Button"/>
                </div>
              </Link>

            </li>

            );
                
    });
    setResults(list);
    })
    .catch((err) => {
    console.log(err);
    });
    };





    return (
      <div className="dailystretches">
        <div className="dailyheadingImage">
          <Link to= "/home/stretches">
            <img src="/images/back.png" className="backButtonTwo" alt="Back Button"/>
          </Link>
        </div>
        <div className="heading">
            <h5>Daily Stretches</h5>
            <h6>4 Stretches</h6>
        </div>

        <ul className="list_stretches">
            {results}
            <Link to= "/routines/dailystretches/5f605c919258f504a4067ad1/timer" class="timerLink" style={{textDecoration: 'none'}} >
                <button className="timer-btn button" >Start Stretch</button>
            </Link>
          </ul>

      </div>
    );
  }


export default DailyStretches;