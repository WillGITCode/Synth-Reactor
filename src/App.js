import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class WelcomeHeader extends Component{
  render(){
    return(
      <div className="welcomeHeader">
        <h1 className="app-title">Synth Reactor</h1>
        <img src={logo} className="app-logo" alt="logo" />
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
          <AmpModule />
          <ModulationModule />
          <PatchModule />
        </div>

        <div className="synthBodyRow">
          <PitchWheel />

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

          </div>

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

class AmpModule extends Component {
  render(){
    let title = "Amp";
    return(
      <div className="controlModule">
        <h3>{title}</h3>
      </div>
    );
  }
}

class ModulationModule extends Component {
  render(){
    let title = "Modulation";
    return(
      <div className="controlModule">
        <h3>{title}</h3>
      </div>
    );
  }
}

class PatchModule extends Component {
  render(){
    let title = "Patch";
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


class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <WelcomeHeader />
        </header>
        
        <SynthBody />

      </div>
    );
  }
}

export default App;
