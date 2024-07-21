import React from 'react'
import Navbar from './Navbar';
const Header = () => {
  return (
    <div id = 'main'>
      <Navbar/>
      <div className='name'>
        <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, sequi? <span>Lorem.</span> ipsum. </h1>
       <p className='details'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure molestiae ea dicta aperiam porro non exercitationem incidunt in fuga omnis.</p>
      { <a href="#" className='cv-btn'>Book Trial</a> }
      </div>
    </div>
  )
}

export default Header;
