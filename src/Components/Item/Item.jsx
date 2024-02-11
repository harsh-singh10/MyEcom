import React, { useContext, useState } from 'react'
import './Item.css'
import {Link} from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext'
export const Item = (props) => {
   
  const {addToCart} = useContext(ShopContext)



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
      <button onClick={()=>addToCart(props) } > add to cart </button>
    </div>
  </div>
  )
}