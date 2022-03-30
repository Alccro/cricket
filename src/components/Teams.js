import React, { useState } from 'react';

import styled from 'styled-components';
import { country, countryArray } from './Stats';


const TeamsBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    border: 2px solid green;
`;
const NamesContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 50%;
    margin-left: auto;
    margin-right: auto;
`;
const Title = styled.h1`
    font-size: 1.5rem;
    text-align: center;
    color: palevioletred;
    margin: 1rem;
`;
const Dropdown = styled.select`
    display: inline;
    margin: 1rem;
`;

function Teams () {
     
    
    const [any , setCountry] = useState('Select a team')

    const handleTeamChange = (e) => {
      setCountry(e.target.value)
    }
   console.log(countryArray(country))
    return (
        <TeamsBox>
            <Title>Choose your teams</Title>
            <NamesContainer>
               <div id='homeTeam'>
                <Dropdown onChange={handleTeamChange}>
                        <option value='Select a team'>Select a team</option>
                        {countryArray(country).map((any) => <option key={any} value={any}>{any}</option>)}
                </Dropdown>
                </div>
                <div id='awayTeam'>
                    <Dropdown>
                        <option value='England'>England</option>
                        <option value='India'>India</option>
                        <option value='West Indies'>West Indies</option>
                    </Dropdown>
                </div>
            </NamesContainer>
        </TeamsBox>
    );
}

export default Teams