import React, { Component } from 'react';

const slideOne = (props) => {

  let background = {
    backgroundImage: 'url(fall-autumn-red-season.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }

  return <div style={background} className="slide"></div>
}

export default slideOne;