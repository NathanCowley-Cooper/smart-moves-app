//Import Components
import React from 'react';
import './../../dist/dist.css';
import {NavLink} from 'react-router-dom';

//Home Page--Header Nav Component
function HeaderNav() {
  
  return (
    <div className="headerNav">
        {/*Set Active Class*/}
        <NavLink activeClassName="headerbar__link--active" to= "/home/stretches" id="headerIcons" style={{textDecoration: 'none'}}>
            <button className="stretchPage-btn button" >Stretch Routines</button>
        </NavLink>

        <NavLink activeClassName="headerbar__link--active" to= "/home/ergonomics" id="headerIcons" style={{textDecoration: 'none'}}>
            <button className="ergPage-btn button" >Ergonomic Adjustments</button>
        </NavLink>
    </div>
  );
}

//Export Component
export default HeaderNav;