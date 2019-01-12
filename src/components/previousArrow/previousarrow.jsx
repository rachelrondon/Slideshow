import React from 'react';
import './previousarrow.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

const PreviousArrow = (props) => {
  return(
    <div className="previous arrow" onClick={props.previousSlide}>
      <FontAwesomeIcon icon={faAngleLeft} />
    </div>
  )
}

export default PreviousArrow;
