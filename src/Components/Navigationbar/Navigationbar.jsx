import React from 'react'
import './Navigationbar.scss'
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import {  useLocation, Link }from 'react-router-dom'
import { RiMenu3Fill } from "react-icons/ri"; 

const Navigationbar = () => {

    const location = useLocation();
    const cart = JSON.parse(localStorage.getItem('cart'));
    const fav = JSON.parse(localStorage.getItem('Favourites'));
    const itemCount = cart.length;
    const favCount= fav.length;
  return (
    <div className="Nav">
     <div className="Logo">
          <h1>Ecom</h1>
    </div>

    <div className="Ul">
        <ul>
        <Link  to= '/'className={location.pathname === "/" ? "selected" : "Link"}   >
          <li>Home</li>      
            </Link>
        <Link  to= '/Shop'className={location.pathname === "/Shop" ? "selected" : "Link"}   >
          <li>Shop</li>      
          </Link>
        <Link  to= '/Offers'className={location.pathname === "/Offers" ? "selected" : "Link"}   >
        <li>Offers</li>    
          </Link>
         
          
          <li className='CategoriesNav'>Categories
            <ul className='subNav'>
              <li>Computers
              <ul className="minorNav">
            <li>Laptops</li>
            <li>Desktops</li>
          </ul>
              </li>
              <li>Gaming</li>
              <li>Phone</li>
              <li>T.Vs</li>
              <li>Audio & Speakers</li>
              <li>Assesories</li>
            </ul>
          </li>
          <li>Our services</li>
        </ul>
    </div>

    <div className="Nav-icons">
      <div className="Search">
        <input type="text" placeholder='Search...' />
      </div>
      <div className="iconContainer">
      <Link  to= '/Cart'className={location.pathname === "/Cart" ? "selected" : "Link"}   >
          <FiShoppingCart className='icon' />
              </Link>
       <div className="notification">
        <p>{itemCount}</p>
       </div>
      </div>
      <div className="iconContainer">
      <Link  to= '/Favorites'className={location.pathname === "/Favorites" ? "selected" : "Link"}   >
          <FaRegHeart className='icon' />     
          </Link>
       <div className="notification">
        <p>{favCount}</p>
       </div>
      </div>
        
    </div>

    <div className="Menu">
    <RiMenu3Fill className='MenuIcon' />
    </div>

       </div>
  )
}

export default Navigationbar