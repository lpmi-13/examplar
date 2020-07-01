import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/splashScreen.scss';
import data from '../data/results.json';

const codeTypes = Object.keys(data);

const SplashScreen = () => {
    return (
          <div>
            <p className="welcome-text">
              welcome to the examples! Choose a code type to see examples from real github projects.
              Click on the github link to go directly the line in the original source code.
            </p>
            <div className="type-links">
              {codeTypes.map(type => {
                  return  <Link key={type} className="type-link" to={`/${type}`}>{type}</Link>
              })}
            </div>
          </div>
    )
}

export default SplashScreen;