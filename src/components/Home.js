import React from 'react';
import NavBar from './NavBar';
import '../styles/Home.css';

function Home() {
  return (
    <div className='home'>
      <NavBar />  
      <div className='text-home-page'>
        <h2 className='catchy-text'>Live Where You Love</h2>
        <p className='subcaption'>Turning Houses Into Homes</p>
        <div className='home-page-button-container'>
            <button className='signup'>Sign Up</button>
            <button className='signin'>Sign In</button>
        </div>
      </div>      
    </div>
  )
}

export default Home
