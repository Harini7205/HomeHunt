import React from 'react';
import NavBar from './NavBar';
import '../styles/Home.css';
import services1 from '../images/home-services-1.png';
import services2 from '../images/home-services-2.png';
import services3 from '../images/home-services-3.png';
import why1 from '../images/why1.png';
import why2 from '../images/why2 (1).png';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';


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
      <div className='home-why'>
        <div className='home-why-vertical'>
          <img className="why1"src={why1} alt="why1" />
          <div className='my-properties'>
            <p style={{fontFamily:"Bold", fontSize:24}}>Properties for sale</p>
            <p style={{fontFamily:"Bold", fontSize:28}}>14K</p>
          </div>
        </div>
        
        <img className="why2" src={why2} alt="why2"/>
        <div className='why-text'>
          <p style={{fontFamily:"Bold", fontSize:36}}>Why You Should Work
          With Us</p>
          <p style={{fontFamily:"Light", fontSize:22}}>We aim to ease the process of searching houses and build a community where your perfect home is just a click away </p>
          <ul className='home-why-list'>
            <li style={{fontFamily:"Bold", fontSize:18}}>100% Secure</li>
            <li style={{fontFamily:"Bold", fontSize:18}}>Wide Range of Properties</li>
            <li style={{fontFamily:"Bold", fontSize:18}}>Buy or Rent Homes</li>
            <li style={{fontFamily:"Bold", fontSize:18}}>Trusted by Thousands</li>

          </ul>
          <button className='learn-more-button'>Learn more <ArrowRightAltIcon style={{color:'white'}} /></button>
        </div>

      </div> 
    </div> 
  )
}

export default Home
