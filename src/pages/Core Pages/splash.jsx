import React from 'react';
import './../../dist/dist.css';
import {Link} from 'react-router-dom';


function Splash() {
  return (
    <div className="splashScreen">
      <div className="splashIcon">
      <img src="./images/icon-white.svg" className="Icon" alt="Icon"/>
      </div>
      <div className="buttons">
        <Link to= "/login">
          <button className="loginPage-btn button" >Login</button>
        </Link>

        <Link to= "/createAccount">
          <button className="createPage-btn button" >Create Account</button>
        </Link>
      </div>
      
    </div>
  );
}

export default Splash;
