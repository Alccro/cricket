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
  valueH: 'ENG',
  valueA: '',
  homePlayers: 'Choose players'
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
  console.log('valueH:', values.home)
  console.log('valueA:', values.away)
  console.log('homePlayers:', values.homePlayers)
    return (
      <>
        <ErrorBoundary>
          <Teams
            handleInputChange={handleInputChange}
            valueH={values.home}
            valueA={values.away}
          />

        </ErrorBoundary>
        <ErrorBoundary>
          <Players 
            handleInputChange={handleInputChange}
            valueH={values.home}
            valueA={values.away}
            homePlayers={values.homePlayers}
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
