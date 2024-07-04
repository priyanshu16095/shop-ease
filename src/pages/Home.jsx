import React from 'react'
import Banner from '../components/Banner'
import Trending from '../components/Trending'
import ProudProducts from '../components/ProudProducts'
import Grid from '../components/Grid'
import ProductPage from './ProductPage'

function Home() {
  const banner1 = {
    img: 'harmonious_living.jpg',
    title: 'Creative harmonious living',
    desc: 'Our Products are all made to standard sizes so that you can mix and match them freely.'
  }
  const banner2 = {
    img: 'comfortable_living.jpg',
    title: 'Comfortable & Elegante Living',
    desc: 'Our Products are all made to standard sizes so that you can mix and match them freely.'
  }
  return (
    <div>
      <ProductPage />
      <ProudProducts />
      <Banner details={banner1} reverse={false} />
      <Trending />
      <Banner details={banner2} reverse={true} />
    </div>
  )
}

export default Home
