import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default function Header(props) {
  return (
    <header>
      <h2 className='title ib'><Link to='/'>Josh Knowles</Link></h2>
      <ul className='header-nav header-nav-nav ib'>
        <li className='header-nav-li ib'><Link to='/about'>About</Link></li>
        <li className='header-nav-li ib'><Link to='/video'>Video</Link></li>
        <li className='header-nav-li ib'><Link to='/music'>Music</Link></li>
        <li className='header-nav-li ib'><a href='#'>Shows</a></li>
        <li className='header-nav-li ib'><Link to='/contact'>Contact</Link></li>
      </ul>
      <ul className='header-nav header-nav-social ib'>
        <li className='header-nav-li header-nav-social-li ib'><a href='https://www.facebook.com/joshknowlesmusic'><i className='fa fa-facebook'></i></a></li>
        <li className='header-nav-li header-nav-social-li ib'><a href='https://www.twitter.com/joshnemes'><i className='fa fa-twitter'></i></a></li>
        <li className='header-nav-li header-nav-social-li ib'><a href='https://www.instagram.com/joshnemes'><i className='fa fa-instagram'></i></a></li>
      </ul>
    </header>
  )
}
