import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hideText: false,
      aboutPage: props.location.pathname === '/about',
      contactPage: props.location.pathname === '/contact'
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.location.pathname !== nextProps.location.pathname) {
      this.setState({
        hideText: true,
        aboutPage: nextProps.location.pathname === '/about',
        contactPage: nextProps.location.pathname === '/contact'
      }, () => {
        setTimeout(() => {
          this.setState({
            hideText: false,
          })
        }, 300)
      })
    }
  }

  render() {
    const { aboutPage, contactPage } = this.state
    const aboutText = () => {
        return (<Fragment>
            <h2>Josh Knowles</h2>
            <p>Josh Knowles is a violinist, singer/songwriter, and composer based in Boston, MA. Formerly educated at Berklee College of Music, he brings an eclectic array of influences to his work. He has trained from the age of four as a classical violinist and is continually striving to fuse his traditional foundation with a myriad of contemporary styles.</p>

            <p>Knowles is also a musical artist and poet for Cirio Collective and Boston Ballet, with whom he has appeared on stage for historic runs at the Boston Opera House and the Lincoln Center in New York. He first collaborated with the Collective in 2015, and shortly after was asked to arrange the music and perform alongside violist Anna Stromer for Cirio Collective's piece, "Efil Ym Fo Flah", which premiered at the Vineyard Arts Project in summer 2016. He currently resides as a Community Luminary at the Isabella Stewart Gardner Museum, where he performs regularly.</p>

            <p>In February of 2018, Knowles released "Spin Without A Sound," his debut album of instrumental solo electric violin pieces. Largely recorded live, each of the original compositions is built on loops and improvisations spawned entirely from sounds created by the violin, manipulated by multiple effect pedals. Riding the line somewhere between contemporary new age and alternative classical, the result is both symphonic and electronic, unique in its combination of melodic foundation and technical prowess.</p>
          </Fragment>)
    }

    const contactText = () => {
      return (
        <Fragment>
          <h2>Contact</h2>
          <p>Please feel free to get in touch!</p>
          <p>Contact/Booking: <a href='mailto:jaknowles320@gmail.com'>jaknowles320@gmail.com</a></p>
          <p>Press: <a href='mailto:alex@birdlabrecords.com'>alex@birdlabrecords.com</a></p>
          <p>Facebook: <a href='http://www.facebook.com/joshknowlesmusic'>@joshknowlesmusic</a></p>
          <p>Instagram: <a href='http://www.instagram.com/joshknowlesmusic'>@joshknowlesmusic</a></p>
        </Fragment>
      )
    }

    return (
      <div className='content-wrapper noscroll'>
        <div className={`news-container ${aboutPage ? 'about' : ''} ${contactPage ? 'contact' : ''}`}>
          {!aboutPage && !contactPage && !this.state.hideText &&
            <Fragment>
              <div className='news-card'>
                <h4 className='news-header'>Listen: <a href='hyperurl.co/z3hrlw' target='blank'>Josh Knowles - Same <i className='fa fa-play'></i></a></h4>
                <h4 className='news-subheader'>Debut single "Same" now streaming everywhere</h4>
                <ul className='news-list'>
                  <li className='news-list-li'><a href='https://open.spotify.com/track/1yEnmru0YziioqclSpLsDe?si=nJ91xo9gQeKR6GLE2VNxZQ' target='blank'><i className='fa fa-spotify'></i>&nbsp;Spotify</a></li>
                  <li className='news-list-li'><a href='https://www.pointemagazine.com/dont-miss-boston-ballets-lia-cirio-and-paul-craig-in-this-new-music-video-2635415909.html' target='blank'><i className='fa fa-music'></i>&nbsp;Point Magazine Feature</a></li>
                </ul>
              </div>

              <div className='news-card'>
                <h4 className='news-header'>Watch: <a href='https://www.youtube.com/watch?v=_drI0UGkKZg' target='blank'>Same <i className='fa fa-youtube-play'></i></a></h4>
                <h4 className='news-subheader'>Music video for debut single "Same," featuring Boston Ballet <a href='https://joshknowles.bandcamp.com/releases' target='blank'>Spin Without A Sound</a></h4>
              </div>

              {/*<div className='news-card'>
                <h4 className='news-header'>See: <a href='https://www.facebook.com/events/252488168925250/'>11/11 @ Great Scott - Boston, MA</a></h4>
                <h4 className='news-subheader'>Performing with Nemes and John Nolan</h4>
              </div>*/}
            </Fragment>}
            {aboutPage &&
              <Fragment>
                {!this.state.hideText && aboutText()}
              </Fragment>}
            {contactPage &&
              <Fragment>
                {!this.state.hideText && contactText()}
              </Fragment>}
          </div>
          <div className={`image-wrapper ${aboutPage ? '' : 'hide'}`}>
            <img src='https://i.imgur.com/1itLFSG.jpg' />
          </div>
        </div>
    )
  }
}
