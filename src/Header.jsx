import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      expandableNav: window.innerWidth < 420
    }

    this.expandMenu = this.expandMenu.bind(this)
  }

  expandMenu() {
    this.setState({
      menuExpanded: !this.state.menuExpanded
    })
  }

  render() {
    return (
      <header>
        {!this.state.expandableNav &&
          <h2 className='title ib'><Link to='/'>Josh Knowles</Link></h2>}
        {this.state.expandableNav &&
          <h2 className='title ib' onClick={this.expandMenu}><i className='fa fa-bars'></i></h2>}
        <ul className={`header-nav header-nav-nav ib ${this.state.menuExpanded ? 'expanded' : ''}`}>
          {this.state.expandableNav &&
            <li className='header-nav-li header-nav-li-nav ib' onClick={this.expandMenu}>
              <Link to='/'><h2>Josh Knowles</h2></Link>
            </li>}
          <li className='header-nav-li header-nav-li-nav ib' onClick={this.expandMenu}><Link to='/about'>About</Link></li>
          <li className='header-nav-li header-nav-li-nav ib' onClick={this.expandMenu}><Link to='/video'>Video</Link></li>
          <li className='header-nav-li header-nav-li-nav ib' onClick={this.expandMenu}><Link to='/music'>Music</Link></li>
          <li className='header-nav-li header-nav-li-nav ib' onClick={this.expandMenu}><Link to='/shows'>Shows</Link></li>
          <li className='header-nav-li header-nav-li-nav ib' onClick={this.expandMenu}><Link to='/contact'>Contact</Link></li>
        </ul>
        <ul className='header-nav header-nav-social ib'>
          <li className='header-nav-li header-nav-social-li ib'><a href='https://www.facebook.com/joshknowlesmusic'><i className='fa fa-facebook'></i></a></li>
          <li className='header-nav-li header-nav-social-li ib'><a href='https://www.twitter.com/joshnemes'><i className='fa fa-twitter'></i></a></li>
          <li className='header-nav-li header-nav-social-li ib'><a href='https://www.instagram.com/joshnemes'><i className='fa fa-instagram'></i></a></li>
        </ul>
      </header>
    )
  }
}
