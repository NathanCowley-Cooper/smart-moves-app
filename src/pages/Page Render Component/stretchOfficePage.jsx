//Import Components
import React, { useEffect, useState } from "react";
import './../../dist/dist.css';
import {Link} from 'react-router-dom';

//Return Office Stretch Page 
function StretchOfficePage({match}) {
    useEffect(() => {
      console.log('match is', match.params.id)
      const getStretchAdj = () => {
        //return a promise
        //fetch ergonomic.json
        fetch(`https://smart-moves.herokuapp.com/api/office/${match.params.id}`)
          .then((res) => res.json())
          .then((stretch) => {
    
            setResult(stretch);
          })
          // Catch Error
          .catch((err) => {
            console.log(err);
          });
      };
      //Get Stretch Adjustment Info
      getStretchAdj ();
    }, [match]);
  
    const [result, setResult] = useState([]);

  // Return Stretch Information
  return (
    <div className="stretchPage">
        <Link to= "/routines/5f89a323b3f43055f41a4635/info">
            <img src="/images/back.png" className="backButtonTwo" alt="Back Button"/>
        </Link>
      {/* Return Stretch Data */}
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

      <div className="rowDuration2">
        <p><strong>Duration:</strong> {result.duration}</p>
      </div>

      <div className="rowPurpose">
        <p><strong>Purpose:</strong> {result.purpose}</p>
      </div>
      


      </div>


    </div>
  );
}

//Export Page
export default StretchOfficePage;