"use client";
import Image from 'next/image';  // Make sure to import Image from 'next/image'
import React, {useState} from 'react'
import Logo from "../images/logo.png"
import {FaSun, FaMoon} from "react-icons/fa"
import Link from 'next/link';
const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };
  return (
    <nav className={`fixed w-full h-20 shadow-xl ${
      isDarkMode ? 'bg-gray-800 text-white' : 'bg-cyan-200 text-black'
    }`}>
      <div className='flex justify-between items-center h-full px-4'>
        <Link href="/">
        <div className='cursor-pointer bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% p-2 rounded-full'>
          <Image 
            src={Logo}
            alt="logo"
            width="205"
            height="75"
            priority
            />
        </div>
        </Link>
        <div>
          <ul className='flex gap-4'>
            <Link href="../page.js"><li className='text-2xl font-SymbioticSen pt-1'>Home</li></Link>
            <Link href="../page.js"><li className='text-2xl font-SymbioticSen pt-1'>Services</li></Link>
            <Link href="../page.js"><li className='text-2xl font-SymbioticSen pt-1'>Careers</li></Link>
            <Link href="../page.js"><li className='text-2xl font-SymbioticSen pt-1'>About Us</li></Link>
          
          
            <li className='cursor-pointer bg-gradient-to-r from-blue-500 from-10% to-emerald-500 to-90% p-2 rounded-full'>Log in </li>
            <button
              className='cursor-pointer'
              onClick={toggleMode}
        >
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </button>
        </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar