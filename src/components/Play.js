import React, { Fragment, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useSwipeable } from 'react-swipeable';

import CodeSnippet from './CodeSnippet';
import data from '../data/results.json';
import '../styles/play.scss';


const PAUSE_LENGTH = 1500;

const Play = (props) => {

  // used to grab the "type" from the path...this seemed cleaner than having a bunch of different Route components in index.js
  const { type } = props.match.params;
  const snippets = data[type];

  const snippetLength = snippets.length;

  const [listIndex, setListIndex] = useState(0)
  const [list, setList] = useState(snippets[listIndex])
  // sliding isn't what we're currently doing, so update/rename this later
  const [isSlidingLeft, setIsSlidingLeft] = useState(false);
  const [isSlidingRight, setIsSlidingRight] = useState(false);

  
  useEffect(() => {
    console.log(listIndex);
    setIsSlidingLeft(false);
    setIsSlidingRight(false);
    setList(snippets[listIndex])
  }, [listIndex, snippets])

  // let's swipe if the user is on a phone!
  const onSwipedLeft = () => handleLeftArrowClick();
  const onSwipedRight = () => handleRightArrowClick();
  const handlers = useSwipeable({ onSwipedLeft, onSwipedRight });

  // move back in the set of code snippets
  const handleLeftArrowClick = () => {
    setIsSlidingLeft(true);
    // move back one, unless we're at the beginning, then go to the last item
    const indexToMoveTo = listIndex <= 0 ? snippetLength - 1 : listIndex - 1;
    setTimeout(() => setListIndex(indexToMoveTo), PAUSE_LENGTH);
  }

  // move forward in the set of code snippets
  const handleRightArrowClick = () => {
    setIsSlidingRight(true);
    // move forward one, unless we're at the end, then go to the first item
    const indexToMoveTo = listIndex >= snippetLength - 1 ? 0 : listIndex + 1; 
    setTimeout(() => setListIndex(indexToMoveTo), PAUSE_LENGTH);
  }

  return (
    <Fragment>
      <div className="item-number">{type.toUpperCase()}: {listIndex + 1}/{snippetLength}</div>
      <div className={`code-snippet ${isSlidingRight ? 'slidingRight' : ''} ${isSlidingLeft ? 'slidingLeft' : ''}`} {...handlers}>
         <CodeSnippet code={list} />
      </div>
      <div role="button" aria-label="public or private" className="swipe-arrows">
        <div className="left-arrow" onClick={handleLeftArrowClick}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </div>
        <div className="right-arrow" onClick={handleRightArrowClick}>
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
      </div>
    </Fragment>
  )
}

export default Play;