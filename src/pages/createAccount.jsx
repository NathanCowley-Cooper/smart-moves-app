import React from 'react';
import { withRouter } from "react-router-dom";
import './../dist/dist.css';
import {Link} from 'react-router-dom';
import SignUp from '../components/signUp.jsx';

//React Notification
import { NotificationManager } from 'react-notifications';

class CreateAccount extends React.Component {
  
  redirectToHome = () => {
    const { history } = this.props;
    if (history) history.push("/login");
  };

  onSignUp = async (fields) => {
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
        `https://smart-moves.herokuapp.com/api/users`,
        settings
      );
      const data = await response.json();
      console.log(`${data.first_name} user created`);
      NotificationManager.success('New Account Created, Please Login!', '', 2000);
    } catch (e) {
      console.log(e.message);
      NotificationManager.error('Error creating Account, Please try Again!','', 2000);
    }
    this.redirectToHome();
  };

  render () {
    return (
      <div className="createAccount">
        <div id="header2">
          <h4>Create Account</h4>
        </div>
        
        <Link to= "/Login">
          <img src="/images/back.png" className="backButton" alt="Back Button"/>
        </Link>

        <SignUp onSignUp={(fields) => this.onSignUp(fields)}/>

        
        <img src="/images/createAccount-footer.png" className="createAccountFooter" alt="Icon"/>
      </div>
    );
  }

}

export default withRouter(CreateAccount);