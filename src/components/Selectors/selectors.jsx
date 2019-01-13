import React from 'react';
import Selector from '../Selector/selector';

const Selectors = ({ data, selectorClick, className }) => {

  const theSelectors = data.map((selector, i) => {
    return (
      <Selector
          key={i}
          id={i}
          selectorClick={selectorClick}
          className={className}
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
