import React,{useRef} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {AiOutlineShoppingCart,AiFillCloseCircle,AiFillPlusCircle,AiFillMinusCircle} from 'react-icons/ai'
import {BsFillBagCheckFill} from 'react-icons/bs'
const NavBar = ({cart,addtoCart,removeFromCart,clearCart,subTotal}) => {
console.log(cart,addtoCart,removeFromCart,clearCart,subTotal)
  const toggleCart=()=>{
    if(ref.current.classList.contains('translate-x-full')){
      ref.current.classList.remove('translate-x-full');
      ref.current.classList.add('translate-x-0')
    }
    else  if(!ref.current.classList.contains('translate-x-full')){
      ref.current.classList.remove('translate-x-0');
      ref.current.classList.add('translate-x-full')
    }
  }
  const ref = useRef();
  return (
    <div className='sticky top-0 z-10 flex flex-col md:flex-row md:justify-start justify-center items-center my-1 shadow-xl'>
        <div className='logo mx-2'>
          <Link href="/"><a> <Image src="/Trader.jpg" width={60} height={50}/></a></Link> 
        </div>
        <div className='nav'>
            <ul className='flex-column md:flex items-center space-x-2 text-md font-bold'>
                <Link href={'/tshirts'}><a><li>Tshirts</li></a></Link>
                <Link href={'/hoodies'}><a><li>Hoodies</li></a></Link>
                <Link href={'/stickers'}><a><li>Stickers</li></a></Link>
                <Link href={'/mugs'}><a><li>Mugs</li></a></Link>
            </ul>
        </div>
        <div onClick={toggleCart} className='cursor-pointer cart absolute right-0 mx-5 top-5'>
            <AiOutlineShoppingCart className=' text-xl md:text-3xl'/>
        </div>
        <div ref={ref} className={` z-10 h-[100vh] w-72 sidecart absolute top-0 right-0 bg-purple-300 px-8 p-10 transform transition-transform ${Object.keys(cart).length!==0?'translate-x-0':'translate-x-full'} `}>
          <h2 className='font-bold text-xl text-center'>Shopping E Cart </h2>
          <span onClick={toggleCart} className='absolute top-2 right-2 cursor-pointer text-xl text-purple-500'><AiFillCloseCircle/></span>
          <ol className='list-decimal font-semibold'>
            {Object.keys(cart)==0 && <div className='mx-10 font-normal my-4'>No Items in the cart</div>}
            { Object.keys(cart).map((k)=>{ return  <li key={k}>
              <div className='item flex my-5'>
                <div className='w-2/3 font-semibold'>{cart[k].name}</div>
              <div className='w-1/3 flex font-semibold items-center justify-center'><AiFillMinusCircle onClick={()=>removeFromCart(k,1,cart[k].price,cart[k].name,cart[k].size,cart[k].variant)} className='text-purple-600 mx-2 text-5xl cursor-pointer'/>{cart[k].qty}<AiFillPlusCircle onClick={()=>addtoCart(k,1,cart[k].price,cart[k].name,cart[k].size,cart[k].variant)} className='mx-2 text-5xl text-purple-600 cursor-pointer'/></div>
              </div>
              
            </li>}) }
            
          </ol>
          <div className='flex space-x-2'>
           <Link href={'/checkout'}><a> <button className="flex mx-auto  text-white bg-purple-500 border-0 py-1 px-1 focus:outline-none hover:bg-purple-600 rounded text-lg"><BsFillBagCheckFill className='m-1'/> CheckOut</button></a></Link>
          <button onClick={clearCart} className="flex mx-auto  text-white bg-purple-500 border-0 py-1 px-1 focus:outline-none hover:bg-purple-600 rounded text-lg"> ClearCart</button>
          </div>
          
        </div>

    </div>
  )
}

export default NavBar