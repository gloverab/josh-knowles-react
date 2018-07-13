import React, { Fragment } from 'react';

export default class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const script = document.createElement('script');
    script.src = 'https://widget.bandsintown.com/main.min.js';
    script.async = true;
    document.body.appendChild(script);
  }

  render() {
    return (
      <div className='content-wrapper shows-wrapper'>
        <div className='shows-internal'>
          <a className="bit-widget-initializer" data-artist-name="Josh Knowles" data-display-local-dates="false" data-display-past-dates="true" data-auto-style="false" data-text-color="#FFFFFF" data-link-color="#2F95DE" data-popup-background-color="rgba(0,0,0,0)" data-background-color="rgba(0,0,0,0)" data-display-limit="15" data-link-text-color="#FFFFFF" />
        </div>
      </div>
    )
  }
}
