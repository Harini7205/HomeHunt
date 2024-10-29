import React from 'react';
import VillaIcon from '@mui/icons-material/Villa';
import BedIcon from '@mui/icons-material/Bed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import '../styles/FeaturedProperty.css';
import { Link } from 'react-router-dom';

function FeaturedProperty({ img, title, desc, bedroom, bathroom, type, price, size, location }) {
  return (
    <div className='featured-property'>
      <img src={img} alt='featured-property-image' className='fp-comp-img' />
      <h3 className='fp-comp-title'>{title}</h3>
      <p className='fp-comp-desc'>{desc}</p>
      <div className='fp-row'>
        <p className='fp-comp-num'><BedIcon />{bedroom}-Bedroom</p>
        <p className='fp-comp-num'><BathtubIcon />{bathroom}-Bathroom</p>
        <p className='fp-comp-num'><VillaIcon />{type}</p>
      </div>
      <div className='fp-row'>
        <div className='fp-col'>
          <p>Price</p>
          <p>{price}</p>
        </div>
        <Link
          to="/viewprop"
          state={{
            propertyTitle: title,
            propertyImage: img,
            propertyDesc: desc,
            propertyRooms: bedroom,
            propertyBathrooms: bathroom,
            propertyType: type,
            propertySize: size,
            propertyPrice: price,
            propertyLocation: location,
          }}
          style={{ textDecoration: 'none' }}
        >
          <button className='fp-view-button'>View Property Details</button>
        </Link>
      </div>
    </div>
  );
}

export default FeaturedProperty;
