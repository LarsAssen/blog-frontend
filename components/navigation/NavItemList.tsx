import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import NavItem from './NavItem'

const items = [ 
    {
        title: 'Home',
        link: "/"
    },
    {
        title: 'Blog',
        link: "/blog"
    },
    {
        title: 'About',
        link: "/about"
    },
    {
        title: 'Current Life',
        link: '/about/current-life'
    }
]


const NavItemList:React.FC = () => {
    const router = useRouter();
    const [selectedTab, setSelectedTab] = useState(router.pathname);
    const renderedNavs = items.map((item, index) =>{
        return (
        <div key={index}
        className={item.link === selectedTab ? "selected" : ""}
        onClick={() => setSelectedTab(item.link)}>
            <NavItem className={item.link === selectedTab ? "text-secondary-color" : "text-white"} key={index} item={item} />
            {item.link === selectedTab ? (
                <motion.div className="border border-secondary-color visible opacity-100 text-white" layoutId="underline" />
              ) : null
            }
        </div>
        )
    })

  return (
    <div className='flex flex-col lg:flex-row'>
        {renderedNavs}
    </div>
  )
}

export default NavItemList