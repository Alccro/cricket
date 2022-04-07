import React from 'react';



export default function Players (props) {

    return (
        <div className='box'>
            <h2>Choose your players</h2>
            <div className='playerContainer'>
                <div className='selectContainer'>
                    <h3 className='playerHeader'>Home players</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <select 
                                        onChange={props.handleInputChange}
                                        value={props.homePlayer1}
                                        name='homePlayer1'
                                    >
                                        <option value={props.homePlayer1}>
                                            {'opener'}
                                        </option>
                                        {props.homePlayerArray.map((element) => 
                                        <option key={element.Player} value={element.Player}>
                                            {element.Player}
                                        </option>)}
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                <select 
                                        onChange={props.handleInputChange}
                                        value={props.homePlayer2}
                                        name='homePlayer2'
                                    >
                                        <option value={props.homePlayer2}>
                                            {'opener'}
                                        </option>
                                        {props.homePlayerArray.map((element) => 
                                        <option key={element.Player} value={element.Player}>
                                            {element.Player}
                                        </option>)}
                                    </select>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table>
                        <thead>
                            <tr>
                                <th>Batting Average</th>
                                <th>High Score</th>
                                <th>Batting Strike Rate</th>
                                <th>Bowling Average</th>
                                <th>Bowling Strike Rate</th>
                                <th>Economy</th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.h1.map(({Player, BatAverage, HighScore, SRBat, BowlAverage, SRBall, Economy}) => (
                                <tr key={Player}>
                                    <td value={BatAverage}>{BatAverage}</td>
                                    <td value={HighScore}>{HighScore}</td>
                                    <td value={SRBat}>{SRBat}</td>
                                    <td value={BowlAverage}>{BowlAverage}</td>
                                    <td value={SRBall}>{SRBall}</td>
                                    <td value={Economy}>{Economy}</td>
                                </tr>
                                )
                            )}
                            {props.h2.map(({Player, BatAverage, HighScore, SRBat, BowlAverage, SRBall, Economy}) => (
                                <tr key={Player}>
                                    <td value={BatAverage}>{BatAverage}</td>
                                    <td value={HighScore}>{HighScore}</td>
                                    <td value={SRBat}>{SRBat}</td>
                                    <td value={BowlAverage}>{BowlAverage}</td>
                                    <td value={SRBall}>{SRBall}</td>
                                    <td value={Economy}>{Economy}</td>
                                </tr>
                                )
                            )}
                        </tbody>
                    </table>
                </div>
                <div className='selectContainer'>
                    <h3 className='playerHeader'>Away players</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Batting Average</th>
                                <th>High Score</th>
                                <th>Batting Strike Rate</th>
                                <th>Bowling Average</th>
                                <th>Bowling Strike Rate</th>
                                <th>Economy</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr >
                                <td>
                                    <select 
                                        onChange={props.handleInputChange}
                                        value={props.awayPlayer1}
                                        name='awayPlayer1'
                                    >
                                        <option value={props.awayPlayer1}>
                                            {'opener'}
                                        </option>
                                        {props.awayPlayerArray.map((element) => 
                                        <option key={element.Player} value={element.Player}>
                                            {element.Player}
                                        </option>)}
                                    </select>
                                </td>
                                {props.a1.map((element) => 
                                    <td key={element.BatAverage} value={element.BatAverage}>
                                        {element.BatAverage}
                                    </td>)}
                                {props.a1.map((element) => 
                                    <td key={element.HighScore} value={element.HighScore}>
                                        {element.HighScore}
                                    </td>)}
                                    {props.a1.map((element) => 
                                    <td key={element.SRBat} value={element.SRBat}>
                                        {element.SRBat}
                                    </td>)}
                                    {props.a1.map((element) => 
                                    <td key={element.BowlAverage} value={element.BowlAverage}>
                                        {element.BowlAverage}
                                    </td>)}
                                    {props.a1.map((element) => 
                                    <td key={element.SRBall} value={element.SRBall}>
                                        {element.SRBall}
                                    </td>)}
                                    {props.a1.map((element) => 
                                    <td key={element.Economy} value={element.Economy}>
                                        {element.Economy}
                                    </td>)}    
                            </tr>
                            <tr>
                            <td>
                                    <select 
                                        onChange={props.handleInputChange}
                                        value={props.awayPlayer2}
                                        name='awayPlayer2'
                                    >
                                        <option value={props.awayPlayer2}>
                                            {props.homePlayer2}
                                        </option>
                                        {props.awayPlayerArray.map((element) => 
                                        <option key={element.Player} value={element.Player}>
                                            {element.Player}
                                        </option>)}
                                    </select>
                                </td>
                                {props.h2.map((element) => 
                                    <td key={element.BatAverage} value={element.BatAverage}>
                                        {element.BatAverage}
                                    </td>)}
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}



