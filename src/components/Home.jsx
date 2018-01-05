import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Slideshow from './Slideshow';
import { Slide } from 'react-slideshow-image';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slidecount: 1
    }
  }

  render() {
    return (
      <div>
        <Header />
        <Slideshow />
        <Footer />
      </div>
    )
  }
}

export default Home;