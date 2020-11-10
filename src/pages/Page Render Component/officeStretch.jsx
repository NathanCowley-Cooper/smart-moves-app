//Import Controllers
import React, {useEffect, useState} from 'react';
import './../../dist/dist.css';
import {Link} from 'react-router-dom';

function OfficeStretches() {
  //Set getOfficeStretches
  useEffect(() => {
    getOfficeStretch();
  }, []);

  const [results, setResults] = useState([]);

  const getOfficeStretch =  () => {
    //return a promise
      //fetch officeStretch.json
      fetch('https://smart-moves.herokuapp.com/api/office')
      .then((res) => res.json())
      .then((stretches) => {
        const list = [];
        console.log(stretches);
        stretches.forEach((stretch) => {
          console.log(stretch.stretch_name);
          list.push(
            
            // Return Office Stretch Info
            <li key={stretch._id}>
              <Link to={`/routines/officeStretches/${stretch._id}/info`} style={{textDecoration: 'none'}}>
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
    // Set Results
    setResults(list);
    })
    //Catch Error
    .catch((err) => {
    console.log(err);
    });
    };

    return (
      <div className="officestretches">
        <div className="officeheadingImage">
          <Link to= "/home/stretches">
            <img src="/images/back.png" className="backButtonTwo" alt="Back Button"/>
          </Link>
        </div>
        <div className="heading">
            <h5>Office Stretches</h5>
            <h6>4 Stretches</h6>
        </div>

        <ul className="list_stretches">
          {/* Return Office Stretches */}
          {results}
          <Link to= "/routines/officestretches/5f605c919258f504a4067ad1/timer" class="timerLink" style={{textDecoration: 'none'}} >
                <button className="timer-btn button" >Start Stretch</button>
          </Link>
        </ul>


      </div>
    );
  }

//Export Page Controller
export default OfficeStretches;