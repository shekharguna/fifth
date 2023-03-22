import { Navbar } from "flowbite-react"
import { Link } from "react-router-dom"


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
      src="https://s3-eu-west-1.amazonaws.com/ie.smooth.careers-logo/ErnPJ-0mjSfZ8-Go"
      className="mr-3 h-6 sm:h-9"
      alt="Flowbite Logo"
    />
    <span className="self-center whitespace-nowrap text-3xl font-semibold dark:text-white">
      FullyFilmy
    </span>
    
  </Navbar.Brand>
  <Navbar.Toggle />
  <Navbar.Collapse>
    
  <Link to="/" className="text-xl">
      Home
      </Link>
   <Link to="/wishlist" className="text-xl">
      Wishlist
      </Link>
      <Link to="/shoppingcart" className="text-xl">
      Shopping Cart
      </Link>
      <Link to="/checkout" className="text-xl">
      Checkout
      </Link>
    <Navbar.Link href="/navbars" className="text-xl">
      Track My Order
    </Navbar.Link>
   
  </Navbar.Collapse>
</Navbar>
    )
}