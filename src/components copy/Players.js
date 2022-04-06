import React, { Component } from 'react';
import { statsFile } from './statsFile';
import { Select } from './Select';



class Players extends Component {
       
    render() {

        return (
            <div className='box'>
            <h2>Choose your players</h2>
            <div className='playerContainer'>
                <div className='selectContainer'>
                    <h3 className='playerHeader'>Home players</h3>
                    <Select 
                        handlePlayer1Change={this.props.handlePlayer1Change}
                        homeTeam={this.props.homeTeam}
                        awayTeam={this.props.awayTeam}
                        homePlayerArray={this.props.homePlayerArray}
                        homePlayerStats={this.props.homePlayerStats}
                        player1Value={this.props.player1Value}
                    />
                </div>
            </div>
        </div>
    )}

}

export default Players

