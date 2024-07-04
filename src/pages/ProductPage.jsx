import React from 'react'
import Trending from '../components/Trending'
import { useParams } from 'react-router-dom'
import useFetchAPI from '../data/useFetchAPI'
import { CartState } from '../data/CartState'

function ProductPage() {
  const { id } = useParams()
  const productId = id || 5
  const { data, error, loading } = useFetchAPI(`https://fakestoreapi.com/products/${productId}`)

  const {cart, addToCart, totalPrice } = CartState()

  if (loading) return <div className='center-both'><p className="info">Loading...</p></div>
  if (error) return <div className='center-both'><p className="info">{error}</p></div>

  return (
    <div className='productpage flex-v gap-lg'>

      <p className="heading flex-c">{data.title}</p>

      <div className="productpage__main flex">

        <div className="productpage__left">
          <img src={data.image} width={'500rem'} />
        </div>

        <div className="productpage__right flex-v gap-lg">
          <div className="productpage__desc font">{data.description}</div>
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
            <button className="outlined__btn" onClick={() => addToCart(data)}>ADD TO CART</button>
            <button className="buy__btn">BUY NOW</button>
          </div>
        </div>
      </div>

      <div className="productpage__details flex-b gap-lg">
        <div className="productpage__label flex-v gap-sm">
          <p className='font'><b>Return and Exchange</b></p>
          <p>15 days</p>
        </div>
        <div className="productpage__label flex-v gap-sm">
          <p className='font'><b>Rating</b></p>
          <p>{data?.rating?.rate}</p>
        </div>
        <div className="productpage__label flex-v gap-sm">
          <p className='font'><b>Stock</b></p>
          <p>{data?.rating?.count} items left</p>
        </div>
      </div>

      <Trending />
    </div>
  )
}

export default ProductPage
