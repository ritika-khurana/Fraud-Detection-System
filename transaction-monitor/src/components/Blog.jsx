import React from 'react';
import blog1 from '../images/blog1.webp'
import Profilepic from './Profilepic';
import pic from '../images/logo.jpeg'
import blog2 from '../images/blog2.jpg'
import blog3 from '../images/blog3.jpg'
import blog4 from '../images/blog4.jpg'
import {AiOutlineLike} from 'react-icons/ai'
import Nav from './Nav';
import { BiBookmark } from 'react-icons/bi';
const Blog = () => {
  return (
    <div className='full-container'>

    <Nav/>
    <div className="blog-container">
      <h1 className="blog-title">"Unlocking the power of Ayurveda: Natural remedies to support women's health during menstruation."</h1>
      <div className='line'></div>
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
          src={blog1} alt="Blog Post "   className="blog-image" />
      </div>
      <div className="blog-paragraph">
     <h1>"Menstruation is nature's reminder that a woman's body is a <br></br>sacred vessel of life and creation"</h1> 
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quidem quis <br></br> quisquam quae, aut expedita laudantium voluptatum, consequatur laborum et modi deserunt pariatur enim alias ut ad eos amet accusantium?</p>
      
        <div className='icons'>
      <div className='like'><AiOutlineLike/></div>
      <div className='bookmark'><BiBookmark/></div>
      </div>
      </div>
      </div>

      <div className='box'>
      <div className="image-container">
        <img
          src={blog2} alt="Blog Post "   className="blog-image" />
      </div>
      <p className="blog-paragraph">
      Menstruation is nature's reminder that a woman's body is a sacred vessel of life and creation
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quidem quis quisquam quae, aut expedita laudantium voluptatum, consequatur laborum et modi deserunt pariatur enim alias ut ad eos amet accusantium?
      </p>
      <div className='icons'>
      <div className='like'><AiOutlineLike/></div>
      <div className='bookmark'><BiBookmark/></div>
      </div>
      </div>

      <div className='box'>
      <div className="image-container">
        <img
          src={blog3} alt="Blog Post "   className="blog-image" />
      </div>
      <p className="blog-paragraph">
      Menstruation is nature's reminder that a woman's body is a sacred vessel of life and creation
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quidem quis quisquam quae, aut expedita laudantium voluptatum, consequatur laborum et modi deserunt pariatur enim alias ut ad eos amet accusantium?
      </p>

      <div className='icons'>
      <div className='like'><AiOutlineLike/></div>
      <div className='bookmark'><BiBookmark/></div>
      </div>
      </div>
      <div className='box'>
      <div className="image-container">
        <img
          src={blog4} alt="Blog Post "   className="blog-image" />
      </div>
      <p className="blog-paragraph">
      Menstruation is nature's reminder that a woman's body is a sacred vessel of life and creation
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
    
    
  );
};

export default Blog;