import React from 'react'
import './Footer.scss'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";


const Footer = () => {
  return (
    <div>
         <div className="Footer">
      <div className="FooterContainer">
        <div className="logo">
          <h1>Ecom</h1>
          <div className="social-media">
          <IoLogoWhatsapp className='sIcon' />
          <FaFacebookSquare className='sIcon' />
          <FaInstagram className='sIcon'/>
          <FaTiktok  className='sIcon'/>
          </div>
        </div>
        <div className="Sub-menu">
        <h2>Menu</h2>
        <ul>
          <li>Home</li>
          <li>Shop</li>
          <li>Offers</li>
          <li>Categories</li>
          <li>Our services</li>
        </ul>
        </div>
        <div className="ContactInfo">
          <h2>Our Location</h2>
          <p>Thika Town, Section 9.
          <br />
          Wacera heights building.
            Shop no. 3    
            <br />
          whatsapp: 0722121335
          Info@digisofthub.co.ke</p>
        </div>
        <div className="EmailList">
          <label htmlFor="">Join our EmailList</label>
          <input type="text" placeholder='Enter your Email' />
          <button>Submit</button>
        </div>
      </div>

    </div>
    <div className="subFooter">
      <p>&copy; 2024 Ecomwebsite. All rights reserved.</p>
    </div>
    </div>
  )
}

export default Footer