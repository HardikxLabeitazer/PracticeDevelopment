import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {AiOutlineShoppingCart} from 'react-icons/ai'
const NavBar = () => {
  return (
    <div className='flex flex-col md:flex-row md:justify-start justify-center items-center my-1 shadow-xl'>
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
        <div className='cart absolute right-0 mx-5 top-5'>
            <AiOutlineShoppingCart className=' text-xl md:text-3xl'/>
        </div>

    </div>
  )
}

export default NavBar