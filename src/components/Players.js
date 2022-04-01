import React from 'react';
import { England } from './Stats';
import Select from './Select';

function Players () {
     
    const PlayersBtn = (e) => {
        console.log(England)
    }

    return (
        <div className='teamsBox'>
            <h1>Choose your players</h1>
            <div className='namesContainer'>
               <div id='homeTeam'>
                    <Select title={'Opener'}/>
                    <Select title={'Opener'}/>
                    <Select title={'No.3'}/>
                </div>
                <div id='awayTeam'>
                    <Select title={'Opener'}/>
                </div>
            </div>
                <button id='PlayersBtn' onClick={PlayersBtn}>Confirm</button>
        </div>
    );
}

export default Players