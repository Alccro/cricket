import React, { Component } from 'react';
import Teams from './components/Teams';
import Players from './components/Players';

import './App.css';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {  value: 'Select home team' }; 

      this.handleTeamChange = this.handleTeamChange.bind(this);
  }
      
  handleTeamChange(e) {
      this.setState(e.target.value);
  }
  
  render() {
  return (
    <>
      <div className='main'>
          <Teams value={'Select home team'} onTeamChange={this.handleTeamChange} />
          <Players />
      </div>
    </>
  );
}
}

export default App;
