// import React from 'react';
import  { statsFile } from './statsFile';


export const Country = statsFile.map(function(element) {
            return element.Country;
        })

export const CountryArray = () => {
            return Country.filter((value, index) => Country.indexOf(value) === index);
        }

export const England = statsFile.filter(element => {
    return element.Country === 'ENG';
})
