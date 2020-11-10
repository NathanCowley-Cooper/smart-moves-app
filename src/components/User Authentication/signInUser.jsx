import { useEffect, useContext } from "react";
import './../../dist/dist.css';
import { UserContext } from "./userContext";
import { useHistory } from "react-router-dom";

//React Notification
import { NotificationManager } from 'react-notifications';

function SignInUser(props) {
  const { userData } = props;
  userData["authenticated"] = true;
  const { setUser } = useContext(UserContext);
  const history = useHistory();
  useEffect(() => {
    setUser(userData);
    history.push("/stretchWalkthrough");
    console.log(`Welcome ${userData.first_name}`);
    NotificationManager.success(`Welcome Back ${userData.first_name}`, '',2000);
  }, [setUser, userData, history]);
  return null;
}

export default SignInUser;