import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'

function CartP() {

  const {cart,handleIncrement,handleDecrement,totalAmount} = useContext(ShopContext)
   
if(cart.length == 0){
  return <div><h1>You have nothing</h1></div>
}
else{




  return (
    <div>
      <h2>Cart</h2>
      <ul>
      {

       
        cart.map((item, index) => (
          
          <div key={index} >
              <img src={item.image} width={70} alt="" />
                <span> {item.name}  </span>
                <button onClick={()=> handleDecrement(index)} >-</button>
                <span> {item.quantity} </span>
                <button onClick={()=> handleIncrement(index)} >+</button>
                <span> {item.new_price * item.quantity} </span>

                
          </div>
        
          
         
        ))}
      </ul>

         {
          <h2>{totalAmount}</h2>
         }
    </div>
  )
}
}

export default CartP