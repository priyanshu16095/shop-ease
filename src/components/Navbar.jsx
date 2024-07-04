import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'; 
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

function Navbar() {
  const[sticky, setSticky] = useState(false)

  function handleScroll() {
    if(window.scrollY) {
      setSticky(true)
      return
    }
    setSticky(false)
  }
  window.addEventListener("scroll", handleScroll)

  const {id} = useParams()

  return (
    <div className={`navbar flex-s ${sticky && 'navbar__sticky'}`}>

      <Link to={'/'}><img src="logo.png" width={'70rem'} /></Link>

      <div className="navbar__links flex-h gap">
        <Link to={'/categories'}><p className="link display-none">CATEGORIES</p></Link>
        <Link to={`/categories/productpage/${id}`}><p className="link display-none">PRODUCT PAGE</p></Link>
        <ShoppingCartOutlinedIcon className='icon' />
        <MenuIcon className='icon display-show' />
      </div>
      
    </div>
  )
}

export default Navbar
