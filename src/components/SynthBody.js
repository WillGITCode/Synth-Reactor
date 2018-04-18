import React, { Component } from 'react';
import OSCModule from './OSCModule';
import FilterModule from './FilterModule';
import LFOModule from './LFOModule';
import EnvelopeModule from './EnvelopeModule';
import PatchModule from './PatchModule';
import PitchWheel from './PitchWheel';
import Keyboard from './Keyboard';

export default class SynthBody extends Component{
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