import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Home from './Home';
import About from './About';
import FeaturedListings from './FeaturedListings';
import SearchProperties from './SearchProperties';

class App extends React.Component {
 constructor(props) {
    super(props)
    this.state = {
    }
  }

  render () {
    return (
      <Router>
        <div>
          <Route exact path="/" render={(props) => (<Home />)} />
          <Route path="/Home" render={(props) => (<Home/>)} />
          <Route path="/About" render={(props) => (<About/>)} />
          <Route path="/FeaturedListings" render={(props) => (<FeaturedListings/>)} />
          <Route path="/SearchProperties" render={(props) => (<SearchProperties/>)} />
        </div>
      </Router>
    );
  }
}

export default App;

