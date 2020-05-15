import React, { Fragment } from 'react';
import Header from './Header';
import Home from './Home';
import Music from './Music';
import Press from './Press';
import Shows from './Shows';
import Video from './Video';
import { HashRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';

export default function AppContainer(props) {
    return (
        <Router>
          <div>
            <Header />
            <Switch>
              <Route path="/video" component={Video} />
              <Route path="/music" component={Music} />
              <Route path="/epk" component={Press} />
              <Route path="/shows" component={Shows} />
              <Route path="/" component={Home} />
            </Switch>
          </div>
        </Router>
    )
}
