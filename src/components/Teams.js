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
                        value={props.valueH}
                        name='home'
                    >
                        <option value={props.valueH}>
                            {props.valueH}
                        </option>
                        {countryArray().map((element) => 
                        <option key={element} value={element}>
                            {element}
                        </option>)}
                    </select>
                </div>
                <div className='selectContainer'>
                <h3>Home Team</h3>
                    <select 
                        onChange={props.handleInputChange}
                        value={props.valueA}
                        name='away'
                    >
                        <option value={props.valueA}>
                            {props.valueA}
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





