import React from 'react'
import logoFooter from '../assets/images/logo.svg'
import fb from '../assets/images/icon-facebook.svg'
import tw from '../assets/images/icon-twitter.svg'
import pi from '../assets/images/icon-pinterest.svg'
import ins from '../assets/images/icon-instagram.svg'


function Footer() {
  return (
    <div className='footer'>
      <div className="footer__logo">
        <img src={logoFooter} alt="" />
      </div>
      <div className="footer__opts">
        <div className="footer__opts--opt">
          <h4>Features</h4>
          <a href="#">Link Shortening</a>
          <a href="#">Branded Links</a>
          <a href="#">Analytics</a>
        </div>
        <div className="footer__opts--opt">
          <h4>Resources</h4>
          <a href="#">Blog</a>
          <a href="#">Developers</a>
          <a href="#">Support</a>
        </div>
        <div className="footer__opts--opt">
          <h4>Company</h4>
          <a href="#">About</a>
          <a href="#">Our Team</a>
          <a href="#">Careers</a>
          <a href="#">Contact</a>
        </div>
      </div>
      <div className="footer__social">
        <a href="#"><img src={fb} alt="" /></a>
        <a href="#"><img src={tw} alt="" /></a>
        <a href="#"><img src={pi} alt="" /></a>
        <a href="#"><img src={ins} alt="" /></a>
      </div>
    </div>
  )
}

export default Footer
