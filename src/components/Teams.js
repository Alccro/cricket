import React from 'react';

export default function Teams(props) {


    return (
        <div className='box'>
            <h2>Choose your teams</h2>
            <div className='teamsContainer'>
               <div className='selectContainer'>
                    <h3>Home Team</h3>
                    <select 
                        onChange={props.handleInputChange}
                        value={props.home}
                        name='home'
                    >
                        <option value={props.home}>
                            {props.home}
                        </option>
                        {props.countryArray.map((element) => 
                        <option key={element} value={element}>
                            {element}
                        </option>)}
                    </select>
                </div>
                <div className='selectContainer'>
                <h3>Away Team</h3>
                    <select 
                        onChange={props.handleInputChange}
                        value={props.away}
                        name='away'
                    >
                        <option value={props.away}>
                            {props.away}
                        </option>
                        {props.countryArray.map((element) => 
                        <option key={element} value={element}>
                            {element}
                        </option>)}
                    </select>
                </div>
            </div>
        </div>
    )}





