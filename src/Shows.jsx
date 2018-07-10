import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

export default class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='content-wrapper shows-wrapper'>
        <div className='shows-internal'>
          <a class="bit-widget-initializer" data-artist-name="Josh Knowles" data-display-local-dates="false" data-display-past-dates="true" data-auto-style="false" data-text-color="#FFFFFF" data-link-color="#2F95DE" data-popup-background-color="rgba(0,0,0,0)" data-background-color="rgba(0,0,0,0)" data-display-limit="15" data-link-text-color="#FFFFFF"></a>
        </div>
      </div>
    )
  }
}
