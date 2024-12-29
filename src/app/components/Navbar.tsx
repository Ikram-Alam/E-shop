'use client'
import { useState } from 'react'; // Import useState for toggle functionality
import Link from 'next/link';

type MobileMenuProps = {
    toggleMenu: () => void; // Function to toggle the menu visibility
    isOpen: boolean;         // Boolean state to check if the menu is open
};

export default function Navbar() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false); // State to toggle mobile menu

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="bg-gray-900 text-white fixed w-full top-0 left-0 z-50"> {/* Added fixed and z-index */}
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                {/* Logo */}
                <div className="text-xl font-bold">
                    <Link href="/">E-Shop</Link>
                </div>

                {/* Menu Items */}
                <ul className="hidden md:flex md:items-center md:space-x-6">
                    <li className="px-4">
                        <Link href="/" className="hover:text-yellow-500">
                            Home
                        </Link>
                    </li>
                    <li className="px-4 relative group">
                        <span className="cursor-pointer hover:text-yellow-500">
                            Products
                        </span>
                        {/* Dropdown Menu */}
                        <ul className="absolute left-0 top-full mt-1 bg-gray-800 text-white rounded-md shadow-lg hidden group-hover:block">
                            <li className="px-4 py-2 hover:bg-gray-700">
                                <Link href="/products">GPU</Link>
                            </li>
                            <li className="px-4 py-2 hover:bg-gray-700">
                                <Link href="/products">CPU</Link>
                            </li>
                            <li className="px-4 py-2 hover:bg-gray-700">
                                <Link href="/products">Monitor</Link>
                            </li>
                            <li className="px-4 py-2 hover:bg-gray-700">
                                <Link href="/products">RAM/ROM</Link>
                            </li>
                            <li className="px-4 py-2 hover:bg-gray-700">
                                <Link href="/products">Case</Link>
                            </li>
                            <li className="px-4 py-2 hover:bg-gray-700">
                                <Link href="/products">Accessories</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="px-4">
                        <Link href="/About" className="hover:text-yellow-500">
                            About Us
                        </Link>
                    </li>
                    <li className="px-4">
                        <Link href="/cart" className="hover:text-yellow-500">
                            Cart
                        </Link>
                    </li>
                    <li className="px-4">
                        <Link href="/Login" className="hover:text-yellow-500">
                            Login
                        </Link>
                    </li>
                    <li className="px-4">
                        <Link href="/Register" className="hover:text-yellow-500">
                            Register
                        </Link>
                    </li>
                </ul>

                {/* Mobile Menu */}
                <div className="md:hidden">
                    <MobileMenu toggleMenu={toggleMobileMenu} isOpen={isMobileMenuOpen} />
                </div>
            </div>
        </nav>
    );
}

function MobileMenu({ toggleMenu, isOpen }: MobileMenuProps) {
    return (
        <div className="relative">
            {/* Button */}
            <button onClick={toggleMenu} className="focus:outline-none">
                {isOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                )}
            </button>

            {/* Dropdown Menu */}
            <ul
                className={`absolute right-0 top-full mt-2 bg-gray-800 text-white rounded-md shadow-lg ${isOpen ? 'block' : 'hidden'}`}
            >
                <li className="px-4 py-2 hover:bg-gray-700">
                    <Link href="/">Home</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-700">
                    <Link href="/products">Products</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-700">
                    <Link href="/About">About Us</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-700">
                    <Link href="/cart">Cart</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-700">
                    <Link href="/Login">Login</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-700">
                    <Link href="/Register">Register</Link>
                </li>
            </ul>
        </div>
    );
}
