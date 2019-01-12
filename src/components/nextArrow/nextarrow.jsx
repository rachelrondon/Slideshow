import React from 'react';
import './nextarrow.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

const NextArrow = (props) => {
  return(
    <div className="next arrow">
    <FontAwesomeIcon icon={faAngleRight} onClick={props.nextSlide}/>
    </div>
  )
}

export default NextArrow;
