import React, { Component } from 'react';

import { statsFile } from './statsFile';


class Teams extends Component {
    
    countryArray() {
        const Country = statsFile.map(function(element) {
            return element.Country;
        })
        return Country.filter((value, index) => Country.indexOf(value) === index);
    }

   render() {
     return (
        <div className='box'>
            <h2>Choose your teams</h2>
            <div className='teamsContainer'>
               <div className='selectContainer'>
                    <h3>Home Team</h3>
                        <select onChange={this.props.handleHomeTeamChange} value={this.props.homeTeam}>
                            <option value={this.props.homeTeam}>{this.props.homeTeam}</option>
                            {this.countryArray().map((element) => <option key={element} value={element}>{element}</option>)}
                        </select>
                </div>
                <div className='selectContainer'>
                    <h3>Away Team</h3>
                        <select onChange={this.props.handleAwayTeamChange} value={this.props.awayTeam}>
                            <option value={this.props.awayTeam}>{this.props.awayTeam}</option>
                            {this.countryArray().map((element) => <option key={element} value={element}>{element}</option>)}
                        </select>
                </div>
            </div>
        </div>
    )}

}

export default Teams

