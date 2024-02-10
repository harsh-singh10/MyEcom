import React from 'react'
import cart from '../Assets/cart_icon.png'
import {NavLink,Link} from 'react-router-dom'

import './Nav.css'

const Nav = () => {
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
                      <Link to='/cartP'> <img src={cart} alt="" /> </Link>  
                        <div className="count"> 0 </div>
                </div>
            </div>
        </div>

    </>
  )
}

export default Nav