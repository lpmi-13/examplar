import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

import Layout from './Layout';
import CodeSnippet from './CodeSnippet';
import '../styles/play.scss';
import data from '../data/results.json';

const lists = data['lists'];
console.log(lists.length)

// so the feedback on errors stays around a bit longer
const PAUSE_LENGTH = 1500;
const ERROR_PAUSE_LENGTH = 3000;

const handleOpenModal = () => {};
const handleLeftArrowClick = () => {};
const handleRightArrowClick = () => {};
const showStuff = () => {};

const Play = () => {
  const [active, setActive] = useState(false);

  // let's swipe if the user is on a phone!
  //const onSwipedLeft = () => handleLeftArrowClick();
  //const onSwipedRight = () => handleRightArrowClick();
  //const handlers = useSwipeable({ onSwipedLeft, onSwipedRight });

  return (
    <Layout>
      <div className="code-snippet">
         <CodeSnippet code={lists[4]} />
      </div>
      <div role="button" aria-label="public or private" className="swipe-arrows">
        <div className="left-arrow" onClick={handleLeftArrowClick}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </div>
        <div className="right-arrow" onClick={handleRightArrowClick}>
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
      </div>
    </Layout>
  )
}

export default Play;