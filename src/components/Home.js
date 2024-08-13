import React from 'react';
import NavBar from './NavBar';
import '../styles/Home.css';
import services1 from '../images/home-services-1.png';
import services2 from '../images/home-services-2.png';
import services3 from '../images/home-services-3.png';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

function Home() {
  return (
    <div className='full-home-page'>
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
      <div className="home-services">
        <div className='home-grid-arrangement'>
          <img src={services1} alt="services1" className='servicesimglarge'/>
          <div className="home-vertical-arrangement">
            <img src={services2} alt="services2" className="servicesimg"/>
            <img src={services3} alt="services3" className='servicesimg'/>
          </div>
          <div className="home-services-text">
            <p style={{fontFamily:"Bold", fontSize:36}}>280+</p>
            <p style={{fontFamily:"Light", fontWeight:700, fontSize:28}}>Properties</p>
            <p style={{fontFamily:"Light", fontWeight:700, fontSize:28}}>Explore our wide variety of properties to fid your dream home today</p>
            <p style={{fontFamily:"Light", fontWeight:700, fontSize:28}}>Available at</p>
            <p style={{fontFamily:"Bold", fontSize:36}}>20+ cities all over Tamil Nadu</p>
            <ArrowCircleRightIcon style={{height:50, width:50, color:"white"}}/>
          </div>
        </div>
      </div> 
    </div> 
  )
}

export default Home
