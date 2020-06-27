import Reacte from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

import Layout from './Layout';
import CodeSnippet from './CodeSnippet';
import '../styles/play.scss';
import data from '../data/results.json';

const lists = data['lists'];
console.log(lists.length)

const handleLeftArrowClick = () => {};
const handleRightArrowClick = () => {};

const Play = () => {

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