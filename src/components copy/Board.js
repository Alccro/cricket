import React, { Component } from 'react';
import Select from './Select';

class Board extends Component {
    render() {
     return (
        <div className='teamsBox'>
            <h1>Choose your teams</h1>
            <div className='teamsContainer'>
               <div id='homeTeam'>
                    <h2>Home Team</h2>
                    {/* <Select /> */}
                </div>
                <div id='awayTeam'>
                    <h2>Away Team</h2>
                    {/* <Select /> */}
                </div>
            </div>
        </div>
    )}

}

export default Board