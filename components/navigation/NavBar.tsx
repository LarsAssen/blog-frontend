import React, { useState } from 'react'
import NavLogo from './NavLogo';
import NavMobileIcon from './NavMobileIcon';
import NavItemList from './NavItemList';
import { motion, useScroll } from "framer-motion"

const NavBar: React.FC = () => {
    const [active, setActive] = useState(false);
    const { scrollYProgress } = useScroll();
    const handleClick = () => {
      setActive(!active);
    };

    return (
        <>
        <nav className="sticky top-0 z-40 flex items-center flex-wrap bg-main-color p-5">
            <NavLogo />
            <h1 className={`hidden md:block  text-white`}>The Running Explorer</h1>
            <NavMobileIcon handleClick={handleClick} />
            <div className={`${active ? '' : 'hidden'} w-full lg:inline-flex lg:flex-grow lg:w-auto`}>
                <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start lg:h-auto'>
                    <NavItemList />
                </div>
            </div>
        </nav>
        <motion.div className="sticky z-10 top-28 left-0 right-0 h-3 bg-secondary-color origin-left" style={{ scaleX: scrollYProgress }} /> 
        </>
    )
}

export default NavBar
