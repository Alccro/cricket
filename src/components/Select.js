import React, { Component } from 'react';

import {CountryArray, England } from './Stats';

class Select extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onTeamChange(e.target.value);
    }
   
    render() {
        if (this.props.type === 'country') {
            return (
                <select onChange={this.handleChange}>
                    <option value={this.props.value}>{this.props.title}</option>
                    {CountryArray().map((countryCode) => <option key={countryCode} value={countryCode}>{countryCode}</option>)}
                </select>
            )
        }
            return (
                <select onChange={this.handleChange}>
                    <option value={this.props.value}>{this.props.title}</option>
                    {England.map((PlayerCode) => <option key={PlayerCode.Player} value={PlayerCode.Player}>{PlayerCode.Player}</option>)}
                </select>
            )

    }
}

export default Select
