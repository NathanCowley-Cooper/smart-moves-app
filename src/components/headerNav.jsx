import React from 'react';
import './../dist/dist.css';
import {NavLink} from 'react-router-dom';

function HeaderNav() {
  
  return (
    <div className="headerNav">
        <NavLink activeClassName="headerbar__link--active" to= "/home/stretches" id="headerIcons" style={{textDecoration: 'none'}}>
            <button className="stretchPage-btn button" >Stretch Routines</button>
        </NavLink>

        <NavLink activeClassName="headerbar__link--active" to= "/home/ergonomics" id="headerIcons" style={{textDecoration: 'none'}}>
            <button className="ergPage-btn button" >Ergonomic Adjustments</button>
        </NavLink>
    </div>
  );
}


export default HeaderNav;