import React, { useState } from 'react';

import { statsFile } from './statsFile';

function countryArray() {
    const Country = statsFile.map(function(element) {
        return element.Country;
    })
    return Country.filter((value, index) => Country.indexOf(value) === index);
}



export default function Teams(props) {


    return (
        <div className='box'>
            <h2>Choose your teams</h2>
            <div className='teamsContainer'>
               <div className='selectContainer'>
                    <h3>Home Team</h3>
                    <select 
                        onChange={props.handleInputChange}
                        value={props.homeTeam}
                        name='home'
                    >
                        <option value={props.homeTeam}>
                            {props.homeTeam}
                        </option>
                        {countryArray().map((element) => 
                        <option key={element} value={element}>
                            {element}
                        </option>)}
                    </select>
                </div>
                <div className='selectContainer'>
                <h3>Away Team</h3>
                    <select 
                        onChange={props.handleInputChange}
                        value={props.awayTeam}
                        name='away'
                    >
                        <option value={props.awayTeam}>
                            {props.awayTeam}
                        </option>
                        {countryArray().map((element) => 
                        <option key={element} value={element}>
                            {element}
                        </option>)}
                    </select>
                </div>
            </div>
        </div>
    )}





