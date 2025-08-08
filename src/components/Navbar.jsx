import logo from '../assets/images/logo.svg';
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from 'react';


function Navbar() {

  const [menu, setMenu] = useState(false)






  return (
    <nav className='navbar container'>
      <img src={logo} alt="" />      
      <ul className={`navbar__menu ${menu ? 'menuOpen' : ''}`}>
        <li><a href="http://">Features</a></li>
        <li><a href="http://">Pricing</a></li>
        <li><a href="http://">Resources</a></li>
        <li className='navbar__menu--login'>
          <a href="http://">Login</a>
          <a className='btn' href="http://">Sign Up</a>
        </li>
      </ul>
      <div className="navbar__hamb hidden" onClick={() => setMenu(!menu)}>
        <AiOutlineMenu />
      </div>

    </nav>
  )
}
export default Navbar
