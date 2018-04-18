import React, { Component } from 'react';
import './App.css';
import WelcomeHeader from './components/WelcomeHeader';
import SynthBody from './components/SynthBody';


class App extends Component {
  constructor(props){
    super(props);
        this.state ={

          userData: {
            user: "William",
            presets: [
              {
                name: "first preset",
                synthName: "Mini Moog",
                isCurrent: true,
                osc: 60,
                fil: 60,
                lfo: 60,
                env: 60,
                patchM: 60
              },
              {
                name: "second preset",
                synthName: "Prophet",   
                isCurrent: false,
                osc: 65,
                fil: 66,
                lfo: 67,
                env: 68,
                patchM: 69
              },
              {
                name: "third preset",
                synthName: "Juno 800",
                isCurrent: false,
                osc: 20,
                fil: 30,
                lfo: 40,
                env: 50,
                patchM: 70
              }
            ]
          }
        

    }

  }

  render() {

    return (
      <div className="app">
        <WelcomeHeader userData={this.state.userData}/>
        
        <SynthBody />

      </div>
    );
  }
}

export default App;
