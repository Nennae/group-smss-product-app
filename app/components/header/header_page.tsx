"use client";

import Link from "next/link";
import Image from 'next/image';

import { FaBars, FaSearch, FaShoppingCart } from 'react-icons/fa';

export default function Header() {
  return (
    <div className="border-t-35 border-black ">
        
    <header className="bg-white shadow-md px-4 py-3 flex items-center justify-between">
    
    {/* Menu Icon */}
    <div className="flex items-center space-x-4">
      <FaBars className="text-l cursor-pointer" />
      <Image src="/icons/logo.png"  alt="company logo"  width={40}
                    height={40}/>
      <h1 className="font-bold text-xl text-red-600">SMSS E-commerce</h1>
    </div>

    {/* Right Side Icons */}
    <div className="flex items-center space-x-4 relative">
      <FaSearch className="text-2xl cursor-pointer" />

      <div className="relative">
        <FaShoppingCart className="text-2xl cursor-pointer" />
        {/* Cart Badge */}
       
      </div>
    </div>
  </header>
  </div>
  );
}


