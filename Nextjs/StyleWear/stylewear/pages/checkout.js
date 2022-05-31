import React from 'react'
import {AiFillPlusCircle,AiFillMinusCircle} from 'react-icons/ai'
import {BsFillBagCheckFill} from 'react-icons/bs'
import Link from 'next/link'
const Checkout = ({cart,clearCart,subTotal,addtoCart,removeFromCart}) => {
  return (
    <div className='container m-auto'>
      <h1 className='font-bold text-3xl my-8 text-center'>CheckOut</h1>
      <h2 className='font-bold text-xl'>1.Delievery Details</h2>
      <div className='mx-auto flex my-4'>
        <div className='px-2 w-1/2'>
          <div className="mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
            <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>

        </div>
        <div className='px-2 w-1/2'>
          <div className=" mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
            <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>

        </div>
        
      </div>
      <div className='px-2 w-full'>
          <div className=" mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Address</label>
            
            <textarea id="text" cols="30" rows="2" name="address" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">

            </textarea>
            
          </div>

        </div>
        <div className='flex'>
          <div className='px-2 w-1/2'>
          <div className="mb-4">
            <label htmlFor="phone" className="leading-7 text-sm text-gray-600">Phone No.</label>
            <input type="text" id="phone" name="phone" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>

        </div>
        <div className='px-2 w-1/2'>
          <div className=" mb-4">
            <label htmlFor="city" className="leading-7 text-sm text-gray-600">City</label>
            <input type="text" id="city" name="city" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>

        </div>
        </div>
        <div className='flex'>
          <div className='px-2 w-1/2'>
          <div className="mb-4">
            <label htmlFor="state" className="leading-7 text-sm text-gray-600">State</label>
            <input type="text" id="state" name="state" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>

        </div>
        <div className='px-2 w-1/2'>
          <div className=" mb-4">
            <label htmlFor="pincode" className="leading-7 text-sm text-gray-600">pincode</label>
            <input type="text" id="pincode" name="pincode" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>

        </div>
        </div>
        <h2 className='font-semibold text-xl'>2.Review Cart Items & pay</h2>
        <div  className='z-10 h-[20vh] w-[80vw] sidecart  top-0 right-0 bg-purple-300 px-8 p-10 m-5 '>
          <h2 className='font-bold text-xl text-center'>Shopping Cart</h2>
          
          <ol className='list-decimal font-semibold'>
            {Object.keys(cart)==0 && <div className='mx-10 font-normal my-4'>No Items in the cart</div>}
            { Object.keys(cart).map((k)=>{ return  <li key={k}>
              <div className='item flex my-5'>
                <div className=' font-semibold'>{cart[k].name}</div>
              <div className='w-1/3 flex font-semibold items-center justify-center'><AiFillMinusCircle onClick={()=>removeFromCart(k,1,cart[k].price,cart[k].name,cart[k].size,cart[k].variant)} className='text-purple-600 mx-2 text-5xl cursor-pointer'/>{cart[k].qty}<AiFillPlusCircle onClick={()=>addtoCart(k,1,cart[k].price,cart[k].name,cart[k].size,cart[k].variant)} className='mx-2 text-5xl text-purple-600 cursor-pointer'/></div>
           
              </div>
              
            </li>}) }
              <span className='total'>SubTotal:{subTotal}</span>
          </ol>
          
          
        </div>
        <div className='mx-4'>
        <Link href={'/checkout'}><a> <button className="flex mx-auto  text-white bg-purple-500 border-0 py-1 px-1 focus:outline-none hover:bg-purple-600 rounded text-lg"><BsFillBagCheckFill className='m-1'/>Pay Rs.{subTotal}</button></a></Link>
        </div>
    </div>
  )
}

export default Checkout