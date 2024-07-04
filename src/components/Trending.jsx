import React from 'react'
import Item from './Item'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Trending() {
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

export default Trending
