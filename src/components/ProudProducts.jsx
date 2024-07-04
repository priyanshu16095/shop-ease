import React from 'react'
import Item from './Item'

function ProudProducts() {
  return (
    <div className='proudproducts flex-v gap'>
        <p className="title">Products we are proud of</p>

        <div className="proudproducts__items flex-h wrap gap-lg">
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
        </div>
      
    </div>
  )
}

export default ProudProducts
