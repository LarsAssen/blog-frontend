import React from 'react'
import NavItem from './NavItem'

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


const NavItemList:React.FC = () => {

    const renderedNavs = items.map((item, index) =>{
        return (<NavItem key={index} item={item} />)
    })

  return (
    <div>{renderedNavs}</div>
  )
}

export default NavItemList