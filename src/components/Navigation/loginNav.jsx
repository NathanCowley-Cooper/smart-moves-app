//Import Components
import React from 'react';
import './../../dist/dist.css';
import {NavLink} from 'react-router-dom';

//Nav--Switch Between Login & Create Account
function LoginNav() {
  
  return (
    <div className="loginNav">
        <NavLink activeClassName="loginBar__link--active" to= "/login" id="headerIcons" style={{textDecoration: 'none'}}>
          <h6>Login</h6>
        </NavLink>

        <NavLink activeClassName="loginBar__link--active" to= "/createAccount" id="headerIcons" style={{textDecoration: 'none'}}>
          <h6>Create Account</h6>
        </NavLink>
    </div>
  );
}

//Export Component
export default LoginNav;