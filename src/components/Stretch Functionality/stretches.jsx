//Import Components
import React, {useEffect, useState} from 'react';
import './../../dist/dist.css';
import {Link} from 'react-router-dom';

function Stretches() {
  //Set getStretches
  useEffect(() => {
    getStretch();
  }, []);

  //Use State 
  const [results, setResults] = useState([]);

  const getStretch =  () => {
    //return a promise
      //fetch rentals.json
      fetch('https://smart-moves.herokuapp.com/api/stretches')
      .then((res) => res.json())
      .then((routine) => {
        const list = [];
        console.log(routine);
        routine.forEach((routine) => {
          console.log(routine.routine_name);
          list.push(
            
            //Set HTML Template
              <li key={routine._id}>
                <Link to={`/routines/${routine._id}/info`} style={{textDecoration: 'none'}}>
                    <div className="result_routine">
                      <div className= "imgBox_stretch">
                        <img src={routine.cover_image} className="coverImage_stretch" alt="Stretch" />
                      </div>
                      <div className="information">
                        <h5>{routine.routine_name}</h5>
                        <h6>{routine.number} Stretches</h6>
                      </div>
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
      <div className="stretches">
         {/* Set Stretches List */}
        <ul className="list_stretch">{results}</ul>
  
      </div>
    );
  }

//Export Component
export default Stretches;