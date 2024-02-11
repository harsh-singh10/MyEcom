
import React, { useContext, useState} from 'react'
import './App.css'
import Home from './Components/Home/Home'
import Men from './Components/Men/Men'
import Nav from './Components/NavBar/Nav'
import {BrowserRouter , Route , Routes} from 'react-router-dom'
import Women from './Components/Women/Women'
import CartP from './Components/CartP/CartP'
import ShopContextProvider, { ShopContext } from './Components/Context/ShopContext'
function App() {


  
  return (
    <>
    <ShopContextProvider>

   
        <BrowserRouter>
        <Nav />

          <Routes>
              <Route path='/' element={<Home/>}  />
              <Route path='/men' element={<Men category="men"   />}  />
              <Route path='/women' element={<Men category="women"  />}  />
              <Route path='/cartP' element={<CartP/>}  />
          </Routes>

        </BrowserRouter>


        </ShopContextProvider>

    </>
  )
}

export default App
