import React from 'react'
import Link from 'next/link';

const NavBar: React.FC = () => {
    return (
        <nav className="bg-white shadow-lg">
            <div className="max-w-6xl mx-auto px-4">
				<div className="flex justify-between">
					<div className="flex space-x-7">
            <ul className="hidden md:flex items-center space-x-1">
                <li className="py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold"><Link href="/">Home</Link></li>
                <li className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"><Link href="/blog/Blog">Blog</Link></li>
                <li className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"><Link href="/about/About">About</Link></li>
            </ul>
            </div>
            </div>
            </div>
        </nav>
    )
}

export default NavBar
