import React from 'react';
import { Slide } from 'react-slideshow-image';

const images = [
  '../../images/pic_1.jpg',
  '../../images/pic_2.jpg',
  '../../images/pic_3.jpg',
  '../../images/pic_4.jpg',
  '../../images/pic_5.jpg'
];

const Slideshow = () => {
  return (
    <Slide
    images={images}
    duration="4000"
    transitionDuration="1000"
    />
  )
}

export default Slideshow;