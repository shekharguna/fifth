import { Navbar } from "flowbite-react"
import { Link } from "react-router-dom"
import image12 from "../assets/logosample.png"
import Image22 from "../assets/search.png"
import Image23 from "../assets/customer.png"

export default function Navbar1(){
    return(
        <Navbar
  fluid={true}
 
  className="bg-zinc-800 mb-4 border-2 border-zinc-700 "
 >
  <Navbar.Brand

    to="/navbars"
  >
    <img
      src="src\assets\logosample.png"
      className="mr-3 h-6 sm:h-6"
      alt="Flowbite Logo"
    />
    <span className="self-center whitespace-nowrap text-3xl font-sans text-white">
      G
    </span>
    
  </Navbar.Brand>
  <Navbar.Toggle />
  <Navbar.Collapse>
    
  <Link to="/" className=" font-light text-base font-sans  text-white hover:text-green-600  ">
      Home
      </Link>
   <Link to="/wishlist" className="font-light text-base font-sans  text-white hover:text-green-600  ">
      Wishlist
      </Link>
      <Link to="/shoppingcart" className="font-light text-base font-sans  text-white hover:text-green-600">
      Shopping Cart
      </Link>
      <Link to="/checkout" className="font-light text-base font-sans text-white  hover:text-green-600 ">
      Checkout
      </Link>
    <Navbar.Link href="/navbars" className="font-light text-base font-sans  text-white hover:text-green-600 mr-60">
      Track My Order
    </Navbar.Link>
    <div className="flex flex-row space-x-2 space-x-reverse">
    <img src="src\assets\search.png" className="h-8 w-8 mr-1 hover:bg-zinc-700"></img>
    <img src="src\assets\customer.png" className="h-8 w-8 hover:bg-zinc-700"></img>
    </div>
  </Navbar.Collapse>
</Navbar>
    )
}