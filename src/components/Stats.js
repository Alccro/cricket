import React from 'react';
import  { statsFile } from './statsFile';


export const country = statsFile.map(function(element){
            return element.Country;
        })

export const countryArray = (data) => {
            return data.filter((value, index) => data.indexOf(value) === index);
        }



