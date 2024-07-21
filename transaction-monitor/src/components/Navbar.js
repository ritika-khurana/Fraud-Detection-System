import React , {useState} from 'react'
import logo from '../images/logo1.png'
import { Link } from "react-router-dom";
function Navbar() {
    const [nav , setnav] = useState(false)

    const changeBackground = () =>{
        if(window.scrollY >= 50){
            setnav(true);
        }
        else{
            setnav(false)
        }
    }
    window.addEventListener('scroll',changeBackground);
  return (
     <nav className={nav ? "nav active" : "nav"}>
        <Link to = '#' className='logo'>
            <img src={logo} alt="" />
            <p>BharatVedh</p>
        </Link>
        
        <input className='menu-btn' type='checkbox' id='menu-box'/>
        <label className='menu-icon' for = 'menu-btn'>
            <span className='nav-icon'></span>
        </label>
        <ul className='menu'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/'>Transaction monitor</Link></li>
            <li><Link to='/blog'>Blog</Link></li>
            <li><Link to='#'>Finanical Advisors</Link></li>
            
            
          </ul>
          <div className='right'>
        <a href="login">Log in</a>
        <button>Sign up</button>
</div>
     </nav>
  )
}

export default Navbar