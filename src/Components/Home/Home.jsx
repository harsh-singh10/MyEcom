import  { React ,useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { Item } from '../Item/Item'; 

import './Home.css'

function Home() {
   const { all_product } = useContext(ShopContext);

   console.log(all_product);
 
    return (
        <div className='shopcategory-product' >
              {
            all_product.map((item, i) => (
                <Item 
                    key={i}
                    id={item.id}
                    name={item.name}
                    image={item.image}
                    new_price={item.new_price}
                    old_price={item.old_price}
                />
            ))}
            
        </div>
    );
}

export default Home;



