import React, { Component } from 'react';

const slideThree = (props) => {

  let background = {
    backgroundImage: 'url(pexels-photo.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }

  return <div style={background} className="slide"></div>
}

export default slideThree;