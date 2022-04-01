import React, { Component } from 'react';
import Select from './Select';

class Teams extends Component {
    constructor(props) {
        super(props);
        this.handleTeamChange = this.handleTeamChange.bind(this);
    }
        
    handleTeamChange(e) {
        this.props.onChange({value: this.props.value});
    }
    
    render() {
        
        const teamsBtn = () => {
            console.log(this.props.value)
        }

     return (
        <div className='teamsBox'>
            <h1>Choose your teams</h1>
            <div className='namesContainer'>
               <div id='homeTeam'>
                    <h2>Home Team</h2>
                    <Select value={this.props.value} onTeamChange={this.handleTeamChange} type={'country'} title={'Select home team'}/>
                </div>
                <div id='awayTeam'>
                    <h2>Away Team</h2>
                    <Select type={'country'} title={'Select away team'}/>
                </div>
            </div>
                <button id='teamsBtn' onClick={teamsBtn}>Confirm</button>
        </div>
    );}
}

export default Teams

 