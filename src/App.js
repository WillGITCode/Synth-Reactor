import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let userData = {
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


class WelcomeHeader extends Component{
  render(){
    return(
      <div className="app-header">
        <div className="welcomeHeader">
          <h1 className="app-title">Synth Reactor</h1>
          <div className="app-header-username">
            <img src={logo} className="app-logo" alt="logo" />
            <h3>Logged in as {userData.user}</h3>
          </div>
        </div>
      </div>
    );
  }
}

class SynthBody extends Component{
  render(){
    return(
      <div className="synthBody">

        <h2>Mini Moog</h2>
        
        <div className="synthBodyRow">
          <OSCModule />
          <FilterModule />
          <LFOModule />
          <EnvelopeModule />
          <PatchModule />
        </div>

        <div className="synthBodyRow">
          <PitchWheel />
          <Keyboard />
        </div>

      </div>
    );
  }
}

class OSCModule extends Component {
  render(){
    let title = "OSC";
    return(
      <div className="controlModule">
        <h3>{title}</h3>
      </div>
    );
  }
}

class FilterModule extends Component {
  render(){
    let title = "Filter";
    return(
      <div className="controlModule">
        <h3>{title}</h3>
      </div>
    );
  }
}

class LFOModule extends Component {
  render(){
    let title = "LFO";
    return(
      <div className="controlModule">
        <h3>{title}</h3>
      </div>
    );
  }
}

class EnvelopeModule extends Component {
  render(){
    let title = "Envelope";
    return(
      <div className="controlModule">
        <h3>{title}</h3>
      </div>
    );
  }
}

class PatchModule extends Component {
  render(){
    let title = "Patch Matrix";
    return(
      <div className="controlModule">
        <h3>{title}</h3>
      </div>
    );
  }
}

class PitchWheel extends Component {
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

class Keyboard extends Component {
  render(){
    return(
      <div className="keyboard">
        <li>                
          <div className="white">                        
          </div>
          <div className="black">
          </div>    
        </li> 
        <li>                
            <div className="white">                         
            </div>
            <div className="black">
            </div>   
        </li> 
        <li>                
            <div className="white">                            
            </div>
        </li> 
        <li>                
            <div className="white">                      
            </div>
            <div className="black">
            </div>      
        </li> 
        <li>                
            <div className="white">                            
            </div>
            <div className="black">
            </div>
        </li> 
        <li>                
            <div className="white">                        
            </div>
            <div className="black">
            </div>    
        </li> 
        <li>                
            <div className="white">                          
            </div>
        </li>

        <li>                
          <div className="white">                        
          </div>
          <div className="black">
          </div>    
        </li> 
        <li>                
            <div className="white">                         
            </div>
            <div className="black">
            </div>   
        </li> 
        <li>                
            <div className="white">                            
            </div>
        </li> 
        <li>                
            <div className="white">                      
            </div>
            <div className="black">
            </div>      
        </li> 
        <li>                
            <div className="white">                            
            </div>
            <div className="black">
            </div>
        </li> 
        <li>                
            <div className="white">                        
            </div>
            <div className="black">
            </div>    
        </li> 
        <li>                
            <div className="white">                          
            </div>
        </li>
        <li>                
            <div className="white">                          
            </div>
        </li>
      </div>
    );
  }
}


class App extends Component {
  render() {
    return (
      <div className="app">
          <WelcomeHeader />
        
        <SynthBody />

      </div>
    );
  }
}

export default App;
