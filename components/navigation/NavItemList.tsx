import { motion } from 'framer-motion';
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
    const [selectedTab, setSelectedTab] = useState(items[0]);
    const renderedNavs = items.map((item, index) =>{
        return (
        <div key={index}
        className={item === selectedTab ? "selected" : ""}
        onClick={() => setSelectedTab(item)}>
            <NavItem key={index} item={item} />
            {item === selectedTab ? (
                <motion.div className="h-4 visible opacity-100 caret-blue-50" layoutId="underline" />
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