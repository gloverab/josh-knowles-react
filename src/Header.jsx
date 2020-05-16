import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      smallScreen: window.innerWidth < 700,
      menuExpanded: false
    }

    this.expandMenu = this.expandMenu.bind(this)
    this.updateDimensions = this.updateDimensions.bind(this)
  }

  updateDimensions() {
    if (window.innerWidth < 700) {
      this.setState({ smallScreen: true })
    } else if (window.innerWidth >= 700) {
      this.setState({ smallScreen: false })
    }
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions)
  }

  expandMenu() {
    this.setState({
      menuExpanded: !this.state.menuExpanded
    })
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  render() {
    const windowWidth = window.innerWidth
    return (
      <header>
        {!this.state.smallScreen &&
          <h2 className='title ib'><Link to='/'>Josh Knowles</Link></h2>}
        {this.state.smallScreen &&
          <h2 className='title ib' onClick={this.expandMenu}><i className='fa fa-bars'></i></h2>}
          {this.state.smallScreen &&
            <h2 className='title mobile ib'><Link to='/'>Josh Knowles</Link></h2>}
        <ul className={`header-nav header-nav-nav ib ${this.state.menuExpanded ? 'expanded' : ''}`}>
          {this.state.smallScreen &&
            <li className='header-nav-li header-nav-li-nav ib' onClick={this.expandMenu}>
              <Link to='/'><h2>Josh Knowles</h2></Link>
            </li>}
          <li className='header-nav-li header-nav-li-nav ib' onClick={this.expandMenu}><Link to='/about'>About</Link></li>
          <li className='header-nav-li header-nav-li-nav ib' onClick={this.expandMenu}><Link to='/video'>Video</Link></li>
          <li className='header-nav-li header-nav-li-nav ib' onClick={this.expandMenu}><Link to='/music'>Music</Link></li>
          <li className='header-nav-li header-nav-li-nav ib' onClick={this.expandMenu}><Link to='/shows'>Shows</Link></li>
          <li className='header-nav-li header-nav-li-nav ib' onClick={this.expandMenu}><Link to='/epk'>Press</Link></li>
          <li className='header-nav-li header-nav-li-nav ib' onClick={this.expandMenu}><Link to='/contact'>Contact</Link></li>
        </ul>
        <ul className='header-nav header-nav-social ib'>
          {this.state.smallScreen && <li className='header-nav-li header-nav-social-li ib'><a href='https://music.apple.com/us/artist/josh-knowles/635148421'><i className='fa fa-apple'></i></a></li>}
          {this.state.smallScreen && <li className='header-nav-li header-nav-social-li ib'><a href='https://open.spotify.com/artist/2cYJgCe7KbXn1Y4TL0JCrK?si=cMotAAjRSsO0C6EJOyymZw'><i className='fa fa-spotify'></i></a></li>}
          <li className='header-nav-li header-nav-social-li ib'><a href='https://www.facebook.com/joshknowlesmusic'><i className='fa fa-facebook'></i></a></li>
          <li className='header-nav-li header-nav-social-li ib'><a href='https://www.twitter.com/joshnemes'><i className='fa fa-twitter'></i></a></li>
          <li className='header-nav-li header-nav-social-li ib'><a href='https://www.instagram.com/joshnemes'><i className='fa fa-instagram'></i></a></li>
        </ul>
      </header>
    )
  }
}