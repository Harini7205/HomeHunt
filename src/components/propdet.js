
import React from 'react'
import '../styles/propertydetails.css';
import bd from '../images/propdet1.png';
import i2 from '../images/propdet2.png';
import i3 from '../images/propdet3.png';
function propertydetails() {
  return (
    <div className='propertydetails-propertydet'>
      <h5 className='prope4rtydetails-prop'>Description</h5>
      <p> Discover your own piece of paradise with the Seaside Serenity Villa. T With an open floor plan, breathtaking ocean views from every room, and direct access to a pristine sandy beach, this property is the epitome of coastal living.</p>
      <hr style={{ border: "1px solid black" }} />
      <img src={bd} alt="image1" className='propertydet1' />
      <img src={i2} alt="image2" className='propertydet2' />
      <img src={i3} alt="image3" className='propertydet3' />
    </div>
  )
}

export default propertydetails
