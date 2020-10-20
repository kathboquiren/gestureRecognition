import React, { Component } from 'react'
import { GoogleLogin } from 'react-google-login';
import { withRouter } from "react-router";
import logo from "./logo.jpg";



const CLIENT_ID = '289906176176-22r8e5h008puqrocbkkrf120skht3vfg.apps.googleusercontent.com';


class GoogleBtn extends Component {
   constructor(props) {
    super();

    this.state = {
      isLogined: false,
      accessToken: ''
    };

    this.login = this.login.bind(this);
    this.handleLoginFailure = this.handleLoginFailure.bind(this);
    this.logout = this.logout.bind(this);
    this.handleLogoutFailure = this.handleLogoutFailure.bind(this);
  }
 
  login (response) {
    if(response.accessToken){
      this.setState(state => ({
        isLogined: true,
        accessToken: response.accessToken
      }));
   

      const googleresponse = {
        Name: response.profileObj.name,
        email: response.profileObj.email,
        token: response.googleId,
        Image: response.profileObj.imageUrl,
        ProviderId: 'Google'
      };
    //   sessionStorage.removeItem("userData");
      sessionStorage.setItem("userData", JSON.stringify(googleresponse));
      this.props.history.push('/dashboard');
    }
  }

  logout (response) {
    this.setState(state => ({
      isLogined: false,
      accessToken: ''
    }));
  }

  handleLoginFailure (response) {
    alert('Failed to log in')
  }

  handleLogoutFailure (response) {
    alert('Failed to log out')
  }

  render() {
    return (
        <div className="loginWrapper">
        <div className="loginBox">
            <div className="login-wrapper">
                <div className="welcome-wrapper">
                   <div className="logo"> <img className="welcome" src={logo} /> </div>
                <GoogleLogin
                clientId={ CLIENT_ID }
                buttonText='Login'
                onSuccess={ this.login }
                onFailure={ this.handleLoginFailure }
                cookiePolicy={ 'single_host_origin' }
                responseType='code,token'
                />
            </div>
            </div>
            </div>
   </div>
   
    )
  }
}

export default withRouter(GoogleBtn);