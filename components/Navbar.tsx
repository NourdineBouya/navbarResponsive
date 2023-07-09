"use client"
import Link from 'next/link'
import React , {useState} from 'react'
import { AiOutlineMenu ,AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
    const [isOpen, setIsOpen] =useState(false)    
    // here toggle Menu
    const toggleMenu = () => {
    setIsOpen(!isOpen);
            }
  return (
    <div className='flex flex-wrap justify-between items-center px-20 py-2 sticky top-0 z-10 bg-gray-500'>
        <div className='text-white'>logo</div>
        {/* as you now guys mobile first so hidden on mobile look if is i do save now */}
        <div className='hidden md:flex space-x-10 text-white'>
            <Link href='/'>Home</Link>
            <Link href='/bio'>Bio</Link>
            <Link href='/contact'>Contact</Link>
        </div>
        {/* also the button we need it just on the mobile ok cool */}
        <button className='inline-block md:hidden text-white' onClick={toggleMenu}>
               {
                isOpen?  <AiOutlineClose/> : <AiOutlineMenu/>
               }
        </button>
                        {/* so now if the button is open show the menu */}
                        {/* now the trick is the basis-full and flex wrap */}
                {
                    isOpen && (
                        <div className='flex flex-col justify-between items-center text-white basis-full'>
            <Link href='/'>Home</Link>
            <Link href='/bio'>Bio</Link>
            <Link href='/contact'>Contact</Link>
        </div>
                    )
                }
    </div>
  )
}

export default Navbar