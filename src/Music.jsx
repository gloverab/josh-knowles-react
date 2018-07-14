import React, { Fragment } from 'react'

export default class Music extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      expandText: false
    }

    this.expandText = this.expandText.bind(this)
  }

  expandText() {
    this.setState({ expandText: !this.state.expandText })
  }

  render() {
    return (
      <div className='videos-container main-container'>
        <div className='internal-container'>
          <div className='container'>
            <div className='image-wrapper'>
              <img src='https://i.imgur.com/5RvwqJA.jpg' />
            </div>
            <div className='music-links-wrapper'>
              <div className='title-wrapper'>
                <h2>Spin Without A Sound</h2>
              </div>
              <div className='text-wrapper'>
                <p>It’s not often that a singular room influences an entire body of musical work, but in the case of Josh Knowles’ debut solo electric violin album “Spin Without A Sound,” the inspiration is palpable. Conceived over the course of several marathon performances in the courtyard of Boston’s Isabella Stewart Gardner Museum, “Spin Without A Sound” captures the sonic soul that the architectural tour-de-force bears, transporting the listener back to Knowles’ performances within the museum walls. {!this.state.expandText && <a className='more' onClick={this.expandText}>more...</a>}</p>

                {this.state.expandText && <Fragment>
                  <p>During his engagements in the courtyard, Josh experimented with a DL4 Loop Pedal, recording and layering improvised violin melodies. The result was an ethereal, constantly morphing soundscape that Knowles entered the studio with the explicit intention of recapturing.</p>

                  <p>“Spin Without A Sound”, released in February 2018, was recorded in a series of raw, live recording sessions that often ran even longer than his museum performances. This process allowed Knowles to naturally expand upon the ideas conceptualized at the Gardner and create a record steeped in nostalgic intimacy. “Statue Breath” samples audio from decades-old home videos, while the haunting “Gavotte (circa 1998)” starts with the sounds of eight-year-old Josh performing at one of his early violin recitals. The title-track, a lilting, expansive ballad, excavates answering machine relics from Josh’s late grandmother, whose soothing voice materializes out of the lush bed of strings. {this.state.expandText && <a className='more' onClick={this.expandText}>...less</a>}
                  </p>
                </Fragment>}
              </div>
              <div className='music-links'>
                <a href='https://joshknowles.bandcamp.com/releases' target='blank'>Bandcamp</a>
                <a href='https://open.spotify.com/album/2FG54Y9J7YxuQ5CnZiNUTX' target='blank'>Spotify</a>
                <a href='https://itunes.apple.com/us/album/spin-without-a-sound/1347799058?app=music' target='blank'>Apple Music</a>
                <a href='https://itunes.apple.com/us/album/spin-without-a-sound/1347799058?app=music' target='blank'>iTunes</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
