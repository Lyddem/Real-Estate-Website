import React from 'react';
import Header from './Header';

class About extends React.Component {
    render() {  
      return (
        <div id="about">
          <Header />
          <img height="300" width="300" src="http://tony-homes.com/wp-content/uploads/2017/12/ttpic-284x300.jpg" /> 
          <p >Hi! I’m Tony. I'd be happy to help you find your next home. <br />
             You can use this site to search for properties all around the bay area.<br /> 
             If you’d like to ask me any questions regarding your housing search, I’d love to help you.</p> <br />

          <h2>Contact</h2><br />
          <h3> Tony Thomas </h3><br />
          <h4> 
            Pacificwide Real Estate & Mortgage <br />
            <strong>Address: </strong>3005 Silver Creek Rd Suite 214 <br />
            San Jose, CA 95121 <br />
            <strong>Phone: </strong> 408-532-1278
          </h4>
        </div>
      )
    }
}


export default About;