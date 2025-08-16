"use client"
import React, { useState } from 'react';
import Link from 'next/link';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="p-4 bg-black border-b border-gray-800">
            <nav className="flex items-center">
                <Link href="/" className="text-white text-2xl font-bold mr-8 flex-shrink-0">Three Crows Bread</Link>
                {/* Hamburger for mobile */}
                <button
                    className="md:hidden ml-auto text-white focus:outline-none"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16"/>
                    </svg>
                </button>
                {/* Desktop menu */}
                <div className="hidden md:flex flex-1 justify-end">
                    <ul className="flex list-none m-0 p-0">
                        <li className="mr-8">
                            <Link href="/about" className="text-white hover:text-gray-300 font-medium text-center">About</Link>
                        </li>
                        <li className="mr-8">
                            <Link href="/photoGallery" className="text-white hover:text-gray-300 font-medium text-center">Photo Gallery</Link>
                        </li>
                        <li>
                            <Link href="/contact" className="text-white hover:text-gray-300 font-medium text-center">Contact</Link>
                        </li>
                    </ul>
                </div>
                {/* Mobile dropdown menu */}
                {menuOpen && (
                    <div className="absolute top-16 right-4 bg-black border border-gray-800 rounded shadow-lg md:hidden z-50">
                        <ul className="flex flex-col list-none m-0 p-4 space-y-4">
                            <li>
                                <Link href="/about" className="text-white hover:text-gray-300 font-medium text-center" onClick={() => setMenuOpen(false)}>About</Link>
                            </li>
                            <li>
                                <Link href="/photoGallery" className="text-white hover:text-gray-300 font-medium text-center" onClick={() => setMenuOpen(false)}>Photo Gallery</Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-white hover:text-gray-300 font-medium text-center" onClick={() => setMenuOpen(false)}>Contact</Link>
                            </li>
                        </ul>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;