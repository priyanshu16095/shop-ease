import React from 'react'
import Item from './Item'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ProductsData from '../data/ProductsData';
import { Link } from 'react-router-dom';

function Trending() {
    const {data} = ProductsData()
    const trendingItems = data.slice(10, 20)
    
    return (
        <div className='trending flex-v gap'>
            <div className="trending__header flex-s">
                <p className="title">Trending Now</p>
                <div className="trending__buttons flex-h gap-sm">
                    <button className="btn"><ArrowBackIcon /></button>
                    <button className="btn"><ArrowForwardIcon /></button>
                </div>
            </div>

            <div className="trending__items gap">
                {trendingItems && trendingItems.map((item, index) => {
                    return (
                        <Link onClick={() => window.top(0, 0)} key={index} to={`/categories/product/${item.id}`}><Item item={item} /></Link>
                    )
                })}
            </div>
        </div>
    )
}

export default Trending
