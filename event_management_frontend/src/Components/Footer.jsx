import React from 'react'
import './Footer.css'
import { assets } from '../Assets/assets'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutubeSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt=""/>
            <p>EventHub, Sri Lanka's premier and most trusted online ticket partner, serves as the official marketplace providing a secure and safe platform for purchasing tickets to all entertainment events in Sri Lanka.</p>
            <div className="footer-social-icons">
                <FaFacebookSquare style={{fontSize:"30px",marginRight:"8px",borderRadius:"100%"}} />
                <FaInstagramSquare style={{fontSize:"30px",marginRight:"8px",borderRadius:"100%"}}/>
                <FaSquareXTwitter style={{fontSize:"30px",marginRight:"8px",borderRadius:"100%"}} />
                <FaLinkedin style={{fontSize:"30px",marginRight:"8px",borderRadius:"100%"}} />
                <FaYoutubeSquare style={{fontSize:"30px",marginRight:"8px",borderRadius:"100%"}} />
                <FaWhatsappSquare style={{fontSize:"30px",marginRight:"8px",borderRadius:"100%"}} />
            </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>FAQ</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>071-896-5028</li>
            <li>eventhub123@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 @ EventHub.com - All Right Reserved.</p>
    
      
    </div>
  )
}

export default Footer