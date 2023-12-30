import React from 'react'
import './Footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>Vikram</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#About">About</a></li>
        <li><a href="#Tech">Tech</a></li>
        {/* <li><a href="#services">Services</a></li> */}
        <li><a href="#Portfolio">Portfolio</a></li>
        {/* <li><a href="#testimonials">Testimonials</a></li> */}
        <li><a href="#Contact">Contact</a></li>
      </ul>

      <div className='footer_socials'>
        <a href="https://facebook.com"><FaFacebookF/></a>
        <a href="https://instagram.com"><FiInstagram/></a>
        <a href="https://twitter.com"><IoLogoTwitter/></a>
      </div>

      <div className="footer_copyright"style={{position:"relative",bottom:"2rem"}}>
        <h3 >&copy;Vikram Singh.All right reserved.</h3>
      </div>
    </footer>
  )
}

export default Footer
