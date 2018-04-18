import React, { Component } from 'react';

export default class PitchWheel extends Component {
    render(){
      let value = 64;
      return(
        <div>
          <h6 style={{margin: "20% 0 0 0"}}>Pitchwheel</h6>
          <div className="pitchWheel">
            <h6>{value}</h6>
          </div>
        </div>
      );
    }
  }