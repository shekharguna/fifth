import React, { useState } from 'react'
import Image32 from "../assets/description.png"

const First = () => {


    const [images, setImages] = useState({
        img1 : "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/3396ee3c-08cc-4ada-baa9-655af12e3120/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
        img2 : "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/e44d151a-e27a-4f7b-8650-68bc2e8cd37e/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
        img3 : "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/44fc74b6-0553-4eef-a0cc-db4f815c9450/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
        img4 : "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/d3eb254d-0901-4158-956a-4610180545e5/scarpa-da-running-su-strada-invincible-3-xk5gLh.png"
    })

    const [activeImg, setActiveImage] = useState(images.img1)

    const [amount, setAmount] = useState(1);


    return (
       <div className="max-w-7xl mx-auto p-8">
        <div className='flex flex-col justify-between lg:flex-row gap-16 lg:items-center'>
            <div className='flex flex-col gap-6 lg:w-2/4 overflow-hidden'>
                <img src={activeImg} alt="" className='w-full h-full aspect-square object-cover rounded-xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300'/>
                <div className='flex flex-row justify-between h-24'>
                    <img src={images.img1} alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img1)}/>
                    <img src={images.img2} alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img2)}/>
                    <img src={images.img3} alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img3)}/>
                    <img src={images.img4} alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img4)}/>
                </div>
            </div>
            {/* ABOUT */}
            <div className='flex flex-col gap-4 lg:w-2/4'>
                <div>
                    <span className=' text-green-600 font-semibold'>Special Sneaker</span>
                    <h1 className='text-3xl font-bold'>Nike Invincible 3</h1>
                </div>
                <div className="flex flex-col gap-0">
                <h6 className='text-xl font-semibold line-through text-gray-600'>₹ 699.00</h6>
                <h6 className='text-2xl font-semibold'>₹ 499.00</h6>
                </div>
                <div className='flex flex-row items-center gap-12'>
                    <div className='flex flex-row items-center'>
                        <button className='bg-gray-200 py-2 px-5 rounded-lg text-green-600 text-3xl' onClick={() => setAmount((prev) => prev - 1)}>-</button>
                        <span className='py-4 px-6 rounded-lg'>{amount}</span>
                        <button className='bg-gray-200 py-2 px-4 rounded-lg text-green-600 text-3xl' onClick={() => setAmount((prev) => prev + 1)}>+</button>
                    </div>
                    <button className='bg-green-600 text-white font-semibold py-3 px-16 rounded-xl h-full'>Add to Cart</button>
                </div>
            </div>
           
        </div>
        <hr class="h-px my-8 bg-zinc-900 border-1 dark:bg-zinc-900"></hr>
        <p className='text-2xl text-semibold text-left'>DESCRIPTION</p>
        <img src='src\assets\description.png' className='mx-h-800 mx-w-150'></img>
        <p className='text-xl text-semibold text-center mt-4'>PRODUCT INFORMATION</p>
        <div className="max-w-7xl mx-auto p-8">
        <p className='text-sm text-semibold text-left'>
<ul class="list-disc">
            <li>100% Super Combed Cotton</li>
            <li>300 GSM</li>
            <li>Derby ribbed Hem and Cuff</li>
            <li>Pre Shrunk & Bio washed</li>
            </ul>
        </p>
        <div className="flex flex-row gap-2 justify-center mt-5">
        <p className='text-extrabold'>Style:</p>
        <p className='text-base font-light '>Unisex Standard Fit, Half Sleeves</p>
        </div>
        <div className="flex flex-row gap-2 justify-center">
        <p className='text-extrabold'>Wash: </p>
        <p className='text-base font-light '>Machine wash. Wash in cold water, use a mild detergent. Dry in shade, do not iron directly or scrub on print.</p>
        </div>
        <p className='text-base font-light '>(Colour may vary slightly from the image displayed)</p>
       
        </div>
        <hr class="h-px my-8 bg-zinc-900 border-1 dark:bg-zinc-900"></hr>
        </div>
    )
}




export default First