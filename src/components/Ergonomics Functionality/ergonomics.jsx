//Import Components
import React, { useEffect, useState } from "react";
import './../../dist/dist.css';
import {Link} from 'react-router-dom';

//Ergonomic List Component

function Ergonomic() {
  
  //Set getErgonomics
  useEffect(() => {
    getErgonomics ();
  }, []);

  //Use State 
  const [results, setResults] = useState([]);

  const getErgonomics = () => {
    //fetch ergonomic.json
    fetch("https://smart-moves.herokuapp.com/api/ergonomics")
      .then((res) => res.json())
      .then((ergonomics) => {
        const list = [];
        console.log(ergonomics);
        ergonomics.forEach((erg) => {
          console.log(erg.ergonomic_name);
          list.push(
            
            //Set HTML Template
            <li key={erg.ergonomic_name}>
              <Link to={`/ergonomics/${erg._id}/info`} style={{textDecoration: 'none'}}>
                  <div className="result">
                    <div className= "imgBox">
                      <img src={erg.cover_image} className="coverImage" alt="ergonomic" />
                    </div>
                    <h5>{erg.ergonomic_name}</h5>
                  </div>
              </Link>
            </li>

          );
         
        });
        //Set List Results
        setResults(list);
      })
      //Catch Errors
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="ergonomicsList">
      
      {/* Set Ergonomic List */}
      <ul className="list">{results}</ul>

    </div>

  );
}

//Export Component
export default Ergonomic;
