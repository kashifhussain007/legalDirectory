import React from 'react'
import Logo from '../../assets/index Images/logo.png';
import wifi from '../../assets/index Images/social_icon/Wifi.png';
import At from '../../assets/index Images/social_icon/At.png';
import linkden from '../../assets/index Images/social_icon/Linkedin.png';
import youtube from '../../assets/index Images/social_icon/Youtube.png';
import twitter from '../../assets/index Images/social_icon/Twitter.png';
import facebook from '../../assets/index Images/social_icon/Facebook.png';


const Footer = () => {
  return (
    <div className='footer_box'>
        <div className='footer_content'>
            <div className='text-center'>
              <img src={Logo} alt="Logo" />
              <ul >
                  <li>Features</li>
                  <li>About</li>
                  <li>Testimonials</li>
                  <li>Contact</li>
                  <li>Download</li>
              </ul>
              <ul>
                  <li><img src={wifi} alt="wifi" /></li>
                  <li><img src={twitter} alt="twitter" /></li>

                  <li><img src={youtube} alt="youtube" /></li>

                  <li><img src={linkden} alt="linkden" /></li>

                  <li><img src={At} alt="At" /></li>

                  <li><img src={facebook} alt="facebook" /></li>
              </ul>
              <p className='copyWrite_msg'>© Copyright 2023 Brownie Link Services</p>
              
            </div>
        </div>
       
    </div>
  )
}

export default Footer;