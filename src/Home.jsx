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
            <p>Josh Knowles is an electric violinist, singer/songwriter, and composer based in Boston, MA. He brings an eclectic array of influences to his original work, continually striving to fuse his traditional foundation with modern songwriting, experimental studio production, and stunning live performances.</p>
          <p>An in-demand and versatile musician, Knowles has featured on albums by <span className='bold'>The Front Bottoms</span>, <span className='bold'>John Nolan</span> (Taking Back Sunday), and <span className='bold'>An Horse</span>, performed on stages for <span className='bold'>Barack Obama</span>, <span className='bold'>David Letterman</span> and <span className='bold'>James Taylor</span>, and frequently collaborates with <span className='bold'>Cirio Collective</span> and <span className='bold'>Boston Ballet</span>, with whom he has appeared on stage for historic runs at the Boston Opera House and the Lincoln Center in New York. He currently resides as a Community Luminary at the Isabella Stewart Gardner Museum, where he performs regularly.</p>
          <p>In February of 2018, Knowles released "Spin Without A Sound," his debut instrumental album of loop-based ethereal solo electric violin pieces.</p>
          <p>In summer 2019 he showcased his songwriting side with debut breakthrough single "Same," which incorporated his signature electric violin tones but also showcased his prowess as a songwriter and vocalist. A unique and cathartic ballad, "Same" has garnered nearly 100,000 plays on Spotify.</p>
          <p>In early 2020, Knowles premiered a collection of new original material by performing it live on stage during a 3 night run with Providence Festival Ballet. His powerful experimental song and upcoming single “How Deep the Dark” opened the show, and will be released everywhere on May 26, 2020.</p>
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
      <div className='main-container'>
      <div className='content-wrapper noscroll'>
        <div className={`news-container ${aboutPage ? 'about' : ''} ${contactPage ? 'contact' : ''}`}>
          {!aboutPage && !contactPage && !this.state.hideText &&
            <Fragment>

              <div className='news-card'>
                <h4 className='news-header'>Listen: <a href='http://hyperurl.co/kuqkig' target='blank'>Josh Knowles - How Deep the Dark <i className='fa fa-play'></i></a></h4>
                <h4 className='news-subheader'>Brand new single "How Deep the Dark" now streaming everywhere</h4>
                <ul className='news-list'>
                  <li className='news-list-li'><a href='http://hyperurl.co/ikgu7k' target='blank'>&nbsp;<i className='fa fa-spotify'></i>&nbsp;&nbsp;How Deep the Dark - Listen now</a></li>
                </ul>
              </div>

              <div className='news-card'>
                <h4 className='news-header'>Watch: <a href='https://www.youtube.com/watch?v=_drI0UGkKZg' target='blank'>Same <i className='fa fa-youtube-play'></i></a></h4>
                <h4 className='news-subheader'>Music video for debut single "Same," featuring Boston Ballet</h4>
                <ul className='news-list'>
                  <li className='news-list-li'><a href='https://www.youtube.com/watch?v=_drI0UGkKZg' target='blank'>&nbsp;<i className='fa fa-camera'></i>&nbsp;&nbsp;Same - Watch now</a></li>
                </ul>
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
      </div>
    )
  }
}
