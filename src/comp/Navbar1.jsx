import { Navbar } from "flowbite-react"
import { Link } from "react-router-dom"
import image12 from "../assets/logosample.png"

export default function Navbar1(){
    return(
        <Navbar
  fluid={true}
  rounded={true}
  className="bg-slate-50 border-5 border-black"
 >
  <Navbar.Brand

    to="/navbars"
  >
    <img
      src="src\assets\logosample.png"
      className="mr-3 h-6 sm:h-9"
      alt="Flowbite Logo"
    />
    <span className="self-center whitespace-nowrap text-3xl font-sans dark:text-white">
      Issac Asimov
    </span>
    
  </Navbar.Brand>
  <Navbar.Toggle />
  <Navbar.Collapse>
    
  <Link to="/" className="text-xl font-sans text-black hover:text-green-600 hover:underline">
      Home
      </Link>
   <Link to="/wishlist" className="text-xl font-sans text-black hover:text-green-600  hover:underline">
      Wishlist
      </Link>
      <Link to="/shoppingcart" className="text-xl font-sans text-black hover:text-green-600 hover:underline">
      Shopping Cart
      </Link>
      <Link to="/checkout" className="text-xl font-sans text-black hover:text-green-600 hover:underline">
      Checkout
      </Link>
    <Navbar.Link href="/navbars" className="text-xl font-sans text-black hover:text-green-600 hover:underline">
      Track My Order
    </Navbar.Link>
   
  </Navbar.Collapse>
</Navbar>
    )
}