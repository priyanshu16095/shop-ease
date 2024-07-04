import React from 'react'

export default function Banner({details=[], reverse=false}) {
  return (
    <div className={`banner flex-h ${reverse && 'banner__reverse'}`}>

      <div className="banner__left flex-v gap">
        <p className="heading">{details.title}</p>
        <p>{details.desc}</p>
        <button className="shop__btn">SHOP NOW</button>
      </div>

      <div className="banner__right">
        <img src={details.img} width={'100%'} />
      </div>
    </div>
  )
}
