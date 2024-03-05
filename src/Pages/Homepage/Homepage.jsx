import React,{useState, useEffect ,useMemo} from 'react'
import './Homepage.scss'
import {Data} from '../../Data'
import { Categories } from '../../Categories';
import { FaRegHeart } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import background from '../../images/Background.png'
import { FiPlus } from "react-icons/fi";
import { brands } from '../../brands';
import { FaArrowRight } from "react-icons/fa";

import { useLocation, Link }from 'react-router-dom'
import Navigationbar from '../../Components/Navigationbar/Navigationbar';
import Footer from '../../Components/Footer/Footer';

  


const Homepage = ({AddtoCart, handleAddToFav, Favourites}) => {
  //UseState
  const [brand, setBrands] = useState([]);
  const [Category, setCategory]= useState('')
  const [displayedBrands, setDisplayedBrands] = useState([]);
  const location = useLocation();

  //UseEffects
  // Shuffle brands and display only 6 by default
  useEffect(() => {
    const shuffledBrands = [...brands].sort(() => Math.random() - 0.5);
    setBrands(shuffledBrands);
    setDisplayedBrands(shuffledBrands.slice(0, 8));
  }, []);

  const handleChange = (event) => {
    const selectedCategory = event.target.value;
    setCategory(selectedCategory);

    // Filter brands based on the selected category
    const filteredBrands = brands.filter(brand => brand.Category.includes(selectedCategory));
    setDisplayedBrands(filteredBrands);
  };


  //Functions
  //Shuffle products in offer

  const shuffledData = useMemo(() => {
    function shuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }
    return shuffle(Data);
  }, [Data]);

 

    // Define state to manage the visibility of answers
    const [expanded, setExpanded] = useState({});

    // Toggle the visibility of an answer
    const toggleAnswer = (index) => {
      setExpanded({ ...expanded, [index]: !expanded[index] });
    };
 

  
  

  return (
    <div  className='Homepage'>
      <Navigationbar/>
    {/* hero section */}

    <div className="Hero">
      <div className="Hero-Content">
          <h1>Find your next <span>Gadget</span></h1>
          <h3>Find Your Perfect Digital Companion with Ease.Shop Now and Enter the Future</h3>
          <Link to={'/Shop'} className='link'>
          <button>Visit Shop <IoIosArrowForward /></button>
          </Link>
          
      </div>
      <div className="Images">
        <img src={background} alt="" />
      </div>
    </div>

       {/* Categories */}
    <div className="Categories">
      <h1>Our Top <span>Categories</span> </h1>
      <div className="Category-bar">
        {
          Categories.map((Categories)=>{
            return(
              <div className='Category-container' key={Categories.id}>
                <img src={Categories.CategoryImage} alt="" />
                <h2>{Categories.CategoryName}</h2>
                <div className="ButtonContainer">
                <button>View more <IoIosArrowForward /></button>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>

         {/* Products */}
         
    <div className="Products">
      <h1>Today's best <span>Offers</span> </h1>
      <div className="Products-bar">
        {
          shuffledData.map((Data)=>{
            if(Data.offer===true){
              const formattedPrice = Data.ProductPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

              const discountedPrice =Math.round( Data.ProductPrice * 0.8); // 20% off
              const formattedDiscountedPrice = discountedPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
              return(
                <div className='Products-container' key={Data.id}>
                   <FaRegHeart className='icon' />
                   <Link to={`/ViewProduct/${Data.id}`} className='IMAGElink'>
                  <img src={Data.ProductImage} alt="" />
                   </Link>
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
                  <button className='AddtoCart' onClick={() => AddtoCart(Data.id)} ><FiPlus /> Add to cart</button>
                  <Link to={`/ViewProduct/${Data.id}`} className='link'>
                  <button>View more <IoIosArrowForward /></button>
                     </Link>
                  </div>
                </div>
              )
            }
            return null; // Ensure a value is always returned
          })
        }
      </div>

    </div>

    {/* Get by brand */}

        <div className="Brand">
          <h1>Most popular <span>Brands</span></h1>
          <select value="" onChange={handleChange}>
            <option value="">All Categories</option>
        {Categories.map((Categories) => (
          <option key={Categories.id} value={Categories.CategoryName}>{Categories.CategoryName}</option>
        ))}
      </select>
          <div className="BrandContainer">
                {displayedBrands.map((brands)=>{
                    return(
                      <div className="BrandSubContainer">
                        <div className="brandimage">
                          <img src={brands.BrandImage} alt="" />
                        </div>
                        <div className="content">
                          <h2>{brands.BrandName}</h2>
                          <p>{brands.Category.join(', ')}</p> 
                        </div>
                      </div>
                    )
                  
                  return null;
                })}
          </div>
        </div>

        {/* The weeks offers  */}
        <div className="Products">
      <h1>Weeks's best <span>Offers</span> </h1>
      <div className="Products-bar">
        {
          shuffledData.map((Data)=>{
            if(Data.offer===true){
              const formattedPrice = Data.ProductPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
              // Calculate discounted price (e.g., 10% off)
              const discountedPrice =Math.round( Data.ProductPrice * 0.8); // 20% off
              const formattedDiscountedPrice = discountedPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
              return(
                <div className='Products-container' key={Data.id}>
                   <FaRegHeart className='icon' />
                   <Link to={`/ViewProduct/${Data.id}`} className='IMAGElink'>
                  <img src={Data.ProductImage} alt="" />
                   </Link>
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
                  <button className='AddtoCart' type='button' onClick={(e) =>{  e.preventDefault(); AddtoCart(Data.id)}} ><FiPlus /> Add to cart</button>
                  <Link to={`/ViewProduct/${Data.id}`} className='link'>
                  <button>View more <IoIosArrowForward /></button>
                     </Link>
                  </div>
                </div>
              )
            }
            return null; // Ensure a value is always returned
          })
        }
      </div>

    </div>

  {/* FAQs */}
  <div className="faq">
    <h1>Frequently asked Questions <span>FAQs</span></h1>
    <div className="FAQcontainer">
      <div className="QuestionContainer">
        <div className="question" onClick={() => toggleAnswer(1)}>
          <h1>Where are you located?</h1>
        </div>
        {expanded[1] && (
          <div className="answer" onClick={(e) => e.stopPropagation()}>
            <h3><span><FaArrowRight /></span> We are located in thika section 9 near pakjel supermarket we also have a branch store in Nairobi</h3>
          </div>
        )}
      </div>
      <div className="QuestionContainer">
        <div className="question" onClick={() => toggleAnswer(2)}>
          <h1>Do you do trade in?</h1>
        </div>
        {expanded[2] && (
          <div className="answer" onClick={(e) => e.stopPropagation()}>
            <h3><span><FaArrowRight /></span>Yes we do trade in as long as the gadget is in good condition and they you can top up the agreed up fee.</h3>
          </div>
        )}
      </div>
      <div className="QuestionContainer">
        <div className="question" onClick={() => toggleAnswer(3)}>
          <h1>Are asll your products New? </h1>
        </div>
        {expanded[3] && (
          <div className="answer" onClick={(e) => e.stopPropagation()}>
            <h3><span><FaArrowRight /></span>We have both new and refublished products.</h3>
          </div>
        )}
      </div>
      <div className="QuestionContainer">
        <div className="question" onClick={() => toggleAnswer(4)}>
          <h1>Can i pay via bank money transfer?</h1>
        </div>
        {expanded[4] && (
          <div className="answer" onClick={(e) => e.stopPropagation()}>
            <h3><span><FaArrowRight /></span>Yes you can. you can also pay via check</h3>
          </div>
        )}
      </div>
      <div className="QuestionContainer">
        <div className="question" onClick={() => toggleAnswer(5)}>
          <h1>Can you supply machines to an institution?</h1>
        </div>
        {expanded[5] && (
          <div className="answer" onClick={(e) => e.stopPropagation()}>
            <h3><span><FaArrowRight /></span>Yes we do. you can come to our shop and find out more about this</h3>
          </div>
        )}
      </div>

    </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Homepage