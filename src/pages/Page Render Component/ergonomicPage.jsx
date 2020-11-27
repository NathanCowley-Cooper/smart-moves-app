//Import Controllers
import React, { useEffect, useState } from "react";
import './../../dist/dist.css';
import {Link} from 'react-router-dom';


function ErgonomicPage({match}) {
  //Set getErgonomicAdj
  useEffect(() => {
    console.log('match is', match.params.id)
    const getErgonomicAdj = () => {
      //return a promise
      //fetch ergonomic.json
      fetch(`https://smart-moves.herokuapp.com/api/ergonomics/${match.params.id}`)
        .then((res) => res.json())
        .then((ergonomic) => {
  
          setResult(ergonomic);
        })
        //Catch Error
        .catch((err) => {
          console.log(err);
        });
    };
    getErgonomicAdj ();
  }, [match]);

  const [result, setResult] = useState([]);

  // Return Ergonomic Information
  return (
    <div className="ergonomicPage">
      <Link to= "/home/ergonomics">
            <img src="/images/back.png" className="backButtonTwo" alt="Back Button"/>
      </Link>

      {/* Return Ergonomic Data */}
      <div className="headerImage">
        <img src={result.cover_image} className="ergonomicImage" alt="Adjustment" />
        <h1>{result.ergonomic_name}</h1>
      </div>
      <div className="ErgonomicInfo">
        <div className="titleRow">
          <h4>Steps</h4>
          <Link to={`/ergonomics/${result._id}/video`} className="timerLink" style={{textDecoration: 'none'}} >
            <i className="fab fa-youtube"></i>
          </Link>
        </div>

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

        <div className="row">
          <p><strong>Extra Information:</strong> {result.description}</p>
        </div>


        <Link to= "/progress" className="timerLink" style={{textDecoration: 'none'}} >
          <button className="adjustment-btn button" >Adjustment Complete</button>
        </Link>
      </div>
    </div>
  );
}

//Export Page Controller
export default ErgonomicPage;