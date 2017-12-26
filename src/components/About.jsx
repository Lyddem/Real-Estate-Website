import React from 'react';
import Header from './Header';

class About extends React.Component {
    render() {
      return (
          <div>
          <Header />

          <div id="about-container">

          <div id="about">
          <img height="300" width="300" src="http://tony-homes.com/wp-content/uploads/2017/12/ttpic-284x300.jpg" /><br /><br />

          <p >Hi! I’m Tony. I'd be happy to help you find <br /> your next home. You can use this site to search <br /> for properties all around the bay area. If you’d <br />like to ask me any questions regarding <br />your housing search, I’d love to help you.</p> <br />
          </div>

          <div id="contact">
            <h3>Contact</h3>
            <p> Pacificwide Real Estate & Mortgage <br />
              <strong>Address: </strong>3005 Silver Creek Rd Suite 214 <br />
              San Jose, CA 95121 <br />
              <strong>Phone: </strong> 408-532-1278
            </p>
            </div>
          </div>
        </div>
      )
    }
}


export default About;