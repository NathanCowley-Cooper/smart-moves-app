//Import Components
import React from 'react';
import './../../dist/dist.css';
import SignInUser from "./../../components/User Authentication/signInUser";
import SignIn from "./../../components/User Authentication/signIn";


//React Notification
import { NotificationManager } from 'react-notifications';

class Login extends React.Component  {
  setUser = [];
  onSignIn = async (fields) => {
    //console.log("signupPage got", fields);

    const settings = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(fields)
    };
    try {
      const response = await fetch(
        `https://smart-moves.herokuapp.com/api/auth/login`,
        settings
      );
      const data = await response.json();
      //console.log(data);
      if (!data) {
        console.log("problem signing in");
        NotificationManager.error('Please Check your Credentials & Try Again!', 'Error!', 2000);
      } else {
        //console.log(data.user);
        this.userData = data.user;
        this.User = this.userData;
        this.setUser.push(<SignInUser key="1" userData={this.User} />);
        this.setState(this.userData);
        localStorage.setItem("token", data.token);
      }
    } catch (e) {
      console.log(e.message);
    }
  };

  render() {

    return (
      <div className="loginPage">
        <div className="heading_image">
          <img src="/images/login-heading.png" className="loginHeading" alt="Icon"/>
        </div>
        
        {/* Return Sign In Form */}
        <SignIn onSignIn={(fields) => this.onSignIn(fields)} />
        <div className="loginUser">{this.setUser}</div>
  
  
        <a className="facebook-share" href="http://www.facebook.com/sharer.php?u=https://optimistic-sammet-033af5.netlify.app/" style={{textDecoration: 'none' }}>
          <i className="fab fa-facebook" alt="Icon"></i>
          <h4>Share app to Facebook</h4>
        </a>
      </div>
    );
  }
}

// Export Page Controller
export default Login;


