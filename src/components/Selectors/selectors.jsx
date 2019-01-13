import React from 'react';
import Selector from '../Selector/selector';
import './selectors.css';

const Selectors = ({ data, index, selectorClick }) => {

  const theSelectors = data.map((selector, i) => {
    let active = ( i === index ) ? true : false
    return (
      <Selector
          title="Slider"
          key={i}
          id={i}
          active={active}
          selectorClick={selectorClick}
      />
    )
  })

  return (
    <div className="selectorContainer">
      { theSelectors }
    </div>
  )
}

export default Selectors;
