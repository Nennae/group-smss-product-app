"use client";

import Link from "next/link";
import Image from 'next/image';

import { FaBars, FaSearch, FaShoppingCart, FaTimes } from 'react-icons/fa';
import { useState } from "react";
import { useRouter } from 'next/navigation';
import SearchResults from "./search-results";



export default function Header() {
    const router = useRouter(); // för att ändra url
    const [isOpen, setIsOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState<string>('');
    // funktion som trigas när användaren trycker på en tangent
    const handleSearch = () => {
        if (searchQuery.length <= 2) {
            alert("Sökningen måste vara längre än 2 karaktärer");
            return;
        }
        router.push(`/search?query=${searchQuery}`);
        setIsSearchOpen(false);
    };
    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            handleSearch(); // Call the same function on Enter key press
        }
    };

    return (
        <div className="border-t-35 border-black ">

            <header className="bg-white shadow-md px-4 py-3 flex items-center">

                {/* Menu Icon */}
            
                    {/* Top Bar */}
                    <div className="flex items-center space-x-3 flex-1">

                        {/* Hamburger Icon */}
                        <div onClick={() => setIsOpen(true)} className="md:hidden cursor-pointer">
                            <FaBars size={24} />
                        </div>
                        <div className="flex items-center space-x-3">
                            <Image src="/icons/logo.png" alt="company logo" width={40}
                                height={40} />
                            <h1 className="font-bold text-xl text-red-600">SMSS E-commerce</h1>
                        </div>

                    </div>
                    {/* Desktop Menu */}
                    <div className="hidden md:flex flex-1 justify-center">
                        <ul className="flex space-x-6">
                            <li><Link href="/" className="hover:text-yellow-400">Home</Link></li>
                            <li><Link href="/about" className="hover:text-yellow-400">About</Link></li>
                            <li><Link href="/contact" className="hover:text-yellow-400">Contact</Link></li>
                        </ul>

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
                        className={`fixed top-0  left-0 h-full w-64 bg-gray-900 border-t-35 border-gray-900 text-white z-50 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
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
                {/* Right Side Icons */}
                <div className="flex items-center space-x-4 flex-1 justify-end">
                    <div className="hidden md:flex items-center border rounded-lg overflow-hidden">

                        <input className="border-2 border-black"
                            type='text'
                            placeholder='Search products'
                            value={searchQuery}
                            onKeyDown={handleKeyDown}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                    <div>
                        <FaSearch className="text-2xl cursor-pointer hidden md:block"
                            onClick={handleSearch} />
                    </div>
                    <div>
                        <FaSearch className="text-2xl cursor-pointer md:hidden"
                            onClick={() => setIsSearchOpen(true)} />
                        {/* Search Popup */}
                        {isSearchOpen && (
                            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                                <div className="bg-white p-6 rounded-xl w-11/12 max-w-lg shadow-lg relative">
                                    <FaTimes
                                        className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md text-xl cursor-pointer"
                                        onClick={() => setIsSearchOpen(false)}
                                    />

                                    <div className="flex items-center border rounded-lg overflow-hidden">
                                        <input
                                            type="text"
                                            placeholder="Search for products"
                                            className="flex-grow p-3 outline-none"
                                            value={searchQuery}
                                            onKeyDown={handleKeyDown}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                        />
                                        <button
                                            className="bg-black text-white p-3"
                                            onClick={handleSearch}>
                                            <FaSearch />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="relative">
                        <FaShoppingCart className="text-2xl cursor-pointer" />
                        {/* Cart Badge */}

                    </div>

                </div>
            </header>
        </div>
    );
}


