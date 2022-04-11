import React from 'react';



export default function Players (props) {

    return (
        <div className='box'>
            <h2>Choose your players</h2>
            <div className='playerContainer'>
                <div className='selectContainer'>
                    <h3>Home players</h3>
                    <table className='playerTable'>
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
                            <tr>
                                <td>
                                    <select onChange={props.handleInputChange} value={props.homePlayer1} name='homePlayer1'>
                                        <option value={props.homePlayer1}>{'opener'}</option>
                                        {props.homePlayerArray.map((element) => 
                                        <option key={element.Player} value={element.Player}>{element.Player}</option>)}
                                    </select>
                                </td>
                                    {props.h1.map(({BatAverage}) => (<td value={BatAverage}>{BatAverage}</td>))}
                                    {props.h1.map(({HighScore}) => (<td value={HighScore}>{HighScore}</td>))}
                                    {props.h1.map(({SRBat}) => (<td value={SRBat}>{SRBat}</td>))}
                                    {props.h1.map(({BowlAverage}) => (<td value={BowlAverage}>{BowlAverage}</td>))}
                                    {props.h1.map(({SRBall}) => (<td value={SRBall}>{SRBall}</td>))}
                                    <td value={props.h1.Economy}>{props.h1.Economy}</td>
                                </tr>
                            <tr>
                                <td>
                                    <select onChange={props.handleInputChange} value={props.homePlayer2} name='homePlayer2'>
                                        <option value={props.homePlayer2}>{'opener'}</option>
                                        {props.homePlayerArray.map((element) => 
                                        <option key={element.Player} value={element.Player}>{element.Player}</option>)}
                                    </select>
                                </td>
                                {props.h2.map(({BatAverage}) => 
                                    (<td value={BatAverage}>{BatAverage}</td>))}
                                {props.h2.map(({HighScore}) => 
                                    (<td value={HighScore}>{HighScore}</td>))}
                                {props.h2.map(({SRBat}) => 
                                    (<td value={SRBat}>{SRBat}</td>))}
                                {props.h2.map(({BowlAverage}) => 
                                    (<td value={BowlAverage}>{BowlAverage}</td>))}
                                {props.h2.map(({SRBall}) => 
                                    (<td value={SRBall}>{SRBall}</td>))}
                                {props.h2.map(({Economy}) => 
                                    (<td value={Economy}>{Economy}</td>))}
                            </tr>
                            <tr>
                                <td>
                                    <select onChange={props.handleInputChange} value={props.homePlayer3} name='homePlayer3'>
                                        <option value={props.homePlayer3}>{'No.3'}</option>
                                        {props.homePlayerArray.map((element) => 
                                        <option key={element.Player} value={element.Player}>{element.Player}</option>)}
                                    </select>
                                </td>
                                {props.h3.map(({BatAverage}) => 
                                    (<td value={BatAverage}>{BatAverage}</td>))}
                                {props.h3.map(({HighScore}) => 
                                    (<td value={HighScore}>{HighScore}</td>))}
                                {props.h3.map(({SRBat}) => 
                                    (<td value={SRBat}>{SRBat}</td>))}
                                {props.h3.map(({BowlAverage}) => 
                                    (<td value={BowlAverage}>{BowlAverage}</td>))}
                                {props.h3.map(({SRBall}) => 
                                    (<td value={SRBall}>{SRBall}</td>))}
                                {props.h3.map(({Economy}) => 
                                    (<td value={Economy}>{Economy}</td>))}
                            </tr>
                            <tr>
                                <td>
                                    <select onChange={props.handleInputChange} value={props.homePlayer4} name='homePlayer4'>
                                        <option value={props.homePlayer3}>{'No.4'}</option>
                                        {props.homePlayerArray.map((element) => 
                                        <option key={element.Player} value={element.Player}>{element.Player}</option>)}
                                    </select>
                                </td>
                                {props.h4.map(({BatAverage}) => 
                                    (<td value={BatAverage}>{BatAverage}</td>))}
                                {props.h4.map(({HighScore}) => 
                                    (<td value={HighScore}>{HighScore}</td>))}
                                {props.h4.map(({SRBat}) => 
                                    (<td value={SRBat}>{SRBat}</td>))}
                                {props.h4.map(({BowlAverage}) => 
                                    (<td value={BowlAverage}>{BowlAverage}</td>))}
                                {props.h4.map(({SRBall}) => 
                                    (<td value={SRBall}>{SRBall}</td>))}
                                {props.h4.map(({Economy}) => 
                                    (<td value={Economy}>{Economy}</td>))}
                            </tr>
                            <tr>
                                <td>
                                    <select onChange={props.handleInputChange} value={props.homePlayer5} name='homePlayer5'>
                                        <option value={props.homePlayer3}>{'No.5'}</option>
                                        {props.homePlayerArray.map((element) => 
                                        <option key={element.Player} value={element.Player}>{element.Player}</option>)}
                                    </select>
                                </td>
                                {props.h5.map(({BatAverage}) => 
                                    (<td value={BatAverage}>{BatAverage}</td>))}
                                {props.h5.map(({HighScore}) => 
                                    (<td value={HighScore}>{HighScore}</td>))}
                                {props.h5.map(({SRBat}) => 
                                    (<td value={SRBat}>{SRBat}</td>))}
                                {props.h5.map(({BowlAverage}) => 
                                    (<td value={BowlAverage}>{BowlAverage}</td>))}
                                {props.h5.map(({SRBall}) => 
                                    (<td value={SRBall}>{SRBall}</td>))}
                                {props.h5.map(({Economy}) => 
                                    (<td value={Economy}>{Economy}</td>))}
                            </tr>
                            <tr>
                                <td>
                                    <select onChange={props.handleInputChange} value={props.homePlayer6} name='homePlayer6'>
                                        <option value={props.homePlayer3}>{'Wicket Keeper'}</option>
                                        {props.homePlayerArray.map((element) => 
                                        <option key={element.Player} value={element.Player}>{element.Player}</option>)}
                                    </select>
                                </td>
                                {props.h6.map(({BatAverage}) => 
                                    (<td value={BatAverage}>{BatAverage}</td>))}
                                {props.h6.map(({HighScore}) => 
                                    (<td value={HighScore}>{HighScore}</td>))}
                                {props.h6.map(({SRBat}) => 
                                    (<td value={SRBat}>{SRBat}</td>))}
                                {props.h6.map(({BowlAverage}) => 
                                    (<td value={BowlAverage}>{BowlAverage}</td>))}
                                {props.h6.map(({SRBall}) => 
                                    (<td value={SRBall}>{SRBall}</td>))}
                                {props.h6.map(({Economy}) => 
                                    (<td value={Economy}>{Economy}</td>))}
                            </tr>
                            <tr>
                                <td>
                                    <select onChange={props.handleInputChange} value={props.homePlayer7} name='homePlayer7'>
                                        <option value={props.homePlayer3}>{'All-rounder'}</option>
                                        {props.homePlayerArray.map((element) => 
                                        <option key={element.Player} value={element.Player}>{element.Player}</option>)}
                                    </select>
                                </td>
                                {props.h7.map(({BatAverage}) => 
                                    (<td value={BatAverage}>{BatAverage}</td>))}
                                {props.h7.map(({HighScore}) => 
                                    (<td value={HighScore}>{HighScore}</td>))}
                                {props.h7.map(({SRBat}) => 
                                    (<td value={SRBat}>{SRBat}</td>))}
                                {props.h7.map(({BowlAverage}) => 
                                    (<td value={BowlAverage}>{BowlAverage}</td>))}
                                {props.h7.map(({SRBall}) => 
                                    (<td value={SRBall}>{SRBall}</td>))}
                                {props.h7.map(({Economy}) => 
                                    (<td value={Economy}>{Economy}</td>))}
                            </tr>
                            <tr>
                                <td>
                                    <select onChange={props.handleInputChange} value={props.homePlayer8} name='homePlayer8'>
                                        <option value={props.homePlayer8}>{'No.8'}</option>
                                        {props.homePlayerArray.map((element) => 
                                        <option key={element.Player} value={element.Player}>{element.Player}</option>)}
                                    </select>
                                </td>
                                {props.h8.map(({BatAverage}) => 
                                    (<td value={BatAverage}>{BatAverage}</td>))}
                                {props.h8.map(({HighScore}) => 
                                    (<td value={HighScore}>{HighScore}</td>))}
                                {props.h8.map(({SRBat}) => 
                                    (<td value={SRBat}>{SRBat}</td>))}
                                {props.h8.map(({BowlAverage}) => 
                                    (<td value={BowlAverage}>{BowlAverage}</td>))}
                                {props.h8.map(({SRBall}) => 
                                    (<td value={SRBall}>{SRBall}</td>))}
                                {props.h8.map(({Economy}) => 
                                    (<td value={Economy}>{Economy}</td>))}
                            </tr>
                            <tr>
                                <td>
                                    <select onChange={props.handleInputChange} value={props.homePlayer9} name='homePlayer9'>
                                        <option value={props.homePlayer3}>{'No.9'}</option>
                                        {props.homePlayerArray.map((element) => 
                                        <option key={element.Player} value={element.Player}>{element.Player}</option>)}
                                    </select>
                                </td>
                                {props.h9.map(({BatAverage}) => 
                                    (<td value={BatAverage}>{BatAverage}</td>))}
                                {props.h9.map(({HighScore}) => 
                                    (<td value={HighScore}>{HighScore}</td>))}
                                {props.h9.map(({SRBat}) => 
                                    (<td value={SRBat}>{SRBat}</td>))}
                                {props.h9.map(({BowlAverage}) => 
                                    (<td value={BowlAverage}>{BowlAverage}</td>))}
                                {props.h9.map(({SRBall}) => 
                                    (<td value={SRBall}>{SRBall}</td>))}
                                {props.h9.map(({Economy}) => 
                                    (<td value={Economy}>{Economy}</td>))}
                            </tr>
                            <tr>
                                <td>
                                    <select onChange={props.handleInputChange} value={props.homePlayer10} name='homePlayer10'>
                                        <option value={props.homePlayer3}>{'No.10'}</option>
                                        {props.homePlayerArray.map((element) => 
                                        <option key={element.Player} value={element.Player}>{element.Player}</option>)}
                                    </select>
                                </td>
                                {props.h10.map(({BatAverage}) => 
                                    (<td value={BatAverage}>{BatAverage}</td>))}
                                {props.h10.map(({HighScore}) => 
                                    (<td value={HighScore}>{HighScore}</td>))}
                                {props.h10.map(({SRBat}) => 
                                    (<td value={SRBat}>{SRBat}</td>))}
                                {props.h10.map(({BowlAverage}) => 
                                    (<td value={BowlAverage}>{BowlAverage}</td>))}
                                {props.h10.map(({SRBall}) => 
                                    (<td value={SRBall}>{SRBall}</td>))}
                                {props.h10.map(({Economy}) => 
                                    (<td value={Economy}>{Economy}</td>))}
                            </tr>
                            <tr>
                                <td>
                                    <select onChange={props.handleInputChange} value={props.homePlayer11} name='homePlayer11'>
                                        <option value={props.homePlayer3}>{'No.11'}</option>
                                        {props.homePlayerArray.map((element) => 
                                        <option key={element.Player} value={element.Player}>{element.Player}</option>)}
                                    </select>
                                </td>
                                {props.h11.map(({BatAverage}) => 
                                    (<td value={BatAverage}>{BatAverage}</td>))}
                                {props.h11.map(({HighScore}) => 
                                    (<td value={HighScore}>{HighScore}</td>))}
                                {props.h11.map(({SRBat}) => 
                                    (<td value={SRBat}>{SRBat}</td>))}
                                {props.h11.map(({BowlAverage}) => 
                                    (<td value={BowlAverage}>{BowlAverage}</td>))}
                                {props.h11.map(({SRBall}) => 
                                    (<td value={SRBall}>{SRBall}</td>))}
                                {props.h11.map(({Economy}) => 
                                    (<td value={Economy}>{Economy}</td>))}
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='selectContainer'>
                    <h3>Away players</h3>
                    <table className='playerTable'>
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



