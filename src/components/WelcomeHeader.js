import React, { Component } from "react";
import logo from '../logo.svg';


export default class WelcomeHeader extends Component {
    render(){
      return(
        <div className="app-header">
          <div className="welcomeHeader">
            <h1 className="app-title">Synth Reactor</h1>
            <div className="app-header-username">
              <img src={logo} className="app-logo" alt="logo" />
              <h3>Logged in as {this.props.userData.user}</h3>
            </div>
          </div>
        </div>
      );
    }
  }

