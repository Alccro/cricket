// import React from 'react';
import  { statsFile } from './statsFile';


export const CountryArray = () => {
    const Country = statsFile.map(function(element) {
        return element.Country;
    })
    return Country.filter((value, index) => Country.indexOf(value) === index);
}

export const PlayersArray = statsFile.filter(element => {
    return element.Country === 'ENG';
})
