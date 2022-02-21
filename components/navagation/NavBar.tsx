import React, { useState } from 'react'
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Logo from '../../public/logo.png';

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
    const [active, setActive] = useState(false);

    const handleClick = () => {
      setActive(!active);
    };

    const renderedNavs = items.map((item) =>{

        return (<React.Fragment key={item.title}>
            <Link href={item.link}><a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:text-blue-800" >{item.title}</a></Link>
        </React.Fragment>)
    })

    return (
        <nav className="sticky top-0 z-50 flex items-center flex-wrap bg-blue-500 p-3">
                        <Link href="/">
                        <a className="inline-flex items-center p-2 mr-4">
                        <motion.div initial="hidden" animate="visible" variants={{
                        hidden: {
                            scale: .8,
                            opacity: 0
                        },
                        visible: {
                            scale: 1,
                            opacity: 1,
                            transition: {
                            delay: .4
                            }
                        },
                        }}>
                            <Image height={75} width={75} alt="logo" src={Logo}></Image>
                            </motion.div>
                        </a>
                        </Link>
                        <div className={`${active ? '' : 'hidden'} w-full lg:inline-flex lg:flex-grow lg:w-auto`}>
                            <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
                                {renderedNavs}
                            </div>
                        </div>
            <button className=' inline-flex p-3 hover:bg-blue-800 rounded lg:hidden text-white ml-auto hover:text-blue-800 outline-none' onClick={handleClick}>
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
        </nav>
    )
}

export default NavBar
