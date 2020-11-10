import React from 'react';
import './../../dist/dist.css';
import LoginNav from './../Navigation/loginNav';


class SignUp extends React.Component {
  state = {
    first_name: "",
    last_name: "",
    gender: "",
    date_of_birth: "",
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
    this.props.onSignUp(this.state);
    this.setState({
      first_name: "",
      last_name: "",
      gender: "",
      date_of_birth: "",
      email: "",
      password: "",
      loading: true
    });
  };
    render () {

      const { loading } = this.state;

        return (
              <form action="" id="form-create-account" className = "inline-form">
                
                  <img src="/images/icon.svg" className="smallIcon" alt="Smart Moves Icon"/>
          
                  <LoginNav/>

                  <div className = "field">
                    <input 
                      className="input" 
                      name="first_name"
                      value= {this.state.first_name}
                      placeholder ="First Name"
                      onChange={(e) => this.change(e)}
                    />
                  </div>
                  <div className = "field">
                    <input 
                      className="input" 
                      name="last_name"
                      value= {this.state.last_name}
                      placeholder ="Last Name"
                      onChange={(e) => this.change(e)}
                    />
                  </div>
                  <div className = "field">
                    <input 
                      className="input"  
                      name="gender"
                      value= {this.state.gender}
                      placeholder ="Gender"
                      onChange={(e) => this.change(e)}
                    />
                  </div>
                  <div className = "field">
                    <input 
                      className="input" 
                      name="date_of_birth"
                      value= {this.state.date_of_birth}
                      placeholder ="Date of Birth"
                      onChange={(e) => this.change(e)}
                    />
                  </div>
                  <div className = "field">
                    <input 
                      className="input" 
                      name="email"
                      value= {this.state.email}
                      placeholder ="Email"
                      onChange={(e) => this.change(e)}
                    />
                  </div>
                  <div className = "field">
                    <input 
                      className="input" 
                      type="password"
                      name="password"
                      value= {this.state.password}
                      placeholder ="Password"
                      onChange={(e) => this.change(e)}
                    />
                  </div>
                  <div className ="submit">
                    <button
                      type="sign up"  
                      className="button submit-btn"
                      onClick={(e) => this.onSubmit(e)}
                    >{loading && (
                    <i
                      className="fas fa-spinner fa-pulse"
                      style={{ color: "white"}}
                    />
                    )}
                      {!loading && <span>CREATE ACCOUNT</span>}
                    </button>
                  </div>
                </form>
          );
    }

}


export default SignUp;