import { React, createContext, useState } from "react";

import all_product from "../Assets/all_product"


export const ShopContext = createContext(null);

const ShopContextProvider = ({ children }) => {

  const [cart, setCart] = useState([]);
  console.log(cart);
  const addToCart = (item) => {

    const existingItem = cart.findIndex(data => data.id === item.id);
    if (existingItem !== -1) {
      const update = [...cart];
      update[existingItem].quantity +=1;
      setCart(update);
    }
    else {

      setCart((prev) => [...prev, { ...item, quantity: 1 }])
    }
 }

        const count = cart.reduce((total , q) => total+q.quantity , 0)

         const totalAmount = cart.map((item)=> item.new_price * item.quantity ).reduce((total,amount) => total + amount,0 )
         

  const handleIncrement = (cartIndex) => {
    const updatedCart = [...cart];
    updatedCart[cartIndex].quantity += 1;

    setCart(updatedCart);

  };
  const handleDecrement = (cartIndex) => {
    const decremetedCart = [...cart];
    decremetedCart[cartIndex].quantity -= 1;
    setCart(decremetedCart)

  }

  const contextValue = { totalAmount,all_product, cart, addToCart, handleIncrement, handleDecrement,count };

  return (
    <ShopContext.Provider value={contextValue}>
      {children}
    </ShopContext.Provider>
  )

}

export default ShopContextProvider;