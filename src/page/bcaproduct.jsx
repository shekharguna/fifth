import { Card } from "flowbite-react";
import { Link } from "react-router-dom";
import Image33 from "../assets/eatsleepcode4.png";
import { CartProvider, useCart } from "react-use-cart";
import data from "./data";
function ItemCard (props){
  const { addItem } = useCart();
    return(
      <div>
      <img  src={props.img} alt={props.title} />
      <div >
        <h4 >Name: {props.title}</h4>
        <p >
          {/* product description stripped of html tags
          {result} */}
        </p>
        <div>
          <p >
            Price: {props.price}
          </p>
          <button
            name="Add to cart"
            class="bg-gray-300 hover:bg-gray-500 text-gray-700 hover:text-white font-light text-base py-2 ml-14 px-4 w-1/2  rounded-full"
            onClick={() => addItem(props.item)}
          >
            Quick add
          </button>
        </div>
      </div>
    </div> 
 
 

    )
}
export default function Bcaproduct() {
  const { addItem } = useCart();

  const products = [
    {
      id: 1,
      name: "Malm",
      price: 9900,
      quantity: 1,
      img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.qXpQCMUq4i8h1dUXfZTLOQHaJQ%26pid%3DApi&f=1&ipt=e19524c4d0722d5a359d0b2ad534e3748c9ade656bdfcfea4b6b0896b87c9b32&ipo=images"
    },
    {
      id: 2,
      name: "Nordli",
      price: 16500,
      quantity: 5,
    },
    {
      id: 3,
      name: "Kullen",
      price: 4500,
      quantity: 1,
    },
  ];
  return (
    <>
      
               
                <card>
                <div className="columns-3 gap-4 pb-4">
                {data.productData.map((item, index)=>{
                  return(
                    
                    <ItemCard img={item.img} title={item.title} desc={item.desc} price={item.price} item={item} key={index} />
                    
                  )
                })}</div>
                </card>
    </>
  );
}
