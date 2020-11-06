import React from 'react';
import './../dist/dist.css';
import LoginNav from './loginNav.jsx';
import {Link} from 'react-router-dom';

class SignIn extends React.Component {
  state = {
    email: "",
    password: "",
    loading: false
  };
  change = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  onSubmit = (e) => {
    e.preventDefault();
    this.props.onSignIn(this.state);
    this.setState({
      email: "",
      password: "",
      loading: true
    });
    setTimeout(() => {
      this.setState({ loading: false });
    }, 2000);
  };

  render () {

    const { loading } = this.state;

    return (
      <form action="" method="post" id="form-login" className = "inline-form">

        <LoginNav/>

        <div className="field">
            <input 
              type ="email"
              className="input" 
              name="email" 
              placeholder ="Email"
              value={this.state.email}
              onChange={(e) => this.change(e)}
            />
        </div>
        
        <div className = "field">
          <input 
            className="input" 
            name="password" 
            type="password"
            placeholder ="Password"
            value={this.state.password}
            onChange={(e) => this.change(e)}
            />
        </div>
        
        <div className = "row_three">
              <div className = "field">
                <button className="login-btn button" onClick={(e) => this.onSubmit(e)} disabled={loading}>
                  {loading && (
                    <i
                      className="fas fa-spinner fa-pulse"
                      style={{ color: "white"}}
                    />
                  )}
                  {!loading && <span>LOGIN</span>}
                </button>
              </div>
        </div>

        <div className = "row_three">
              <Link to= "/stretchWalkthrough">
                <input type ="submit" value ="Continue As A Guest" className="guest-btn button"/>
              </Link>
        </div>
      </form>
      
    );
  }

}

export default SignIn;

