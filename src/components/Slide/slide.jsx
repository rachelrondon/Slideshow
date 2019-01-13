import React from 'react';
import './slide.css';

const Slide = ({ src }) => {
  const styles = {
    backgroundImage: `url(${src})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '100%'
  }


  return (
    <div className="slide" style={styles}>
    </div>
  )
}

export default Slide;
