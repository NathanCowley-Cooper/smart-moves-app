//Import Components
import React, { useContext } from "react";
import './../../dist/dist.css';
import Nav from './../../components/Navigation/nav';
import Header from './../../components/Navigation/header'
import SignOutBtn from "./../../components/User Authentication/signOutUser";
import { UserContext } from "./../../components/User Authentication/userContext";

// Render Menu Page
function Menu() {
  //Get User Data
  const { user } = useContext(UserContext);

  return (
    <div>
      {/* Render Header */}
      <Header/>

      <div className="userBar">
        <img src="/images/user-profile.svg" className="user-svg" alt="User Icon"/>
        <div className="userDetails">
          {/* Return Users Details */}
          <h3>{user.first_name} {user.last_name}</h3>
          <h5>{user.email}</h5>
        </div>
      </div>
      <div className="menuBar">
          <div id="menuIcons" style={{textDecoration: 'none' }}>
              <img src="/images/settings.svg" className="menu-svg" alt="Setting Icon"/>
              <h5>Settings</h5>
          </div>
          <div id="menuIcons" style={{textDecoration: 'none'}}>
              <img src="/images/account.svg" className="menu-svg" alt="Account Icon"/>
              <h5>Account Information</h5>
          </div>
          <div id="menuIcons" style={{textDecoration: 'none'}}>
              <img src="/images/help.svg" className="menu-svg" alt="Help Icon" />
              <h5>Help</h5>
          </div>
          {/* Render Sign Out Button */}
          <SignOutBtn/>
          </div>
      
      {/* Render Nav*/}
      <Nav/>
    </div>
  );
}

//Export Page Controller
export default Menu;