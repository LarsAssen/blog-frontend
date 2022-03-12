import React, { useState } from 'react'
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import NavLogo from './NavLogo';
import NavMobileIcon from './NavMobileIcon';
import NavItemList from './NavItemList';



const NavBar: React.FC = () => {
    const [active, setActive] = useState(false);

    const handleClick = () => {
      setActive(!active);
    };

    return (
        <nav className="sticky top-0 z-50 flex items-center flex-wrap bg-blue-500 p-3">
            <NavLogo />
            <div className={`${active ? '' : 'hidden'} w-full lg:inline-flex lg:flex-grow lg:w-auto`}>
                <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
                    <NavItemList />
                </div>
            </div>
            <NavMobileIcon handleClick={handleClick} />
        </nav>
    )
}

export default NavBar
