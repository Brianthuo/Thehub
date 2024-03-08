import React, { useState } from 'react'
import './Navigationbar.scss'
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import {  useLocation, Link }from 'react-router-dom'
import { RiMenu3Fill } from "react-icons/ri"; 
import { IoClose } from "react-icons/io5";

const Navigationbar = () => { 
    const [Open, setOpen] = useState(false)
    console.log(Open)
    const location = useLocation();
    const cart = JSON.parse(localStorage.getItem('cart'));
    const fav = JSON.parse(localStorage.getItem('Favourites'));
    const itemCount = cart ? (cart.length > 0 ? cart.length : 0) : null;
    const favCount = fav ? (fav.length > 0 ? fav.length : 0) : null;

    const toogleOpen = ()=>{
      setOpen(prevState => !prevState)
    }
    
    
  return (
    <div className= 'Nav'>
     <div className="Logo">
          <h1>Ecom</h1>
    </div>
    <div className={Open ? 'Ulopen' : 'Ul'}>
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
      
              <Link  to= '/Cart'className={location.pathname === "/Cart" ? "selected" : "Link"}   >
            <li className={Open ? 'OpenCartAndFav' : 'CartAndFav'} >Cart {itemCount}</li>    
              </Link>
              <Link  to= '/Favorites'className={location.pathname === "//Cart" ? "selected" : "Link"}   >
            <li className={Open ? 'OpenCartAndFav' : 'CartAndFav'}>Favorites {favCount}</li>    
              </Link>
          
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
      {Open ? <IoClose className='MenuIcon' onClick={toogleOpen} />:  <RiMenu3Fill className='MenuIcon' onClick={toogleOpen} />   }
     
    </div>

       </div>
  )
}

export default Navigationbar