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
            <p>Josh Knowles is a violinist, singer/songwriter, and composer based in Boston, MA who was trained from the age of four as a classical violinist and formerly educated at Berklee College of Music. He brings an eclectic array of influences to his work, continually striving to fuse his traditional foundation with experimental studio production and stunning live performances.</p>
            <p>Knowles is also a recurring collaborator with Cirio Collective and Boston Ballet, with whom he has appeared on stage for historic runs at the Boston Opera House and the Lincoln Center in New York. He currently resides as a Community Luminary at the Isabella Stewart Gardner Museum, where he performs regularly.</p>
            <p>In February of 2018, Knowles released "Spin Without A Sound," his debut album of instrumental solo electric violin pieces . Largely recorded live, each of the original compositions is built on loops and improvisations spawned entirely from sounds created by the violin, manipulated by multiple effect pedals.</p>
            <p>He built on this foundation in summer 2019 with breakthrough single "Same," which incorporated his signature electric violin tones but also showcased his prowess as a songwriter and vocalist. A unique and cathartic ballad, "Same" has garnered nearly 100,000 plays on Spotify and will appear Knowles' upcoming full length album, due out in mid 2020.</p>
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
                <h4 className='news-header'>See: <a href='https://festivalballetprovidence.org/2019-2020-season/game-changers/' target='blank'>Gamechangers - Feb 7-9</a></h4>
                <h4 className='news-subheader'>Josh Knowles performing live with Providence Festival Ballet</h4>
                <ul className='news-list'>
                  <li className='news-list-li'><a href='https://festivalballetprovidence.org/2019-2020-season/game-changers/' target='blank'>&nbsp;<i className='fa fa-newspaper-o'></i>&nbsp;&nbsp;Click for more information</a></li>
                </ul>
              </div>

              <div className='news-card'>
                <h4 className='news-header'>Listen: <a href='http://hyperurl.co/kuqkig' target='blank'>Josh Knowles - Boxes <i className='fa fa-play'></i></a></h4>
                <h4 className='news-subheader'>Brand new single "Boxes" now streaming everywhere</h4>
                <ul className='news-list'>
                  <li className='news-list-li'><a href='http://hyperurl.co/kuqkig' target='blank'>&nbsp;<i className='fa fa-spotify'></i>&nbsp;&nbsp;Boxes - Listen now</a></li>
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
    )
  }
}
