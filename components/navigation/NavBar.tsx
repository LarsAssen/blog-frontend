import React, { useState } from 'react'
import NavLogo from './NavLogo';
import NavMobileIcon from './NavMobileIcon';
import NavItemList from './NavItemList';

const NavBar: React.FC = () => {
    const [active, setActive] = useState(false);

    const handleClick = () => {
      setActive(!active);
    };

    return (
        <nav className="sticky top-0 z-50 flex items-center flex-wrap bg-main-color p-3">
            <NavLogo />
            <h1 className={`hidden md:block  text-white`}>The Running Explorer</h1>
            <NavMobileIcon handleClick={handleClick} />
            <div className={`${active ? '' : 'hidden'} w-full lg:inline-flex lg:flex-grow lg:w-auto`}>
                <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start lg:h-auto'>
                    <NavItemList />
                </div>
            </div>
        </nav>
    )
}

export default NavBar
