import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import {Link} from 'react-router-dom';


class Tabs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: 'Home'
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle(tab) {
    if(this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    return (
        <div>
          <Nav tabs>
          <Link to="/Home">
            <NavItem>
              <NavLink
              
                className={classnames ({ active:this.state.activeTab === 'Home'})}
                onClick={() => { this.toggle('Home'); }} >
                Home
              </NavLink>
            </NavItem> </Link>
            <Link to="/About">
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === 'About'})}
                onClick={() => { this.toggle('About'); }}
                >
                About
              </NavLink>
            </NavItem>
            </Link>
            <Link to="FeaturedListings">
            <NavItem>
              <NavLink
                className={classnames ({ active:this.state.activeTab === 'Featured Listings'})}
                onClick={() => { this.toggle('Featured Listings'); }}
              >
              Featured Listings
              </NavLink>
            </NavItem>
            </Link>
            <Link to="SearchProperties">
            <NavItem>
              <NavLink
                className={classnames ({ active:this.state.activeTab === 'Search Properties'})}
                onClick={() => { this.toggle('Search Properties'); }}
              >
              Search Properties 
              </NavLink>
            </NavItem>
            </Link>
          </Nav>
        </div>
    )
  }
}

export default Tabs;