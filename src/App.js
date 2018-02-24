import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class WelcomeHeader extends Component{
  render(){
    return(
      <div className="WelcomeHeader">
        <h1 className="App-title">Synth Reactor</h1>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }
}

class SynthBody extends Component{
  render(){
    return(
      <div className="SynthBody">

        <h2>Mini Moog</h2>
        
        <div className="SynthBodyRow">

          <div className="ControlModule">
            <h3>OSC</h3>
          </div>

          <div className="ControlModule">
            <h3>FIL</h3>
          </div>

          <div className="ControlModule">
            <h3>AMP</h3>
          </div>

          <div className="ControlModule">
            <h3>MOD</h3>
          </div>

          <div className="ControlModule">
            <h3>Patch</h3>
          </div>
        </div>

        <div className="SynthBodyRow">
          <div className="PitchWheel">
          </div>

          <div className="Keyboard">

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

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <WelcomeHeader />
        </header>
        
        <SynthBody />

      </div>
    );
  }
}

export default App;
