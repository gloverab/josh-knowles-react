import React, { Fragment } from 'react'

export default function Video(props) {
  return (
    <div className='videos-container main-container'>
      <div className='internal-container'>
        <div className='video-card featured'>
          <h3>Featured Video:</h3>
          <h1>Josh Knowles - Ember(live)</h1>
          <div className='video-wrapper'>
            <iframe className='featured-vid' src="https://www.youtube.com/embed/92P4t0kXL0Y" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
          </div>
        </div>

        <div className='video-card video-card-other'>
          <h2>Lane 8 - Atlas (violin remix)</h2>
          <div className='video-wrapper'>
            <iframe className='featured-vid' src="https://www.youtube.com/embed/kT8V7rJWVys" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
          </div>
        </div>

        <div className='video-card video-card-other'>
          <h2>Chance the Rapper - Same Drugs (violin loop cover)</h2>
          <div className='video-wrapper'>
            <iframe className='featured-vid' src="https://www.youtube.com/embed/49O7AMaeD2U" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
          </div>
        </div>

        <div className='video-card video-card-other'>
          <h2>Half of My Life (w/ Cirio Collective)</h2>
          <div className='video-wrapper'>
            <iframe className='featured-vid' src="https://www.youtube.com/embed/aKkT3HGWjTc" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}
