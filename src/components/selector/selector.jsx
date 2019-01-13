import React from 'react';

const Selector = ({ id, active, selectorClick }) => {

  return <div className="selector" onClick={() => selectorClick(id)} />

}

export default Selector;
