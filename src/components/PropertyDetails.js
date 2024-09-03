import React,{useState,useEffect} from 'react';
import '../styles/PropertyDetails.css';
import h1 from '../images/h1.jpg';
import h2 from '../images/h2.jpg';
import h3 from '../images/h3.jpg';
import h4 from '../images/h4.jpg';
import h5 from '../images/h5.jpg';
import jon from '../images/home-test-1.png';
import Footer from './Footer';

const PropertyDetails = () => {
    
    const images = [h1, h2, h3, h4, h5];
    const [selectedImage, setSelectedImage] = useState(images[0]);
    useEffect(() => {
      window.scrollTo(0, 0); // Scrolls to the top of the page
    }, []);
  return (
    <div className="property-details-container">
      <div className="property-header">
        <div className='header-line-1'>
          <h1 style={{fontSize:35}}>Property Details</h1>
          <div className="user-profile">
            <img src={jon} alt="Jon Doe" />
            <span>Jon Doe</span>
          </div>
        </div>
        <div className='header-line-2'>
          <div className='line-2-prop-name'>
            <h2 className='seaside'>Seaside Serenity Villa</h2>
            <p className='prop-loc-header'>Malibu, California</p>
          </div>
          <div className='line-2-prop-price'>
            <h2 className='price1'>Price</h2>
            <p className='dollar'>$1,250,000</p>
          </div>
        </div>        
      </div>

      <div className="property-images">
        <div className="image-thumbnails">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Thumbnail ${index + 1}`}
              onClick={() => setSelectedImage(image)}
              className={selectedImage === image ? 'active' : ''}
            />
          ))}
        </div>

        <div className="selected-image">
          <img src={selectedImage} alt="Selected Property View" />
        </div>
      </div>
      <div className='half-half-prop-det'> 
      <div className='left-half-property-details'>
        <div className="description-container">
          <h2>Description</h2>
          <p>
            Discover your own piece of paradise with the Seaside Serenity Villa.
            With an open floor plan, breathtaking ocean views from every room,
            and direct access to a pristine sandy beach, this property is the
            epitome of coastal living.
          </p>
          <hr />
          <div className="property-stats">
            <div className="stat">
              <span role="img" aria-label="bedroom">🛏️</span>
              <p>04 Bedrooms</p>
            </div>
            <div className="stat">
              <span role="img" aria-label="bathroom">🛁</span>
              <p>03 Bathrooms</p>
            </div>
            <div className="stat">
              <span role="img" aria-label="area">📐</span>
              <p>2,500 Square Feet</p>
            </div>
          </div>
        </div>
        <div className="testimonials-container">
          <h2>Testimonials</h2>
          <div className="testimonial">
            <img src={jon} alt="Rodriguez Millo" className="testimonial-image" />
            <div className="testimonial-content">
              <h3>Rodriguez Millo</h3>
              <p>Puerto Lobos, Mexico</p>
              <blockquote>
                “The services are totally great! They offered many options for me
                to stay that suit my budget. Also, the room is well-furnished.”
              </blockquote>
            </div>
          </div>
          <div className="testimonial">
            <img src={jon} alt="Rodriguez Millo" className="testimonial-image" />
            <div className="testimonial-content">
              <h3>Rodriguez Millo</h3>
              <p>Puerto Lobos, Mexico</p>
              <blockquote>
                “The services are totally great! They offered many options for me
                to stay that suit my budget. Also, the room is well-furnished.”
              </blockquote>
            </div>
          </div>
        </div>
      </div>
      <div className="features-container right-half-property-details">
        <h2>Key Features and Amenities</h2>
        <ul>
          <li>⚡ Expansive oceanfront terrace for outdoor entertaining</li>
          <li>⚡ Gourmet kitchen with top-of-the-line appliances</li>
          <li>⚡ Private beach access for morning strolls and sunset views</li>
          <li>⚡ Master suite with a spa-inspired bathroom and ocean-facing balcony</li>
          <li>⚡ Private garage and ample storage space</li>
        </ul>
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default PropertyDetails;

