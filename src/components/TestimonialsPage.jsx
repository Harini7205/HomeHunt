import React from 'react';
import '../styles/TestimonialsPage.css';
import NavBar from './NavBar';

function TestimonialsPage() {
  return (
    <div className='testimonials-page' style={{
      backgroundImage: 'url(../images/testimonial.jpg)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      height: '98vh',
    }}>
      <NavBar />
      <p>Discover homes that you love</p>
    </div>
  )
}

export default TestimonialsPage
