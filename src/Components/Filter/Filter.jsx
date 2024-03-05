import React from 'react'
import './Filter.scss'
import { brands } from '../../brands';
import { Categories } from '../../Categories';
  
const Filter = ({categoryChange,  ModelChange, minimumPrice, MaximumPrice, searchItem,ValueMaxprice, ValueMinprice, SearchTerm}) => {

  return (
    <div className="FiltersContainer">
     <div className="filterCategories">
        <h1>Filter</h1>
                    <input
                        type="search"
                        className='search'
                        placeholder='Search...'
                        value={searchItem}
                        onChange={SearchTerm}

                    />
            <select value=""  onChange={categoryChange} >
                <option value="">All Categories</option>
            {Categories.map((Categories) => (
            <option key={Categories.id} value={Categories.CategoryName}>{Categories.CategoryName}</option>
            ))}

        </select>
            <select value="" onChange={ModelChange}>
                <option value="">All Models</option>
            {brands.map((brands) => (
            <option key={brands.id} value={brands.BrandName}>{brands.BrandName}</option>
            ))}
        </select>

    </div>   
    <div className="Pricing">
        <label htmlFor="">Min Price</label>
        <input 
         type="number" 
         id="minPrice" 
         value={ValueMinprice} 
         onChange={minimumPrice}/>
        <label htmlFor="">Max Price</label>
        <input
        type="number" 
        id="maxPrice" 
        value={ValueMaxprice} 
        onChange={MaximumPrice}
         />
    </div>

     
        </div>
  )
}

export default Filter