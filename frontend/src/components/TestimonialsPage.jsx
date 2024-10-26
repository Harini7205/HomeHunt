import React, {useEffect} from 'react';
import '../styles/TestimonialsPage.css';
import NavBar from './NavBar';
import Footer from './Footer';
const testimonials = [
  {
    name: "Akshaya",
    role: "Freelance Designer",
    testimonial: "HomeHunt made my rental search in Chennai so simple! The website’s layout is intuitive, and I found a great place that met all my requirements within days. The support team was super helpful, guiding me through the paperwork. Can’t recommend it enough!",
    rating: 5,
    image: "person1.jpg"
  },
  {
    name: "Nikhil",
    role: "Software Developer",
    testimonial: "I was worried about finding the right rental in Coimbatore, but HomeHunt came through! The listings are accurate, and the detailed info about each property helped me make a quick decision. Plus, the response time of the support team is impressive. Definitely a 5-star experience!",
    rating: 3,
    image: "person2.jpg"
  },
  {
    name: "Pranav",
    role: "Online Entrepreneur",
    testimonial: "Renting has never been easier thanks to HomeHunt! I was able to narrow down my search with the easy filters, and I found an apartment in Madurai in no time. The support team answered all my questions quickly and made the entire process so smooth. Highly recommend!",
    rating: 2,
    image: "person4.jpg"
  },
  {
    name: "Sarah John",
    role: "Blogger",
    testimonial: "Living in Tiruchirappalli, finding the right home for rent used to be a challenge until I tried HomeHunt. Their website has tons of listings, and it’s so easy to contact landlords directly. Customer service has been fantastic in resolving any queries I had. HomeHunt has definitely raised the bar!",
    rating: 5,
    image: "person3.jpg"
  }
];
const cityProperties = [
  {
    name: "Chennai",
    properties: 8,
    image: "findprop1.png"
  },
  {
    name: "Coimbatore",
    properties: 2,
    image: "findprop2.png"
  },
  {
    name: "Madurai",
    properties: 1,
    image: "findprop3.png"
  },
  {
    name: "Tiruchirapalli",
    properties: 2,
    image: "findprop4.png"
  },
  {
    name: "Salem",
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
