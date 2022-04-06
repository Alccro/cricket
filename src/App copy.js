import React, { Component } from 'react';
import Teams from './components/Teams';
import Players from './components/Players';
import Rules from './components/Rules';
import Board from './components/Board';
import ErrorBoundary from './components/ErrorBoundary';
import { statsFile } from './components/statsFile';


import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        homeTeam: 'Select team',
        awayTeam: 'Select team',
        player1Value: 'Opener'
    };
    this.handleHomeTeamChange = this.handleHomeTeamChange.bind(this);
    this.handleAwayTeamChange = this.handleAwayTeamChange.bind(this);
    this.handlePlayer1Change = this.handlePlayer1Change.bind(this);
  }

  handleHomeTeamChange(e) {
    this.setState({
        homeTeam: e.target.value,
      });
    }
    handleAwayTeamChange(e) {
      this.setState({
        awayTeam: e.target.value,
      });
    }
    handlePlayer1Change(e) {
      this.setState({
        player1Value : e.target.value,
      });
    }
    homePlayerArray() {
      const filteredArray = statsFile.filter(element => {
        return element.Country === this.state.homeTeam
      })
      const sortedArray = filteredArray.sort((a,b) => (a.Player > b.Player) ? 1 : ((b.Player > a.Player) ? -1 : 0));
      return sortedArray;
    }
    homePlayerStats() {
      const filter = this.homePlayerArray().filter(element => {
        return element.Player === this.state.player1Value
      })
      return filter
    }
    
    
    render() {
    console.log('home',this.state.homeTeam)
    console.log('away', this.state.awayTeam)
    console.log('player',this.state.player1Value)
    console.log('homePlayerArray', this.homePlayerArray())
    console.log('playerstats', this.homePlayerStats())
    return (
      <>
        <ErrorBoundary>
          <Teams 
            handleHomeTeamChange={this.handleHomeTeamChange}
            handleAwayTeamChange={this.handleAwayTeamChange}
            homeTeam={this.state.homeTeam}
            awayTeam={this.state.awayTeam}
          />
        </ErrorBoundary>
        <ErrorBoundary>
          <Players 
            handlePlayer1Change={this.handlePlayer1Change}
            homeTeam={this.state.homeTeam}
            awayTeam={this.state.awayTeam}
            homePlayerArray={this.homePlayerArray()}
            homePlayerStats={this.homePlayerStats()}
            player1Value={this.state.player1Value}
          />
        </ErrorBoundary>
        <ErrorBoundary>
          <Rules />
        </ErrorBoundary>
        <ErrorBoundary>
          <Board />
        </ErrorBoundary>
      </>
    )
  }
  
}

export default App;
