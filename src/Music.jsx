import React, { Fragment } from 'react'

export default class Music extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      expandText: false,
      smallScreen: window.innerWidth < 700
    }

    this.expandText = this.expandText.bind(this)
    this.updateDimensions = this.updateDimensions.bind(this)
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions)
  }

  expandText() {
    this.setState({ expandText: !this.state.expandText })
  }

  updateDimensions() {
    if (window.innerWidth < 700) {
      this.setState({ smallScreen: true })
    } else if (window.innerWidth >= 700) {
      this.setState({ smallScreen: false })
    }
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  render() {
    return (
      <div className='videos-container main-container'>
        <div className='internal-container'>
          <div className='container'>

            <div className='music-release-wrapper'>
              <div className='music-links-wrapper'>
                <div className='title-wrapper'>
                  <h2>Boxes - Single</h2>
                  <h4>Released Feb 7, 2020</h4>
                </div>
                {this.state.smallScreen && <div className='image-wrapper sm'>
                <img src='https://i.imgur.com/5BmnBNZ.png' />
                </div>}
                <div className='text-wrapper'>
                  <p>Boxes was premiered live onstage alongside Festival Ballet Providence</p>
                </div>
                <div className='music-links'>
                  <a href='https://joshknowles.bandcamp.com/track/boxes' target='blank'>Bandcamp</a>
                  <a href='https://open.spotify.com/track/7ny3Fs5KawyleUb6PjGxUm?si=csrPBOlURCOpc6lj3h1hVg' target='blank'>Spotify</a>
                  <a href='https://music.apple.com/us/album/boxes-single/1497640073' target='blank'>Apple Music</a>
                  <a href='https://music.apple.com/us/album/boxes-single/1497640073' target='blank'>iTunes</a>
                </div>
              </div>
              {!this.state.smallScreen && <div className='image-wrapper sm'>
                <img src='https://i.imgur.com/5BmnBNZ.png' />
              </div>}
            </div>

            <div className='music-release-wrapper'>
              {!this.state.smallScreen && <div className='image-wrapper sm'>
                <img src='https://i.imgur.com/oAfkWjn.jpg' />
              </div>}
              <div className='music-links-wrapper'>
                <div className='title-wrapper'>
                  <h2>Thrown Stone - Single</h2>
                  <h4>Released Jan 15, 2020</h4>
                </div>
                <div className='text-wrapper'>
                </div>
                {this.state.smallScreen && <div className='image-wrapper sm'>
                <img src='https://i.imgur.com/oAfkWjn.jpg' />
              </div>}
                <div className='music-links'>
                  <a href='https://joshknowles.bandcamp.com/track/throne-stone' target='blank'>Bandcamp</a>
                  <a href='https://open.spotify.com/track/1EuAAuA8p81uigHNO17J8N?si=8Rb4mLtbTdW9ZePFTxXx1w' target='blank'>Spotify</a>
                  <a href='https://music.apple.com/us/album/thrown-stone-single/1493555447' target='blank'>Apple Music/iTunes</a>
                  <a href='https://www.youtube.com/watch?v=fSD5CPvRc-Q&t=4s' target='blank'>Youtube</a>
                </div>
              </div>
            </div>

            <div className='music-release-wrapper'>
              <div className='music-links-wrapper'>
                <div className='title-wrapper'>
                  <h2>Same - Single</h2>
                  <h4>Released April 24, 2019</h4>
                </div>
                <div className='text-wrapper'>
                </div>
                {this.state.smallScreen && <div className='image-wrapper sm'>
                  <img src='https://i.imgur.com/m7g6Dfi.jpg' />
                </div>}
                <div className='music-links'>
                  <a href='https://joshknowles.bandcamp.com/track/same' target='blank'>Bandcamp</a>
                  <a href='https://open.spotify.com/track/1yEnmru0YziioqclSpLsDe?si=eiMCfJubRdCBwVcmlmwRYA' target='blank'>Spotify</a>
                  <a href='https://music.apple.com/us/album/same-single/1459414420' target='blank'>Apple Music/iTunes</a>
                  <a href='https://www.youtube.com/watch?v=_drI0UGkKZg' target='blank'>Youtube</a>
                </div>
              </div>
             {!this.state.smallScreen && <div className='image-wrapper sm'>
                <img src='https://i.imgur.com/m7g6Dfi.jpg' />
              </div>}
            </div>

            <div className='music-release-wrapper'>
              {!this.state.smallScreen && <div className='image-wrapper sm'>
                <img src='https://i.imgur.com/5RvwqJA.jpg' />
              </div>}
              <div className='music-links-wrapper'>
                <div className='title-wrapper'>
                  <h2>Spin Without A Sound</h2>
                  <h4>Released Feb 19, 2018</h4>
                </div>
                {this.state.smallScreen && <div className='image-wrapper sm'>
                  <img src='https://i.imgur.com/5RvwqJA.jpg' />
                </div>}
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
      </div>
    )
  }
}
