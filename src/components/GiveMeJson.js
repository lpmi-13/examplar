import React from 'react';
import json from '../data/results.json';

const GiveMeJson = () => {
    console.log(json);
    return (
        JSON.stringify(json)
    )
}

export default GiveMeJson;