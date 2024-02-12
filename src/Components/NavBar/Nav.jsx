import React, { useContext } from 'react'
import carti from '../Assets/cart_icon.png'
import {NavLink,Link} from 'react-router-dom'

import './Nav.css'
import { ShopContext } from '../Context/ShopContext'

const Nav = () => {

  const {cart ,count} = useContext(ShopContext);

  return (
    <>
       
        <div className="conatiner">
            <div className="nav-bar">
                <h2>Test-Cart</h2>
                <div className="menu">
                    <ul>
                        <li>  <Link to= '/'> Home </Link>  </li>
                        <li><Link to= '/men'> Men </Link> </li>
                        <li><Link to= '/women'> Women </Link> </li>
                    </ul>
                </div>
                <div className="cart">
                      <Link to='/cartP'> <img src={carti} alt="" /> </Link>  
                        <div className="count"> {count} </div>
                </div>
            </div>
        </div>

    </>
  )
}

export default Nav