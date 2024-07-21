import React from 'react'
import pic from '../images/logo.jpeg'
import { Link } from "react-router-dom";
import blog5 from '../images/blog5.jpg'
import blog6 from '../images/blog6.jpg'
const Card = () => {
  return (
    <div className='cards'>
      <h1>More from Transaction Monitor</h1>
      <div className='card'>
      <Link to = '/blog1'>
      <div className='card-1'>
      <img  src={blog6} alt="blog" />
      <div className="profile-pic-1">
      <img src={pic} alt="Your Profile " />
        <div className="blog-1">
          <h1>Fraud </h1>

        </div>
        </div>
            <h2>Card Heading</h2>
            <p>This is a simple card with an image, heading, and paragraph.</p>
            <p>7 mins read . sep 4</p>
</div>
</Link>
   <Link to='/blog2'> <div className='card-2'>
    
      <img  src={blog5} alt="blog" />
     
      <div className="profile-pic-1">
      <img src={pic} alt="Your Profile " />
        <div className="blog-2">
          <h1>BharatVedh</h1>

        </div>
        </div>
            <h2>Card Heading</h2>
            <p>This is a simple card with an image, heading, and paragraph.</p>
            <p>7 mins read . sep 4</p>
</div>
 </Link>
</div>
</div>
  )
}

export default Card 