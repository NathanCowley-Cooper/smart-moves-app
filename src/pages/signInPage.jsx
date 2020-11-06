import React from "react";
import './../dist/dist.css';
import SignInUser from "../components/SignInUser";
import SignIn from "../components/signIn";

class SignInPage extends React.Component {
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
    //const user = this.state;
    return (
        <div className="loginPage">
        <div className="heading_image">
          <img src="/images/login-heading.png" className="loginHeading" alt="Icon"/>
        </div>
        
        <SignIn onSignIn={(fields) => this.onSignIn(fields)} />
        <div>{this.setUser}</div>
  
  
        <div className="googleSignUp">
          <p>Or Sign Up With</p>
          <div className="g-signin2" data-onsuccess="onSignIn">
            <img src="/images/google_icon.png" className="googleIcon" alt="Icon"/>
            <h4>Login with Google</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default SignInPage;
