import React, {useEffect} from 'react';
import '../styles/TestimonialsPage.css';
import NavBar from './NavBar';
import Footer from './Footer';
const testimonials = [
  {
    name: "Jane Smith",
    role: "Freelance Designer",
    testimonial: "I've been using this web hosting service for a year and I'm really impressed with the uptime and support. The website has never gone down and the customer service is always quick to help with any issues I have. Highly recommend!",
    rating: 5,
    image: "test4.png"
  },
  {
    name: "Tom Williams",
    role: "Software Developer",
    testimonial: "I've been using this web hosting service for a few months now and overall it's been fine. The uptime has been good and I haven't had any major issues. The pricing is also reasonable. Nothing particularly stands out as exceptional, but it gets the job done.",
    rating: 3,
    image: "test3.png"
  },
  {
    name: "Michael Brown",
    role: "Online Entrepreneur",
    testimonial: "I've been using this web hosting service for a few months and it's been nothing but problems. My website has gone down multiple times and the customer service has been unresponsive. I would not recommend this company.",
    rating: 2,
    image: "test2.png"
  },
  {
    name: "Sarah Johnson",
    role: "Blogger",
    testimonial: "I was a little hesitant to switch to a new web hosting company, but I'm glad I took the plunge. The control panel is user-friendly and I love the one-click installation for popular apps. Everything has been smooth sailing since I made the switch.",
    rating: 5,
    image: "test1.png"
  }
];
const cityProperties = [
  {
    name: "New York",
    properties: 8,
    image: "findprop1.png"
  },
  {
    name: "Chicago",
    properties: 2,
    image: "findprop2.png"
  },
  {
    name: "Los Angeles",
    properties: 1,
    image: "findprop3.png"
  },
  {
    name: "Miami",
    properties: 2,
    image: "findprop4.png"
  },
  {
    name: "Florida",
    properties: 3,
    image: "findprop5.png"
  }
];

function TestimonialsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='testimonials-page'>
      <NavBar className='navbar-testimonial-page'/>
      <p className='center-heading-testimonial-page'>Discover a place that you'll love to live</p>
      <div className='testimonial-slider'>
        <p className='testimonial-slider-heading'>Testimonials</p>
        <div className="testimonial-container">
          {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <img src={require(`../images/${testimonial.image}`)} alt={`${testimonial.name}`} className="testimonial-image" />
            <h3>{testimonial.name}</h3>
            <p className="testimonial-role">{testimonial.role}</p>
            <p className="testimonial-text">"{testimonial.testimonial}"</p>
            <div className="testimonial-rating">
              {"★".repeat(testimonial.rating)}
              {"☆".repeat(5 - testimonial.rating)}
            </div>
          </div>
          ))}
        </div>
        </div>
        <div className='testimonial-page-find-prop'>
        <p className='testimonial-find-prop-heading'>Find properties in these cities</p>
        <div className="testimonial-find-properties-container">
          <div className="city-grid">
          {cityProperties.map((city, index) => (
          <div key={index} className="city-card">
            <img 
              src={require(`../images/${city.image}`)} 
              alt={city.name} 
              className="city-image" 
            />
            <div className="city-info">
              <h3>{city.name}</h3>
              <p>{city.properties} {city.properties > 1 ? 'Properties' : 'Property'}</p>
            </div>
          </div>
          ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default TestimonialsPage
