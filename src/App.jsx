import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Categories from './pages/Categories'
import ProductPage from './pages/ProductPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './css/components.css'
import './css/pages.css'
import Footer from './components/Footer'
import ProductsData from './data/ProductsData'

function App() {return (
    <div className='app'>
      <Router>
        <Navbar />
        <div className="place__holder"></div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/categories' element={<Categories />} />
          <Route path='/categories/product/:id' element={<ProductPage />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  )
}

export default App
