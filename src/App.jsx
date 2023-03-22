import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar1 from './comp/Navbar1'
import Carousel1 from './comp/Carousel'
import Card1 from './comp/Card'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './page/wishlist'
import Home from './page/home'
import Wishlist from './page/wishlist'
import Cart from './page/shoppingcart'
import Checkout from './page/checkout'
import Search from './comp/searchbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="bg-slate-50 bg-cover">
   <BrowserRouter>
   <Navbar1></Navbar1>
   <Search></Search>
  
   <Routes>
    <Route path="/" element={<Home/>}> </Route>

   
    <Route path="/wishlist" element={<Wishlist/>}></Route>

    <Route path="/shoppingcart" element={<Cart/>}></Route>

    
    <Route path="/checkout" element={<Checkout/>}></Route>

   </Routes>
   </BrowserRouter>
   </div>
   </>
  )
}

export default App
