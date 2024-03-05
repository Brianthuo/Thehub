import './App.css';
import Homepage from '../src/Pages/Homepage/Homepage'
import { Route, Routes } from 'react-router-dom';
import Products from './Pages/Productspage/Products';
import ViewProductPage from './Pages/ViewProductPage/ViewProductPage';
import AddToCartPage from './Pages/AddToCartPage/AddToCartPage';
import FavouritesPage from './Pages/FavoritesPage/FavouritesPage';
import CheckoutPage from './Pages/CheckoutPage/CheckoutPage';
import OffersPage from './Pages/OffersPage/OffersPage';
import { Data } from './Data';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [FavItems, setFavItems] = useState([]);
  //getting data from local storage
  const storedData = JSON.parse(localStorage.getItem('cart'));
  const storedFav = JSON.parse(localStorage.getItem('Favourites'));


  useEffect(() => {
    // Retrieve cart data from local storage when the component mounts
    if (Array.isArray(storedData)) {
      setCartItems(storedData);
    }
  }, [cartItems]);


  
  //Storing data in local storage
  const addToCart = (item) => {
    // Check if the item is already in the cart
    const isItemAlreadyAdded = cartItems.some(cartItem => cartItem.id === item.id);
  
    if (!isItemAlreadyAdded) {
      // Update the cartItems state by adding the new item
      setCartItems([...cartItems, item]);
      // Store the updated cart in local storage
      localStorage.setItem('cart', JSON.stringify([...cartItems, item]));
  
      // Provide feedback to the user
      
      toast.success('Added to Cart', {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    } else {
      // Provide feedback if the product is already in the cart
       // Optional: Handle the case where the product is not found
       toast.error("Product was added", {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        
        });
    }
  };
  const addToFavourite = (item ) => {
    // Check if the item is already in the cart
    const isItemAlreadyAdded = FavItems.some(FavItems => FavItems.id === item.id);
  
    if (!isItemAlreadyAdded) {
      // Update the cartItems state by adding the new item
      setFavItems([...FavItems, item]);
      // Store the updated cart in local storage
      localStorage.setItem('Favourites', JSON.stringify([...FavItems, item]));
  
      // Provide feedback to the user
      
      toast.success('Added to Favourites', {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    } else {
      // Provide feedback if the product is already in the cart
       // Optional: Handle the case where the product is not found
       toast.error("Product was added", {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        
        });
    }
  };

    
  
    const handleAddToCart = (productId) => {
      // Find the product by its ID
      const productToAdd = Data.find(item => item.id === productId);
      
      if (productToAdd) {
        // Add the item to the cart
        addToCart(productToAdd);
      } else {
        // Optional: Handle the case where the product is not found
        toast.error("Product not found!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          
          });
      }
    };


    const handleAddToFav = (productId) => {
     
      // Find the product by its ID
      const productToAdd = Data.find(item => item.id === productId);
      
      if (productToAdd) {
        // Add the item to the cart
        addToFavourite(productToAdd);
      } else {
        // Optional: Handle the case where the product is not found
        toast.error("Product not found!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          
          });
      }
    };


    const removeProductFromLocalStorage = (productId) => {
      // Retrieve the cart data from local storage
      const cartData = JSON.parse(localStorage.getItem('cart'));
    
      // Check if cartData exists and is an array
      if (Array.isArray(cartData)) {
        // Filter out the product with the given ID
        const updatedCartData = cartData.filter(item => item.id !== productId);
    
        // Update the local storage with the filtered data
        localStorage.setItem('cart', JSON.stringify(updatedCartData));
      }
    };

  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Homepage AddtoCart={handleAddToCart}   handleAddToFav={handleAddToFav} Favourites={storedFav} />}/>
      <Route path='/Shop' element={<Products Data={Data} AddtoCart={handleAddToCart}   handleAddToFav={handleAddToFav} Favourites={storedFav}  />}/>
      <Route path='/ViewProduct/:id' element={<ViewProductPage Data={Data} AddtoCart={handleAddToCart} />}/>
      <Route path='/Cart' element={<AddToCartPage Data={storedData} RemoveFromCart={removeProductFromLocalStorage} Favourites={storedFav} />}/>
      <Route path='/Favorites' element={<FavouritesPage  Data={storedFav} />}/>
      <Route path='/CheckoutPage' element={<CheckoutPage/>}/>
      <Route path='/Offers' element={<OffersPage/>}/>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
