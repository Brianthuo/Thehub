import React , {useEffect, useState} from 'react'
import './Products.scss'
import { FaRegHeart } from "react-icons/fa";
import { Data } from '../../Data';
import { FiPlus } from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";
import { NavLink, useLocation, Link }from 'react-router-dom'
import { useMemo } from 'react';
import { json, useParams} from 'react-router-dom'
import Navigationbar from '../../Components/Navigationbar/Navigationbar';
import Footer from '../../Components/Footer/Footer';
import Filter from '../../Components/Filter/Filter';

const Products = ({AddtoCart, handleAddToFav, Favourites}) => {
  const [searchItem, setSearchItem] = useState('')
  const [selectedCategory, setSelectedCategory]= useState('')
  const [selectedModel, setSelectedModel]= useState('')
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState(null); // State to hold the product
 
  const {id}= useParams()
  const product = Data.find(item =>item.id.toString() === id);

  const FilteredProducts = useMemo(() => {
    if (searchItem === '' && selectedCategory === '' && minPrice === '' && maxPrice === '') {
      // If no filters are applied, return all products
      return Data;
    } else {
      // Otherwise, apply the filters
      return Data.filter(Data => {
        const productNameMatch = Data.ProductName.toLowerCase().includes(searchItem.toLowerCase());
        const categoryMatch = selectedCategory === '' || Data.ProductCategory === selectedCategory;
        const priceMatch = (minPrice === '' || Data.ProductPrice >= minPrice) && (maxPrice === '' || Data.ProductPrice <= maxPrice);
        return productNameMatch && categoryMatch && priceMatch;
      });
    }
  }, [Data, searchItem, selectedCategory, minPrice, maxPrice]);

 console.log(Favourites)
  if (Favourites && Favourites.length > 0) {
   const Fav = Favourites.find(item => item.id.toString() === Data.id);
   console.log(Fav)
   
    
}


 const SearchTermChange = (e)=>{
  setSearchItem(e.target.value)
 }
 const ChangeCategory = (e)=>{
   setSelectedCategory(e.target.value)
 }
 const ChangeModel = (e)=>{
   setSelectedModel(e.target.value)
 }
 
 const handleMinPriceChange = (e) => {
  setMinPrice(e.target.value);
};

const handleMaxPriceChange = (e) => {
  setMaxPrice(e.target.value);
};



  return (
    <div className='ProductsPage'>
      <Navigationbar/>

       {/* ProductsContainer */}
       <div className="ProductsContainer">
        <div className="ProductsSubContainer">
            <div className="FilterContainer">
              <Filter 
              categoryChange={ChangeCategory}
              ModelChange={ChangeModel}
              minimumPrice={handleMinPriceChange}
              MaximumPrice={handleMaxPriceChange}
              searchItem={searchItem}
              ValueMaxprice={maxPrice}
              ValueMinprice={minPrice}
              SearchTerm={SearchTermChange}

               />
            </div>

            <div className="ProductsList">
                <h1>Shop</h1>
                <div className="ProductsCatalog">
                    
                      {FilteredProducts && FilteredProducts.map((Data)=>{
                
                const formattedPrice = Data.ProductPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                // Calculate discounted price (e.g., 10% off)
                const discountedPrice =Math.round( Data.ProductPrice * 0.8); // 20% off
                const formattedDiscountedPrice = discountedPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                return(
                    <div className='Products-container' key={Data.id}>
                    {/* <FaRegHeart className={Fav ? 'added' : 'icon'} onClick={() => handleAddToFav(Data.id)} /> */}
                    <FaRegHeart className='icon' onClick={() => handleAddToFav(Data.id)} />
                    <Link to={`/ViewProduct/${Data.id}`} className='IMAGElink'> 
                    <img src={Data.ProductImage} alt="" />  
                    </Link>

                    <div className="ProductInfoTab">
                        <div className="Productinfo">
                        <h2>{Data.ProductName}</h2>
                        <p>{Data.model}</p>
                        </div>
                        <div className="ProductPrice">
                        {Data.offer ? ( // If product has an offer
                            <>
                                <h2 className='Discount'>KES {formattedPrice}/=</h2>
                                <h2>KES {formattedDiscountedPrice}/=</h2>
                            </>
                        ) : ( // If no offer
                            <h2 className=''>KES {formattedPrice}/=</h2>
                        )}

                        
                        </div>
                    </div>
                    <div className="ButtonContainer">
                    <button className='AddtoCart' onClick={() => AddtoCart(Data.id)} ><FiPlus className='ButtonIcon' /> Add to cart</button>
                    <Link to={`/ViewProduct/${Data.id}`} className='link'> 
                        <button >View more <IoIosArrowForward className='ButtonIcon' /></button> 
                     </Link>
                    </div>
                    </div>
                )
                
                return null; // Ensure a value is always returned
            })
            }

                </div>
            </div>
        </div>
       </div>
      <Footer/>
    </div>

  )
}

export default Products