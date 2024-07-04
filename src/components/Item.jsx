import React from 'react'

function Item(big=false) {
  return (
    <div className='item flex-v'>
        <img src="https://minimalist-e-commerce.vercel.app/static/media/19.1e5832c36583dbb804f2.jpg" className={`item__img ${big && 'item__img_big'}`} />
        <div className="item__details flex-v gap-s">
            <p>Cube Lolo Vase Black</p>
            <p className="item__price">115 $</p>
        </div>
    </div>
  )
}

export default Item
