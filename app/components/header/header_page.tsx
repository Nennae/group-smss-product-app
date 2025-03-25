"use client";

import Link from "next/link";
import Image from 'next/image';

import { FaBars, FaSearch, FaShoppingCart, FaTimes } from 'react-icons/fa';
import { useState } from "react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-t-35 border-black ">
        
    <header className="bg-white shadow-md px-4 py-3 flex items-center justify-between">
    
    {/* Menu Icon */}
    <nav>
      {/* Top Bar */}
      <div className="flex items-center justify-between">

        {/* Hamburger Icon */}
        <div onClick={() => setIsOpen(true)} className="md:hidden cursor-pointer">
          <FaBars size={24} />
        </div>
        <div className="flex items-center space-x-3">
      <Image src="/icons/logo.png"  alt="company logo"  width={40}
                    height={40}/>
      <h1 className="font-bold text-xl text-red-600">SMSS E-commerce</h1>
    </div>
    
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 ml-100">
        <ul className="flex space-x-6">
          <li><Link href="/" className="hover:text-yellow-400">Home</Link></li>
          <li><Link href="/about" className="hover:text-yellow-400">About</Link></li>
          <li><Link href="/contact" className="hover:text-yellow-400">Contact</Link></li>
        </ul>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Sliding Mobile Menu */}
      <div
        className={`fixed top-0  left-0 h-full w-64 bg-gray-900 border-t-35 border-gray-900 text-white z-50 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-700 ">
        
          <FaTimes
            className="cursor-pointer"
            size={24}
            onClick={() => setIsOpen(false)}
          />
        </div>
        <ul className="flex flex-col p-4 space-y-4">
          <li><Link href="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link href="/about" onClick={() => setIsOpen(false)}>About</Link></li>
          <li><Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
        </ul>
      </div>
    </nav>
   

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


