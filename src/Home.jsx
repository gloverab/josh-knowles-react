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
                <h4 className='news-header'>Listen: <a href='http://smarturl.it/w8sgbi' target='blank'>Spin Without A Sound <i className='fa fa-play'></i></a></h4>
                <h4 className='news-subheader'>Electric violin album out now:</h4>
                <ul className='news-list'>
                  <li className='news-list-li'><a href='https://joshknowles.bandcamp.com/releases' target='blank'><i className='fa fa-shopping-cart'></i>&nbsp;Physical</a></li>
                  <li className='news-list-li'><a href='http://smarturl.it/w8sgbi' target='blank'><i className='fa fa-music'></i>&nbsp;Digital</a></li>
                </ul>
              </div>

              <div className='news-card'>
                <h4 className='news-header'>Watch: <a href='https://www.youtube.com/watch?v=92P4t0kXL0Y' target='blank'>Ember <i className='fa fa-youtube-play'></i></a></h4>
                <h4 className='news-subheader'>Live loop video performance of "Ember," the latest single from <a href='https://joshknowles.bandcamp.com/releases' target='blank'>Spin Without A Sound</a></h4>
              </div>

              <div className='news-card'>
                <h4 className='news-header'>See: <a href='https://www.facebook.com/events/454530265020926/'>8/9 @ Isabella Stewart Gardner Museum - Boston, MA</a></h4>
                <h4 className='news-subheader'>Performing in Calderwood Hall</h4>
              </div>
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
