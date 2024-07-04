import React from 'react'
import Item from './Item'
import ProductsData from '../data/ProductsData'
import { Link } from 'react-router-dom'

function ProudProducts() {
  const {data} = ProductsData()
    const proudProducts = data.slice(12, 20)

  return (
    <div className='proudproducts flex-v gap'>
        <p className="title">Products we are proud of</p>

        <div className="proudproducts__items flex-h wrap gap-lg">
            {proudProducts && proudProducts.map((item, index) => {
              return (
                <Link onClick={() => window.top(0, 0)} key={index} to={`/categories/product/${item.id}`}><Item item={item} /></Link>
              )
            })}
        </div>
      
    </div>
  )
}

export default ProudProducts
