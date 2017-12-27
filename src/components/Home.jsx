import React from 'react';
import Header from './Header';
import Slideshow from './Slideshow';
import { Slide } from 'react-slideshow-image';
// import slideOne from './slide1';
// import slideTwo from './slide2';
// import slideThree from './slide3';
// import Slideshow from './Slideshow';
// var Slider = require('react-slick');


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slidecount: 1
    }
  }

  render(){
    return (
      <div>
        <Header />
        <Slideshow />
      </div>
    )
  }
}

export default Home;