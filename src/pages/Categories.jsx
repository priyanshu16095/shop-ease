import React, { useState } from 'react'
import ProductsData from '../data/ProductsData'
import Item from '../components/Item';
import { Link } from 'react-router-dom';

function Categories() {
  const[selectedCategory, setSelectedCategory] = useState('All')
  const { data, loading, error, categories, selectedCategoryProducts } = ProductsData(selectedCategory)
  console.log(selectedCategoryProducts);

  if(loading) return <div className='center-both'><p className="info">Loading...</p></div>
  if(error) return <div className='center-both'><p className="info">{error}</p></div>


  return (
    <div className='categories flex-v gap-lg'>
        <p className="categories__title title flex-c">{selectedCategory}</p>

        <div className="categories__categories flex-c gap-lg">
          <p className="category" onClick={() => setSelectedCategory('All')}>All</p>
          {categories && categories.map((item, index) => {
            return (
              <p className="category" onClick={() => setSelectedCategory(item)}>{item}</p>
            )
          })}
        </div>

        <div className="categories__items flex gap">
          {selectedCategory === 'All' ? 
          data && data.map((item, index) => {
            return (
              <Link onClick={() => window.top(0, 0)} to={`/categories/product/${item.id}`}><Item item={item} key={index} /></Link>
            )
          }) : 
          selectedCategoryProducts && selectedCategoryProducts.map((item, index) => {
            return (
              <Link onClick={() => window.top(0, 0)} to={`/categories/product/${item.id}`}><Item item={item} key={index} /></Link>
            )
          }) 
        }
        </div>
    </div>
  )
}

export default Categories
