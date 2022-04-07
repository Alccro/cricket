import React, { useState, useEffect } from 'react';
import Teams from './components/Teams';
import Players from './components/Players';
import Rules from './components/Rules';
import Board from './components/Board';
import ErrorBoundary from './components/ErrorBoundary';
// import { statsFile } from './components/statsFile';
import './App.css';

const API_HOST ="http://localhost:3001";
const StatsFile_API_URL = `${API_HOST}/statsFile`;




function App() {
  const intialValues = {
    home: 'Choose team',
    away: 'Choose team',
    homePlayer1: 'Opener', homePlayer2: 'Opener', homePlayer3: 'No.3', homePlayer4: 'No.4',
    awayPlayer1: 'Opener',
  };
  const [statsFile, setstatsFile] = useState([]);
  const [values, setValues] = useState(intialValues);

  const fetchstatsFile = () => {
    fetch(`${StatsFile_API_URL}`)
        .then(res => res.json())
        .then(json => setstatsFile(json));
}


  useEffect(() => {
      fetchstatsFile();
  }, []);
    
  const handleInputChange = (e) => {
      const { name, value } = e.target;
        setValues({
          ...values,
          [name]: value,
      });
  };
  
  function countryArray() {
    const Country = statsFile.map(function(element) {
        return element.Country;
    })
    return Country.filter((value, index) => Country.indexOf(value) === index);
  }

  function homePlayerArray() {
    const filteredArray = statsFile.filter(element => {
      return element.Country === values.home
    })
    const sortedArray = filteredArray.sort((a,b) => (a.Player > b.Player) ? 1 : ((b.Player > a.Player) ? -1 : 0));
    return sortedArray;
  }

  function awayPlayerArray() {
    const filteredArray = statsFile.filter(element => {
      return element.Country === values.away
    })
    const sortedArray = filteredArray.sort((a,b) => (a.Player > b.Player) ? 1 : ((b.Player > a.Player) ? -1 : 0));
    return sortedArray;
  }
  
  function homePlayerStats(homePlayer) {
    const filter = homePlayerArray().filter(element => {
      return element.Player === homePlayer
    })
    return filter
  }

  function awayPlayerStats(awayPlayer) {
    const filter = awayPlayerArray().filter(element => {
      return element.Player === awayPlayer
    })
    return filter
  }
  
const h1 = homePlayerStats(values.homePlayer1)
const h2 = homePlayerStats(values.homePlayer2)
const h3 = homePlayerStats(values.homePlayer3)
const h4 = homePlayerStats(values.homePlayer4)
const a1 = awayPlayerStats(values.awayPlayer1)

const stats = {h1, h2, h3, h4, a1}

  console.log('home:', values.home)
  console.log('away:', values.away)
  console.log('homePlayer1:', values.homePlayer1)
  console.log(h1)
  console.log(h2)
  console.log(h3)

    return (
      <>
        <h1>Cricket Simulator</h1>
        <ErrorBoundary>
          <Rules />
        </ErrorBoundary>
        <ErrorBoundary>
          <Teams
            handleInputChange={handleInputChange}
            countryArray={countryArray()}
            home={values.home}
            away={values.away}
          />
        </ErrorBoundary>
        <ErrorBoundary>
          <Players 
            handleInputChange={handleInputChange}
            homePlayerArray={homePlayerArray()}
            awayPlayerArray={awayPlayerArray()}
            {...stats}
          />
        </ErrorBoundary>
        <ErrorBoundary>
          <Board
            homePlayer1={values.homePlayer1}
            homePlayer2={values.homePlayer2}
          />
        </ErrorBoundary>
      </>
    )
  }
  


export default App;
