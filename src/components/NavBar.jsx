import React from 'react';
import logo from '../images/logo.png';
import '../styles/NavBar.css';
import {Link} from 'react-router-dom';

function NavBar() {
  return (
    <div className='navbar'>
      <img src={logo} alt="navbar-logo" className='navbar-logo'/>
      <div className='navbar-options'>
        <Link to={'/'} style={{textDecoration:'none'}}><p>Home</p></Link>
        <Link to={'/'} style={{textDecoration:'none'}}><p>Services</p></Link>
        <Link to={'/'} style={{textDecoration:'none'}}><p>Testimonials</p></Link>
        <Link to={'/aboutus'} style={{textDecoration:'none'}}><p>About Us</p></Link>
      </div>
    </div>
  )
}

export default NavBar
