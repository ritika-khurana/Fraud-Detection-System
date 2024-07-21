import React from 'react'
import {AiOutlineMail} from 'react-icons/ai'
import pic from '../images/logo.jpeg'
import Card from './Card'
const Profilepic = () => {
  return (
    <div className="profile-background">
    <div className="profile-container">
      <div className="profile-pic">
      <img src={pic} alt="Your Profile " />
        <div className="blog">
          <h1>BharatVedh</h1>

        </div>
        <p className='blog-paragraph '>-Fraud Detection-</p>
      </div>
      <div className="profile-info">
        
        <div className="buttons">
        <button className="follow-button">Follow</button>
          <button className="mail-button"><AiOutlineMail/></button>
        </div>
        <div className='next'>
        <Card/>

        </div>
     
      </div>
    
    </div>
    
        
    
    </div>
    
  
  )
}

export default Profilepic
