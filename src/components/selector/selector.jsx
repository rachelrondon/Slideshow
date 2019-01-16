import React from 'react';
import './selector.css';

const Selector = ({ id, active, selectorClick }) => {
  const names = active ? 'selector active' : 'selector'

  return  (
    <div className={names} onClick={() => selectorClick(id)} />
  )
}

export default Selector;
