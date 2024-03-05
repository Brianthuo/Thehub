import React,{ useMemo} from 'react'
import './ViewProductPage.scss'
import { useParams} from 'react-router-dom'
import { FaRegHeart } from "react-icons/fa";
import {Data} from '../../Data'
import { FiPlus } from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import Navigationbar from '../../Components/Navigationbar/Navigationbar'

const ViewProductPage = ({AddtoCart}) => {
    const {id}= useParams()
    console.log(id)
    const product = Data.find(item =>item.id.toString() === id);
    console.log(product)

    const shuffledData = useMemo(() => {
      function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
      }
      return shuffle(Data);
    }, []);

      if (!product) {
        return <div>Product not found</div>;
      }
  return (
    <div className='ViewProductPage'>
       <Navigationbar/>
        <div className="ProductsContents">

            <div className="image">
                <img src={product && product.ProductImage} alt="" />
            </div>
            <div className="ProductInfo">
                <h1>Product Name: { product && product.ProductName} </h1>
                <h2>Model: {product && product.model}</h2>
                <p>Description:{product && product.ProductDescription}</p>
                <div className="ButtonContainer">
                    <button className='AddtoCart' >Buy now</button>
                    <button  onClick={() => AddtoCart(product.id)} >Add to cart</button>
                </div>
            </div>
        </div>

            <div className="Products">
      <h1> Related Products with <span>Offers</span> </h1>
      <div className="Products-bar">
        {
          shuffledData && shuffledData.map((Data)=>{
            if(Data.offer===true){
              const formattedPrice = Data.ProductPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
              // Calculate discounted price (e.g., 10% off)
              const discountedPrice =Math.round( Data.ProductPrice * 0.8); // 20% off
              const formattedDiscountedPrice = discountedPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
              return(
                <div className='Products-container' key={Data.id}>
                   <FaRegHeart className='icon' />
                  <img src={Data.ProductImage} alt="" />
                  <div className="ProductInfoTab">
                    <div className="Productinfo">
                      <h2>{Data.ProductName}</h2>
                      <p>{Data.model}</p>
                    </div>
                    <div className="ProductPrice">
                      <h2 className='Discount'>KES {formattedPrice}/=</h2>
                      <h2>KES {formattedDiscountedPrice}/=</h2>
                    </div>
                  </div>
                  <div className="ButtonContainer">
                  <button className='AddtoCart'  ><FiPlus /> Add to cart</button>
                  <button>View more <IoIosArrowForward /></button>
                  </div>
                </div>
              )
            }
            return null; // Ensure a value is always returned
          })
        }
      </div>

    </div>

    
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

export default ViewProductPage