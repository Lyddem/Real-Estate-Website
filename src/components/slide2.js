import React, { Component } from 'react';

const slideTwo = (props) => {

  let background = {
    backgroundImage: 'url(lion-wild-africa-african.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }

  return <div style={background} className="slide"></div>
}

export default slideTwo;