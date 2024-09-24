import React from 'react';
import NavBar from './NavBar';
import '../styles/Home.css';
import services1 from '../images/home-services-1.png';
import services2 from '../images/home-services-2.png';
import services3 from '../images/home-services-3.png';
import why1 from '../images/why1.png';
import why2 from '../images/why2.png';
import fp1 from '../images/fp-1.png';
import fp2 from '../images/fp-2.png';
import fp3 from '../images/fp-3.png';
import test1 from '../images/home-test-1.png';
import test2 from '../images/home-test-2.png';
import test3 from '../images/home-test-3.png';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import FeaturedProperty from './FeaturedProperty';
import Footer from './Footer';
import Testimonial from './Testimonial';
import {Link} from "react-router-dom";

function Home() {
  return (
    <div className='full-home-page'>
      <div className='home'>
        <NavBar />  
        <div className='text-home-page'>
          <h2 className='catchy-text'>Live Where You Love</h2>
          <p className='subcaption'>Turning Houses Into Homes</p>
          <Link to={'/signin'} style={{ textDecoration: 'none' }}>
          <div className='home-page-button-container'>
            <button className='signup'>Sign Up</button>
            <button className='signin'>Sign In</button>
          </div>
          </Link>
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
            <ArrowCircleRightIcon style={{height:50, width:50, color:"white"}} className="arrow-circle-right-button" />
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
        </div>
      </div> 
      <div className='home-featured-properties'>
        <div className='home-fp-title'>
          <h2 className='fp-title-home'>Featured Properties</h2>
          <button className='home-fp-button'>View all properties</button>
        </div>
        <div className='featured-properties'>
        <FeaturedProperty 
          img={fp1} 
          title="Seaside Serenity Villa"
          desc="A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood... Read More"
          bedroom="4"
          bathroom="3"
          type="Villa"
          price="$550,000"
        />
        <FeaturedProperty 
          img={fp3} 
          title="Metropolitan Haven"
          desc="A chic and fully-furnished 2-bedroom apartment with panoramic city views... Read More"
          bedroom="2"
          bathroom="2"
          type="Villa"
          price="$300,000"
        />
        <FeaturedProperty 
          img={fp2} 
          title="Rustic Retreat Cottage"
          desc="An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community... Read More"
          bedroom="3"
          bathroom="3"
          type="Villa"
          price="$450,000"
        />
        </div>
      </div>
      <div className='home-testimonials'>
        <Link to={'/viewtestimonials'} style={{ textDecoration: 'none' }}>
        <div className='home-testimonial-title'>
          <h2 className='testimonial-title-home'>Testimonials</h2>
          <button className='home-testimonial-button'>View all</button>
        </div>
        </Link>
        <div className='testimonials'>
          <Testimonial 
            img={test1}
            name="Rodriguez Millo"
            place="Puorto Lobos, Mexico"
            content="“The services are totally great! they offered many options for me to stay that suit my budget. Also, the room is well-furnished.”"
          />
          <Testimonial 
            img={test2}
            name="Victenzy Markov"
            place="Moscow, Russia"
            content="“The services are totally great! they offered many options for me to stay that suit my budget. Also, the room is well-furnished.”"
          />
          <Testimonial 
            img={test3}
            name="Carla Newton"
            place="Seattle, America"
            content="“The services are totally great! they offered many options for me to stay that suit my budget. Also, the room is well-furnished.”"
          />

        </div>
      </div>
      <Footer />
    </div> 
  )
}

export default Home
