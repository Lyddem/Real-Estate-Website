import React from 'react';
import Tabs from './Tabs';

class Header extends React.Component {
  render () {
    return (
      <div id='header'>
        <h1> Tony Thomas </h1><br />
        <h5> Bay Area Realtor </h5><br />
        <Tabs />
      </div>
    );
  }
}

export default Header;

