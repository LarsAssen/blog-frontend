import React, { useState } from 'react'
import Link from 'next/link';

const items = [ 
    {
        title: 'Home',
        link: "/"
    },
    {
        title: 'Blog',
        link: "/blog/Blog"
    },
    {
        title: 'About',
        link: "/about/About"
    },
    {
        title: 'Current Life',
        link: '/about/CurrentLife/CurrentLifePage'
    }
]

const NavBar: React.FC = () => {
    const [activeNav, setActiveNav] = useState<number>(0);

    const onNavClick = (index: number) => {
        setActiveNav(index)
    }

    const renderedNavs = items.map((item, index) =>{
        const active = index === activeNav ? 'border-b-4 border-blue-500' : '';

        return (<React.Fragment key={item.title}>
            <li className={"py-4 px-2 text-gray-500 font-semibold " + active} onClick={() => onNavClick(index)} ><Link href={item.link}><a>{item.title}</a></Link></li>
        </React.Fragment>)
    })

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
                            {renderedNavs}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
