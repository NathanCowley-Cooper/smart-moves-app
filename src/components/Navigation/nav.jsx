//Import Components
import React from 'react';
import './../../dist/dist.css';
import {NavLink} from 'react-router-dom';

//Navigation Component
function Nav() {
  
  return (
    <nav>
      <div id="navigtaion">

        <NavLink activeClassName="mainNav__link--active" to= "/home" id="navIcons" style={{textDecoration: 'none'}}>
          <button className="mainNavIcon" >
                <img src="/images/home.svg" className="activeNav" alt="Home Icon"/>
                <h5>Home</h5>
          </button>
        </NavLink>

        <NavLink activeClassName="mainNav__link--active" to= "/progress" id="navIcons" style={{textDecoration: 'none'}}>
          <button className="mainNavIcon" >
            <img src="/images/progress.svg" className="activeNav" alt="Progress Icon"/>
            <h5>Progress</h5>
          </button>
        </NavLink>
        
        <NavLink activeClassName="mainNav__link--active" to= "/menu" id="navIcons" style={{textDecoration: 'none'}}>
          <button className="mainNavIcon" >
            <img src="/images/menu.svg" className="activeNav" alt="Menu Icon" />
            <h5>Menu</h5>
          </button>
        </NavLink>

      </div>
    </nav>
  );
}

//Export Component
export default Nav;

