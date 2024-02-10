import React from 'react'
import './Item.css'
import {Link} from 'react-router-dom'
export const Item = (props) => {
  return (
    <div className="items">
    <img src={props.image} alt="" /> 
    <p>{props.name}</p>
    <div className="item-prices">
      <div className="item-price-new">
        ${props.new_price}
      </div>
      <div className="item-price-old">
        ${props.old_price}
      </div>
      <button> add to cart </button>
    </div>
  </div>
  )
}