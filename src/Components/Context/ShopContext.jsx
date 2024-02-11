import {React , createContext , useState} from "react";

import all_product from "../Assets/all_product"


export  const ShopContext = createContext(null);

const ShopContextProvider = ({children})=> {

    const [cart , setCart] = useState([]);
     console.log(cart);
    const addToCart = (item)=>{
     //  setCart((prev) => [...prev , {...item , quantity:1}])

  
     const existingItemIndex = cart.findIndex((cartItem) => cartItem.id === item.id);

  if (existingItemIndex !== -1) {
    const updatedCart = [...cart];
    updatedCart[existingItemIndex].quantity += 1;
    setCart((prev)=> [...prev ,updatedCart]);
  } else {
    setCart([...cart, { ...item, quantity: 1 }]);
  }
     
      
    }

    
    const contextValue = {all_product , cart , addToCart};

    return(
        <ShopContext.Provider value={contextValue}>
                {children}
        </ShopContext.Provider>
    )

}

export default ShopContextProvider;