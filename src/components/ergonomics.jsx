import React, { useEffect, useState } from "react";
import './../dist/dist.css';
import {Link} from 'react-router-dom';


function Ergonomic() {
  useEffect(() => {
    getErgonomics ();
  }, []);

  const [results, setResults] = useState([]);

  const getErgonomics = () => {
    //return a promise
    //fetch ergonomic.json
    fetch("https://smart-moves.herokuapp.com/api/ergonomics")
      .then((res) => res.json())
      .then((ergonomics) => {
        const list = [];
        console.log(ergonomics);
        ergonomics.forEach((erg) => {
          console.log(erg.ergonomic_name);
          list.push(
            
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
        setResults(list);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="ergonomicsList">
      <ul className="list">{results}</ul>

      
    </div>

  );
}


export default Ergonomic;
