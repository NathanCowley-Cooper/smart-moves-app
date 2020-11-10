import React, { useEffect, useState } from "react";
import './../../dist/dist.css';
import {Link} from 'react-router-dom';


function StretchDailyPage({match}) {
    useEffect(() => {
      console.log('match is', match.params.id)
      const getStretchAdj = () => {
        //return a promise
        //fetch ergonomic.json
        fetch(`https://smart-moves.herokuapp.com/api/daily/${match.params.id}`)
          .then((res) => res.json())
          .then((stretch) => {
    
            setResult(stretch);
          })
          .catch((err) => {
            console.log(err);
          });
      };
      getStretchAdj ();
    }, [match]);
  
    const [result, setResult] = useState([]);

  return (
    <div className="stretchPage">
        <Link to= "/routines/5f605b719258f504a4067ad0/info">
            <img src="/images/back.png" className="backButtonTwo" alt="Back Button"/>
      </Link>

      <div className="headerImageStretch">
        <img src={result.cover_image_wide} className="stretchImage" alt="Adjustment" />
      </div>
      <div className="stretchInfo">
      <h1>{result.stretch_name}</h1>

      <h4>Steps</h4>
      <div className="stepRow">
        <div className="stepCircle"><h3>1</h3></div>
        <p>{result.step_one}</p>
      </div>

      <div className="stepRow">
        <div className="stepCircle"><h3>2</h3></div>
        <p>{result.step_two}</p>
      </div>

      <div className="stepRow">
        <div className="stepCircle"><h3>3</h3></div>
        <p>{result.step_three}</p>
      </div>

      <div className="rowDuration">
        <p><strong>Duration:</strong> {result.duration}</p>
      </div>
      


      </div>


    </div>
  );
}

export default StretchDailyPage;