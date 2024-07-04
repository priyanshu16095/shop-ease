import React from 'react'

function Item({item, big=false}) {
  return (
    <div className='item flex-v'>
        <img src={item?.image} className='item__img' />
        <div className="item__details flex-v gap-s">
            <p className='item__title'>{item?.title}</p>
            <p className="item__price">${item?.price}</p>
        </div>
    </div>
  )
}

export default Item
