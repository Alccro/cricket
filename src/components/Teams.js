import React from 'react';
import styled from 'styled-components'

const Title = styled.h1`
    font-size: 1.5rem;
    text-align: center;
    color: palevioletred;
`;

const Dropdown = styled.select`
    display: inline;
    margin: 1rem;
`;

const TeamsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    border: 2px solid green;
`;

const Teams = () => {
    return (
        <div>
            <Title>Choose your teams</Title>
            <TeamsContainer>
               <div id='homeTeam'>
                <Dropdown>
                    <option value='England'>England</option>
                    <option value='India'>India</option>
                    <option value='West Indies'>West Indies</option>
                </Dropdown>
                </div>
                <div id='awayTeam'>
                    <Dropdown>
                        <option value='England'>England</option>
                        <option value='India'>India</option>
                        <option value='West Indies'>West Indies</option>
                    </Dropdown>
                </div>
            </TeamsContainer>
        </div>
    );
}

export default Teams