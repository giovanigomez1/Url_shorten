import logo from '../assets/images/logo.svg'


function Navbar() {
  return (
    <nav className='navbar container'>
      <img src={logo} alt="" />      
      <ul className="navbar__menu">
        <li><a href="http://">Features</a></li>
        <li><a href="http://">Pricing</a></li>
        <li><a href="http://">Resources</a></li>
        <li className='navbar__menu--login'>
          <a href="http://">Login</a>
          <a className='btn' href="http://">Sign Up</a>
        </li>
      </ul>
    </nav>
  )
}
export default Navbar
