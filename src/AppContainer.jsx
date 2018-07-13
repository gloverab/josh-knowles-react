import React, { Fragment } from 'react';
import Header from './Header';
import Home from './Home';
import About from './About';
import Music from './Music';
import Shows from './Shows';
import Video from './Video';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';

export default function AppContainer(props) {

    return (
      <div className='main-container'>
        <Router>
          <div>
            <Header />
            <Switch>
              <Route path="/video" component={Video} />
              <Route path="/music" component={Music} />
              <Route path="/shows" component={Shows} />
              <Route path="/" component={Home} />
            </Switch>
          </div>
        </Router>
      </div>
    )
}
