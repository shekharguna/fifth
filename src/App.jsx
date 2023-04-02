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
import Bcaproduct from './page/bcaproduct'
import Footer1 from './comp/Footer'
import Philosophy from './page/philosophy'
import Music from './page/music'
import Zoology from './page/zoology'
import Psychology from './page/psychology'
import Chemistry from './page/chemistry'
import History from './page/history'
import English from './page/english'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <body class="2h-screen bg-white" >
    <div className=" bg-cover">
   <BrowserRouter>
   <Navbar1></Navbar1>
   <Search></Search>
  
   <Routes>
    <Route path="/" element={<Home/>}> </Route>

   
    <Route path="/wishlist" element={<Wishlist/>}></Route>

    <Route path="/shoppingcart" element={<Cart/>}></Route>

    
    <Route path="/checkout" element={<Checkout/>}></Route>

    <Route path="/bcaproduct" element={<Bcaproduct/>}></Route>

    <Route path="/philosophy" element={<Philosophy/>}></Route>

    <Route path="/music" element={<Music/>}></Route>

    <Route path="/zoology" element={<Zoology/>}></Route>

    <Route path="/psychology" element={<Psychology/>}></Route>

    <Route path="/chemistry" element={<Chemistry/>}></Route>

    <Route path="/history" element={<History/>}></Route>

    <Route path="/english" element={<English/>}></Route>
   </Routes>
   <Footer1></Footer1>
   </BrowserRouter>

   </div>
   </body>
   </>
  )
}

export default App
