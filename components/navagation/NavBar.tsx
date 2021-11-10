import React from 'react'
import Link from 'next/link';

const NavBar: React.FC = () => {
    return (
        <nav className="bg-white shadow-lg">
            <div className="max-w-6xl mx-auto px-4">
				<div className="flex justify-between">
					<div className="flex space-x-7">
                    <a href="#" className="flex items-center py-4 px-2">
                    <span className="font-semibold text-gray-500 text-lg">
                        The Running explorer
                    </span>
                </a>
                        <ul className="hidden md:flex items-center space-x-1">
                            <li className="py-4 px-2 text-gray-500 border-b-4 border-purple-500 font-semibold"><Link href="/"><a>Home</a></Link></li>
                            <li className="py-4 px-2 text-gray-500 border-b-4 border-purple-500 font-semibold"><Link href="/blog/Blog"><a>Blog</a></Link></li>
                            <li className="py-4 px-2 text-gray-500 border-b-4 border-purple-500 font-semibold"><Link href="/about/About"><a>About</a></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
