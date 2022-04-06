import React, { Component } from 'react';
import  { statsFile } from './statsFile';

  

export class Select extends Component {

    render() {
        return (
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
                            <select onChange={this.props.handlePlayer1Change}>
                                <option value={this.props.player1Value}>{this.props.player1Value}</option>
                                {this.props.homePlayerArray.map((element) => <option key={element.Player} value={element.Player}>{element.Player}</option>)}
                            </select>
                        </td>
                            {this.props.homePlayerStats.map((element) => 
                                <td key={element.BatAverage} value={element.BatAverage}>
                                    {element.BatAverage}
                                </td>)}
                            {this.props.homePlayerStats.map((element) => 
                            <td key={element.HighScore} value={element.HighScore}>
                                {element.HighScore}
                            </td>)}

                            
                        {/* <td>{this.props.player1Stats()}</td> */}
                        {/* <td>{element.HighScore}</td>
                        <td>{element.SRBat}</td>
                        <td>{element.BowlAverage}</td>
                        <td>{element.SRBall}</td>
                        <td>{element.Economy}</td> */}
                    </tr>
            </table>
        )
    }
}

// {this.props.playerStats.map((element) => 
//     <td key={element.Player} value={element.HighScore}>{element.HighScore}
//     </td>)}
