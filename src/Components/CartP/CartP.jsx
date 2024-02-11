import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'

function CartP() {

  const {cart} = useContext(ShopContext)

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cart.map((item, index) => (
          
          <div key={index} >
              <img src={item.image} width={70} alt="" />
                <span> {item.name}  </span>
                <button onClick={()=> handleDecrement(cartIndex)} >-</button>
                <span> {item.quantity} </span>
                <button onClick={()=> handleIncrement(cartIndex)} >+</button>
                <span> {item.new_price * item.quantity} </span>
          </div>
         
        ))}
      </ul>
    </div>
  )
}

export default CartP