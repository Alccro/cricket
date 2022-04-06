import React from 'react';



export default function Players (props) {

    return (
        <div className='box'>
            <h2>Choose your players</h2>
            <div className='playerContainer'>
                <div className='selectContainer'>
                    <h3 className='playerHeader'>Home players</h3>
                    <table>
                        <tr>
                            <th>Name</th>
                            <th>Batting Average</th>
                            <th>High Score</th>
                            <th>Batting Strike Rate</th>
                            <th>Bowling Average</th>
                            <th>Bowling Strike Rate</th>
                            <th>Economy</th>
                        </tr>
                        <tr >
                            <td>
                                <select 
                                    onChange={props.handleInputChange}
                                    value={props.homePlayer1}
                                    name='homePlayer1'
                                >
                                    <option value={props.homePlayer1}>
                                        {props.homePlayer1}
                                    </option>
                                    {props.homePlayerArray.map((element) => 
                                    <option key={element.Player} value={element.Player}>
                                        {element.Player}
                                    </option>)}
                                </select>
                            </td>
                            {props.homePlayer1Stats.map((element) => 
                                <td key={element.BatAverage} value={element.BatAverage}>
                                    {element.BatAverage}
                                </td>)}
                        </tr>
                        <tr>
                            <td>
                                <select 
                                    onChange={props.handleInputChange}
                                    value={props.homePlayer2}
                                    name='homePlayer2'
                                >
                                    <option value={props.homePlayer2}>
                                        {props.homePlayer2}
                                    </option>
                                    {props.homePlayerArray.map((element) => 
                                    <option key={element.Player} value={element.Player}>
                                        {element.Player}
                                    </option>)}
                                </select>
                            </td>
                            {props.homePlayer2Stats.map((element) => 
                                <td key={element.BatAverage} value={element.BatAverage}>
                                    {element.BatAverage}
                                </td>)}
                        </tr>
                    </table>
                </div>
                <div className='selectContainer'>
                    <h3 className='playerHeader'>Away players</h3>
                    <select 
                        onChange={props.handleInputChange}
                        value={props.awayPlayer1}
                        name='awayPlayer1'
                    >
                        <option value={props.awayPlayer1}>
                            {props.awayPlayer1}
                        </option>
                        {props.awayPlayerArray.map((element) => 
                        <option key={element.Player} value={element.Player}>
                            {element.Player}
                        </option>)}
                    </select>
                </div>
            </div>
        </div>
    )
}



