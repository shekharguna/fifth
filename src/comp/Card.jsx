import { Card } from "flowbite-react"
import image from "../assets/BABBAGE.jpg"
import image1 from "../assets/socrates.jpg"
import image2 from "../assets/beethoven.jpg"
import image3 from "../assets/ARISTOTLE.jpg"

export default function Card1(){
    return( 
            <div className="flex justify-center align-center my-3"> 
      <div className="m-2"> 
        <div className="max-w-sm m1-16"> 
  <img src="src\assets\BABBAGE.jpg"></img> 
  </div> 
</div> 
<div className="m-2"> 
        <div className="max-w-sm m1-16"> 
  <img src="src\assets\socrates.jpg"></img> 
  </div> 
</div> 
<div className="m-2"> 
        <div className="max-w-sm m1-16"> 
  <img src="src\assets\beethoven.jpg"></img>
  </div>
</div>
<div className="m-2">
        <div className="max-w-sm m1-16">
  <img src="src\assets\ARISTOTLE.jpg"></img>
  </div>
</div>

</div>

    )
}