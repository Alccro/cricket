import React, { Component } from 'react';
import Select from './Select';

class Rules extends Component {
    render() {
     return (
        <div className='teamsBox'>
            <h2>Choose your game type</h2>
            <div className='rulesContainer'>
                <input type='checkbox' id='overs20' name='overs20' value='20' />
                <label htmlFor='overs20'>20 Overs</label>
                <input type='checkbox' id='overs50' name='overs50' value='50' />
                <label htmlFor='overs50'>50 Overs</label>
            </div>
        </div>
    )}

}

export default Rules