import React from 'react';
import Link from 'next/link';

const Header = () => (
    <header className="p-4 bg-black border-b border-gray-800">
        <nav className="flex items-center">
            <Link href="/" className="text-white text-2xl font-bold mr-8 flex-shrink-0">Three Crows Bread</Link>
            <div className="flex-1 flex justify-end">
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
        </nav>
    </header>
);

export default Header;