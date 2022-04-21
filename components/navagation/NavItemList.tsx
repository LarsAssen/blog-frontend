import React from 'react'
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

    const renderedNavs = items.map((item, index) =>{
        return (<NavItem key={index} item={item} />)
    })

  return (
    <div className='flex flex-col lg:flex-row'>
        {renderedNavs}
    </div>
  )
}

export default NavItemList