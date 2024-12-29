// components/Footer.tsx
'use client'
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Importing social media icons

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* Logo Section */}
                    <div className="text-center md:text-left mb-4 md:mb-0">
                        <h2 className="text-3xl font-bold">E-Shop</h2>
                        <p className="mt-2">Your trusted online store for all things tech!</p>
                    </div>

                    {/* Links Section */}
                    <div className="flex flex-col md:flex-row items-center mb-4 md:mb-0">
                        <ul className="flex flex-col md:flex-row md:space-x-8">
                            <li className="px-4 py-2">
                                <Link href="/" className="hover:text-yellow-500">
                                    Home
                                </Link>
                            </li>
                            <li className="px-4 py-2">
                                <Link href="/products" className="hover:text-yellow-500">
                                    Products
                                </Link>
                            </li>
                            <li className="px-4 py-2">
                                <Link href="/about" className="hover:text-yellow-500">
                                    About Us
                                </Link>
                            </li>
                            <li className="px-4 py-2">
                                <Link href="/contact" className="hover:text-yellow-500">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Social Media Section */}
                    <div className="flex space-x-6">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebook className="text-2xl hover:text-blue-600" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <FaTwitter className="text-2xl hover:text-blue-400" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="text-2xl hover:text-pink-500" />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="text-2xl hover:text-blue-700" />
                        </a>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-8 pt-4 text-center">
                    <p className="text-sm">&copy; 2024 E-Shop. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}
