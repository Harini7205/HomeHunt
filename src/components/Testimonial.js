import React from 'react';
import '../styles/Testimonial.css';

function Testimonial({img,name,place,content}) {
  return (
    <div className='testimonial'>
      <div className='testimonial-left'>
        <img src={img} alt="testimonial-img" className='testimonial-img' />
      </div>
      <div className='testimonial-right'>
        <div className='testimonial-person-desc'>
          <p className='testimonial-person-name'>{name}</p>
          <p className='testimonial-person-place'>{place}</p>
        </div>
        <p className='testimonial-content'>{content}</p>
      </div>
    </div>
  )
}

export default Testimonial
