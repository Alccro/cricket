import React, { Component } from 'react';

import styled from 'styled-components';
import { Country, CountryArray, England } from './Stats';


const Dropdown = styled.select`
display: inline;
margin: 0.1rem;
`;

class Select extends Component {
    constructor(props) {
        super(props);
        this.state = {value: 'Select'};

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({value: e.target.value});
    }
   
    render() {
        if (this.props.type === 'country') {
            return (
                <Dropdown onChange={this.handleChange}>
                    <option value={this.props.value}>{this.props.title}</option>
                    {CountryArray(Country).map((countryCode) => <option key={countryCode} value={countryCode}>{countryCode}</option>)}
                </Dropdown>
            )
        }
            return (
                <Dropdown onChange={this.handleChange}>
                    <option value={this.props.value}>{this.props.title}</option>
                    {England.map((PlayerCode) => <option key={PlayerCode.Player} value={PlayerCode.Player}>{PlayerCode.Player}</option>)}
                </Dropdown>
            )

    }
}

export default Select
