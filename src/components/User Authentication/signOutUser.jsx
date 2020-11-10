import React, { useContext } from "react";
import './../../dist/dist.css';
import { UserContext } from "./userContext";
import { useHistory } from "react-router-dom";
import { User } from "./user";

//React Notification
import { NotificationManager } from 'react-notifications';

function SignOutBtn() {

  const { setUser } = useContext(UserContext);
  const history = useHistory();
  const signOut = () => {
    setUser(User.props);
    localStorage.removeItem("token");
    history.push("/");
    console.log(`See you Next time`);
    NotificationManager.success('Your Now Logged Out, See You Next Time!', '',2000);
  };
  return <button id="menuIcons" onClick={signOut}>
    <img src="/images/sign-out.svg" className="menu-svg" alt="Sign-Out Icon" />
    <h5>Sign Out</h5>
  </button>;
}

export default SignOutBtn;