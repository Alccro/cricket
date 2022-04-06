import React, { useState } from 'react';
import Teams from './components/Teams';
import Players from './components/Players';
import Rules from './components/Rules';
import Board from './components/Board';
import ErrorBoundary from './components/ErrorBoundary';
import { statsFile } from './components/statsFile';


import './App.css';

const intialValues = {
  home: 'Choose team',
  away: 'Choose team',
  homeTeam: '',
  awayTeam: '',
  homePlayer1: 'Choose Opener',
  homePlayer2: 'Choose Opener',
  awayPlayer1: 'Choose Opener'
};

function App() {
  const [values, setValues] = useState(intialValues);
    
  const handleInputChange = (e) => {
      const { name, value } = e.target;
        setValues({
          ...values,
          [name]: value,
      });
  };
  
  function homePlayerArray() {
    const filteredArray = statsFile.filter(element => {
      return element.Country === values.home
    })
    const sortedArray = filteredArray.sort((a,b) => (a.Player > b.Player) ? 1 : ((b.Player > a.Player) ? -1 : 0));
    return sortedArray;
  }
  function homePlayer1Stats() {
    const filter = homePlayerArray().filter(element => {
      return element.Player === values.homePlayer1
    })
    return filter
  }
  function homePlayer2Stats() {
    const filter = homePlayerArray().filter(element => {
      return element.Player === values.homePlayer2
    })
    return filter
  }
  function awayPlayerArray() {
    const filteredArray = statsFile.filter(element => {
      return element.Country === values.away
    })
    const sortedArray = filteredArray.sort((a,b) => (a.Player > b.Player) ? 1 : ((b.Player > a.Player) ? -1 : 0));
    return sortedArray;
  }
  
  console.log('home:', values.home)
  console.log('away:', values.away)
  console.log('homePlayer1:', values.homePlayer1)
  console.log('homePlayer2:', values.homePlayer2)
  console.log('awayPlayer1:', values.awayPlayer1)
  console.log(homePlayerArray())
    return (
      <>
        <h1>Cricket Simulator</h1>
        <ErrorBoundary>
          <Teams
            handleInputChange={handleInputChange}
            homeTeam={values.home}
            awayTeam={values.away}
          />

        </ErrorBoundary>
        <ErrorBoundary>
          <Players 
            handleInputChange={handleInputChange}
            homePlayer1={values.homePlayer1}
            homePlayer2={values.homePlayer2}
            awayPlayer1={values.awayPlayer1}
            homePlayerArray={homePlayerArray()}
            awayPlayerArray={awayPlayerArray()}
            homePlayer1Stats={homePlayer1Stats()}
            homePlayer2Stats={homePlayer2Stats()}
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
  


export default App;
