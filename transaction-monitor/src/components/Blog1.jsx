import React from 'react';
import blog11 from '../images/blog11.jpg'
import Profilepic from './Profilepic';
import pic from '../images/logo.jpeg'
import blog12 from '../images/blog12.jpg'
import blog13 from '../images/blog13.jpg'
import blog14 from '../images/blog14.jpg'
import {AiOutlineLike} from 'react-icons/ai'

import { BiBookmark } from 'react-icons/bi';
import Nav from './Nav';
const Blog2 = () => {
  return (
    <div className='full-container'>
    <Nav/>
    <div className="blog-container">
      <h1 className="blog-title">"Nurture your little one naturally with Ayurvedic wisdom for infant care."</h1>
      <div className="profile-pic-2">
      <img src={pic} alt="Your Profile " />
        <div className="blog-2">
          <h1>BharatVedh . <span>Follow</span></h1>
          <p>5 mins read  jan 2</p>
        </div>
        </div>
       <div className='box'>
      <div className="image-container">
        <img
          src={blog11} alt="Blog Post "   className="blog-image" />
      </div>
      <div className="blog-paragraph">
     <h1>"Infant care isn't just about tending to their needs; it's about nurturing their future."</h1> 
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quidem quis quisquam quae, aut expedita laudantium voluptatum, consequatur laborum et modi deserunt pariatur enim alias ut ad eos amet accusantium?</p>
      </div>
      <div className='icons'>
      <div className='like'><AiOutlineLike/></div>
      <div className='bookmark'><BiBookmark/></div>
      </div>

      <div className='box'>
      <div className="image-container">
        <img
          src={blog12} alt="Blog Post "   className="blog-image" />
      </div>
      <p className="blog-paragraph">
      Infant care isn't just about tending to their needs; it's about nurturing their future.
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quidem quis quisquam quae, aut expedita laudantium voluptatum, consequatur laborum et modi deserunt pariatur enim alias ut ad eos amet accusantium?
      </p>
      <div className='icons'>
      <div className='like'><AiOutlineLike/></div>
      <div className='bookmark'><BiBookmark/></div>
      </div>
</div>
     
      <div className="image-container">
        <img
          src={blog13} alt="Blog Post "   className="blog-image" />
      </div>
      <p className="blog-paragraph">
      Infant care isn't just about tending to their needs; it's about nurturing their future.
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quidem quis quisquam quae, aut expedita laudantium voluptatum, consequatur laborum et modi deserunt pariatur enim alias ut ad eos amet accusantium?
      </p>
      <div className='icons'>
      <div className='like'><AiOutlineLike/></div>
      <div className='bookmark'><BiBookmark/></div>
      </div>
      

      <div className='box'>
      <div className="image-container">
        <img
          src={blog14} alt="Blog Post "   className="blog-image" />
      </div>
      <p className="blog-paragraph">
      Infant care isn't just about tending to their needs; it's about nurturing their future.
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quidem quis quisquam quae, aut expedita laudantium voluptatum, consequatur laborum et modi deserunt pariatur enim alias ut ad eos amet accusantium?
      </p>
      <div className='icons'>
      <div className='like'><AiOutlineLike/></div>
      <div className='bookmark'><BiBookmark/></div>
      </div>
      </div>
      </div>
      <Profilepic/>
     </div>
      </div>
    
    
  );
};

export default Blog2;