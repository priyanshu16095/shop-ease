import React from 'react'
import Trending from '../components/Trending'

function ProductPage() {
  return (
    <div className='productpage flex-v gap-lg'>

      <p className="heading flex-c">Comfy Chair</p>

      <div className="productpage__main flex">

        <div className="productpage__left">
          <img src="https://minimalist-e-commerce.vercel.app/static/media/19.1e5832c36583dbb804f2.jpg" width={'500rem'} />
        </div>

        <div className="productpage__right flex-v gap-lg">
          <div className="productpage__desc font">Sum is a series designed by the Danish designer Simon Legald, who is the epitome of modern elegance. Elegant and resolute as the tip of a wing, the armrests spread out invitingly, as if they want to embrace you in the armchair's soft, homely space.</div>
          <div className="productpage__quantity flex-b">
            <p className="title">Quantity</p>
            <div className="quantity__btn">
              <button>-</button>
              <p>1</p>
              <button>+</button>
            </div>
            <p className="title">$200</p>
          </div>
          <div className="productpage__buttons flex-h wrap-md gap-lg">
            <button className="outlined__btn">ADD TO CART</button>
            <button className="buy__btn">BUY NOW</button>
          </div>
        </div>
      </div>

      <div className="productpage__details flex-b gap-lg">
        <div className="productpage__label flex-v gap-sm">
          <p className='font'><b>Texture</b></p>
          <p>Cottom</p>
        </div>
        <div className="productpage__label flex-v gap-sm">
          <p className='font'><b>Texture</b></p>
          <p>Cottom</p>
        </div>
        <div className="productpage__label flex-v gap-sm">
          <p className='font'><b>Texture</b></p>
          <p>Cottom</p>
        </div>
      </div>

      <Trending />
    </div>
  )
}

export default ProductPage
