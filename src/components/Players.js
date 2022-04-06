import React from 'react';
import { statsFile } from './statsFile';



function playerArray(props) {
    // const team = props.valueH
    const filteredArray = statsFile.filter(element => {
      return element.Country === props.valueH
    })
    const sortedArray = filteredArray.sort((a,b) => (a.Player > b.Player) ? 1 : ((b.Player > a.Player) ? -1 : 0));
    return sortedArray;
  }

export default function Players (props) {

    return (
        <div className='box'>
            <h2>Choose your players</h2>
            <div className='playerContainer'>
                <div className='selectContainer'>
                    <h3 className='playerHeader'>Home players</h3>
                    <select 
                        onChange={props.handleInputChange}
                        value={props.homePlayers}
                        name='homePlayers'
                    >
                        <option value={props.homePlayers}>
                            {props.homePlayers}
                        </option>
                        {playerArray().map((element) => 
                        <option key={element.Player} value={element.Player}>
                            {element.Player}
                        </option>)}
                    </select>
                </div>
            </div>
        </div>
    )
}



