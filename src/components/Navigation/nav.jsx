import React from 'react';
import './../../dist/dist.css';
import {NavLink} from 'react-router-dom';

function Nav() {
  
  return (
    <nav>
      <div id="navigtaion">
        <NavLink activeClassName="mainNav__link--active" to= "/home" id="navIcons" style={{textDecoration: 'none'}}>
            <img src="/images/home.svg" className="menuIcon" alt="Home Icon"/>
            <h5>Home</h5>
        </NavLink>
        <NavLink activeClassName="mainNav__link--active" to= "/progress" id="navIcons" style={{textDecoration: 'none'}}>
            <img src="/images/progress.svg" className="menuIcon" alt="Progress Icon"/>
            <h5>Progress</h5>
        </NavLink>
        <NavLink activeClassName="mainNav__link--active" to= "/menu" id="navIcons" style={{textDecoration: 'none'}}>
            <img src="/images/menu.svg" className="menuIcon" alt="Menu Icon" />
            <h5>Menu</h5>
        </NavLink>
      </div>
    </nav>
  );
}


export default Nav;

