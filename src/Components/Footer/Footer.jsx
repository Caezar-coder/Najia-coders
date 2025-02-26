import React from 'react'
import { RiTwitterXFill } from "react-icons/ri";
import { BsThreads } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { BsSend } from "react-icons/bs";
import './footer.css'
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate()
  return (
    <div className='footerWrapper'>
      <div className="footerTextWRapper">
        <img src="public/logo.png" className='footerLogo'/>
        <h2>Social Media Links</h2>
        <RiTwitterXFill className='footerIcon'/>
        <BsThreads className='footerIcon'/>
        <FaInstagram className='footerIcon'/>
      </div>

      <div className="footerTextWRapper" style={{display: 'flex', flexDirection: 'column', gap: 10, marginLeft: 50}}>
        <span>Links</span>
        <p onClick={() => window.open('https://educationusa.state.gov/', '_blank')}>Scholarship Opportunities</p>
        <p>Paper</p>
        <p onClick={() => window.open('https://www.instagram.com/naijacoder?igsh=MWQwc25obHcwZTNpcA%3D%3D', '_blank')}>Student Highlights</p>
      </div>


      <div className="footerTextWRapper" style={{display: 'flex', flexDirection: 'column', gap: 10}}>
        <h1>News & Updates</h1>
        <span style={{fontSize: 16}}>Subscribe to our newsletter</span> 
        <div className="mailInputWrapper">
        <input type="text" placeholder='Enter your email'/><BsSend className='mailIcon'/>
        </div>
      </div>

      <div className="bottomtextWrapper"><p>2024 All rights reserved. NaijaCoder, Inc. is a registered tax-exempt 501(c)(3). EIN: 88-3205839</p></div>
    </div>
  )
}

export default Footer
